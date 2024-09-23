import ButtonBrown from "../../components/buttonsBrown/ButtonBrown";
import DigitalSourses from "../../components/digitalSourses/DigitalSourses";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";


const ServiceSelection =  function(){
    return (
        <div className="wrapperSecond">
        <Header/>
        <Search />
        <div className="btnsServisesAndMobile">
          <ButtonBrown text="Инструкция по услугам" />
        </div>
        <DigitalSourses />
      </div>
    )
}

export default ServiceSelection;