
import { useNavigate } from "react-router-dom";


const Welcome = () => {
  const navigate = useNavigate();

    return (
        <div onClick={()=>navigate("/slide1")}
          style={{ backgroundImage: `url("assets/shoes.svg")` }}
          className="w-80 h-screen mx-auto"
        >
          <div className="flex flex-col justify-end  items-start h-screen text-center">
            <div
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
}

export default Welcome
