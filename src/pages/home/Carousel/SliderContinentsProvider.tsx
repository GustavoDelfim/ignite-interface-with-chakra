import { createContext, ReactNode, useContext, useState } from "react";


interface SlideContinentsProviderProps {
  children: ReactNode
}

type SliderContextData = {
  index: number
  setIndex: (index: number) => void
}

const SliderContext = createContext({} as SliderContextData);

export function SlideContinentsProvider({children}: SlideContinentsProviderProps) {
  const [index, setIndex] = useState(0)
  
  function set (index: number) {
    setIndex(_ => index)
  }
  
  return (
    <SliderContext.Provider value={{ index, setIndex: set }}>
      {children}
    </SliderContext.Provider>
  )
}

export const useSliderContinents = () => useContext(SliderContext)