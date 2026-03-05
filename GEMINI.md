# Diretrizes do Projeto: Portfolio Minimalista (Estilo pierre.io)

## Stack Tecnológico
- Framework: Next.js (App Router)
- Estilização: Tailwind CSS
- Animações e Interações: Framer Motion
- Ícones: Lucide React

## Regras de Design e UI
- O design é brutalista, tipográfico e extremamente minimalista.
- Fundo: Muito escuro, quase preto (ex: `bg-neutral-950`).
- Texto principal: Branco ou off-white (ex: `text-neutral-100`).
- Tipografia: Use uma fonte sans-serif limpa e geométrica. Os títulos principais devem ser gigantes e com peso forte.
- Espaçamento: Use muito espaço negativo (white space). Não amontoe os elementos.
- Estrutura: O layout principal não tem rolagem pesada, é focado em um grid solto que ocupa 100vh.

## Regras de Desenvolvimento
- Crie componentes pequenos, modulares e reutilizáveis (ex: `MagneticButton.tsx`, `CustomCursor.tsx`).
- Todo o código deve ser em TypeScript.
- Para interações complexas de mouse, prefira criar Client Components (usando `"use client"` no topo).
- Mantenha o código limpo, semântico e focado em performance.
