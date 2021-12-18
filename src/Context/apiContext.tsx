import React, { createContext, useContext, useEffect, useState } from 'react'
import companiesServices from '../Services/CompaniesServices'
import unitsServices from '../Services/UnitsServices'
import usersServices from '../Services/UsersServices'

type ApiContextProviderProps={
    children: React.ReactNode,
}

type ApiItems={
    open: boolean,
}

type CollapsedContextType={
    collapsed: ApiItems | null,
    setCollapsed: React.Dispatch<React.SetStateAction<ApiItems | null>>
}

const ApiContext = createContext<CollapsedContextType | any>(true)

export default function ApiProvider({children}: ApiContextProviderProps){
    const [id, setId] = useState<ApiItems | any>(null)
    const [unitId, setUnitId] = useState<ApiItems |any>(null)
    const [oneCompanie, setOneCompanie] = useState<any[]>()
    const [companies, setCompanies] = useState<any[]>()
    const [units, setUnits] = useState<any[]>()
    const [oneUnits, setOneUnits] = useState <any[]>()
    const [users, setUsers] = useState<any[]>()

    useEffect(() => {
        const {getCompanies, getOneCompanie} = companiesServices
        const {getUnits, getOneUnit} = unitsServices
        const {getUsers} = usersServices

        getUsers().then(({data}) => {
            setUsers(data);
        })

        getUnits().then(({data}) => {
            setUnits(data);
        })

        getOneUnit(unitId).then(({data}) => {
            setOneUnits(data);
        })

        getCompanies().then(({data}) => {
            setCompanies(data);
        })

        getOneCompanie(id).then(({data}) => {
            setOneCompanie(data);
        })
        
    },[id])

    return(
        <ApiContext.Provider  value={{
            id, 
            setId, 
            oneCompanie, 
            companies, 
            setCompanies, 
            units,
            users,
            setUnitId,
            oneUnits
            }}>
            {children}
        </ApiContext.Provider>
    )
}

export function useApi(){
    const context = useContext(ApiContext);
    const { id, setId, oneCompanie, companies, units, users, setUnitId, oneUnits } = context
    return { id, setId, oneCompanie, companies, units, users, setUnitId, oneUnits };
}