import React, { useState } from 'react';
import { InertiaLink, Link } from '@inertiajs/inertia-react';
import Site from '@/Layouts/Site';

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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
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
										Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
										tempor ut labore et dolore magna aliqua. Ut enim ad minim
										veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat.
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
										Sed ut perspiciatis unde omnis iste natus error sit voluptatem
										doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
										illo inventore veritatis et quasi architecto beatae vitae dicta
										sunt explicabo.
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
										Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit,
										sed quia magni dolores eos qui ratione voluptatem sequi nesciunt
										Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
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
								Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
								partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei
								ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno
								tridexa panatarel.
							</p>
						</header>
						<div className="row">
							<div
								className="col-lg-4 col-md-6 box"
								data-aos="fade-up"
								data-aos-delay={100}
							>
								<div className="icon">
									<i className="bi bi-briefcase" />
								</div>
								<h4 className="title">
									<Link href="">Lorem Ipsum</Link>
								</h4>
								<p className="description">
									Voluptatum deleniti atque corrupti quos dolores et quas molestias
									excepturi sint occaecati cupiditate non provident
								</p>
							</div>
							<div
								className="col-lg-4 col-md-6 box"
								data-aos="fade-up"
								data-aos-delay={200}
							>
								<div className="icon">
									<i className="bi bi-card-checklist" />
								</div>
								<h4 className="title">
									<Link href="">Dolor Sitema</Link>
								</h4>
								<p className="description">
									Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
									aliquip ex ea commodo consequat tarad limino ata
								</p>
							</div>
							<div
								className="col-lg-4 col-md-6 box"
								data-aos="fade-up"
								data-aos-delay={300}
							>
								<div className="icon">
									<i className="bi bi-bar-chart" />
								</div>
								<h4 className="title">
									<Link href="">Sed ut perspiciatis</Link>
								</h4>
								<p className="description">
									Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur
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
									<Link href="">Magni Dolores</Link>
								</h4>
								<p className="description">
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
									officia deserunt mollit anim id est laborum
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
									<Link href="">Nemo Enim</Link>
								</h4>
								<p className="description">
									At vero eos et accusamus et iusto odio dignissimos ducimus qui
									blanditiis praesentium voluptatum deleniti atque
								</p>
							</div>
							<div
								className="col-lg-4 col-md-6 box"
								data-aos="fade-up"
								data-aos-delay={400}
							>
								<div className="icon">
									<i className="bi bi-calendar4-week" />
								</div>
								<h4 className="title">
									<Link href="">Eiusmod Tempor</Link>
								</h4>
								<p className="description">
									Et harum quidem rerum facilis est et expedita distinctio. Nam
									libero tempore, cum soluta nobis est eligendi
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
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque
							</p>
						</div>
						<div className="row">
							<div className="col-lg-3 col-md-6" />
							<div className="col-lg-3 col-md-6">
								<div className="member" data-aos="fade-up" data-aos-delay={200}>
									<img src="img/team-2.jpg" className="img-fluid" alt="" />
									<div className="member-info">
										<div className="member-info-content">
											<h4>Sarah Jhonson</h4>
											<span>Product Manager</span>
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
											<h4>William Anderson</h4>
											<span>CTO</span>
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
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque
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