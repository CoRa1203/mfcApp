import H1 from "../h1/H1";
import loupeSearch from "./../../imgMFC/loupeSearch.svg";
import "./Search.scss";

export default function Search() {
  return (
    <div className="marginTop30">
      <div className="seachBody marginTop30">
       <H1 text='Жизненные ситуации'/>
        <form>
          <div>
            <input className="" id="input" autocomplete="on" />
            <label for="input">Поиск</label>
          </div>
          <button>
            <img src={loupeSearch} alt="loupeSearchImg" />
          </button>
        </form>
      </div>
    </div>
  );
}

