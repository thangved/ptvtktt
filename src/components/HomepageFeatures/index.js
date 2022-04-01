import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Duck from "../../pages/Duck";
import logo from "./assets/logo.png";

const FeatureList = [
	{
		title: "Miễn phí",
		Image: (
			<div
				style={{
					transform: "rotate(45deg)",
				}}
			>
				<Duck />
			</div>
		),
		description: (
			<>
				Tài liệu được viết với mục đích chia sẻ kiến thức nên tất cả các
				nội dung trong đây đề miễn phí
			</>
		),
	},
	{
		title: "Đầy đủ",
		Image: <img src={logo} width={200} />,
		description: (
			<>
				Mình sẽ cố gắng bổ sung đầy đủ nhất những kiến thức của môn phân
				tích & thiết kế thuật toán
			</>
		),
	},
	{
		title: "Dễ hiểu",
		Image: (
			<div
				style={{
					transform: "rotateY(180deg) rotateZ(45deg)",
				}}
			>
				<Duck />
			</div>
		),
		description: (
			<>
				Vì tài liệu này được viết bởi một con vịt ngu ngốc nên sẽ không
				có những thứ cao siêu khiến bạn khó hiểu 🐧
			</>
		),
	},
];

function Feature({ Image, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">{Image}</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}

