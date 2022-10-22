import React, {useState, useEffect} from 'react';
import {client} from '../../client';

const Navigation = () => {
    const [team, setTeam] = useState([])

    useEffect(() => {
      const query = '*[_type == "team"]';

      client.fetch(query)
        .then((data) => {
            setTeam(data);
        })
    }, [])
    

  return (
    <ul>
        {team.map(item => (
            <li key={`link-${item}`}>{item.firstName} {item.surname}</li>
        ))}       
    </ul>
  )
}

export default Navigation