import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "All",
  },
  {
    id: 2,
    text: "Webapp",
  },
  {
    id: 3,
    text: "Mobile",
  },
];

const allData = [
  {
    id: 1,
    title: "Bretagne Pompes Services",
    category: "Webapp",
    image: "images/works/webapp.jpg",
    popupLink: ["images/works/bps.png"],
  },
  {
    id: 2,
    title: "IVTracer",
    category: "Mobile",
    image: "images/works/mobile.jpg",
    link: "https://ivtracer.com/",
  },
  {
    id: 3,
    title: "Yuka MIW",
    category: "Mobile",
    image: "images/works/yuka.jpg",
    popupLink: ["https://www.youtube.com/watch?v=BOOEVAaLoaY&feature=youtu.be"],
  },
  {
    id: 4,
    title: "Rolling Balls",
    category: "Mobile",
    image: "images/works/mini-loto.png",
    popupLink: [
      "images/works/mini-loto.png",
      "images/works/mini-loto-2.png",
      "images/works/mini-loto-3.png"
    ],
  },
  {
    id: 5,
    title: "iMac Mockup Design",
    category: "art",
    image: "images/works/optitrainer.png",
    popupLink: ["images/works/optitrainer.png"],
  },
  {
    id: 6,
    title: "Game Store App Concept",
    category: "design",
    image: "images/works/6.svg",
    link: "https://dribbble.com",
  },
  {
    id: 7,
    title: "Project Managment Illustration",
    category: "art",
    image: "images/works/3.svg",
    link: "https://pinterest.com",
  },
  {
    id: 8,
    title: "Guest App Walkthrough Screens",
    category: "design",
    image: "images/works/1.svg",
    popupLink: ["images/works/1.svg"],
  },
  {
    id: 9,
    title: "Delivery App Wireframe",
    category: "branding",
    image: "images/works/4.svg",
    popupLink: ["images/works/4.svg"],
  },
  {
    id: 10,
    title: "Game Store App Concept",
    category: "design",
    image: "images/works/6.svg",
    link: "https://dribbble.com",
  },
  {
    id: 11,
    title: "Project Managment Illustration",
    category: "art",
    image: "images/works/3.svg",
    link: "https://pinterest.com",
  },
  {
    id: 12,
    title: "Guest App Walkthrough Screens",
    category: "design",
    image: "images/works/1.svg",
    popupLink: ["images/works/1.svg"],
  },
  {
    id: 13,
    title: "Delivery App Wireframe",
    category: "branding",
    image: "images/works/4.svg",
    popupLink: ["images/works/4.svg"],
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle 
          title="Porfolio" 
          description="Une sélection de projets sur lesquels j'ai pu intervenir. (en cours)" 
        />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> ...
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
