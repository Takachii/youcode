# YouCode SAS — Évaluation Jour 3 (Format progressif)
## Boucles (for/while, break, continue) — « Simulateur de retrait SafeYouCode »

**Durée totale :** 30 minutes
**Format :** Sans notes, sans internet, travail individuel, console uniquement. **Un seul fichier, construit étape par étape.**
**Autorisé :** Tout ce qui a été vu aux Jours 1-2 (variables, opérateurs, conditions) plus `for`/`while`, `break`, `continue`.
 Rien des jours suivants (pas de fonctions, tableaux, objets).

### Comment ça marche
Vous allez construire un simulateur de distributeur (ATM) en 8 étapes. 
Chaque étape décrit **un comportement attendu et un résultat attendu** — c'est à vous de choisir les outils (boucles, conditions, opérateurs) pour y arriver. Il existe souvent plusieurs façons correctes d'obtenir le même résultat.


Exécutez votre fichier après chaque étape pour vérifier que le résultat correspond à ce qui est attendu avant de continuer.

### Code de départ (fourni — ne pas modifier ces 2 lignes)
```js
let balance = 500;
let totalAttempts = 10;
```


### Étape 1 — Vérification de la configuration 
Affichez un en-tête `"=== Simulateur de retrait au distributeur ==="`, puis affichez `balance` et `totalAttempts`.

**Résultat attendu après cette étape :**
```
=== Simulateur de retrait au distributeur ===
500 10
```

---

### Étape 2 — Traiter chaque tentative de retrait 
Pour chaque numéro de tentative de `1` à `totalAttempts`, le montant demandé est le numéro de tentative multiplié par `15`. 
Affichez le numéro de chaque tentative et son montant demandé.

**Résultat supplémentaire attendu :**
```
Attempt 1 - Requested amount: 15
Attempt 2 - Requested amount: 30
Attempt 3 - Requested amount: 45
Attempt 4 - Requested amount: 60
Attempt 5 - Requested amount: 75
Attempt 6 - Requested amount: 90
Attempt 7 - Requested amount: 105
Attempt 8 - Requested amount: 120
Attempt 9 - Requested amount: 135
Attempt 10 - Requested amount: 150
```


---

### Étape 3 — Tentatives invalides 
Chaque 4ème tentative (numéro divisible par 4) est invalide et annulée. 
Pour une tentative invalide : ne la traitez pas comme une demande normale — affichez plutôt un message signalant qu'elle a été ignorée, et passez à la tentative suivante.

**Résultat supplémentaire attendu (remplace le résultat de l'Étape 2, car le comportement a changé) :**
```
Attempt 1 - Requested amount: 15
Attempt 2 - Requested amount: 30
Attempt 3 - Requested amount: 45
Attempt 4 - Invalid withdrawal request, skipped.
Attempt 5 - Requested amount: 75
Attempt 6 - Requested amount: 90
Attempt 7 - Requested amount: 105
Attempt 8 - Invalid withdrawal request, skipped.
Attempt 9 - Requested amount: 135
Attempt 10 - Requested amount: 150
```

---

### Étape 4 — Fonds insuffisants 
Si un montant demandé (valide) est supérieur au solde actuel, affichez un message signalant que les fonds sont insuffisants, et toute la simulation doit s'arrêter immédiatement — aucune autre tentative ne doit être traitée après ce point.

**Résultat supplémentaire attendu à ce stade :** 
```
.
.
Attempt 33 - Requested amount: 495
Attempt 34 - Insufficient funds. Stopping simulation.
```

---

### Étape 5 — Retraits réussis
Quand un montant demandé EST disponible, le solde doit diminuer de ce montant, et un message doit confirmer le retrait réussi ainsi que le nouveau solde.

**Résultat supplémentaire attendu (trace complète mise à jour) :**
```
Attempt 1 - Requested amount: 15
Attempt 1 - Withdrawal successful. New balance: 485
Attempt 2 - Requested amount: 30
Attempt 2 - Withdrawal successful. New balance: 455
Attempt 3 - Requested amount: 45
Attempt 3 - Withdrawal successful. New balance: 410
Attempt 4 - Invalid withdrawal request, skipped.
Attempt 5 - Requested amount: 75
Attempt 5 - Withdrawal successful. New balance: 335
Attempt 6 - Requested amount: 90
Attempt 6 - Withdrawal successful. New balance: 245
Attempt 7 - Requested amount: 105
Attempt 7 - Withdrawal successful. New balance: 140
Attempt 8 - Invalid withdrawal request, skipped.
Attempt 9 - Requested amount: 135
Attempt 9 - Withdrawal successful. New balance: 5
Attempt 10 - Requested amount: 150
Attempt 10 - Insufficient funds. Stopping simulation.
```

---

### Étape 6 — Résumé final 
Une fois toutes les tentatives traitées (ou la simulation arrêtée plus tôt), affichez une phrase de résumé qui inclut le solde final et le nombre total de tentatives autorisées, avec la devise **MAD**.

**Résultat supplémentaire attendu (formulation d'exemple, la vôtre peut varier légèrement) :**
```
Simulation terminée. Solde final : 5 MAD après 10 tentatives autorisées.
```

---

### Étape 7 — Bonus VIP 
Ajoutez une ligne `let isVIP = true;`. 
Si le client est VIP, le solde doit augmenter de `100`, et un message doit signaler le bonus ainsi que le nouveau solde obtenu.

**Résultat supplémentaire attendu :**
```
Bonus VIP appliqué, nouveau solde : 105 MAD
```

---

### Étape 8 — Catégorie finale du solde 
En vous basant sur le solde ACTUEL (après l'Étape 7), classez-le : 
`100` ou moins → `"Solde faible"`, 
entre `101` et `400` → `"Solde moyen"`, 
au-dessus de `400` → `"Solde élevé"`. 
Affichez le résultat.

**Résultat supplémentaire attendu :**
```
Solde moyen
```


## Résultat complet attendu dans la console (en exécutant le fichier entier du début à la fin)
```
=== Simulateur de retrait au distributeur ===
500 10
Attempt 1 - Requested amount: 15
Attempt 1 - Withdrawal successful. New balance: 485
Attempt 2 - Requested amount: 30
Attempt 2 - Withdrawal successful. New balance: 455
Attempt 3 - Requested amount: 45
Attempt 3 - Withdrawal successful. New balance: 410
Attempt 4 - Invalid withdrawal request, skipped.
Attempt 5 - Requested amount: 75
Attempt 5 - Withdrawal successful. New balance: 335
Attempt 6 - Requested amount: 90
Attempt 6 - Withdrawal successful. New balance: 245
Attempt 7 - Requested amount: 105
Attempt 7 - Withdrawal successful. New balance: 140
Attempt 8 - Invalid withdrawal request, skipped.
Attempt 9 - Requested amount: 135
Attempt 9 - Withdrawal successful. New balance: 5
Attempt 10 - Requested amount: 150
Attempt 10 - Insufficient funds. Stopping simulation.
Simulation terminée. Solde final : 5 MAD après 10 tentatives autorisées.
Bonus VIP appliqué, nouveau solde : 105 MAD
Solde moyen
```