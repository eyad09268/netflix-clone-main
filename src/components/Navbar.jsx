import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/Authcontext";
import { toast } from "react-toastify";

export default function Navbar() {
  const navigate = useNavigate()
  const {user,Logout} = useAuthContext()
  const handlelogout = async() => {
    try {
      await Logout()
      navigate('/login')

    }catch (err) {
      console.log(err)
      toast.error(err)
    }
  }
  
  return (
    <div className="flex items-center justify-between absolute w-full p-6 z-[100]">
      <Link className=" cursor-pointer" to={'/'}>
    
      <h1 className=" text-red-600 text-4xl font-bold cursor-pointer">Netflix</h1>
      </Link>

      {user ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button
            onClick={handlelogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}