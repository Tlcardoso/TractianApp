import React, { createContext, useState } from 'react'

type CollapsedContextProviderProps={
    children: React.ReactNode,
}

type CollapsedDecide={
    open: boolean,
}

type CollapsedContextType={
    collapsed: CollapsedDecide | null,
    setCollapsed: React.Dispatch<React.SetStateAction<CollapsedDecide | null>>
}

export const CollapsedContext = createContext<CollapsedContextType | null>(null)

export default function CollapsedProvider({children}: CollapsedContextProviderProps){
    const [collapsed, setCollapsed] = useState<CollapsedDecide | null>(null)
    

    return(
        <CollapsedContext.Provider  value={{collapsed, setCollapsed}}>
            {children}
        </CollapsedContext.Provider>
    )
}