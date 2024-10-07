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
  // const [cardsList, setCardsList] = useState(cardsText); 
const [searchText, setSearchText] = useState('');

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ServiceSubmit'); 
  };

  const filteredList = cardsText.filter(card => card.cardText.toLowerCase().includes(searchText.toLowerCase()))
  
 

  return (
    <div className="wrapperSecond">
      <Header />
      <Search searchText={searchText} setSearchText={setSearchText}/>
        <ButtonBrown text="Инструкция по услугам" onClick={handleClick}/>
      <div className="cardList">
      {filteredList.map((card) => (
        <ServiceCard cardText={card.cardText} />
      ))}
      </div>
      <DigitalSourses />
    </div>
  );
};

export default ServiceSelection;
