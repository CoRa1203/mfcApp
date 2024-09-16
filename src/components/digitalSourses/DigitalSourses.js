import DigitalSoursesItem from "../digitalSoursesItem/DigitalSoursesItem";
import H1 from "../h1/H1";
import logoGosuslugi from './../../imgMFC/logoGosuslugi.svg'
import lohoFNS from './../../imgMFC/lohoFNS.svg'
import logoSFR from './../../imgMFC/logoSFR.svg'
import logoRPHY from './../../imgMFC/logoRPHY.svg'
import './DigitalSourses.scss'

 const DigitalSourses = function(){
    return(
        <div className="marginTop30">
      <H1 text='Электронные ресурсы'/>
<div className="soursesLinks">
<DigitalSoursesItem link="https://www.gosuslugi.ru/" image={logoGosuslugi}/>
<DigitalSoursesItem link="https://www.nalog.gov.ru/rn18/apply_fts/" image={lohoFNS}/>
<DigitalSoursesItem link="https://sfr.gov.ru/branches/udmurtia/" image={logoSFR}/>
<DigitalSoursesItem link="https://uslugi.udmurt.ru/" image={logoRPHY}/>
</div>

    </div>
    )
}

export default DigitalSourses;