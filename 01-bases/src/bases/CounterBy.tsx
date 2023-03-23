import { useState } from 'react'

interface Props {
   initialValue?: number;
}

interface CounterState {
   counter: number;
   clicks: number;
}

// DESTRUCTURAMOS LAS PROPS Y DECIMOS QUE SON DE TIPO Props --> INTERFACE
export const CounterBy = ({ initialValue = 5 }: Props) => {

   // EN useState definimos un tipo de estado a base de una interface
   const [{ counter, clicks }, setState] = useState<CounterState>({
      counter: initialValue,
      clicks: 0,
   })

   const handleClick = (value: number) => {
      setState(({ clicks, counter }) => ({
         counter: counter + value,
         clicks: clicks + 1,
      }))
   }

   return (
      <>
         <h1>CounterBy:{counter}</h1>
         <h1>Clicks:{clicks}</h1>

         <button onClick={() => handleClick(1)}>+1</button>
         <button onClick={() => handleClick(5)}>+5</button>

      </>
   )
}
