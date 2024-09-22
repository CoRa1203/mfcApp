import HeaderMini from "../../components/header/HeaderMini";
import Button from '../../components/buttons/Button'
import "./../../generalStyles.scss";
import "./ServiceCategoryProvidedAnotherReason.scss"
import AccountEntry from "../../components/accountEntry/AccountEntry";
import Input from "../../components/inputs/input/input";

const ServiceCategoryProvidedAnotherReason = function() {
  return (
    <div className="section"> 
    {/* className="section" применен flex для выравниван я по центру */}
      <div className="wrapperFirst">
        <div className="container">
        {/* wrapper - ограничивающий контейнер 382px */}
        <HeaderMini/>
        <AccountEntry/>
        <p className="SCPA-text">
        Укажите причину, 
        по которой услуга не была<br/> оказана
        </p>
        <Input className={"SCPA-inp"}></Input>
        <Button className={"SCPA-btn"}>ДРУГАЯ ПРИЧИНА</Button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCategoryProvidedAnotherReason;
