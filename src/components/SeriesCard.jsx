

export const SeriesCard = ({ curElem, key }) => {
    // console.log(curElem);
    return(
        <li key={key}>
    <div>
        <img src={curElem.image_url} width="30%" height="30%" alt="vite.svg" />
      </div>
       <h1>Name: {curElem.name}</h1>
       <h3>Rating: {curElem.rating}</h3>
       <p>Description: {curElem.description}</p>
       <p>Cast: {curElem.cast}</p>
       <p>Genre: {curElem.genre}</p>
    </li>
    );
};



