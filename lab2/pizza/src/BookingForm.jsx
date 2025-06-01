import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BookingForm() {
  return (
    <div className="text-white py-5 " style={{ backgroundColor: '#2b2b2b' }} >
      <div className="container ps-5">
        <h2 className="text-center mb-4">Book Your Table</h2>
        <form>
          <div className="row mb-3">
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Your Name *" required />
            </div>
            <div className="col-md-4">
              <input type="email" className="form-control" placeholder="Your Email *" required />
            </div>
            <div className="col-md-4">
              <select className="form-select">
                <option>Select a Service</option>
                <option>Dine-in</option>
                <option>Takeaway</option>
                <option>Delivery</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <textarea className="form-control" rows="5" placeholder="Please write your comment"></textarea>
          </div>
        <div className="text-start">
            <button type="submit" className="btn" style={{ backgroundColor: '#f9b401', color: '#fff' }}>
            Send Message
          </button>
        </div>
          
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
