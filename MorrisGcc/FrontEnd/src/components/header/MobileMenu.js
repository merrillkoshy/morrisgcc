import React from "react";
import MobileMenuSearch from "./sub-components/MobileSearch";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import MobileWidgets from "./sub-components/MobileWidgets";

const MobileMenu = () => {
	const closeMobileMenu = () => {
		return console.log("closed");
	};
	return (
		<div className="offcanvas-mobile-menu" id="offcanvas-mobile-menu">
			<button
				className="offcanvas-menu-close"
				id="mobile-menu-close-trigger"
				onClick={() => closeMobileMenu()}
			>
				<i className="pe-7s-close"></i>
			</button>
			<div className="offcanvas-wrapper">
				<div className="offcanvas-inner-content">
					{/* mobile search */}
					<MobileMenuSearch />

					{/* mobile nav menu */}
					<MobileNavMenu />

					{/* mobile widgets */}
					<MobileWidgets />
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
