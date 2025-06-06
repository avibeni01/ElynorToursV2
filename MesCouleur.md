/*
Palette de couleurs Elynor Tours:

1. Rouge vif (#FF0055) - bloc "Confidentialité"
2. Rose fuchsia (#FF4883) - blocs "Sérénité" et "Sur mesure"
3. Orange vif (#FF7700) - bloc principal et footer
4. Rose logo (#FF3366) - partie "tours" du logo
5. Rouge étoile (#FF0033) - étoile dans le logo
6. Bleu clair (#E9ECF5) - fonds neutres

Correspondances Tailwind approximatives:
- Rouge vif: rose-600, red-500
- Rose fuchsia: pink-500
- Orange vif: orange-500
- Rose logo: rose-500
- Rouge étoile: red-600
- Bleu clair: gray-100, blue-50
*/

// Mise en correspondance avec les classes Tailwind:
const elynorColors = {
  'primary': {
    'main': 'orange-500', // Orange vif principal
    'dark': 'orange-600',
    'light': 'orange-400',
  },
  'secondary': {
    'main': 'rose-500', // Rose du logo
    'dark': 'rose-600',
    'light': 'rose-400',
  },
  'accent': {
    'main': 'pink-500', // Rose fuchsia
    'dark': 'pink-600',
    'light': 'pink-400',
  },
  'highlight': {
    'main': 'red-500', // Rouge vif
    'dark': 'red-600', // Rouge étoile
    'light': 'red-400',
  },
  'neutral': {
    'light': 'blue-50', // Bleu clair pour fonds
    'medium': 'gray-100',
    'dark': 'gray-800', // Pour textes
  }
};

// Classes à utiliser pour remplacer les couleurs actuelles:

// Boutons principaux:
// bg-teal-600 -> bg-orange-500
// hover:bg-teal-700 -> hover:bg-orange-600

// Boutons secondaires:
// bg-blue-600 -> bg-rose-500
// hover:bg-blue-700 -> hover:bg-rose-600

// Accents et badges:
// bg-blue-50 -> bg-blue-50 (garder)
// text-blue-600 -> text-rose-500

// Éléments interactifs:
// text-teal-600 -> text-orange-500
// hover:text-teal-700 -> hover:text-orange-600