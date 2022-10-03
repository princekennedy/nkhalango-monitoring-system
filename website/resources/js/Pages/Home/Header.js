import React from 'react'
import { InertiaLink, Link } from '@inertiajs/inertia-react'

export default function Header() {
	return (
		<>
			{/* ======= Header ======= */}
			<header
				id="header"
				className="fixed-top d-flex align-items-center header-transparent"
			>
				<div className="container-fluid">
					<div className="row justify-content-center align-items-center">
						<div className="col-xl-11 d-flex align-items-center justify-content-between">
							<h1 className="logo">
								<Link href="/" replace>NMS</Link>
							</h1>
							{/* <Link href="index.html" class="logo"><img src="img/logo.png" alt="" class="img-fluid"></Link> */}
							<nav id="navbar" className="navbar">
								<ul>
									<li>
										<Link className="nav-link scrollto active" href="#hero">
											Home
										</Link>
									</li>
									<li>
										<Link className="nav-link scrollto" href="#about">
											About
										</Link>
									</li>
									<li>
										<Link className="nav-link scrollto" href="#objectives">
											Objectives
										</Link>
									</li>
									<li>
										<Link className="nav-link scrollto" href="#team">
											Team
										</Link>
									</li>
									<li>
										<Link className="nav-link scrollto" href="#contact">
											Contact
										</Link>
									</li>
								</ul>
								<i className="bi bi-list mobile-nav-toggle" />
							</nav>
							{/* .navbar */}
						</div>
					</div>
				</div>
			</header>
			{/* End Header */}
		</>
	)
}
