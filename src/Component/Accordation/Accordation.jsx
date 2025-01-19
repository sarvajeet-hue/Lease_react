import React, { useState } from "react";
import "./Accordation.css"


const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active panel

  const panels = [
    { id: 1, title: "New Technology Stack", content: "Work on them until they are new!" },
    { id: 2, title: "Fun Filled Workplace", content: "Fun Filled Workplace" },
    { id: 3, title: "Learn to think like a leader", content: "Learn to think like a leader." },
    { id: 4, title: "Learning Continues", content: "Learning Continues." },
    { id: 5, title: "Flexibility and Benefits", content: "Flexibility and Benefits" },
  ];

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="reason2joinus">
          <h3>5 great reasons to join us</h3>
          <p>
            At <b>Leaseonclick</b>, we bring the culture of openness and autonomy to a new level,
            where each of our Mavens feels that their work is valued and trusted. We strive to make
            this a second home for our people, where learning never ends.
          </p>
        </div>
      </div>
      <div className="col-md-8">
        <div className="reason2joinus2">
          <div className="panel-group">
            {panels.map((panel, index) => (
              <div
                key={panel.id}
                className={`panel panel-default ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="panel-heading">
                  <h4 className="panel-title">
                    {/* <span
                      className={`faqs-number ${activeIndex === index ? "isactive" : ""}`}
                    >
                      {`0${panel.id}`}
                    </span> */}
                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span class={`faqs-number ${activeIndex === index ? "isactive" : ""}`}>{`0${panel.id}`}</span> 
                    </a>
                    {panel.title}
                  </h4>
                </div>
                <div
                  className={`panel-collapse collapse ${
                    activeIndex === index ? "in" : ""
                  }`}
                >
                  <div className="panel-body">{panel.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;



