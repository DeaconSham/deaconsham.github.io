import Header from './components/Header'
import Navigation from './components/Navigation'
import Background from './components/Background'
import Bio from './components/Bio'
import Experience from './components/Experience'
import Extracurricular from './components/Extracurricular'
import Projects from './components/Projects'
import Connect from './components/Connect'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Background />
            <Navigation />
            <div className="container">
                <Header />
                <Bio />
                <Experience />
                <Extracurricular />
                <Projects />
                <Connect />
                <Footer />
            </div>
        </>
    )
}

export default App