import './App.css'
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
