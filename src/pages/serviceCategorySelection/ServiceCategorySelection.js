import Search from "./../../components/search/Search"
import ButtonBrown from "./../../components/buttonsBrown/ButtonBrown";
import "./ServiceCategorySelection.scss"
import DigitalSourses from "../../components/digitalSourses/DigitalSourses";

export default function ServiceCategorySelection(){
    return (
        <div className="wrapperSecond">
        <Search/>
        <div className="btnsServisesAndMobile">
        <ButtonBrown text="Инструкция по услугам" />
        <ButtonBrown text="Оказание услуги с телефона заявителя"/>
      </div>
      <DigitalSourses/>
        </div>
    )
}