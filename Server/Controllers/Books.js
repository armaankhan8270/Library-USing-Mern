import JsonBook from "../Models/BookJson.js";
import Book from "../Models/Books.js";
import bookscv from "../Models/Bookscvs.js";
export const UploadBook = async (req, res, next) => {
  const NewBook = new JsonBook(req.body);
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
export const AllJsonBooks = async (req, res, next) => {
  try {
    const AllBook = await JsonBook.find();
    res.json(AllBook);
  } catch (error) {
    next(error);
  }
};
export const JsonBooks = async (req, res, next) => {
  const id = req.params.uid;
  try {
    const AllBook = await JsonBook.findById(id);
    res.json(AllBook);
  } catch (error) {
    next(error);
  }
};
export const GetBooks = async (req, res, next) => {
  try {
    const AllBook = await Book.find();
    res.json(AllBook);
  } catch (error) {
    next(error);
  }
};
