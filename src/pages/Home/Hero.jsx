export default function Hero() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello, I'm Sirapop</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">
                            Software Engineering
                            <br />
                            Student
                        </span>
                    </h1>
                    <p className="hero--section--description">
                        Aspiring Full-Stack Developer pursuing in
                        <br />
                        B.Eng. Software Engineering KMITL
                    </p>
                </div>
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/portrait2.png" alt="Hero Section" />
            </div>
        </section>
    );
}

