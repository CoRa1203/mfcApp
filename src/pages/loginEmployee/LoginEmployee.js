import Button from '../../components/buttons/Button'
import "./../../generalStyles.scss";
import AccountEntry from "../../components/accountEntry/AccountEntry";
import { useState } from "react";
// const URL_SERVER = '' путь к серверу
const LoginEmployee = function() {
  const [loginParametr, setLoginParametr] = useState('')
  const handleClickLogin = async() => {
    try {
      //логика отправки логина и пароля на сервер
      // const response = axios.post(URL_SERVER, {loginParametr})
    } catch (error) {
      console.error(error)
    }
  }
  console.log(loginParametr)
  return (
    <div className="section"> 
    {/* className="section" применен flex для выравниван я по центру */}
      <div className="wrapperFirst">
        <div className="container">
        {/* wrapper - ограничивающий контейнер 382px */}
        <HeaderMini/>
        <AccountEntry/>
        <form>
        <input value={loginParametr} onChange={(e) => setLoginParametr(e.target.value)}/>
        <Button onClick={handleClickLogin}/>
        </form>
        </div>
      </div>
    </div>
  );
}

export default LoginEmployee;