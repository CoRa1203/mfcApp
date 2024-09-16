
import logo from "./../../imgMFC/logo.svg";
import loginIcon from "./../../imgMFC//loginIcon.svg";
import "./Header.scss";

const Header = function () {
  return (
    <>
      <header className="header">
        <div className="leftSide">
          <img src={logo} alt="logo" />
          <div className="borderRight">
            МНОГОФУНКЦИОНАЛЬНЫЙ ЦЕНТР
            <br />
            ПРЕДОСТАВЛЕНИЯ ГОСУДАРСТВЕННЫХ И<br />
            МУНИЦИПАЛЬНЫХ УСЛУГ УДМУРСТКОЙ
            <br /> РЕСПУБЛИКИ
          </div>
        </div>
        <div className="rightSide">
          <div className="employeeInfo">
            <img src={loginIcon} alt="loginIcon" />
            <p>{}</p>
          </div>
          <p>Выйти</p>
        </div>
      </header>
    </>
  );
};

export default Header;
