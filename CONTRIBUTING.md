# Contribuindo para o CIA - Copa Inter Atléticas Unisul 2024

## Como Contribuir

Agradecemos seu interesse em contribuir! Aqui estão algumas diretrizes que devem ser seguidas ao contribuir para este projeto:

### Reportando Bugs

- Utilize a aba de Issues para relatar bugs.
- Forneça uma descrição detalhada do problema e instruções para reproduzi-lo.
- Inclua capturas de tela ou código quando aplicável.

## Configuração do Projeto

### Pré-requisitos

- Node.js instalado (versão recomendada: 18.17.x ou superior)
- Docker para gerenciar containers do PostgreSQL

### Instruções de Instalação e Configuração

1. **Clone o projeto**

   ```bash
   git clone https://github.com/Crypto-A-A-A-T-I-U/CIA.git
   ```

2. **Entre no diretório do projeto:**

   ```bash
   cd CIA
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Suba o container do PostgreSQL:**

   ```bash
   ./scripts/run-docker.sh up
   ```

   5. **Configure o banco de dados e inicie o projeto:**

   ```bash
    # Com o contêiner rodando, rode o comando de configuração em um outro terminal
   ./docker/set-db.sh
   ```

   > Em caso de problemas de permissão, rodar sudo chmod +x [nome dos arquivos]

### Enviando Pull Requests

- Clone o repositório e crie um branch a partir do `main`.
- Siga as convenções de codificação do projeto.
- Escreva ou atualize testes quando necessário.
- Atualize a documentação conforme necessário.
- Crie um pull request com uma descrição clara e detalhada das suas alterações.

### Propostas de Funcionalidades

- Abra uma issue para discutir novas funcionalidades antes de começar o desenvolvimento.
- Forneça detalhes e contexto sobre a funcionalidade proposta.

## Código de Conduta

Ao contribuir para este projeto, é esperado que todos sigam nosso [Código de Conduta](CODE_OF_CONDUCT.md).

## Dúvidas?

Se tiver dúvidas ou precisar de ajuda, sinta-se à vontade para abrir uma issue ou entrar em contato com a equipe de desenvolvimento.
