import { KeyboardEvent, useEffect, useState } from 'react';
import ShowsList from './ShowsList';
import styled from '@emotion/styled';
import { getColor } from '../../theme/colors/colors';
import Progress from '../shared/Progress';
import SearchTextField from '../shared/SearchTextField';
import Error from '../shared/Error';
import { getVar } from '../../theme/ui-variables/ui-variables';
import { useTranslation } from 'react-i18next';
import useTvShowsData from '../../hooks/useTvShowsData';
import { useSearchParams } from 'react-router-dom';

const FindShows = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get('search');

  const [enteredString, setEnteredString] = useState<string>(searchParam || '');
  const [searchTerm, setSearchTerm] = useState<string>(searchParam || '');

  const { t } = useTranslation();

  const { data, isLoading, isError } = useTvShowsData({
    searchTerm: searchTerm || searchParam || '',
  });

  let content;

  if (isLoading) {
    content = (
      <>
        <Progress />
        <TextWrapper>{t('loading')}</TextWrapper>
      </>
    );
  }

  if (isError) {
    content = <Error message="fetchingShowsError" showCTA={false} />;
  }

  if (data?.length) {
    content = <ShowsList shows={data} />;
  } else if (data?.length === 0) {
    content = <TextWrapper>No matches</TextWrapper>;
  }

  const handleSubmit = () => {
    if (enteredString) {
      const trimmed = enteredString.trim();
      setSearchTerm(trimmed);
      setSearchParams({ search: trimmed });
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = (e.target as HTMLInputElement).value;

    setEnteredString(value);

    if (e.key.toLowerCase() === 'enter' && value !== '') {
      setSearchTerm(value);
      setSearchParams({ search: value });
    }
  };

  useEffect(() => {
    if (!searchParam) {
      setSearchTerm('');
      setEnteredString('');
    }
  }, [searchParam]);

  return (
    <PageContainer>
      <SearchTextField
        enteredString={enteredString}
        setEnteredString={setEnteredString}
        handleKeyDown={handleKeyDown}
        handleSubmit={handleSubmit}
      />

      {content}
    </PageContainer>
  );
};

export default FindShows;

const PageContainer = styled.div`
  width: 100%;
  max-width: ${getVar('contentMaxWidth')};
  margin: 0 auto;
`;

const TextWrapper = styled.div`
  padding: 48px 16px 24px;
  color: ${getColor('text')};
`;
