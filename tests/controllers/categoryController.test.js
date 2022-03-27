const {mockRequest, mockResponse} = require('../mocker');
const jestMock = require('jest-mock'); 
const categoryModel = require('../../src/models/category');
const categoryController = require('../../src/controllers/categoryController');

const testPayLoad = [
    {
        categoryId: 1,
        name: "Electronics"
    },
    {
        categoryId: 2,
        name: "Fashion"
    }
];

it('Category controller should return error on n all category', async() => {
    const spy = jestMock.spyOn(categoryModel, 'listCategories').mockImplementation( (cb) => {
        cb(new Error("This is a new error"), null); 
    });
    const req = mockRequest();
    const res = mockResponse();

    await categoryController.listCategories(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith( {
          msg: "Error in fetching categories",
          success: false,
    });

});

it('Category controller should return list of category on all category', async() => {
    const spy = jestMock.spyOn(categoryModel, 'listCategories').mockImplementation( (cb) => {
        cb(null, testPayLoad); 
    });
    const req = mockRequest();
    const res = mockResponse();

    await categoryController.listCategories(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith( {
      msg: "Successfully fetched categories",
      categories: testPayLoad,
      success: true,
    });
})
