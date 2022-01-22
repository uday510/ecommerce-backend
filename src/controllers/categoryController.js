const Category = require('../models/category');
module.exports = {
    listCategories: function(req, res) {
        Category.listCategories(function(err, result){
             // return res.send({message: "OK"});
        if (err) {
            console.log(err);
            return res.status(500).send({
            msg: "Error in fetching categories",
            success: false,
            // status: 500
        });
    }
        return res.status(200).send({
        msg: "Successfully fetched categories",
        categories: result,
        success: true,
        // status: 200
    });
    })
 }
}



