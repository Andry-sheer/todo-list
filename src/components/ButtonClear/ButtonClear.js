
import Button from "react-bootstrap/Button";
import './ButtonClear.css';

const ButtonClear = ({ onClear }) => {
  return (
    <Button variant="danger" onClick={onClear}>
      Clear
    </Button>
  );
};

export default ButtonClear;


// import './ButtonClear.css';

// const ButtonClear = ( { handleChange }) => (
//   <button handleChange={(event)=> handleChange(event.target.value)} className='but-clear'>Clear</button>
// )

// export default ButtonClear;