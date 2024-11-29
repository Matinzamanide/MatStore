import { useRoutes } from "react-router-dom";
import Layout from "./components/layout/layout";
import ShoppingCartProvider from "./context/shopping-cart-context";
import routes from "./routes/routes";
import { AuthContextProvider } from "./context/auth-context";
function App() {
  const routing = useRoutes(routes);
  return (
    <AuthContextProvider>
      <ShoppingCartProvider>
        <Layout>{routing}</Layout>
      </ShoppingCartProvider>
    </AuthContextProvider>
  );
}

export default App;
