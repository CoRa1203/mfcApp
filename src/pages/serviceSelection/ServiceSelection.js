import { useState } from "react";
import ButtonBrown from "../../components/buttonsBrown/ButtonBrown";
import DigitalSourses from "../../components/digitalSourses/DigitalSourses";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import { cardsText } from "../../data/cards";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import "./ServiceSelection.scss"
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceSelection = function () {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ServiceSubmit'); 
  };
  const [cardsItem, setCards] = useState(cardsText); /*передается список услуг*/
  // const [count, setCount] = useState(0);
  // setCards(response.data)

  // async function fetchCards() {
  //   const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  
  //   }
  // setCount()
  return (
    <div className="wrapperSecond">
      <Header />
      <Search />
      <div className="btnsServisesAndMobile">
        <ButtonBrown text="Инструкция по услугам" />
      </div>
      <div className="cardList">
      {cardsItem.map((card) => (
        <ServiceCard cardText={card.cardText} />
      ))}
      </div>
      <DigitalSourses />

      <ButtonBrown onClick={handleClick}/>
    </div>
  );
};

export default ServiceSelection;
