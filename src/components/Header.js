import { Link } from "react-router-dom";

const Header = () => {
    // const[logbtn, setlogbtn]=useState("Login");
    // const onlineStatus = useOnlineStatus();
  
      return (
        <div className="header">
          <div className="logo-container">
            {/* <img className="logo" src={LOGO_URL} alt="logo" /> */}
          </div>
  
          <div className="nav-items">
            <ul>
              {/* <li>Online Status:{onlineStatus?"🟢":"🔴"}</li> */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/chat">Chat Room</Link></li>
              <li><Link to="/kanban">Board</Link></li>
              
              {/* <li
                className="login-btn"
                onClick={()=>{
                  logbtn === "Login"
                    ? setlogbtn("LogOut")
                    : setlogbtn("Login")
                }}
              > */}
                {/* {logbtn} */}
              {/* </li> */}
            </ul>
          </div>
        </div>
      );
    };
  
    export default Header;