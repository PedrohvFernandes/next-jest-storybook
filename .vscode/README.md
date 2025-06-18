# ✅ Como Rodar os Testes com Coverage no VSCode

## 1. Instale a extensão Jest no VSCode

🔗 [Clique aqui para instalar a extensão Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

---

## 2. Configure o arquivo `.vscode/settings.json`

No seu projeto, vá até a pasta `.vscode` e edite (ou crie) o arquivo `settings.json`, colando o conteúdo abaixo:

```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "always",
    "source.fixAll.eslint": "always"
  },
  "eslint.format.enable": true,
  "testing.alwaysRevealTestOnStateChange": false,
  "testing.automaticallyOpenPeekView": "never",
  "testing.automaticallyOpenPeekViewDuringAutoRun": false,
  "testing.automaticallyOpenTestResults": "openOnTestStart",
  "testing.countBadge": "failed",
  "testing.coverageBarThresholds": {
    "red": 0,
    "yellow": 60,
    "green": 90
  },
  "testing.coverageToolbarEnabled": false,
  "testing.defaultGutterClickAction": "run",
  "testing.displayedCoveragePercent": "totalCoverage",
  "testing.followRunningTest": false,
  "testing.gutterEnabled": true,
  "testing.saveBeforeTest": true,
  "testing.showAllMessages": false,
  "testing.showCoverageInExplorer": true
}
```

🔍 Obs.: Esta configuração também inclui ajustes para o ESLint e boas práticas de formatação automática.

---

## 3. Como rodar os testes com coverage

Após configurar o VSCode e a extensão:

### ➡️ Vá até o **Test Explorer** do VSCode (ícone de teste no menu lateral):

#### Confira o passo a passo abaixo ilustrado com imagens:

1. <img width=100% src="./images/Captura de Tela 2025-06-18 às 12.59.02.png">


2. <img width=100% src="./images/Captura de Tela 2025-06-18 às 12.59.21.png">


3. <img width=100% src="./images/Captura de Tela 2025-06-18 às 12.59.31.png">


4. <img width=100% src="./images/Captura de Tela 2025-06-18 às 12.59.36.png">


5. <img width=100% src="./images/Captura de Tela 2025-06-18 às 12.59.44.png">


6. <img width=100% src="./images/Captura de Tela 2025-06-18 às 13.00.09.png">


7. <img width=100% src="./images/Captura de Tela 2025-06-18 às 13.00.14.png">


8. <img width=100% src="./images/Captura de Tela 2025-06-18 às 13.00.17.png">


9. **Resultado geral de coverage no explorer**
<img width=100% src="./images/Captura de Tela 2025-06-18 às 13.00.26.png">

10. **Se estiver dando erro ao rodar com coverage**
<img width=100% src="./images/Captura de Tela 2025-06-18 às 13.48.36.png">


---

## 🎯 Pronto! Agora você consegue rodar os testes com coverage e visualizar de forma clara as métricas no próprio VSCode.

## Config diferente:

```Json
{
  // Formatação e padrões do editor
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },

  // ESLint + Prettier
  "eslint.format.enable": true,
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],

  // Jest Test Explorer
  // "jest.jestCommandLine": "next test", // Usa o comando do Next.js (Next 13/15 com App Router já suporta Jest)
  "jest.autoRun": {
    "watch": true,
    "onSave": "test-src-file" // roda teste relacionado ao arquivo salvo
  },
  "jest.showCoverageOnLoad": true,
  "jest.coverageFormatter": "json", // Para cobertura detalhada

  // Visualização de Testes no VSCode
  "testing.automaticallyOpenTestResults": "openOnTestStart",
  "testing.countBadge": "failed",
  "testing.defaultGutterClickAction": "runWithCoverage",
  "testing.coverageBarThresholds": {
    "red": 50,
    "yellow": 80,
    "green": 90
  },
  "testing.displayedCoveragePercent": "totalCoverage",
  "testing.followRunningTest": false,
  "testing.showCoverageInExplorer": true,
  "testing.saveBeforeTest": true,

  // Storybook (evita conflitos de linting em arquivos de stories)
  "files.exclude": {
    "**/*.stories.tsx": false
  },

  // esconder arquivos de build do Next.js
  "files.watcherExclude": {
    "**/.next/**": true
  },

  // melhorar performance ao abrir pastas grandes
  "search.exclude": {
    "**/.next": true,
    "**/node_modules": true,
    "**/dist": true,
    "**/out": true
  }
}

```

## Caso queira rodar os testes na mão:

- Teste: npm run test
- Teste + Coverage + Open index.html: npm run test:coverage
  - Esse aqui roda o coverage e abre o html localizado em *coverage/lcov-report/index.html* que é gerado pelo coverage tanto a mão, quanto pela extensão.