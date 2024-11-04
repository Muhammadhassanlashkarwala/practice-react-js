

export const SeriesCard = (props) => {
    console.log(props);
    return(
        <li key={props.key}>
    <div>
        <img src={props.curElem.image_url} width="40%" height="40%" alt="vite.svg" />
      </div>
       <h1>Name: {props.curElem.name}</h1>
       <h3>Rating: {props.curElem.rating}</h3>
       <h3>Description: {props.curElem.description}</h3>
       <h3>Cast: {props.curElem.cast}</h3>
       <h3>Genre: {props.curElem.genre}</h3>
    </li>
    );
};



