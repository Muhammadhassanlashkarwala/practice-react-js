import seriesData from '../src/api/seriesData.json'
import { SeriesCard } from './components/SeriesCard';

const App = () => {
  return(
    <section className='container'>
   <ul className='grid grid-three--cols'> 
    {seriesData.map((data) => {
    return <SeriesCard key ={data.id} curElem={data} /> 
    })};
   </ul>
   
    </section>  
  );
};
export default App;



      



