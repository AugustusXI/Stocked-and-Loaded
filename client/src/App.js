import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OnOrder from "./pages/OnOrder";
import OutOfStock from "./pages/OutOfStock";
import ToOrder from "./pages/ToOrder";
import Footer from "./components/Footer";
import ButtonAppBar from "./components/ButtonAppBar";
import { setContext } from "@apollo/client/link/context";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink,
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
            <Route path="/on-order" element={<OnOrder />} />
            <Route path="/out-of-stock" element={<OutOfStock />} />
            <Route path="/to-order" element={<ToOrder />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
