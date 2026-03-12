import Header from './components/Header'
import Navigation from './components/Navigation'
import Background from './components/Background'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Activities from './components/Activities'
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
                <Activities />
                <Projects />
                <Skills />
                <Connect />
                <Footer />
            </div>
        </>
    )
}

export default App