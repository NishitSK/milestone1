
import React from 'react';
import './Menu.css';
import brushetta from '../assets/brushetta.jpg';
import stuffedMushrooms from '../assets/stmush.jpg';
import garlicBread from '../assets/garlicbread.jpg';
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
        { name: 'Bruschetta', image: brushetta },
        { name: 'Stuffed Mushrooms', image: stuffedMushrooms },
        { name: 'Garlic Bread', image: garlicBread },
      ],
    },
    {
      category: 'Entrees',
      items: [
        { name: 'Grilled Salmon', image: grilledSalmon },
        { name: 'Chicken Alfredo', image: chickenAlfredo },
        { name: 'Vegetarian Lasagna', image: vegetarianLasagna },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Tiramisu', image: tiramisu },
        { name: 'Cheesecake', image: cheesecake },
        { name: 'Chocolate Mousse', image: chocolateMousse },
      ],
    },
    {
      category: 'Drinks',
      items: [
        { name: 'Red Wine', image: redWine },
        { name: 'Mojito', image: mojito },
        { name: 'Iced Tea', image: icedTea },
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
                  <h4 className="menu-item-name">{item.name}</h4>
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



