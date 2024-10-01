import Search from "./../../components/search/Search";
import ButtonBrown from "./../../components/buttonsBrown/ButtonBrown";
import "./ServiceCategorySelection.scss";
import DigitalSourses from "../../components/digitalSourses/DigitalSourses";
import Categories from "../../components/categories/Categories";
import Header from "../../components/header/Header";
import React from 'react';
import { useNavigate } from 'react-router-dom';

 const ServiceCategorySelection = function() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ServiceSelection'); 
  };
  return (
    <div className="wrapperSecond">
      <Header/>
      <Search />
      <div className="btnsServisesAndMobile">
        <ButtonBrown onClick={handleClick}  text="Инструкция по услугам" />
        <ButtonBrown text="Оказание услуги с телефона заявителя" />
      </div>
      <Categories />
      <DigitalSourses />
    </div>
  );
}

export default ServiceCategorySelection;