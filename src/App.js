import PrimaryButton, { SecondaryButton, TertiaryButton } from './components/Buttons';

const App = () => {
  return (
    <div>
      <PrimaryButton disabled>Hello World</PrimaryButton>
      <SecondaryButton disabled>Hello World</SecondaryButton>
      <TertiaryButton disabled>Hello World</TertiaryButton>
    </div>
  );
};

export default App;
