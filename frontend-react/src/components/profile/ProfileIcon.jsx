import {useState, useEffect} from 'react'

import Crest from './Crest';
import AllianceCrest from '../../assets/alliance-crest.png'
import HordeCrest from '../../assets/horde-crest.png'

const ProfileIcon = ({
  character,
  server,
  race,
  gender,
  characterClass,
  faction,
  level,
  ...rest
}) => {

  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    fetch(`https://eu.api.blizzard.com/profile/wow/character/${server}/${character.toLowerCase()}/character-media?namespace=profile-eu&locale=en_gb&access_token=EUEQPNA3VIT6dhaqPOPzzp6WuLQM8rv80t`)
      .then((response) => response.json())
      .then((dataBlob) => setMediaData(dataBlob.assets[1]))
      .catch((err) => {
        console.log(err.message);
      });
  }, [character, server]);

  return (
    <div className="profile-icon" {...rest}>
      <Crest media={faction === 'Alliance' ? AllianceCrest : HordeCrest} />
      <img style={{'width': '100%'}}
        src={mediaData.value} alt={`${race}, ${gender}`} title={`${race}, ${gender}`}
      />
      <h3 className="profile-icon__header"
      >
        {level} | {character} | {characterClass}
      </h3>
      <span 
        className="profile-icon__level" 
        style={{
        'border-color': `${faction === 'Alliance' ? '#1d4ed8' : '#991b1b'}`,
        'border-bottom-width': '2px',
        'border-style': 'solid'
      }}>
        
      </span>
    </div>
  )
}

export default ProfileIcon