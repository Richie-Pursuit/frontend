import React from 'react';
import { useState, useEffect } from "react";
import { Link, useParams , useNavigate} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

function TransactionDetails() {
    const [transactions , setTransactions] = useState([]);
    let navigate = useNavigate()
    let { index } = useParams();

    useEffect(() => {
        axios
        .get(`${API}/transactions/${index}`)
        .then(res=> setTransactions(res.data))
        .catch(err=> navigate(`/not-found`))
      }, [index, navigate]);

    const handleDelete = () => {
        axios
        .delete(`${API}/transactions/${index}`)
        .then(()=> navigate('/transactions'))
        .catch(err=> console.log(err))
      }



    return (
        <div>
        <article>
         <div className="details">
        <h2><span>Transaction Name: </span>
          {transactions.name} 
        </h2>
        <h3>
            <span>From: </span>
            {transactions.from}
        </h3>
        <h3><span>Amount: </span>{transactions.amount} $</h3>
         </div>
        <div className="buttons">
            <div>
                <Link to={"/transactions"}>
                    <button>Back</button>
                </Link>
            </div>
            <div>
                <Link to={`/transactions/${index}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>

            </div>
        </div>

      </article>
            
        </div>
    );
}

export default TransactionDetails;