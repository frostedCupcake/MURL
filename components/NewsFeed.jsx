import Link from "next/link";
import React from "react";

const NewsFeed = () => {
  return (
    <div className="flex flex-row gap-10 items-center justify-center my-10">
      <div className="border-2 border-zinc-600 p-5 rounded-md w-[20rem]">
        <h3 className="uppercase py-2 text-xl">NEWS</h3>
        <ul>
          <li className="pt-2">
            1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ducimus, consequatur!
          </li>
          <li className="pt-2">
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <button className="uppercase text-sky-900 font-semibold py-3">
            read more
          </button>
        </ul>
      </div>
      <div className="border-2 border-zinc-600 p-5 rounded-md w-[20rem]">
        <h3 className="uppercase py-2 text-xl">upcoming events</h3>
        <ul>
          <li className="pt-2">
            1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ducimus, consequatur!
          </li>
          <li className="pt-2">
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <button className="uppercase text-sky-900 font-semibold py-3">
            read more
          </button>
        </ul>
      </div>
      <div className="border-2  border-zinc-600 p-5 rounded-md w-[20rem]">
        <h3 className="uppercase py-2 text-xl">socials</h3>
        <ul>
          <li className="pt-2">
            1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ducimus, consequatur!
          </li>
          <li className="pt-2">
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <Link href="/">
            <button className="uppercase text-sky-900 font-semibold py-3">
              read more
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NewsFeed;
