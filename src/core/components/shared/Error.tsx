import Alert, { AlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface ErrorProps {
  message: string;
  showCTA: boolean;
}

const Error = ({ message, showCTA }: ErrorProps) => {
  let props: AlertProps = { severity: 'error', className: 'error-alert' };

  if (showCTA) {
    props = {
      ...props,
      action: (
        <Link to=".." className="error-cta">
          BACK
        </Link>
      ),
    };
  }

  return (
    <PageContainer>
      <Alert {...props}>
        <AlertTitle>An Error Occurred</AlertTitle>
        {message}
      </Alert>
    </PageContainer>
  );
};

export default Error;

const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 40px;
`;
