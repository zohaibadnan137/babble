"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        position: "top-right",
      }}
    />
  );
};

export default ToasterProvider;
