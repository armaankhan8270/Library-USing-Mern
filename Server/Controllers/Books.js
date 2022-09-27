import Book from "../Models/Books.js";
export const UploadBook = async (req, res, next) => {
  const NewBook = new Book(req.body);
  try {
    const SavedBook = await NewBook.save();
    res.json(SavedBook);
  } catch (error) {
    next(error);
  }
};
export const AllBooks = async (req, res, next) => {
  try {
    const AllBook = await NewBook.find();
    res.json(AllBook);
  } catch (error) {
    next(error);
  }
};
