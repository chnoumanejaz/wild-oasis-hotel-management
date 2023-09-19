import { HiOutlinePhone } from 'react-icons/hi2';
import styled from 'styled-components';
import Tag from './Tag';

const StyledDataMutationMessage = styled.div`
  background-color: #fee2e2;
  color: #9b1c1c;
  flex-grow: 2;
  border-radius: 0.4rem;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  & span {
    color: red;
    font-weight: bold;
    margin-right: 0.3rem;
  }
`;

function DataMutationMessage() {
  return (
    <StyledDataMutationMessage>
      <span>Note:</span>
      You are not allowed to (Update & delete) the data. If you want then
      <a
        href="https://www.linkedin.com/in/chnoumanejaz/"
        target="_blank"
        rel="noreferrer">
        <Tag
          type="red"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            border: '1px solid #9B1C1C',
          }}>
          contact me
          <HiOutlinePhone />
        </Tag>
      </a>
    </StyledDataMutationMessage>
  );
}

export default DataMutationMessage;
