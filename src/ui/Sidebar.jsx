import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import Tag from './Tag';

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const CopyrightContainer = styled.div`
  gap: 0.5rem;
  margin: auto 0;
`;

const Copyright = styled.p`
  font-size: small;
  text-align: center;
  margin-bottom: 0.5rem;
  & a {
    margin-left: 0.5rem;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <CopyrightContainer>
        <Copyright>&copy; 2023 All rights reserved</Copyright>
        <Copyright>
          Build by
          <a
            href="https://www.linkedin.com/in/chnoumanejaz/"
            target="_blank"
            rel="noreferrer">
            <Tag type="blue">Nouman Ejaz</Tag>
          </a>
        </Copyright>
      </CopyrightContainer>
    </StyledSidebar>
  );
}

export default Sidebar;
