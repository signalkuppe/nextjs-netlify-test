import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../theme/globalStyles';
import theme from '../theme/theme';

function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default App;
