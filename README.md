# AI Model Browser Integrated - Offline

![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
![Offline](https://img.shields.io/badge/AI-Offline-green)

## 📌 Sobre o Projeto

Este projeto é uma demonstração simplificada do uso de modelos de Inteligência Artificial executados diretamente no navegador.

Trata-se de uma tecnologia ainda experimental, com foco em estudos e exploração de novas capacidades da web.

A proposta principal é demonstrar como utilizar modelos de IA embarcados no browser, proporcionando:

- Menor latência  
- Independência de conexão com a internet  

---

## 🧠 Como Funciona

Os modelos de IA são carregados e executados diretamente no navegador do usuário.

Isso possibilita:

- Processamento local (client-side)
- Execução offline (quando suportado)
- Redução da dependência de backend
- Uso focado em aplicações web

> ⚠️ O desempenho pode variar de acordo com o hardware do dispositivo.

---

## 🚀 Tecnologias Utilizadas

- **Next.js**
- **Tailwind CSS**
- **Web AI (execução no browser)**

---

## ⚙️ Getting Started

### 🔧 Pré-requisitos

Para o funcionamento completo da aplicação:

- Utilize o **Google Chrome** (único navegador compatível no momento)
- Certifique-se de estar na versão mais recente

### 🧪 Habilitar recursos experimentais

Acesse:

chrome://flags/

E habilite as seguintes opções:

- `Experimental Web Platform features`
- `Enable optimization guide debug logs`
- `Enables optimization guide on device`
- `Prompt API for Gemini Nano`
- `Prompt API for Gemini Nano with Multimodal Input`

> ⚠️ Após habilitar, é necessário reiniciar o navegador.

> ⚠️ Para remover o modelo baixado apos o teste, acesse chrome://on-device-internals/ e clique na aba Model Status, voce ira encontrar a opcao para desinstalacao do modelo.

---

## ▶️ Executando o Projeto

Instale as dependências e inicie o servidor:
```
npm ci
npm run dev
```
Abra no navegador e aguarde o download do modelo:

http://localhost:3000

---

## 💡 Observações

- O tempo de carregamento inicial pode ser alto devido ao download do modelo de IA
- A experiência pode variar dependendo do hardware da máquina
- Projeto voltado para fins educacionais e experimentais