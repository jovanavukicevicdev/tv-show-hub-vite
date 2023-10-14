import { useState } from 'react';
import { getColor } from '../../theme/colors/colors';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Fab from '@mui/material/Fab';
import styled from '@emotion/styled';

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
        <Scroll color="primary" disableRipple onClick={scrollToTop}>
          <ExpandLessIcon />
        </Scroll>
      ) : null}
    </>
  );
};

export default ScrollButton;

const Scroll = styled(Fab)`
  position: fixed;
  width: 50px;
  height: 50px;
  left: calc(50% - 25px);
  bottom: 40px;
  z-index: 1;
  color: ${getColor('background')};
  background-color: ${getColor('primary')};

  svg {
    font-size: 32px;
  }
`;
