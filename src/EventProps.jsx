export function EventProps() {
    function HandleWelcomeUser(user) {
           alert(`Hey, ${user}`)
    }
    const HandleHover = () => {
        alert('Thanks for hovering me!')
    }
    return(
      <>
       <WelcomeUser ClickButton={() => HandleWelcomeUser("Hassan")} MouseEnter={() => HandleHover()} />
      </>
    )
}
const WelcomeUser = (props) => {
    const HandleGreeting = () =>{
      console.log(`Hey, I'm greeting function`)
        return props.ClickButton();
    }
  return(
    <div className="text-center mt-20">
    <button className="b-2 m-3  mt-20 px-2 py-8 text-4xl font-bold bg-purple-300 text-white" onClick={props.ClickButton}>Click</button> <br />
    <button className="b-2 m-20 px-2 py-8 text-4xl font-bold bg-pink-300 text-white" onMouseEnter={props.MouseEnter}>Hover me</button> <br />
    <button className="b-2 m-3 px-2 py-8 text-4xl font-bold bg-cyan-300 text-white"  onClick={HandleGreeting}>Greeting</button>
    </div>
  )
}



