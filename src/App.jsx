import Header from './components/Header'
import Background from './components/Background'
import Bio from './components/Bio'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Connect from './components/Connect'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Background />
            <div className="container">
                <Header />
                <Bio />
                <Experience />
                <Projects />
                <Connect />
                <Footer />
            </div>
        </>
    )
}

export default App