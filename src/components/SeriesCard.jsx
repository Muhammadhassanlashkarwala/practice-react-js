

export const SeriesCard = ({ curElem, key }) => {
    // console.log(curElem);
    // yaha hum variable yuh nh bana skate hen jeese btn-style ok hume yuh banana pare ga btn_style.
    // aur jab inline CSS pass kare gay tww hume ye khayaal rakhna h jis tarah hum css me likhte thee font-size, background-color, tww JSX me hum yuh nh likh skate hen balke humey camelCase me likhan pare ga, yuh fontSize, backgroundColor, fontWeight etc.
    
    const btn_style = {padding:"2.5rem 2.4rem",
    margin:"1.5rem 0rem",
    border:"none",
    fontSize:"rem",
    cursor:"pointer",
    color:"white",
    background: `${curElem.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`
 }
 const colorSetting = curElem.rating >= 8 ? "super_hit" : "average";         
    return(
        <li className="card" key={key}>
    <div>
        <img src={curElem.image_url} width="30%" height="30%" alt="vite.svg" />
      </div>
      <div className="card-content">
       <h1>Name: {curElem.name}</h1>
       <h3 style={{margin:"1.5rem 0"}}>
        Rating: 
       <span className={`rating ${colorSetting}`}>{curElem.rating}</span></h3>
       <p>Summary: {curElem.summary}</p>
       <p>Cast: {curElem.cast}</p>
       <p>Genre: {curElem.genre}</p>
      <button
      style={btn_style}
      ><span className={`rating ${colorSetting}`}>
        {curElem.button}
      </span>
      </button>
       </div>
    </li>

    );
};



