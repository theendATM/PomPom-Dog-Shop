import { Header,Footer } from "../components"

export function PageBase(props) {
    return (
        <div className="App">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}