# YouCode SAS — Évaluation Jour 2 (Format progressif)
## Variables, opérateurs & conditions — « Calculateur de frais de bagages SkyYouCode »

**Durée totale :** 30 minutes
**Format :** Sans notes, sans internet, travail individuel, console uniquement. **Un seul fichier, construit étape par étape.**

### Comment ça marche
Vous allez construire un petit programme en 8 étapes. 

À chaque étape, vous **ajoutez de nouvelles lignes** au fichier — vous ne supprimez ni ne réécrivez jamais le code d'une étape précédente (sauf si une étape vous demande explicitement de mettre à jour la valeur d'une variable). 

Si vous êtes bloqué sur une étape, laissez un commentaire l'indiquant, passez à la suivante, et continuez à construire par-dessus ce que vous avez déjà — les étapes suivantes donnent quand même des points partiels même si une étape précédente est incomplète.

Exécutez votre fichier après chaque étape pour vérifier que le résultat correspond à ce qui est attendu avant de continuer.

### Code de départ (fourni — ne pas modifier ces 4 lignes)
```js
const passengerName = "Yassine";
let weightKg = 27;
let isOversized = true;
let ticketClass = "affaires";
```

---

### Étape 1 — Vérification de la configuration 
Ajoutez des lignes pour afficher un en-tête `"=== Calculateur de frais de bagages pour Yassine ==="`, puis affichez `weightKg`, `isOversized` et `ticketClass`.

**Résultat attendu après cette étape :**
```
=== Calculateur de frais de bagages pour Yassine ===
27 true affaires
```

---

### Étape 2 — Frais de base selon le poids 
Ajoutez un `if / else if / else` qui déclare `let fee` et le fixe selon `weightKg` : **20 kg ou moins → `0`** (franchise gratuite), **21 à 32 kg → `15`**, **au-delà de 32 kg → `40`**. Puis affichez `"Frais de base :", fee`.

**Résultat supplémentaire attendu :**
```
Frais de base : 15
```

---

### Étape 3 — Supplément bagage surdimensionné 
Ajoutez une vérification : si `isOversized` vaut `true`, ajoutez `10` à `fee`. Puis affichez `"Frais après supplément bagage surdimensionné :", fee`.

**Résultat supplémentaire attendu :**
```
Frais après supplément bagage surdimensionné : 25
```

---

### Étape 4 — Ajustement selon la classe avec switch 
Ajoutez un `switch` sur `ticketClass` : `"économique"` → aucun changement, `"affaires"` → soustrayez `5` à `fee`, `"première"` → fixez `fee` à `0` (entièrement exonéré). Puis affichez `"Frais après ajustement de classe :", fee`.

**Résultat supplémentaire attendu :**
```
Frais après ajustement de classe : 20
```

---

### Étape 5 — Valider le poids 
Ajoutez une ligne déclarant `let isValidWeight` qui vaut `true` uniquement si `weightKg` est compris entre `0` et `100` inclus (tout ce qui sort de cette plage est considéré comme une saisie irréaliste/invalide). Affichez-la avec une étiquette.

**Résultat supplémentaire attendu :**
```
Poids valide : true
```
*(Utilisez l'étiquette de votre choix, par ex. `console.log("Poids valide :", isValidWeight);`)*

---

### Étape 6 — Ligne de résumé avec un template literal
Ajoutez un `console.log` utilisant un template literal qui combine `passengerName`, `weightKg` et `fee` en une seule phrase lisible, avec la devise **MAD**.

**Résultat supplémentaire attendu (formulation d'exemple, la vôtre peut varier légèrement) :**
```
Frais de bagage pour Yassine (27kg) : 20 MAD
```

---

### Étape 7 — Exonération diplomatique
Ajoutez une nouvelle ligne `let isDiplomat = true;`, puis un `if` qui, lorsque `isDiplomat` vaut `true`, remplace `fee` par un montant fixe de `0` peu importe ce qui a été calculé avant, et affiche un message signalant cette exonération.

**Résultat supplémentaire attendu :**
```
Exonération diplomatique appliquée, nouveau frais : 0 MAD
```

---

### Étape 8 — Catégorie finale de frais
Ajoutez un dernier `if / else if / else` (ou `switch(true)`) qui affiche `"Aucun frais"` si `fee` vaut exactement `0`, `"Faible"` si `fee` est supérieur à `0` et jusqu'à `20`, ou `"Élevé"` au-delà de `20` — en se basant sur la valeur ACTUELLE de `fee` après le remplacement de l'étape 7.

**Résultat supplémentaire attendu :**
```
Aucun frais
```

---

## Résultat complet attendu dans la console (en exécutant le fichier entier du début à la fin)
```
=== Calculateur de frais de bagages pour Yassine ===
27 true affaires
Frais de base : 15
Frais après supplément bagage surdimensionné : 25
Frais après ajustement de classe : 20
Poids valide : true
Frais de bagage pour Yassine (27kg) : 20 MAD
Exonération diplomatique appliquée, nouveau frais : 0 MAD
Aucun frais
```