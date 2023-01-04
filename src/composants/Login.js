import article from '../images/article.svg'

const Login = () =>{
    return(
        <div className="wrapper">
            <div className="logo">
                <img src={article} alt="article" />
            </div>
            <div className="text-center mt-4 name">
                Dv-Article
            </div>
            <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="userName" id="userName" placeholder="Username" />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="text" name="password" id="pwd" placeholder="Password"  />
                </div>
                <button className="btn mt-3">Login</button>
            </form>
            <div className="text-center fs-6">
                {/* <a href="#">Forget password?</a> or <a href="#">Sign up</a> */}
            </div>
        </div>
    )
}

export default Login