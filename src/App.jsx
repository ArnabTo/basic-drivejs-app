import { driver } from 'driver.js'
import './App.css'
import 'driver.js/dist/driver.css'

function App() {

  const driverObj = driver({
    showProgress:'true',
    steps: [
      { element: '.divcont', popover: { title: 'Lets go on a tour', description: 'Of our simple website' } },
      { element: '.box2', popover: { title: 'Box2', description: 'Box Color Green, Text Black' } },
      { element: '.box3', popover: { title: 'Box3', description: 'Box Color Red, Text White', side: "right", align: 'start'} },
      { element: '.box4', popover: { title: 'Box4', description: 'Box Color Purple, Text white' } },
      { element: '.box1', popover: { title: 'Box1', description: 'Box Color Black, Text white', side: "right", align: 'start' } },
    ]
  });

  driverObj.drive();

  return (
    <>
      <div className='divcont'>
        <div className='box1'>Box1</div>
        <div className='box2'>Box2</div>
        <div className='box3'>Box3</div>
        <div className='box4'>Box4</div>
      </div>
    </>
  )
}

export default App
