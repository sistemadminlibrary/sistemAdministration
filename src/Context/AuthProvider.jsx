import React, {useState} from 'react'

const CRMAuthContext = React.createContext();

const accessToken = {
  auth: false,
  token: "",
  user: ""
}

const AuthProvider = ({children}) => {
  const [auth,setAuth] = useState(accessToken)
  return (
      <CRMAuthContext.Provider value={{auth,setAuth}}>
            {children}
      </CRMAuthContext.Provider>
  )
}

export { CRMAuthContext,AuthProvider };
