import "@/styles/globals.scss";
import type { AppProps } from "next/app";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
