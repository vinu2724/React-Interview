import React, { useState } from "react";

const accordionData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript, used in React.",
  },
  {
    id: 3,
    question: "What are hooks?",
    answer:
      "Hooks let you use state and lifecycle features in functional components.",
  },
];

const Accordion = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id); // Toggle the active question
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "left" }}>
      <h2>FAQ</h2>
      {accordionData.map((item) => (
        <div
          key={item.id}
          style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
        >
          <button
            style={{
              width: "100%",
              background: "none",
              border: "none",
              textAlign: "left",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => toggleAccordion(item.id)}
          >
            {item.question} {activeId === item.id ? "▲" : "▼"}
          </button>
          {activeId === item.id && (
            <p style={{ marginTop: "5px", color: "gray" }}>{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
