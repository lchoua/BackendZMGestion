define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "/Users/Lchoua/Desktop/Loik/UNT/Trabajo de Graduacion/BackendZMGestion/apidoc/main.js",
    "groupTitle": "/Users/Lchoua/Desktop/Loik/UNT/Trabajo de Graduacion/BackendZMGestion/apidoc/main.js",
    "name": ""
  },
  {
    "type": "GET",
    "url": "/roles/listar",
    "title": "",
    "permission": [
      {
        "name": "Administradores"
      }
    ],
    "description": "<p>Listar todos los roles</p>",
    "group": "Roles",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"Estado\": \"\",\n    \"Mensaje\": \"Ok\",\n    \"Objetos\": [\n        {\n            \"IdRol\": 1,\n            \"Rol\": \"Administradores\",\n            \"FechaAlta\": \"2020-04-09 15:01:35.000000\",\n            \"Observaciones\": \"\"\n        },\n        {\n            \"IdRol\": 2,\n            \"Rol\": \"Vendedores\",\n            \"FechaAlta\": \"2020-04-09 15:01:35.000000\",\n            \"Observaciones\": \"\"\n        },\n        {\n            \"IdRol\": 3,\n            \"Rol\": \"Fabricantes\",\n            \"FechaAlta\": \"2020-04-09 15:01:35.000000\",\n            \"Observaciones\": \"\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./internal/controllers/rolesController.go",
    "groupTitle": "Roles",
    "name": "GetRolesListar"
  },
  {
    "type": "POST",
    "url": "/roles/dame",
    "title": "",
    "permission": [
      {
        "name": "Administradores"
      }
    ],
    "description": "<p>Devuelve un rol a partir de un Id</p>",
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Rol",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Rol.IdRol",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t \"IdRol\":2\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"Estado\": \"\",\n    \"Mensaje\": \"Ok\",\n    \"Objetos\": [\n        {\n            \"IdRol\": 2,\n            \"Rol\": \"Vendedores\",\n            \"FechaAlta\": \"2020-04-09 15:01:35.000000\",\n            \"Observaciones\": \"\"\n        },\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./internal/controllers/rolesController.go",
    "groupTitle": "Roles",
    "name": "PostRolesDame"
  }
] });
