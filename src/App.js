import React, { Component } from 'react';
import './index.scss';
import $ from 'jquery';
import Work from './work';
import About from './about';
import Contact from './contact';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollWork = this.scrollWork.bind(this);
    this.scrollAbout = this.scrollAbout.bind(this);
    this.scrollContact = this.scrollContact.bind(this);
  }

  componentDidMount() {
    // Sticky Header
    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
      } else {
        $('.main_h').removeClass('sticky');
      }
    });
    // Mobile
    $('.mobile-toggle').click(function() {
      if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
      } else {
        $('.main_h').addClass('open-nav');
      }
    });

    $('.main_h li a').click(function() {
      if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
      }
    });
  }

  scrollWork() {
    this.handleScroll(document.getElementById("work").getBoundingClientRect().top);
  }

  scrollAbout() {
    this.handleScroll(document.getElementById("about").getBoundingClientRect().top);
  }

  scrollContact() {
    this.handleScroll(document.getElementById("contact").getBoundingClientRect().top);
  }

  handleScroll(elementPosition) {
    const offset = 50;
    elementPosition = elementPosition - document.body.getBoundingClientRect().top;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  render() {
    return (
        <div>
            <header className="main_h">
              <div className="row">
                <a className="logo" href="#">
                  <img id="logo" src="https://drive.google.com/thumbnail?id=10nQBrC4xpUHAKi9wyLDe4sKUywgo8t0q" />
                </a>
                <div className="mobile-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <nav>
                  <ul>
                    <li onClick={this.scrollWork}>Work</li>
                    <li onClick={this.scrollAbout}>About</li>
                    <li onClick={this.scrollContact}>Contact</li>
                  </ul>
                </nav>
              </div>
            </header>
          <div className="row content ness">
            <div className="header-row" >Hi, I'm Shu <br></br></div>
            <div className="header-row">I’m an interdisciplinary <span className="black">software engineer</span> living in Toronto.
              Currently I work at <span className="black">Kira Systems</span>, transforming enterprises to use answers from their documents.</div>
          </div>
            <div className="row content">
              <div id="work">
                <Work/>
              </div>
              <div id="about">
                <About/>
              </div>
              <div id="contact">
                <Contact/>
              </div>
            </div>
        </div>
    );
  }
}
