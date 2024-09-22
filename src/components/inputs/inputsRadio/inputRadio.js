import React from 'react';
import './inputRadio.scss'; // Подключаем ваши стили

const InputRadio = function (props) {
    return (
        <label className="radio">
            <input type="radio" name={props.name} value={props.value} />
            <img className='img-sm' src={props.img} alt="radio button" />
        </label>
    );
};

export default InputRadio;
