# Caldera

Premium cold plunge, sauna, and recovery equipment storefront (Next.js + Shopify-ready).

**Visual reference:** [Plunge](https://plunge.com/) — bright DTC wellness shell (sticky top nav, cyan accents, coral CTAs, rounded product cards, trust strip, dark footer). Caldera catalog, copy, and logo remain original.

- Repo: https://github.com/arcmonay/caldera
- Live: https://caldera-seven.vercel.app

## Catalog scripts

```bash
npm run catalog
npm run catalog:csv
```

Until Shopify credentials are connected, the site runs on the local catalog and browser cart.

## Shopify setup

1. Create a Shopify store.
2. **Products → Import** and upload `data/shopify-products.csv`.
3. Create a Storefront API token.
4. Copy `.env.example` → `.env.local` and fill `SHOPIFY_STORE_DOMAIN` / `SHOPIFY_STOREFRONT_TOKEN`.

© 2025 Caldera
