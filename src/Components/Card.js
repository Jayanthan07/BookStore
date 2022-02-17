import css from "../bookstore.module.css";
const Cart = ({ cart, totalCount})=>{
 const totalAmount =()=>{
     let totalAmount=0;
if(!cart.length){
    return 0;
}
else{
    cart.forEach(res=>{
        console.log((res.length * 8) / (res.length * 5));
        totalAmount += (res.length * 8)/(res.length * 5);
    })
        return totalAmount;
}
 }
    return(
<>
      
            <div>Cart List</div>
            {Object.keys(totalCount).length > 0 ? Object.keys(totalCount).map(res => <div>{totalCount[res] + `  no of  ${res}`}</div>) : <div>Select Book to add</div>}
            <div>Total Amount: {totalAmount()}</div>
        </>
    );
}

export default Cart;