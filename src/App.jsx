import seriesData from '../src/api/seriesData.json'
import { SeriesCard } from './components/SeriesCard';
import './components/Netflix.module.css';

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



      



