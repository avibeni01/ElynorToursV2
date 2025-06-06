// src/app/api/createContact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

    if (!HUBSPOT_API_KEY) {
      console.error('❌ HUBSPOT_API_KEY manquante');
      return NextResponse.json({ error: 'Clé HubSpot manquante' }, { status: 500 });
    }

    // Validate request body first
    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.error('❌ Error parsing request body:', error);
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }

    // Validate required fields
    if (!body.email || !body.firstName || !body.lastName) {
      console.error('❌ Missing required fields:', body);
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      preferences_client,
      le_v_hicule_ne_roule_pas_le_chabat,
      avez_vous_une_visa_premi_re_,
      age,
      nationalite,
    } = body;

    console.log('🟢 Données reçues pour création de contact:', JSON.stringify(body, null, 2));

    // 🔍 Vérifie si le contact existe déjà
    const searchRes = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/search`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'email',
                  operator: 'EQ',
                  value: email,
                },
              ],
            },
          ],
          properties: ['email'],
        }),
      }
    );

    if (!searchRes.ok) {
      console.error('❌ Erreur lors de la recherche de contact:', searchRes.status);
      const errorText = await searchRes.text();
      console.error('Response:', errorText);
      return NextResponse.json({ 
        error: 'Erreur lors de la recherche de contact',
        detail: errorText 
      }, { status: searchRes.status });
    }

    const searchData = await searchRes.json();

    if (searchData?.results?.length > 0) {
      const existingContactId = searchData.results[0].id;
      console.log('🟡 Contact déjà existant. ID :', existingContactId);
      return NextResponse.json({ success: true, contactId: existingContactId });
    }

    // ✳️ Créer le contact s'il n'existe pas
    const contactRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          firstname: firstName,
          lastname: lastName,
          email,
          phone: phone || '',
          preferences_client: preferences_client || '',
          le_v_hicule_ne_roule_pas_le_chabat: le_v_hicule_ne_roule_pas_le_chabat || false,
          avez_vous_une_visa_premi_re_: avez_vous_une_visa_premi_re_ || false,
          age: age || '',
          nationalite: nationalite || 'Français',
        },
      }),
    });

    if (!contactRes.ok) {
      console.error('❌ Erreur HubSpot API:', contactRes.status);
      const errorText = await contactRes.text();
      console.error('Response:', errorText);
      return NextResponse.json({
        error: 'Erreur création contact',
        detail: errorText,
      }, { status: contactRes.status });
    }

    let contactData;
    try {
      contactData = await contactRes.json();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to parse response';
      console.error('🔴 Error parsing contact response:', errorMessage);
      return NextResponse.json({
        error: 'Error parsing HubSpot response',
        detail: errorMessage
      }, { status: 500 });
    }

    if (!contactData || !contactData.id) {
      console.error('🔴 Pas d\'ID dans la réponse:', contactData);
      return NextResponse.json({
        error: 'Pas d\'ID de contact dans la réponse',
        detail: contactData,
      }, { status: 500 });
    }

    console.log('✅ Contact créé avec succès:', contactData.id);
    
    return NextResponse.json({ success: true, contactId: contactData.id });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('❌ Erreur générale création contact:', errorMessage);
    return NextResponse.json({
      error: 'Erreur générale HubSpot',
      detail: errorMessage
    }, { status: 500 });
  }
}