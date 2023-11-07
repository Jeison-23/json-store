
import { Session } from "@/graphql/session";
import { useLazyQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext()

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useState('')
  const [session, setSession] = useState({});
  const [getSession, { data, loading, error }] = useLazyQuery(Session)

  useEffect(() => {
    if (token) {
      getSession({
        variables: { filter: { _id: token } },
        fetchPolicy: 'cache-and-network'
      })
    }
  }, [token])

  useEffect(() => {
    const localToken = JSON.parse(localStorage.getItem('session-token'))
    if (localToken) {
      setToken(localToken)
    }
  }, [])

  useEffect(() => {
    if (data?.session) {
      setSession(data.session[0])
    }
  }, [data])

  useEffect(() => {
    if (session?._id) {
      console.log(session)
    }
  }, [session])

  return (
    <SessionContext.Provider
      value={{
        session,
        loading: loading,
        phone: session?.phone,
        id: session?.id || null,
        avatar: session?.image || null,
        fullName: session?.firstName && `${session.firstName.toLowerCase()} ${session.lastName.toLowerCase()}`,
        newToken: setToken,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export default SessionContextProvider