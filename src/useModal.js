import { useState } from 'react';

const useModal = () => {
  const [isShowingpay, setIsShowingpay] = useState(false);

  function togglepay() {
    setIsShowingpay(!isShowingpay);
  }

  return {
    isShowingpay,
    togglepay,
  }
};

export default useModal;