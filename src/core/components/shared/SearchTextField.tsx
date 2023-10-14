import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import styled from '@emotion/styled';
import { KeyboardEvent } from 'react';
import { styled as muiStyled } from '@mui/material/styles';
import { getColor } from '../../theme/colors/colors.ts';

interface SearchTextFieldProps {
  enteredString: string;
  setEnteredString: (value: string) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
}

const SearchTextField = ({
  enteredString,
  setEnteredString,
  handleKeyDown,
  handleSubmit,
}: SearchTextFieldProps) => {
  return (
    <Search
      value={enteredString}
      onChange={(e) => setEnteredString(e.target.value)}
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

export default SearchTextField;

const Divider = styled.div`
  height: 28px;
  border-right: 1px solid #5f6368;
  margin: 0 4px 0 10px;
`;

const Search = muiStyled(TextField)(({ theme }) => ({
  width: '100%',
  marginTop: 0,
  marginBottom: 0,

  '@media (min-width: 600px)': {
    maxWidth: '500px',
  },

  '& .MuiInput-root': {
    paddingRight: 0,
    color: getColor('text'),
    borderRadius: '24px',
    padding: '5px 12px 5px 16px',
    backgroundColor: theme.palette.mode === 'dark' ? '#303134' : '#efefef',
    border: '1px solid transparent',
    boxShadow: '0 1px 3px rgba(23, 23, 23, 0.24)',

    '& .MuiInputAdornment-positionEnd': {
      '& .MuiIconButton-root': {
        '&.clear-search-button': {
          color: getColor('textSecondary'),
          padding: 0,
        },
        '&.search-button': {
          color: getColor('primary'),
          padding: 0,
        },
      },
    },
  },
}));
