import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-center my-8 text-md font-serif text-wrap">
      <h2>The information!</h2>
      <p>Welcome,{user?.email}</p>
    </div>
  );
};

export default About;
