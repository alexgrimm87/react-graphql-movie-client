import {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink, from} from '@apollo/client';
import {CssBaseline, Container, Box} from "@mui/material";
import {AppContext} from './providers/appContext';
import I18nProvider from './providers/i18n'
import {Navigation} from "./components";
import {Home, Recommend} from "./pages";

function App() {
  const {state} = useContext(AppContext);
  const httpLink = new HttpLink({uri: 'http://localhost:4000/'});

  const localeMiddleware = new ApolloLink((operation, forward) => {
    const customHeaders = operation.getContext().hasOwnProperty("headers") ? operation.getContext().headers : {};

    operation.setContext({
      headers: {
        ...customHeaders,
        locale: state.locale
      }
    });

    return forward(operation);
  });

  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true
  });

  return (
    <I18nProvider locale={state.locale}>
      <ApolloProvider client={client}>
        <CssBaseline />
        <Navigation />
        <Box sx={{backgroundColor: (theme) => theme.palette.grey[100]}}>
          <Container maxWidth="xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="recommend" element={<Recommend />} />
            </Routes>
          </Container>
        </Box>
      </ApolloProvider>
    </I18nProvider>
  );
}

export default App;
