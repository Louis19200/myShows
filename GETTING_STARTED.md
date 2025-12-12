# Instructions de lancement - Onglet Explorer

## 🎬 Démarrage rapide

### 1. Accéder au répertoire myShows
```bash
cd c:\Users\Louis\Documents\angular\ionic\myShows
```

### 2. Installer les dépendances (si nécessaire)
```bash
npm install
```

### 3. Lancer l'application en développement
```bash
ionic serve
```

L'application s'ouvre automatiquement sur http://localhost:4200/

### 4. Accéder à l'onglet Explorer
- Cliquez sur l'onglet 2 ou "Explorer" en bas de l'écran
- Vous verrez la nouvelle interface de recherche

## 🔍 Tester la fonctionnalité

### Première recherche
1. Cliquez dans la barre de recherche
2. Tapez un titre populaire : "The Matrix", "Game of Thrones", "Inception"
3. Attendez 500ms (débounce automatique)
4. Les résultats s'affichent dans la liste

### Afficher les détails
1. Cliquez sur un résultat de la liste
2. Une vue détaillée s'affiche avec :
   - L'affiche du film/série
   - Titre, année, type
   - Genre, réalisateur, acteurs
   - Synopsys complet
   - Note IMDb

### Revenir à la liste
1. Cliquez le bouton X en haut à droite
2. Ou effectuez une nouvelle recherche
3. Réinitialisez avec le bouton X dans la barre de recherche

## 📱 Tests sur différents appareils

### Mobile (Chrome DevTools)
```
1. Appuyez sur F12
2. Cliquez sur l'icône device (Ctrl+Shift+M)
3. Sélectionnez un modèle mobile
4. Actualisez la page (F5)
```

### Responsive
- Redimensionnez le navigateur pour voir les différentes mises en page
- Mobile: < 576px
- Tablette: 576px - 992px
- Desktop: > 992px

## 🐛 Dépannage

### La recherche ne fonctionne pas
**Problème:** Erreur réseau ou API indisponible  
**Solution:** 
- Vérifiez votre connexion Internet
- Vérifiez que l'API OMDb est accessible
- Ouvrez la console (F12) pour voir les erreurs

### Les affiches ne s'affichent pas
**Problème:** Certains titres n'ont pas d'affiche dans OMDb  
**Solution:** C'est normal, un placeholder s'affiche à la place

### Aucun résultat
**Problème:** Titre mal orthographié ou inexistant  
**Solution:** Essayez avec des titres populaires

### Performance lente
**Problème:** Beaucoup de requêtes API  
**Solution:** La recherche a un débounce de 500ms, attendez avant de continuer

## 🛠️ Développement

### Modifier la clé API (si nécessaire)
Fichier : `src/app/services/omdb.service.ts`
```typescript
private apiKey = 'eb1e3ea9'; // ← Remplacez par votre clé
```

### Ajouter des champs d'affichage
Modifier le template : `src/app/tab2/tab2.page.html`

### Modifier le style
Éditer : `src/app/tab2/tab2.page.scss`

### Ajouter des filtres
Modifier le composant : `src/app/tab2/tab2.page.ts`

## 📦 Build pour la production

### Compilation optimisée
```bash
ng build --configuration production
```

### Déploiement Ionic
```bash
ionic build
ionic deploy  # Si configuré avec Ionic Deploy
```

## 🧪 Tests unitaires

### Exécuter les tests
```bash
ng test
```

### Tests disponibles
- Service OMDb (création, recherche, détails)
- Composant Tab2 (logique de recherche)

## 🔐 Sécurité

### Clé API
- La clé API est en frontend (visible)
- Envisagez un backend pour la production
- Limite de requêtes: 1000/jour

### CORS
- OMDb autorise les requêtes cross-origin
- Pas de problèmes de CORS attendus

## 📊 Performance

### Optimisations incluses
- Débounce 500ms pour les recherches
- Images optimisées avec `object-fit: cover`
- Lazy loading des détails

### Monitoring
- Vérifiez l'onglet Network (F12) pour les requêtes
- Console pour les erreurs
- Performance tab pour les métriques

## 🎓 Ressources

### API OMDb
- Site : https://www.omdbapi.com/
- Documentation : https://www.omdbapi.com/?i=tt3896198&apikey=eb1e3ea9
- Limites : 1000 requêtes/jour (gratuit)

### Ionic Components
- `ion-searchbar` : https://ionicframework.com/docs/api/searchbar
- `ion-button` : https://ionicframework.com/docs/api/button
- `ion-card` : https://ionicframework.com/docs/api/card
- `ion-list` : https://ionicframework.com/docs/api/list

### Angular
- HttpClient : https://angular.io/guide/http
- Dependency Injection : https://angular.io/guide/dependency-injection
- RxJS : https://rxjs.dev/

## ✨ Fonctionnalités clés

| Fonctionnalité | Implémentée | Détails |
|---|---|---|
| Recherche temps réel | ✅ | Débounce 500ms |
| Affichage résultats | ✅ | Affiche, titre, année, type |
| Détails complets | ✅ | 10+ champs |
| Responsive design | ✅ | Mobile, tablette, desktop |
| Gestion erreurs | ✅ | Messages clairs |
| Loading state | ✅ | Spinner animé |
| Empty state | ✅ | Message informatif |
| Tests unitaires | ✅ | Service et composant |

## 🎉 Conclusion

L'onglet Explorer est maintenant prêt à l'emploi ! 

Profitez de la recherche facile de films et séries via OMDb API.

Pour toute question, consultez les guides détaillés :
- `EXPLORER_GUIDE_UTILISATION.md` - Guide utilisateur
- `OMDB_SERVICE_GUIDE.md` - Guide développeur
- `IMPLEMENTATION_SUMMARY.md` - Résumé technique
