import React from 'react';
import './about.css';
import arrow from './down-arrow.svg';
import Header from '../../components/header/Header';
import {Row, Col, Container} from 'react-bootstrap';
import men from './men.jpg';
import {Link} from 'react-scroll';

function About() {
    return (
        <div className='about'>
            <div className='img'>
                <div className='wrapper'>
                    <div className='scrollDown'>
                        scroll down to see more
                    </div>
                    <Link to='scroll'
                    smooth={true}
                    duration={1000}
                    >
                    <img className='arrow'
                        src={arrow}
                        alt='arrow'/>
                     </Link>   
                </div>
            </div>
            <Header fixed='none' color='grey'/>
            <Container>
            <Row id='scroll'>
                <Col md={6} className='col'>
                    <img
                    className='men'
                    src={men}
                    alt='men'
                    />
                </Col>
                <Col md={6}>
                    <h1>ABOUT ME</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <h3>Jason Wood</h3>
                </Col>
            </Row>
            <Row >
                <div  className='text-end'>
                    <div className='keepscr'>KEEP SCROLLING. THERE IS STILL MORE TO COME.</div>
                    <img className='arrow'
                        src={arrow}
                        alt='arrow'/>
                </div>
            </Row>
            </Container>
        </div>
    )
}

export default About;
