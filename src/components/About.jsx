import React, { useRef } from "react";

const About = () => {
  const aboutRef = useRef();

  return (
    <div className="h-screen text-gray_text">
      <p>
        <br />
        My journey into the world of web development began with a fascination
        for how technology can transform ideas into interactive and beautiful
        web interfaces. Over the years, I've honed my skills to not only meet
        the industry's best practices but also to stay ahead of the
        ever-evolving web landscape. <br />
        <br />
        When not coding, I practice my guitar skills, immersing myself in a good
        book, or tinkering with personal coding projects. I believe that a
        well-rounded life is essential for fostering creativity and innovation.{" "}
        <br />
        <br />
        Let's work together to bring your ideas to life!Feel free to reach out
        and let's embark on a journey to build something exceptional
        together.Thank you for visiting my corner of the web, and I look forward
        to connecting with you to discuss how we can create remarkable digital
        experiences.
      </p>
    </div>
  );
};

export default About;
