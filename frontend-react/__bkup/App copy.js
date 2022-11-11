import React, {useEffect, useState} from 'react';

import ProfileIcon from './components/profile/ProfileIcon';

// const { BlizzAPI } = require('blizzapi');

// const api = new BlizzAPI({
//   region: 'eu',
//   clientId: '86af3b20703442e78f9a90778846ce3b',
//   clientSecret: 'xHpqmVAnuwV8DFcMQncEYxCio35MSUHq'
// });

// const data = await api.query('');

// console.log(data);

// import {
//   About,
//   Footer,
//   Header,
// } from './containers';

// import { Navigation } from './components/';

const App = () => {

  const [account, setAccount] = useState([])
  const [character, setCharacter] = useState([])
  const [guild, setGuild] = useState([])

  useEffect(() => {
    fetch(`https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_eb&access_token=EUEQPNA3VIT6dhaqPOPzzp6WuLQM8rv80t`)
     .then((response) => response.json())
     .then((actualData) => setAccount(actualData.wow_accounts[0].characters))
     .catch((err) => {
      console.log(err.message);
     });
   }, []);

   //console.log(account)

   useEffect(() => {
    fetch(`https://eu.api.blizzard.com/profile/wow/character/tarren-mill/swervë/equipment?namespace=profile-eu&locale=en_gb&access_token=EUEQPNA3VIT6dhaqPOPzzp6WuLQM8rv80t`)
     .then((response) => response.json())
     .then((chracterData) => setCharacter(chracterData.equipped_items))
     .catch((err) => {
      console.log(err.message);
     });
   }, []);


   //console.log(character)

   useEffect(() => {
    fetch(`https://eu.api.blizzard.com/data/wow/guild/tarren-mill/f-a-d-e/roster?namespace=profile-eu&locale=en_gb&access_token=EUEQPNA3VIT6dhaqPOPzzp6WuLQM8rv80t`)
     .then((response) => response.json())
     .then((guildData) => setGuild(guildData.members))
     .catch((err) => {
      console.log(err.message);
     });
   }, []);


   console.log(guild)

   const [wowClass, setWowClass] = useState([])

   useEffect(() => {
    fetch(`https://eu.api.blizzard.com/data/wow/playable-class/index?namespace=static-eu&locale=en_gb&access_token=EUEQPNA3VIT6dhaqPOPzzp6WuLQM8rv80t`)
     .then((response) => response.json())
     .then((classData) => setWowClass(classData.classes))
     .catch((err) => {
      console.log(err.message);
     });
   }, []);

   const [race, setRace] = useState([])

   useEffect(() => {
    fetch(`https://eu.api.blizzard.com/data/wow/playable-race/index?namespace=static-eu&locale=en_gb&access_token=EUEQPNA3VIT6dhaqPOPzzp6WuLQM8rv80t`)
     .then((response) => response.json())
     .then((raceData) => setRace(raceData.races))
     .catch((err) => {
      console.log(err.message);
     });
   }, []);

  return (
    <div className='bg-zinc-800 text-white flex flex-wrap gap-10'>

      {/* {account.filter(horde => horde.realm.slug === 'tarren-mill' && horde.faction.type === 'HORDE').map(char => (
        <>
          
          <div className="" key={char.id} onClick={() => console.log(`${char.name}`)}>
            <div>
                {char.name}
            </div>
            <div>{char.realm.slug}</div>
          </div>
        </>
        
      ))}
        <section>
        <h3>Swerve gear</h3>
        <ul>
          {character.map(quip => (
            <li>{quip.name}{quip.transmog ? ` - Mog: ${quip.transmog.item.name}` : ''}</li>
          ))}
        </ul>
        </section> */}
        
        <section className='w-full'>
        <ul className='w-full'>
          {guild.map(member => (
            <>
            <li className='m-4'><h2 className='font-bold bg-lime-400 p-2 text-gray-900'>{member.character.name} {member.character.id}</h2></li>
            {race
              .filter(filterRace => filterRace.id === member.character.playable_race.id)
              .map(mapRace => (
                <li className='m-4' key={mapRace.id}>Race: {mapRace.name}</li>
              ))
            }
            {wowClass
              .filter(filterClass => filterClass.id === member.character.playable_class.id)
              .map(mapClass => (
                <li className='m-4' key={mapClass.id}>Class: {mapClass.name}</li>
              ))
            }
            <hr />
            </>
          ))}
        </ul>
        </section>
    </div>
  );
}

export default App;