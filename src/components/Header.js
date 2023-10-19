import { Link } from "react-router-dom";

const Header = () => {
  
      return (
        <div className="header">
          <div className="logo-container">
          </div>
  
          <div className="nav-items">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/chat">Chat Room</Link></li>
              <li><Link to="/kanban">Board</Link></li>
              
            
            </ul>
          </div>
        </div>
      );
    };
  
    export default Header;