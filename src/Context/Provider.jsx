import React, {useState} from 'react'

const CRMContext = React.createContext();


const Provider = ({children}) => {

  const [status,verifyStatus] = useState(true);

  return (
    <CRMContext.Provider value={{status,verifyStatus}}>
      {children}
    </CRMContext.Provider>
  )
}

export {Provider,CRMContext}
