import './HeaderMini.scss'
import logo from './../../imgMFC/logo.svg'

const HeaderMini = function(){
    return(
        <header className="header-mini">
            <img className='img-header-mini' src={logo} alt="logo" />
            <div className="border-left">
            МНОГОФУНКЦИОНАЛЬНЫЙ ЦЕНТР<br /> 
            ПРЕДОСТАВЛЕНИЯ ГОСУДАРСТВЕННЫХ И<br /> 
            МУНИЦИПАЛЬНЫХ УСЛУГ УДМУРСТКОЙ<br /> РЕСПУБЛИКИ
            </div>
        </header>
    )
}

export default HeaderMini;