import React from 'react';
import { Link } from "react-router-dom";

function Transaction({transaction, index}) {

    const date = new Date(transaction.date)
    const formatDate= new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
    }).format(date)

    return (
        <tr>

            <td><span>💥</span> { formatDate }</td>
            <td>
            <Link to={`/transactions/${index}`}>{transaction.name}</Link>
            </td>
            <td>
                ${transaction.amount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            
        </tr>
    );
}

export default Transaction;