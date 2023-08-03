import React, { useContext, useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import DocumentImage from "../../images/SearchPageImg3.svg";
import FolderImage from "../../images/SearchPageImg2.svg";
import GroupImage from "../../images/SearchPageImg1.svg";
import { Histograms, Objectsearch } from "../../API/data";
import { useNavigate } from "react-router-dom";
import  ResultContext  from "../../context/createContext";
import { validateInn } from "../../func/validateInn";


const SearchPage = () => {
  const navigate = useNavigate();
  const context = useContext(ResultContext)

  const [searchData, setSearchData] = useState({
    inn: "",
    completeness: false,
    businessContext: false,
    mainRole: false,
    tonality: "any",
    riskFactors: false,
    technicalNews: false,
    announcements: false,
    newsDigests: false,
    documentCount: "",
    startDate: "",
    endDate: "",
  });

  const [validInnResult, setValidInnResult] = useState({})

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSearchData({
      ...searchData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSearch = async () => {
    navigate('/result')
    context.setGeneralData(await Histograms(searchData))
    context.setData(await Objectsearch(searchData))
  };

  useEffect(() => {
    setValidInnResult(validateInn(searchData.inn))
  }, [searchData.inn])

  const isFormValid = () => {

    return (
      validInnResult.errorStatus &&
      (+searchData.documentCount > 0 && +searchData.documentCount <= 1000) &&
      searchData.startDate.length > 0 &&
      searchData.endDate.length > 0 &&
      Date.parse(searchData.startDate) < Date.parse(searchData.endDate)
    );
  };

  return (

    <main className={styles.searchPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          НАЙДИТЕ НЕОБХОДИМЫЕ
          <p>ДАННЫЕ В ПАРУ КЛИКОВ.</p>
        </h1>
        <p className={styles.text}>
          Задайте параметры поиска. Чем больше заполните, тем точнее поиск
        </p>
        <div className={styles.searchContent}>
          <form className={styles.form}>
            <div className={styles.column}>
              <div className={styles.left}>
                <label htmlFor="inn" className={styles.left_label}>
                  ИНН Компании <span className={styles.star}>*</span>
                </label>
                <input
                  type="text"
                  id="inn"
                  name="inn"
                  value={searchData.inn}
                  onChange={handleInputChange}
                  required
                  className={
                    !validInnResult.errorStatus && (searchData.inn.length !== 0) ?
                      styles.errorInput :
                      styles.left_input}
                  placeholder="10 цифр"
                />
                <span className={styles.error}>{validInnResult.errorElement}</span>
                <label htmlFor="tonality" className={styles.label}>
                  Тональность
                </label>
                <select
                  id="tonality"
                  name="tonality"
                  value={searchData.tonality}
                  onChange={handleInputChange}
                  required
                  className={styles.select}
                >
                  <option value="any">Любая</option>
                  <option value="positive">Позитивная</option>
                  <option value="negative">Негативная</option>
                </select>
                <label htmlFor="documentCount" className={styles.left_label}>
                  Количество документов в выдаче <span className={styles.star}>*</span>
                </label>
                <input
                  type="number"
                  id="documentCount"
                  name="documentCount"
                  value={searchData.documentCount < 0 ? 0 : searchData.documentCount}
                  onChange={handleInputChange}
                  required
                  className={(searchData.documentCount > 1000) ?
                    styles.errorInput :
                    styles.left_input}
                  placeholder="1 до 1000"
                />
                <h1>Диапозон поиска <span className={styles.star}>*</span></h1>
                <div className={styles.data}>
                  <label
                    className={styles.left_label}
                  ></label>
                  <input
                    placeholder="Дата начала"
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={searchData.startDate}
                    onChange={handleInputChange}
                    required
                    className={styles.left_input}
                  />
                  <div className={styles.date_separator}></div>
                  <label className={styles.left_label}></label>
                  <input
                    placeholder="Дата конца"
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={searchData.endDate}
                    onChange={handleInputChange}
                    required
                    className={styles.left_input}
                  />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.right}>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="completeness"
                    name="completeness"
                    checked={searchData.completeness}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="completeness" className={styles.label}>
                    Признак максимальной полноты
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="businessContext"
                    name="businessContext"
                    checked={searchData.businessContext}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="businessContext" className={styles.label}>
                    Упоминания в бизнес-контексте
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="mainRole"
                    name="mainRole"
                    checked={searchData.mainRole}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="mainRole" className={styles.label}>
                    Главная роль в публикации
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="riskFactors"
                    name="riskFactors"
                    checked={searchData.riskFactors}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="riskFactors" className={styles.label}>
                    В Публикации только c риск-факторами
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="technicalNews"
                    name="technicalNews"
                    checked={searchData.technicalNews}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="technicalNews" className={styles.label}>
                    Включать технические новости рынков
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="announcements"
                    name="announcements"
                    checked={searchData.announcements}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="announcements" className={styles.label}>
                    Включать анонсы и календари
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="newsDigests"
                    name="newsDigests"
                    checked={searchData.newsDigests}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="newsDigests" className={styles.label}>
                    Включать сводки новостей
                  </label>
                </div>
                <button
                  type="button"
                  onClick={handleSearch}
                  disabled={!isFormValid()}
                  className={styles.submitButton}
                >
                  Поиск
                </button>
                <p className={styles.text2}>* Обязательные к заполнению поля</p>
              </div>
            </div>
          </form>
          <div className={styles.imageContainer}>
            <img
              src={DocumentImage}
              alt="Search Page"
              className={styles.imageDoc}
            />
            <img src={FolderImage} alt="Search Page" className={styles.imageFol} />
            <img src={GroupImage} alt="Search Page" className={styles.imageGro} />
          </div>
        </div>
      </div>

    </main>


  );
};

export { SearchPage };
