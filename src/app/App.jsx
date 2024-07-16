import { Suspense, lazy } from 'react';
import './App.css';
import { Loader, Header, Footer } from '@/components';
const LazyHeroSection = lazy(() => import('@components/HeroSection'));
const LazyHeroCard = lazy(() => import('@components/HeroCard'));
const LazyOverflowWrapper = lazy(() => import('@components/OverflowWrapper'));
const LazyIndexResults = lazy(() => import('@components/IndexResults'));
const LazyIndexPartners = lazy(() => import('@components/IndexPartners'));
const LazyIndexInnovating = lazy(() => import('@components/IndexInnovating'));
const LazyPageIndexCaption = lazy(() => import('@components/PageIndexCaption'));

function App() {
  return (
    <>
      {/* Render the header component */}
      <Header />

      {/* This div is used for styling purposes, to adjust the header spacing */}
      <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-1bakope-MuiToolbar-root-Header-contentContainer"></div>

      {/* Main content section */}
      <main id="main" className="css-xvkuif-Homepage-root">
        <div className="Content">
          <div className="PageIndex-content">
            <div className="PageIndex-wrapper NeedFixOnPopup">
              
              {/* Lazy-loaded components wrapped in Suspense with a fallback */}
              <Suspense fallback={<Loader />}>
                <LazyHeroSection />
                <LazyHeroCard />
                <LazyOverflowWrapper />
                <LazyIndexResults />
                <LazyIndexPartners />
                <LazyIndexInnovating />
                <LazyPageIndexCaption />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      {/* Render the footer component */}
      <Footer />
    </>
  )
}

export default App