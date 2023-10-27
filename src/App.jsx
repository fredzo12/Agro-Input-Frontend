import useSessionUser from "./hooks/useSessionUser"
import LoginRegisterIndex from "./pages/auth/LoginRegisterIndex"
import DashboardIndex from "./pages/dashboard/DashboardIndex"

const App = () => {

  const currentUser = useSessionUser()
  return (
    <>
      {currentUser == null && (
        <LoginRegisterIndex/>
      )}

      {currentUser != null &&(
        <DashboardIndex/>
      )}
    </>
  )
}

export default App