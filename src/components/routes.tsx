// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './Main/Header';
// import MainHeroSection from './Pages/HeroSection/MainHeroSection';
// import MerchantsPage from './Pages/MerchantPage/MerchantPage';
// import Testimonals from './Pages/Testimonal/Testimonals';
// import TermsAndConditions from './Pages/TermAndCondition/TermsAndConditions';
// import PaymentRefundPolicyPage from './Pages/Policies/PaymentRefundPolicyPage';
// import CookiePolicy from './Pages/Policies/CookiePolicy';
// import PrivacyPolicy from './Pages/Policies/PrivacyPolicy';
// import Faqs from './Pages/Faqs/Faqs';
// import DashboardPage from './Pages/WorkPage/WorkSteps';
// import RiderSignUp from './Pages/SignUp/RiderSignUp';
// import DeleteUserForm from './Pages/Deleteuser/DeleteUserForm';
// import AboutUs from './Pages/AboutUs/AboutUs';
// import Footer from './Main/Footer';


import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Main/Header';
import Footer from './Main/Footer';
import Loading from './UI/Loading';

// Lazy-loaded components
const MainHeroSection = React.lazy(() => import('./Pages/HeroSection/MainHeroSection'));
const MerchantsPage = React.lazy(() => import('./Pages/MerchantPage/MerchantPage'));
const Testimonals = React.lazy(() => import('./Pages/Testimonal/Testimonals'));
const TermsAndConditions = React.lazy(() => import('./Pages/TermAndCondition/TermsAndConditions'));
const PaymentRefundPolicyPage = React.lazy(() => import('./Pages/Policies/PaymentRefundPolicyPage'));
const CookiePolicy = React.lazy(() => import('./Pages/Policies/CookiePolicy'));
const PrivacyPolicy = React.lazy(() => import('./Pages/Policies/PrivacyPolicy'));
const Faqs = React.lazy(() => import('./Pages/Faqs/Faqs'));
const DashboardPage = React.lazy(() => import('./Pages/WorkPage/WorkSteps'));
const RiderSignUp = React.lazy(() => import('./Pages/SignUp/RiderSignUp'));
const DeleteUserForm = React.lazy(() => import('./Pages/Deleteuser/DeleteUserForm'));
const AboutUs = React.lazy(() => import('./Pages/AboutUs/AboutUs'));


const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};


const RoutesComponent: React.FC = () => {
    return (
        <Suspense fallback={<Loading/>}>

        <Routes>
            <Route path="/" element={<><MainHeroSection /><DashboardPage /><Testimonals /><MerchantsPage /> <Footer /></>} />
            <Route path="/terms" element={<MainLayout><TermsAndConditions /></MainLayout>} />
            <Route path="/policy-refund" element={<MainLayout><PaymentRefundPolicyPage /></MainLayout>} /> 
            <Route path="/cookie-policy" element={<MainLayout><CookiePolicy /></MainLayout>} />
            <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />
            <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
            <Route path="/faqs" element={<MainLayout><Faqs /></MainLayout>} />
            <Route path="/ride" element={ <> <RiderSignUp /><Footer /> </>} />
            <Route path="/delete-user" element={<DeleteUserForm />} />
        </Routes>
        </Suspense>
    );
};

export default RoutesComponent;
