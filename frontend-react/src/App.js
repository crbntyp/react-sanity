import {useState, useEffect} from 'react'

import ProfileIcon from './components/profile/ProfileIcon';

const App = () => {
  
  const [charData, setCharData] = useState([])

  useEffect(() => {
    fetch(`https://EU.api.blizzard.com/profile/user/wow?namespace=profile-EU&locale=en_GB&access_token=EUEQPNA3VIT6dhaqPOPzzp6WuLQM8rv80t`)
      .then((response) => response.json())
      .then((dataBlob) => setCharData(dataBlob.wow_accounts[0].characters))
      .catch((err) => {
        console.log(err.message);
      });
  }, [] );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {charData
        .filter(server => server.realm.slug === 'tarren-mill' || server.realm.slug === 'silvermoon')
        .filter(level => level.level > 1)
        .map(char => (
          <div className="profile-icon">
            <ProfileIcon  style={{'width': '100%'}}
              race={char.playable_race.name} 
              gender={char.gender.name} 
              character={char.name}
              server={char.realm.slug}
              faction={char.faction.name}
              characterClass={char.playable_class.name}
              level={char.level}
            />
            {char.id}
          </div>
        ))}
    </div>
  );
}

export default App;