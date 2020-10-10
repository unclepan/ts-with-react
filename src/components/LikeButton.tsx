import React, { useState, useEffect } from 'react';
import useMousePosition from '../hooks/useMousePosition';

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const positions = useMousePosition();
  useEffect(() => {
    console.log('document title effect is running');
    document.title = `点击了${like }次`
  }, [like]) // 只有like值改变的时候，这个useEffect才会执行
  function handleAlertClick(){
    setTimeout(() => {
      alert('you clicked on' + like)
    }, 3000)
  }
  return (
    <>
      <h2>X: {positions.x} Y: {positions.y}</h2>
      <button onClick={()=>{setLike(like + 1)}}>
        {like} 🤹‍♂️
      </button>
      <button onClick={handleAlertClick}> Alert!
      </button>
    </>
  )
}

export default LikeButton;