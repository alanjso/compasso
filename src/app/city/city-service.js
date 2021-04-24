const City = require('./city-model');

module.exports = {

    list: async (req, res) => {
        // Retorna de forma ordenada pelo nome a lista com todos as cidades
        try {
            const list = await City.find().sort({ name: 1 });
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    create: async (req, res) => {
        // Cria uma cidade no MongoDB
        try {
            await City.create(req.body);
            res.status(202).json('success');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    edit: async (req, res) => {
        // Edita uma cidade buscando pelo _id
        try {
            await City.findOneAndUpdate({ _id: req.params.id }, req.body);
            res.status(200).json('success');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getById: async (req, res) => {
        // Retorna uma cidade procurando pelo _id
        try {
            const response = await City.findById(req.params.id);

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
        // Deleta uma cidade pelo _id
        try {
            await City.findByIdAndDelete(req.params.id);
            res.status(200).json('success');
        } catch (error) {
            res.status(500).json(error);
        }

    },

    search: async (req, res) => {
        // Retorna uma cidade procurando pelo nome da cidade ou estado
        try {
            let filter = req.params.filter
            const response = await City.find({
                "$or": [
                    { "name": { $regex: `${filter}`, '$options': 'i' } },
                    { "state": { $regex: `${filter}`, '$options': 'i' } },
                ]
            }).sort({ name: 1 });

            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },

}