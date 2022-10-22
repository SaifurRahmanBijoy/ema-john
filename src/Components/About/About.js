import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-center my-8 text-3xl font-serif">
      <h2>The info about us!</h2>
      <p>Welcome,{user?.email}</p>
    </div>
  );
};

export default About;
