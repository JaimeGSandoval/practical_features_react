export const FormPage = ({
  pageData,
  goBack,
  submitText,
  onSubmit,
  onChange,
  inputValue,
}) => {
  const { id, label, type } = pageData;
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (e) => {
    onChange(id, e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {goBack && (
        <button type="button" className="link" onClick={goBack}>
          &laquo; Back
        </button>
      )}
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} onChange={handleChange} value={inputValue} />
      <button type="submit" disabled={!inputValue}>
        {submitText}
      </button>
    </form>
  );
};
