import PropTypes from 'prop-types';

function SearchInput({
  value,
  onChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Search' value={value} onChange={onChange}/>
      <button onClick={onSubmit}>Find</button>
    </form>
  );
}

export default SearchInput;

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
