import './App.css';
import { Header, HeroSection, HeroCard, IndexResults, OverflowWrapper, IndexPartners, IndexInnovating, PageIndexCaption, Footer } from '@/components';

function App() {
  return (
    <>
      <Header />
      <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-1bakope-MuiToolbar-root-Header-contentContainer"></div>
      <main id="main" className="css-xvkuif-Homepage-root">
        <div className="Content">
          <div className="PageIndex-content">
            <div className="PageIndex-wrapper NeedFixOnPopup">
              <HeroSection />
              <HeroCard />
              <OverflowWrapper />
              <IndexResults />
              <IndexPartners />
              <IndexInnovating />
              <PageIndexCaption />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App