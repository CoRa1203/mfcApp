import "./generalStyles.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EntitySelection from "./pages/entitySelection/EntitySelection";
import LoginEmployee from "./pages/loginEmployee/LoginEmployee";
import PersonalDataInput from "./pages/personalDataInput/PersonalDataInput";
import ServiceCategorySelection from './pages/serviceCategorySelection/ServiceCategorySelection'
import ServiceSelection from './pages/serviceSelection/ServiceSelection'
import ServiceSubmit from "./pages/serviceSubmit/ServiceSubmit";
import ServiceProvided from "./pages/serviceProvided/ServiceProvided";
import Feedback from "./pages/feedback/feedback";
import ServiceCategoryProvidedReason from "./pages/ServiceCategoryProvidedReason/ServiceCategoryProvidedReason";
import ServiceCategoryProvidedAnotherReason from "./pages/ServiceCategoryProvidedAnotherReason copy/ServiceCategoryProvidedAnotherReason";



function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<LoginEmployee />} />
        <Route path="/EntitySelection" element={<EntitySelection />} />
        <Route path="/PersonalDataInput" element={<PersonalDataInput/>} />
        <Route path="/ServiceCategorySelection" element={<ServiceCategorySelection/>} />
        <Route path="/ServiceSelection" element={<ServiceSelection />} />
        <Route path="/ServiceSubmit" element={<ServiceSubmit />} />
        <Route path="/ServiceProvided" element={<ServiceProvided />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/ServiceCategoryProvidedReason" element={<ServiceCategoryProvidedReason />} />
        <Route path="/ServiceCategoryProvidedAnotherReason" element={<ServiceCategoryProvidedAnotherReason />} />
      </Routes>
    </Router>

      {/* <LoginEmployee /> */}
      {/* <EntitySelection /> */}
    </>
  );
}

export default App;
