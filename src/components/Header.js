import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const dispatch=useDispatch()
  const user = useSelector(store=>store.user)
    const navigate=useNavigate()
    const handleSignOut=()=>{
        signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        //   navigate("/error")
        });
    }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
  
      // Unsiubscribe when component unmounts
      return () => unsubscribe();
    }, []);
 
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44"
        src={LOGO}
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
