import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
    
  const user = useSelector(store=>store.user)
    const navigate=useNavigate()
    const handleSignOut=()=>{
        signOut(auth)
        .then(() => {
          // Sign-out successful.
          navigate("/")
        })
        .catch((error) => {
          // An error happened.
        //   navigate("/error")
        });
    }
 
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
    {user &&  
    <div className="flex p-2">
        <img
          className="hidden md:block w-12 h-12 m-2"
          alt="usericon"
          src={user?.photoURL}
        />
        <button className="bg-red-600 text-white m-3 p-2 rounded-md font-bold text-xl" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
