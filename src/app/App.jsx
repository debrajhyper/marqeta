import Header from '../components/Header/Header'
import HeroCard from '../components/HeroCard/HeroCard'
import HeroSection from '../components/HeroSection/HeroSection'
import IndexResults from '../components/IndexResults/IndexResults'
import OverflowWrapper from '../components/OverflowWrapper/OverflowWrapper'
import './App.css'

function App() {
  return (
    <div id="__next">
      <a href="#main" className="visible-hidden">Skip to main content</a>
      <Header />
      <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-1bakope-MuiToolbar-root-Header-contentContainer"></div>
      <main id="main" className="css-xvkuif-Homepage-root">
        <div className="Content">
          <div className="PageIndex-content">
            <div className="PageIndex-wrapper NeedFixOnPopup">
              <HeroSection/>
              <HeroCard/>
              <OverflowWrapper/>
              <IndexResults/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
