import HeaderMini from "../../components/header/HeaderMini";
import Button from '../../components/buttons/Button';
import "./../../generalStyles.scss";
import "../entitySelection/EntitySelection.scss";
import AccountEntry from "../../components/accountEntry/AccountEntry";

const EntitySelection = function() {
  return (
    <div className="section"> 
    {/* className="section" применен flex для выравниван я по центру */}
      <div className="wrapperFirst">
        <div className="container">
        {/* wrapper - ограничивающий контейнер 382px */}
        <HeaderMini/>
        <AccountEntry/>
        <div className="text-entitySelection">Выберите субъект</div>
        <Button>ФИЗИЧЕСКОЕ ЛИЦО</Button>
        <Button>ЮРИДИЧЕСКОЕ ЛИЦО</Button>
        </div>
        </div>
      </div>
  );
}

export default EntitySelection;