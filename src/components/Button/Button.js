
import Button from "react-bootstrap/Button";
import './Button.css';

const ButtonClear = ({ variant, onClear, text }) => {
  return (
    <Button variant={variant} onClick={onClear}>{text}</Button>
    
  );
};

export default ButtonClear;


// import './ButtonClear.css';

// const ButtonClear = ( { handleChange }) => (
//   <button handleChange={(event)=> handleChange(event.target.value)} className='but-clear'>Clear</button>
// )

// export default ButtonClear;