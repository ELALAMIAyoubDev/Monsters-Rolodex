import "./SearchBoxStyle.css";

const SearchBoxComponent = (props) => {
  const { placeholder, className, onChangeHandler } = props;
  return (
    <div>
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};
export default SearchBoxComponent;
