import React from 'react';
import classNames from 'classnames';

const Categories = React.memo(({ activeCategory, items, onClickItem }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={classNames('categories__item', {
            active: activeCategory !== 0 && !activeCategory,
          })}
          onClick={() => onClickItem(null)}>
          Все
        </li>
        {items.map((i, idx) => (
          <li
            onClick={() => onClickItem(idx)}
            className={classNames('categories__item', { active: activeCategory === idx })}
            key={`${i}_${idx}`}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
