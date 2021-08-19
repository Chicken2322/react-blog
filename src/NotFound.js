import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page does not exists.</p>
            <br></br>
            <Link to='/'>Bact to the HomePage</Link>
        </div>
     );
}
 
export default NotFound;