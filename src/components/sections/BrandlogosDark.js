import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "images/clients/optitrainer.png",
    link: "https://www.optitrainer.fr/",
  },
  {
    id: 2,
    image: "images/clients/netceler.png",
    link: "https://netceler.com/en/home/",
  },
  {
    id: 3,
    image: "images/clients/bloom-code.png",
    link: "https://bloom-code.com/",
  },
  {
    id: 4,
    image: "images/clients/imageimages.png",
    link: "https://www.imageimages.net/",
  },
];

function BrandlogosDark() {
  return (
    <div id="branglogos">
      <div className="container">
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <a href={brandlogo.link} target="_blanck">
                    <img src={brandlogo.image} alt="client-name" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandlogosDark;
