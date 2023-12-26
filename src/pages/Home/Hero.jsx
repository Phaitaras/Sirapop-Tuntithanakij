import { Link } from "react-scroll";

export default function Hero() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello, I'm Sirapop</p>
                    <h1 className="hero--section--title">
                        Software Engineering
                        <br />
                        Student
                    </h1>
                    <p className="hero--section--description">
                        Aspiring Full-Stack Developer pursuing in
                        <br />
                        B.Eng. Software Engineering KMITL
                    </p>
                </div>
                <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Contact"
                    className="navbar--content"
                >
                    <button className="btn btn-primary">Get in Touch</button>
                </Link>
            </div>
            <div className="hero--section--img">
                <img src="./img/portrait2.png" alt="Hero Section" />
            </div>
        </section>
    );
}

