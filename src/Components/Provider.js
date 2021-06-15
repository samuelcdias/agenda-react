import { createContext, useState } from 'react'

export const IDContext = createContext({})

export default function IDProvider({ children }) {
  const [idContact, setIdContact] = useState('')
  const [updateTable, setUpdateTable] = useState(false)
  return (
    <div>
      <IDContext.Provider
        value={{
          idContact,
          setIdContact,
          updateTable,
          setUpdateTable,
        }}
      >
        {children}
      </IDContext.Provider>
    </div>
  )
}
