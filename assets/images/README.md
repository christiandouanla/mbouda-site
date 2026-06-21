# Images à rechercher — Mbouda Patrimoine

Le site utilise par défaut des URL Unsplash en placeholder pour livrer un rendu
immédiat. Pour une version définitive de niveau musée, remplacez ces URLs par
des photos réelles libres de droits ou commandées localement.

## Mots-clés de recherche recommandés (Pexels / Unsplash / archives ethno)

### Hero / paysages
- "Bamboutos mountains Cameroon"
- "Western Cameroon highlands"
- "Mbouda landscape green hills"
- "African volcanic plateau mist"

### Chefferies & architecture
- "Bamileke chiefdom Cameroon"
- "Bandjoun palace conical roof"
- "Bamendjou palais royal"
- "Cameroon traditional bamboo house carved door"

### Masques & sculpture
- "Bamileke mask wood carving"
- "Kuosi elephant mask beaded"
- "African beaded throne Cameroon"
- "Grassfields mask ceremonial"

### Tissus & artisanat
- "Ndop fabric indigo Cameroon"
- "African weaver loom traditional"
- "Bamileke beadwork calabash"
- "Toghu fabric Cameroon embroidery"

### Danses & cérémonies
- "Bamileke dance ceremony"
- "Cameroon traditional drumming"
- "Mekum dance Grassfields"
- "African royal funeral procession"

### Gastronomie
- "Cameroon taro yellow sauce"
- "Nkui Bamileke dish"
- "Koki beans banana leaves"
- "Cameroon couscous corn"

### Marché & vie quotidienne
- "Mbouda market Cameroon"
- "West Cameroon farmer potato"
- "Cameroon highland coffee farmer"

## Architecture du dossier
```
public/
├── index.html
├── base.html        (template référence)
├── base.css         (design system + styles communs)
├── histoire.html  + histoire.css
├── chefferies.html + chefferies.css
├── artisanat.html  + artisanat.css
├── danses.html     + danses.css
├── gastronomie.html + gastronomie.css
├── festivals.html  + festivals.css
├── galerie.html    + galerie.css
├── contact.html    + contact.css
├── js/main.js
└── assets/images/  (à remplir avec vos photos finales)
```

Pour utiliser des images locales : placez-les dans `public/assets/images/`
et remplacez les URLs Unsplash dans les fichiers HTML par
`assets/images/votre-photo.jpg`.
