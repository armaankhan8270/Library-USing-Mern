import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GlobalUserContext } from "../context/user";
import book from "./images/confessions-of-zeno.jpg";

const AllBooks = () => {
  const { setid } = GlobalUserContext();
  const [Books, setBooks] = useState([]);
  const [quote, setquote] = useState([]);
  useEffect(() => {
    const GetAllBooks = async () => {
      const url = `http://localhost:3001/book/json`;
      await axios.get(url).then((books) => {
        console.log(books.data);
        setBooks(books.data);
      });
    };

    GetAllBooks();
  }, []);
  useEffect(() => {
    const GetAllQuotes = async () => {
      const url = `https://type.fit/api/quotes`;
      await axios.get(url).then((books) => {
        console.log(books.data);
        setquote(books.data);
      });
    };
    GetAllQuotes();
  }, []);
  console.log(Books);
  return (
    <div>
      <section className="flex flex-row flex-wrap">
        <h1 className="text-3xl m-4 sm:ml-0 lg:ml-[20%] shadow-lg p-3 bg-cyan-300 rounded-lg font-serif">
          Images Are Random We Add Images Of Book Soon
        </h1>
        {Books?.map((item, id) => {
          return (
            <div>
              <div class="flex justify-center m-10">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  <img
                    class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    // src={`https://picsum.photos/500/300?random=${id}`}
                    src={
                      item.imageLink
                        ? item.imageLink
                        : `https://picsum.photos/500/300?random=${id}`
                    }
                    alt=""
                  />
                  <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">
                      {item.title}
                    </h5>
                    <p class="text-cyan-900 font-bold text-start m-3 mb-4">
                      {quote[id]?.text}
                    </p>
                    <p class="text-gray-900 text-sm font-extrabold">
                      {item.author}
                    </p>
                    <p class="text-gray-900 ">{item.language}</p>
                    <p class="text-gray-900 text-start ">Pages:{item.pages}</p>
                    <button
                      onClick={() => setid(item.id)}
                      className="bg-cyan-500 p-1 rounded-3xl shadow-inner lg:w-1/2 sm:w-20"
                    >
                      ID
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AllBooks;
