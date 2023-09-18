import styled from 'styled-components';

const StyledFormRowVertical = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1.2rem 0;
 
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
  background-color: var(--color-red-100);
  padding: 0.2rem 0.5rem;
  max-width: fit-content;
  text-align: left;
  border-radius: 0.4rem;
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRowVertical>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRowVertical>
  );
}

export default FormRowVertical;
