import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import moment from "moment";
import { useParams } from "react-router-dom";
import { mockBlogData } from "../../data/mockData";
import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { getObjectsOfSameCategory } from "../../utils/functions";
import RelatedCard from "./RelatedCard";
import SectionHeader from "../../components/SectionHeader";
import { useEffect } from "react";

const ArticleDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { slug } = useParams();
  const blogArticle = mockBlogData.find((obj) => obj["slug"] === slug);
  const relatedArticles = getObjectsOfSameCategory(
    mockBlogData,
    blogArticle.category
  ).slice(0, 4);

  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-xl md:text-3xl font-black md:font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {blogArticle.title}
              </h1>
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <Avatar sx={{ width: 60, height: 60, marginRight: 2 }} />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {blogArticle.author}
                    </a>
                    <p className=" text-md md:text-base font-light text-gray-500 dark:text-gray-400">
                      {blogArticle.source}
                    </p>
                    <p className=" text-md md:text-base font-light text-gray-500 dark:text-gray-400">
                      {moment(blogArticle.published_at).format("LLL")}
                    </p>
                  </div>
                </div>
              </address>
            </header>
            <figure className="h-300px overflow-hidden">
              <img
                src={blogArticle.image}
                alt=""
                className="w-full max-h-[420px] mb-6 rounded-lg object-cover"
              />
            </figure>
            <p className="text-gray-600 text-justify mb-5">
              {blogArticle.body}
            </p>

            <hr />
            <section className="not-format mt-5">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
                  Discussion (20)
                </h2>
              </div>
              <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      John Smith
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      March 12, 2022
                    </p>
                  </div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVert />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        width: "20ch",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>Report</MenuItem>
                  </Menu>
                </footer>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  eligendi molestiae quibusdam in sint quasi placeat voluptas
                  quos praesentium laboriosam.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      aria-hidden="true"
                      className="mr-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      Jane Mathew
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      April 12, 2022
                    </p>
                  </div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVert />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        width: "20ch",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>Report</MenuItem>
                  </Menu>
                </footer>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      aria-hidden="true"
                      className="mr-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      John Armstrong
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      July 31, 2022
                    </p>
                  </div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVert />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        width: "20ch",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>Report</MenuItem>
                  </Menu>
                </footer>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  at accusamus nobis eius.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      aria-hidden="true"
                      className="mr-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      Elizabeth Kushiak
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time dateTime="2022-06-23" title="June 23rd, 2022">
                        August 3, 2022
                      </time>
                    </p>
                  </div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVert />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        width: "20ch",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>Report</MenuItem>
                  </Menu>
                </footer>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias asperiores voluptates aspernatur dolor nesciunt
                  quaerat.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      aria-hidden="true"
                      className="mr-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                    Reply
                  </button>
                </div>
              </article>

              <form className="mb-6 pt-10">
                <hr />
                <div className="flex justify-between items-center mt-6 mb-2">
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
                    Post A Comment
                  </h2>
                </div>
                <label htmlFor="fullname" className="">
                  Full Name
                </label>
                <div className=" mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                  <input
                    id="fullname"
                    className="px-5 py-2"
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>
                <label htmlFor="comment" className="">
                  Your comment
                </label>
                <div className=" mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                  <textarea
                    id="comment"
                    rows="6"
                    className="px-5 py-2 w-full text-sm text-gray-900 border-0 focus:ring-0"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-600 hover:bg-red-800 transition-all duration-100"
                >
                  Post comment
                </button>
              </form>
            </section>
          </article>
        </div>
      </main>

      <aside aria-label="Related articles" className="py-8 lg:py-24 bg-white">
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            <SectionHeader txt="Related articles" />
          </div>

          <div className="grid lg:gap-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedArticles.map((article, i) => (
              <div key={i}>
                <RelatedCard
                  title={article.title}
                  description={article.description}
                  category={article.category}
                  image={article.image}
                  author={article.author}
                  published_at={article.published_at}
                  slug={article.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ArticleDetails;
