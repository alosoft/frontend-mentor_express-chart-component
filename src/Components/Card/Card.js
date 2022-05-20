import './Card.css';

import React from 'react';
import Bar from '../Bar/Bar';
const data = require('../../data.json');
console.log(data)

export default function Card() {
    const amounts = data.map(item => item.amount)
    const biggest = Math.max(...amounts);

    return (
        <main className='main'>
            <h1 className="main__title">Spending - Last 7 days</h1>
            <div className="main__charts">
                {data.map(item => (
                    <Bar key={item.day} highest={biggest === item.amount} data={item} />
                ))}
            </div>
            <div className="main__line"></div>
            <div className="main__expenses">
                <div className="main__expenses-left">
                    <p className="main__expenses-left__title">Total this month</p>
                    <h2 className="main__expenses-left__amount">$478.33</h2>
                </div>
                <div className="main__expenses-right">
                    <p className="main__expenses-right__percent">+2.4%</p>
                    <p className="main__expenses-right__from">from last month</p>
                </div>
            </div>
        </main>
    )
}
