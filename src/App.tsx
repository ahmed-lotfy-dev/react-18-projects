import { useState, useEffect } from "react";
import { Iperson } from "./libs/data";
import data from "./libs/data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function App() {
  const [people, setPeople] = useState<Iperson[] | []>(data);
  const [index, setIndex] = useState<Number>(0);

  const handlePrevSlide = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(+index - 1);
    }
  };

  const handleNextSlide = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(+index + 1);
    }
  };

  useEffect(() => {
    const autoPlaySlides = setTimeout(() => {
      handleNextSlide();
      return clearTimeout(autoPlaySlides);
    }, 4000);
  }, [index]);

  return (
    <section className="justify-center items-center w-[80vw] h-[450px] min-w-[800px] text-center overflow-hidden m-auto mt-16">
      <div className="text-center mb-[2rem]">
        <h2 className="flex justify-center items-center font-bold text-3xl">
          <span className="text-orange-600 mr-6 font-extrabold text-1xl">
            /
          </span>
          Reviews
        </h2>
      </div>
      <div className=" w-full relative">
        {people.map((person, idx) => {
          const { name, id, image, title, quote } = person;
          return (
            <article
              className={`flex flex-col gap-x-6 absolute top-0 left-0 w-full h-full opacity-0 text-center ${
                index === idx ? "activeSlide" : ""
              }`}
              key={id}
            >
              <img
                src={image}
                alt={image}
                className="w-[160px] h-[160px] m-auto object-cover object-top rounded-full mb-10 border-4 border-solid bg-gray-500 shadow-gray-600"
              />
              <h4 className="uppercase text-orange-600 mb- ">{name}</h4>
              <p className="capitalize mb-3 text-gray-400">{title}</p>
              <p className="max-w-xl m-auto mt-8 text-gray-500">{quote}</p>
              <FaQuoteRight />
            </article>
          );
        })}
      </div>
      <button
        className="absolute top-1/3 left-[32%] text-5xl mt-4 text-orange-600"
        onClick={() => handlePrevSlide()}
      >
        <FiChevronLeft />
      </button>
      <button
        className="absolute top-1/3 right-[32%] text-5xl mt-4 text-orange-600"
        onClick={() => handleNextSlide()}
      >
        <FiChevronRight />
      </button>
    </section>
  );
}

export default App;