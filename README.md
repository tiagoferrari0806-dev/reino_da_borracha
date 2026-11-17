# Site da Reino da Borracha

Landing page em Vite + React + TypeScript + Tailwind, pré-renderizada em HTML estático
(`vite-react-ssg`) para o Google ler todo o conteúdo. Páginas: `/` e `/privacidade`.

## Comandos

```bash
npm install        # instala as dependências (só na primeira vez)
npm run dev        # site local em http://localhost:5173
npm run build      # gera a versão final em dist/
npm run preview    # serve o dist/ em http://localhost:4173
npm run images     # regenera fotos, imagem de compartilhamento e favicons
```

## Onde alterar cada coisa

| O quê | Onde |
|---|---|
| WhatsApp, telefone, mensagens prontas dos botões | `src/config.ts` (`WHATSAPP_NUMBER`, `WA_MESSAGES`) |
| Horário de funcionamento | `src/config.ts` (`HOURS`) — atualiza o aviso "Aberto agora", a tabela e o Google (JSON-LD) |
| Endereço, coordenadas, CNPJ, slogan | `src/config.ts` (`ADDRESS`, `GEO`, `COMPANY`) |
| Redes sociais, nota e nº de avaliações do Google, vídeo do YouTube | `src/config.ts` (`SOCIAL`, `GOOGLE`, `YOUTUBE_VIDEO_ID`) |
| Textos de cada seção | `src/sections/*.tsx` (um arquivo por seção) |
| Depoimentos | `src/sections/Reviews.tsx` |
| Linhas de produtos e etiquetas | `src/sections/ProductTree.tsx` |
| Fotos da grade de estoque | `src/sections/Structure.tsx` |
| Título e descrição para o Google | `src/lib/seo.ts` |
| Política de privacidade | `src/pages/Privacy.tsx` |
| Cores e fontes | `src/styles.css` (bloco `@theme`) |

### Trocar ou adicionar fotos

1. Coloque o arquivo em `assets/fotos/` (ou a logo nova em `assets/logo/logo-reino-da-borracha.png`).
2. Rode `npm run images`.
3. Use o nome do arquivo (sem extensão) no componente `<Picture name="...">`.

## Publicação

Cada push na branch `main` publica automaticamente na Vercel.
Enquanto o site estiver só no endereço `*.vercel.app`, ele envia `noindex` para o Google
não indexar a versão de demonstração (`vercel.json`).
