import React from 'react';
import './App.css';
import Content from './Content';
const Menu = () => {
  return (
    <div>
      <ul>
        <li>first</li>
        <li>second</li>
        <li>third</li>
        <li><Content /></li>
      </ul>
    </div>
  );
}

export default Menu;
