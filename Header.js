import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <header>
      <h1>Mi Tienda de Plantas</h1>
      <nav>
        <Link to="/">Listado de Productos</Link>
        <Link to="/cart">Carrito ({cartItems.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
