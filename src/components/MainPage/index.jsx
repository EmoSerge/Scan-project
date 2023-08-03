import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
import TariffCard from "../elements/TariffCard/TariffCard.jsx";
import MainCarouselBar from "../elements/MainCarouselBar/MainCarouselBar.jsx";
import MainImage from "../../images/Main-image.svg";
import AdvertImagePrimary from "../../images/Advert-image-primary.svg";
import AdvertImageSecondary from "../../images/Advert-image-secondary.svg";
import Bulb from "../../images/Bulb-image.svg";
import Target from "../../images/Target-image.svg";
import Note from "../../images/Note-image.svg";

function MainPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainInfo}>
          <div className={styles.mainContent}>
            <h1 className={styles.mainTitle}>
              сервис по поиску публикаций о компании по его ИНН
            </h1>
            <div className={styles.mainDescription}>
              Комплексный анализ публикаций, получение данных в формате PDF на
              электронную почту.
            </div>
            <nav className={styles.nav}>
              <Link className={styles.requestData} to={"/search"}>
                Запросить данные
              </Link>
            </nav>
          </div>
          <div className={styles.mainImage}>
            <img src={MainImage} alt="MainImage" />
          </div>
        </div>
        <div className={styles.advertisementBar}>
          <div>Почему именно мы</div>
          <div className={styles.carouselDesktop}>
            <MainCarouselBar />
          </div>
        </div>
        <div className={styles.advertImage}>
          <div className={styles.advertImagePrimary}>
            <img src={AdvertImagePrimary} alt="AdvertisingPicture" />
          </div>
          <div className={styles.advertImageSecondary}>
            <img src={AdvertImageSecondary} alt="AdvertisingPicture" />
          </div>
        </div>
        <div className={styles.tariffTitle}>наши тарифы</div>
        <div className={styles.tariffs}>
          <TariffCard
            title={["Beginner", "Для небольшого исследования", { icon: Bulb }]}
            prices={[
              "799 ₽",
              "1 200 ₽",
              "или 150 ₽/мес. при рассрочке на 24 мес.",
            ]}
            details={[
              "Безлимитная история запросов",
              "Безопасная сделка",
              "Поддержка 24/7",
            ]}
            isPurchased={false}
            color={{
              primaryColor: "rgba(255, 182, 79, 1)",
              secondaryColor: "rgba(0, 0, 0, 1)",
            }}
          />
          <TariffCard
            title={["Pro", "Для HR и фрилансеров", { icon: Target }]}
            prices={[
              "1 299 ₽",
              "2 600 ₽",
              "или 279 ₽/мес. при рассрочке на 24 мес.",
            ]}
            details={[
              "Все пункты тарифа Beginner",
              "Экспорт истории",
              "Рекомендации по приоритетам",
            ]}
            isPurchased={true}
            color={{
              primaryColor: "rgba(124, 227, 225, 1)",
              secondaryColor: "rgba(0, 0, 0, 1)",
            }}
          />
          <TariffCard
            title={["Business", "Для корпоративных клиентов", { icon: Note }]}
            prices={["2 379 ₽", "3 700 ₽", ""]}
            details={[
              "Все пункты тарифа Pro",
              "Безлимитное количество запросов",
              "Приоритетная поддержка",
            ]}
            isPurchased={false}
            color={{
              primaryColor: "rgba(0, 0, 0, 1)",
              secondaryColor: "rgba(255, 255, 255, 1)",
            }}
          />
        </div>
      </main>
    </>
  );
}

export { MainPage };