import HeaderMini from "../../components/header/HeaderMini";
import Button from '../../components/buttons/Button';
import "./../../generalStyles.scss";
import Input from "../../components/input/input";
import loginIcon from './../../imgMFC/loginIcon.svg'
import "../loginEmployee/LoginEmployee.scss";

const LoginEmployee = function() {
  return (
    <div className="section"> 
    {/* className="section" применен flex для выравниван я по центру */}
      <div className="wrapperFirst">
        <div className="container">
        {/* wrapper - ограничивающий контейнер 382px */}
        <HeaderMini/>
        <div className="container-loginEmployee">
            <img src={loginIcon} alt="loginIcon" />
            <div className="text-loginEmployee">ВХОД В УЧЕТНУЮ ЗАПИСЬ</div>
        </div>
        <div className="input-loginEmployee"> <Input label={"ИНН / СНИЛС / ID"}></Input> </div>
        <Button>ВОЙТИ</Button> 
        </div>
        </div>
      </div>
  );
}

export default LoginEmployee;