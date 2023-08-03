import React, { useState, useEffect } from "react";
import styles from "./MainCarouselBar.module.css";
import { MainCarouselCard, CARD } from "../MainCarouselCard/MainCarouselCard.jsx";
import Left from "../../../images/Icon-left.svg";
import Right from "../../../images/Icon-right.svg";


function MainCarouselBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [myAdvertData, setMyAdvertData] = useState(
    CARD.slice(currentIndex, currentIndex + 3)
  );
  const [renderer, setRenderer] = useState(false);

  function handleLeft() {
    const temp = myAdvertData.shift();
    myAdvertData.push(temp);
    setMyAdvertData(myAdvertData);
    setRenderer(!renderer);
  }

  function handleRight() {
    const temp = myAdvertData.pop();
    myAdvertData.unshift(temp);
    setMyAdvertData(myAdvertData);
    setRenderer(!renderer);
  }

  useEffect(() => {
    setCurrentIndex(currentIndex);
  }, [currentIndex]);

  return (
    <>
      <div className={styles.carouselBar}>
        <button onClick={handleLeft} className={styles.button}>
          <img src={Left} alt="Left" />
        </button>
        <div className={styles.carouselDesktopContainer}>
          {myAdvertData.map((elem) => {
            return (
              <div key={elem.id} className={styles.cardDesktop}>
                <MainCarouselCard
                  data={{
                    icon: elem.icon,
                    text: elem.text,
                    class: "desktop",
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.carouselMobileContainer}>
          {
            <MainCarouselCard
              data={{
                icon: myAdvertData[currentIndex].icon,
                text: myAdvertData[currentIndex].text,
                class: "mobile",
              }}
            />
          }
        </div>
        <button onClick={handleRight} className={styles.button}>
          <img src={Right} alt="Right" />
        </button>
      </div>
    </>
  );
}

export default MainCarouselBar;
