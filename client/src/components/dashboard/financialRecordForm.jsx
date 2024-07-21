import { useUser } from "@clerk/clerk-react";
import { useState } from "react";

const FinancialRecordFrom = () => {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const {user} = useUser();

  const handleSubmit = (e)=> {
    e.preventDefault();
    
    const newRecord = {
      userId: user?.id,
      date: new Date(),
      description,
      amount: parseFloat(amount),
      category,
      paymentMethod
    };

    // addRecord(newRecord);
    setDescription("");
    setAmount("");
    setCategory("");
    setPaymentMethod("");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Description</label>
          <input type="text" required value={description} onChange={(e)=> setDescription(e.target.value)} className="input" />
        </div>
        <div className="form-field">
          <label>Amount:</label>
          <input type="number" required value={amount} onChange={(e)=> setAmount(e.target.value)} className="input" />
        </div>
        <div className="form-field">
          <label>Category:</label>
          <select required value={category} onChange={(e)=> setCategory(e.target.value)} className="input">
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label>Payment Method</label>
          <select required value={paymentMethod} onChange={(e)=> setPaymentMethod(e.target.value)} className="input">
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="button">Add record</button>
      </form>
    </div>
  );
};

export default FinancialRecordFrom;
