import Image from "next/image";
import React from "react";

const Discription = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[8rem] p-5 bg-murl-dark text-white">
      <div className="flex flex-row justify-center items-center gap-10 mt-10">
        <div className="hidden md:block">
          <Image
            src={
              "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg"
            }
            height="400"
            width="400"
            alt="heading-image"
          />
        </div>
        <div className="md:w-[35rem] w-[100%] md:p-5 p-1 text-[1rem]">
          <p className="py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid id
            animi magni suscipit, reprehenderit optio dolores corrupti porro
            dignissimos iste recusandae iure officiis eius alias autem eos,
            asperiores laborum beatae?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores, maxime! Minima, consectetur qui eaque
            id suscipit ratione quas adipisci impedit sapiente, quam velit
            reprehenderit facere. Totam laborum ducimus
          </p>
          <p className="py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid id
            animi magni suscipit, reprehenderit optio dolores corrupti porro
            dignissimos iste recusandae iure officiis eius alias autem eos,
            asperiores laborum beatae?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores, maxime!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discription;
