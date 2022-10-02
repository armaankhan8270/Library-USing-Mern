import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchCar = () => {
  const [query, setquery] = useState("Poems");
  const [data, setdata] = useState([{}]);
  const [refresh, setrefresh] = useState(0);
  useEffect(() => {
    const getdata = async () => {
      await axios
        .get(`http://localhost:3001/book/search?book=${query}`)
        .then((e) => {
          console.log(e.data[0]);
          setdata(e.data[0]);
        })
        .catch(() => alert("No Book Found"));
    };
    getdata();
  }, [refresh]);
  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="serach"
        onChange={(e) => {
          setquery(e.target.value);
        }}
        className="text-3xl outline-none placeholder:text-cyan-600 focus:outline-none p-4 shadow-xl rounded-2xl m-12 "
      />
      <button
        onClick={() => setrefresh(refresh + 1)}
        className="text-3xl rounded-2xl -ml-12 p-4 bg-slate-600"
      >
        Search
      </button>
      <section className="flex flex-row flex-wrap">
        <h1 className="text-3xl m-4 sm:ml-0 lg:ml-[20%] shadow-lg p-3 bg-cyan-300 rounded-lg font-serif">
          Images Are Random We Add Images Of Book Soon
        </h1>
        {data?.map((item, id) => {
          return (
            <div>
              <div class="flex justify-center m-10">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  <img
                    class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={`https://picsum.photos/500/300?random=${id}`}
                    alt=""
                  />
                  <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">
                      {item.title}
                    </h5>
                    <p class="text-cyan-900 font-bold text-start m-3 mb-4">
                      {/* {quote[id]?.text} */}
                    </p>
                    <p class="text-gray-900 text-sm font-extrabold">
                      {item.author}
                    </p>
                    <p class="text-gray-900 ">{item.language}</p>
                    <p class="text-gray-900 text-start ">Pages:{item.pages}</p>
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

export default SearchCar;
