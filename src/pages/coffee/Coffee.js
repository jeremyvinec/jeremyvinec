import React, { useState } from "react";
import Header from "../../components/layouts/Header";
import BuyMeACoffe from "./BuyMeACoffe";

function Coffee() {

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  return (
    <>
      <Header
        logoSource='/favicon.png'
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content open" : "content"}>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="blog-single shadow-dark p-30">
              <p>Hi ! My name is Jérémy and I'm a web and mobile developer. Your generosity keeps my apps' circuits wired and bug-free.</p>
              <h4 className="mt-3">Projects</h4>
              <p className="mt-3">Nutritive — visualize at a glance the nutritional values ​​and indices of thousands of foods !</p>
              <BuyMeACoffe/>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Coffee;
