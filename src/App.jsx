
// Now i simple work in react create a function then return in 5 divs. 
const App = () => {
  return(
    <>
     {/* <div> 
       <div>
         <img src="vite.svg" alt="vite.svg" width="25%" />
       </div>
        <h2>Name: Queen Tears Of Korean</h2>
        <h3>Rating: 8.2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae perspiciatis rem odit eligendi et, est unde quo error ad quia. Minima, deserunt delectus. Nostrum doloremque magni perferendis sint eos vitae quaerat minus illum nam libero, itaque expedita officiis nihil laborum, praesentium suscipit rem. Expedita porro esse impedit ea. Tenetur.</p>
        </div>
        
          Now i comment all divs and simply call a component only...
                  Component your work Easy */}
{/* 
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries /> */}

      <AnimeArt />
   
        </>
  )
}

// Now work easy so i use components in react 
// first i create a component, and made a component in Pascal case

// const NetflixSeries = () => {
//   return(
//     <div> 
//   <div>
//     <img src="vite.svg" alt="vite.svg" width="25%" />
//   </div>
//    <h2>Name: Queen Tears Of Korean</h2>
//    <h3>Rating: 8.2</h3>
//    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae perspiciatis rem odit eligendi et, est unde quo error ad quia. Minima, deserunt delectus. Nostrum doloremque magni perferendis sint eos vitae quaerat minus illum nam libero, itaque expedita officiis nihil laborum, praesentium suscipit rem. Expedita porro esse impedit ea. Tenetur.</p>
//    </div>

 // i commit this but scroll down same work with the dynamics values   
//   );
// };


// Now use dynamic values in react.
// how to use dynamic values in react ? so it's easy i use javascript in react so i also used this curly braces only {} i use curly braces so i enter javascript world.

// const NetflixSeries = () => {
//   const name = "Queen Tears Of Korean" ;
//   const rating = 8.2 ;
//   const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae perspiciatis rem odit eligendi et, est unde quo error ad quia. Minima, deserunt delectus. Nostrum doloremque magni perferendis sint eos vitae quaerat minus illum nam libero, itaque expedita officiis nihil laborum, praesentium suscipit rem. Expedita porro esse impedit ea. Tenetur."

//   const returnGenre = () => {
//      const genre = "Romcop And Honey";
//     return genre;
//   };

//   return(
//     <div> 
//   <div>
//     <img src="vite.svg" alt="vite.svg" width="11%" />
//   </div>
//    <h2>Name: {name}</h2>
//    <h3>Rating: {rating}</h3>
//    <p> <b>Summary</b> : {description} </p>
//    <p><b>Genre: </b>{ returnGenre() }</p>
//     <hr />
//    </div>

   
//   );
// };


//  Now Today Learn How To Use 
//  Conditional Values In JSX


const AnimeArt = () => {
  const name = 'DBZ🥰';
  const image =  <img src="anime.jpeg" alt="" width="30%" />
  const description  = 'Lorem ist piece gist.'
  const age = 15 
  

    return(                   
        <>                                                 
      <h1>Name : {name}</h1>                               
      <h1>Description : {description}</h1>                               
      <div>
        {image}
      </div>
      <button>{age >= 18 ? "Adults Watch now" : "Minors are not available" }</button>
      </>
      
    );
  };

export default App;
