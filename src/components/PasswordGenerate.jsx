export function PasswordGenerate({password, setPassword}){
  return (
    <>
           <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Generated Password:</label>
            <input type="text" id="password" name="password" readOnly className="w-full px-3 py-2 border mt-1 rounded-md" 
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            />
        </div>
    </>
  )
}

export default PasswordGenerate