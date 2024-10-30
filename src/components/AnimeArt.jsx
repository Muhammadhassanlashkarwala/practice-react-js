//  Now Today Learn How To Use 
//  Conditional Values In JSX

export const AnimeArt = () => {
      
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
      <hr />
      </>
    );
};

export const Header = () => {
  return(
    <>
  <div>
      <h1>Hassan Logo</h1>
  </div>
  <div>
    <ul>
      <li>Home</li>
      <li>Contact</li>
      <li>About</li>
      <li>Service</li>
    </ul>
  </div>
  </>
  );
};