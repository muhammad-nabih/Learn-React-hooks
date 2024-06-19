import React from "react";
import { useRef } from "react";

export const Ref = () => {
  const listRef = useRef([]);
  const items = ["item1", "item2", "item3"];
  const sections = ["section1", "section2", "section3"];

  const handleScroll = (index) => {
    listRef.current[index].scrollIntoView({ behavior: "smooth" });
  };
  // Style For Component
  const sectionStyle = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    width: "300px",
    height: "300px",
    backgroundColor: "orange",
    fontWeight: "bold",
    fontSize: "70px",
    display: "grid",
    placeContent: "center",
  };

  const itemsStyle = {
    padding: "20px",
    width: "140px",
    height: "140px",
    fontWeight: "bold",
    fontSize: "40px",
    listStyle: "none",
    cursor: "pointer",
  };

  return (
    <>
      <nav>
        <ul>
          {items.map((item, index) => {
            return (
              <li
                key={index}
                style={itemsStyle}
                onClick={() => handleScroll(index)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </nav>

      {sections.map((section, index) => {
        return (
          <section
            key={index}
            style={sectionStyle}
            ref={(ele) => (listRef.current[index] = ele)}
          >
            {section}
          </section>
        );
      })}
    </>
  );
};
