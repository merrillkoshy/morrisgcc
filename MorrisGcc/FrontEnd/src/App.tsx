import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

// home pages
const Home = lazy(() => import("./pages/home.js"));
//about page
const About = lazy(() => import("./pages/About"));
//blog page
const Blog = lazy(() => import("./pages/Blog"));
//blog page
const Products = lazy(() => import("./pages/Products"));
//contact page
const Contact = lazy(() => import("./pages/Contact"));
//not found
const NotFound = lazy(() => import("./pages/NotFound"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));
const ShopGridTwoColumn = lazy(() => import("./pages/shop/ShopGridTwoColumn"));
const ShopGridNoSidebar = lazy(() => import("./pages/shop/ShopGridNoSidebar"));
const ShopGridFullWidth = lazy(() => import("./pages/shop/ShopGridFullWidth"));
const ShopGridRightSidebar = lazy(() =>
	import("./pages/shop/ShopGridRightSidebar")
);
const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));
const ShopListFullWidth = lazy(() => import("./pages/shop/ShopListFullWidth"));
const ShopListTwoColumn = lazy(() => import("./pages/shop/ShopListTwoColumn"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
	import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
	import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
	import("./pages/shop-product/ProductFixedImage")
);

const App = () => {
	useEffect(() => {}, []);

	return (
		<ToastProvider placement="bottom-left">
			<BreadcrumbsProvider>
				<Router>
					<ScrollToTop>
						<Suspense
							fallback={
								<div className="flone-preloader-wrapper">
									<div className="flone-preloader">
										<span></span>
										<span></span>
									</div>
								</div>
							}
						>
							<Switch>
								<Route
									exact
									path={process.env.PUBLIC_URL + "/"}
									component={Home}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/about"}
									component={About}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/blog"}
									component={Blog}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/products"}
									component={Products}
								/>

								<Route
									path={process.env.PUBLIC_URL + "/contact"}
									component={Contact}
								/>

								{/* Shop pages */}
								<Route
									path={process.env.PUBLIC_URL + "/shop-grid-standard"}
									component={ShopGridStandard}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/shop-grid-filter"}
									component={ShopGridFilter}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/shop-grid-two-column"}
									component={ShopGridTwoColumn}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}
									component={ShopGridNoSidebar}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/shop-grid-full-width"}
									component={ShopGridFullWidth}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
									component={ShopGridRightSidebar}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/shop-list-standard"}
									component={ShopListStandard}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/shop-list-full-width"}
									component={ShopListFullWidth}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/shop-list-two-column"}
									component={ShopListTwoColumn}
								/>

								{/* Shop product pages */}
								<Route
									path={process.env.PUBLIC_URL + "/product/:id"}
									render={(routeProps) => (
										<Product {...routeProps} key={routeProps.match.params.id} />
									)}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
									component={ProductTabLeft}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
									component={ProductTabRight}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/product-sticky/:id"}
									component={ProductSticky}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/product-slider/:id"}
									component={ProductSlider}
								/>
								<Route
									path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
									component={ProductFixedImage}
								/>

								<Route
									path={process.env.PUBLIC_URL + "/not-found"}
									component={NotFound}
								/>

								<Route exact component={NotFound} />
							</Switch>
						</Suspense>
					</ScrollToTop>
				</Router>
			</BreadcrumbsProvider>
		</ToastProvider>
	);
};

App.propTypes = {
	dispatch: PropTypes.func,
};

export default App;
