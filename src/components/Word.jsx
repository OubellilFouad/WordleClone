import React, { useEffect, useRef, useState } from 'react'
import Letter from './letter'

const Word = ({click,word,rowNum,rowTurn,setWordFin,reset,setReset,wordNum}) => {
  const [turn,setTurn] = useState(1);
  const [letter1,setLetter1] = useState('');
  const [letter2,setLetter2] = useState('');
  const [letter3,setLetter3] = useState('');
  const [letter4,setLetter4] = useState('');
  const [letter5,setLetter5] = useState('');
  const [finish,setFinish] = useState(false);
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  useEffect(() => {
    if(turn > 5){
        setTurn(5);
    }
    if(turn < 1){
        setTurn(1);
    }
    document.addEventListener('keydown',(e) => {
        if(e.key === 'Enter'){
            if(letter1 !== '' && letter2 !== '' && letter3 !== '' && letter4 !== '' && letter5 !== ''){
                let final = letter1+letter2+letter3+letter4+letter5;
                setFinish(true);
                setWordFin(final);
            }else{
                setFinish(false);
            }
        }
    })
  },[turn,letter5])
  useEffect(() => {
    if(reset){
        setLetter1('');
        setLetter2('');
        setLetter3('');
        setLetter4('');
        setLetter5('');
        setFinish(false);
        setTurn(1);
    }
  },[reset])
  return (
    <div className='flex justify-between gap-4'>
        <Letter number={1} turn={turn} setTurn={setTurn} forwardRef={input1} click={click} setLetter={setLetter1} word={word} finish={finish} letter={letter1} rowNum={rowNum} rowTurn={rowTurn} reset={reset} setReset={setReset} wordNum={wordNum} />
        <Letter number={2} turn={turn} setTurn={setTurn} forwardRef={input2} click={click} setLetter={setLetter2} word={word} finish={finish} letter={letter2} rowNum={rowNum} rowTurn={rowTurn} reset={reset} setReset={setReset} wordNum={wordNum} />
        <Letter number={3} turn={turn} setTurn={setTurn} forwardRef={input3} click={click} setLetter={setLetter3} word={word} finish={finish} letter={letter3} rowNum={rowNum} rowTurn={rowTurn} reset={reset} setReset={setReset} wordNum={wordNum} />
        <Letter number={4} turn={turn} setTurn={setTurn} forwardRef={input4} click={click} setLetter={setLetter4} word={word} finish={finish} letter={letter4} rowNum={rowNum} rowTurn={rowTurn} reset={reset} setReset={setReset} wordNum={wordNum} />
        <Letter number={5} turn={turn} setTurn={setTurn} forwardRef={input5} click={click} setLetter={setLetter5} word={word} finish={finish} letter={letter5} rowNum={rowNum} rowTurn={rowTurn} reset={reset} setReset={setReset} wordNum={wordNum} />
    </div>
  )
}

export default Word