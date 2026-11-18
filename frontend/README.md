# PupunhaLinks

Página de links (estilo "link na bio") com fundo alterável e 4 links editáveis, em tema visual inspirado em Evangelion: painéis escuros angulares, laranja de alerta e título em serifa pesada.

## Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **TanStack Router**
- **Vite** · **Lucide** (ícones) · **Chakra Petch** e **Noto Serif** (@fontsource)

## Funcionalidades

- **Fundo alterável** — foto de fundo (`src/assets/backgrounds/lua.jpg`), 5 fundos geométricos (Roxo e verde, Alerta, Laranja, Vermelho, Noite) e cor personalizada; cada fundo define a cor de destaque dos painéis.
- **4 links editáveis** — título e endereço de cada um, além do nome da página.
- **Persistência** — as alterações ficam salvas no navegador (`localStorage`).
- **Responsivo** — tela cheia no celular; moldura de celular no desktop.

Para editar: botão `⋯` no topo (fundo) ou no próprio link (links).

## Estrutura

```
src/
├── app/            # Configuração do TanStack Router
├── assets/         # Imagens de fundo
├── components/
│   ├── brand/      # Símbolo e assinatura da marca (SVG)
│   └── ui/         # Primitivas reutilizáveis (ícones sociais)
├── data/           # Presets de fundo e valores padrão
├── features/
│   └── links/      # Página de links, componentes e hooks
├── lib/            # Funções utilitárias (cor, URL)
├── styles/         # Estilos globais
└── types/          # Tipos compartilhados
```

Para adicionar um fundo novo, inclua um item em `src/data/backgrounds.ts` (use `photo()` para imagens).

> A foto de fundo padrão é um quadro do anime, fornecido pelo autor do projeto. Antes de publicar o site, confirme se você pode usar essa imagem.

## Scripts

```bash
npm install
npm run dev           # ambiente de desenvolvimento
npm run build         # build de produção
npm run build:single  # HTML único autocontido (dist-preview/)
npm run lint
```
