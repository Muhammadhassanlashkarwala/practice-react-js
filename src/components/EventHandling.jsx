// import '../components/EV.css'
function EventHandling() {
    function handleButtonClick(event) {
        alert(`hey, i'm onClick event! `)
    }
    function handleWelcomeUser(user) {
        alert(`Welcome ${user}`)
    }
    return(
        <div className="flex flex-col justify-center items-center mt-10">
        {/* Function components with named Functions */}
        <button className="b-2 m-4 px-2 py-8 text-4xl font-bold bg-yellow-300 text-white" onClick={handleButtonClick}>Click Me!</button>
        {/* Function components with fate aero Function */}
        <button className="b-2 m-4 px-2 py-8 text-4xl font-bold bg-yellow-300 text-white" onClick={(event) => handleButtonClick(event)}>Fate aero!</button>

        {/* Now i call again aero fate fucntion and i pass arguments on my function */}
        <button className="b-2 m-4 px-2 py-8 text-4xl font-bold bg-green-300 text-white" onClick={() =>handleWelcomeUser("Hassan")}>User Button!</button>
        </div>
    );
};
export default EventHandling;



