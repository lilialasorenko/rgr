import React from 'react'
import Layout from '../../Components/Layout/Layout'

import "./Contacts.css"
import ContactsContainer from '../../Components/ContactsContainer/ContactsContainer'

const url = 'https://www.google.com/maps/place/%D0%9E%D0%BA%D1%81%D1%84%D0%BE%D1%80%D0%B4+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82/@51.7544413,-1.2586917,16z/data=!4m14!1m7!3m6!1s0x4876c6a9ef8c485b:0xd2ff1883a001afed!2z0J7QutGB0YTQvtGA0LQg0YPQvdC40LLQtdGA0YHQuNGC0LXRgg!8m2!3d51.7548164!4d-1.2543668!16zL20vMDd0Z24!3m5!1s0x4876c6a9ef8c485b:0xd2ff1883a001afed!8m2!3d51.7548164!4d-1.2543668!16zL20vMDd0Z24?entry=ttu'

const toMap = () => {
  window.open(url, '_blank');

}

const Contacts = () => {
  return (
    <Layout>
      <div className='contacts_page_cont'>
        <ContactsContainer/>
        <div className='map_img_container'>
          <img className="map_img" src="img/map.jpg" onClick={() => toMap()}/>
        </div>
      </div>
    </Layout>
  )
}

export default Contacts
