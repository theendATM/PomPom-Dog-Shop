import { Header,Footer } from "../components"
import { BurgerMenu } from "../components/BurgerMenu/BurgerMenu"

export function PageBase(props) {
    return (
        <div className="App">
            <BurgerMenu open={false}></BurgerMenu>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}