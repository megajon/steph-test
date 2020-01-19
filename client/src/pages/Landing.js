import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom';
import ProjectSecton from '../components/ProjectSection'
import InfoSection from '../components/InfoSection';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        }
        this.scrollToProfile = this.scrollToProfile.bind(this);
        this.scrollToWork = this.scrollToWork.bind(this);
        this.scrollToInfo = this.scrollToInfo.bind(this);
        this.slideForward = this.slideForward.bind(this);
        this.slideBackward = this.slideBackward.bind(this);

    }

    componentWillMount() {
        const renderSlides = async () => {
            let slides = await document.getElementsByClassName("app-panel");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[this.state.slideIndex].style.display = "block";
            slides[this.state.slideIndex].style.background = "silver";
        }
        renderSlides();
    }


    scrollToProfile = (e) => {
        e.preventDefault();
        document.querySelector('#section1-break').scrollIntoView({ behavior: 'smooth' });
    }

    scrollToWork = (e) => {
        e.preventDefault();
        document.querySelector('#section2-break').scrollIntoView({ behavior: 'smooth' });
    }

    scrollToInfo = (e) => {
        e.preventDefault();
        document.querySelector('#section3-break').scrollIntoView({ behavior: 'smooth' });
    }

    

    // currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    showSlides = async (n) =>  {
        
        let i;
        let slides = await document.getElementsByClassName("app-panel");
        // console.log(slides.length);
        // let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {await this.setState({slideIndex: 1})}
        if (n < 1) {this.setState({slideIndex: slides.length})}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "none");
        // }

        slides[this.state.slideIndex - 1].style.display = "block";
    }

    slideForward = (e, n = 1) => {
        e.preventDefault()
        console.log("slide forward");
        this.showSlides(this.state.slideIndex += n);
    }

    slideBackward = (e, n = -1) => {
        e.preventDefault()
        console.log("slide backward");
        console.log("From plusSlides - n: " + n);
        this.showSlides(this.state.slideIndex += n);
    }



    
    // showSlides(slideIndex);

    render() {

        return (
            <>
                <div id="invisible-header"></div>
                <div id="main-navbar">
                    <ul>
                        <li><button id="profile-button" onClick={this.scrollToProfile}><i className="fas fa-user icon" ></i></button></li>
                        <li><button id="work-button" onClick={this.scrollToWork}><i className="fas fa-briefcase  icon"></i></button></li>
                        <li><button id="info-button" onClick={this.scrollToInfo}><i className="fas fa-info-circle fa-10x icon"></i></button></li>
                    </ul>
                </div>
                <div id="first">
                    <h1 id="first-section"></h1>
                </div>
                <div id="title-page" className="section">
                    <div id="title" className="title">
                        <p>Jonathan C. Seubert</p><br></br>
                        <p>Creative Technologist</p>
                    </div>
                    <div id="link-to-profile">
                        <a href="#" onClick={this.scrollToWork}><i className="fas fa-chevron-circle-down next-section"></i></a>
                    </div>
                </div>
                <div id="section1-break" className="section-break"></div>
                <div id="green" className="section">
                    <div><h1 className="section-content">Green Section</h1></div>
                    <div id="green-content"><h1>Green Content</h1></div>
                </div>
                <div id="section2-break" className="section-break"></div>
                <div id="blue" className="section">
                    <div className="section-title"><h1>apps</h1></div>
                                               
                            <div id="stocktwits-panel" className="app-panel panel">
                                <a href="/stocktwits">
                                    <div className="panel-content">
                                        <p id="stocktwits-logo" className="stocktwits-content">$</p>
                                        <p id="stocktwits-title" className="stocktwits-content">Search Stocktwits</p>
                                    </div>
                                </a>
                            </div>   
                        
                        
                            <div id="green-panel" className="app-panel panel">
                                <div className="panel-content">
                                    <p>two</p>
                                </div>
                                <div className="panel-title">Panel Title</div>
                            </div>
                        
                        
                            <div id="blue-panel" className="app-panel panel">
                                <div className="panel-content">
                                    <p>three</p>
                                </div>
                                <div className="panel-title">Panel Title</div>
                            </div>
                        <div id="panel-controls">
                            <center>
                            <a href="#" id="prev" className="prev" onClick={this.slideBackward}><i className="fas fa-step-backward"></i></a>
                            <a href="#" id="next" className="next" onClick={this.slideForward}><i className="fas fa-step-forward"></i></a>
                            </center>
                        </div>
                    <center>
                    <div id="apps-next" className="next-icon">
                        <button id="app-section-next" onClick={this.scrollToInfo}><i className="fas fa-chevron-down"></i></button>
                    </div>
                    </center>
                </div>
                <div id="section3-break" className="section-break"></div>
                <div id="yellow" className="section">
                    <ProjectSecton />
                </div>
                <div id="section4-break" className="section-break"></div>
                <InfoSection />
            </>
        )
    }

}

export default Landing;

{/* <div>
                        <span className="dot" onClick={currentSlide(1)}></span> 
                        <span className="dot" onClick={currentSlide(2)}></span> 
                        <span className="dot" onClick={currentSlide(3)}></span> 
                    </div> */}