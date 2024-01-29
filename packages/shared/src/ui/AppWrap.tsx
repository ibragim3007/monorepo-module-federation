import React from "react";

interface AppWrapProps {
  children: React.ReactNode;
}

const AppWrap: React.FC<AppWrapProps> = ({ children }) => {
  return <div style={{ backgroundColor: "black" }}>{children}</div>;
};

export default AppWrap;
