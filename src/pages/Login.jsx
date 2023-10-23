import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validate())
        {
            fetch("http://localhost:8000/user/" + email).then((res) => {
                return res.json();
            })
            .then((res) => {
                if (Object.keys(res).length === 0) {
                    setError('Please Enter valid username');
                } else {
                    if (res.password === password) {
                        sessionStorage.setItem('email',email);
                        sessionStorage.setItem('userrole',res.role);
                        navigate('/home')
                    }else{
                        alert('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    useEffect(()=>{
        sessionStorage.clear();
    },[]);
        
    const validate = () => {
        const errors = {};
        let isproceed = true;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!email) {
          errors.email = "Email is required!";
        } else if (!regex.test(email)) {
          errors.email = "This is not a valid email format!";
          isproceed = false;
        }
        if (!password) {
          errors.password = "Password is required";
        } else if (password.length < 4) {
          errors.password = "Password must be more than 4 characters";
          isproceed = false;
        }
        setError(errors);
        return isproceed;
    };

  return (
    <div>
      <div className="h-screen justify-center mx-16 md:ml-36 md:mr-0 md:flex">
        <div className="md:w-1/2 mt-16">
            {/* <!-- Heading --> */}
            <div className="text-center md:text-left">
                <h1 className="text-3xl font-semibold transition-shadow shadow-slate-100 mt-8">Login here</h1>
            </div>
            <div className="mt-16 flex items-center md:text-left">
                {/* <!-- form section --> */}
                <form action="" method="post" className="text-lg space-y-9" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <label className="block">Email Address*</label>
                        <div>
                            <input type="text" 
                            placeholder="Please type your email address" 
                            className="outline-none text-sm border-b-2 w-96"
                            onChange={(e)=> setEmail(e.target.value)}
                            value={email} />
                            <p className='flex justify-start top-0 space-y-0 mt-4 text-xs text-red-600'>{error.email}</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="block">Password*</label>
                        <input type="password" placeholder="Please type your address" className="text-sm outline-none border-b-2 w-96" onChange={(e)=> setPassword(e.target.value)}
                        value={password} />
                        <p className='flex justify-start top-0 space-y-0 mt-4 text-xs text-red-600'>{error.password}</p>
                        
                    </div>
                    
                    <div className="flex justify-center md:justify-start space-x-6">
                        <button type="submit" className="bg-yellow-400 text-black text-base font-medium w-44 p-2 hover:bg-yellow-300 border-2 border-yellow-400 mt-2">Login</button>
                        <Link to='/register' className='flex items-center underline text-blue-700 hover:text-blue-500'> Register </Link>
                    </div>
                </form>
            </div>
        </div>

        {/* <!-- image  --> */}
        <div className="md:w-1/2 flex items-center justify-center">
            <img src="resources/login.jpg" className="mr-0 mt-16 md:mt-0"/>
        </div>
      </div>
           
    </div>
  )
}

export default Login