import { useRef } from "react";

export default function Ref() {
  const listRef = useRef([]);

  const handleScrollInto = (index) => {
    listRef.current[index].scrollIntoView({ behavior: "smooth" });
  };

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
    <div>
      <nav style={{ display: "flex" }}>
        {["item1", "item2", "item3"].map((item, index) => (
          <li
            key={index}
            style={itemsStyle}
            onClick={() => handleScrollInto(index)}
          >
            {item}
          </li>
        ))}
      </nav>{" "}
      <hr />
      {["section1", "section2", "section3"].map((item, index) => (
        <section
          key={index}
          style={sectionStyle}
          ref={(el) => (listRef.current[index] = el)}
        >
          {item}
        </section>
      ))}
    </div>
  );
}
