import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 100) {
  //         handleShow(true);
  //       } else handleShow(false);
  //     });
  //     return () => {
  //       window.removeEventListener("scroll");
  //     };
  //   }, []);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    // Agrega la función de escucha a la lista de dependencias del useEffect
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [handleShow]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
