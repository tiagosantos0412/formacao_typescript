import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Conta } from './pages/Conta/Conta';
import { Layout } from "./components/Layout/Layout";
import { Main } from "./pages/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/conta/:id" element={<Conta />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
