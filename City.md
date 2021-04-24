# City Documentation

## Model

```javascript
city: {
    name: {
        type: String,
    },
    state: {
        type: String
    }
}
```

## Routes

- get: /city => Lista todas as cidades

- post /city => Cria uma nova cidade no banco

- put /city/:id => Edita uma cidade baseado no id

- delete  /city => Deleta uma cidade baseado no id

- get /city/:id => Retorna uma cidade baseado no id 

- get /city/filter/all/:filter => Filtra a lista de cidades pelo nome da cidade ou estado

- get /city/filter/name/:filter => Filtra a lista de cidades pelo nome da cidade

- get /city/filter/state/:filter => Filtra a lista de cidades pelo nome do estado