import React from 'react';
import PropTypes from 'prop-types';

class Output extends React.PureComponent {
  render() {
    const { state } = this.props;
    const { total, next, operation } = state;
    return (
      <div className="output">
        {`${total || ''} ${operation || ''} ${next || ''}`}
      </div>
    );
  }
}

Output.propTypes = { state: PropTypes.string.isRequired };

export default Output;
