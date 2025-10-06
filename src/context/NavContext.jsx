import React, { createContext, useState } from 'react'
export const NavbarContext = createContext()
const NavContext = ({ children }) => {

    const NavContext = createContext()
    const [navOpen, setNavOpen] = useState(false)
    return (
        <div>
            <NavbarContext.Provider value={[navOpen, setNavOpen]}>
                {children}
            </NavbarContext.Provider>
        </div>
    )
}

export default NavContext