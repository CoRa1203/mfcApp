import HeaderMini from "../../components/header/HeaderMini";
import Button from '../../components/buttons/Button'
import "./../../generalStyles.scss";
import AccountEntry from "../../components/accountEntry/AccountEntry";

const LoginEmployee = function() {
  return (
    <div className="section"> 
    {/* className="section" применен flex для выравниван я по центру */}
      <div className="wrapperFirst">
        <div className="container">
        {/* wrapper - ограничивающий контейнер 382px */}
        <HeaderMini/>
        <AccountEntry/>
        <Button/>
        </div>
      </div>
    </div>
  );
}

export default LoginEmployee;
