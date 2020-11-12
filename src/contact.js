import React, { Component } from 'react';
import './index.scss';
import patrick from './logo/patrick-center.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg'

export default class Contact extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const card = document.querySelector(".card");
    const container = document.querySelector(".card-container");
    const info = document.querySelector(".info");
    const avatar = document.querySelector(".avatar");
    container.addEventListener("mousemove", e => {
      let xAxis = -(window.innerWidth/2-e.pageX)/15;
      let yAxis = (window.innerHeight/2-e.pageY)/35+80;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    container.addEventListener("mouseenter", e => {
      card.style.transition = "all 0.2s ease";
      avatar.style.transition = "all 0.3s ease";
      info.style.transition = "all 0.85s ease";
      avatar.style.transform = "translateZ(100px)"
      info.style.transform = "translateZ(120px)"
    });
    container.addEventListener("mouseleave", e => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      avatar.style.transform = "translateZ(0px)"
      info.style.transform = "translateZ(0px)"
    });
  }

  render() {
    return (
        <div>
          <h1>Contact</h1>
          <div className="container">
            <div className="card-container">
              <div className="card">
                <div className="sneaker">
                  <div className="circle"></div>
                  <img src={patrick} className="avatar" />
                </div>
                <div className="info">
                  <h1> Shu Wang</h1>
                  <h3>
                    <a href="mailto:theory.beta@gmail.com"
                       style={{color:"inherit", fontFamily:"inherit"}}><CgMail size={40} color="forestgreen"/></a>
                    <a href="https://www.linkedin.com/in/ssbswang"
                       target="_blank"
                       rel="noreferrer noopener"
                       style={{color:"inherit", fontFamily:"inherit"}}><FaLinkedin size={40} color="dodgerblue"/></a>
                    <a href="https://github.com/ssbswang"
                       target="_blank"
                       rel="noreferrer noopener"
                       style={{color:"inherit", fontFamily:"inherit"}}><FaGithub size={40} color="slateblue"/></a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
