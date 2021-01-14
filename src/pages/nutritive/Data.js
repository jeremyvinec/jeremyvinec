import React, { useState } from "react";
import Header from "../../components/layouts/Header";

function Data() {

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
            <h2>Data Providers</h2>
            <p>Nutritive uses content from the following data suppliers:</p>
            <ul>
              <li>
                <p><a className="linkBlog" href="https://ciqual.anses.fr/" target="_blanck">Ciqual anses</a></p>
              </li>
            </ul>
            
            </div>
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Data;
