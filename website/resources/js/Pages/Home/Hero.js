import React from 'react'
import { InertiaLink, Link } from '@inertiajs/inertia-react'

export default function Hero() {
	return (
		<>
			{/* ======= hero Section ======= */}
			<section id="hero">
				<div className="hero-container">
					<div
						id="heroCarousel"
						className="carousel slide carousel-fade"
						data-bs-ride="carousel"
						data-bs-interval={5000}
					>
						<ol id="hero-carousel-indicators" className="carousel-indicators" />
						<div className="carousel-inner" role="listbox">
							<div
								className="carousel-item active"
								style={{ backgroundImage: "url(img/hero-carousel/1.jpg)" }}
							>
								<div className="carousel-container">
									<div className="container">
										<h2 className="animate__animated animate__fadeInDown">
											We are professional
										</h2>
										<p className="animate__animated animate__fadeInUp">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
											do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											Ut enim ad minim veniam, quis nostrud exercitation ullamco
											laboris nisi ut aliquip ex ea commodo consequat.
										</p>
										<InertiaLink
											href={route('login')}
											className="btn-get-started scrollto animate__animated animate__fadeInUp"
										>
											Sign In
										</InertiaLink>
									</div>
								</div>
							</div>
							<div
								className="carousel-item"
								style={{ backgroundImage: "url(img/hero-carousel/2.jpg)" }}
							>
								<div className="carousel-container">
									<div className="container">
										<h2 className="animate__animated animate__fadeInDown">
											At vero eos et accusamus
										</h2>
										<p className="animate__animated animate__fadeInUp">
											Nam libero tempore, cum soluta nobis est eligendi optio cumque
											nihil impedit quo minus id quod maxime placeat facere
											possimus, omnis voluptas assumenda est, omnis dolor
											repellendus. Temporibus autem quibusdam et aut officiis
											debitis aut.
										</p>
										<InertiaLink
											href={route('login')}
											className="btn-get-started scrollto animate__animated animate__fadeInUp"
										>
											Sign In
										</InertiaLink>
									</div>
								</div>
							</div>
							<div
								className="carousel-item"
								style={{ backgroundImage: "url(img/hero-carousel/3.jpg)" }}
							>
								<div className="carousel-container">
									<div className="container">
										<h2 className="animate__animated animate__fadeInDown">
											Temporibus autem quibusdam
										</h2>
										<p className="animate__animated animate__fadeInUp">
											Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
											quia voluptas sit aspernatur aut odit aut fugit, sed quia
											consequuntur magni dolores eos qui ratione voluptatem sequi
											nesciunt omnis iste natus error sit voluptatem accusantium.
										</p>
										<InertiaLink
											href={route('login')}
											className="btn-get-started scrollto animate__animated animate__fadeInUp"
										>
											Sign In
										</InertiaLink>
									</div>
								</div>
							</div>
							<div
								className="carousel-item"
								style={{ backgroundImage: "url(img/hero-carousel/4.jpg)" }}
							>
								<div className="carousel-container">
									<div className="container">
										<h2 className="animate__animated animate__fadeInDown">
											Nam libero tempore
										</h2>
										<p className="animate__animated animate__fadeInUp">
											Neque porro quisquam est, qui dolorem ipsum quia dolor sit
											amet, consectetur, adipisci velit, sed quia non numquam eius
											modi tempora incidunt ut labore et dolore magnam aliquam
											quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.
										</p>
										<InertiaLink
											href={route('login')}
											className="btn-get-started scrollto animate__animated animate__fadeInUp"
										>
											Sign In
										</InertiaLink>
									</div>
								</div>
							</div>
							<div
								className="carousel-item"
								style={{ backgroundImage: "url(img/hero-carousel/5.jpg)" }}
							>
								<div className="carousel-container">
									<div className="container">
										<h2 className="animate__animated animate__fadeInDown">
											Magnam aliquam quaerat
										</h2>
										<p className="animate__animated animate__fadeInUp">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
											do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											Ut enim ad minim veniam, quis nostrud exercitation ullamco
											laboris nisi ut aliquip ex ea commodo consequat.
										</p>
										<InertiaLink
											href={route('login')}
											className="btn-get-started scrollto animate__animated animate__fadeInUp"
										>
											Sign In
										</InertiaLink>
									</div>
								</div>
							</div>
						</div>
						<Link
							className="carousel-control-prev"
							href="#heroCarousel"
							role="button"
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon bi bi-chevron-left"
								aria-hidden="true"
							/>
						</Link>
						<Link
							className="carousel-control-next"
							href="#heroCarousel"
							role="button"
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon bi bi-chevron-right"
								aria-hidden="true"
							/>
						</Link>
					</div>
				</div>
			</section>
			{/* End Hero Section */}
		</>
	)
}
