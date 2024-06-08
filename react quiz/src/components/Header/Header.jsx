import "./Header.css"
import { Link } from "react-router-dom"
const Header = () => {
    return(
        <div className='header'>
            <Link to="/" classname="title">Intuitive Quiz Hub</Link>
            <hr className="divider"></hr>
        </div>
    )
}
export default Header