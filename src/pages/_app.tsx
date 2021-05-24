import { FC } from "react";
import { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "styles/globals.css";
import { SiteLayout } from "layouts";

const Application: FC<AppProps> = ({ Component, pageProps }) => {
    const client = new ApolloClient({
        cache: new InMemoryCache()
    });

    const getLayout: GetLayout =
        (Component as ExtendedNextComponent).getLayout ||
        ((page) => <SiteLayout>{page}</SiteLayout>);

    return (
        <ApolloProvider client={client}>{getLayout(<Component {...pageProps} />)}</ApolloProvider>
    );
};

export default Application;
