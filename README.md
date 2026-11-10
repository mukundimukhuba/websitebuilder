# SwagStack Studio

Multi-tenant website customizer SaaS with a cyber / Pixably-inspired editor.

- Studio app: `/studio`
- Published customer sites: `/s/:slug`
- Setup + env docs: [`docs/SWAGSTACK.md`](docs/SWAGSTACK.md)
- DB migration: [`supabase/swagstack_schema.sql`](supabase/swagstack_schema.sql)

```bash
npm install
cp .env.example .env   # fill VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY
npm run dev
```

Open `http://localhost:5173/studio`.

```bash
npm test
npm run build
```
