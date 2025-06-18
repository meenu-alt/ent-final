import "./App.css";
import ScrollToTop from "./MyComponents/ScrollToTop.js";
import TrailingSlashRedirect from "./TrailingSlashRedirect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./MyComponents/Header.js"; 
import Footer from "./MyComponents/Footer.js";
import Home from "./MyComponents/home/Index.js";
import AboutDoctor from "./MyComponents/about/about-the-doctor/index.js"
import AboutClinic from "./MyComponents/about/about-clinic/index.js"
import VIdeos from "./MyComponents/videos/index.js"
import ContactUs from "./MyComponents/contact-us/index.js"
import EntSurgery from "./MyComponents/services/ent-surgery/index.js" 
import VertigoTreatment from "./MyComponents/services/ear/vertigo-treatment/index.js"
import VertigoClinic from "./MyComponents/services/ear/vertigo-clinic/index.js"
import Audiology from "./MyComponents/services/ear/audiology/index.js"
import DeafnessManagement from "./MyComponents/services/ear/deafness-management/index.js"
import Myringoplasty from "./MyComponents/services/ear/myringoplasty/index.js"
import OtitisExterna from "./MyComponents/services/ear/otitis-externa/index.js"
import HearingLoss from "./MyComponents/services/ear/hearing-loss/index.js"
import StapesSurgery from "./MyComponents/services/ear/stapes-surgery/index.js"
import MyringotomyWithGrommet from "./MyComponents/services/ear/myringotomy-with-grommet/index.js"
import Myringotomy from "./MyComponents/services/ear/myringotomy-with-grommet/index.js"
import HearingAids from "./MyComponents/services/ear/hearing-aids/index.js"
import Endoscopy from "./MyComponents/services/nose/endoscopy/index.js"
import FunctionalEndoscopicSinusSurgery from "./MyComponents/services/nose/functional-endoscopic-sinus-surgery/index.js"
import FESS from "./MyComponents/services/nose/functional-endoscopic-sinus-surgery/index.js"
import Septoplasty from "./MyComponents/services/nose/septoplasty/index.js"
import NasalPolypRemoval from "./MyComponents/services/nose/nasal-polyp-removal/index.js"
import NasalPolyp from "./MyComponents/services/nose/nasal-polyp-removal/index.js"
import Turbinoplasty from "./MyComponents/services/nose/turbinoplasty/index.js"
import Turbinectomy from "./MyComponents/services/Turbinectomy/index.js"
import RepairofCSFRhinorrhoea from "./MyComponents/services/nose/repair-of-csf-rhinorrhoea/index.js"
import Epistaxis from "./MyComponents/services/nose/epistaxis/index.js"
import PalatalInjectionforSnoring from "./MyComponents/services/nose/palatal-injection-for-snoring/index.js"
import SpeechTherapy from "./MyComponents/services/throat/speech-therapy/index.js"
import Tonsils from "./MyComponents/services/throat/tonsils/index.js"
import VocalCordSurgery from "./MyComponents/services/throat/vocal-cord-surgery/index.js"
import Tonsillectomy from "./MyComponents/services/throat/tonsillectomy/index.js"
import MouthUlcers from "./MyComponents/services/throat/mouth-ulcers/index.js"
import AdenoidSurgerywithTube from "./MyComponents/services/throat/adenoid-surgery-with-tube/index.js"
import FacialAesthetics from "./MyComponents/services/aesthetics/facial-aesthetics/index.js"
import HairRestoration from "./MyComponents/services/aesthetics/hair-restoration/index.js"
import Larygnoscopy from "./MyComponents/services/endoscopy/laryngoscopy/index.js"
import Microlaryngoscopy from "./MyComponents/services/endoscopy/microlaryngoscopy/index.js";
import SearchPage from "./MyComponents/SearchPage.js";
import Appointment from "./MyComponents/appointment/index.js";
import Adenoidectomy from "./MyComponents/services/ent-surgery/adenoid-surgery/index.js"
import SnoringSleepApneaSurgery from "./MyComponents/services/ent-surgery/snoring-sleep-apnea-surgery/index.js"
import Mastoidectomy from "./MyComponents/services/ent-surgery/mastoidectomy/index.js"
import MastoidectomySergery from "./MyComponents/services/ent-surgery/mastoidectomy-surgery/index.js"
import MLS from "./MyComponents/services/ent-surgery/microlaryngeal-surgery-mls/index.js"
import RemovalOfNeckSwelling from "./MyComponents/services/ent-surgery/neck-swelling-surgery/index.js"
import InsuranceAndTpa from "./MyComponents/services/insurance-partners-and-tpa/index.js"
import TinnitusManagement from "./MyComponents/services/tinnitus-care-and-audiological-management/index.js"
import SensorineuralDeafness from "./MyComponents/services/sensorineural-hearing-loss/index.js"
import MicrolaryngealSurgery from "./MyComponents/services/microlaryngeal-surgery/index.js"
import ExpertAdvice from "./MyComponents/services/ent-doctor-delhi/index.js"
import EarClinicDelhi from "./MyComponents/services/ear-clinic-delhi/index.js"
import NoseSurgeryCost from "./MyComponents/services/nose-surgery-cost-delhi/index.js"
import EarDoctorDelhi from "./MyComponents/services/ear-doctor-delhi/index.js"
import IntratympanicInjection from "./MyComponents/services/intratympanic-steroid-injection/index.js"
import ThroatDoctorDelhi from "./MyComponents/services/throat-doctor-delhi/index.js"
import PediatricENT from "./MyComponents/services/pediatric-ent-delhi/index.js"
import MainFaq from "./MyComponents/complementrypages/faq/index.js"
import Thanks from "./MyComponents/complementrypages/thankyou/index.js"
import ServicesMain from "./MyComponents/services/services-main/index.js"
import AllBlogs from "./MyComponents/blog/index.js"
import Post from "./MyComponents/Posts/index.js";
import PrivacyPolicy from "./MyComponents/complementrypages/privacypolicy/index.js";
import PrivacTermsConditions from "./MyComponents/complementrypages/termsconditions/index.js";
import Blog from "./MyComponents/blog/Blog.js"
import EndoscopicDCR from "./MyComponents/services/nose/Endoscopic-DCR/index.js"
import Tympanoplasty from "./MyComponents/services/ear/tympanoplasty/index.js"


function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop/>
      <TrailingSlashRedirect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-the-doctor/" element={<AboutDoctor />} />
        <Route path="/about-clinic/" element={<AboutClinic />} />
        <Route path="/videos/" element={<VIdeos />} />
        <Route path="/contact-us/" element={<ContactUs />} />
        <Route path="/ent-surgery/" element={<EntSurgery />} />
        <Route path="/Vertigo-Clinic/" element={<VertigoClinic />} />
        <Route path="/vertigo-treatment/"  element={<VertigoTreatment />}  />
        <Route path="/audiology/" element={<Audiology />} />
        <Route path="/deafness-management/" element={<DeafnessManagement />} />
        <Route path="/myringoplasty/" element={<Myringoplasty />} />
        <Route path="/otitis-externa/" element={<OtitisExterna />} />
        <Route path="/hearing-loss/" element={<HearingLoss />} />
        <Route path="/stapes-surgery/" element={<StapesSurgery />} />
        <Route path="/myringotomy-with-grommet/" element={<MyringotomyWithGrommet />} />
        <Route path="/myringotomy/" element={<Myringotomy />} />
        <Route path="/hearing-aids/" element={<HearingAids />} />
        <Route path="/endoscopy/" element={<Endoscopy />} />
        <Route path="/functional-endoscopic-sinus-surgery/" element={<FunctionalEndoscopicSinusSurgery />} />
        <Route path="/fess/" element={<FESS />} />
        <Route path="/septoplasty/" element={<Septoplasty />} />
        <Route path="/nasal-polyp-removal/" element={<NasalPolypRemoval />} />
        <Route path="/nasal-polypectomy/" element={<NasalPolyp />} />
        <Route path="/turbinoplasty/" element={<Turbinoplasty />} />
        <Route path="/turbinectomy/" element={<Turbinectomy />} />
        <Route path="/repair-of-csf-rhinorrhoea/" element={<RepairofCSFRhinorrhoea />} />
        <Route path="/epistaxis/" element={<Epistaxis />} />
        <Route path="/palatal-injection-for-snoring/" element={<PalatalInjectionforSnoring />} />
        <Route path="/speech-therapy/" element={<SpeechTherapy />} />
        <Route path="/tonsils/" element={<Tonsils />} />
        <Route path="/vocal-cord-surgery/" element={<VocalCordSurgery />} />
        <Route path="/tonsillectomy/" element={<Tonsillectomy />} />
        <Route path="/adenoid-surgery-with-tube-insertion/" element={<AdenoidSurgerywithTube />} />
        <Route path="/mouth-ulcers/" element={< MouthUlcers />} />
        <Route path="/facial-aesthetics/" element={< FacialAesthetics />} />
        <Route path="/hair-restoration/" element={< HairRestoration />} />
        <Route path="/laryngoscopy/" element={< Larygnoscopy />} />
        <Route path="/microlaryngoscopy/" element={< Microlaryngoscopy />} />
        <Route path="/search/" element={<SearchPage />} />
        <Route path="/book-an-appointment/" element={<Appointment />} />
        <Route path="/adenoid-surgery" element={<Adenoidectomy/>} />
        <Route path="/snoring-sleep-apnea-surgery/" element={<SnoringSleepApneaSurgery/>} />
        <Route path="/mastoidectomy/" element={<Mastoidectomy/>} />
        <Route path="/mastoidectomy-surgery/" element={<MastoidectomySergery/>} />
        <Route path="/microlaryngeal-surgery-mls/" element={<MLS/>} />
        <Route path="/neck-swelling-surgery/" element={<RemovalOfNeckSwelling/>} />
        <Route path="/insurance-partners-and-tpa/" element={<InsuranceAndTpa/>} />
        <Route path="/tinnitus-care-and-audiological-management/" element={<TinnitusManagement/>} />
        <Route path="/sensorineural-hearing-loss/" element={<SensorineuralDeafness/>} />
        <Route path="/microlaryngeal-surgery/" element={<MicrolaryngealSurgery/>} />
        <Route path="/ent-doctor-delhi/" element={<ExpertAdvice/>} />
        <Route path="/ear-clinic-delhi/" element={<EarClinicDelhi/>} />
        <Route path="/nose-surgery-cost-delhi/" element={<NoseSurgeryCost/>} />
        <Route path="/ear-doctor-delhi/" element={<EarDoctorDelhi/>} />
        <Route path="/intratympanic-steroid-injection/" element={<IntratympanicInjection/>} />
        <Route path="/throat-doctor-delhi/" element={<ThroatDoctorDelhi/>} />
        <Route path="/pediatric-ent-delhi/" element={<PediatricENT/>} />
        <Route path="/ent-faq/" element={<MainFaq/>} />
        <Route path="/thank-you/" element={<Thanks/>} />
        <Route path="/our-services/" element={<ServicesMain/>} />
        <Route path="/blogs/" element={<AllBlogs/>} />
        <Route path="/post/" element={<Post/>} />
        <Route path="/privacy-policy/" element={<PrivacyPolicy/>} />
        <Route path="/terms-and-conditions/" element={<PrivacTermsConditions/>} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/endoscopic-dcr/" element={<EndoscopicDCR />} />
        <Route path="/tympanoplasty/" element={<Tympanoplasty />} />
        {/* <Route path="/blog/" element={<Blog/>} /> */}
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;