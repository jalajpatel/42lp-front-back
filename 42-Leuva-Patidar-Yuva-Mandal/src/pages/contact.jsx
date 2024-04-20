import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							on my website to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media, you can find me on{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. I post regular updates and engage with my
							followers there, so don't hesitate to reach out.
							Thanks again for your interest, and I look forward
							to hearing from you!
						</div>
					</div>
					<div class="container">
						{/* <div class="section-title">
							<h2>Contact Us</h2>
						</div> */}

						<div class="contact-content">
							<div class="contact-info">
								<div class="contact-info-item">
									<div class="icon">
										<i class="fa fa-map-marker"></i>
									</div>
									<h4>Address</h4>
									<p>
										20, મંગલમ સ્કવેર, સદભાવ હોસ્પિટલની સામે,
										પાટણ
									</p>
								</div>

								<div class="contact-info-item">
									<div class="icon">
										<i class="fa fa-phone"></i>
									</div>
									
									<h4>Call Us On</h4>
									<p>+૯૧ ૯૯૦૯૫૪૭૬૦૭</p>
								</div>

								<div class="contact-info-item">
									<div class="icon">
										<i class="fa fa-envelope"></i>
									</div>
									<h4>Email</h4>
									<p>42leuvapatidaryuvamandal@gmail.com</p>
								</div>
							</div>

							<div class="contact-form">
								<form class="contact-form">
									<div class="form-item">
										<div class="form-group">
											<input
												type="text"
												class="form-control"
												placeholder="Name*"
											/>
										</div>
									</div>
									<div class="form-item">
										<div class="form-group">
											<input
												type="email"
												class="form-control"
												placeholder="Email*"
											/>
										</div>
									</div>
									<div class="form-item">
										<div class="form-group">
											<input
												type="text"
												class="form-control"
												placeholder="Subject*"
											/>
										</div>
									</div>
									<div class="form-item">
										<div class="form-group">
											<textarea
												class="form-control"
												placeholder="Your Message*"
												rows="4"
											></textarea>
										</div>
									</div>
									<div class="form-item">
										<button type="submit" class="btn">
											Send Message
										</button>
									</div>
								</form>
								
							</div>
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

export default Contact;
