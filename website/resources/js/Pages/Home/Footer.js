import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

export default function Footer() {
	return (
		<div>
			{/* ======= Footer ======= */}
			<footer id="footer">
				<div className="container">
					<div className="copyright">
						© Copyright <strong>Nkhalango Monitoring System</strong>. All Rights
						Reserved
					</div>
				</div>
			</footer>
			{/* End Footer */}

			<InertiaLink
				href="#"
				className="back-to-top d-flex align-items-center justify-content-center"
			>
				<i className="bi bi-arrow-up-short" />
			</InertiaLink>

			{/* <div id="preloader" /> */}
		</div>
	)
}
