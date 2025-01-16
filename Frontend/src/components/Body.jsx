import React from 'react'
import Plantify from './Plantify'
import PlantBenifits from './PlantBenifits'
import PlantFriends from './PlantFriends'

const Body = () => {
  return (
    <div className='mt-24'>
        <Plantify></Plantify>
        <PlantBenifits></PlantBenifits>
        <PlantFriends></PlantFriends>
    </div>
  )
}

export default Body