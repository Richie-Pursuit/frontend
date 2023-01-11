import React from 'react';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
// import "./Transaction.css"
const API = process.env.REACT_APP_API_URL


function TransactionNew(props) {
    let navigate = useNavigate()

    const [transactions, setTransactions] = useState({
        date: "",
        name: "",
        from: "",
        amount: "",
      });

      const handleTextChange = (event) => {
        setTransactions({ ...transactions, [event.target.id]: event.target.value });
      };


    //   add log

      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API}/transactions` , transactions)
        .then(() => navigate('/transactions'))
        .catch(err => console.log(err))
      };

    return (
        <div className="new">
            <form onSubmit={handleSubmit}>
            <br></br>
            <label htmlFor="date">Date: </label>
            <input
                id="date"
                value={transactions.date}
                type="date"
                onChange={handleTextChange}
                placeholder="Tansaction Date"
                required
            />
            <br></br>
            <label htmlFor="name">Name: </label>
            <input
                id="name"
                type="text"
                required
                value={transactions.name}
                placeholder="Name"
                onChange={handleTextChange}
            />

            <br></br>
            <label htmlFor="from">From: </label>
            <textarea
                id="from"
                type="text"
                value={transactions.from}
                onChange={handleTextChange}
            />
            <br></br>
            <label htmlFor="amount">Amount: </label>
            <input
                id="amount"
                type="number"
                onChange={handleTextChange}
                value={transactions.amount}
            />

            <br></br>
            
            <br></br>
            <br></br>
            <div className="new-buttons">
            <input type="submit" />

            <Link to={"/transactions"}>
                <button className="cancel">Cancel</button>
            </Link>

            </div>
            </form>
            
        </div>
    );
}

export default TransactionNew;