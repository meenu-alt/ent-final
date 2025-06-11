import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Image1 from '../image/throat1.jpg';
import Image2 from '../image/throat2.jpg';
import Image3 from '../image/throat3.jpg';
import Image4 from '../image/throat7.jpg';

const SinusitisDifficulties = () => {
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
                <h6 className="pq-section-title text-danger">Sinusitis Difficulties</h6>
                <p className="text-danger">Understanding the Challenges of Sinusitis</p>
                <h2 className="pq-section-title">Impact of Sinusitis and Tonsillitis</h2>
                <p>
                  Sinusitis symptoms can significantly impact daily life, often leading to nasal congestion, sinus headaches, and breathing difficulties. Chronic sinus infections can cause discomfort and require medical intervention.
                </p>
                <h2 className="pq-section-subtitle sub-subtitle">Nasal Congestion and Breathing Issues</h2>
                <p>
                  Nasal congestion may lead to mouth breathing and air hunger in patients, i.e., they don’t get enough oxygen. According to Dr. Bhardwaj, people with air hunger due to nasal blockage tend to face difficulties with sleeping.
                </p>
              </div>
            </div>

            
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={Image1}
                className="img-fluid wow fadeInRight"
                alt="sinusitis-symptoms"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={Image2}
                className="img-fluid wow fadeInRight"
                alt="sinusitis-symptoms"
              />
            </div>

            
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-subtitle sub-subtitle">Sinus Headaches</h2>
                <p>
                  These are early morning headaches which typically indicate a sinus infection. “Sinus headaches start as soon as you’re awake and gradually, as the day progresses, they tend to recede,” says Dr. Bhardwaj. “When you’re up and about, you adopt a more erect posture, and the sinus fluid starts draining out.”
                </p>
                <h2 className="pq-section-subtitle sub-subtitle">Thick Nasal Discharge and Chronic Cough</h2>
                <p>
                  Both these symptoms can lead people to see an ENT specialist. “The thick nasal discharge is indicative of a sinus infection, and clearly, it’s socially unacceptable,” says Dr. Bhardwaj. “One of the most common causes of a chronic cough is a post-nasal drip. Both of these symptoms need to be investigated further to rule out an infection.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="section-title main-title">
            What You Need to Know About Sinusitis
          </h2>
          <div className="content">
            <p>
              Diksha Saxena had been suffering from constant headaches and nasal congestion. This was her third time this year, and she went yet again to see her family physician, who had helped each time to resolve the episode with antibiotics. “I thought all I had was a cold and stuffiness,” Diksha said. “But my physician said this might be recurrent sinusitis and wanted me to meet an ENT specialist.”
            </p>
            <p>
              Diksha came to Sitaram Bhartia and met ENT specialist Dr. R.K. Bhardwaj, who conducted a detailed endoscopic examination on her. “We do an endoscopic evaluation to look for evidence of polyps, the condition of the nasal septum, the presence of adenoids,” said Dr. Bhardwaj, “or for the presence of any other abnormality which could be causing a sinus infection.”
            </p>
            <p>
              Patients with sinusitis may have varied symptoms like nasal blockage or congestion and a headache, as was the case with Diksha. “We also see sinusitis patients who have thick nasal discharge, a post-nasal drip, and sometimes nasal bleeding.”
            </p>
            <p>
              If sinusitis is diagnosed, the patient may be asked to get a CT scan of the sinuses to see the extent of the disease.
            </p>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-subtitle sub-subtitle">Warning Given By Some Doctors</h2>
                <p>
                  Doctors also warn people against self-medicating or self-diagnosing. “Most people who self-diagnose and come to us saying they have sinusitis usually have something much milder,” says Dr. Bhardwaj. “Their nasal blockage may turn out to be an allergy or an inflammation which does not necessarily extend into the sinuses.”
                </p>
                <p>
                  On the other hand, a sinus infection that is not appropriately treated will cause pain, fever, headache, toothache, and infection elsewhere in the body, and is at risk of causing sepsis or a widespread serious infection.
                </p>
                <p>
                  Like most people who have sinusitis, Diksha’s episode was also resolved with the appropriate antibiotic treatment. But did she really need an ENT evaluation from a specialist?
                </p>
              </div>
            </div>

            
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={Image3}
                className="img-fluid wow fadeInRight"
                alt="sinusitis-symptoms"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="section-title main-title">
            Special Attention: When to Consult an ENT Specialist
          </h2>
          <div className="content">
            <p>
              “Yes, she did,” Dr. Bhardwaj asserts. “All nasal discharge is not sinusitis, and everyone with sinusitis may not need antibiotics. When you have nasal congestion, an ENT evaluation is critical because it helps identify or rule out any serious issues.”
            </p>
            <p>
              Essentially, any time an individual has repeated episodes of a sinus infection, they must be evaluated by an ENT specialist. Since Diksha did not wait for a long time, we were able to treat and resolve her symptoms.
            </p>
            <p>
              However, if you have a persistent accumulation of pus in the sinuses; if your sinusitis is not responding to medication; if the presence of nasal polyps is causing nasal congestion; if you have severe septal deviation; or if you’re snoring and have severe sleep apnea caused by breathing difficulty, you must be seen by an ENT specialist because these are indications that the patient may need surgery.
            </p>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={Image4}
                className="img-fluid wow fadeInRight"
                alt="sinusitis-symptoms"
              />
            </div>

            
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-subtitle sub-subtitle">Tonsils and Adenoids</h2>
                <p>
                  Mahima Singhal, a 40-year-old mother, couldn’t understand why her son kept falling sick with a high fever. For two or three days, he also hadn’t been eating well. At the hospital, she was told he had developed tonsillitis and would probably need to have his tonsils removed.
                </p>
                <p>
                  “Hearing that your child needs surgery is never comforting,” Mahima said. “I had heard that tonsils helped with keeping infections away, so why did he need to have them removed?”
                </p>
                <p>
                  Mahima was right about what she had heard. Tonsils and adenoids are the body’s first line of defense against external substances. “The tonsils’ job is to filter all harmful ingested and inhaled particles which contain harmful substances,” says Dr. Bhardwaj, ENT Specialist at Sitaram Bhartia, “and to trap them in their follicles. This process prevents the body from being infected by these substances.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="section-title main-title">
            Case Study: Tonsils and Adenoids (Part 2)
          </h2>
          <div className="content">
            <p>
              However, the doctor felt Mahima’s son needed to have his tonsils removed. “At 8 years old, her son’s tonsils had already been infected multiple times, so there was a good chance they were no longer capable of preventing any disease,” Dr. Bhardwaj explains.
            </p>
            <p>
              In chronically infected tonsils, there’s a high likelihood of infected material lying around in the crypts. This material gets released periodically and can cause infections elsewhere in the body.
            </p>
            <p>
              “We also recommend tonsil removal for children who have sleep apnea,” says Dr. Bhardwaj. “If their tonsils are chronically infected, they usually have an enlarged sinus which causes the sleep apnea.” The breathing issues resulting from sleep apnea can affect the lungs and the heart later on in life. Apart from being chronically infected, once the tonsils become large in size, they obstruct breathing, especially during sleep – a condition we now label as Sleep Disordered Breathing (SDB). This leads to long-term complications on the target organs like the heart and the lungs.
            </p>
            <p>
              Mahima agreed to her son’s surgery once this reasoning was explained to her. “I didn’t know an infected tonsil could be so harmful. I’m glad we went ahead with the removal because it will help my son in the long run as well.”
            </p>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-subtitle sub-subtitle">Adenoids in Children</h2>
                <p>
                  Children of a younger age can also have issues with a more superficial tonsil behind the nose known as an adenoid, as was the case with Tripti Suri’s 3-year-old daughter.
                </p>
                <p>
                  Tripti’s daughter had been crying continuously for a few days. “I thought she had picked up a cold,” Tripti said. “She had a stuffy nose and had started snoring when she slept. She also kept pulling at her ear, like something was bothering her.” The check-up revealed that Tripti’s daughter had an enlarged adenoid as well as fluid build-up in her middle ears – a condition that causes ear blockage, pain, and, most worrisome of all, impaired hearing.
                </p>
                <p>
                  “Adenoids, like the tonsils, usually enlarge in children between the ages of 2-6,” Dr. Bhardwaj explains. “By the time the kids are 12 years old, the adenoids tend to gradually reduce in size.”
                </p>
               
              </div>
            </div>

            
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={Image1}
                className="img-fluid wow fadeInRight"
                alt="sinusitis-symptoms"
              />
            </div>
            <div className="col-xl-12 px-xl-4 mt-4">
            <p>
                  A persistent issue with an adenoid needs to be looked at more closely. “The problem with the adenoid is that because it sits behind the nose, it obstructs the nasal passage, causing snoring and mouth breathing in the child,” says Dr. Bhardwaj.
                </p>
                <p>
                  Additionally, an enlarged adenoid can cause fluid build-up in the middle ear. “It blocks the eustachian tube opening and prevents the middle ear from being ventilated, so the fluid builds up,” he explained further.
                </p>
                <p>
                  Sometimes, enlarged adenoids can develop into a condition known as adenoid facies, where a child’s face becomes long, and the child breathes through an open mouth.
                </p>
                <p>
                  Tripti’s daughter was started on an intranasal medicine to curb the adenoid enlargement, which did help her recover. If the intranasal medicine does not work over a period of time, then doctors advise surgery.
                </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="section-title main-title">
            Final Advice from Dr. Bhardwaj
          </h2>
          <div className="content">
            <p>
              Both Mahima and Tripti were able to have their children treated in the appropriate manner because they consulted with their doctor. However, sometimes we see parents who self-medicate their children with antibiotics, which Dr. Bhardwaj warns against doing.
            </p>
            <p>
              “Parents must understand they can’t start their kids on antibiotics at the first sign of a cold or a sore throat,” he says. “Antibiotics should be taken only when prescribed by the doctor.” Remember, they are rarely required for simple sore throats or a cold.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinusitisDifficulties;