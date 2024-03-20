// 'use client';

import MobileFooter from "@/components/mobileFooter/page";
// import { useState, useEffect } from "react";


export default function Home() {
  // const [displayText, setDisplayText] = useState("Jugnu");

  // useEffect(() => {
  //   // Function to fetch data from API
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://jugnu-backend.dcodingclub.com/");
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(">>> data", data)
  //         // Assuming the API returns an object with a 'text' property
  //         setDisplayText(data.message);
  //       } else {
  //         // If request is not successful, keep displaying "Jugnu"
  //         console.error("Failed to fetch data from API");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data from API:", error);
  //     }
  //   };

  //   // Call the fetch data function
  //   fetchData();
  // }, []);

  return (
    <main className="w-full sm:w-6/12 lg:w-4/12 xl:w-4/12 space-y-3 rounded-3xl bg-white shadow-2xl z-10">
      <div className="overflow-y-scroll" style={{paddingBottom: "56px"}}>
        <div className="realtive sticky top-0  h-36 w-full rounded-b-3xl bg-center cursor-pointer object-cover z-1 shadow-lg" style={{backgroundImage: "url('https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg')"}}>
          <nav className="p-2 flex flex-grow relative justify-between z-1 items-center mx-auto h-18">
            <div className="inline relative">
              <button type="button" className="inline-flex items-center relative text-gray-300 hover:text-white mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
                                </svg>
                            </button>
            </div>
            <div className="inline-flex">
              <a href="/" target="_blank">
                <div className="hidden">
                  <svg width="102" height="32" fill="currentcolor" style={{display: "block"}}>
                    <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z">
                    </path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="flex-initial">
              <div className="flex justify-end items-center relative">
                <div className="inline relative">
                  <div className="block flex-grow-0 flex-shrink-0">
                    <img className="rounded-xl w-8 h-8 border border-yellow-300 shadow" src="https://placehold.co/32x32" />
                                    </div>
                  </div>
                </div>
              </div>
          </nav>
          <div className="px-3 rounded-lg  flex flex-col w-full">
            <h4 className="text-white text-xl font-semibold  leading-tight truncate">Jugnu
            </h4>
            <div className="flex justify-between items-center ">
              <div className="flex flex-col">
                <h2 className="text-sm flex items-center text-gray-100 font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                    </path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {/* {displayText} */}
                </h2>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 px-3 z-1">
            <div className="relative w-full">
              <input type="text" className="bg-purple-white shadow rounded-xl border-0 p-3 w-full" placeholder="Search somthing..." />
              <div className="absolute top-0 right-0 p-4 pr-3 text-purple-lighter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className=" p-3 space-y-4 z-0">
          <h4 className="font-semibold mt-2">Heading</h4>
          <div className="flex items-center justify-between overflow-y-scroll text-gray-500 cursor-pointer space-x-3">
            <div className="flex flex-col items-center justify-center w-20  h-20  bg-green-200 rounded-2xl text-green-600 shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300">
              <i className="far fa-hotel"></i>
              <p className="text-sm mt-1">Title</p>
            </div>
            <div className="flex flex-col items-center justify-center w-20  h-20  bg-yellow-200 rounded-2xl text-yellow-600  shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300">
              <i className="far fa-bus"></i>
              <p className="text-sm mt-1">Title</p>
            </div>

            <div className="flex flex-col items-center justify-center w-20  h-20  bg-indigo-200  rounded-2xl  text-indigo-500 shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300">
              <i className="far fa-mountains"></i>
              <p className="text-sm mt-1">Title</p>
            </div>
            <div className="flex flex-col items-center justify-center w-20  h-20  bg-pink-200   rounded-2xl text-pink-500 shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300">
              <i className="far fa-umbrella-beach"></i>
              <p className="text-sm mt-1">Title</p>
            </div>
          </div>
          <h4 className="font-semibold">Heading</h4>
          <div className="grid m-0  grid-cols-2  space-x-4 overflow-y-scroll flex justify-center items-center w-full ">
            <div className="relative flex flex-col justify-between   bg-white shadow-md rounded-3xl  bg-cover text-gray-800  overflow-hidden cursor-pointer w-full object-cover object-center rounded-lg shadow-md h-64 my-2" style={{backgroundImage: "url('https://placehold.co/100x125')"}}>
              <div className="absolute bg-gradient-to-t from-green-400 to-blue-400  opacity-50 inset-0 z-0"></div>
              <div className="relative flex flex-row items-end  h-72 w-full ">
                <div className="absolute right-0 top-0 m-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 p-2 text-gray-200 hover:text-blue-400 rounded-full hover:bg-white transition ease-in duration-200 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                  </svg>
                </div>
                <div className="p-6 rounded-lg  flex flex-col w-full z-1 ">
                  <h4 className="mt-1 text-white text-xl font-semibold  leading-tight truncate">Loremipsum..
                  </h4>
                  <div className="flex justify-between items-center ">
                    <div className="flex flex-col">
                      <h2 className="text-sm flex items-center text-gray-300 font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                          </path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        subtitle
                      </h2>
                    </div>
                  </div>
                  {/* <div className="flex pt-4  text-sm text-gray-300">
                    <div className="flex items-center mr-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                      </svg>
                      <p className="font-normal">4.5</p>
                    </div>
                    <div className="flex items-center font-medium text-white ">
                      $1800
                      <span className="text-gray-300 text-sm font-normal"> /wk</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="relative flex flex-col justify-between   bg-white shadow-md  rounded-3xl  bg-cover text-gray-800  overflow-hidden cursor-pointer w-full object-cover object-center rounded-lg shadow-md h-64 my-2" style={{backgroundImage: "url('https://placehold.co/100x125')"}}>
              <div className="absolute bg-gradient-to-t from-blue-500 to-yellow-400  opacity-50 inset-0 z-0"></div>
              <div className="relative flex flex-row items-end  h-72 w-full ">
                <div className="absolute right-0 top-0 m-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 p-2 text-gray-200 hover:text-blue-400 rounded-full hover:bg-white transition ease-in duration-200 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                  </svg>
                </div>
                <div className="p-5 rounded-lg  flex flex-col w-full z-1 ">
                  <h4 className="mt-1 text-white text-xl font-semibold  leading-tight truncate">Loremipsum..
                  </h4>
                  <div className="flex justify-between items-center ">
                    <div className="flex flex-col">
                      <h2 className="text-sm flex items-center text-gray-300 font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                          </path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        subtitle
                      </h2>
                    </div>
                  </div>
                  {/* <div className="flex pt-4  text-sm text-gray-300">
                    <div className="flex items-center mr-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                      </svg>
                      <p className="font-normal">4.5</p>
                    </div>
                    <div className="flex items-center font-medium text-white ">
                      $1800
                      <span className="text-gray-300 text-sm font-normal"> /wk</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <h4 className="font-semibold">Heading</h4>
          <div className="grid grid-cols-1">
            <div className="">
              <div className="flex  bg-white shadow-md  rounded-2xl p-2">
                <img src="https://placehold.co/50x50" alt="Just a flower" className=" w-16  object-cover  h-16 rounded-xl" />
                <div className="flex flex-col justify-center w-full px-2 py-1">
                  <div className="flex justify-between items-center ">
                    <div className="flex flex-col">
                      <h2 className="text-sm font-medium">Lorem Ipsum</h2>
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 hover:text-blue-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg> */}
                  </div>
                  <div className="flex pt-2  text-sm text-gray-400">
                    <div className="flex items-center mr-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                      </svg>
                      <p className="font-normal">4.5</p>
                    </div>
                    {/* <div className="flex items-center font-medium text-gray-900 ">
                      $1800
                      <span className="text-gray-400 text-sm font-normal"> /wk</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
                  
      <MobileFooter></MobileFooter>
    </main>
  );
}
