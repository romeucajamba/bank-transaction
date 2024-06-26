# Transações

Um sistema para criação de transações, permitindo a consulta de cada transação, ter o resumo das transações que ocorreram.

# Requisitos funcionais

- O usuário deve poder criar uma nova transação;
- O usuário deve poder obter um resumo da sua conta;
- O usuário deve poder listar todas transações que já ocorreram;
- O usuário deve poder visualizar uma transação única;

# Regras de negócio

- A transação pode ser tipo crédito que somará ao valor total, ou débito subtrairá;
- Deve ser possível identificarmos o usuário entre as requisições;
- O usuário só pode visualizar transações o qual ele criou;

## Dependências || tecnologias

## Nodejs

- Runtime javaScipt com o seu gerenciador de pacotes npm
- <img align="center" height="30" width="30" alt="nodejs-icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">

## JavaScript

- Liguagem de programação
- <img align="center" height="30" width="30" alt="js-icon"  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">

## Typescript

- Linguagem de programação para tipagens estáticas
- <img align="center" alt="Rafa-Ts" height="30" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">

## Cookies
- npm i @fastify/cookie 


### 
### Registando todas as rotas/plugins 
<img src="./assets/server.png" height="500" width="900" />

### Rota de para cadastro de transação
<img src="./assets/register.png" height="500" width="900" />

### rota para pegar transações pelo id
<img src="./assets/serachById.png" height="500" width="900" />

### Rota para pegar todas as transações
<img src="./assets/transactions.png" height="500" width="900" />

## Rota de resumo de todas as transações feitas
<img src="./assets/summary.png" height="500" width="900" />

### Base de Dados
<img src="./assets/database.png" height="500" width="900" />

######
####
## Buscando todas transações
<img src="./assets/Alltransactions.png" height="500" width="900" />

### Buscando pelo Id
<img src="./assets/serachById.png" height="500" width="900" />

### consultando o total das transações
<img src="./assets/summaryTransactions.png" height="500" width="900" />

### registando transação
<img src="./assets/registerTransactions.png" height="500" width="900" />


### para usar o projecto
- Baixe o projecto na sua máquina
- execute no terminal do directório do projecto baixado 'npm i ou npm install' instalará todas as dependências do projecto.
- Execute novamente no terminal 'npm run server' para rodar o servidor
- execute no terminal 'npx prisma studio' para ver a Base de dados em um novo terminal no directório do projecto no VSCode
