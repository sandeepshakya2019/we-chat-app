import React, { useEffect } from "react";
import AppLayout from "../components/layout/AppLayout";

function Chat() {
  useEffect(() => {
    document.title = "Chat || Sandeep";
  }, []);
  return <div>Chat</div>;
}

export default AppLayout()(Chat);
