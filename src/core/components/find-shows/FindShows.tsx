import { KeyboardEvent, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ShowsList from './ShowsList';
import { applicationRepository } from '../../../data/application-repository';
import styled from '@emotion/styled';
import { getColor } from '../../theme/colors/colors';
import Progress from '../shared/Progress';
import SearchTextField from '../shared/SearchTextField.tsx';
import Error from '../shared/Error';
import { getVar } from '../../theme/ui-variables/ui-variables.ts';
import { useTranslation } from 'react-i18next';

const FindShows = () => {
  const [enteredString, setEnteredString] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { t } = useTranslation();

  // queryKey is used internally by react query to cache the data
  // queryFn needs a function that returns a promise
  // isPending - is the request still on its way, or did we get a response
  const { data, isLoading, isError } = useQuery({
    queryKey: ['tv-shows', { search: searchTerm }],
    // wrap it in an anonymous arrow fn to pass the search term
    queryFn: ({ signal }) => applicationRepository.getShows({ searchTerm, signal }),
    enabled: searchTerm !== '',
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
      setSearchTerm(enteredString.trim());
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = (e.target as HTMLInputElement).value;

    setEnteredString(value);

    if (e.key.toLowerCase() === 'enter' && value !== '') {
      setSearchTerm(value);
    }
  };

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
