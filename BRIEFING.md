# Projeto: site da Reino da Borracha

> Claude Code: leia este arquivo inteiro e as imagens em `assets/` antes de começar.
> Primeiro me mostre um plano e tire as dúvidas da seção "Pendências". Só comece a programar depois que eu aprovar.

---

## 1. Objetivo

Criar e publicar a landing page de uma página da **Reino da Borracha**, loja de produtos de borracha, correias, mangueiras e EPIs em Goiânia – GO.

- **Objetivo principal:** gerar contatos pelo WhatsApp.
- **Objetivos secundários:** aparecer no Google em buscas locais ("correias Goiânia", "mangueiras Goiânia", "mangueira hidráulica Goiânia", "lona Goiânia", "EPI Goiânia", "cinta de amarração Goiânia") e passar credibilidade (25+ anos, estrutura grande, revenda Continental, nota 4,9).

## 2. Público

Compradores de indústrias, construtoras, oficinas, transportadoras, produtores rurais e consumidores finais de Goiânia e região. **A maioria acessa pelo celular**, então o layout é pensado primeiro para o celular.

---

## 3. Tecnologia e publicação

- **Stack:** Vite + React + TypeScript + Tailwind CSS. Use ícones do `lucide-react`.
- **SEO em site React:** o conteúdo precisa estar no HTML final, e não só aparecer depois que o JavaScript roda. Faça pré-renderização estática (por exemplo `vite-react-ssg` ou outra solução equivalente). Referência do problema: o site do JM Haras, feito em React puro, entrega ao Google só o título, sem nenhum texto.
- **Animações** leves, com CSS e IntersectionObserver. Respeite `prefers-reduced-motion`.
- **Páginas:** `/` (landing) e `/privacidade` (política de privacidade).
- **Repositório:** GitHub, repositório `reino-da-borracha-site`. Já tenho conta. Me oriente no login, se for preciso.
- **Hospedagem:** Vercel, com deploy automático a cada push na branch `main`. Já tenho conta.
- **Domínio:** `reinodaborracha.com.br`, registrado no Registro.br. Me oriente passo a passo a apontar o DNS para a Vercel, com e sem `www` e com HTTPS.
- **Fluxo:** antes de publicar, rode o site localmente (`npm run dev`) para eu aprovar. Faça commits pequenos e com mensagens claras.

---

## 4. Arquivos fornecidos

### Logo
- `assets/logo/logo-reino-da-borracha.png`: retângulo com cantos arredondados, onda vermelha em cima, faixa creme no meio com "Reino da Borracha" em azul-marinho e onda azul embaixo. O PNG tem fundo transparente nos cantos.
- **Nunca** distorça, recorte ou mude as cores da logo.
- O arquivo tem resolução baixa (848×564, ampliado de um original pequeno). Se a logo ficar borrada no hero, me avise. Vou tentar conseguir a versão original em alta (SVG ou PDF).

### Fotos (`assets/fotos/`)
Converta para WebP/AVIF em vários tamanhos (`srcset`), com `loading="lazy"` (menos no hero), `width`/`height` definidos e `object-fit: cover`. As fotos têm cerca de 680px de largura, então **não estique além disso**. No hero, use a foto como fundo com overlay escuro, onde a resolução baixa não aparece.

| Arquivo | O que mostra | Onde usar |
|---|---|---|
| `fachada-principal.webp` | Fachada frontal com letreiros, vans da loja e setores (Lonas e Plásticos, Rodas e Rodízios, Correias, Mangueiras, Polias de Ferro e Acoplamentos) | Fundo do hero (com overlay azul-marinho) e Open Graph |
| `fachada-esquina.webp` | Prédio da loja visto da esquina | Seção Sobre |
| `estoque-correias-mangotes.webp` | Corredores com correias, mangotes e mangueiras de grande porte | Destaque Continental / Linha Industrial |
| `estoque-mangueiras-prateleiras.webp` | Prateleiras azuis cheias de rolos de mangueira | Destaque / Linha Industrial |
| `maquinario-prensagem-mangueiras.webp` | Prensas Frensso para montar mangueiras hidráulicas | Seção "Montagem de mangueiras" |
| `estoque-geral-rolos.webp` | Galpão com rolos de mangueiras, plásticos e caixas | Seção Estrutura |
| `estoque-lonas.webp` | Pallets de lonas azuis ("Estoque Lonas") | Linha Agro / Estrutura |
| `estoque-cintas-catracas.webp` | Cintas de amarração e catracas coloridas | Estrutura / Linha Transporte |
| `estoque-conexoes-engates.webp` | Prateleiras com conexões e engates metálicos | Estrutura / Linha Industrial |
| `estoque-cones-sinalizacao.webp` | Cones de sinalização em pallets | Linha Segurança / Estrutura |

`alt` de todas as fotos: descritivo e em português (ex.: "Estoque de lonas azuis da Reino da Borracha em Goiânia").

---

## 5. Dados da empresa

- **Nome:** Reino da Borracha
- **Razão social:** REINO DA BORRACHA LTDA · CNPJ 04.451.758/0001-05
- **Endereço:** Av. Castelo Branco, 2620 – St. Campinas, Goiânia – GO, 74513-050
- **Telefone fixo:** (62) 3291-7200 → `tel:+556232917200`
- **WhatsApp:** (62) 9 3291-7200 → `https://wa.me/5562932917200`. Guarde o número em uma constante única (`src/config.ts`).
- **Horário:**
  - Segunda a sexta: 07:00 – 18:00
  - Sábado: 08:00 – 12:00
  - Domingo: fechado
- **Redes:**
  - Instagram: https://www.instagram.com/reinodaborracha/
  - YouTube: https://www.youtube.com/@ReinodaBorracha
  - TikTok: https://www.tiktok.com/@reinodaborracha
  - LinkedIn: https://www.linkedin.com/in/reino-da-borracha-mangueira-correias-e-epis-a64434427
- **Avaliações no Google:** nota 4,9, 156 avaliações. Link: https://www.google.com/search?q=reino+da+borracha (simplificado; leva ao painel da loja no Google).
- **Experiência:** mais de 25 anos de mercado.
- **Marca:** revenda autorizada Continental no Centro-Oeste.
- **Slogan da fachada:** "O Senhor é meu pastor e nada me faltará!"
- **Produtos:** correias industriais, mangueiras, mangotes, mangueiras hidráulicas, polias de ferro, acoplamentos, rodas e rodízios, lonas e plásticos, piso boiadeiro, cintas de amarração e catracas, conexões e engates, borracha líquida, botas e calçados de segurança, EPIs, cones e sinalização, ferramentas e acessórios industriais.
- **Segmentos atendidos:** indústria, construção civil, comércio, agronegócio, transporte e manutenção em geral.

---

## 6. Visual

### Paleta (tirada da logo)
- Azul da marca: `#083c87`
- Fundo principal: azul-marinho muito escuro `#060d1a`, alternando entre as seções com `#0a1628` e `#0d1b33`
- Destaque azul: degradê de `#3b6fd8` a `#083c87`
- Azul-claro (rótulos e detalhes): `#8fb4ff`
- Vermelho de apoio: `#df3b39`. **Usar com moderação:** faixa no topo do hero, selo "MAIS PROCURADO", aspas dos depoimentos, hover de links e detalhes das ondas.
- Creme da logo: `#fdfcea`
- Texto principal `#eef4ff`; texto secundário `#a9b8d0`
- Bordas: `rgba(143,180,255,.28)`

### Tipografia
- Títulos em serifada robusta, combinando com a logo: **DM Serif Display**
- Textos em **Montserrat**
- Rótulos pequenos acima de cada título em azul-claro, maiúsculas e letras bem espaçadas

### Estilo
- Sofisticado, moderno e confiável, inspirado no site do JM Haras (seções centralizadas, rótulos espaçados, molduras finas), mas em azul.
- Conteúdo centralizado em uma coluna de no máximo ~1120px, com bordas laterais finas em azul discreto.
- Abaixo dos títulos principais, uma pequena linha ondulada em vermelho e azul, lembrando as ondas da logo.
- Cards com borda azul fina, cantos de 8px (como a logo) e fundo um pouco mais claro que o da página.
- Botão principal: degradê azul, texto branco em maiúsculas e letras espaçadas, com brilho leve no hover.
- Botão secundário: contorno creme e texto creme.
- Animação suave de entrada (fade + leve subida) ao rolar.
- Barra superior fixa, com fundo azul-marinho translúcido e desfoque: logo à esquerda (~40px de altura), links para as seções no centro e botão "WhatsApp" à direita. No celular, os links vão para um menu hambúrguer.
- Botão flutuante redondo do WhatsApp, em degradê azul, no canto inferior direito.

---

## 7. Seções da página

### 1. Hero
- Fundo: `fachada-principal.webp` com overlay em degradê azul-marinho (escuro o bastante para o texto ler bem), mais um efeito sutil de névoa vermelha no topo e azul embaixo.
- Faixa vermelha fina no topo, centralizada.
- Logo grande e centralizada (~320px no desktop, ~240px no celular), com leve brilho azul atrás. O H1 "Reino da Borracha" fica no HTML para SEO e acessibilidade (pode ser visualmente oculto).
- Rótulo: "GOIÂNIA · GOIÁS · HÁ MAIS DE 25 ANOS"
- Texto: "Correias, mangueiras, polias, lonas e EPIs para indústria, construção, comércio e agronegócio. Revenda autorizada Continental no Centro-Oeste."
- Botões: "Solicitar orçamento" (azul, WhatsApp) e "Ver produtos" (contorno creme, rola até os produtos).
- Indicador de horário dinâmico: "● Aberto agora · fecha às 18h" em verde, ou "● Fechado · abre segunda às 7h" em cinza. Calcule pelo fuso `America/Sao_Paulo` e pelo horário da seção 5.
- Três destaques numéricos: "25+ anos de mercado", "4,9 ★ no Google", "Continental · revenda autorizada".

### 2. Sobre
- Foto `fachada-esquina.webp` ao lado do texto no desktop; foto em cima no celular.
- Rótulo: "REINO DA BORRACHA"
- Título: "Tradição no balcão. Compromisso com a qualidade."
- Texto: "Localizado no Setor Campinas, em Goiânia, o Reino da Borracha tem mais de 25 anos de experiência no fornecimento de produtos industriais, equipamentos de proteção individual e soluções para manutenção, com atendimento especializado para empresas, profissionais e consumidores."

### 3. Nosso destaque: Revenda Continental
- Rótulo: "NOSSO DESTAQUE"
- Título: "REVENDA CONTINENTAL"
- Texto: "Correias e soluções de transmissão de potência com a procedência de uma das marcas mais reconhecidas do mundo, com estoque e pronta entrega em Goiânia."
- Galeria em molduras azuis, com legenda em azul-claro e maiúsculas: `estoque-correias-mangotes.webp` ("Correias e mangotes") e `estoque-mangueiras-prateleiras.webp` ("Mangueiras"), lado a lado.
- Não use o logotipo da Continental sem confirmação (ver Pendências).

### 4. Montagem de mangueiras hidráulicas
- Rótulo: "SERVIÇO"
- Título: "Montagem de mangueiras na hora"
- Texto: "Contamos com prensas próprias para montar e prensar mangueiras hidráulicas sob medida, com terminais e conexões para máquinas agrícolas, industriais e da construção." (confirmar, ver Pendências)
- Foto `maquinario-prensagem-mangueiras.webp` em moldura azul.
- Botão: "Orçar montagem pelo WhatsApp", com mensagem pré-preenchida.

### 5. Nossas linhas de produtos (em formato de árvore, como uma genealogia)
- Rótulo: "LINHAS E SOLUÇÕES"
- Título: "Nossas linhas de produtos"
- Subtítulo em azul-claro: "Indústria · Construção · Comércio · Agro · Transporte · Manutenção"
- À esquerda, um card principal com borda azul mais forte e leve brilho azul: rótulo "FORNECEDOR", a logo e "Goiânia · GO".
- Ligado a ele por linhas azuis, dois cards de linha:
  - **LINHA INDUSTRIAL** (sub-cards com borda esquerda azul):
    - "TRANSMISSÃO · Correias, Polias & Acoplamentos"
    - "CONDUÇÃO · Mangueiras, Mangotes & Conexões"
  - **LINHA AGRO, TRANSPORTE & SEGURANÇA** (sub-cards com borda esquerda vermelha):
    - "AGRO & TRANSPORTE · Lonas, Piso Boiadeiro & Cintas de Amarração"
    - "PROTEÇÃO · Botas, EPIs & Sinalização"
- No celular, a árvore vira uma pilha vertical.
- Abaixo da árvore, etiquetas com contorno azul: Correias, Mangueiras, Mangueiras hidráulicas, Mangotes, Polias de ferro, Acoplamentos, Rodas e rodízios, Conexões e engates, Lonas e plásticos, Piso boiadeiro, Cintas e catracas, Borracha líquida, Botas de segurança, EPIs, Cones e sinalização, Ferramentas.

### 6. Nossa estrutura
- Rótulo: "ESTOQUE E ESTRUTURA"
- Título: "Estoque para pronta entrega"
- Texto: "Galpões organizados e estoque amplo para atender da reposição do dia a dia às compras de grande volume."
- Grade de fotos (3 colunas no desktop, 2 no tablet, 1 no celular), com legenda curta e ampliação ao clicar (lightbox simples e acessível):
  - `estoque-geral-rolos.webp` · "Galpão de estoque"
  - `estoque-lonas.webp` · "Lonas"
  - `estoque-cintas-catracas.webp` · "Cintas e catracas"
  - `estoque-conexoes-engates.webp` · "Conexões e engates"
  - `estoque-cones-sinalizacao.webp` · "Cones e sinalização"
  - `estoque-mangueiras-prateleiras.webp` · "Mangueiras"
- Abaixo da grade: "Vídeo Reino da Borracha", com o botão "Assista no YouTube" levando ao canal (ou embed de um vídeo específico, se eu informar o link).

### 7. Soluções para cada cliente (3 cards, no estilo de tabela de planos)
- Rótulo: "COMO ATENDEMOS"
- Título: "Soluções para cada cliente"
- Texto: "Escolha o seu perfil e fale direto com um vendedor."
- **Card 1 · Balcão / "Varejo"** · para profissionais e consumidores
  - Pronta entrega no Setor Campinas
  - Orientação para a peça certa
  - Café, chá e chocolate na loja
- **Card 2 · Empresas / "Atacado"** · indústria, construção e comércio (borda azul mais forte e selo vermelho "MAIS PROCURADO")
  - Estoque para reposição contínua
  - Vendedores especializados
  - Pontualidade na entrega
- **Card 3 · Agronegócio / "Agro"** · fazendas, currais e ordenha
  - Piso boiadeiro e lonas
  - Mangueiras e correias para máquinas
  - EPIs para o campo
- Itens marcados com um pequeno losango azul.
- Cada card tem o botão "Consultar pelo WhatsApp", com mensagem pré-preenchida diferente:
  - Varejo: "Olá! Vim pelo site e gostaria de consultar um produto."
  - Atacado: "Olá! Represento uma empresa e gostaria de uma cotação no atacado."
  - Agro: "Olá! Gostaria de consultar produtos para o agro."

### 8. Avaliações
- Rótulo: "QUEM COMPRA, RECOMENDA"
- Título: "Avaliações no Google"
- Nota "4,9" grande em creme, ★★★★★ em azul-claro e "156 avaliações".
- Três cards de depoimento, com aspas grandes em vermelho, texto em serifada e nome em azul-claro e maiúsculas:
  - "A melhor loja de Goiânia, atendimento excelente, conta com ótimos funcionários." · Emerson Santus
  - "Pontualidade na entrega, produtos de qualidade, vendedores qualificados!" · Cleusmar Lima Cordeiro
  - "Ótimo atendimento, tem café, chá e chocolate." · Thiago Hends
- Botão secundário: "Ver todas as avaliações no Google" (abre o link da seção 5 em nova aba).

### 9. Contato
- Fundo azul-marinho com brilho azul suave e radial no centro.
- Logo pequena acima do conteúdo.
- Rótulo: "FALE CONOSCO"
- Título: "Entre em contato com o Reino da Borracha"
- Endereço, telefone fixo (clicável) e WhatsApp (clicável).
- Tabela de horário (seg–sex 07–18h, sáb 08–12h, dom fechado), com o dia de hoje destacado.
- Botões: "Falar pelo WhatsApp" (azul) e "Como chegar" (contorno creme), que abre `https://www.google.com/maps/search/?api=1&query=Reino+da+Borracha+Av.+Castelo+Branco+2620+Goiania`.
- Ícones das redes: Instagram, YouTube, TikTok e LinkedIn (abrem em nova aba).
- Mapa do Google incorporado, carregado só quando chegar perto da tela (lazy), com filtro escuro em tom azulado.

### 10. Rodapé
- Fundo azul-marinho quase preto, com uma linha fina acima em degradê vermelho → azul.
- Logo pequena centralizada.
- Slogan em itálico discreto: "O Senhor é meu pastor e nada me faltará!"
- Links rápidos para as seções e para "Política de Privacidade".
- "© 2026 Reino da Borracha. Todos os direitos reservados."
- "REINO DA BORRACHA LTDA · CNPJ 04.451.758/0001-05"

---

## 8. SEO local

- `<html lang="pt-BR">`
- Title: "Reino da Borracha | Correias, Mangueiras, Lonas e EPIs em Goiânia"
- Meta description (até ~155 caracteres) citando correias, mangueiras, lonas, EPIs, Goiânia e a revenda Continental.
- Open Graph e Twitter Card, com imagem 1200×630 montada a partir da fachada + logo.
- Dados estruturados JSON-LD do tipo `Store` (LocalBusiness) com: nome, razão social, logo, imagem, telefone, endereço completo, geolocalização, `openingHoursSpecification` (horário da seção 5), `sameAs` (as 4 redes), `aggregateRating` (4,9 / 156) e `priceRange` "$$".
- `sitemap.xml`, `robots.txt` e URL canônica `https://reinodaborracha.com.br/`.
- Favicon em todos os tamanhos (ícone, apple-touch, manifest), feito a partir da logo.
- Um único H1. Títulos H2 com palavras-chave locais usadas com naturalidade, sem exageros.

## 9. Métricas e privacidade

- **Vercel Web Analytics** para visitas (não usa cookies, então não precisa de aviso de cookies).
- Registre cliques em WhatsApp, telefone, "Como chegar" e redes sociais como eventos personalizados (`track()` do `@vercel/analytics`). Se o plano da Vercel não permitir eventos personalizados, deixe o código pronto e me avise.
- Página `/privacidade`: política de privacidade simples, de acordo com a LGPD, explicando que o site não coleta dados pessoais diretamente, que usa métricas anônimas, e que os contatos acontecem pelo WhatsApp. Link no rodapé.

## 10. Qualidade

- Lighthouse acima de 90 em Desempenho, Acessibilidade, SEO e Boas Práticas, **no celular**.
- Testar em larguras de 360px, 768px, 1024px e 1440px.
- Contraste adequado (WCAG AA), foco visível, navegação por teclado e `aria-label` nos botões só com ícone.
- Nenhum link quebrado. Todos os links externos com `target="_blank" rel="noopener"`.
- Fontes com `font-display: swap` e preconnect.

---

## 11. Pendências (perguntar antes de assumir)

1. **Domínio:** o letreiro da fachada já mostra `www.reinodaborracha.com.br`. Talvez o domínio já esteja registrado em nome da loja, e talvez exista um site no ar. Antes de mexer no DNS, me pergunte quem tem acesso à conta do Registro.br.
2. **Montagem de mangueiras:** pela foto das prensas, a loja monta mangueiras hidráulicas. Confirmar se o serviço existe e como descrevê-lo.
3. **Entrega:** as vans da loja aparecem na fachada. Confirmar se há entrega própria, e para quais regiões, antes de citar no site.
4. **Continental:** confirmar se a loja pode usar o logotipo da Continental ou um selo oficial de revendedor. Até lá, usar só o texto.
5. **Logo em alta resolução:** se a loja tiver o arquivo original (SVG ou PDF), trocar.
6. **E-mail:** um site de consulta de CNPJ mostra `reinodaborracha1@hotmail.com`. Confirmar se é o e-mail comercial atual antes de usar.
7. **Vídeo:** se a loja quiser destacar um vídeo específico do YouTube, eu passo o link; senão, usar o botão para o canal.

## 12. Depois de publicar

Me entregue um checklist com:
- Apontar o domínio na Vercel e conferir o HTTPS
- Cadastrar o site no Google Search Console e enviar o sitemap
- Colocar o link do site no Perfil da Empresa no Google, no Instagram, no TikTok, no YouTube e no LinkedIn
- Testar todos os botões de WhatsApp no celular
- Como atualizar textos, fotos, horário e WhatsApp depois (onde fica cada coisa no código)
