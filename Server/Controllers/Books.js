import Book from "../Models/Books.js";
import bookscv from "../Models/Bookscvs.js";
export const UploadBook = async (req, res, next) => {
  const NewBook = new Book(req.body);
  try {
    const SavedBook = await NewBook.save();
    res.json(SavedBook);
  } catch (error) {
    next(error);
  }
};
export const UploadBookcv = async (req, res, next) => {
  const NewBook = new bookscv(req.body);
  try {
    const SavedBook = await NewBook.save();
    res.json(SavedBook);
  } catch (error) {
    next(error);
  }
};
export const AllBooks = async (req, res, next) => {
  try {
    const AllBook = await bookscv.find();
    res.json(AllBook);
  } catch (error) {
    next(error);
  }
};
