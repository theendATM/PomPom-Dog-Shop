import { useSelector } from "react-redux"
import { Header, Footer } from "../components"
import AuthorizationLogIn from "../components/Authorization/AuthorizationLogIn"
import AuthorizationSignUp from "../components/Authorization/AuthorizationSignUp"

export function PageBase(props) {

    const isLogging=useSelector(s=>s.login)
    const isSigningUp=useSelector(s=>s.signup)    

    return (
        <div className="App">
            <AuthorizationLogIn visible={isLogging}/>
            <AuthorizationSignUp visible={isSigningUp}/>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}