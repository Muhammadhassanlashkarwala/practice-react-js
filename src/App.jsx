import seriesData from '../src/api/seriesData.json'
import { SeriesCard } from './components/SeriesCard';
import { Profile } from './components/Profile';
const App = () => {
  return(
    <>
   {/* <ul> 
    {seriesData.map((data) => {
    return <SeriesCard key ={data.id} curElem={data} /> 
    })};
   </ul> */}
   <Profile />
    </>  
  );
};
export default App;



      



