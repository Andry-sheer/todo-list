

const Form = ({ handleSubmit, children }) => (
  <form onSubmit={handleSubmit}>
    {children}
    <input type="submit" />
  </form>
);

export default Form;
