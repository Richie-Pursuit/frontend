import React from 'react';
import { useEffect, useState } from "react";
import Transaction from "./Transaction";
import axios from "axios";
const API =process.env.REACT_APP_API_URL

function Transactions() {
    const [transactions , setTransactions] = useState([])

   useEffect(()=> {
    axios
    .get(`${API}/transactions`)
    .then((res) => setTransactions(res.data))
    .catch(err => console.log(err))
    }, [])

    const getTotal=(nums) =>{
        let amount = 0
        for(let x of nums) amount += Number(x.amount)
        return amount.toFixed(2)
    }

    const total =getTotal(transactions)

    function colors(){
        if (total > 1000){
            return(
                <span style={{color: "green"}}> 
                    ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
            )
        }
        else if(total > 0 && total <1000){
            return(
                <span style={{ color: "blue" }}>
                    ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
            )
        }else if(total<0){
            return(
                <span style={{ color: "red" }}>
                    ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
            )
        }
    }




    return (
        <div className='allTransactions'>
            <section>
                <h3>Account total: {colors()}</h3>
                <table className='table'>
                    <thread>
                        <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                        </tr>
                    </thread>

                    <tbody className='tbody'>
                    {transactions.map((transaction, index) => {
                    return (
                        <Transaction 
                        key={index} 
                        transaction={transaction} 
                        index={index} />
                        )
                    })}

                    </tbody>
                </table>
            </section>
        </div>
        
    );
}

export default Transactions;