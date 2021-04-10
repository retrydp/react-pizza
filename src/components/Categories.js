import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={classNames('categories__item', {
            active: activeCategory !== 0 && !activeCategory,
          })}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items.map((i, idx) => (
          <li
            onClick={() => onClickCategory(idx)}
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

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
