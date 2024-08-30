import { ToastContainer } from "react-toastify";


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home,HomeLayout,Login,Signup,Account } from './pages'
import { AuthProvider } from './context/Authcontext'
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
const router = createBrowserRouter([
  {path:'/' ,element:  <ProtectedRoute><HomeLayout/></ProtectedRoute> ,children:[
      {index:true ,element:<Home/>},
    
      {path:'/account',element:<Account/>},
  ]},
  {path:'/login',element:<Login/>},
  {path:'/signup',element:<Signup/>},
])

  return (
  <>
  <AuthProvider>
  <RouterProvider router={router}/>
  <ToastContainer position="top-center" />
  </AuthProvider>
      
  </>
  )
}

export default App
