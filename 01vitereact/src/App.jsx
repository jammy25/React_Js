import MakingChai from "./chai"

function App() {

  return (
    <>
    <MakingChai/>
    <h2>We can only export one element in JSX, so to solve this and send more elements we wrap them all in div which is again one element only. This was so common that they change div to empty fragments for better usability.</h2>
    </>
  )
}

export default App