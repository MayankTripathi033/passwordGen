export default function CheckBoxes({characterAllowed, numberAllowed, setCharacterAllowed, setNumberAllowed}){
const handleCharacter = () => {
    setCharacterAllowed(!characterAllowed);
  }
const handleNumber = () => {
    setNumberAllowed(!numberAllowed);
  }
  return (
    <>
           <div className="mb-4">
            <label htmlFor="includeNumbers" className="flex items-center">
                <input type="checkbox" id="includeNumbers" name="includeNumbers" className="form-checkbox h-5 w-5 text-blue-500" value={numberAllowed} 
                onChange={handleNumber}/>
                <span className="ml-2 text-sm">Include Numbers</span>
            </label>
                    </div>
          <div className="mb-4">
            <label htmlFor="includeSymbols" className="flex items-center">
                <input type="checkbox" id="includeSymbols" name="includeSymbols" className="form-checkbox h-5 w-5 text-blue-500" 
                value={characterAllowed} onChange={handleCharacter}/>
                <span className="ml-2 text-sm">Include Symbols</span>
            </label>
        </div>
    </>
  )
}