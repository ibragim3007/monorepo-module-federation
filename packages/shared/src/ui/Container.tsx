import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div style={{ backgroundColor: "coral", borderRadius: 10, padding: 30 }}>
      <h1 style={{ color: "blue" }}>Микрофронт</h1>
      {children}
    </div>
  );
};

export default Container;
