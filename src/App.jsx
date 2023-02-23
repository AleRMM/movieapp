import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';
import MovieDetails from './components/MovieDetails';
import Register from './components/Register';

function App() {

	const client = new ApolloClient ({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/"
	})

	return (
		<Router>
			<ApolloProvider client={client}>

				<Navbar />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/create-movie" element={<Form />} />
					<Route path="/movie-details" element={<MovieDetails />} />
					<Route path="/register" element={<Register />} />
					<Route index element={<Login />} />
				</Routes>

			</ApolloProvider>
		</Router>
	)
}

export default App
