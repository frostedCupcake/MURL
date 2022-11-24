import { ThemeProvider } from "next-themes";

import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "../components/Footer";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto bg-murl-dark">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
