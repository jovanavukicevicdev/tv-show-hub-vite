import { Link, useParams, useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { applicationRepository } from '../../../../data/application-repository';
import { queryClient } from '../../../../util/react-query';
import { Season } from '../../../../data/season';
import TvOffOutlinedIcon from '@mui/icons-material/TvOffOutlined';
import EpisodeList from './EpisodeList';
import { PathParams } from '../../../../util/app-util';

const EpisodesBySeason = () => {
  const { id } = useParams() as PathParams;

  const [searchParams] = useSearchParams();
  const seasonNumber = searchParams.get('season');

  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);

  const { data } = useQuery({
    queryKey: ['tv-shows', id, 'seasons-embedded'],
    queryFn: ({ signal }) => applicationRepository.getShowByIdWithSeasons({ signal, id: +id }),
  });

  useEffect(() => {
    if (seasonNumber && data?.seasons.length) {
      const season = data.seasons.filter((s) => s.number === +seasonNumber)[0];
      setSelectedSeason(season);
    }
  }, [seasonNumber, data?.seasons]);

  return (
    <PageContainer>
      <BackToSearchWrapper>
        <BackToSearchLink to=".." relative="path">
          <NavigateBeforeIcon />
          <span>Back</span>
        </BackToSearchLink>
      </BackToSearchWrapper>

      <PosterWrapper>
        {data?.show?.image ? (
          <Poster src={data.show.image} alt="poster" />
        ) : (
          <NoImage>
            <TvOffOutlinedIcon />
          </NoImage>
        )}
        <TextWrapper>
          <ShowName>{data?.show?.name}</ShowName>
          <Title>Episode list</Title>
        </TextWrapper>
      </PosterWrapper>

      <SeasonsWrapper>
        <SeasonsLabel>Seasons</SeasonsLabel>
        <ToggleButtonGroup
          className="seasons-toggle"
          value={selectedSeason}
          exclusive
          onChange={(_, newSeason: Season) =>
            setSelectedSeason(newSeason)
          }
        >
          {data?.seasons?.length
            ? data.seasons.map((season: Season) => {
                return (
                  <ToggleButton
                    disabled={season.number === selectedSeason?.number}
                    value={season}
                    key={season.number}
                  >
                    {season.number}
                  </ToggleButton>
                );
              })
            : null}
        </ToggleButtonGroup>
      </SeasonsWrapper>

      <EpisodeList season={selectedSeason} />
    </PageContainer>
  );
};

export default EpisodesBySeason;

export function loader({ params }: any) {
  // We trigger the query programmatically
  return queryClient.fetchQuery({
    queryKey: ['tv-shows', params.id, 'seasons-embedded'],
    queryFn: ({ signal }) =>
      applicationRepository.getShowByIdWithSeasons({ signal, id: params.id }),
  });
}

const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const BackToSearchWrapper = styled.div`
  margin-bottom: 24px;
`;

const BackToSearchLink = styled(Link)`
  width: 70px;
  display: flex;
  gap: 6px;

  span {
    letter-spacing: 0.03em;
    margin-left: -6px;
  }
`;

const PosterWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Poster = styled.img`
  width: 90px;
  border: 1px solid #333;
`;

const NoImage = styled.div`
  width: 90px;
  height: 131px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3a3a3a;

  & svg {
    fill: #3a3a3a;
    font-size: 24px;
  }
`;

const TextWrapper = styled.div`
  padding-left: 20px;
`;

const ShowName = styled.div`
  font-weight: 600;
  color: #9aa0a6;
  margin-bottom: -6px;
  font-size: 18px;
  letter-spacing: 0.02em;
`;

const Title = styled.div`
  font-size: 32px;
  margin-bottom: -5px;
`;

const SeasonsWrapper = styled.div`
  margin: 16px 0 12px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.08);
`;

const SeasonsLabel = styled.label`
  display: block;
  font-size: 14px;
  letter-spacing: 0.03em;
  font-weight: 600;
  color: #9aa0a6;
  margin-bottom: 4px;
`;
