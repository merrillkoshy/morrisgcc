import React from "react";
import { FeatureCard } from "./SectionTitleWithText";

const featuresData = async () => {
	const response = await fetch("features");
	const data: FeatureCard[] = await response.json();
	return data;
};

describe("testing the features page", () => {
	it("should return a non-empty array", () => {
		featuresData().then((data) => expect(data.length).toBeGreaterThan(0));
	});
});
