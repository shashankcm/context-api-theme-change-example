import React from "react";
import "./langIndex.css";
import App from "./App";
import { LanguageProvider } from "./LanguageContext";

const Index = () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
export default Index;
