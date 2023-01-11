import React from 'react';
import { useState, useEffect } from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
// import "./Transaction.css"
import axios from "axios";

const API = process.env.REACT_APP_API_URL

function TransactionEdit() {
    let navigate = useNavigate()
    let { index } = useParams();

    const [edit, setEdit] = useState({
      date: "",
      name: "",
      from: "",
      amount: 0,
    });

    const handleTextChange = (event) => {
        setEdit({ ...edit, [event.target.id]: event.target.value });
      };



      useEffect(() => {
        axios.get(`${API}/transactions/${index}`)
        .then(res => setEdit(res.data))
        .catch((err) => navigate("/not-found"))
      }, [index, navigate]);

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${API}/transactions/${index}`, edit)
        .then((res) => {
            setEdit(res.data)
            navigate(`/transactions/${index}`)
        })
        .catch(err => console.log(err))
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <br></br>
            <label htmlFor="date">Date:</label>
            <input
                id="date"
                value={edit.date}
                type="date"
                onChange={handleTextChange}
                placeholder="Date"
                required
            />
            <br></br>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                required
                value={edit.name}
                placeholder="name"
                onChange={handleTextChange}
            />
            
            <br></br>
            <label htmlFor="from">From:</label>
            <textarea
                id="from"
                type="text"
                value={edit.from}
                onChange={handleTextChange}
            />

            <br></br>
            <label htmlFor="amount">Amount:</label>
            <input
                id="amount"
                type="number"
                onChange={handleTextChange}
                value={edit.amount}
            />

            <br></br>
            <br></br>
            <input type="submit" />
            </form>
            <Link to={`/transactions/${index}`}>
            <button>Go Back</button>
        </Link>
            
        </div>
    );
}

export default TransactionEdit;