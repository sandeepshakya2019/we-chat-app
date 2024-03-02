import React, { useEffect } from "react";
import AppLayout from "../components/layout/AppLayout";

function Group() {
  useEffect(() => {
    document.title = "Group || Group Name";
  }, []);
  return <div>Group</div>;
}

export default AppLayout()(Group);
