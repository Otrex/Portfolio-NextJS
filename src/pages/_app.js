import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

import { useState, useEffect } from "react";
import Router from "next/router";

import Transition from "@/components/Transition";
import PageLoader from "../components/PageLoader";
import Layout from "@/components/layout";

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {/* { loading ? "Loading": ""} */}
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </>
  );
};
export default App;
