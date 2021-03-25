import React, { useState } from 'react';
import classNames from 'classnames';

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={classNames('categories__item', { active: activeItem !== 0 && !activeItem })}
          onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items.map((i, idx) => (
          <li
            onClick={() => onSelectItem(idx)}
            className={classNames('categories__item', { active: activeItem === idx })}
            key={`${i}_${idx}`}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
