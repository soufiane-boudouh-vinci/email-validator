# email-validator

## Étudiant
- **Nom** : Soufiane Boudouh  
- **Email (Vinci)** : soufiane.boudouh@student.vinci.be

## URL du projet
- **GitHub** : <https://github.com/soufiane-boudouh-vinci/email-validator>

## Objectif
- Mettre en place une **CI GitHub Actions** (déclenchée sur **PR → `main`** et sur push `main`).
- Développer via **TDD** une fonction `validateEmail(email: string): boolean`.

## Règles de validation (email)
- Contient au moins **un `@`**.
- Le **domaine** contient **au moins un `.`** et **ne se termine pas** par `.`.
- **Aucun espace** dans l’email.
- **Parties non vides** avant et après `@`.

## Stack & outils
- **Node.js** 20
- **Jest** pour les tests
- **GitHub Actions** pour la CI

## Scripts
```bash
# installation déterministe (CI-friendly)
npm ci

# exécuter les tests
npm test
