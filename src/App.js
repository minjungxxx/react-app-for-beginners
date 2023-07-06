
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState('')
  
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)
  
  useEffect(() => {
    console.log('I run only once')
  }, []) // 처음 한번만 실행
  useEffect(() => {
    console.log("I run when 'keyword' changes.")
  }, [keyword]) // keyword가 변할때 실행
  useEffect(() => {
    console.log("I run when 'counter' changes.")
  }, [counter]) // counter가 변할때 실행
  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' changes.")
  }, [keyword, counter]) // keyword, counter가 변할때 실행

  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} 
        placeholder="Search here" 
        type="text"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
