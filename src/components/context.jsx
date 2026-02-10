import { createContext, useContext, useState } from 'react'

const Hero = createContext(null)
export default function Context({ children }) {
    const [heroHeight, setHeroHeight] = useState("full")
    return (
        <div>
            <Hero.Provider value={{heroHeight, setHeroHeight}}> 
                {children}
            </Hero.Provider>
        </div>
    )
}

export const useHero = () => useContext(Hero)
