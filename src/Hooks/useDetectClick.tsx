import { useState, useEffect, useRef } from 'react';

export default function detectClick() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const ref = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, !isActive);

    return () => {
      document.removeEventListener('click', handleClickOutside, !isActive)
    }
  })

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsActive(prevState => !prevState);
    }
  }


  return { ref, isActive, setIsActive }
}