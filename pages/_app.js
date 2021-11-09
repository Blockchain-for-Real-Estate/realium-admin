import { useState } from "react";
import Head from "next/head";
import "../index.css";
import Amplify from "../amplify";

// CONTEXT
import { AppProvider } from "context/AppContext";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import DefaultLayout from "layout/DefaultLayout";
import Toasts from "components/base/Toasts";
import useUser from "context/queries/useUser";
import Modal from "components/base/Modal";
import AuthPage from "pages/auth/AuthPage";

function Realium({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            retry: process.env.NODE_ENV === "production" ? true : false,
          },
        },
      })
  );

  Amplify();

  return (
    <>
      <Head>
        <title>{Component.title || "Realium"}</title>
        <meta
          name="description"
          content={
            Component.description ||
            "Backed by Real Estate, Powered by Blockchain"
          }
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <AppProvider>
            <Auth Component={Component} pageProps={pageProps} />
            <Toasts />
            <Modal />
          </AppProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

const Auth = ({ Component, pageProps }) => {
  const { data: user, isLoading } = useUser();
  if (isLoading) return null;
  if (!user) return <AuthPage />;
  if (user) return getLayout(Component, pageProps);
};

const getLayout = (Component, pageProps) => {
  switch (Component.layout) {
    case "default":
      return (
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      );
    default:
      return <Component {...pageProps} />;
  }
};

export default Realium;
