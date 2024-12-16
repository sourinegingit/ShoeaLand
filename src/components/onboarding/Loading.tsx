import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners"

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    setTimeout(() => {
        navigate('/welcome')

      
    }, 5000);
  }, []);
  return (
    <div className="flex flex-col items-center gap-36 justify-center  p-2  ">
      <h1 className="text-3xl font-semibold mt-[15rem]">shoea</h1>
      <CircleLoader className="mt-40 " />
    </div>
  )
}

export default Loading
