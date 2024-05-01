
## Projeto Amazon CodeWhisperer

Este projeto utiliza o Amazon CodeWhisperer para criar endpoints em uma aplicação Express. Ele fornece endpoints para autenticação de usuário e alteração de senha.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/michellepachecoweb/portifolio-amazon-codewhisperer.git
   ```

2. Instale as dependências:

   ```bash
   yarn install
   ```

### Uso

1. Inicie o servidor:

   ```bash
   yarn start
   ```

2. Use os seguintes endpoints:

   - `GET /` - Retorna uma mensagem de recurso.
   - `POST /users/login` - Realiza login de usuário. Requer um corpo de requisição com `user` (email do usuário) e `password`. Retorna um token de autenticação se as credenciais estiverem corretas.
   - `POST /users/change-password` - Permite ao usuário alterar a senha. Requer um corpo de requisição com `user` (email do usuário), `oldPassword` (senha atual) e `newPassword` (nova senha).

Claro! Aqui está o exemplo de uso melhorado, separado por cada endpoint:

### Exemplo de Uso

#### Endpoint `/`

```bash
curl -X GET http://localhost:3000/
```

Retorno esperado:

```json
"respond with a resource"
```

#### Endpoint `/login`

```bash
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"user": "michellepachecoweb@gmail.com", "password": "123456"}'
```

Retorno esperado (se as credenciais estiverem corretas):

```json
{
  "token": "598115648412156441554541210",
  "message": "Login realizado com sucesso!"
}
```

Retorno esperado (se as credenciais estiverem incorretas):

```json
{
  "message": "Usuário sem permissão para acessar."
}
```

#### Endpoint `/change-password`

```bash
curl -X POST http://localhost:3000/change-password -H "Content-Type: application/json" -d '{"user": "michellepachecoweb@gmail.com", "oldPassword": "123456", "newPassword": "nova_senha"}'
```

Retorno esperado (se a senha antiga estiver correta):

```json
{
  "token": "654321688978978978979485416515691",
  "message": "Senha alterada com sucesso!"
}
```

Retorno esperado (se a senha antiga estiver incorreta):

```json
{
  "message": "Usuário ou senha inválidos!"
}
```

Certifique-se de ajustar `http://localhost:3000` para o endereço real do seu servidor.

### Notas

- Certifique-se de alterar os dados de usuário e senha no código para fins de segurança em um ambiente de produção.
- Implemente a lógica para alterar a senha do usuário no endpoint `/change-password`.

