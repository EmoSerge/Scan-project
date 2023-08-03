import React from "react";
import { Link } from "react-router-dom";
import styles from "./TariffCard.module.css";
import Tick from "../../../images/Tick-image.svg";

function TariffCard(props) {
  return (
    <div
      style={
        props.isPurchased
          ? {
              border: `1px solid ${props.color.primaryColor}`,
            }
          : { border: "none" }
      }
      className={styles.tariffCard}
    >
      <div
        style={{
          backgroundColor: props.color.primaryColor,
          color: props.color.secondaryColor,
        }}
        className={styles.tariffHeader}
      >
        <div className={styles.tariffInfo}>
          <header>{props.title[0]}</header>
          <div>{props.title[1]}</div>
        </div>
        <div className={styles.tariffImage}>
          <img src={props.title[2].icon} alt="TariffImage" />
        </div>
      </div>
      <div className={styles.currentTarifContainer}>
        {props.isPurchased ? (
          <div className={styles.currentTariff}>Текущий тариф</div>
        ) : (
          <div className={styles.emptyLine}></div>
        )}
      </div>
      <div className={styles.prices}>
        <div className={styles.currentPrice}>{props.prices[0]}</div>
        <div className={styles.oldPrice}>{props.prices[1]}</div>
      </div>
      <div>
        {props.prices[2] ? (
          <div className={styles.creditPrice}>{props.prices[2]}</div>
        ) : (
          <div className={styles.emptyCredit}></div>
        )}
      </div>
      <div className={styles.detailsTitle}>В тариф входит:</div>
      <div className={styles.details}>
        <div className={styles.detailsText}>
          <img src={Tick} alt="Галочка" />
          {props.details[0]}
        </div>
        <div className={styles.detailsText}>
          <img src={Tick} alt="Галочка" />
          {props.details[1]}
        </div>
        <div className={styles.detailsText}>
          <img src={Tick} alt="Галочка" />
          {props.details[2]}
        </div>
      </div>
      {props.isPurchased ? (
        <div className={styles.toMyAccount}>
          <Link to={"#"}>Перейти в личный кабинет</Link>
        </div>
      ) : (
        <div className={styles.aboutTariff}>
          <Link to={"#"}>Подробнее</Link>
        </div>
      )}
    </div>
  );
}

export default TariffCard;
