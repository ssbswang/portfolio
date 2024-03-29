import React, { Component } from 'react';
import './index.scss';
import ritual from './logo/ritual.jpeg';
import kira from './logo/kira.svg';
import teradata from './logo/teradata.png';
import skymattix from './logo/skymattix.png';
import fgg from './logo/fgg.jpeg'
import patrick from './logo/patrick.png';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

export default class Work extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  render() {
    return (
          <div ref={this.myRef}>
            <h1>Work</h1>
            <Controller>
              <Scene triggerHook="1" triggerElement="this" duration="200%">
                <Timeline>
                  <Tween
                      duration="0.1"
                      from={{
                        top: '5%',
                        scale: 0.90,
                        yPercent: 40
                      }}
                      to={{
                        top: '0%',
                        scale: 1,
                        yPercent: 20
                      }}>
                    <div className="work-row">
                      <div className="work-company">
                        <img className="work-logo" src={ritual} style={{ padding: "0px 50px 10px 30px"}}/>
                        <div style={{ padding: "20px 0px 0px 0px"}}>Ritual Co<span className="work-time"> 2021-present</span></div>
                        <span className="work-title">
                          Software Engineer III
                        </span>
                      </div>
                    </div>
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>
            <Controller>
              <Scene triggerHook="1" triggerElement="this" duration="200%">
                <Timeline>
                  <Tween
                      duration="0.2"
                      from={{
                        top: '5%',
                        scale: 0.95,
                        yPercent: 60
                      }}
                      to={{
                        top: '0%',
                        scale: 1,
                        yPercent: 10
                      }}>
                    <div className="work-row">
                      <div className="work-company">
                        <img className="work-logo" src={kira} style={{ paddingRight: "40px"}}/>
                        <div>Kira Systems<span className="work-time"> 2019-2021</span></div>
                        <span className="work-title">
                          Intermediate Quality Engineer
                        </span>
                      </div>
                    </div>
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>

            <Controller>
              <Scene triggerHook="1" triggerElement="this" duration="200%">
                <Timeline>
                  <Tween
                      duration="0.8"
                      from={{
                        top: '0%',
                        scale: 0.95,
                        yPercent: 100
                      }}
                      to={{
                        top: '0%',
                        scale: 1,
                        yPercent: -10
                      }}>
                    <div className="work-row">
                      <div className="work-company">
                        <img className="work-logo" src={teradata} style={{paddingRight: "18px"}}/>
                        <div>Teradata<span className="work-time"> 2017-2019</span></div>
                        <span className="work-title">
                          Software Engineer II
                        </span>
                      </div>
                    </div>
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>

            <Controller>
              <Scene triggerHook="1" triggerElement="this" duration="200%">
                <Timeline>
                  <Tween
                      duration="1.4"
                      from={{
                        top: '0%',
                        scale: 0.95,
                        yPercent: 130
                      }}
                      to={{
                        top: '0%',
                        scale: 1,
                        yPercent: -30
                      }}>
                    <div className="work-row">
                      <div className="work-company">
                        <img className="work-logo" src={skymattix} style={{paddingRight: "0px"}}/>
                        <div style={{paddingTop: "5px"}}>Skymattix<span className="work-time"> 2019-present</span></div>
                        <span className="work-title" style={{paddingTop: "0px"}}>
                          Technology Consultant
                        </span>
                      </div>
                    </div>
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>

            <Controller>
              <Scene triggerHook="1" triggerElement="this" duration="200%">
                <Timeline>
                  <Tween
                      duration="2"
                      from={{
                        top: '0%',
                        scale: 0.95,
                        yPercent: 180
                      }}
                      to={{
                        top: '0%',
                        scale: 1,
                        yPercent: -50
                      }}>
                    <div className="work-row">
                      <div className="work-company">
                        <img className="work-logo" src={fgg} style={{padding: "0 20px 0px 20px"}}/>
                        <div style={{paddingTop: "3px"}}>Federation of Gay Games<span className="work-time"> 2019-present</span></div>
                        <span className="work-title">
                          Technology Volunteer
                        </span>
                      </div>
                    </div>
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>

            <Controller>
              <Scene triggerHook="1" triggerElement="this" duration="200%">
                <Timeline>
                  <Tween
                      duration="2.6"
                      from={{
                        top: '0%',
                        scale: 0.95,
                        yPercent: 180
                      }}
                      to={{
                        top: '0%',
                        scale: 1,
                        yPercent: -55
                      }}>
                    <div className="work-row">
                      <div className="work-company">
                        <img className="work-logo" src={patrick} style={{padding: "0px 20px 0px 20px"}}/>
                        <div style={{paddingTop: "10px"}}>Personal Projects<span className="work-time"> ongoing</span></div>
                        <span className="work-title">
                  <a href="https://github.com/ssbswang?tab=repositories" target="_blank" rel="noreferrer noopener" style={{textDecoration: "none", color: "dodgerblue"}}>MyMarketMix</a>
                  <a href="https://github.com/ssbswang?tab=repositories" target="_blank" rel="noreferrer noopener" style={{textDecoration: "none", color: "coral"}}>, Hermes</a>
                  <a href="https://github.com/ssbswang?tab=repositories" target="_blank" rel="noreferrer noopener" style={{textDecoration: "none", color: "orchid"}}>, this portfolio</a>
                </span>
                      </div>
                    </div>
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>

            <div style={{paddingBottom: "40px"}}>
            </div>
          </div>
    );
  }
}
