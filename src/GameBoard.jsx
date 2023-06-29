import React, { useEffect, useRef, useState } from 'react'
import Word from './components/Word'

const GameBoard = () => {
  const [click,setClick] = useState(false);
  const [rowTurn,setRowTurn] = useState(1);
  const [tries,setTries] = useState(0);
  const [word1,setWord1] = useState('');
  const [word2,setWord2] = useState('');
  const [word3,setWord3] = useState('');
  const [word4,setWord4] = useState('');
  const [word5,setWord5] = useState('');
  const [win,setWin] = useState(false);
  const [lose,setLose] = useState(false);
  const [reset,setReset] = useState(false);
  const [wordNum,setWordNum] = useState(0);
  const word = ['hello','grail','click'];
  const board = useRef();
  useEffect(() => {
    if(word1 !== '' && rowTurn === 1){
        if(word1 === word[wordNum%3]){
            setWin(true)
            setRowTurn(6)
        }else{
            setRowTurn(rowTurn + 1);
            setTries(tries + 1)
        }
    }
    if(word2 !== '' && rowTurn === 2){
        if(word2 === word[wordNum%3]){
            setWin(true)
            setRowTurn(6)
        }else{
            setRowTurn(rowTurn + 1);
            setTries(tries + 1)
        }
    }
    if(word3 !== '' && rowTurn === 3){
        if(word3 === word[wordNum%3]){
            setWin(true)
            setRowTurn(6)
        }else{
            setRowTurn(rowTurn + 1);
            setTries(tries + 1)
        }
    }
    if(word4 !== '' && rowTurn === 4){
        if(word4 === word[wordNum%3]){
            setWin(true)
            setRowTurn(6)
        }else{
            setRowTurn(rowTurn + 1);
            setTries(tries + 1)
        }
    }
    if(word5 !== '' && rowTurn === 5){
        if(word5 === word[wordNum%3]){
            setWin(true)
            setRowTurn(5)
        }else{
            setRowTurn(rowTurn + 1);
            setTries(tries + 1)
        }
    }
  },[word1,word2,word3,word4,word5])
  useEffect(() => {
    if(tries === 5){
        setLose(true);
    }
  },[tries])
  const Reset = () => {
    setReset(true);
    setWin(false);
    setLose(false)
    setRowTurn(1);
    setTries(0);
    setWord1('');
    setWord2('');
    setWord3('');
    setWord4('');
    setWord5('');
    setWordNum(wordNum + 1);
  }
  return (
    <div onClick={() => setClick(!click)} ref={board} className='w-screen h-screen bg-white flex justify-center items-center gap-4 flex-col'>
        <Word click={click} word={word} rowNum={1} rowTurn={rowTurn} setRowTurn={setRowTurn} wordFin={word1} setWordFin={setWord1} reset={reset} setReset={setReset} wordNum={wordNum} />
        <Word click={click} word={word} rowNum={2} rowTurn={rowTurn} setRowTurn={setRowTurn} wordFin={word2} setWordFin={setWord2} reset={reset} setReset={setReset} wordNum={wordNum} />
        <Word click={click} word={word} rowNum={3} rowTurn={rowTurn} setRowTurn={setRowTurn} wordFin={word3} setWordFin={setWord3} reset={reset} setReset={setReset} wordNum={wordNum} />
        <Word click={click} word={word} rowNum={4} rowTurn={rowTurn} setRowTurn={setRowTurn} wordFin={word4} setWordFin={setWord4} reset={reset} setReset={setReset} wordNum={wordNum} />
        <Word click={click} word={word} rowNum={5} rowTurn={rowTurn} setRowTurn={setRowTurn} wordFin={word5} setWordFin={setWord5} reset={reset} setReset={setReset} wordNum={wordNum} />
        <div className={`w-full h-full bg-[rgba(0,0,0,0.5)] absolute z-10 ${win?'!flex':'hidden'} ${lose?'!flex':'hidden'} hidden justify-center items-center`}>
            <div className='w-2/4 h-[70%] bg-white rounded-xl py-8 flex items-center flex-col'>
                <p className='font-bold text-2xl'>
                    {win && 'You win!!'}
                    {lose && 'You Lost :('}
                </p>
                <p className='text-lg font-semibold mt-2'>
                    {win && `the word was: ${word}`}
                    {lose && `the word was too hard apparently`}
                </p>
                <p className='text-lg font-semibold mt-4'>
                    {win && `you found the correct word in ${tries} tries`}
                    {lose && `you couldn't find the correct word in ${tries} tries`}
                </p>
                <p className='text-lg font-semibold mt-8'>people usually get them in 5 tries</p>
                <p className='text-lg font-semibold mt-16'>
                    {win && 'you did so good :)'}
                    {lose && 'D:'}
                </p>
                <button onClick={() => Reset()} className='text-md font-semibold bg-secondary text-white px-5 py-2 rounded-xl mt-20 cursor-pointer'>Play again</button>
            </div>
        </div>
    </div>
  )
}

export default GameBoard