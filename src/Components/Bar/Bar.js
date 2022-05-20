import './Bar.css';
import React, { useState } from 'react'

export default function Bar({ data, highest }) {
    const [active, setActive] = useState(null);
    return (
        <div className='bar'>
            <p className="bar__amount" style={{
                    animationName: active === null ? null : active ? 'slide_amount_in' : 'slide_amount_out'
                }}>${data.amount}</p>
            <div
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="bar__block"
                style={{
                    height: `${data.amount + 10}%`, // add 10 to increase their bar height
                    backgroundColor: highest ? active ? 'var(--pale-cyan)': 'var(--cyan)' : active ? 'var(--pale-orange)' : 'var(--soft-red)'
                }}></div>
            <p className="bar__day">{data.day}</p>
        </div>
    )
}
