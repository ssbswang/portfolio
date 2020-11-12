import React, { Component } from 'react';
import './index.scss';
import rugby from './img/rugby.jpg';
import noodle from './img/noodle.jpg';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

export default class About extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <h1>About</h1>
          <div className="about-row">
            <p>
              My name is Shu Qing Wang, but you can just call me Shu. Originally from China,
              I immigrated to to 🇨🇦 at the age of 13.
              After completing my Master's degree, I've been putting my skills in
              engineering and software'ing into practice for the past years in fields
              like database, web services and machine learning. <br/><br/>

              I strive to create concise and well-thought solutions that surprise
              and delight 💾 compilers, while keeping other complex dependencies in mind
              such as scalability and integration for future-proofing. I've worked with numerous agile
              and cross-functional teams on projects from
              small bug fixes to larger integration projects spanning the lifecycles of
              years to come.<br/><br/>

              Depending on the team, resources and deliverables I've worn many hats over
              the years - holding responsibilities like cutting releases, integrating
              DevOps pipeline, as well as performing development and QA delegations 🎩 <br/>
            </p>
          </div>

          <div className="about-row">
            <Controller>
              <Scene triggerHook="1" triggerElement="this" duration="200%">
                <Timeline>
                  <Tween
                      duration="3"
                      from={{
                        scale: 0.6
                      }}
                      to={{
                        scale: 1
                      }}>
                    <img src={rugby} />
                    <p>
                      In my spare time, I can often be found playing rugby 🏉 somewhere within Ontario.
                      My favourite part of the sport is the adrenaline rush, especially when tackling
                      bigger guys! I rotate playing between two clubs, Muddy York RFC and Toronto
                      Nomads RFC as they offer different levels of competitiveness, with first one being
                      municipal and latter being provincial. I also visit gym often, to not only maintain
                      my physique but also push my physical limits to greater heights.
                    </p>
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>

          </div>

          <div className="about-row">
            <Controller>
              <Scene triggerHook="1" triggerElement="this" duration="200%">
                <Timeline>
                  <Tween
                      duration="8"
                      from={{
                        scale: 0.3
                      }}
                      to={{
                        scale: 1
                      }}>
                    <img src={noodle} />
                    <p>
                      I am also a foodie, or more specifically an amateur competitive eater! On the left
                      is a photo of me winning the grand prize after consuming a bowl of fire noodles
                      in less than 16 seconds. I have also participated in the Go Chuck Yourself challenge,
                      which involves devouring a burger consisting of 6 patties+cheese+bacon plus a milkshake,
                      all in less than 6 minutes. My favourite food is sushi and cheesecake 😋
                    </p>
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>
          </div>
        </div>
    );
  }
}
