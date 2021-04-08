import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';
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

export default appWithTranslation(App, nextI18NextConfig);
