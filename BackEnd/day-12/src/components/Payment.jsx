import { useState } from "react";
import '../assets/Payment.css';

const Pay = () => {
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (amount > 10) {
            const options = {
                key: 'rzp_test_6dh5By5fz1bUOQ',
                key_secret: 'Dkl0HWrXOyX4VY0WB8O2pv6F',
                amount: amount * 100,
                currency: "INR",
                name: 'PURPLE FOX',
                handler: (res) => {
                    alert(res.razorpay_payment_id)
                },
                prefill: {
                    name: 'Rookie',
                    email: 'Rookie@gmail.com',
                    contact: '9872545210'
                },
                notes: {
                    address: " office",
                },
                theme: {
                    color: '#f5f5f7'
                }
            };
            const pay = new window.Razorpay(options);
            pay.open();
        } else {
            alert("Invalid amount. Please enter an amount greater than 1000");
        }
    }

    return (
        <div className="payment-container">
            <h1 className="payment-header">Payment Page</h1>
            <form onSubmit={handleSubmit}>
                <label className="amount-label">Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="amount-input"
                /><br></br>
                <button type="submit" className="pay-button">
                    Pay Now
                </button>
            </form>
        </div>
    );
}

export default Pay;