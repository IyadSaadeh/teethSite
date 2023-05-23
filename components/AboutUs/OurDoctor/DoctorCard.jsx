import React from 'react'
import {BsTwitter,BsLinkedin,BsInstagram} from "react-icons/bs"

const DoctorCard = ({data}) => {
    
  return (
    <div class="team-member">
              <div class="team-media">
                <img src={data.img} alt={data.title} ></img>
                
              </div>
              <div class="team-info">
                <div class="team-info-comntent">
                  <h4 class="title">{data.title}</h4>
                  <span class="text-secondary">{data.postion}</span>
                </div>
                <ul class="social-media">
                  <li>
                    <a style={{padding:'25%'}}
                      rel="noreferrer"
                      target="_blank"
                      href="https://twitter.com/"
                    >
                      <BsTwitter />
                    </a>
                  </li>
                  <li>
                    <a style={{padding:'25%'}}
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/"
                    >
                      <BsLinkedin/>
                    </a>
                  </li>
                  <li>
                    <a style={{padding:'25%'}}
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/"
                    >
                     <BsInstagram/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
  )
}

export default DoctorCard