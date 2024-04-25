import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Navbar.css";

function Navbar() {
  const [user] = useAuthState(auth);

  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    handleIndicator(itemsRef.current[activeIndex]);
  }, [activeIndex]);

  useEffect(() => {
    if (itemsRef.current[2]) {
      handleIndicator(itemsRef.current[activeIndex]);
    }
  }, [activeIndex]);  


  const signOut = async () => {
    await auth.signOut();
  };

  const handleIndicator = (el) => {
    if (indicatorRef.current && el) { // Убедитесь, что и indicatorRef и el существуют
      itemsRef.current.forEach((item) => {
        if (item) { // Проверьте, что элемент существует перед попыткой доступа к его свойствам
          item.classList.remove("is-active");
          item.removeAttribute("style");
        }
      });
  
      // Оставшаяся часть функции без изменений
      indicatorRef.current.style.width = `${el.offsetWidth}px`;
      indicatorRef.current.style.left = `${el.offsetLeft}px`;
      indicatorRef.current.style.backgroundColor =
        el.getAttribute("active-color");
  
      el.classList.add("is-active");
      el.style.color = el.getAttribute("active-color");
    }
  };
  
  
  

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={`nav-item ${activeIndex === 0 ? "is-active" : ""}`}
        active-color="orange"
        ref={(el) => (itemsRef.current[0] = el)}
        onClick={() => handleClick(0)}
      >
        profile
      </NavLink>

      <NavLink
        to="/schedule"
        className={`nav-item ${activeIndex === 2 ? "is-active" : ""}`}
        active-color="green"
        ref={(el) => (itemsRef.current[2] = el)}
        onClick={() => handleClick(2)}
      >
        Schedule
      </NavLink>
      <NavLink
        to="/search"
        className={`nav-item ${activeIndex === 3 ? "is-active" : ""}`}
        active-color="blue"
        ref={(el) => (itemsRef.current[3] = el)}
        onClick={() => handleClick(3)}
      >
        Search
      </NavLink>
      <NavLink
        to="/post"
        className={`nav-item ${activeIndex === 4 ? "is-active" : ""}`}
        active-color="purple"
        ref={(el) => (itemsRef.current[4] = el)}
        onClick={() => handleClick(4)}
      >
        Contacts
      </NavLink>
      <span className="nav-indicator" ref={indicatorRef}></span>
      <div className="nav-user-info">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img
              src={user?.photoURL || ""}
              width="40"
              height="40"
              alt="profile"
            />
            <button onClick={signOut}>Sign out</button>
          </>
        )}
        {!user && (
          <NavLink
            to="/login"
            className={`nav-item ${activeIndex === 5 ? "is-active" : ""}`}
            active-color="orange"
            ref={(el) => (itemsRef.current[5] = el)}
            onClick={() => handleClick(5)}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
