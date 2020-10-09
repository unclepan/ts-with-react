import React, { useState, useEffect } from 'react';

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  useEffect(() => {
    console.log('document title effect is running');
    document.title = `点击了${like }次`
  }, [like]) // 只有like值改变的时候，这个useEffect才会执行
  return (
    <>
      <button onClick={()=>{setLike(like + 1)}}>
        {like} 🤹‍♂️
      </button>
      <button onClick={()=>{setOn(!on)}}>
        {on ? 'ON' : 'OFF'}
      </button>
    </>
  )
}

export default LikeButton;