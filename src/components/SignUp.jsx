    import React, { useState } from 'react'
    const SignUp = () => {
    const [msg , setMsg] = useState("")
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("");
    let smallabc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let bigABC =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let specialCharacter  = ['@','#','$','%','&','!']

    function      signUP(e){
    e.preventDefault()
    let chr = password.split("");
    let smalletter = false;
    let bigletter = false;
    let specialletter = false
    chr.forEach( (char) => {
    if(smallabc.includes(char)){
        smalletter = true
    }  
    if(bigABC.includes(char)){
        bigletter = true
    }
    if(specialCharacter.includes(char)){
        specialletter = true
    }   
    }); 
    if(password.length < 8){
    setMsg("Password must be at least 8 characters")  
    return;
    }
    if(!smalletter){
        setMsg("Pleas add Small Chracter")  
    return;
    }
    if(!bigletter){
        setMsg("Pleas add Big Chracter")  
    return;
    }
    if(!specialletter){
        setMsg("Pleas add Special Chracter")  
    return;
    }
    if(confirm != password){
    setMsg("Confirm Passwords do not match! ")
    return;
    }
    localStorage.setItem(email,password)
    setMsg("Signup Successfully Done!")
    setName("")
    setEmail("")
    setPassword("")
    setConfirm("")
    }
    return (
    <>
    <div className="bg-black max-w-fit p-3 m-2 flex flex-col items-center place-self-center rounded-2xl">
        <h2  className='text-4xl font-bold font-mono text-amber-300'>Sign Up</h2>
        <p className="text-red-500">{msg}</p>
        <form onSubmit={signUP} className='' >
    <div className="flex flex-col p-2 mt-3 gap-0.5 px-10">
    <label htmlFor="fullName"  className='text-2xl font-bold text-amber-400'>Full Name</label>
    <input  value={name} onChange={(e)=> setName(e.target.value)} type="text"  className='border-2 p-2 rounded-2xl text-amber-200 bg-black' id='fullName'  placeholder='Pleas Enter Your Name' required />
    <label htmlFor="userEmail" className='text-2xl font-bold text-amber-400'>Email</label>
    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className='border-2 p-2 rounded-2xl  text-amber-200  bg-black' id='userEmail' placeholder='Pleas Enter Your Email' required/>
    <label htmlFor="password" className='text-2xl font-bold text-amber-400'>Password</label>
    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className='border-2 p-2 rounded-2xl  text-amber-200  bg-black' id="password"  placeholder='Pleas Creat Your Password' required/>
    <label htmlFor="cnfrmpassword" className='text-2xl font-bold text-amber-400'>Confirm Password</label>
    <input type="password" value={confirm} onChange={(e)=> setConfirm(e.target.value)} className='border-2 p-2 rounded-2xl  text-amber-200  bg-black' id="cnfrmpassword"  placeholder='Again Enter Password'   required/>
    <div className="submit text-center m-3">
    <input type="submit"  className="btn border-2 w-fit bg-black text-amber-200 p-2 rounded-2xl font-medium cursor-pointer" />

    </div>
    </div>


        </form>
    </div>




    </>      
    )
    }

export default SignUp
export const Login = () =>{
    const [lgnemail , setLgnemail] = useState("");
    const [lgnpassword , setLgnpassword] = useState("");
function login(e){
    e.preventDefault();
    console.log(lgnemail,lgnpassword)
     let email =  localStorage.getItem(email)
     let password =  localStorage.getItem(password);
    console.log(email,password)

}
    return(
<>
<div className="login bg-black max-w-fit p-3 m-2 flex flex-col items-center place-self-center rounded-2xl">
    <h2 className='text-4xl font-bold font-mono text-amber-300'>Login</h2>
    <form onSubmit={login}>
        <div className="flex flex-col p-2 mt-3 gap-0.5 px-10 ">
 <label htmlFor="lgnuserEmail" className='text-2xl font-bold text-amber-400'>Email</label>
    <input value={lgnemail} onChange={(e)=>{setLgnemail(e.target.value)}}  type="email" className='border-2 p-2 rounded-2xl  text-amber-200  bg-black' id='lgnuserEmail' placeholder='Pleas Enter Your Email' required/>
 <label htmlFor="lgnpassword" className='text-2xl font-bold text-amber-400'>Password</label>
    <input value={lgnpassword} onChange={(e)=>{setLgnpassword(e.target.value)}}  type="password" className='border-2 p-2 rounded-2xl  text-amber-200  bg-black' id="lgnpassword"  placeholder='Pleas Creat Your Password' required/>
        </div>
    <div className="submit text-center m-3">
    <input type="submit"  className="btn border-2 w-fit bg-black text-amber-200 p-2 rounded-2xl font-medium cursor-pointer" />

    </div>

        </form>

</div>

</>
    )
}
