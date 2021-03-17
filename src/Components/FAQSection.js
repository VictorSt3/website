import React from "react";

const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>This is how you start</p>
        </div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>This is our schedule </p>
        </div>
      </div>
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>We accept these payment methods</p>
        </div>
      </div>
      <div className="question">
        <h4>What products do we offer?</h4>
        <div className="answer">
          <p>We offer the best products</p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
