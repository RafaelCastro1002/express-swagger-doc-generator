# express-generate-swagger

> [!IMPORTANT]
> Esse pacote é compatível com as versões 4.\* do express. Não é compatível com express 5 em diante.

[![NPM Package Page](https://img.shields.io/badge/express--generate--swagger-gray?label=npm&labelColor=c21104)](https://www.npmjs.com/package/express-generate-swagger)

Gerador de documentação swagger para servidores express.

## Exemplo de uso

```javascript
const express = require("express");
const { generateDocSwagger } = require("express-generate-swagger");

let app = express();

app
  .route("/users")
  .get(function (req, res) {
    // Handle request
  })
  .post(function (req, res) {
    // Handle request
  });

generateDocSwagger(app, {
  info: {
    title: "API Documentation",
    description: "API Documentation",
    version: "1.0.0",
  },
  outputJsonPath: "./swagger.json",
  uiAccessRoute: "/api-docs",
});

/*
O exemplo acima irá gerar um arquivo swagger.json na raiz do projeto com o seguinte conteúdo:
	{
	  "openapi": "3.0.3",
	  "info": {
		"title": "API Documentation",
		"description": "API Documentation",
		"version": "1.0.0"
	  },
	  "paths": {
		"/users": {
		  "post": {
			"description": "",
			"responses": {},
			"tags": ["Users"],
			"parameters": [
			  {
				"in": "body",
				"name": "Generic body",
				"schema": { "type": "object" }
			  }
			]
		  },
		  "get": {
			"description": "",
			"responses": {},
			"tags": ["Users"],
			"parameters": []
		  }
		}
	  }
	}
*/
```

Ao acessar a rota **/api-docs** é possível visualizar o arquivo swagger.json interpretado pela swagger ui.

## Arguments

### `app` - Express `app`

Sua instância do servidor express (`app`).

_**Note:** Você deve passar a instância do express como parâmetro na chamada da biblioteca quando as mesma já tenha recebido as definições de rota._

### `options` - Opções de customização

`info` - Informações adicionais a serem exibidas na UI da documentação.

    title: Título da documentação
    description: Descrição da api e documentação
    version: Versão da api a ser mostrada na UI

`outputJsonPath` - Caminho onde será salvo o arquivo de especificação OpenAPI json gerado.
`uiAccessRoute` - URL onde a UI será acessível, deve informar aqui a url sem a base do caminho da API, suponhamos que a api express esteja rodando localmente na porta `3000`, então a url base será `http://localhost:3000` e seguindo o exemplo acima, esse campo tenha o valor de `/api-docs`, então posso acessar a UI em: `http://localhost:3000/api-docs`.
