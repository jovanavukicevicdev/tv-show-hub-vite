import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import styled from '@emotion/styled';

const Progress = () => {
  return (
    <StyledLinearProgressContainer sx={{ width: '100%' }}>
      <LinearProgress />
    </StyledLinearProgressContainer>
  );
};

export default Progress;

const StyledLinearProgressContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
`;
