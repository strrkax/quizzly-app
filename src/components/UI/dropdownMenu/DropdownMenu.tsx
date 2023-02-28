import { FC, useEffect, useState, useRef } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { ICategory } from '../../../models/ICategory';
import { changeCategory } from '../../../features/QueryParamsSlice/QueryParamsSlice';
import styles from './dropdownMenu.module.scss';

interface DropdownMenuProps {
  categories?: ICategory[];
  selectedCategory?: ICategory;
  setSelectedCategory: (category: ICategory) => void;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ selectedCategory, setSelectedCategory, categories }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const anyCat = { id: 0, name: 'Any category' };

  useEffect(() => {
    if (selectedCategory?.id === 0) {
      dispatch(changeCategory(''));
    }
    dispatch(changeCategory(selectedCategory?.id));
  }, [selectedCategory]);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (item: ICategory) => {
    setSelectedCategory(item);
    setIsOpen(false);
  };


  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        onClick={toggleDropdown}
      >
        {selectedCategory ? selectedCategory.name : "Any category"}
      </div>
      <div className={isOpen ? styles.open : styles.body}>
        {categories && [anyCat, ...categories].map(cat =>
          <div
            key={cat.id}
            className={
              cat.id === selectedCategory?.id
                ?
                [styles.item, styles.active].join(' ')
                :
                styles.item
            }
            onClick={() => handleCategoryChange(cat)}
          >{cat.name}</div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;