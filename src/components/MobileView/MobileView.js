import React from 'react'
import './MobileView.css'
import history from "../../assets/egypt-4k-best-for-computer-desktop-wallpaper-preview.jpg";
import food from "../../assets/desktop-wallpaper-egyptian-food-arabic-food.jpg";
import river from "../../assets/HD-wallpaper-the-nile-city-boats-desert-egypt-river-nile.jpg";
import { useEffect, useRef, useState } from "react";

const MobileView = () => {

    const [isactive, setIsactive] = useState(0);

    const targetRefs = useRef([]);
  
    useEffect(() => {
        const handleScroll = () => {
          targetRefs.current.forEach((targetRef, index) => {
            if (targetRef) {
              const targetElement = targetRef;
              const rect = targetElement.getBoundingClientRect();
              const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
              if ((rect.top >= 0 && rect.top <= windowHeight) || (rect.bottom >= 0 && rect.bottom <= windowHeight)) {
                setIsactive(index);
              }
            }
          });
        };
      
        handleScroll(); // Initial check on component mount
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  
    
  
    const features = [
      {
        title: "History",
        image: history,
      },
      {
        title: "Food",
        image: food,
      },
      {
        title: "River",
        image: river,
      },
    ];
  
    const handleFeature = (index) => {
      setIsactive(index);
      const targetElement = targetRefs.current[index];
      targetElement.scrollIntoView({ behavior: 'smooth' });
    };
    const handleMouseEnter = (index) => {
        const selectionElement = document.querySelector(".theselection_mobile");
        selectionElement.style.display = `block`;
        const element = document.querySelectorAll(".feature_title_mobile")[index];
        const width = element.offsetWidth;
        const positionLeft = element.offsetLeft;
        const positionTop = element.offsetTop;
        console.log(width);
        selectionElement.style.width = `${width}px`;
      selectionElement.style.left = `${positionLeft}px`;
      selectionElement.style.top = `${positionTop}px`;
  
    };
    const handleMouseLeave = () => {
      const selectionElement = document.querySelector(".theselection_mobile");
      selectionElement.style.display = `none`;
    };
  
  






    const viewportHeight = window.innerHeight; // Get the height of the viewport in pixels
    const pixels = 4000;
    const vhValue = (pixels / viewportHeight) * 100;



  return (
    <div className="tabletandmobile container pt-10 mx-auto px-11 block md:hidden"  >
        
        <div className="top-section sticky">
          <div className="feature_section flex justify-between items-center  relative ">
            {features.map((feature, index) => (
              <div
                className={`feature_title_mobile mr-8 cursor-pointer ${
                  isactive === index && "active"
                }`}
                onClick={() => handleFeature(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
              >
                {feature.title}
              </div>
            ))}
            <div className="theselection_mobile absolute"></div>
          </div>
        </div>
      <div
        className=" flex justify-between 
  parent_section flex-col items-center"
      >
        
        <div className="bottom-section flex  items-center justify-between flex-col	" style={{ minHeight: `${vhValue}vh` }}>
          <div className="eachpart index_0" ref={ref => (targetRefs.current[0] = ref)}>
            <h1 className="mb-5 text-center">
              Pyramids of <strong>Egypt</strong>: Monumental Marvels of Ancient
              History
            </h1>
            <div>
            <img src={features[0].image} className="feature_image my-10 mx-auto"  alt=''/>
          </div>
            <p>
              Discover the awe-inspiring pyramids of Egypt,{" "}
              <strong>
                standing as majestic symbols of an extraordinary civilization.
              </strong>{" "}
              Immerse yourself in their timeless presence and unravel the
              mysteries of an ancient world, where monumental engineering and
              cultural splendor converge.
            </p>
          </div>
          <div className="eachpart">
            <h1 className="mb-5 text-center">
              "Khufu: Unveiling <strong>the Legacy</strong> of Egypt's Pharaoh"
            </h1>
            <p>
              Enter the world of Khufu, the legendary pharaoh of ancient Egypt.
              <strong>Explore his awe-inspiring reign</strong> , epitomized by
              the iconic Great Pyramid of Giza. Experience the grandeur of this
              architectural masterpiece, a testament to Khufu's vision and
              lasting influence. Uncover the enigmatic stories surrounding
              Khufu, a ruler who left an indelible mark on history, captivating
              minds through the ages
            </p>
          </div>
          <div className="eachpart index_1" ref={ref => (targetRefs.current[1] = ref)}>
            <h1 className="mb-5 text-center">
              "<strong>Savor the Flavors of Egypt:</strong> A Culinary Journey
              through Ancient Traditions"
            </h1>
            <div>
            <img src={features[1].image} className="feature_image my-10 mx-auto"  alt=''/>
          </div>
            <p>
              Embark on a gastronomic adventure through Egypt's rich culinary
              heritage. Discover the tantalizing aromas and vibrant flavors that
              have delighted palates for centuries. From hearty Kushari and
              fragrant <strong>Mulukhiyah</strong> to delicate{" "}
              <strong>Koshari</strong> and indulgent <strong>Umm Ali</strong> ,
              immerse yourself in the diverse tapestry of Egyptian cuisine.
              Experience the fusion of ancient traditions and modern influences,
              where age-old recipes and exotic spices create a truly
              unforgettable dining experience.
            </p>
          </div>
          <div className="eachpart">
            <h1 className="mb-5 text-center">
              "<strong>Egyptian Delights:</strong> Exploring the Treasures of
              Traditional Cuisine"
            </h1>
            <p>
              Delight in the authentic tastes of Egypt's culinary treasures.
              Indulge in delectable dishes that have been passed down through
              generations, reflecting the country's rich history and cultural
              diversity. From the crispy <strong>falafel</strong> and savory{" "}
              <strong>shawarma</strong> to the mouthwatering molokhia and
              fragrant <strong>basbousa</strong>, experience the vibrant flavors
              that define Egyptian cuisine. Let each bite transport you to the
              bustling streets of Cairo, where the aromas of spices and the
              warmth of hospitality blend harmoniously.
            </p>
          </div>
          <div className="eachpart index_2" ref={ref => (targetRefs.current[2] = ref)}>
            <h1 className="mb-5 text-center">
              <strong>"The Lifeline of Egypt:</strong> Exploring the Majesty of
              the Nile River"
            </h1>
            <div>
            <img src={features[2].image} className="feature_image my-10 mx-auto "  alt=''/>
          </div>
            <p>
              Embark on a captivating journey along the timeless Nile River, the
              lifeblood of ancient Egypt. Traverse the legendary waters that
              have nurtured civilizations and shaped the nation's destiny.
              Experience the enchanting beauty of the river's meandering course,
              flanked by lush greenery and historic landmarks. From the bustling
              city of Cairo to the serene temples of Luxor and Aswan, immerse
              yourself in the grandeur and significance of the Nile. Discover
              the tales that echo along its banks, where history, culture, and
              natural wonders intertwine.
            </p>
          </div>
          <div className="eachpart">
            <h1 className="mb-5 text-center">
              <strong>"Unveiling the Secrets of the Nile:</strong> A Voyage into
              Egypt's Ancient Heart"
            </h1>
            <p>
              Embark on an extraordinary odyssey along the mystical Nile River,
              the timeless artery that has witnessed the rise and fall of mighty
              civilizations. Journey through the heart of Egypt, where the
              river's gentle flow unveils breathtaking landscapes and historical
              treasures. Sail past ancient temples and iconic monuments, tracing
              the footsteps of pharaohs and explorers. Immerse yourself in the
              Nile's allure, where its serene waters and fertile banks hold the
              key to unlocking the mysteries of Egypt's past. Let the spirit of
              the Nile guide you on a transformative voyage of discovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileView