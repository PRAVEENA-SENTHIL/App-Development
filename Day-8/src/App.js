// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import AdminDashboard from "./Components/AdminDashboard";
import Layout from "./Components/Layout";
import Exampletest from "./Pages/Exampletest";
import Login from "./Components/Login";
import DocLogin from "./Components/DocLogin";
import AdminLogin from "./Components/AdminLogin";
import DAdmin from "./Components/DAdmin";
import AddDoctorForm from "./Components/AddDoctorForm";
import Signup from "./Components/Signup";
import DocSignup from "./Components/DocSignup"
import ForgotPassword from "./Components/ForgotPassword"
import PatientAdmin from "./Components/PatientAdmin"
import Userdash from "./Components/Userdash";
import Doctordash from "./Components/Doctordash";
import AddPatientForm from "./Components/AddPatientForm";
import LoginOptions from "./Components/LoginOptions";
import FAQ from "./Components/FAQ";
import Footer from "./Footer/Footer";
import Generalinfo from "./Footer/Generalinfo";
import Tos from "./Footer/Tos";
import Hiw from "./Footer/Hiw";
import Privacypolicy from "./Footer/Privacypolicy";
import Consultations from "./Footer/Consultations";
import Payment from "./Components/Payment";
function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route
          path="/"
            element={
              <Layout> 
                <Home /> 
              </Layout>
            }
          />
          <Route
          path="/admin"
            element={
              
                <AdminDashboard /> 
              
            }
          />
          <Route
          path="/payment"
            element={
              <Layout> 
                <Payment /> 
              </Layout>
            }
          />
          
          <Route
          path="/userdash"
            element={
              <Layout> 
                <Userdash /> 
              </Layout>
            }
          /><Route
          path="/doctordashboard"
            element={
              <Layout> 
                <Doctordash /> 
              </Layout>
            }
          />
          <Route
          path="/doctorAdmin"
            element={
                <DAdmin /> 
            }
          />
          <Route
          path="/faq"
            element={
                <FAQ /> 
            }
          />
          <Route
          path="/patientAdmin"
            element={
                <PatientAdmin /> 
            }
          />
          <Route
          path="/forgot"
            element={
                <ForgotPassword /> 
            }
          />
          <Route
          path="/loginoptions"
            element={
                <LoginOptions /> 
            }
          />
          <Route
          path="/signin"
            element={
                <Login/> 
            }
          />
          <Route
          path="/doctorLogin"
            element={
                <DocLogin/> 
            }
          />
          <Route
          path="/adminLogin"
            element={
                <AdminLogin /> 
            }
          />
          <Route
          path="/signup"
            element={
                <Signup /> 
            }
          />
          <Route
          path="/docsignup"
            element={
                <DocSignup /> 
            }
          />
        
          <Route
          path="/docsignin"
            element={
                <DocLogin /> 
            }
          />
          <Route
          path="/addDoctor"
            element={
                <AddDoctorForm /> 
            }
          />
          <Route
          path="/addPatient"
            element={
                <AddPatientForm /> 
            }
          />
          <Route
            path="/legal"
            element={
              <Layout> 
                <Legal /> 
              </Layout>
            }
          />
          <Route
            path="/appointment"
            element={
              <Layout> 
                <Appointment />
              </Layout>
            }
          />
          <Route
          path="/test"
            element={
              <Layout> 
                <Exampletest /> 
              </Layout>
            }
          />
          <Route
          path="/foot"
            element={
              <Layout> 
                <Footer /> 
              </Layout>
            }
          />

          <Route
          path="/gi"
            element={
              <Layout> 
              <Generalinfo/>
              </Layout>
            }
          />
          <Route
          path="/cons"
            element={
              <Layout> 
              <Consultations/>
              </Layout>
            }
          />

          <Route
          path="/pp"
            element={
              <Layout> 
              <Privacypolicy/>
              </Layout>
            }
          />
          <Route
          path="/hiw"
            element={
              <Layout> 
              <Hiw/>
              </Layout>
            }
          />

          <Route
          path="/tos"
            element={
              <Layout> 
              <Tos/>
              </Layout>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
