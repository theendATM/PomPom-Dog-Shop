import { Header,Footer } from "../components"
import { BurgerMenu } from "../components/BurgerMenu/BurgerMenu"

export function PageBase(props) {
    return (
        <div className="App">
            
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}