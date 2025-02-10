import './App.css'
import ClientsTalking from './Pages/ClientsTalking'
import HowItWorks from './Pages/HowItWorks'
import KitchenQuoteForm from './Pages/KitchenQuoteForm'
import KitchenCarousel from './Pages/KitechenCarousel'
import LastBanner from './Pages/LastBanner'
import Navbar from './Pages/Navbar'
import NumberCountSection from './Pages/NumberCountSection'
import OfferSection from './Pages/OfferSection'
import PartnersAndMore from './Pages/PartnersAndMore'
import ReasonSection from './Pages/ReasonSection'
import TestesToBeBest from './Pages/TestesToBeBest'
import VideoSection from './Pages/VideoSection'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

function App() {

  return (
    <>
      <div className="fixed top-[50%] z-50 right-0  bg-green-500  text-white rounded-md shadow-lg">
        <a href="https://wa.me/+919953828816" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3">
          {/* Replace with WhatsApp Icon */}
          <WhatsAppIcon />
        </a>
      </div>
      <div className="fixed bottom-0 z-50 md:hidden  bg-black w-full  text-white rounded-md shadow-lg">
        <a 
          href="tel:+919953828816"

          target="_blank" rel="noopener noreferrer" className="flex  gap-2 items-center justify-center p-3">

          <CallIcon />
          CALL NOW
        </a>
      </div>

      <Navbar />
      <KitchenQuoteForm />
      <ReasonSection />
      <NumberCountSection />
      <VideoSection />
      <OfferSection />
      <PartnersAndMore />
      <TestesToBeBest />
      <HowItWorks />
      <KitchenCarousel />
      <ClientsTalking />
      <LastBanner />




    </>
  )
}

export default App
