import React from 'react';

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloProvider } from '@apollo/react-hooks';
import ChatList from './components/ChatList';
import MessagesList from './components/MessagesList';
import SendMessage from './components/SendMessage';
import NewChat from './components/NewChat';
import Header from './Header';

import './App.css';
import { useAuth0 } from "./components/Auth/react-auth0-spa";



const createApolloClient = (authToken: string) => {
    return new ApolloClient({
        // link: new HttpLink({
        link: new WebSocketLink({
            uri: 'wss://cool-messenger.herokuapp.com/v1/graphql',
            options: {
                reconnect: true,
                connectionParams: {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                }
            }
        }),
        cache: new InMemoryCache(),
    });
};

function App({ idToken }: { idToken: string }) {
    const { loading, logout, user } = useAuth0();
    // console.log(user);
    const [id, setId] = React.useState(1);
    const passChatId = React.useCallback(newId => {
        setId(newId);
    }, []);
    // const [loggedIn, setLoggedIn] = React.useState(false);
    // const toggleLog = React.useCallback(newVal => {
    //     setLoggedIn(newVal);
    // }, [])
    // toggle = ()=> 

    if (!loading){
        const client = createApolloClient(idToken);
        // console.log(id)
        
        return (
            <div className="outer">
                <Header logoutHandler={logout} />
                <ApolloProvider client={client}>
                    <div className="App">
                        <ChatList userId={user.sub} id={id} passChatId={passChatId} />
                        <MessagesList chatId={id} userId={user.sub} />
                        <SendMessage chatId={id} userId={user.sub} />
                        <NewChat userId={user.sub} passChatId={passChatId} />
                    </div>
                </ApolloProvider>
            </div>

        );
    }
    else return (<div></div>)
}

export default App;
