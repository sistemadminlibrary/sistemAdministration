import React,{useState} from 'react'

const CRMKey = React.createContext();

const StateKey = ({children}) => {

  const [statusKey, getKey] = useState(1);


  return (
    <CRMKey.Provider value={{ statusKey,getKey}}>
      {children}
    </CRMKey.Provider>
  )
}

export { CRMKey,StateKey }
