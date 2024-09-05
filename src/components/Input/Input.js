const Input = ({ value, handleChange }) => (
  <input
    type="text"
    placeholder="please enter the name"
    onChange={(event) => handleChange(event.target.value)}
    value={value}
  />
);

export default Input;

