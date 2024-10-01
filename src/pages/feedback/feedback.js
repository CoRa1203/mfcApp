import HeaderMini from "../../components/header/HeaderMini";
import Button from '../../components/buttons/Button'
import "./../../generalStyles.scss";
import "./feedback.scss"
import AccountEntry from "../../components/accountEntry/AccountEntry";
import Input from "../../components/inputs/input/input";
import InputRadio from "../../components/inputs/inputsRadio/inputRadio";
import smile1 from "../../imgMFC/smile-1.svg"
import smile2 from "../../imgMFC/smile-2.svg"
import smile3 from "../../imgMFC/smile-3.svg"
import smile4 from "../../imgMFC/smile-4.svg"
import smile5 from "../../imgMFC/smile-5.svg"
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Feedback = function() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ServiceCategoryProvidedReason'); 
  };
  
  return (
    <div className="section"> 
    {/* className="section" применен flex для выравниван я по центру */}
      <div className="wrapperFirst">
        <div className="container">
        {/* wrapper - ограничивающий контейнер 382px */}
        <HeaderMini/>
        <AccountEntry/>
        <p className="feedback-text">
        Ваши отзывы и предложения 
        помогают нам работать над качеством 
        и оперативностью предоставляемых 
        услуг
        </p>
        <p className="feedback-rate">
        Оцените услугу
        </p>
        <form className="">
        <div className="feedback-smile">
        <InputRadio name="sm-1" value="1" img ={smile1} cheked="cheked"></InputRadio>
        <InputRadio name="sm-1" value="2" img ={smile2}></InputRadio>
        <InputRadio name="sm-1" value="3" img ={smile3}></InputRadio>
        <InputRadio name="sm-1" value="4" img ={smile4}></InputRadio>
        <InputRadio name="sm-1" value="5" img ={smile5}></InputRadio>
        </div>
        <Input className={"input-big"}></Input>
        <Button onClick={handleClick} type="submit">ОТПРАВИТЬ</Button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
