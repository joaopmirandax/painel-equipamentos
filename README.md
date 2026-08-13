# Visualizador de Equipamentos de Manufatura Inteligente

Projeto da **Prática 02 – Desenvolvimento Front-End (Indústria 4.0)**.

## Situação problema

Você foi contratado(a) como desenvolvedor(a) Front-End júnior por uma
empresa do setor de automação industrial que está migrando para uma
estrutura baseada na **Indústria 4.0**. O desafio é criar um painel simples
que mostre os **equipamentos inteligentes** presentes no chão de fábrica,
incluindo o nome do equipamento, seu status e sua função. Os dados são
fixos e fornecidos pela própria equipe de engenharia.

## Objetivos

- Renderizar cards de equipamentos inteligentes a partir de um array de dados.
- Usar componentes reutilizáveis (`EquipamentoCard`).
- Aplicar CSS externo com os estilos definidos pelo professor.
- Utilizar imagens realistas e gratuitas ligadas ao conceito de Indústria 4.0.

## Estrutura do projeto

```
painel-equipamentos/
├── public/
├── src/
│   ├── components/
│   │   └── EquipamentoCard.js
│   ├── data/
│   │   └── equipamentos.js
│   ├── App.css      ← CSS externo com as classes pedidas
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Como rodar

```bash
npm install
npm start
```

Acesse no navegador: http://localhost:3000

## O que foi implementado

- **Objetivos atendidos:** renderização de cards a partir de um array de
  dados, componente reutilizável, CSS externo com as classes pedidas
  (`.app-container`, `.titulo`, `.card`, `.imagem-equip`, `.nome-equip`,
  `.status`, `.funcao`) e imagens reais/gratuitas (Unsplash) ligadas ao
  conceito de Indústria 4.0.
- **Paleta de cores** aplicada conforme sugerido: azul escuro `#0D1B2A`,
  azul claro `#1B263B`, cinza metálico `#778DA9`, branco gelo `#E0E1DD`,
  verde monitoramento `#2EC4B6` e vermelho alerta `#E63946`.
- **Status dinâmico:** a classe `.status` muda de cor conforme o
  conteúdo (`Operando` = verde, `Em manutenção` = cinza metálico,
  `Alerta` = vermelho), usando um pequeno utilitário em
  `EquipamentoCard.js` que converte o texto do status em classe CSS.
