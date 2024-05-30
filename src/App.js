import './App.css';
import { Persons } from './components/Persons'
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [ persons, setPersons ] = useState([
    {
      id: 1,
      name: "Oscar Eduardo",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 2,
      name: "Carolina",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 3,
      name: "Catalina",
      role: "UI/UX Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar8.png",
    },
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    person.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='App'>
      <div className='container'>
        <input className="form-control mb-4" type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Buscar por nombre o rol" />
        <Persons persons={filteredPersons} setPersons={setPersons} />
      </div>
    </div>
  );
}

export default App;
