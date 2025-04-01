import { ReactNode } from "react"

const ProtectedRoute = ({children}: {children: ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute