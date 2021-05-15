import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form({ handSubmit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={handSubmit} action="#" className="form">
      <input
        onChange={handleChange}
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
