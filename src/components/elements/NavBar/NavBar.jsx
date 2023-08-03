import React from "react";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const navigation = useNavigate();

  function redirectMain() {
    props.handler();
    navigation("/");
  }

  return (
    <>
      <button onClick={redirectMain} className={styles.link}>
        Главная
      </button>
      <button className={styles.link}>Тарифы</button>
      <button className={styles.link}>FAQ</button>
    </>
  );
}

export default NavBar;
