

export const SeriesCard = ({ curElem, key }) => {
    // console.log(curElem);
    const btn_style = {padding:"2.5rem 2.4rem",
    margin:"1.5rem 0rem",
    border:"none",
    fontSize:"rem",
    color:"white",
    background:"#0062ff",
 }
    return(
        <li className="card" key={key}>
    <div>
        <img src={curElem.image_url} width="30%" height="30%" alt="vite.svg" />
      </div>
      <div className="card-content">
       <h1>Name: {curElem.name}</h1>
       <h3 style={{margin:"1.5rem 0"}}>Rating: {curElem.rating}</h3>
       <p>Summary: {curElem.summary}</p>
       <p>Cast: {curElem.cast}</p>
       <p>Genre: {curElem.genre}</p>
      <button
      style={btn_style}
      >{curElem.button}</button>
       </div>
    </li>

    );
};



