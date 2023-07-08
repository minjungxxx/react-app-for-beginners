
import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log('Hi :)')
    return () => console.log('Bye :(') // cleanup
  }, [])
  return <h1>Hello</h1>
}

function CleanupEx() {
  const [showing, setShowing] = useState(false)

  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default CleanupEx;
