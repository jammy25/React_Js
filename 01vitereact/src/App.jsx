import MakingChai from "./chai"

function App() {

  // Let's see how we can insert js and var inside, as we are doing with html
  // we write inside {} - our var
  // inside {} - we get EVALUATED EXPRESSION - we don't write JS here, instead we write the final outcome
  
  
  const username = 'chai aur code'
  return (
    <>
    <MakingChai/>
    <h2>We can only export one element in JSX, so to solve this and send more elements we wrap them all in div which is again one element only. This was so common that they change div to empty fragments for better usability.</h2>
    <p>test para {username}</p>
    </>
  )
}

export default App