import Marquee from "react-fast-marquee";

const Company = () => {

    const companies = [];

    return (
        <>
            <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
                className="skillsMarquee"
            >
                
            </Marquee>
        </>
    )
}

export default Company;