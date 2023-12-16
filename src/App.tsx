import Header from "./ui/header/Header"
import About from "./ui/main/about/About"
import Presentation from "./ui/main/presentation/Presentation"
import Projects from "./ui/main/projects/Projects"

function App() {
    return <>
        <Header/>
        <main className="flex flex-col items-center">
            <Presentation/>
            <About/>
            <Projects/>
        </main>
    </>
}

export default App
