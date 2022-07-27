import Router from './routes';
import ThemeProvider from './theme';
import ThemeLocalization from './components/ThemeLocalization';
import RtlLayout from './components/RtlLayout';

function App() {
  return (
    <ThemeProvider>
      <ThemeLocalization>
        <RtlLayout>
          <Router />
        </RtlLayout>
      </ThemeLocalization>
    </ThemeProvider>
  );
}

export default App;
