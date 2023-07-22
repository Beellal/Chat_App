import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
const [isSignUp, setIsSignUp] = useState(true)


  return (
    <div className="Auth">

      {/* coté gauche */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Beellal</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* coté droite */}
      <div className="a-right">
      <form className="infoForm authForm">
        <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

        {isSignUp? 
        <div>
        <input
          type="text"
          placeholder="First Name"
          className="infoInput"
          name="firstname"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="infoInput"
          name="lastname"
        />
      </div>
      : ""
      }

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          {isSignUp ? 
          <input
          type="text"
          className="infoInput"
          name="confirmpass"
          placeholder="Confirm Password"
        />
        : ""
        }
        </div>

        <div>
            <span style={{fontSize: '12px', cursor:'pointer' }} onClick={() => setIsSignUp((prev)=>!prev)}>
             {isSignUp ?
            ' Already have an account. Login!' 
            : 'Don\'t have an account? Sign Up'}
            </span>

        </div>
        <button className="button infoButton" type="submit">
         {isSignUp ? 'Sign Up' : 'Log In'}
          
        </button>
      </form>
    </div>
    </div>
  );
};
// function LogIn() {
//     return (
//       <div className="a-right">
//         <form className="infoForm authForm">
//           <h3>Log In</h3>
  
//           <div>
//             <input
//               type="text"
//               placeholder="Username"
//               className="infoInput"
//               name="username"
//             />
//           </div>
  
//           <div>
//             <input
//               type="password"
//               className="infoInput"
//               placeholder="Password"
//               name="password"
//             />
//           </div>
  
//           <div>
//               <span style={{ fontSize: "12px" }}>
//                 Don't have an account Sign up
//               </span>
//             <button className="button infoButton">Login</button>
//           </div>
//         </form>
//       </div>
//     );
//   }


export default Auth;
