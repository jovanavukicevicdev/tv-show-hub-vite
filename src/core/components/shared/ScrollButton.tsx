import { useState } from 'react';
import styled from '@emotion/styled';
import { getColor } from '../../theme/colors/colors';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Fab from '@mui/material/Fab';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      {visible ? (
        <StyledButton color="primary" disableRipple onClick={scrollToTop}>
          <ExpandLessIcon />
        </StyledButton>
      ) : null}
    </>
  );
};

export default ScrollButton;

const StyledButton = styled(Fab)`
  position: fixed;
  width: 50px;
  height: 50px;
  left: calc(50% - 25px);
  bottom: 40px;
  z-index: 1;
  color: ${getColor('primaryContrast')};
  background-color: ${getColor('primary')};

  svg {
    font-size: 32px;
  }
`;
