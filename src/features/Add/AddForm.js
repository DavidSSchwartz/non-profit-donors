import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../panes/panesSlice';

const AddForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('Baruch Cohen');
    const [amount, setAmount] = useState('100');
    const [donatedBy, setDonatedBy] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleAmountChange =  (e) => setAmount(e.target.value);
    const handleDonatedByChange = (e) => setDonatedBy(e.target.value);
    const entryAdded = () => {
        if (!name || !amount) {
            alert('Must enter Name and Amount!')
            return;
        }
        dispatch(add({name, amount, donatedBy}));
        setName('');
        setAmount('');
        setDonatedBy('');
    }
    return (
        <form className="add-form">
            <div className="add-form-fields">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type = "text"
                        value = {name}
                        id = "name"
                        onChange = {handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input 
                        type = "text" 
                        value = {amount}
                        id = "name"
                        onChange = {handleAmountChange}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Donated by:</label>
                    <input 
                        type = "text" 
                        value = {donatedBy}
                        id = "name"
                        onChange = {handleDonatedByChange}
                    />
                </div>
            </div>
            <input
                type = "button"
                value = "Add +"
                className = "add-button"
                onClick = {entryAdded}
            />
        </form>
    )
}

export default AddForm;
