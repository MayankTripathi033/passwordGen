import { useState, useCallback, useEffect, use } from 'react'
import Lengthslider from './components/Lengthslider';
import CheckBoxes from './components/CheckBoxes';
import PasswordGenerate from './components/PasswordGenerate';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState(""); 

  const generatePassword = useCallback(() => {
    let password = "";
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charactersLength = characters.length;

    if(numberAllowed){
      characters += '0123456789';
      charactersLength += 10;
    }
    if(characterAllowed){
      characters += '!@#$%^&*()_+';
      charactersLength += 14;
    }

    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    setPassword(password);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  },[length, numberAllowed, characterAllowed, generatePassword])
  
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center">
    <div className="max-w-lg w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Password Generator</h2>
        {/*Length Slider */}
       <Lengthslider 
       length={length} 
       setLength={setLength}/>

        {/*Checkboxes */}
       <CheckBoxes 
       characterAllowed={characterAllowed} 
       numberAllowed={numberAllowed}
       setCharacterAllowed={setCharacterAllowed}
       setNumberAllowed={setNumberAllowed}
       />

       {/*Password Generate*/}
        <PasswordGenerate 
        password={password} 
        setPassword={setPassword}/>

        <button id="generateBtn" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleCopy}
        >Copy</button>
    </div>
    </div>
    </>
  )
}

export default App
