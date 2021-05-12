import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';

const buttonModifierStyles = {
  small: () => `
  font-size: ${typeScale.helperText};
  padding: 8px;
`,
  large: () => `
  font-size: ${typeScale.header5};
  padding: 16px 24px;
`,
  warning: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
    &:hover,
    &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 3px solid ${defaultTheme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }`,
  error: () => `
    background: none;
    color: ${defaultTheme.status.errorColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 3px solid ${defaultTheme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.errorColorActive};
    }`,
};

const handleVariant = (variant) => {
  switch (variant) {
    case 'warning':
      return buttonModifierStyles.warning;
    case 'error':
      return buttonModifierStyles.error;
    default:
      return;
  }
};

const handleSize = (size) => {
  switch (size) {
    case 'small':
      return buttonModifierStyles.small;
    case 'large':
      return buttonModifierStyles.large;
    default:
      return;
  }
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    border-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorOnPrimary};
  }
  ${({ size }) => handleSize(size)}
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
  ${({ variant }) => handleVariant(variant)};
`;

export const SecondaryButton = styled(Button)`
  background-color: none;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    border-color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
`;
