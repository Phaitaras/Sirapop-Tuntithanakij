import data from "../../data/index.json"

export default function Projects() {
    return (
        <section className="projects--section" id="Projects">
            <div className="projects--container-box">
                <div className="projects--container">
                    <h2 className="section--heading">Recent Projects</h2>
                </div>
                <div>
                    <a href="https://github.com/Phaitaras" className="btn btn-github">
                        View Github
                    </a>
                </div>
            </div>
            <div className="projects--section--container">
                {data?.projects?.map((item, index) => (
                    <div key={index} className="projects--section--card">
                        <div className="projects--section--img">
                            <img src={item.src} alt="placeholder" />
                        </div>
                        <div className="projects--section--card--content">
                            <div>
                                <h3 className="projects--section--title">{item.title}</h3><br />
                                <p className="text-md">{item.description}</p>
                            </div>
                            <a className="text-sm projects--link" href={item.link}>
                            View in Github
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}