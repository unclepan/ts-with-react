// useRef-多次渲染之间的纽带
// ref在所有的rander里面都保持着唯一的引用，因此对ref的赋值或者取值都是一个最终的状态，而不会在不同的rander之间存在着隔离。
// 变更 ref的值不会引发组件重新渲染，这里是setLike造成的。

// 访问dom节点，useRef返回的值传递给组件，或者dom的ref属性，就可以通过ref的current值 访问组件或者真实的dom节点，从而可以对dom进行一些操作

import React, { useState, useEffect, useRef } from 'react';
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const likeRef = useRef(0);
  const didMountRef = useRef(false);
  const domRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log('document title effect is running');
    document.title = `点击了${like }次`
  }, [like]) // 只有like值改变的时候，这个useEffect才会执行

  // 想在组件更新的时候做一些操作
  useEffect(() => {
    if(didMountRef.current){
      console.log('this is updates');
    } else {
      didMountRef.current = true;
    }
  })
  useEffect(()=>{
    if(domRef && domRef.current){
      domRef.current.focus();
    }
  });

  function handleAlertClick(){
    setTimeout(() => {
      alert('you clicked on' + likeRef.current)
    }, 3000)
  }
  return (
    <>
      <input type="text" ref={domRef}/>
      <button onClick={()=>{setLike(like + 1); likeRef.current++}}>
        {like} 👍
      </button>
      <button onClick={handleAlertClick}> Alert!
      </button>
    </>
  )
}

export default LikeButton;