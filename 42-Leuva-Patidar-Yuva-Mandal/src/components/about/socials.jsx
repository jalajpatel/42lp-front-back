import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<main>
			<section className="about-section" id="about">
				<div style={{ textAlign: "center" }}>
					<h2>About Us</h2>
				</div>

				<div className="container">
					{/* <div className="row"></div> */}
					{/* <div className="row"> */}
						{/* <div className="section-title padd-15"></div> */}
					{/* </div> */}
					<div className="row">
						<div className="about-content padd-15">
							<div className="row">
								<div className="about-text padd-15">
									<h2>
										સંસ્થા/ મંડળનું નામ:{" "}
										<span>42 લેઉવા પાટીદાર યુવા મંડળ</span>
									</h2>
									<p>
										<span style={{ fontWeight: "bold" }}>
											કાર્યક્ષેત્ર:{" "}
										</span>
										પાટણ, મહેસાણા અને બનાસકાંઠા જિલ્લામાં
										આવતા સમાજના 53 ગામો અને તે ગામના ગુજરાત
										તથા ગુજરાત બહાર વસતા તમામ લોકો.
									</p>
									<p>
										<span style={{ fontWeight: "bold" }}>
											{" "}
											ઉદ્દેશ - હેતુ:{" "}
										</span>
										વર્તમાન પરિસ્થિતીના પરીક્ષેપમાં સમાજના
										સમતોલ અને સર્વાંગી વિકાસ માટે સમાજ
										સંલગ્ન જુદા-જુદા ક્ષેત્રના વિવિધલક્ષી
										કાર્યક્રમ હાથ ધરવામાં આવશે.
									</p>
									<p>
										<span style={{ fontWeight: "bold" }}>
											અ.{" "}
										</span>
										શૈક્ષણિક ક્ષેત્ર
										<br></br>
										<span style={{ fontWeight: "bold" }}>
											બ.{" "}
										</span>
										આરોગ્ય ક્ષેત્ર
										<br></br>
										<span style={{ fontWeight: "bold" }}>
											ક.{" "}
										</span>
										કૃષિ ક્ષેત્ર
										<br></br>
										<span style={{ fontWeight: "bold" }}>
											ડ.{" "}
										</span>
										રોજગાર લક્ષી તથા સામાજિક કાર્યો
									</p>
									<br></br>
									<p>
										<span style={{ fontWeight: "bold" }}>
											સરનામું:{" "}
										</span>
										20, મંગલમ સ્કવેર, સદભાવ હોસ્પિટલની સામે,
										પાટણ{" "}
									</p>

									<br></br>
									<p>
										<h4>કારોબારી સમિતિ</h4>
									</p>

									<p>
										{" "}
										<table
											style={{
												width: "100%",
												borderCollapse: "collapse",
											}}
										>
											<thead>
												<tr>
													<th
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														સ્થાન
													</th>
													<th
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														નામ
													</th>
													<th
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														ગામ
													</th>
													<th
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														મોબાઈલ નંબર
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														પ્રમુખ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														પટેલ સોહનભાઈ દિનેશકુમાર
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														સંખારી
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														૮૭૫૮૪૧૯૭૯૦
													</td>
												</tr>
												<tr>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														ઉપપ્રમુખ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														પટેલ હાર્દિકકુમાર બચુભાઈ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														અડીયા
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														૯૯૨૫૬૮૯૯૮૯
													</td>
												</tr>
												<tr>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														મંત્રી
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														પટેલ દિક્ષિત રમેશભાઈ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														કિમ્બુવા
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														૯૯૦૯૫૪૭૬૦૭
													</td>
												</tr>
												<tr>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														સહમંત્રી
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														પટેલ જીતેન્દ્રભાઈ
														ગાંડાલાલ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														કણી
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														૭૯૯૦૮૦૯૦૩૪
													</td>
												</tr>
												<tr>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														ખજાનચી
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														પટેલ રૂચિત અમૃતલાલ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														અધાર
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														૯૭૧૨૯૬૫૭૭૧
													</td>
												</tr>
												<tr>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														કા. સભ્ય
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														પટેલ સંદિપ ત્રિકમભાઈ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														ચંદ્રુમાણા
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														૯૯૯૮૯૦૩૭૧૮
													</td>
												</tr>
												<tr>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														કા. સભ્ય
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														પટેલ હાર્દિકકુમાર મણીલાલ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														મકતુપુર
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														૯૭૨૫૬૦૧૯૯૯
													</td>
												</tr>
												<tr>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														કા. સભ્ય
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														પટેલ સંકેત વિરચંદભાઈ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														સરવા
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														૭૦૧૬૮૫૦૩૪૮
													</td>
												</tr>
												<tr>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														કા. સભ્ય
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														પટેલ પરેશકુમાર આશાભાઈ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														સમોડા
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														૭૬૯૮૭૬૭૫૨૦
													</td>
												</tr>
												<tr>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														કા. સભ્ય
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														પટેલ વિશાલકુમાર જયંતિલાલ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														સરસાવ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														૯૪૨૭૭૭૬૧૨૨
													</td>
												</tr>
												<tr>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
															textAlign: "center",
														}}
													>
														કા. સભ્ય
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														પટેલ મનોજકુમાર
														દ્વારકાદાસ
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														હાન્સાપુર
													</td>
													<td
														style={{
															border: "1px solid black",
															padding: "8px",
														}}
													>
														૯૯૦૪૬૨૯૭૧૭
													</td>
												</tr>
											</tbody>
										</table>
									</p>
								</div>
							</div>
						</div>
						<br></br>
						<div className="row">
							<div className="personal-info padd-15">
								<div className="row">
									<div className="buttons padd-15">
										<br></br>
										<a
											href="/"
											target="_target"
											className="btn"
										>
											ટ્રસ્ટ નું બંધારણ
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Socials;
