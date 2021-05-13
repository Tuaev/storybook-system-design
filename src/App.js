import { useState } from 'react';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';
import { darkTheme, defaultTheme } from './utils';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(!useDarkTheme)}
      >
        Change Theme
      </button>
      <div
        style={{
          background: useDarkTheme ? 'black' : darkTheme.primaryColor,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <PrimaryButton variant="warning" size="large">
          Hello World
        </PrimaryButton>
        <SecondaryButton>Hello World</SecondaryButton>
        <TertiaryButton>Hello World</TertiaryButton>
      </div>
    </ThemeProvider>
  );
};

export default App;
