import HeaderMini from "../../components/header/HeaderMini";
import Button from '../../components/buttons/Button';
import '../serviceSubmit/ServiceSubmit.scss'
import AccountEntry from "../../components/accountEntry/AccountEntry";
import Back from './../../imgMFC/Back.svg'
import Info from './../../imgMFC/Info.svg'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceSubmit = function() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ServiceProvided'); 
  };
  return (
    <div className="section"> 
    {/* className="section" применен flex для выравниван я по центру */}
      <div className="wrapperFirst">
        <div className="container">
        {/* wrapper - ограничивающий контейнер 382px */}
        <HeaderMini/>
        <AccountEntry/>
        <button className="img-infoSubmit"> <img src={Info} alt="info" /> </button>
        <div className="chosenService">
            <div className="img-backSubmit"> <img src={Back} alt="back" /> </div>
            <div className="chosenServiceText text">
                Выбранная услуга
            </div>
        </div>
        <div className="chosenServiceTextarea">
        
        </div>
        <div className = "btn-personalDataInput">
        <Button onClick={handleClick}>ПОДТВЕРДИТЬ</Button>
        </div>
        </div>
        </div>
      </div>
  );
}

export default ServiceSubmit;