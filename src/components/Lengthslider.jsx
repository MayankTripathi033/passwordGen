export default function Lengthslider({length, setLength}){
          return (
            <>
          <div className="mb-4">
            <label 
            htmlFor="length" 
            className="block text-sm font-medium text-gray-700">Password Length: {length} </label>
            <input 
            type="range" 
            id="length" 
            name="length" 
            min="6" 
            max="24"  
            value={length}
            className="w-full 
            px-3 py-2 border mt-1 rounded-md" 
            onChange={(event)=>setLength(event.target.value)}
            />
        </div>
        </>
          )
}