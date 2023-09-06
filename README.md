# Sequelize Learn

![DER da aplicação](/assets/sys_school.png)

## Rotas de Usuários
### Obter todos os usuários
- **Rota:** `GET /users`
- **Controlador:** `UserController.getAllUser`
- **Descrição:** Esta rota retorna uma lista de todos os usuários registrados no sistema.

### Obter usuário por ID
- **Rota:** `GET /users/:id`
- **Controlador:** `UserController.getUserById`
- **Descrição:** Esta rota retorna informações sobre um usuário com base no ID fornecido.

### Criar usuário
- **Rota:** `POST /users`
- **Controlador:** `UserController.createUser`
- **Descrição:** Esta rota permite a criação de um novo usuário no sistema.

### Atualizar usuário por ID
- **Rota:** `PATCH /users/:id`
- **Controlador:** `UserController.updateUser`
- **Descrição:** Esta rota permite a atualização das informações de um usuário existente com base no ID fornecido.

### Excluir usuário por ID
- **Rota:** `DELETE /users/:id`
- **Controlador:** `UserController.deleteUser`
- **Descrição:** Esta rota permite a exclusão de um usuário com base no ID fornecido.

## Rotas de Usuários para Matrículas
### Obter matrícula de um usuário
- **Rota:** `GET /users/:studentId/enrollments/:enrollmentId`
- **Controlador:** `UserController.getEnrollment`
- **Descrição:** Esta rota retorna informações sobre uma matrícula específica de um usuário com base nos IDs do aluno e da matrícula fornecidos.

### Obter todas as matrículas de um usuário
- **Rota:** `GET /users/:studentId/enrollments/`
- **Controlador:** `UserController.getAllEnrollment`
- **Descrição:** Esta rota retorna uma lista de todas as matrículas de um usuário com base no ID do aluno fornecido.

### Criar matrícula para um usuário
- **Rota:** `POST /users/:studentId/enrollments/`
- **Controlador:** `UserController.createEnrollment`
- **Descrição:** Esta rota permite a criação de uma nova matrícula para um usuário com base no ID do aluno fornecido.

## Rotas de Níveis
### Obter todos os níveis
- **Rota:** `GET /levels`
- **Controlador:** `LevelController.getAllLevel`
- **Descrição:** Esta rota retorna uma lista de todos os níveis disponíveis no sistema.

### Obter nível por ID
- **Rota:** `GET /levels/:id`
- **Controlador:** `LevelController.getLevelById`
- **Descrição:** Esta rota retorna informações sobre um nível com base no ID fornecido.

### Criar nível
- **Rota:** `POST /levels`
- **Controlador:** `LevelController.createLevel`
- **Descrição:** Esta rota permite a criação de um novo nível no sistema.

### Atualizar nível por ID
- **Rota:** `PATCH /levels/:id`
- **Controlador:** `LevelController.updateLevel`
- **Descrição:** Esta rota permite a atualização das informações de um nível existente com base no ID fornecido.

### Excluir nível por ID
- **Rota:** `DELETE /levels/:id`
- **Controlador:** `LevelController.deleteLevel`
- **Descrição:** Esta rota permite a exclusão de um nível com base no ID fornecido.

## Rotas de Turmas (Classes)
### Obter todas as turmas
- **Rota:** `GET /classes`
- **Controlador:** `ClassController.getAllClasses`
- **Descrição:** Esta rota retorna uma lista de todas as turmas disponíveis no sistema.

### Obter turma por ID
- **Rota:** `GET /classes/:id`
- **Controlador:** `ClassController.getClassById`
- **Descrição:** Esta rota retorna informações sobre uma turma com base no ID fornecido.

### Criar turma
- **Rota:** `POST /classes`
- **Controlador:** `ClassController.createClass`
- **Descrição:** Esta rota permite a criação de uma nova turma no sistema.

### Atualizar turma por ID
- **Rota:** `PATCH /classes/:id`
- **Controlador:** `ClassController.updateClass`
- **Descrição:** Esta rota permite a atualização das informações de uma turma existente com base no ID fornecido.

### Excluir turma por ID
- **Rota:** `DELETE /classes/:id`
- **Controlador:** `ClassController.deleteClass`
- **Descrição:** Esta rota permite a exclusão de uma turma com base no ID fornecido.
