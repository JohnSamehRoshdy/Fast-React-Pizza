import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartTotalPrice, getCartTotalQuantity } from './cartSlice'

function CartOverview() {
    const totalCartQuantity = useSelector(getCartTotalQuantity)
    const cartTotalPrice = useSelector(getCartTotalPrice)

    if (!totalCartQuantity) return null

    return (
        <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 sm:px-6 md:text-base">
            <p className="space-x-4 font-semibold uppercase text-stone-300 sm:space-x-6">
                <span>{totalCartQuantity} Pizzas</span>
                <span>{cartTotalPrice} $</span>
            </p>
            <p className="text-2xl">John Sameh</p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    )
}

export default CartOverview
