import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal1-siteTitle">
        <Link to="/">
          Care Nexus Queries 
           {/* <img  className="logo"src="https://media.istockphoto.com/id/1200712144/vector/medic-stethoscope-concept-logotype-template-design-business-logo-icon-shape-medic.jpg?s=612x612&w=0&k=20&c=O3Tem0JD-Xn3oJi6x3hIh2hrd0F8COzUh5LvkLj9Zbw=" alt=""/><span className="legal-siteSign"></span> */}
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">What is about your health consultation, and how can it benefit me?</p>
        <p className="legal-description">
        A health consultation is a professional service where you
         can discuss your health concerns and receive guidance from qualified 
         healthcare professionals. It can benefit you by providing personalized advice, 
         addressing your health issues, and helping you make informed decisions
          about your well-being.
        </p>

        <p className="legal-title">How do I schedule a health consultation appointment?</p>
        <p className="legal-description">
        Scheduling an appointment is easy. Simply visit our website, choose a convenient 
        date and time, and fill out a brief form with your contact information.
         You'll receive a confirmation email with details on how to join your consultation.
        </p>

        <p className="legal-title">What qualifications do your healthcare professionals have?</p>
        <p className="legal-description">
        Our healthcare professionals are licensed and experienced in their respective fields. 
        They hold degrees and certifications in medicine, psychology, nutrition, 
        and other healthcare specialties. Rest assured, you will receive expert guidance.
        </p>

        <p className="legal-title">Can I request a follow-up consultation if needed?</p>
        <p className="legal-description">
        Absolutely! If you require further guidance or have additional questions after your initial consultation, 
        you can easily schedule a follow-up session with the same or a different healthcare professional.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          Health Plus is designed to simplify healthcare access. You can choose
          a specialist, schedule an appointment, and engage in a virtual
          consultation. Our specialists offer personalized advice and treatment
          plans tailored to your needs. Please remember that emergencies require
          immediate medical attention and should be directed to your local
          medical facility.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
