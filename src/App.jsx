import seriesData from '../src/api/seriesData.json'
import { SeriesCard } from './components/SeriesCard';

const App = () => {
  return(
    <>
   <ul> 
    {seriesData.map((data) => {
    return <SeriesCard key ={data.id} curElem={data} /> 
    })};
   </ul>
   
    </>  
  );
};
export default App;



      



