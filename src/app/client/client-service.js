const Client = require('./client-model');

module.exports = {

    list: async (req, res) => {
        // Retorna de forma ordenada pelo nome a lista com todos as clientes
        try {
            const list = await Client.find().sort({ name: 1 });
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    create: async (req, res) => {
        // Cria um cliente no MongoDB
        try {
            await Client.create(req.body);
            res.status(202).json('success');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    edit: async (req, res) => {
        // Edita um cliente buscando pelo _id
        try {
            await Client.findOneAndUpdate({ _id: req.params.id }, req.body);
            res.status(200).json('success');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getById: async (req, res) => {
        // Retorna um cliente procurando pelo _id
        try {
            const response = await Client.findById(req.params.id);

            if (response != null) {
                res.status(200).json(response);
            } else {
                res.status(200).json('Objeto não encontrado');
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },

    delete: async (req, res) => {
        // Deleta um cliente pelo _id
        try {
            await Client.findByIdAndDelete(req.params.id);
            res.status(200).json('success');
        } catch (error) {
            res.status(500).json(error);
        }

    },

    searchAll: async (req, res) => {
        // Retorna um cliente procurando pelo nome, sexo ou cidade
        try {
            let filter = req.params.filter

            const response = await Client.find({
                "$or": [
                    { "name": { $regex: `${filter}`, '$options': 'i' } },
                    { "sex": { $regex: `${filter}`, '$options': 'i' } },
                    { "city.name": { $regex: `${filter}`, '$options': 'i' } },
                ]
            }).sort({ name: 1 });

            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    searchName: async (req, res) => {
        // Retorna um cliente procurando pelo nome
        try {
            let filter = req.params.filter

            const response = await Client.find(
                { "name": { $regex: `${filter}`, '$options': 'i' } })
                .sort({ name: 1 });

            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    editName: async (req, res) => {
        // Edita um o nome de um cliente buscando pelo _id
        try {
            await Client.findOneAndUpdate({ _id: req.params.id },
                {
                    $set: {
                        name: req.body.name,
                    }
                });
            res.status(200).json('success');
        } catch (error) {
            res.status(500).json(error);
        }
    },

}