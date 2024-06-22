import React from 'react'

const Login = () => {
  return (
    <div className='flex flrex-col item-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Login <span className='text-blue-500'>ChatApp</span>
        </h1>
        <form>
            <div>
                <label className='label'>
                    <span className='text-base lebel-text'>Username</span>
                </label>
                <input type="text" placeholder='Username' className='w-full input input-bordered h-10'/>
            </div>
            <div>
                <label className='label'>
                    <span className='text-base lebel-text'>Password</span>
                </label>
                <input type="password" placeholder='Password' className='w-full input input-bordered h-10'/>
            </div>
            <div>
                <button className="btn btn-block btn-sm h-10 mt-5">Login</button>
            </div>
            <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 block text-center'>
                "Don't" have an account? 
            </a>
        </form>
      </div>
    </div>
  )
}

export default Login
