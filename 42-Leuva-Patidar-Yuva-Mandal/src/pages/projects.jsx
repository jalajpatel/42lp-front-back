import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle">
							I've worked on a variety of projects over the years
							and I'm proud of the progress I've made. Many of
							these projects are open-source and available for
							others to explore and contribute to. If you're
							interested in any of the projects I've worked on,
							please feel free to check out the code and suggest
							any improvements or enhancements you might have in
							mind. Collaborating with others is a great way to
							learn and grow, and I'm always open to new ideas and
							feedback.
						</div>
						 <div class="container">
        <div class="events-container">
            <h2 class="title">Past Events</h2>
            <div class="timeline">
                {/* <!-- Past Events Timeline Items --> */}
                <div class="timeline-item">
                    <h4 class="timeline-title">Self Taught (Programming)</h4>
                    <p class="timeline-date">2020 to Present</p>
                    <p class="timeline-text">
                        Since 2020, I started to learn programming. I have learned HTML, CSS, Sass, JavaScript, and Bootstrap. Now I am a professional web designer.
                    </p>
                </div>

                <div class="timeline-item">
                    <h4 class="timeline-title">Diploma in Civil Engineering</h4>
                    <p class="timeline-date">2019 to Present</p>
                    <p class="timeline-text">
                        Started my journey to become a Civil Engineer in 2019 at Shyamoli Ideal Polytechnic Institute.
                    </p>
                </div>

                <div class="timeline-item">
                    <h4 class="timeline-title">Secondary School Certificate</h4>
                    <p class="timeline-date">2014 to 2019</p>
                    <p class="timeline-text">
                        Passed SSC Exam in 2019 from Science Group with GPA-4.56 from Patgram Anath Bondhu Govt. High School.
                    </p>
                </div>
            </div>
        </div>

        <div class="events-container">
            <h2 class="title">Upcoming Events</h2>
            <div class="timeline">
                {/* <!-- Upcoming Events Timeline Items --> */}
                <div class="timeline-item">
                    <h4 class="timeline-title">Graphics Design</h4>
                    <p class="timeline-date">2019 to Present</p>
                    <p class="timeline-text">
                        Working on Graphics Design since 2018 using Photoshop and Illustrator.
                    </p>
                </div>

                <div class="timeline-item">
                    <h4 class="timeline-title">Web Design</h4>
                    <p class="timeline-date">2020 to Present</p>
                    <p class="timeline-text">
                        Started learning coding in 2020. Learned HTML, CSS, Sass, JavaScript, and Bootstrap. Now a professional web designer.
                    </p>
                </div>

                <div class="timeline-item">
                    <h4 class="timeline-title">Wordpress</h4>
                    <p class="timeline-date">2020 to Present</p>
                    <p class="timeline-text">
                        Started learning Wordpress in 2020. Can install, customize, and fix bugs on Wordpress.
                    </p>
                </div>
            </div>
        </div>
    </div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
