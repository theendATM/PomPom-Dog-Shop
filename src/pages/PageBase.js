import { useSelector } from "react-redux"
import { Header, Footer } from "../components"
import AuthorizationLogIn from "../components/Authorization/AuthorizationLogIn"

export function PageBase(props) {

    const isLogging = useSelector(s => s.login)
    const isSigningUp = useSelector(s => s.signup)

    return (
        <div className="App">
            <AuthorizationLogIn visible={isLogging} />
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}