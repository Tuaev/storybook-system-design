import styled from 'styled-components';

const primaryBlue = '#030086';

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
`;

const PrimaryButton = styled(Button)`
  background-color: ${primaryBlue};
  border: none;
  color: white;
`;

export const SecondaryButton = styled(Button)`
  background-color: none;
  border: 2px solid ${primaryBlue};
  color: ${primaryBlue};
`;

export const TertiaryButton = styled(Button)`
  background-color: none;
  border: none;
  color: ${primaryBlue};
`;

export default PrimaryButton;