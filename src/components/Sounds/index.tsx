import React from 'react'

const Sounds: React.FC = () => (
  <audio style={{ display: 'none' }} controls autoPlay>
    <source src="swap.mp3" type="audio/ogg" />
  </audio>
)

export default Sounds
