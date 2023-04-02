import React, { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className="container mx-auto">{children}</div>;
};

export default MainLayout;
