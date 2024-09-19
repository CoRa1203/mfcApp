import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './input.scss';

const Input = ({
  id, className, label, error, value, onChange, ...attrs
}) => {
  const [isFocused, setIsFocused] = useState(false); // Состояние фокуса
  const [inputValue, setInputValue] = useState(value || ''); // Локальное состояние значения

  useEffect(() => {
    // Если передано новое значение через props, обновляем локальное состояние
    setInputValue(value || '');
  }, [value]);

  const handleBlur = (e) => {
    setIsFocused(false);
    // Проверка наличия текста при потере фокуса
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value); // Обновляем локальное состояние
    if (onChange) {
      onChange(e); // Вызываем пропс onChange для передачи данных родителю
    }
  };

  const classes = classNames(
    'input',
    className,
    { error },
  );

  const labelClasses = classNames('inputLabel', {
    'inputLabel--active': isFocused || inputValue, // Если фокус или есть текст
  });

  return (
    <div className="inputWrapper">
      <div className="labelsWrapper">
        {attrs.required && <span className="inputRequired">Required</span>}
      </div>
      <input
        name={id}
        id={id}
        className={classes}
        value={inputValue} // Связываем значение с локальным состоянием
        onChange={handleChange} // Обработчик изменения
        onFocus={handleFocus} // Обработчик фокуса
        onBlur={handleBlur} // Обработчик потери фокуса
        {...attrs}
      />
      {label && <label htmlFor={id} className={labelClasses}>{label}</label>}
      {error && <span className="inputError">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string, // Передаем значение через пропс
  onChange: PropTypes.func, // Функция для обработки изменений
};

Input.defaultProps = {
  className: '',
  label: '',
  error: '',
  value: '', // По умолчанию значение пусто
  onChange: () => {}, // По умолчанию функция пустая
};

export default Input;
