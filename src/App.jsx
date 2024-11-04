import seriesData from '../src/api/seriesData.json'
import { SeriesCard } from './components/SeriesCard';
const App = () => {
  return(
    <>
   <ul> 
    {seriesData.map((curElem) => {
    return <SeriesCard key ={curElem.id} curElem={curElem} /> 
    })};
   </ul>
    </>  
  );
};
export default App;



      



