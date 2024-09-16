import Search from "./../../components/search/Search";
import ButtonBrown from "./../../components/buttonsBrown/ButtonBrown";
import "./ServiceCategorySelection.scss";
import DigitalSourses from "../../components/digitalSourses/DigitalSourses";
import Categories from "../../components/categories/Categories";
import Header from "../../components/header/Header";

 const ServiceCategorySelection = function() {
  return (
    <div className="wrapperSecond">
      <Header/>
      <Search />
      <div className="btnsServisesAndMobile">
        <ButtonBrown text="Инструкция по услугам" />
        <ButtonBrown text="Оказание услуги с телефона заявителя" />
      </div>
      <Categories/>
      <DigitalSourses />
    </div>
  );
}

export default ServiceCategorySelection