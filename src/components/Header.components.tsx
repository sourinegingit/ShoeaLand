import { FaBell, FaHeartBroken } from "react-icons/fa";
import Container from "../Container";
import { useState } from "react";
import { IProductProps } from "./products/ProductCard";
import { Link } from "react-router-dom";

const Header = () => {
  const [favorites, setFavorites] = useState<IProductProps[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  return (
    <div className="  sticky top-0 w-full bg-slate-200 gap-3 md:gap-0 lg:gap-96 z-30 shadow-sm  ">
      <Container>
        <div className="flex items-center justify-between gap-64 p-2">
          <div className="flex gap-2 ">
            <img
              src="/assets/negin.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex items-start flex-col ">
              <p className="font-medium text-lg text-gray-700">
                Good Morning 👋
              </p>
              <p className="text-gray-500">Negin Souri</p>
            </div>
          </div>

          <div id="user-action" className="flex items-center gap-4">
          <Link to="/favorites">
            <FaHeartBroken className="text-3xl" />
            </Link>

            <a href="favoritePage.html" className="text-gray-700">
              <FaBell className="text-3xl" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
