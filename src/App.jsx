import { useState } from "react";
import { Input } from "./components/Input";

function App() {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };


  return (
    <div>
      <Input defaultValue={value} onChange={handleInputChange} />
    </div>
  );
}

export default App;

