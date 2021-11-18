import './MenuItem.css';

                    // destructuring
function MenuItem({type, price, qty, id, updateQty}){
    // Using the updateQty function that was passed down from the Menu Component. The values for the "id" & "qty" that are passed in as arguments for the following functions are the values passed in the for the "id" & "qty" props when each MenuItem is created.
    function addSlice(){
        updateQty(id, qty + 1);
    }
    function removeSlice(){
        updateQty(id, qty - 1);
    }
    return(
        <div className='MenuItem'>
            <p>{type}</p>
            <p>${price}</p>
            <p>Qty: {qty}</p>
            <button onClick={addSlice}>+</button>
            {/* Using a Ternary so the "removeSlice" function will not run when the qty is at zero. (NOTE: "null is used for the "else" in this Ternary so that nothing will happen if the condition is false) */}
            <button onClick={() => (qty > 0) ? removeSlice() : null}>-</button>
            <p>Total: ${price * qty}</p>
        </div>
    );
}


export default MenuItem;