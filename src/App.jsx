import { driver } from 'driver.js'
import './App.css'
import 'driver.js/dist/driver.css'

function App() {

  const driverObj = driver({
    showProgress: 'true',
    steps: [
      {
        element: '.divcont', // The id or className of the div which you want to focous of highlight
        popover: {
          title: 'Lets go on a tour',
          description: 'Of our simple website'
        }
      },
      {
        element: '.box2',  // The id or className of the div which you want to focous of highlight
        popover: {
          title: 'Box2', // Title for the popover box
          description: 'Box Color Green, Text Black' // Description for the popover box
        }
      },
      {
        element: '.box3',  // The id or className of the div which you want to focous of highlight
        popover: {
          title: 'Box3', // Title for the popover box
          description: 'Box Color Red, Text White', // Description for the popover box
          side: "right", align: 'start'
        }
      },
      {
        element: '.box4',  // The id or className of the div which you want to focous of highlight
        popover: {
          title: 'Box4', // Title for the popover box
          description: 'Box Color Purple, Text white' // Description for the popover box
        }
      },
      {
        element: '.box1',  // The id or className of the div which you want to focous of highlight
        popover: {
          title: 'Box1', // Title for the popover box
          description: 'Box Color Black, Text white', // Description for the popover box
          side: "right", align: 'start'
        }
      },
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
