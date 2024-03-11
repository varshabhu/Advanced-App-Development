import { useEffect } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const navigateToFAQPage = () => {
  window.location.href = '/Fpage';
};

const ContactPage = () => {
  return (
    <div style={{ minHeight: '40vh', backgroundColor: '#f7fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '600px',position:'fixed', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' ,marginLeft:'20px' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem', color: '#718096' }}>Have questions or need assistance? Feel free to reach out to us.</p>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Get in Touch</h2>
            <p style={{ color: '#718096' }}>We'd love to hear from you!</p>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontWeight: 'bold' }}>Email:</p>
            <a style={{ color: '#3182ce' }} href="mailto:info@example.com">rbhuvana203@gmail.com</a>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontWeight: 'bold' }}>Phone:</p>
            <p>91+ 6382072558</p>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontWeight: 'bold' }}>Address:</p>
            <p>123 Main St, Chidambaram, India</p>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontWeight: 'bold' }}>Course Hours:</p>
            <p>Mon-Fri: 9 AM - 5 PM</p>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <button style={{ padding: '10px 20px', backgroundColor: '#4299e1', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Send Message</button>
            <button style={{ padding: '10px 20px', backgroundColor: 'transparent', color: '#4299e1', border: '1px solid #4299e1', borderRadius: '4px', cursor: 'pointer' }} onClick={navigateToFAQPage}>View FAQs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cont = () => {
  useEffect(() => {
    // Remove scrollbar from the body
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scrollbar when component unmounts
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',  }}>
      <Topbar />
      <Sidebar />
      <div style={{ display: 'flex',marginLeft:'7%', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
        <ContactPage />
      </div>
    </div>
  );
};

export default Cont;
