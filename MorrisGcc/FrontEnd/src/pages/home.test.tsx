import React from "react";
import HomeFashionSix from "./home";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "../redux/reducers/rootReducer";

describe("Home page test", () => {
	const store = createStore(rootReducer);
	it("Should render component", () => {
		const component = renderer.create(
			<Provider store={store}>
				<Router>
					<HomeFashionSix />
				</Router>
			</Provider>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
