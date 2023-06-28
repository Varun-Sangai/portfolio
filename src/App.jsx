import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Hero,Navbar,Works,StarsCanvas} from './components';
function App() {
  return (
    <BrowserRouter>
       <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
        <About></About>
        <Experience></Experience>
        <Works></Works>
        <div className="relative z-0">
          <Contact></Contact>
          <StarsCanvas></StarsCanvas>
        </div>
       </div>
    </BrowserRouter>  
  )
}

export default App
