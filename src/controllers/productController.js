const Product = require('../models/product');

function listProducts(req, res) {
    let data = req.body;
    // console.log(data.categoryId);
    Product.listProducts(data, function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).send({message: "Not ok"});
        }
        return res.status(200).send({
            success: true,
            msg: "Successfully fetched products",
            products: result
        })
    })
}

function addProduct(req, res) {
    let data = req.body;
   if(data.name && data.price && data.description && data.categoryId && data.vendorId) {
        Product.addProduct(data, function(err, result) {
     if (err) {
            console.log(err);
            return res.status(500).send({message: "Not ok"});
        }
        return res.status(200).send({
            success: true,
            msg: "Successfully fetched products",
            products: result
        })
    })
  }
  else {
        console.log(data);
        return res.status(404).send({"msg": "Something went wrong", data});
    }
}

module.exports = {listProducts, addProduct};
