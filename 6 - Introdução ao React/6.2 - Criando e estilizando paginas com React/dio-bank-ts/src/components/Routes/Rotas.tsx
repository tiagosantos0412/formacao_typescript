import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Main } from "../../pages/Main/Main";
import { Conta } from "../../pages/Conta/Conta";
import { OpcoesDeposito } from "../../pages/Deposito/OpcoesDeposito";
import { DepositoDinheiro } from "../../pages/Deposito/DepositoDinheiro";
export const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/main/:id" element={<Main />} />
            <Route path="/conta/:id" element={<Conta />} />
            <Route path="/opcoes-deposito/:id" element={<OpcoesDeposito />} />
            <Route path="/deposito-dinheiro/:id" element={<DepositoDinheiro />} />
        </Routes>
    )
}