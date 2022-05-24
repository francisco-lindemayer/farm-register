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

# Tasks

- [x]  Mapeamento/modelagem de tabelas
    
    [https://dbdiagram.io/d/62883359f040f104c16b6304](https://dbdiagram.io/d/62883359f040f104c16b6304)
    
- [x]  Subir ambiente docker
    - [x]  api
    - [x]  postgres
- [x]  Configuração para acesso a DB
    - [x]  TypeORM
    - [x]  Separar configuração TypeORM em módulo específico
    - [x]  Utilizar objeto de configurações
- [x]  Configuração Swagger
    
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
        - [ ]  Validação
            - [ ]  CPF/CNPJ
        - [ ]  Testes Unitários Service
        - [ ]  Testes Unitários Controller
    - [ ]  **ProducerFarm**
        - [x]  DTO
        - [x]  Entity
        - [x]  Import TypeOrmModule.forFeature
        - [x]  Swagger
        - [x]  CRUD service
        - [ ]  Validações
        - [ ]  Testes Unitários Service
        - [ ]  Testes Unitários Controller
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
    - [x]  **District (era para ser city). Me atrabalhei** 😵
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

- [ ]  **ProducerFarmCrop? (se extra columns na tabela de ligação) one-many — many-one**
    - [ ]  DTO
    - [ ]  Entity
    - [ ]  Import TypeOrmModule.forFeature
    - [ ]  Controller
        - [ ]  Swagger
    - [ ]  CRUD service
    - [ ]  Validações
    - [ ]  Testes Unitários Service
    - [ ]  Testes Unitários Controller