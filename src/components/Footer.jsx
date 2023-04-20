import React from 'react'
import Container from 'react-bootstrap/Container'
import "../App.css"

const Footer = () => {
  return (
    <div>
      <footer id="footer" className='pt-4 border-top'>
        <Container>

          <div className='footer_contact'>
            <p><img src="./img/geo.png" className='footer_logo'/> г. Челябинск, пр. Ленина, 35, офис 230</p> 
            <p><img src="./img/email.png" className='footer_logo'/> frivalo.mebel@bk.ru</p>   
            <p><img src="./img/phone.png" className='footer_logo'/> 8-800-000-00-00</p>
          </div>    

          <div className='footer_pay'>
            <img src="./img/payment.png" className='footer_logo'/>
          </div>  

        </Container>      
      </footer>
    </div>
  )
}

export default Footer