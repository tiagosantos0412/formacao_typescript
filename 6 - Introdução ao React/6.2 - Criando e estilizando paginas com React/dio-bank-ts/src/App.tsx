import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Rotas } from "./components/Routes/Rotas";
import { AppContextProvider } from "./components/AppContext/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Layout>
          <Rotas />
        </Layout>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App;
