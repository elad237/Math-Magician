import React from 'react';
import PropTypes from 'prop-types';

const Output = (props) => {
  const { calculation } = props;
  const { total, next, operation } = calculation;
  return (
    <div className="output">
      {`${total || ''} ${operation || ''} ${next || ''}`}
    </div>
  );
};

Output.propTypes = { calculation: PropTypes.shape().isRequired };

export default Output;
