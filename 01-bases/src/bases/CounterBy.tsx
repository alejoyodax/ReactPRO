import { click } from '@testing-library/user-event/dist/click'
import { useState } from 'react'

interface Props {
   initialValue?: number
}

export const CounterBy = ({ initialValue = 5 }: Props) => {

   const [state, setState] = useState({
      counter: initialValue,
      clicks: 0,
   })

   const { clicks, counter } = state;

   const handleClick = (value: number) => {
      setState(prev => ({
         counter: prev.counter + value,
         clicks: prev.clicks + 1,
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
