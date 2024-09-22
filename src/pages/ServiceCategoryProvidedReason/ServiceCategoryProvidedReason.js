import HeaderMini from "../../components/header/HeaderMini";
import Button from '../../components/buttons/Button'
import "./../../generalStyles.scss";
import "./ServiceCategoryProvidedReason.scss"
import AccountEntry from "../../components/accountEntry/AccountEntry";

const ServiceCategoryProvidedReason = function() {
  return (
    <div className="section"> 
    {/* className="section" применен flex для выравниван я по центру */}
      <div className="wrapperFirst">
        <div className="container">
        {/* wrapper - ограничивающий контейнер 382px */}
        <HeaderMini/>
        <AccountEntry/>
        <p className="SCPR-text">
        Укажите причину, 
        по которой услуга не была<br/> оказана
        </p>
        <Button className={"SCPR-btn-1"}>НЕТ ДОКУМЕНТОВ</Button>
        <Button className={"SCPR-btn"}>ДРУГАЯ ПРИЧИНА</Button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCategoryProvidedReason;
