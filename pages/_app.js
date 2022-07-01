import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <StateContext>
                <Component {...pageProps} />
            </StateContext>
        </ThemeProvider>
    )
}

export default MyApp
