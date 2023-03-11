import { useState } from 'react';
import Button from '@/components/Button';
import { FaCheck } from 'react-icons/fa';

export default function CartSelectButton() {
  const [isSelected, setIsSelected] = useState(false);
  const toggleSelectProductHandler = (): void => {
    setIsSelected(!isSelected);
  };

  return (
    <Button className={`cart-selected-${isSelected}`} type="button" onClick={toggleSelectProductHandler}>
      <FaCheck color={isSelected ? 'fff' : 'd9d9d9'} />
    </Button>
  );
}
