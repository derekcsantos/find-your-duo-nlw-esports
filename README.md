![Logo NLW eSports](/screenshots/logo-nlw-header.png)
<h5 align="center">🚀 Projeto desenvolvido durante a NLW eSports, trilha Ignite, da Rocketseat</h5>

<p align="center">
<a href="#-sobre">Sobre</a> •
<a href="#-features">Features</a> •
<a href="#-instalacao">Pré-Requisitos e Instalação</a> •
<a href="#-tecnologias">Tecnologias</a> •
<a href="#-autor">Autor</a>
</p>

<h5 align="center"> 
	🚧 em construção... 🚧
</h5>

### 🎮 Sobre
Essa aplicação permite a visualização e publicação de anúncios para encontrar parceiros de jogos online.
Para o cadastro de anúncios, é solicitado:
- para qual jogo deseja encontrar um duo;
- nome do jogador (nickname);
- há quanto tempo joga esse jogo;
- em quais dias e horários ele constuma estar disponível;
- se costuma se conectar por voz;
- nome do usuário no Discord (para se conectar);

Visualização na versão web:
![Visualizando os anúncios web](./screenshots/viewads.gif)

Criação de anúncios na versão web:
![Criação de anúncios na web](./screenshots/creating-ad.gif)

Esse projeto foi proposto pela [Rocketseat](https://www.rocketseat.com.br/) durante a NLW eSports - Trilha Ignite. Nesse evento de uma semana, o objetivo era desenvolver e aprender juntos, com muita prática, as versões web e mobile (junto com o back end) dessa aplicação utilizando o React e o React Native.

### ✨ Features
- [x] Visualização de anúncios dos jogos (versões web e mobile)
- [x] Cadastro de anúncios dos jogos
- [ ] Login Social com Discord
- [ ] Autenticação dos dados na criação dos anúncios

### ℹ Pré-requisitos
Antes de começar, é necessário ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).
Para rodar a versão mobile, além das ferramentas acima é necessário intalar o [expo-cli](https://expo.io/) globalmente em seu computador:
```bash
$ npm install -g expo-cli

ou

$ yarn global add expo-cli

```
 e o aplicativo Expo Go no seu aparelho celular, basta buscar nas lojas pelo aplicativo Expo Go (recomendado) ou instalar um emulador Android ou iOS (para macOS) em sua máquina.

#### 🎲 Rodando o Back End (servidor)
```bash
# Clone este repositório
$ git clone <https://github.com/derekcsantos/find-your-duo-nlw-esports>

# Acesse a pasta do projeto no terminal/cmd
$ cd find-your-duo-nlw-esports

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

#### 💻 Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/derekcsantos/find-your-duo-nlw-esports
# Acesse a pasta do projeto no seu terminal/cmd
$ cd find-your-duo-nlw-esports
# Vá para a pasta da aplicação web
$ cd web
# Instale as dependências
$ npm install
# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```
#### 📱 Rodando a aplicação mobile (Front End)
```bash
# Clone este repositório
$ git clone https://github.com/derekcsantos/find-your-duo-nlw-esports
# Acesse a pasta do projeto no seu terminal/cmd
$ cd find-your-duo-nlw-esports
# Vá para a pasta da aplicação mobile
$ cd mobile
# Instale as dependências
$ npm install
# Com o celular e o computador  conectados na mesma rede, execute a aplicação em modo de desenvolvimento
$ expo start
# No app Expo GO, basta ler o QR Code gerado no terminal ou seguir as instruções da tela
```

### 🛠 Tecnologias e ferramentas utilizadas
As seguintes ferramentas foram usadas na construção do projeto:

- [VSCode](https://code.visualstudio.com/)
- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Prisma](https://www.prisma.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix](https://www.radix-ui.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [CSS Gradient](https://cssgradient.io/)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [R Component](https://marketplace.visualstudio.com/items?itemName=rodrigorgtic.rcomponent)
- [PostCSS](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

### 👨🏾‍💻 Autor
<a href="https://github.com/derekcsantos">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/104657573?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Derek Santos</b></sub></a </a>

<p>Feito com muita dedicação por Derek Santos 👋🏽 Entre em contato!</p>

[![Twitter Badge](https://img.shields.io/badge/-@derekcsantos-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/derekcsantos)](https://twitter.com/derekcsantos) [![Linkedin Badge](https://img.shields.io/badge/-Derek-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/derekcsantos/)](https://www.linkedin.com/in/tgmarinho/) 
[![Gmail Badge](https://img.shields.io/badge/-derekcsantos@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:derekcsantos@gmail.com)](mailto:derekcsantos@gmail.com)

