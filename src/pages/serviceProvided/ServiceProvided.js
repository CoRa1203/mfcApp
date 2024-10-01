import AccountEntry from "../../components/accountEntry/AccountEntry";
import Button from "../../components/buttons/Button";
import HeaderMini from "../../components/header/HeaderMini";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceProvided.scss'

const ServiceProvided = function() {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/Feedback'); 
    };
    return (
      <div className="section"> 
      {/* className="section" применен flex для выравниван я по центру */}
        <div className="wrapperFirst">
          <div className="container">
          {/* wrapper - ограничивающий контейнер 382px */}
          <HeaderMini/>
          <AccountEntry/>
          <div className="serviceProvidedText">
                Была ли оказана услуга?
            </div>
          <Button onClick={handleClick}>ДА</Button>
          <Button onClick={handleClick}>НЕТ</Button>
          </div>
          </div>
          </div>
    );
  }
  
  export default ServiceProvided;