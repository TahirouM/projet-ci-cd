# Projet CI/CD - E-commerce Fashion

Application e-commerce Next.js avec pipelines CI/CD automatisés.

## Structure
```
projet-ci-cd/
├── src/
│   ├── app/          # Pages Next.js
│   ├── components/   # Composants React
│   └── data/         # Données statiques
├── .github/workflows/
│   ├── ci.yml        # Pipeline CI
│   └── deploy.yml    # Déploiement continu
└── ansible-playbook/ # Scripts de déploiement
```

## Git Flow
- **main** → Production
- **develop** → Développement
- **feature/** → Issues → develop → main

**Commits normés :**
- `[ADD] feature` - Nouvelle fonctionnalité
- `[FIX] error` - Correction de bug

## CI/CD Pipelines

### CI (.github/workflows/ci.yml)
Déclenché sur push/PR vers `develop` et `main`
- Lint (ESLint)
- Tests unitaires (Jest)
- Build Next.js

### CD (.github/workflows/deploy.yml)
Déclenché sur push vers `main`
- Déploiement Ansible vers Azure VM
- Serveur : 20.199.47.109

## Stack
- **Framework :** Next.js 16 + React 19
- **Styling :** Tailwind CSS 4
- **Testing :** Jest + React Testing Library
- **Deploy :** Ansible + GitHub Actions

## Design
Inspiré de : [Dribbble - Ecommerce Fashion](https://dribbble.com/shots/22938024-Ecommerce-Website-Fashion)

## Commandes
```bash
npm install      # Installation
npm run dev      # Dev local
npm run build    # Build production
npm test         # Tests
npm run lint     # Linting
```
