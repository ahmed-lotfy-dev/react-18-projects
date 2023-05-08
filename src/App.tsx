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
      <h1>John Smilga Course</h1>
      <h2>React 18 Projects</h2>
    </section>
  );
}

export default App;
