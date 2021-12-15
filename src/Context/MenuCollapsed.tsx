import React, { createContext, useContext, useState } from 'react'

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

const CollapsedContext = createContext<CollapsedContextType | any>(true)

export default function CollapsedProvider({children}: CollapsedContextProviderProps){
    const [collapsed, setCollapsed] = useState<CollapsedDecide | boolean>(false)
    

    return(
        <CollapsedContext.Provider  value={{collapsed, setCollapsed}}>
            {children}
        </CollapsedContext.Provider>
    )
}

export function useCollapsed(){
    const context = useContext(CollapsedContext);
    const { collapsed, setCollapsed } = context
    return { collapsed, setCollapsed };
}