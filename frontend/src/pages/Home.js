import React, { useEffect } from "react";
import AppLayout from "../components/layout/AppLayout";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return <div>Home</div>;
}

export default AppLayout()(Home);
