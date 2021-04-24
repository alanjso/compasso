# Client Documentation

## Model

```javascript
client: {
    name: {
        type: String,
    },

    sex: {
        type: String,
        enum: ['Homem', 'Mulher', 'Outros']
    },

    birthday: {
        type: Date,
    },

    age: {
        type: Number,
    },

    city: citySchema
}
```

```javascript
citySchema: {
    name: {
        type: String
    }
}
```

## Routes

- get: /client => Lista todas os clientes

- post /client => Cria um novo cliente no banco

- put /client/:id => Edita um cliente baseado no id

- delete  /client => Deleta um cliente baseado no id

- get /client/:id => Retorna um cliente baseado no id 

- get /client/filter/all/:filter => Filtra a lista de clientes pelo nome, sexo ou cidade 

- get /client/filter/name/:filter => Filtra a lista de clientes pelo nome
