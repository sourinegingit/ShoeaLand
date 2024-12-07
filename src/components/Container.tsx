import { useEffect, useState } from "react";
import shoesImage from "../../public/assets/shoes.svg";
import Loading from "./Loading";

type OnboardingState = "loading" | "welcome" | "slide1" | "slide2" | "slide3";

const Container = () => {
  const [currentState, setCurrentState] = useState<OnboardingState>("loading");
  useEffect(() => {
    setTimeout(() => {
      if (currentState === "loading") {
        setCurrentState("welcome");
      }
    }, 5000);
  }, [currentState]);

  const renderContent = () => {
    switch (currentState) {
        case "loading":
          return <Loading />;
  
        case "welcome":
          return (
            <div
              style={{ backgroundImage: `url(${shoesImage})` }}
              className="w-80 h-screen mx-auto"
            >
              <div className="flex flex-col justify-end  items-start h-screen text-center">
                <div
                  onClick={() => setCurrentState("slide1")}
                  className="items-start  p-4 flex flex-col bottom-4"
                >
                  <p className="text-white mt-2 text-lg  ">welcome to 👋</p>
                  <h1 className="text-white mt-2  text-3xl  ">shoea</h1>
                  <p className="text-white mt-2  text-start ">
                    The best sneakers & shoes e-commerse app of the century for
                    your fashion needs!
                  </p>
                </div>
              </div>
            </div>
          );
  
        case "slide1":
          return (
            <div className="flex flex-col h-screen mx-auto w-[25rem] bg-gray-300">
              <div className="w-full">
              
                <img
                  src="../../public/assets/page1.svg"
                  alt=""
                  className="w-full h-[30rem] object-cover" 
                />
              </div>
              <div className="flex flex-col items-center mt-4 p-2 ">
                <p className="text-lg ">We provide high quality just for you</p>
                <img
                  src="../../public/assets/dash1.svg"
                  alt=""
                  className="w-36 mt-8" 
                />
                <button
                  onClick={() => setCurrentState("slide2")}
                  className="mt-20  w-full p-2 rounded-full bg-black text-white text-lg"
                >
                  Next
                </button>
              </div>
            </div>
          );
  
        case "slide2":
          return (
            <div className="flex flex-col h-screen mx-auto w-[25rem] bg-gray-300">
              <div className="w-full">
             
                <img
                  src="../../public/assets/page2.svg"
                  alt=""
                  className="w-full h-[30rem] object-cover" 
                />
              </div>
              <div className="flex flex-col items-center mt-4 p-2 ">
                <p className="text-lg ">
                  Your satisfaction is our number one periority
                </p>
                <img
                  src="../../public/assets/dash2.svg"
                  alt=""
                  className="w-36 mt-8"
                />
                <button
                  onClick={() => setCurrentState("slide3")}
                  className="mt-20  w-full p-2 rounded-full bg-black text-white text-lg"
                >
                  Next
                </button>
              </div>
            </div>
          );
  
        case "slide3":
          return (
            <div className="flex flex-col h-screen mx-auto w-[25rem] bg-gray-300">
              <div className="w-full">

                <img
                  src="../../public/assets/page3.svg"
                  alt=""
                  className="w-full h-[30rem] object-cover" 
                />
              </div>
              <div className="flex flex-col items-center mt-4 p-2 ">
                <p className="text-lg ">
                  Let’s fulfill your fashion needs with shoearight now!
                </p>
                <img
                  src="../../public/assets/dash3.svg"
                  alt=""
                  className="w-36 mt-8"
                />
                <button
                  onClick={() => setCurrentState("loading")}
                  className="mt-20  w-full p-2 rounded-full bg-black text-white text-lg"
                >
                  Next
                </button>
              </div>
            </div>
          );
  
        default:
            break;
    }
  };
  return <div className="md:container md:mx-auto">{renderContent()}</div>;
};

export default Container;
