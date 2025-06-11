import { useEffect } from "react";

const CounterSection = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".timer");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-to");
        const speed = +counter.getAttribute("data-speed");
        let count = 0;
        const increment = target / (speed / 100);
        const interval = setInterval(() => {
          count += increment;
          if (count >= target) {
            counter.innerText = target;
            clearInterval(interval);
          } else {
            counter.innerText = Math.ceil(count);
          }
        }, 100);
      };
      updateCount();
    });
  }, []);

  return (
    <section
      className="counter pt-0 pb-0 mb-4"
      style={{ backgroundColor: "#239857", padding: "48px 0" }}>
      <div className="container">
        <div className="row text-center pq-counter-45">
          {[
            { to: 30, description: "Years of Experience", icon: "🎖" },
            { to: 40, description: "Daily OPD", icon: "👨‍⚕️" },
            { to: 100000, description: "Happy Patients", icon: "🏥" },
            { to: 4.9, description: "Google Reviews Rating", icon: "🌟" },
          ].map((item, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6 ${
                index > 0 ? "mt-4 mt-lg-0 mt-md-0" : ""
              }`}
              style={{ color: "white" }}>
              <div className="pq-counter pq-style-2">
                <div className="pq-counter-contain">
                  <div className="pq-counter-info">
                    <div className="pq-counter-num-prefix">
                      <h2
                        className="timer"
                        data-to={item.to}
                        data-speed="5000"
                        style={{ fontSize: "24px", fontWeight: "bold" }}>
                        {item.icon} {item.to}
                      </h2>
                      <span className="pq-counter-prefix">+</span>
                    </div>
                    <p
                      className="pq-counter-description"
                      style={{ fontSize: "16px", marginTop: "5px" }}>
                      {item.description}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection; 
