import logo from './logo.svg';
import './App.css';
function getFullName(item) {
  return [<h1>{item.name}</h1>, <img src={item.img} alt="lion" width="600" height="400"></img>]
}
const persons=[{
  name:"1.Iguazu Falls,Argentina/Brazil",
  img:"https://www.planetware.com/wpimages/2020/03/world-most-beautiful-waterfalls-iguazu-falls.jpg"
},

  {
     name:"2.Victoria Falls, Zimbabwe/Zambia",
     img:"https://www.planetware.com/wpimages/2020/03/world-most-beautiful-waterfalls-victoria-falls.jpg"
  },
  {
     name:"3.Angel Falls, Venezuela",
     img:"https://www.planetware.com/wpimages/2020/03/world-most-beautiful-waterfalls-angel-falls.jpg"
  },
  {
     name:"4.Niagara Falls, USA/Canada",
     img:"https://www.planetware.com/wpimages/2020/03/world-most-beautiful-waterfalls-niagara-falls.jpg"
  },
  
  {
     name:"5. Havasu Falls, Arizona, USA",
     img:"https://www.planetware.com/wpimages/2020/03/world-most-beautiful-waterfalls-havasu-falls.jpg"
  },  
]
const per=persons.map(getFullName);
function App() {
  return (
    <div className='mystyle'>
      <h1>Top 5 waterfalls</h1>
      {per}
    </div>
  );
}

export default App;