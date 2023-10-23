import React, { useEffect, useState } from 'react'

function Login() {
    const initialState = {
        username:"",
        email:"",
        password:""
    }
    const [formValues, setFormValues] = useState()
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit]= useState(false)

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues,[name]:value});
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors();
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };
  return (
    <div>
    {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Signed in successfully</div>
      ) : (
        console.log("Email & Password are not valid")
      )} */}
      <div className="h-screen justify-center mx-16 md:ml-36 md:mr-0 md:flex">
        <div className="md:w-1/2">
            {/* <!-- Heading --> */}
            <div className="text-center md:text-left">
                <h1 className="text-4xl mt-8">Login here</h1>
            </div>
            <div className="mt-8 flex text-left">
                {/* <!-- form section --> */}
                <form action="" method="post" className="text-lg space-y-9" >
                    <div className="space-y-4">
                        <label className="block">First Name*</label>
                        <input type="text" 
                        placeholder="Please type your first name" 
                        className="text-sm outline-none border-b-2 w-96" 
                        value={formValues.username}
                        onChange={handleChange} />
                        <p className='flex justify-start top-0 space-y-0 mt-4 text-xs text-red-600'>{formErrors.username}</p>
                    </div>
                    
                    
                    <div className="space-y-4">
                        <label className="block">Email Address*</label>
                        <div>
                            <input type="text" 
                            placeholder="Please type your email address" 
                            className="outline-none text-sm border-b-2 w-96" 
                            value={formValues.email}
                            onChange={handleChange} />
                            <div className="text-xs text-right text-red-600" id="error"></div>
                            <p className='flex justify-start top-0 space-y-0 mt-4 text-xs text-red-600'>{formErrors.email}</p>
                        </div>
                        
                    </div>
                    <div className="space-y-4">
                        <label className="block">Password*</label>
                        <input type="password" 
                        placeholder="Please type your password" 
                        className="text-sm outline-none border-b-2 w-96" 
                        value={formValues.password}
                        onChange={handleChange} />
                        <p className='flex justify-start top-0 space-y-0 mt-4 text-xs text-red-600'>{formErrors.password}</p>
                    </div>
                   
                    
                    <div className="flex justify-center md:justify-start">
                        <button type="submit" 
                        className="bg-yellow-400 text-black text-base font-medium w-44 p-2 hover:bg-yellow-300 border-2 border-yellow-400 mt-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>

        {/* <!-- image  --> */}
        <div className="md:w-1/2 flex justify-center items-center">
            <img src="resources/login.jpg" className="mr-0"/>
        </div>
      </div>
           
    </div>
  )
}

export default Login