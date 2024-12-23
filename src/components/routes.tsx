import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Main/Header';
import MainHeroSection from './Pages/HeroSection/MainHeroSection';
import MerchantsPage from './Pages/MerchantPage/MerchantPage';
import Testimonals from './Pages/Testimonal/Testimonals';
import TermsAndConditions from './Pages/TermAndCondition/TermsAndConditions';
import PaymentRefundPolicyPage from './Pages/Policies/PaymentRefundPolicyPage';
import CookiePolicy from './Pages/Policies/CookiePolicy';
import PrivacyPolicy from './Pages/Policies/PrivacyPolicy';
import Faqs from './Pages/Faqs/Faqs';
import DashboardPage from './Pages/WorkPage/WorkSteps';
import RiderSignUp from './Pages/SignUp/RiderSignUp';

const RoutesComponent: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<><MainHeroSection /><DashboardPage /><Testimonals /><MerchantsPage /></>} />

            <Route path="/terms" element={<><Header /><TermsAndConditions /></>} />
            <Route path="/policy-refund" element={<><Header /><PaymentRefundPolicyPage /></>} />
            <Route path="/cookie-policy" element={<><Header /><CookiePolicy /></>} />
            <Route path="/privacy-policy" element={<><Header /><PrivacyPolicy /></>} />
            <Route path="/faqs" element={<><Header /><Faqs /></>} />
            <Route path="/ride" element={<RiderSignUp />} />
        </Routes>
    );
};

export default RoutesComponent;
