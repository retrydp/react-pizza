import React, { useState } from 'react';

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (idx, i) => {
    setActiveItem(idx);
    onClick(i);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null, 'Все')}>
          Все
        </li>
        {items &&
          items.map((i, idx) => (
            <li
              onClick={() => onSelectItem(idx, i)}
              className={activeItem === idx ? 'active' : ''}
              key={`${i}_${idx}`}>
              {i}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
