import Router from './routes';
import ThemeProvider from './theme';
import RtlLayout from './components/RtlLayout';

function App() {
  return (
    <ThemeProvider>
      <RtlLayout>
        <Router />
      </RtlLayout>
    </ThemeProvider>
  );
}

export default App;
