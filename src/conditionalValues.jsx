


function conditionalValue() {   
    const age = 15
  
    return( 
        <>
        if ({ age < 18 }) {
        <button>Not Available</button>
        };
        </>
    );
}
export default conditionalValue;