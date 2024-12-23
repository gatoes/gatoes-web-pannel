import React from 'react';

const CookiePolicy: React.FC = () => {
    return (
        <div className="bg-[#F2F6FB]">
             <div className="bg-white p-6 sm:p-8 lg:p-16 mx-4 sm:mx-8 lg:mx-36 my-10 lg:my-20">
                <h1 className="text-4xl font-light text-left mb-6 text-[#8D1B3D]">Cookie Policy</h1>
                <div className="text-lg">
                    <p className="mb-4 font-light text-lg text-zinc-700">
                        At Gatoes, we believe in being clear and open about how we collect and use data related to you. This Cookie Policy applies to any Gatoes product or service that links to this policy or incorporates it by reference. We use cookies and similar technologies to collect and use data as part of our Services as defined in our Privacy Policy (“Services”) and which includes our sites, communications, mobile applications and off-site Services. In the spirit of transparency, this policy provides detailed information about how and when we use these technologies.
                    </p>
                    <p className="mb-4 font-light text-lg text-zinc-700">
                        By continuing to visit or use our Services, you are agreeing to the use of cookies and similar technologies for the purposes described in this policy
                    </p>
                    <p className="mb-4 font-light text-lg text-zinc-700" >We may issue full or partial refunds in the following cases.
                    </p>
                    <h2 className="text-3xl font-bold text-zinc-700 my-6">Cookie</h2>
                    <p className="font-light text-lg text-zinc-700" >A cookie is a small file placed onto your device that enables Gatoes features and functionality. Any browser visiting our sites may receive cookies from us or cookies from third parties such as our customers, partners or service providers. We or third parties may also place cookies in your browser when you visit non-Gatoes sites that display ads, host our plugins (for example, the “Apply with Gatoes” button) or tags.
                    </p>
                    <p className="font-light text-lg text-zinc-700">
                        We use two types of cookies: persistent cookies and session cookies. A persistent cookie may help us recognize you as an existing user, so it’s easier to return to Gatoes or interact with our Services without signing in again. A persistent cookie stays in your browser and will be read by Gatoes when you return to one of our sites or a partner site that uses our Services (for example, sites that use our sharing or job application buttons). Session cookies last only as long as the session (usually the current visit to a website or a browser session).
                    </p>
                    <h1 className="text-3xl font-bold text-zinc-700 my-6">Pixels
                    </h1>
                    <p className="font-light text-lg text-zinc-700 py-4">
                        A pixel is a tiny image that may be found within web pages and emails, requiring a call (which provides device and visit information) to our servers in order for the pixel to be rendered in those web pages and emails. We use pixels to learn more about your interactions with email content or web content, such as whether you interacted with ads or posts. Pixels can also enable us and third parties to place cookies on your browser.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
