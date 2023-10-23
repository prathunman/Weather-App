import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Register() {

    const [username, setUsername] = useState("");
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const validate = (values) => {
        const errors = {};
        let isproceed = true;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!username) {
          errors.username = "Username is required!";
          isproceed = false;
        }
        if (!id) {
          errors.id = "email is required!";
        } else if (!regex.test(id)) {
          errors.id = "This is not a valid email format!";
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

    const handleSubmit = (e)=>{
        e.preventDefault();
        let registerObject = { id,username,password };
        if(validate()){
            fetch("http://localhost:8000/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(registerObject)
            })
            .then(() => {
                navigate('/login');
            }).catch((err) => {
                console.log(err);
            });
        }
        
    }

  return (
    <div>
        <div className="h-screen justify-center mx-16 md:ml-36 md:mr-0 md:flex">
            <div className="md:w-1/2">
                {/* <!-- Heading --> */}
                <div className="text-center md:text-left">
                    <h1 className="text-2xl mt-16">Register here</h1>
                </div>
                <div className="mt-16">
                    {/* <!-- form section --> */}
                    <form action="" method="post" className="text-lg space-y-6 md:text-left" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <label className="block">User Name*</label>
                            <input type="text" 
                            placeholder="Please type your first name" 
                            className="text-sm outline-none border-b-2 w-96"
                            onChange={(e)=>
                                setUsername(e.target.value)
                            }
                            value={username} />
                            <p className='flex justify-start top-0 space-y-0 mt-4 text-xs text-red-600'>{error.username}</p>
                        </div>
                        <div className="space-y-4">
                            <label className="block">Email Address*</label>
                            <div>
                                <input type="text" 
                                placeholder="Please type your id address" 
                                className="outline-none text-sm border-b-2 w-96" 
                                onChange={(e)=>
                                    setID(e.target.value)
                                }
                                value={id}
                                />
                                <p className='flex justify-start top-0 space-y-0 mt-4 text-xs text-red-600'>{error.id}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="block">Password*</label>
                            <input type="password" 
                            placeholder="Please type your address" 
                            className="text-sm outline-none border-b-2 w-96" 
                            onChange={(e)=>
                                setPassword(e.target.value)
                            } 
                            value={password}/>
                            <p className='flex justify-start top-0 space-y-0 mt-4 text-xs text-red-600'>{error.password}</p>
                            
                        </div>
                        
                        <div className="flex justify-center md:justify-start">
                            <button type="submit" className="bg-yellow-400 text-black text-base font-medium w-44 p-2 hover:bg-yellow-300 border-2 border-yellow-400 mt-2">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* <!-- image  --> */}
            <div className="md:w-1/2 flex items-center p-10 md:mr-16">
                <img src="resources/register.jpg" alt='register_image' className="mt-8 md:mt-16 "/>
            </div>
        </div>
    </div>
  )
}
export default Register