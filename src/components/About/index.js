//need to import React to every react file
import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

// name of compononet should be the function name
function About() {
  return (
    //REACT components must always return a single parent JSX element
    <section className="my-5">
      <h1 id="about">Who am I?</h1>

      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

//export the component
export default About;
