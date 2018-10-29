import PropTypes from 'prop-types';

export const gamePropTypes = PropTypes.shape({
  square: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number
});
