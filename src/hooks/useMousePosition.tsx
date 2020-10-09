import { useState, useEffect } from 'react';
 // 1. 自定义hook必须以use开头。2.两个组件中使用相同的hook，不会共享state，每次使用自定hook其中state的副作用都是隔离的。
const useMousePosition = () => {
  const [ positions, setPositions ] = useState({ x: 0, y: 0 });
  useEffect(() => { 
    console.log('add effect', positions.x);
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY })
    };
    document.addEventListener('mousemove', updateMouse);
    return () => {
      console.log('remove effect', positions.x);
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [])
  return positions
}

export default useMousePosition;