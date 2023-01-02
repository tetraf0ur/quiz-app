import type { AppProps } from "next/app";
import { NextPage } from "next/types";
import styled from "styled-components";
import { AuthGuard, AuthProvider } from "@feature/auth/layout";

import "@app/init/global-styles.scss";
import "swiper/css";
import "toastify-js/src/toastify.css";
import "dayjs/locale/ru";

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
  adminPanel?: boolean;
};

function MyApp(props: AppProps) {
  const {
    Component,
    pageProps,
  }: { Component: NextApplicationPage; pageProps: AppProps["pageProps"] } =
    props;

  if (Component.adminPanel) {
    return <Component {...pageProps} />;
  }

  return (
    <AuthProvider>
      <StyledApp>
        {Component.requireAuth ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          <Component {...pageProps} />
        )}
      </StyledApp>
    </AuthProvider>
  );
}

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  position: relative;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default MyApp;
