import React from 'react';

import Audio1 from '../image/audio1.jpeg';
import Audio2 from '../image/ear4.jpg';
import Audio3 from '../image/ear5.jpg';
import Audio4 from '../image/stapespg.jpeg';

const BestServices = () => {
  return (
    <>
      <section className="left-right-section">
      <style>
        {`
        section {
    position: relative;
    padding: 15px 0px !important;
}`}
      </style>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <span className="pq-section-sub-title">Stapes Surgery</span>
                <h2 className="pq-section-title">
                  What you Need to Know about Stapes Surgery
                </h2>
                <p className="pq-section-description">
                  You may need a stapedectomy if you have hearing loss caused by
                  otosclerosis (oh-tuh-skli-roh-sis). This condition happens
                  when your stapes fuses with surrounding bone tissue, losing
                  the flexibility it needs to transmit sound waves from your
                  middle ear to your inner ear.
                </p>
                <p className="pq-section-description">
                  Though Stapes surgery is the only known treatment to take care
                  of your hearing loss as well as prevent the progression of
                  your disease, every Stapes surgery carries a real risk of
                  complete loss of hearing in the operated ear. This must be
                  clearly discussed during treatment planning.
                </p>
                <p className="pq-section-description">
                  A Hearing aid is another option for treating Otosclerosis.
                </p>
              </div>
            </div>

            <div className="col-xl-6 pe-xl-5">
              <img
                src={Audio1}
                className="img-fluid wow fadeInLeft"
                alt="home"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xl-5">
              <img
                src={Audio2}
                className="img-fluid wow fadeInLeft"
                alt="home"
              />
            </div>
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <span className="pq-section-sub-title">Stapes Surgery</span>
                <h2 className="pq-section-title">Why I Need Stapes Surgery</h2>
                <p className="pq-section-description">
                  You may need a stapedectomy if you have hearing loss caused by
                  otosclerosis (oh-tuh-skli-roh-sis). This condition happens
                  when your stapes fuses with surrounding bone tissue, losing
                  the flexibility it needs to transmit sound waves from your
                  middle ear to your inner ear.
                </p>
                <p className="pq-section-description">
                  Though Stapes surgery is the only known treatment to take care
                  of your hearing loss as well as prevent the progression of
                  your disease, every Stapes surgery carries a real risk of
                  complete loss of hearing in the operated ear. This must be
                  clearly discussed during treatment planning.
                </p>
                <p className="pq-section-description">
                  A Hearing aid is another option for treating Otosclerosis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <span className="pq-section-sub-title">Stapes Surgery</span>
                <h2 className="pq-section-title">
                  Are there complications associated with treatment?
                </h2>
                <p className="pq-section-description">
                  Like any surgical procedure, a stapedectomy carries the risk
                  of complications. While the procedure helps about 80% to 90%
                  of people with otosclerosis, it may not be successful in some
                  cases. In rare instances, your hearing may even be worse after
                  surgery. Some other potential complications include:
                </p>
                <ul className="pq-section-description">
                  <li>
                    Feeling dizzy immediately after your surgery and for the
                    next few days.
                  </li>
                  <li>
                    Losing your sense of taste on the side of your tongue. This
                    symptom typically goes away after a few months.
                  </li>
                  <li>Developing tinnitus, or ringing in your ear.</li>
                  <li>
                    Your hearing may not improve or it may get worse after
                    surgery. In some cases, your healthcare provider may
                    recommend doing additional surgery. They may also recommend
                    using hearing aids.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-6 pe-xl-5">
              <img
                src={Audio4}
                className="img-fluid wow fadeInLeft"
                alt="home"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestServices;
