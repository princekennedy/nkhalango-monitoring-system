import React, { useState } from 'react';
import { InertiaLink, Link } from '@inertiajs/inertia-react';
import Site from '@/Layouts/Site';
import { WelcomeContext, WelcomeProvider } from '@/Utils/WelcomeContext';

const Home = () => {


	return (
		<>
			<main id="main">
				{/* ======= About Us Section ======= */}
				<section id="about">
					<div className="container" data-aos="fade-up">
						<header className="section-header">
							<h3>About Us</h3>
							<p>
								Tech lovers and yet passionate about the environment the idea of Nkhalango monitoring system was born to aid forest owners in the sustainable management of their forests which involves a broad range of factors such as tree population and resilience against fire.
							</p>
						</header>
						<div className="row about-cols">
							<div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
								<div className="about-col">
									<div className="img">
										<img
											src="img/about-mission.jpg"
											alt=""
											className="img-fluid"
										/>
										<div className="icon">
											<i className="bi bi-bar-chart" />
										</div>
									</div>
									<h2 className="title">
										<Link href="#">Our Mission</Link>
									</h2>
									<p>
										NMS works on things that matter. The best technology that exists to provide remote sensing of forest, giving up to date data on tree population forest regions.
									</p>
								</div>
							</div>
							<div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
								<div className="about-col">
									<div className="img">
										<img
											src="img/about-plan.jpg"
											alt=""
											className="img-fluid"
										/>
										<div className="icon">
											<i className="bi bi-brightness-high" />
										</div>
									</div>
									<h2 className="title">
										<Link href="#">Our Plan</Link>
									</h2>
									<p>
										In the near future, remote sensing and Geographical Information System (GIS) could be used in environmental monitoring for land use/land cover analysis, habitat mapping and disaster management.
									</p>
								</div>
							</div>
							<div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
								<div className="about-col">
									<div className="img">
										<img
											src="img/about-vision.jpg"
											alt=""
											className="img-fluid"
										/>
										<div className="icon">
											<i className="bi bi-calendar4-week" />
										</div>
									</div>
									<h2 className="title">
										<Link href="#">Our Vision</Link>
									</h2>
									<p>
										To change the way, we think about saving the planet. Bringing innovation to the fight against climate change
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* End About Us Section */}
				{/* ======= Services Section ======= */}
				<section id="objectives">
					<div className="container" data-aos="fade-up">
						<header className="section-header wow fadeInUp">
							<h3>Our Objectives</h3>
							<p>
								The <strong>general objective </strong> of this project is to build a forest monitoring system that analyses soil properties, calculates tree population, monitors forests regions, and gives user control access remotely.
							</p>
							<p>
								To achieve the main objective, the <strong>specific objectives</strong> are accordingly to:
							</p>
						</header>
						<div className="row">
							<div className="col-lg-4 col-md-6 box"
								data-aos="fade-up"
								data-aos-delay={300}
							>
								<div className="icon">
									<i className="bi bi-bar-chart" />
								</div>
								<h4 className="title">
									<Link href="">Trees Population</Link>
								</h4>
								<p className="description">
									Count tree population for accurate record keeping;
								</p>
							</div>
							<div
								className="col-lg-4 col-md-6 box"
								data-aos="fade-up"
								data-aos-delay={300}
							>
								<div className="icon">
									<i className="bi bi-brightness-high" />
								</div>
								<h4 className="title">
									<Link href="">Fire Alerts</Link>
								</h4>
								<p className="description">
									Asses the type of smoke and trigger an alarm for elevated carbon dioxide levels; Monitor high temperatures Alert forest monitoring control room when an alarm has been triggered.
								</p>
							</div>
							<div
								className="col-lg-4 col-md-6 box"
								data-aos="fade-up"
								data-aos-delay={200}
							>
								<div className="icon">
									<i className="bi bi-binoculars" />
								</div>
								<h4 className="title">
									<Link href="">Soil Sampling</Link>
								</h4>
								<p className="description">
									Analyze soil properties to determine what tree species suits a particular geographical location;
								</p>
							</div>
						</div>
					</div>
				</section>
				{/* End Services Section */}
				{/* ======= Team Section ======= */}
				<section id="team">
					<div className="container" data-aos="fade-up">
						<div className="section-header">
							<h3>Team</h3>
							<p>
								Team of valuable people that provides technical expertise and software-based solutions to environmental problems.
							</p>
						</div>
						<div className="row">
							<div className="col-lg-3 col-md-6" />
							<div className="col-lg-3 col-md-6">
								<div className="member" data-aos="fade-up" data-aos-delay={200}>
									<img src="img/team-2.jpg" className="img-fluid" alt="" />
									<div className="member-info">
										<div className="member-info-content">
											<h4>
												Temwanina Kaponda
											</h4>
											<span>Co-Founder</span>
											<div className="social">
												<Link href="">
													<i className="bi bi-twitter" />
												</Link>
												<Link href="">
													<i className="bi bi-facebook" />
												</Link>
												<Link href="">
													<i className="bi bi-instagram" />
												</Link>
												<Link href="">
													<i className="bi bi-linkedin" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="member" data-aos="fade-up" data-aos-delay={300}>
									<img src="img/team-3.jpg" className="img-fluid" alt="" />
									<div className="member-info">
										<div className="member-info-content">
											<h4>
												Mclean Kasambala
											</h4>
											<span>Founder & CEO</span>
											<div className="social">
												<Link href="">
													<i className="bi bi-twitter" />
												</Link>
												<Link href="">
													<i className="bi bi-facebook" />
												</Link>
												<Link href="">
													<i className="bi bi-instagram" />
												</Link>
												<Link href="">
													<i className="bi bi-linkedin" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6" />
						</div>
					</div>
				</section>
				{/* End Team Section */}
				{/* ======= Contact Section ======= */}
				<section id="contact" className="section-bg">
					<div className="container" data-aos="fade-up">
						<div className="section-header">
							<h3>Contact Us</h3>
							<p>
								Got a forest? We help you manage it sustainably. We make sure you monitor the forest regions remotely and take action when necessary.
							</p>
						</div>
						<div className="row contact-info">
							<div className="col-md-4">
								<div className="contact-address">
									<i className="bi bi-geo-alt" />
									<h3>Address</h3>
									<address>A108 Adam Street, NY 535022, USA</address>
								</div>
							</div>
							<div className="col-md-4">
								<div className="contact-phone">
									<i className="bi bi-phone" />
									<h3>Phone Number</h3>
									<p>
										<Link href="tel:+155895548855">+1 5589 55488 55</Link>
									</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="contact-email">
									<i className="bi bi-envelope" />
									<h3>Email</h3>
									<p>
										<Link href="mailto:info@example.com">info@example.com</Link>
									</p>
								</div>
							</div>
						</div>
						<div className="form">
							<form
								action="forms/contact.php"
								method="post"
								role="form"
								className="php-email-form"
							>
								<div className="row">
									<div className="form-group col-md-6">
										<input
											type="text"
											name="name"
											className="form-control"
											id="name"
											placeholder="Your Name"
											required=""
										/>
									</div>
									<div className="form-group col-md-6">
										<input
											type="email"
											className="form-control"
											name="email"
											id="email"
											placeholder="Your Email"
											required=""
										/>
									</div>
								</div>
								<div className="form-group">
									<input
										type="text"
										className="form-control"
										name="subject"
										id="subject"
										placeholder="Subject"
										required=""
									/>
								</div>
								<div className="form-group">
									<textarea
										className="form-control"
										name="message"
										rows={5}
										placeholder="Message"
										required=""
										defaultValue={""}
									/>
								</div>
								<div className="my-3">
									<div className="loading">Loading</div>
									<div className="error-message" />
									<div className="sent-message">
										Your message has been sent. Thank you!
									</div>
								</div>
								<div className="text-center">
									<button type="submit">Send Message</button>
								</div>
							</form>
						</div>
					</div>
				</section>
				{/* End Contact Section */}
			</main>
		</>
	)
}

Home.layout = page => <Site title="Welcome" children={page} />

export default Home;