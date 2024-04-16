# CIA - Copa Inter Atléticas Unisul 2024

## Sobre o Projeto
Este repositório é um projeto da CRYPTO (AAATIU) - Associação Atlética Acadêmica de Tecnologia da Informação da Unisul, para contribuir com Copa Inter Atléticas Unisul 2024. O site serve como uma plataforma central para informações sobre o evento, incluindo tabelas de cada esporte, registros de jogos anteriores e informações sobre próximos jogos.

## Como Contribuir
Estamos abertos a contribuições da comunidade! Se você deseja contribuir, por favor, leia nosso [Código de Conduta](CODE_OF_CONDUCT.md) e nossas [Diretrizes de Contribuição](CONTRIBUTING.md) para entender como proceder.

## Tecnologias Utilizadas
- React
- Next
- Prisma
- TailwindCSS

## Configuração do Projeto

### Pré-requisitos
- Node.js instalado (versão recomendada: 18.17.x ou superior)
- Docker para gerenciar containers do PostgreSQL

### Instruções de Instalação

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

## Configuração do Ambiente Local

1. **Suba o container do PostgreSQL:**

```bash
  ./scripts/run-docker.sh up
```

2. **Execute as migrações do Prisma:**
  
  ```bash
    npx prisma migrate dev
  ```

## Iniciar o Projeto:

1. **Inicie o projeto localmente:**

```bash
  npm run dev
```

## Contribuindo com Código
Para contribuir com código, recomendamos que:
1. Clone o repositório.
2. Crie um branch a partir do main.
3. Realize suas alterações no branch.
4. Crie uma solicitação de Pull Request para a fusão (merge) das suas alterações com o repositório principal.

Agradecemos sua contribuição para tornar este evento um sucesso!

