import React from "react";

const Container = ({ children, className }) => {
  return (
    <section className={`w-full max-w-screen-xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Container;
