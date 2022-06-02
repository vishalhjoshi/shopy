import { useState } from "react";

function App() {
  const  [amount,setAmount] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(amount === null || amount === "" || amount === 0 || amount === undefined){
      alert("Amount cant be empty.")
    }else(
      alert(amount)
    )
  }
  return (
    <div className="container">
     <form onSubmit={(e) => handleSubmit(e)}>
  <div class="mb-3">
    <label for="amountInputEmail1" class="form-label">Amount</label>
    <input type="number" className="form-control" id="amountInputEmail1" aria-describedby="amount" onChange={(e) => setAmount(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="orderId" className="form-label">OrderID</label>
    <input type="text" className="form-control" id="orderID" />
  </div>
  <button type="submit" className="btn btn-success">Pay Tommorow</button>
</form>
    </div>
  );
}

export default App;
