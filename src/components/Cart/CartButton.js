import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classes from './CartButton.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartButton = ()=>{
return(
    <>
        <FontAwesomeIcon icon={faCartShopping} className={classes.icon}/>
        <span>Cart</span>
    </>
)
}
export default CartButton;