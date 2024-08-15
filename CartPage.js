import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../features/cartSlice';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <p>Total de plantas: {cartItems.length}</p>
      <p>Costo total: ${getTotalCost()}</p>
      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
        </div>
      ))}
      <button>Pago (Próximamente)</button>
      <button onClick={() => window.location.href = '/'}>Continuar Comprando</button>
    </div>
  );
};

export default CartPage;
