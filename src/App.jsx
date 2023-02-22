import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './components/Login';

function App() {
  
  const client = new ApolloClient ({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/"
  })

  return (
    <ApolloProvider client={client}>
      <Login />
    </ApolloProvider>
  )
}

export default App
