// import seriesData from '../src/api/seriesData.json'
// import { SeriesCard } from './components/SeriesCard';
// import { EventPropagation } from './components/EventPropagation';
import { LiftStateUp } from './components/LiftStateup';
// import './components/Netflix.module.css';
// import { DerivedState } from './components/hooks/DerivedState';
// import { State } from './components/hooks/State';
// import EventHandling from './components/EventHandling';
// import { EventProps } from './EventProps';

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
  {/* <EventHandling />                           Date:  20-11-24 */}
  {/* <EventProps />                              Date:  22-11-24 */}
  {/* <EventPropagation />                        Date:  24-11-24 */}
  {/* <State />                                   Date:  29-11-24 */}
  {/* <DerivedState />                            Date:  01-12-24 */}
  <LiftStateUp />
   </>
  );
};
export default App;



      



