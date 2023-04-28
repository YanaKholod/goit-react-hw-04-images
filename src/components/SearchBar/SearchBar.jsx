import { ButtonClear } from '../Button/Button';
import PropTypes from 'prop-types';
import { Styled } from './StyleSearchBar';

const SearchBar = ({ onSubmit, onChange, onClickClear, inputValue }) => (
  <Styled.SearchBar>
    <Styled.Form onSubmit={onSubmit}>
      <Styled.Button type="submit">
        <Styled.Span>Search</Styled.Span>
      </Styled.Button>
      <Styled.Input
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onChange}
        value={inputValue}
      />
      {inputValue && <ButtonClear onClickClear={onClickClear} />}
    </Styled.Form>
  </Styled.SearchBar>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onClickClear: PropTypes.func,
  query: PropTypes.string,
};

export default SearchBar;
