import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Conta } from './pages/Conta/Conta';
import { Layout } from "./components/Layout/Layout";
import { Main } from "./pages/Main/Main";
import { OpcoesDeposito } from "./pages/Deposito/OpcoesDeposito";
import { DepositoDinheiro } from "./pages/Deposito/DepositoDinheiro";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/main" element={<Main />} />
          <Route path="/conta/:id" element={<Conta />} />
          <Route path="/opcoes-deposito/:id" element={<OpcoesDeposito />} />
          <Route path="/deposito-dinheiro/:id" element={<DepositoDinheiro />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
