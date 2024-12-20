import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';
import brushetta from '../assets/brushetta.jpg';
import stuffedMushrooms from '../assets/stmush.jpg';
import garlicBread from '../assets/garlic-bread.jpg';
import grilledSalmon from '../assets/grilled-salmon.jpg';
import chickenAlfredo from '../assets/chicken-alfredo.jpg';
import vegetarianLasagna from '../assets/vegetarian-lasagna.jpg';
import tiramisu from '../assets/tiramisu.jpg';
import cheesecake from '../assets/cheese-cake.jpg';
import chocolateMousse from '../assets/chocolate-mousse.jpg';
import redWine from '../assets/redwine.jpeg';
import mojito from '../assets/mojito.jpg';
import icedTea from '../assets/iced-tea.jpg';

const Menu = () => {
  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Bruschetta', image: brushetta, link: 'bruschetta' },
        { name: 'Stuffed Mushrooms', image: stuffedMushrooms, link: 'stuffed-mushrooms' },
        { name: 'Garlic Bread', image: garlicBread, link: 'garlic-bread' },
      ],
    },
    {
      category: 'Entrees',
      items: [
        { name: 'Grilled Salmon', image: grilledSalmon, link: 'grilled-salmon' },
        { name: 'Chicken Alfredo', image: chickenAlfredo, link: 'chicken-alfredo' },
        { name: 'Vegetarian Lasagna', image: vegetarianLasagna, link: 'vegetarian-lasagna' },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Tiramisu', image: tiramisu, link: 'tiramisu' },
        { name: 'Cheesecake', image: cheesecake, link: 'cheesecake' },
        { name: 'Chocolate Mousse', image: chocolateMousse, link: 'chocolate-mousse' },
      ],
    },
    {
      category: 'Drinks',
      items: [
        { name: 'Red Wine', image: redWine, link: 'red-wine' },
        { name: 'Mojito', image: mojito, link: 'mojito' },
        { name: 'Iced Tea', image: icedTea, link: 'iced-tea' },
      ],
    },
  ];

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {menuItems.map((section, sectionIndex) => (
        <div key={sectionIndex} className="menu-section">
          <h3 className="menu-category">{section.category}</h3>
          <div className="menu-cards">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="menu-card">
                <img
                  src={item.image}
                  alt={`${item.name}`}
                  className="menu-card-image"
                />
                <div className="menu-card-content">
                  <Link to={`/dish/${item.link}`} className="menu-item-name">
                    {item.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;




