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
											Welcome to Nkhalango Monitoring System
										</h2>
										<p className="animate__animated animate__fadeInUp">
											Nkhalango Monitoring System exists to provide remote sensing of forest regions that allow forest owners to get up to date data on forest population and fire alerts
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
											We are professional
										</h2>
										<p className="animate__animated animate__fadeInUp">
											Young team of engineers that combine local knowledge, AI-powered predictive modelling and remote sensing to monitor what's happening in forest regions.
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
