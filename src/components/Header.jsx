import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

  const {currentUser} = useSelector((state)=>state.user);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Demo Real Estate</span>
            <span className="text-slate-700">Mumbai</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />

          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 j items-center ">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer p-2">
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer p-1 ">
              About
            </li>
          </Link>
          <Link to ="/profile">
          {currentUser ? (
            <img src={currentUser.avatar} alt="UserPic" className="w-8 h-8 rounded-full"/>
          ) : (
            <li className="text-slate-700 cursor-pointer bg-emerald-600 p-1 rounded-lg hover:bg-slate-600 hover:text-slate-100 transition-all duration-150">
              Sign In
            </li>
          )}

          </Link>
       
        </ul>
      </div>
    </header>
  );
};

export default Header;
