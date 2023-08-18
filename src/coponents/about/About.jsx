import"./About.css"

const About= ()=>{
    return(
        <div className="a">
            
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="images/kiran.jpg" className="a-img" alt="kiran"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                My proficiency extends beyond mere code; I pride myself on my ability to empathize with users and tailor my creations to meet their needs seamlessly. Collaboration is second nature to me, as I relish the opportunity to work in multidisciplinary teams, where my skills harmoniously merge with others' to create exceptional results. Detail-oriented and dedicated, I approach every project with a meticulous eye, ensuring that even the smallest elements contribute to a cohesive and polished final product.
                </p>
                <p className="a-desc">
                Web design involves creating the visual elements and overall aesthetics of a website, including layout, color schemes, typography, and images. It focuses on user experience and ensuring that the design elements are appealing, intuitive, and consistent across different devices.
                </p>
                <div className="a-award">
                    <img src="/images/award.jpg" className="a-award-img"/>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Website Design</h4>
                        <p className="a-award-desc">
                        Web design involves creating the visual elements and overall aesthetics of a website, including layout, color schemes, typography, and images. It focuses on user experience and ensuring that the design elements are appealing, intuitive, and consistent across different devices.!
                        </p>
                    </div>
                </div>
            </div>

            </div>
    )
}
export default About