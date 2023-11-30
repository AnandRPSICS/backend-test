const {PurchasedBooksModel} = require('./bookSchema.js');


const bookRouter = require("express").Router();


bookRouter.post('/add', async (req, res) => {
    const {name, price, ownerId} = req.body;
    const newBook = await new PurchasedBooksModel({name, price, ownerId});
    await newBook.save();
    return res.status(200).send({message: 'Data inserted successfully', data: newBook});
})

bookRouter.get('/get', async (req, res) => {
    const books = await PurchasedBooksModel.find().populate('ownerId').populate('bookId')
    console.log('books', books);
    return res.status(200).send({message: 'Data fetched successfully', data: books});
})

module.exports = {
    bookRouter
}
