import "@component/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import { StateProvider } from "../context";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createClientComponentClient());
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </SessionContextProvider>
  );
}
