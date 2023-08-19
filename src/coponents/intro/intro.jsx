import "./intro.css"


const Intro = () => {
    return (
        <div className="i">
            
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is </h2>
                    <h1 className="i-name">Kiran Ghale</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Enthusiast</div>
                            <div className="i-title-item">Traveller</div>
                        </div>
                    </div>
                    <p className="i-desc">
                    My academic background in computer engineering equips me with the technical prowess necessary for innovation and problem-solving. My passion for sports translates into teamwork, discipline, and a competitive spirit that I bring to any collaborative effort. The love for adventure fuels my drive to tackle complex challenges with creativity and resilience. Combined with my dedication, these traits form a comprehensive profile that I believe would make a valuable contribution to any team.


                        </p>
                    <button class="btncv"><a href="./images/kiran_ghale_CV.pdf">Download CV</a></button>
                </div>
                {/* <svg 
                    width="75"
                    height="75"
                    fill="none"
                    stroke="black"

                    className="i-scroll"
                    xmlns="http://www.w3.org/200/svg"
                    >
                    <g id="scroll">
                        <path
                        id="Vector"
                        d="M40.5 15L34.5 9L28.5 15"
                        stroke-width="2.9895"
                        stroke-miterlimite="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        />
                        <g id = "Group_2">
                        <path
                        id="Vector_5" 
                        d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5"
                        stroke-width="3"
                        stroke-miterlimite="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        />
                        </g>

                    </g>
                    

                    </svg> */}

            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src= "/images/snap.jpg" className="i-img"/>
            </div>

        </div>
    )
}

export default Intro