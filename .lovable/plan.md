
# Otimizacao do LCP (Largest Contentful Paint)

O elemento LCP identificado e a imagem hero (`maria_e_heloisa_hero.jpeg`). O LCP atual esta em 4,35s e o objetivo e reduzir para ~2,5s. Vou aplicar varias otimizacoes:

## Problemas identificados

1. **Fontes bloqueiam renderizacao** - Google Fonts carregadas via CSS `@import` (render-blocking) E via `<link>` no HTML (duplicado)
2. **Imagem hero sem preload** - O browser so descobre a imagem apos baixar o JS, parsear e renderizar o componente React
3. **Imagem hero sem dimensoes explicitas** - Causa layout shift
4. **Animacoes atrasam a renderizacao visivel** - `animate-fade-in` com `opacity: 0` atrasa o LCP
5. **Efeito blur pesado na imagem** - `blur-2xl` no elemento decorativo custa GPU

## Plano de otimizacao

### 1. Remover `@import` duplicado de fontes no CSS
- Remover a linha `@import url(...)` do `src/index.css` (ja esta no `index.html` via `<link>`)

### 2. Adicionar `<link rel="preload">` para a imagem hero no `index.html`
- Isso faz o browser comecar a baixar a imagem imediatamente, sem esperar o JS
- Usar `fetchpriority="high"`

### 3. Adicionar `fetchpriority="high"` e dimensoes na tag `<img>` do HeroSection
- Adicionar `width` e `height` para evitar layout shift
- Adicionar `fetchpriority="high"` para priorizar o download

### 4. Remover animacao de fade-in da imagem hero
- A animacao `animate-fade-in` comeca com `opacity: 0`, o que atrasa o LCP pois o browser so conta o LCP quando o elemento e visivel
- Remover a classe de animacao do container da imagem

### 5. Simplificar o efeito decorativo blur
- Reduzir `blur-2xl` para `blur-xl` ou remover, pois blurs grandes sao custosos

### 6. Otimizar carregamento das fontes
- Adicionar `font-display: swap` via parametro na URL do Google Fonts (ja e o padrao, mas garantir `&display=swap`)

## Secao tecnica

**Arquivos modificados:**
- `index.html` - Adicionar preload da imagem hero
- `src/index.css` - Remover @import duplicado de fontes
- `src/components/HeroSection.tsx` - fetchpriority, dimensoes, remover animacao do LCP element

Essas mudancas combinadas devem reduzir o LCP significativamente, pois atacam as principais causas: descoberta tardia da imagem, render-blocking de fontes, e animacoes que atrasam a visibilidade.
