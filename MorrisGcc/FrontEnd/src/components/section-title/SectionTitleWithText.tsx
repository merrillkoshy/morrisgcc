import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export interface FeatureCard {
	id: number;
	title: string;
	content: string;
}
const SectionTitleWithText = ({
	spaceTopClass,
	spaceBottomClass,
}: {
	spaceTopClass: string;
	spaceBottomClass: string;
}) => {
	const [data, setData] = useState<FeatureCard[]>([]);
	useEffect(() => {
		populateFeaturesData();
	}, []);

	const populateFeaturesData = async () => {
		const response = await fetch("features");
		const data: FeatureCard[] = await response.json();
		setData(data);
	};

	if (data.length === 0) return <h1>Loading...</h1>;
	else
		return (
			<div
				className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
					spaceBottomClass ? spaceBottomClass : ""
				}`}
			>
				<div className="container">
					<div className="d-flex justify-content-centre align-items-centre flex-row">
						{data &&
							data?.map((datum) => {
								return (
									<Card key={datum?.id}>
										<Card.Title>{datum?.title}</Card.Title>
										<Card.Body>{datum?.content}</Card.Body>
									</Card>
								);
							})}
					</div>
				</div>
			</div>
		);
};

export default SectionTitleWithText;
