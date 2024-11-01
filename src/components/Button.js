import PropTypes from 'prop-types';


const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${color ? `btn-${color}` : 'btn-steelblue'}`} // Dynamically applying a color class
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;