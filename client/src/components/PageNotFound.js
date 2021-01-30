import { Link } from 'react-router-dom'

const PageNotFound = () =>{
    return(
        <div>
            <h2>Not Found!</h2>
            <p>Redirecting to <Link to='/' >Login Page</Link> </p>   
        </div>
    )
}

export default PageNotFound;