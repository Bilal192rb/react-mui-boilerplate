import Router from './routes';
import ThemeProvider from './theme';
import ThemeLocalization from './components/ThemeLocalization';
import RtlLayout from './components/RtlLayout';
import NotistackProvider from './components/NotistackProvider';
import { ProgressBarStyle } from './components/ProgressBar';

function App() {
  return (
    <ThemeProvider>
      <ThemeLocalization>
        <RtlLayout>
          <NotistackProvider>
            <ProgressBarStyle />
            <Router />
          </NotistackProvider>
        </RtlLayout>
      </ThemeLocalization>
    </ThemeProvider>
  );
}

export default App;
