import './index.css';
import { Outlet } from 'react-router-dom';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer'
import CatalogueHeader from './components/sections/CatalogueHeader';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <header>
                < Header />
            </header>
            <section>
                < CatalogueHeader />
            </section>
            <main className='bg-slate-400 flex justify-center min-h-screen text-white'>
                < Outlet />
            </main>
            <footer>
                < Footer />
            </footer>
        </ApolloProvider>
    );
}