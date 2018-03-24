import React from 'react';
import HomeImageSection from '../components/HomeImageSection'
import HomeContentSection from '../components/HomeContentSection'

const Home = () => {
  return (
    <div className="ContentBox">    	
    	<HomeImageSection/>
		<HomeContentSection/>
    </div>
  )
}

export default Home;