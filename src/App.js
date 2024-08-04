import './App.css';

import theme from './styles/themes.d';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { GlobalFrameWrapper } from './components/GlobalFrame';
import BodyFrameWrapper from './components/BodyFrame';
import { InputSection } from './components/InputSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalFrameWrapper>
          <Header />
          <BodyFrameWrapper>
            <InputSection title={'Enter the Original URL!'} />
          </BodyFrameWrapper>
        </GlobalFrameWrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
