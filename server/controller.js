module.exports = {
    getProduct: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
            .then(inventory => res.status(200).send(inventory))
            .catch(err => {
                res.status(500).send({errorMessage: 'Sorry! Something went wrong on our end.'});
                console.log(err)
            });
    },

    addProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name, price, img} = req.body
        dbInstance.add_product([name, price, img]).then((product) => {
            res.status(200).send(product)
        })
        .catch(err => {
            res.status(500).send({errorMessage: 'Sorry! Something went wrong on our end.'});
            console.log(err)
        });
    },

    deleteProduct: (req,res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.delete_product()
    }
}