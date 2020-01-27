import React from 'react';
import { Link, Events } from 'react-scroll'

export default class Sidebar2 extends React.Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                <li><Link activeClass="active" className="test0" to="test0" spy={true} smooth={true} duration={500} >Introduction</Link></li>
                  <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Chapter 1</Link></li>
                  <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Chapter 2</Link></li>
                  <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Chapter 3</Link></li>
                  <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Chapter 4</Link></li>
  
                </ul>
              </div>
            </div>
          </nav>
      </div>
    );
  }
};


