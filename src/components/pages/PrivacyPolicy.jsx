import React, { useEffect } from 'react';
import Container from '../layer/Container';

const PrivacyPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-16">
      <Container>
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
            Privacy and Policy
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Continues technological improvement for energy saving and environment-friendly projects.
          </p>
        </div>
        
        {/* Terms and Conditions */}
        <div className=" p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Terms and Conditions
          </h3>
          <div className="space-y-8 text-gray-700 text-base sm:text-lg">
            {/* Section 1 */}
            <div>
              <h4 className="text-xl font-semibold mb-2">1. Introduction</h4>
              <p>
                ADVANCED ENGINEERS is committed to protecting your privacy. This policy outlines how
                we collect, use, and safeguard your personal data in compliance with applicable laws
                and regulations. By engaging with our services, you agree to the practices described
                in this policy.
              </p>
            </div>
            
            {/* Section 2 */}
            <div>
              <h4 className="text-xl font-semibold mb-2">2. Information Collection</h4>
              <ul className="list-disc list-inside pl-4">
                <li><strong>Client Information:</strong> Name, contact details, company information, billing details, and project-specific data.</li>
                <li><strong>Employee Information:</strong> Personal identification details, job history, payroll information, and performance evaluations.</li>
                <li><strong>Vendor Information:</strong> Contact details, business details, and payment information for business transactions.</li>
                <li><strong>Website Usage Information:</strong> IP addresses, cookies, browsing activity, and analytics related to site visits.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h4 className="text-xl font-semibold mb-2">3. Use of Information</h4>
              <ul className="list-disc list-inside pl-4">
                <li><strong>Service Delivery:</strong> To provide engineering services, project management, and support.</li>
                <li><strong>Communication:</strong> To contact clients, vendors, and employees about project updates, billing, and other relevant matters.</li>
                <li><strong>Improvement of Services:</strong> To analyze and improve the efficiency of our website, services, and customer satisfaction.</li>
                <li><strong>Legal Compliance:</strong> To comply with legal, regulatory, and contractual obligations.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h4 className="text-xl font-semibold mb-2">4. Data Protection and Security</h4>
              <p>
                We implement industry-standard security measures to protect personal information
                against unauthorized access, disclosure, alteration, and destruction. This includes
                encryption, secure servers, and access controls to safeguard data.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h4 className="text-xl font-semibold mb-2">5. Sharing of Information</h4>
              <ul className="list-disc list-inside pl-4">
                <li><strong>Service Providers:</strong> Third-party vendors or contractors who assist us in delivering services may access your information as necessary.</li>
                <li><strong>Legal Requirements:</strong> If required by law, we may disclose personal information to authorities, such as in response to a subpoena or legal request.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h4 className="text-xl font-semibold mb-2">6. Data Retention</h4>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, or resolve disputes.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h4 className="text-xl font-semibold mb-2">7. Employee Confidentiality</h4>
              <p>
                All employees and contractors of ADVANCED ENGINEERS are bound by confidentiality agreements that prevent them from disclosing sensitive information about clients, projects, or internal operations.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h4 className="text-xl font-semibold mb-2">8. Cookies and Tracking Technologies</h4>
              <p>
                Our website may use cookies and similar tracking technologies to enhance the user experience. Cookies help us analyze site usage, provide personalized content, and improve the functionality of the website. Users can control cookie settings through their browser.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h4 className="text-xl font-semibold mb-2">9. Your Rights</h4>
              <p>
                You have the right to access, update, or delete your personal information held by us. If you have any concerns about how we handle your personal data, you can contact us directly. We will respond to any request as per applicable laws.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h4 className="text-xl font-semibold mb-2">10. Changes to This Policy</h4>
              <p>
                ADVANCED ENGINEERS reserves the right to update this Privacy Policy as necessary. Any changes will be posted on our website, and the date of the last revision will be noted.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h4 className="text-xl font-semibold mb-2">11. Contact Information</h4>
              <p>
                If you have any questions or concerns about our privacy practices, please contact us at:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li><strong>Email:</strong> info@advancedengrs.com</li>
                <li><strong>Phone:</strong> +880 1717-507404</li>
                <li><strong>Address:</strong> Head Office:- Rustom Plaza (1st Floor) Supari Patty, Naogaon-6500, Bangladesh.</li>
                <li><strong>Address:</strong>Dhaka Office:- Sector-09, Road-3F, House-18, Uttara, Dhaka-1230.</li>


              </ul>
              <p className='mt-4'>This is a basic framework and should be adapted to meet the specific needs and legal requirements of your region or industry. Consulting a legal expert to ensure compliance with privacy laws, like the GDPR or CCPA, is always recommended.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;
