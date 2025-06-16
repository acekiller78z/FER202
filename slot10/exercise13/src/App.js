import React from "react";
import ValidatedInput from "./components/ValidatedInput";
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidatedLoginForm from "./components/ValidatedLoginForm";
import ValidatedFullForm from "./components/ValidatedFullForm";
function App() {
  return (
    <div className="App">
      
      <ValidatedInput />
      <ValidatedLoginForm />
      <ValidatedFullForm />
    </div>
  );
}

export default App;
