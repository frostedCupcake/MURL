import Image from "next/image";
import React from "react";

const Feed = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center pb-[8rem] mt-[4rem] gap-10 text-white">
      <div className="lg:w-[20rem] md:w-[15rem] w-[80%] border-2 border-[#eb1484] p-5 rounded-lg shadow-xl bg-murl-dark">
        <h1 className="text-center my-2 text-[#eb1484] font-bold text-xl uppercase">
          MURL NEWS
        </h1>
        <div className="text-[.8rem] flex flex-col">
          <ul className="mt-2">
            <li className="border-b border-murl-gray-1 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quam!
              <p className="block py-2 text-gray-50 text-[.7rem]">
                11 Nov 2022
              </p>
            </li>
            <li className="border-b border-murl-gray-1 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quam!
              <p className="block py-2 text-gray-50 text-[.7rem]">
                11 Nov 2022
              </p>
            </li>
            <li className="border-b border-murl-gray-1 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quam!
              <p className="block py-2 text-gray-50 text-[.7rem]">
                11 Nov 2022
              </p>
            </li>
            <li className="border-b border-murl-gray-1 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quam!
              <p className="block py-2 text-gray-50 text-[.7rem]">
                11 Nov 2022
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-[20rem] md:w-[15rem] w-[80%] border-2 border-[#eb1484] p-5 rounded-lg shadow-xl bg-murl-dark">
        <h1 className="text-center my-2 text-[#eb1484] font-bold text-xl uppercase">
          Upcomming events
        </h1>
        <div className="text-[.8rem] flex flex-col">
          <ul className="mt-2">
            <li className="border-b border-murl-gray-1 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quam!
              <p className="block py-2 text-gray-50 text-[.7rem]">
                11 Nov 2022
              </p>
            </li>
            <li className="border-b border-murl-gray-1 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quam!
              <p className="block py-2 text-gray-50 text-[.7rem]">
                11 Nov 2022
              </p>
            </li>
            <li className="border-b border-murl-gray-1 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quam!
              <p className="block py-2 text-gray-50 text-[.7rem]">
                11 Nov 2022
              </p>
            </li>
            <li className="border-b border-murl-gray-1 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quam!
              <p className="block py-2 text-gray-50 text-[.7rem]">
                11 Nov 2022
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-[20rem] md:w-[15rem] w-[80%] border-2 border-[#eb1484] p-5 rounded-lg shadow-xl bg-murl-dark">
        <h1 className="text-center my-2 text-[#eb1484] font-bold text-xl uppercase">
          @MURL Tweets
        </h1>
        <div className="text-[.8rem] flex flex-col">
          <ul className="mt-2">
            <li className="border-b border-murl-gray-1 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quam!
              <p className="block py-2 text-gray-50 text-[.7rem]">
                11 Nov 2022
              </p>
            </li>
            <li className="border-b border-murl-gray-1 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quam!
              <p className="block py-2 text-gray-500 text-[.7rem]">
                11 Nov 2022
              </p>
            </li>
            <li className="border-b border-murl-gray-1 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quam!
              <p className="block py-2 text-gray-500 text-[.7rem]">
                11 Nov 2022
              </p>
            </li>
            <li className="border-b border-murl-gray-1 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quam!
              <p className="block py-2 text-gray-500 text-[.7rem]">
                11 Nov 2022
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feed;
