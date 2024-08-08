import React, { useContext } from 'react';
import UserContext from '../contexts/usercontext'
import AccessDenied from '../components/AccessDenied';


const ContactUs = () => {
 
  const [isAuthenticated, setIsAuthenticated] = useContext(UserContext);

   
return (
  isAuthenticated ? (
    <div className="contact-us bg-gray-100 text-gray-900 py-16 px-4 md:px-8">
    {/* Hero Section */}
    <section className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg md:text-xl leading-relaxed">
        We would love to hear from you! Whether you have questions, feedback, or just want to get in touch, please use the form below or contact us using the information provided.
      </p>
    </section>

    {/* Contact Information Section */}
    <section className="mb-12">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-lg mb-2">
              <i className="fas fa-envelope mr-2"></i>
              Email: <a href="mailto:inf
              o@ecommerce.com" className="text-blue-600 hover:underline">info@ecommerce.com</a>
            </p>
            <p className="text-lg mb-2">
              <i className="fas fa-phone mr-2"></i>
              Phone: +91 9109792700 
            </p>
            <p className="text-lg">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Address: 123 Main Street, Anytown, USA
            </p>
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-semibold mb-4">Find Us</h3>
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                title="Company Location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126245.78532260754!2d-122.28101841383043!3d37.68341713722696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e55b3f6f2df%3A0x94e51971e9cfa47b!2s123%20Main%20St%2C%20Anytown%2C%20CA%2095678%2C%20USA!5e0!3m2!1sen!2sus!4v1637550590925!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section>
      <h2 className="text-3xl font-semibold mb-8 text-center">Send Us a Message</h2>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="6" className="w-full p-3 border border-gray-300 rounded-lg" required></textarea>
          </div>
          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  </div>


    
  ) : (
    <AccessDenied />
  )
);

 
};

export default ContactUs;