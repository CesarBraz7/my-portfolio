import { useState, useEffect } from 'react';
import '../styles/Experience.css'
import Card from './Card'
import Dados from '../data/data.json'

const Experience = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Dados);
  }, []);
  

  return (
    <div id='main'>
      <div id="content">
        <h1>Experiências profissionais</h1>
        <div id="exp">
        {data.map(item => (
          <Card
            key={item.id}
            image={item.image}  
            title={item.title}
            role={item.role}
            description={item.description}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Experience