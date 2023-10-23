import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import styled from '@emotion/styled';
import { getVar } from '../../theme/ui-variables/ui-variables.ts';

const Breadcrumbs = () => {
  const location = useLocation();
  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '');

  return (
    <BreadcrumbsContainer>
      <StyledBreadcrumbs separator="›">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          const to = `/${crumbs.slice(0, index + 1).join('/')}`;

          return (
            <div key={crumb}>
              {crumbs.length === 1 && crumb === 'shows' ? null : last ? (
                <span>{crumb}</span>
              ) : (
                <Link to={to}>{crumb}</Link>
              )}
            </div>
          );
        })}
      </StyledBreadcrumbs>
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;

const BreadcrumbsContainer = styled.div`
  width: 100%;
  max-width: ${getVar('contentMaxWidth')};
  margin: 0 auto;
`;

const StyledBreadcrumbs = styled(MuiBreadcrumbs)`
  font-size: 14px;

  & .MuiBreadcrumbs-li {
    text-transform: capitalize;
  }
`;
