import React, { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {
  const [ positions, setPositions ] = useState({ x: 0, y: 0 });
  useEffect(() => { 
    console.log('add effect', positions.x);
    
    const updateMouse = (e: MouseEvent) => {
      console.log('inner'); // 指数级打印，每次更新都会调用useEffect这个函数，会添加越来越多的click事件
      setPositions({ x: e.clientX, y: e.clientY })
    };
    document.addEventListener('click', updateMouse);
    return () => { // 每次清除的时候，调用这个函数。
      console.log('remove effect', positions.x);
      
      document.removeEventListener('click', updateMouse)
    }
  })
  console.log('before render', positions.x);
  
  return (
    <p>X: {positions.x} Y: {positions.y}</p>
  )
}

export default MouseTracker;