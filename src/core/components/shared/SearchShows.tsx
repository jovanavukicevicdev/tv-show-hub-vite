import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import styled from '@emotion/styled';
import { KeyboardEvent } from 'react';

interface SearchShowsProps {
  enteredString: string;
  setEnteredString: (value: string) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
}

const SearchShows = ({
  enteredString,
  setEnteredString,
  handleKeyDown,
  handleSubmit,
}: SearchShowsProps) => {
  return (
    <TextField
      value={enteredString}
      onChange={(e) => setEnteredString(e.target.value)}
      className="search-input"
      variant="standard"
      placeholder="Search TV shows"
      InputProps={{
        onKeyDown: (e) => handleKeyDown(e),
        endAdornment: (
          <>
            {enteredString !== '' ? (
              <>
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setEnteredString('')}
                    className="clear-search-button"
                    disableRipple
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
                <Divider />
              </>
            ) : null}
            <InputAdornment position="end">
              <IconButton
                onClick={handleSubmit}
                className="search-button"
                disableRipple
                disabled={enteredString === ''}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          </>
        ),
        disableUnderline: true,
      }}
    />
  );
};

export default SearchShows;

const Divider = styled.div`
  height: 28px;
  border-right: 1px solid #5f6368;
  margin: 0 4px 0 10px;
`;
