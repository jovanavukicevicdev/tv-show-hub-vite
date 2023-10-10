import { Show } from '../../../data/show';
import styled from '@emotion/styled';
import ListItem from './ListItem';

interface ShowsListParams {
  shows: Show[];
}

const ShowsList = ({ shows }: ShowsListParams) => {
  return (
    <ListWrapper>
      <ul>
        {shows.map((show: Show) => (
          <ListItem key={show.id} show={show} />
        ))}
      </ul>
    </ListWrapper>
  );
};

export default ShowsList;

const ListWrapper = styled.div`
  padding-top: 40px;
`;
