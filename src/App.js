import { useState, useMemo } from 'react'
import FriendsCard from "./components/FriendsCard";
import Name from "./components/Name";
import Ref from './components/Ref';
import Useeffect from './components/Useeffect';

function Children(props) {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  )
}
function App() {
  const [name, setName] = useState('');


  const handleName = (value) => {
    setName(value);
    console.log(name);
  }

  const Person = {
    name: 'Bruce',
    location: 'Gowtham'
  }

  const memoizedPerson = useMemo(() => Person, [])

  return (
    <>
      <Useeffect />
      <Ref />
      <Children>
        <p>Children Props Working</p>
      </Children>
      <h1>{name}</h1>
      <FriendsCard name="John" location="USA" isFriend={true} />
      <FriendsCard name='Doe' location="Australia" isFriend={false} />
      <FriendsCard location="Australia" isFriend={true} />
      <FriendsCard isFriend={true} />
      <FriendsCard name={memoizedPerson.name} location={memoizedPerson.location} />
      <Name handleName={handleName} />
    </>
  );
}
export default App;
