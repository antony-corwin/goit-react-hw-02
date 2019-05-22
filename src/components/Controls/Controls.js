import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onIncrement, onDecrement }) => (
  <section className="controls">
    <button className="button" type="button" onClick={onDecrement}>
      Назад
    </button>
    <button className="button" type="button" onClick={onIncrement}>
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
