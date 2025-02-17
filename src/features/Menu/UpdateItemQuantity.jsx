import { useDispatch, useSelector } from 'react-redux'
import Button from '../../UI/Button'
import {
    decreaseItemQuantity,
    getCurrentQuantityById,
    increaseItemQuantity,
} from '../Cart/cartSlice'
function UpdateItemQuantity({ pizzaId }) {
    const dispatch = useDispatch()
    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))
    return (
        <div className="flex items-center gap-1 md:gap-3">
            <Button
                type="round"
                onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
            >
                -
            </Button>
            <span className="text-sm font-medium">{currentQuantity}</span>
            <Button
                type="round"
                onClick={() => dispatch(increaseItemQuantity(pizzaId))}
            >
                +
            </Button>
        </div>
    )
}

export default UpdateItemQuantity
