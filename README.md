<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
docker-compose -f docker-compose.dev.yml up --build
```

# Seeds b??sicas
| ibgecode | uf  | name              |
| -------- | --- | ----------------- |
| 43       | RS  | Rio Grande do Sul |
| 42       | SC  | Santa Catarina    |

| ibgecode | name          | stateId |
| -------- | ------------- | ------- |
| 4300034  | Acegu??        | 82      |
| 4300059  | ??gua Santa    | 82      |
| 4300109  | Agudo         | 82      |
| 4200101  | Abelardo Luz  | 83      |
| 4200200  | Agrol??ndia    | 83      |
| 4200051  | Abdon Batista | 83      |

| name           | description                                                                                                                                                                                                                           | code  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| Soja           | A soja, tamb??m conhecida como feij??o-soja e feij??o-chin??s, ?? uma planta pertence ?? fam??lia Fabaceae                                                                                                                                   | A1222 |
| Milho          | O milho, um conhecido cereal cultivado em grande parte do mundo, ?? extensivamente utilizado como alimento humano ou para ra????o animal devido ??s suas qualidades nutricionais                                                          | A1223 |
| Algod??o        | O algod??o ?? uma fibra branca que cresce em volta das sementes de algumas esp??cies do g??nero Gossypium, fam??lia Malvaceae                                                                                                              | A1224 |
| Caf??           | O caf?? ?? uma bebida produzida a partir dos gr??os torrados do fruto do cafeeiro. ?? servido tradicionalmente quente, mas tamb??m pode ser consumido gelado.                                                                              | A1225 |
| Cana de A??ucar | Cana-de-a????car ?? um grupo de esp??cies de gram??neas perenes altas do g??nero Saccharum, tribo Andropogoneae, nativas das regi??es tropicais do sul da ??sia e da Melan??sia e utilizadas principalmente para a produ????o de a????car e etanol | A1226 |


# Tasks

- [x]  Mapeamento/modelagem de tabelas
    
    [https://dbdiagram.io/d/62883359f040f104c16b6304](https://dbdiagram.io/d/62883359f040f104c16b6304)
    
- [x]  Subir ambiente docker
    - [x]  api
    - [x]  postgres
- [x]  Configura????o para acesso a DB
    - [x]  TypeORM
    - [x]  Separar configura????o TypeORM em m??dulo espec??fico
    - [x]  Utilizar objeto de configura????es
- [x]  Configura????o Swagger
    
    [https://docs.nestjs.com/openapi/introduction](https://docs.nestjs.com/openapi/introduction)
    
    ```bash
    npm install --save @nestjs/swagger swagger-ui-express
    ```
    
    ```tsx
    import { NestFactory } from '@nestjs/core';
    import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
    import { AppModule } from './app.module';
    
    async function bootstrap() {
      const app = await NestFactory.create(AppModule);
    
      const config = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('api', app, document);
    
      await app.listen(3000);
    }
    bootstrap();
    ```
    
- [x]  Implementar CRUD
    - [ ]  **Producer**
        - [x]  DTO
        - [x]  Entity
        - [x]  Import TypeOrmModule.forFeature
            
            ```tsx
            //example
            @Module({
              imports: [DatabaseModule, TypeOrmModule.forFeature([UserEntity])],
              controllers: [AppController],
              providers: [AppService],
            })
            ```
            
        - [x]  Swagger
        - [x]  CRUD service
        - [ ]  Valida????o
            - [ ]  CPF/CNPJ
        - [ ]  Testes Unit??rios Service
        - [ ]  Testes Unit??rios Controller
    - [ ]  **ProducerFarm**
        - [x]  DTO
        - [x]  Entity
        - [x]  Import TypeOrmModule.forFeature
        - [x]  Swagger
        - [x]  CRUD service
        - [ ]  Valida????es
        - [ ]  Testes Unit??rios Service
        - [ ]  Testes Unit??rios Controller
    - [x]  **Configurar migrations**
    - [x]  **Crop**
        - [x]  DTO
        - [x]  Entity
        - [x]  Import TypeOrmModule.forFeature
        - [x]  Controller
            - [x]  Swagger
            - [x]  Somente findAll
        - [x]  CRUD service
        - [x]  Seeds/Migrations data
    - [x]  **State**
        - [x]  DTO
        - [x]  Entity
        - [x]  Import TypeOrmModule.forFeature
        - [x]  Controller
            - [x]  Swagger
            - [x]  Somente findAll
            - [x]  FindOne (with districts)
        - [x]  CRUD service
        - [x]  Seeds/Migrations data
    - [x]  **District (era para ser city). Me atrabalhei** ????
        - [x]  DTO
        - [x]  Entity
        - [x]  Import TypeOrmModule.forFeature
        - [x]  Seeds/Migrations data
    - [x]  **ProducerFarm**
        - [x]  Refactoring add District
        - [x]  Refactoring CRUD Crop
    - [ ]  **Dashboard**
        - [ ]  Somente get
- [ ]  Exception Filters
- [ ]  Validation Pipe
- [ ]  Router Module

### Abordagem alteranativa

- [ ]  **ProducerFarmCrop? (se extra columns na tabela de liga????o) one-many ??? many-one**
    - [ ]  DTO
    - [ ]  Entity
    - [ ]  Import TypeOrmModule.forFeature
    - [ ]  Controller
        - [ ]  Swagger
    - [ ]  CRUD service
    - [ ]  Valida????es
    - [ ]  Testes Unit??rios Service
    - [ ]  Testes Unit??rios Controller