import Alert, { AlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getVar } from '../../theme/ui-variables/ui-variables.ts';
import { useTranslation } from 'react-i18next';

interface ErrorProps {
  message: string;
  showCTA: boolean;
}

const Error = ({ message, showCTA }: ErrorProps) => {
  const { t } = useTranslation();

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
        <AlertTitle>{t('errorOccurred')}</AlertTitle>
        {t(message)}
      </Alert>
    </PageContainer>
  );
};

export default Error;

const PageContainer = styled.div`
  width: 100%;
  max-width: ${getVar('contentMaxWidth')};
  margin: 0 auto;
  padding-top: 40px;
`;
