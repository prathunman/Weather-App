import React from 'react'

function Login() {
  return (
    <div>
      <div class="h-screen justify-center mx-16 md:ml-36 md:mr-0 md:flex">
        <div class="md:w-1/2 my-20">
            {/* <!-- Heading --> */}
            <div class="text-center md:text-left">
                <div class="flex justify-center md:justify-start">
                    <img src="" alt="logo"/>
                </div>
                <h1 class="text-4xl mt-8">Login here</h1>
            </div>
            <div class="mt-8 container flex">
                {/* <!-- form section --> */}
                <form action="" method="post" class="text-lg space-y-9" id="userform">
                    <div class="space-y-4">
                        <label class="block">First Name*</label>
                        <input type="text" placeholder="Please type your first name" class="text-sm outline-none border-b-2 w-96" id="fname" />
                    </div>
                    <div class="space-y-4">
                        <label class="block">Last Name*</label>
                        <input type="text" placeholder="Please type your last name" class="text-sm outline-none border-b-2 w-96" id="lname" />
                    </div>
                    <div class="space-y-4">
                        <label class="block">Email Address*</label>
                        <div>
                            <input type="text" placeholder="Please type your email address" class="outline-none text-sm border-b-2 w-96" id="email" />
                            <div class="text-xs text-right text-red-600" id="error"></div>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <label class="block">Address*</label>
                        <input type="text" placeholder="Please type your address" class="text-sm outline-none border-b-2 w-96" id="address" />
                        
                    </div>
                    
                    <div class="flex justify-center md:justify-start">
                        <button type="submit" class="bg-yellow-400 text-black text-base font-medium w-44 p-2 hover:bg-yellow-300 border-2 border-yellow-400 mt-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>

        {/* <!-- image  --> */}
        <div class="md:w-1/2">
            <img src="" class="justify-end mr-0"/>
        </div>
      </div>
           
    </div>
  )
}

export default Login