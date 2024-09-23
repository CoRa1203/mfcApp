import ButtonBrown from "../../components/buttonsBrown/ButtonBrown";
import DigitalSourses from "../../components/digitalSourses/DigitalSourses";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import ServiceCard from "../../components/serviceCard/ServiceCard"


const ServiceSelection =  function(){
    return (
        <div className="wrapperSecond">
        <Header/>
        <Search />
        <div className="btnsServisesAndMobile">
          <ButtonBrown text="Инструкция по услугам" />
        </div>
        <ServiceCard/>
        <DigitalSourses />
      </div>
    )
}

export default ServiceSelection;