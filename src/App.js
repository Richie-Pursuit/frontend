import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Transactions from "./Components/Transactions";
import TransactionDetails from "./Components/TransactionDetails";
import TransactionEdit from "./Components/TransactionEdit";
import TransactionNew from "./Components/TransactionNew";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />}/>
            <Route path="/transactions/:index" element={<TransactionDetails />}/>
            <Route path="/transactions/:index/edit" element={<TransactionEdit />}/>
            <Route path="/transactions/new" element={<TransactionNew />}/>
            <Route path="*" />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
