import { Analytics } from "@vercel/analytics/react";

import "normalize.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
