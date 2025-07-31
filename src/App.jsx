import About from './sections/About'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
    </div>
  )
}

export default App
