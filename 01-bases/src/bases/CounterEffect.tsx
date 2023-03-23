import { useEffect, useState } from 'react'

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

   const [counter, setCounter] = useState(5)

   const handleClick = () => {
      counter >= MAXIMUN_COUNT ?
         console.log('%cSe llegó al valor máximo', 'color:red; background-color:black;') :
         setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT)) // No se aumentará el counter si es 10
   }

   // useEffect que se ejecuta cada vez que el estado "counter" cambia
   useEffect(() => {
      if (counter <= 10) return;

      console.log('%cSe llegó al valor máximo', 'color:red; background-color:black;')

   }, [counter])


   return (
      <>
         <h1>CounterEffect:{counter}</h1>

         <button onClick={handleClick}>
            +1
         </button>

      </>
   )
}
