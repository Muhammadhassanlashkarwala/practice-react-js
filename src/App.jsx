// import seriesData from '../src/api/seriesData.json'
// import { SeriesCard } from './components/SeriesCard';
import { EventPropagation } from './components/EventPropagation';
import './components/Netflix.module.css';
// import EventHandling from './components/EventHandling';
import { EventProps } from './EventProps';

const App = () => {
  return(
    <>
    {/* <section className='container'>
   <ul className='grid grid-three--cols'> 
    {seriesData.map((data) => {
    return <SeriesCard key ={data.id} curElem={data} /> 
  })};
   </ul>
    </section>   */}
  {/* <EventHandling /> */}
  {/* <EventProps /> */}
  <EventPropagation />
  </>
  );
};
export default App;



      



