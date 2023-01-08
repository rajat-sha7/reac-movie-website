import React, { Component } from 'react'
import '../Footer/Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
           <p>@ 2022 Rajat Sharama</p>
           <div><i class="fa-solid fa-envelope"></i>  <i class="fa-brands fa-github"></i>  <i class="fa-brands fa-linkedin-in"></i>   <i class="fa-brands fa-facebook-f"></i>   <i class="fa-brands fa-instagram"></i></div>
      </div>
    )
  }
}
