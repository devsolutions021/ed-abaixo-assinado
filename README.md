# Abaixo-assinado — Saúde do Noroeste Paulista

App **standalone** (subdomínio) com a página do abaixo-assinado por mais recursos
federais para a saúde de Rio Preto e do Noroeste Paulista. Réplica enxuta da
landpage, usando os mesmos componentes/tema.

React + Vite + TypeScript + Tailwind + Framer Motion.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # produção em dist/
```

## Personalizar

| O quê | Arquivo |
|---|---|
| Links (site principal, WhatsApp da campanha, redes…) | `src/data/links.ts` |
| Textos do abaixo-assinado / meta de assinaturas | `src/data/petition.ts` |
| Cores / tema | `tailwind.config.js` |
| Foto do candidato | `public/images/edinho-retrato.jpg` |

- `LINKS.site` aponta os links "Campanha"/logo para o site principal.
- O formulário valida e **abre o WhatsApp** com os dados (sem backend) — veja
  `src/hooks/usePetitionForm.ts` para integrar a um CRM/planilha.
