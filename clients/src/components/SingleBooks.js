import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalUserContext } from "../context/user";

const SingleBooks = () => {
  const { id } = GlobalUserContext();
  const [singlebook, setsinglebook] = useState([]);
  useEffect(() => {
    const url = `http://localhost:3001/book/getby/${id}`;
    axios.get(url).then((item) => {
      setsinglebook(item.data[0]);
      console.log(item.data.title);
    });
  }, []);
  return (
    <div className="bg-cyan-500 h-36 text-black">
      f
      {singlebook?.map((item, ind) => {
        return (
          <div>
            fgtegt<h1>{item.title}</h1> {item.title}
            {ind}
          </div>
        );
      })}
    </div>
  );
};

export default SingleBooks;
