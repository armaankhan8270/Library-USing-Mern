import axios from "axios";
import React, { useState } from "react";
import AllBooks from "./AllBooks";

const CreatePost = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [year, setyear] = useState();
  const [price, setprice] = useState();
  const [pages, setpages] = useState("");
  const [imageLink, setimageLink] = useState("");
  const [language, setlanguage] = useState("");
  const [quote, setquote] = useState("");
  const [After, setAfter] = useState(false);
  const UploadBlog = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/book/upload";
    const BlogDatas = {
      title,
      author,
      year,
      // price,
      pages,
      imageLink,
      language,
      quote,
    };
    await axios
      .post(url, BlogDatas)
      .then((e) => {
        console.log(e);
        alert(e.data);
        setAfter(true);
      })
      .catch((e) => {
        console.log(e.response.data);
        alert(e);
      });
  };
  return (
    <>
      {!After ? (
        <div className="lg:w-1/2 sm:w-full bg-slate-400  lg:mt-12 sm:mt-4  lg:ml-80 sm:ml-0 lg:pr-12 lg:pl-12 rounded-xl sm:p-4 shadow-2xl">
          <h1 className="lg:text-3xl lg:m-5 sm:text-sm text-center">
            Create your Blog
          </h1>

          <div class="block p-6 lg:ml-16 md:ml-0 rounded-lg shadow-lg bg-white max-w-md">
            <form onSubmit={UploadBlog} encType="multipart/form-data">
              <div class="form-group mb-6">
                <input
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  type="text"
                  placeholder="title"
                  class="form-control block
                  
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="author"
                  value={author}
                  onChange={(e) => setauthor(e.target.value)}
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="quote"
                  value={quote}
                  onChange={(e) => setquote(e.target.value)}
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Year"
                  value={year}
                  onChange={(e) => setyear(e.target.value)}
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="languaage"
                  value={language}
                  onChange={(e) => setlanguage(e.target.value)}
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="pages"
                  value={pages}
                  onChange={(e) => setpages(e.target.value)}
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding   border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="price"
                  onChange={(e) => setprice(e.target.value)}
                />
              </div>
              <div class="form-group mb-6"></div>

              <div class="flex justify-center items-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    onChange={(e) => setimageLink(e.target.value)}
                    type="text"
                    value={imageLink}
                    placeholder="url of image"
                    class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                  {/* <FileBase64
                id="dropzone-file"
                type="file"
                required="false"
                multiple={false}
                onDone={({ base64 }) => {
                  setphoto(base64);
                  console.log(base64);
                }}
                // onChange={({ base64 }) => {
                //   setphoto(base64);
                //   console.log(base64);
                // }}
              /> */}
                </label>
              </div>

              <div
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="user_avatar_help"
              >
                A profile picture is useful to confirm your are logged into your
                account
              </div>
              <div class="form-group form-check text-center mb-6">
                <input
                  type="checkbox"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="exampleCheck87"
                  accept="pdf"
                />
                <label
                  class="form-check-label inline-block text-gray-400"
                  for="exampleCheck87"
                >
                  <h1 className="lg:text-xl m-3 ">
                    We add Add Image fuctionalty Soon
                  </h1>
                </label>
              </div>

              <button
                type="submit"
                class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                // onClick={UploadBlog}
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      ) : (
        <AllBooks />
      )}
    </>
  );
};

export default CreatePost;
{
  /* */
}

{
  /* <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea> */
}
