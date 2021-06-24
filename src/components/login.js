import React from 'react';
import sample from './gurabg.mp4';
const Login = (props)=>{

    const{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    }=props;

    return(
        <section className="login">
            <div className="bgvideo">
                <video className='videoTag' autoPlay loop preload
                style={{
                    position:"absolute",
                    width:"100%",
                    top:"50%",
                    left:"50%",
                    hight:"100%",
                    objectFit:"cover",
                    transform:"translate(-50%, -50%)",
                    zIndex:"-1",
                }}
                >
                    <source src={sample} type='video/mp4' />
                </video>    
            </div>
            <div className="loginContainer">
                <label>Username</label>
                <input 
                    type="text" 
                    autoFocus 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>password</label>
                <input 
                    type="password" 
                    required value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ?(
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>
                            Don't have an account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                        </p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>
                            Have an account ?
                            <span onClick={() =>setHasAccount(!hasAccount)}>Sign in</span>
                        </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
export default Login;