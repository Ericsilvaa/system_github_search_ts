

# Iniciando Projeto Sistema Login com Typescript
  ## Install -> redux react-redux @reduxjs/toolkit react-toastify firebase react-hook-form react-router-dom vite-plugin-svgr styled-components
  ## Separação das pastas, configuração do redux, configuração inicial rotas.
  ## Criando as primeiras interfaces: IUser e IRegister

# Sobre [redux-saga] / middleware / [Effects]
  # [fork()], realiza uma operação não bloqueante com a função passada.
  # [take()], pausa as operações até receber uma redux action
  # [race()], executa Effects simultaneamente, e cancela todos quando um efeito retorna seu resultado
  # [call()], executa uma função. Se essa função retornar uma Promise, ele irá pausar a Saga até a Promise ser resolvida
  # [put()], despacha uma redux action
  # [select()], executa uma função seletora que irá buscar dados do estado global do Redux
  # [takeLatest()], irá executar as operações recebidas, porém, irá retornar apenas o valor da última. Se a mesma operação for enviada mais   de uma vez, elas serão ignoradas, exceto a última (ex: click -> loadUser, usuário clica 4 vezes no botão (ele é legal né, quer testar sua app), apenas a função enviada no último click será executada/retornado o valor, as outras serão ignoradas)
  # [takeEvery()], irá retornar os valores de todas as operações recebidas

# Styled-Components 
  # Criando Styled Global e Variaveis para todo site
  # Criando file styles para colocar o global
  # Criando file config para colocar tudo sobre configuração -> light / dark / informations / typography

# Entender a usabilidade [react-hook-form]
  # UI and Form [Login]
  # UI and Form [Cadastro]

