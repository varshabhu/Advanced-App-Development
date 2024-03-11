
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const FAQsPage = () => {
  return (
    <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f7fafc' ,overflow:'hidden'}}>
      <div style={{ maxWidth: '600px', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', marginLeft:'20px' }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: '1.2rem', color: '#718096' }}>Here are some common questions and answers. If you can't find what you're looking for, feel free to <a style={{ color: '#4299e1' }} href="/Cont">contact us</a>.</p>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Question 1?</h2>
            <p>Answer to question 1 lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Question 2?</h2>
            <p>Answer to question 2 lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Add more questions and answers as needed */}
        </div>
      </div>
    </div>
  );
};

const Fpage= () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <FAQsPage />
    </div>
  );
};

export default Fpage;
