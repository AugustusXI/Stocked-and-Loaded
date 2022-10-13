import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OnOrder from "./pages/OnOrder";
import OutOfStock from "./pages/OutOfStock";
import ToOrder from "./pages/ToOrder";
import Footer from "./components/Footer";
import SignUpPage from "./pages/SignUpPage";
import ButtonAppBar from "./components/ButtonAppBar";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import LogIn from "./pages/Login";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// ----------------------------------------------
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <ButtonAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/on-order" element={<OnOrder />} />
            <Route path="/out-of-stock" element={<OutOfStock />} />
            <Route path="/to-order" element={<ToOrder />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
