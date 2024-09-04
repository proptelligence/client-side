import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Technology from './components/Technology';
import PropertyManagement from './components/PropertyManagement';
import Industries from './components/Industries';
import SignUp from './components/SignUp';
import Login from './components/Login';
import LegalServices from './components/LegalServices';
import TitleSearch from './components/TitleSearch';
import Drafting from './components/Drafting';
import PaymentGateway from './components/PaymentGateway';
import PostProperty from './components/PostProperty';
import Categories from './components/Categories';
import BlogItemDetails from './components/BlogItemDetails';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import RefundPolicy from './components/RefundPolicy';
import Blog from './components/Blog';
import Blog2 from './components/Blog2';
import Blog3 from './components/Blog3';
import Blog4 from './components/Blog4';
import Blog5 from './components/Blog5';
import Blog6 from './components/Blog6';
import Blog7 from './components/Blog7'; 
import CityPropertyList from './components/CityPropertyList'
import Insights from './components/Insights';
import CareerPage from './components/CareerPage';
import Team from './components/Team';
import Cart from './components/Cart';
import HouseDetailsForm from './components/HouseDetailsForm';
import Services from './components/Services';
import NotFound from './components/NotFound';
import Select from './components/selectcityandstate';
import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Properties from './components/Properties';
import CityStateSelection from './components/selectcityandstate';
import ARVRVT from './components/Ar&vrVT';
import ARVRVD from './components/Ar&vrVD';
import IOT from './components/IOTsolutions';
import PaymentPopup from './components/PaymentPopup';

function App() {
  useEffect(() => {
    // Google Tag Manager (gtag.js)
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MPNXW889Q5';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-MPNXW889Q5');

    // Cleanup function
    return () => {
      // Remove the script when unmounting the component
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Clarity Code
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "l32skevwty");

    // Cleanup function
    return () => {
      // Remove Clarity script
      const clarityScript = document.querySelector('script[src^="https://www.clarity.ms/tag/"]');
      if (clarityScript) {
        clarityScript.parentNode.removeChild(clarityScript);
      }
    };
  }, []);

  useEffect(() => {
    // Zoho SalesIQ Code
    const salesIQScript = document.createElement('script');
    salesIQScript.innerHTML = `
      var $zoho = $zoho || {};
      $zoho.salesiq = $zoho.salesiq || { widgetcode: "siqd5bd0a10a571c016e2a14372615b56e66c995d9492c328369d402248eef93ef2", values: {}, ready: function(){} };
      var d = document;
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.id = "zsiqscript";
      s.defer = true;
      s.src = "https://salesiq.zohopublic.in/widget";
      var t = d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(s, t);
      "<div id='zsiqwidget'></div>";
    `;
    document.head.appendChild(salesIQScript);

    // Zoho SalesIQ Style (positioning at bottom right)
    const style = document.createElement('style');
    style.innerHTML = `
      #zsiq_float {
        bottom: 20px;
        right: 20px;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      // Remove Zoho SalesIQ script
      document.head.removeChild(salesIQScript);
      // Remove Zoho SalesIQ style
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    // QR Code integration
    const qrScript = document.createElement('script');
    qrScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcode.react/2.0.0/qrcode.min.js';
    qrScript.async = true;
    document.head.appendChild(qrScript);

    // Cleanup function
    return () => {
      // Remove QR Code script
      document.head.removeChild(qrScript);
    };
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>Proptelligence | PropTech Company in India | Online Legal Services</title>
        <meta name="Legal Services" content="Proptelligence is an AI-powered real estate and legal platform that helps agents, attorneys, and other real estate professionals find and procure properties." />
        <meta name="Property Services" content="Navigating the legal complexities of real estate transactions can be daunting. Proptelligence simplifies this process by offering tailored legal services to meet your needs." />
        <meta name="Industries" content="Property Technologies has worked with a range of industries including commercial real estate, residential real estate, hospitality, and healthcare." />
        <meta name="About us" content="At Proptelligence, we recognize the challenges faced by property owners and strive to provide innovative solutions tailored to their needs." />
        <meta name="msvalidate.01" content="D2A150396A7BEE21CE9769C5C3479F1C" />
        <meta name="google-site-verification" content="google154aa1c8bf93db82.html" />
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<About />} />
        <Route exact path="/s" element={<Services />} />
        <Route exact path="/select" element={<Select />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/tech" element={<Technology />} />
        <Route exact path="/industries" element={<Industries />} />
        <Route exact path="/legalservices" element={<LegalServices />} />
        <Route exact path="/titlesearch" element={<TitleSearch />} />
        <Route exact path="/drafting" element={<Drafting />} />
        <Route exact path="/payment" element={<PaymentGateway />} />
        <Route exact path="/prop" element={<PropertyManagement />} />
        <Route exact path="/post" element={<PostProperty />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/blogdetails" element={<BlogItemDetails />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/proptelligence-terms&conditions" element={<TermsAndConditions />} />
        <Route exact path="/proptelligence-refund-policy" element={<RefundPolicy />} />
        <Route exact path="/freepropertylist" element={<Blog />} />
        <Route exact path="/indiarealstate2023" element={<Blog2 />} />
        <Route exact path="/buyahome" element={<Blog3 />} />
        <Route exact path="/legaladvice" element={<Blog4 />} />
        <Route exact path="/mumbai" element={<Blog5 />} />
        <Route exact path="/pune" element={<Blog6 />} />
        <Route exact path="/chennai" element={<Blog7 />} />
        <Route exact path="/insights" element={<Insights />} />
        <Route exact path="/careers" element={<CareerPage />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/new" element={<HouseDetailsForm />} /> 
        <Route exact path="/Propvaluation" element={<HouseDetailsForm />} />
        <Route exact path="/Propbot" element={<HouseDetailsForm />} />
        <Route exact path="/PropAutomatedPropertyManagement" element={<HouseDetailsForm />} />
        <Route exact path="/propanalytics" element={<HouseDetailsForm />} />
        {/* <Route exact path="/prop/:city" element={<CityPropertyList />} /> */}
        <Route path="/prop/:location" element={<Properties />} />
        <Route path="/" element={<CityStateSelection />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route exact path="/virtualtour" element={<ARVRVT />} />
        <Route exact path="/virtualdesign" element={<ARVRVD />} />
        <Route exact path="/iotsolutions" element={<IOT />} />
        <Route exact path="/upipay" element={<PaymentPopup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
