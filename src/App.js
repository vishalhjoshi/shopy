function App() {
  return (
    <div className="container">
     <form>
  <div class="mb-3">
    <label for="amountInputEmail1" class="form-label">Amount</label>
    <input type="text" className="form-control" id="amountInputEmail1" aria-describedby="amount" />
  </div>
  <div className="mb-3">
    <label for="orderId" className="form-label">OrderID</label>
    <input type="text" className="form-control" id="orderID" />
  </div>
  <button type="submit" className="btn btn-success">Pay Now</button>
</form>
    </div>
  );
}

export default App;
