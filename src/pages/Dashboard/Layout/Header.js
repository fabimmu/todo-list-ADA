import styles from './Header.module.css'
import { Link } from "react-router-dom";

const Header = () =>{
return(
    <header className={styles.titleBox}>
  <p className={"title has-text-white mx-6 my-2"}>To Do List App 📝</p>
  <div className="navbar-menu">
  <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
        <Link className="navbar-item has-text-white" to="/">Dashboard</Link>
        <Link className="navbar-item has-text-white" to="/tasks">Tasks Manager</Link>
        <Link className="navbar-item has-text-white" to="/sign-up">Registro</Link>
        <Link className="navbar-item has-text-white" to="/users">Users</Link>
        <Link className="navbar-item has-text-white" to="/add-users">Add User</Link>
        
        </div>
      </div>
    </div>
</div>
<div className="has-text-right mx-6">  <p className='button has-right-text is-info'>Log Out</p>

</div>
</header>
)
}
export {Header}