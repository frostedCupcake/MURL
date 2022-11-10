import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <div className="flex flex-col sm:flex-row-reverse items-center justify-center gap-10">
      <div className="">
        <Image
          src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg"
          height="300"
          width="300"
          alt={"Vision_image"}
        />
      </div>
      <div className="flex flex-col w-[80%] sm:w-[50%] md:w-[40rem] ">
        <h1 className="font-bold">Vision for the future</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
        accusamus sed voluptatem natus voluptatibus nihil iste beatae,
        perspiciatis iusto libero a nulla consequuntur cum corporis non iure
        corrupti velit. Expedita. Voluptatibus quam porro quibusdam eos mollitia
        earum ex sequi ipsa, quidem pariatur repellat atque amet illum expedita
        non tenetur obcaecati soluta quos, tempora, natus rerum corporis! In
        quod quasi praesentium?
      </div>
    </div>
  );
};

export default Vision;
