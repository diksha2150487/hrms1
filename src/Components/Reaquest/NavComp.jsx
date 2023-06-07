import React from "react";
import logo from "./logoKhushel.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineNotifications } from "react-icons/md";
import Navleftbar from "./Navleftbar";

function NavComp() {
  return (
    <>
      <header class="text-gray-700 body-font border-b border-gray-200">
        <div class="container mr-24 flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="https://tailblocks.cc"
            target="_blank"
          >
            <img src={logo} className="w-30 h-10" />
          </a>
          <nav class="md: ml-10 flex flex-wrap items-center text-base justify-center">
            <FaArrowLeft />
            <h1 className="mx-2 md:text-4*1 font-bold">Good morning John</h1>
            <form className=" ml-8">
              <input
                type="search"
                id="default-search"
                class="block w-full md: mr-28 pl-2 md text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </form>
          </nav>
          <div className=" flex flex-wrap p-5 flex-col md:flex-row items-center space-x-3">
            <h1>sa</h1>
            <h2>12</h2>
          </div>
          <div className="md:ml-auto">
            <button
              type="button"
              class="relative inline-flex items-center p-3 text-xl font-medium text-center border-2 border-blue-500/25    rounded-lg focus:ring-4  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <MdOutlineNotifications />
              <span class="sr-only">Notifications</span>
              <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs  font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                01
              </div>
            </button>
          </div>
          <button class="inline-flex items-center bg-gray-200 border-0 py-1 ml-10 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <img
            class="w-10 h-10 rounded-full"
            src="./images/bd41216e7ee29c26aff11f52cf98b3d0.jpg"
            alt="Rounded avatar"
          ></img>
        </div>
      </header>
      <Navleftbar />
    </>
  );
}

export default NavComp;
