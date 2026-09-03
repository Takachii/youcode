## Étapes bonus — Un rapport hebdomadaire (facultatif)

Ces deux étapes ne sont **pas obligatoires** et **ne comptent pas dans les 30 minutes**. 
Elles forment un **scénario séparé et indépendant** (un petit « rapport de fréquentation hebdomadaire »), donc elles peuvent être notées seules, peu importe comment se sont passées les étapes principales.

**Nouvelles lignes de départ pour le bonus (à ajouter, ne touchez à rien au-dessus) :**
```js
let days = 3;
let customersPerDay = 4;
```

### Étape bonus 9 — Chaque client, chaque jour 
Pour chaque jour de `1` à `days`, et pour chaque client de `1` à `customersPerDay` ce jour-là, affichez un message signalant que le client a utilisé le distributeur (incluez le numéro du jour et le numéro du client).

**Résultat attendu :**
```
Day 1 - Customer 1 visited the ATM.
Day 1 - Customer 2 visited the ATM.
Day 1 - Customer 3 visited the ATM.
Day 1 - Customer 4 visited the ATM.
Day 2 - Customer 1 visited the ATM.
Day 2 - Customer 2 visited the ATM.
Day 2 - Customer 3 visited the ATM.
Day 2 - Customer 4 visited the ATM.
Day 3 - Customer 1 visited the ATM.
Day 3 - Customer 2 visited the ATM.
Day 3 - Customer 3 visited the ATM.
Day 3 - Customer 4 visited the ATM.
```

### Étape bonus 10 — Compter les opérations complètes 

Les clients avec un numéro impair reçoivent seulement le message « a utilisé le distributeur » de l'Étape bonus 9 — rien d'autre ne se passe pour eux. Les clients avec un numéro pair comptent en plus comme une « opération complète » : pour chacun d'eux, augmentez un total qui s'accumule et affichez un message signalant l'opération complète (avec le jour et le numéro du client). Une fois tous les jours et tous les clients traités, affichez le total final, avec une étiquette claire.

**Résultat attendu :**
```
Day 1 - Customer 1 visited the ATM.
Day 1 - Customer 2 visited the ATM.
Day 1 - Customer 2 performed a full-service transaction.
Day 1 - Customer 3 visited the ATM.
Day 1 - Customer 4 visited the ATM.
Day 1 - Customer 4 performed a full-service transaction.
Day 2 - Customer 1 visited the ATM.
Day 2 - Customer 2 visited the ATM.
Day 2 - Customer 2 performed a full-service transaction.
Day 2 - Customer 3 visited the ATM.
Day 2 - Customer 4 visited the ATM.
Day 2 - Customer 4 performed a full-service transaction.
Day 3 - Customer 1 visited the ATM.
Day 3 - Customer 2 visited the ATM.
Day 3 - Customer 2 performed a full-service transaction.
Day 3 - Customer 3 visited the ATM.
Day 3 - Customer 4 visited the ATM.
Day 3 - Customer 4 performed a full-service transaction.
Total full-service transactions across all days: 6
```

---


**Si les étapes bonus sont faites, ajoutez (comme bloc séparé après ce qui précède) :**
```
Day 1 - Customer 1 visited the ATM.
Day 1 - Customer 2 visited the ATM.
Day 1 - Customer 2 performed a full-service transaction.
Day 1 - Customer 3 visited the ATM.
Day 1 - Customer 4 visited the ATM.
Day 1 - Customer 4 performed a full-service transaction.
Day 2 - Customer 1 visited the ATM.
Day 2 - Customer 2 visited the ATM.
Day 2 - Customer 2 performed a full-service transaction.
Day 2 - Customer 3 visited the ATM.
Day 2 - Customer 4 visited the ATM.
Day 2 - Customer 4 performed a full-service transaction.
Day 3 - Customer 1 visited the ATM.
Day 3 - Customer 2 visited the ATM.
Day 3 - Customer 2 performed a full-service transaction.
Day 3 - Customer 3 visited the ATM.
Day 3 - Customer 4 visited the ATM.
Day 3 - Customer 4 performed a full-service transaction.
Total full-service transactions across all days: 6
```