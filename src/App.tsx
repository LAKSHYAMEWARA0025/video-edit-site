// import Body from "./Components/Body/body"
import LongFormSection from "./Components/Body/LongForm"
import ShortFormSection from "./Components/Body/ShortForm"
import Questions from "./Components/Body2/questions"
import Creators from "./Components/Creators/Creators"
import Footer from "./Components/Footer/footer"
import Header from "./Components/Header/header"
import Hero from "./Components/Hero/hero"
import OwnerInfo from "./Components/OwnerInfo/OwnerInfo"
import SecretSauce from "./Components/SecretSauce/SecretSauce"
import Testimonials from "./Components/Testimonials/Testimonials"
import TrustedBy from "./Components/TrustedBy/trustedBy"

function App() {
 

  return (
    <>
      <Header/>
      <Hero/>
      <TrustedBy/>
      <SecretSauce/>
      <ShortFormSection/>
      <LongFormSection/>
      {/* <Body/> */}
      <OwnerInfo/>
      <Creators/>
      <Testimonials/>
      <Questions/>
      <Footer/>
    </>
  )
}

export default App
