import React, { useEffect, useState } from 'react'

const Letter = ({number,turn,forwardRef,click,setTurn,setLetter,word,finish,letter,rowNum,rowTurn,reset,setReset,wordNum}) => {
  const [correct,setCorrect] = useState(false);  
  const [wrong,setWrong] = useState(false); 
  const [place,setPlace] = useState(false);
  let wordd = word[wordNum%3];
  let classs = `spin-${number}`
  useEffect(() => {
    if(number === turn && rowNum === rowTurn){
        forwardRef.current.focus();
    }
    setWrong(false);
    setCorrect(false);
    if(finish){
        if(letter === wordd[number - 1]){
            setCorrect(true);
        }else{
            setWrong(true);
        }
        if(wordd.includes(letter)){
            setPlace(true);
        }
    }
  },[turn,click,rowTurn])
  useEffect(() => {
    if(reset){
        forwardRef.current.value = '';
        setCorrect(false);
        setWrong(false);
        setPlace(false);
        setReset(false);
    }
  },[reset])  
  return (
    <input maxLength={1} ref={forwardRef} onKeyDown={(e) => {
        if(e.code === 'Backspace'){
            e.preventDefault();
            if(forwardRef.current.value === ''){
                let change = turn - 1;
                setTurn(change);
            }
            forwardRef.current.value = '';
        }
    }} onChange={(e) =>  {
        if(e.target.value !== ''){
            setLetter(e.target.value);
            setTurn(turn + 1);
        }
    }} max={1} type='text' data-number={number} className={`border-2 border-black w-14 h-14 sm:w-24 sm:h-24 flex justify-center items-center text-5xl outline-none text-center focus:border-green-300 uppercase caret-transparent ${correct && 'bg-green-500 border-green-500'} ${wrong && 'bg-secondary border-secondary'} ${place && !correct && '!bg-orange-500 !border-orange-500'} ${finish && 'spin'}`}/>
  )
}

export default Letter