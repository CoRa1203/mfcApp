import HeaderMini from "../../components/header/HeaderMini";
import Button from '../../components/buttons/Button';
import "./../../generalStyles.scss";
import Input from "../../components/input/input";
import "../personalDataInput/PersonalDataInput.scss";
import AccountEntry from "../../components/accountEntry/AccountEntry";
import Back from './../../imgMFC/Back.svg'
import Info from './../../imgMFC/Info.svg'

const PersonalDataInput = function() {
  return (
    <div className="section"> 
    {/* className="section" применен flex для выравниван я по центру */}
      <div className="wrapperFirst">
        <div className="container">
        {/* wrapper - ограничивающий контейнер 382px */}
        <HeaderMini/>
        <AccountEntry/>
        <div className="img-info"> <img src={Info} alt="info" /> </div>
        <div className="container-personalDataInput">
            <div className="img-back"> <img src={Back} alt="back" /> </div>
            <div className="text-personalDataInput">
                Согласие на обработку<br/>персональных данных<br/>физического лица
            </div>
        </div>
        <div className="form-box">
		<div className="button-box">
			<div id="btn-toggle"></div>
			<button type="button" className="toggle-btn">ТЕЛЕФОН</button>
			<button type="button" className="toggle-btn toggle-btn-s">СНИЛС</button>
		</div>
	    </div>
        <div className="input-personalDataInput"> 
            <Input label={<>ФИО<span className="red">*</span></>}/>
            <Input label={"ТЕЛЕФОН"}></Input> 
            <label className="lable-personalDataInput">
                <input type="checkbox" required/> Я согласен(а) на <a href="#">обработку персональных данных</a>
            </label>
        </div>
        <div className="text-info">*обязательные для ввода поля</div>
        <div className = "btn-personalDataInput">
        <Button>ПОДТВЕРДИТЬ</Button>
        </div>
        </div>
        </div>
      </div>
  );
}

export default PersonalDataInput;