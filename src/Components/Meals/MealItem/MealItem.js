import { useContext } from 'react'

import CartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'


const MealItem = (props) => 
{
    const cartCtx = useContext(CartContext)

    const price = `$${props.price.toFixed(2)}` 
    // .toFixed(2) will render two decimal places. 
    // Example: 10.90 insted of 10.9

    const addToCartHandler = (amount) =>
    {
        cartCtx.addItem(
            {
                id: props.id,
                name: props.name,
                amount,
                price: props.price
            }
        )
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}
 
export default MealItem