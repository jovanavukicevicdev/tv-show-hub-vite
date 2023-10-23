import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import styled from '@emotion/styled';

const Breadcrumbs = () => {
  const location = useLocation();
  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '');

  return (
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
  );
};

export default Breadcrumbs;

const StyledBreadcrumbs = styled(MuiBreadcrumbs)`
  font-size: 14px;

  & .MuiBreadcrumbs-li {
    text-transform: capitalize;
  }
`;
