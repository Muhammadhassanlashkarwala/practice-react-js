

export const SeriesCard = ({ curElem, key }) => {
    // console.log(curElem);
    return(
        <li key={key}>
    <div>
        <img src={curElem.image_url} width="40%" height="40%" alt="vite.svg" />
      </div>
       <h1>Name: {curElem.name}</h1>
       <h3>Rating: {curElem.rating}</h3>
       <h3>Description: {curElem.description}</h3>
       <h3>Cast: {curElem.cast}</h3>
       <h3>Genre: {curElem.genre}</h3>
    </li>
    );
};



