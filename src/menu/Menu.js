import MenuItem from "../menu-item/MenuItem";
import './Menu.css';
import { useState } from 'react';

                // destructuring
function Menu({startingItems}){
    // Setting the value of the "startingItems" prop (the "menuItems" array) as the starting value for the "items" state variable:
    const [items, setItems] = useState(startingItems);
    // In React you are not allowed to mutate (AKA Change) the state directly for any state value. Instead you create a new copy of the value and set that as the new state value using the function returned from the useState function.
    function updateQty(itemId, newQty){
        // A new updated copy of the menuItems/items array is created and set to the "newItems" variable by mapping through the current value of the array and updating the qty (Quantity) value for the object (AKA Type of pizza) that was selected.
        const newItems = items.map(i => {
            // Checking to see if the id passed into the updateQty function matches the id of the array item/object that is currently being passed into this function.
            if (i.id === itemId){
                // Creating a new object and spreading the properties in the array item/object that is currently being passed into this function. Also, updating the value of the qty property by overriding the value for that property. Finally, returning the new object so it will be added as an item in the new array that is returned from using the map method.
                return {...i, qty: newQty};
            }
                // Returning the item without making any changes to it
                return i;
        });
        // Setting the new array value (AKA "newItems" variable) that was returned from the map method as the new state value for "items". Also, because the "setItems" state function is used to update the value for "items" the Menu component re-renders which causes the three MenuItem components to re-render as well.
        setItems(newItems);
    }
    // Using forEach to run a function for each object in the "items" state variable (AKA The "menuItems" array). Each time the function is run it multiplies the price and quantity (AKA qty) values for that object (AKA Array item / Type of Pizza) and adds the result to the current "total" value. When it has run the function for each item in the array, it plugs in the final "total" value into the h2 element in the Menu component.
    let total = 0;
    items.forEach(i => {
        total += i.price * i.qty;
    });
    return(
        <section className='Menu'>
            <h1 className='Menu-title'>JJ's Pizzeria</h1>
            <div>
                {/* creating multiple MenuItem components */}
                {/* <MenuItem
                    type={startingItems[0].type} 
                    price={startingItems[0].price} 
                    qty={startingItems[0].qty}
                />
                <MenuItem
                    type={startingItems[1].type} 
                    price={startingItems[1].price} 
                    qty={startingItems[1].qty}
                />
                <MenuItem
                    type={startingItems[2].type} 
                    price={startingItems[2].price} 
                    qty={startingItems[2].qty}
                /> */}
                {/* Using the map method, which returns a new array whose item values are determined by what is returned from the function passed into the map method. This function is run for each item in the array that the map method is used on. In this case a new MenuItem component is returned/created each time the function is run. */}
                {items.map(i => (
                    <MenuItem
                        // Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
                        key={i.id}
                        id={i.id}
                        type={i.type}
                        price={i.price}
                        qty={i.qty}

                        // Passing the "updateQty" function as a value of the "updateQty" prop in each one of the "MenuItem" components
                        updateQty={updateQty}
                    />
                ))}
            </div>
            <h2>Grand Total: ${total}</h2>
        </section>
    );
}

export default Menu;