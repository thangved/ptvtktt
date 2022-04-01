import React from "react";
import styles from "./Banner.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import AnimatedText from "react-animated-text-content";
import Duck from "./Duck";

export default function Banner() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<div className={styles.wrapper}>
			<Duck />
			<div className={styles.title}>
				<AnimatedText
					type="chars"
					animation={{
						x: "200px",
						y: "-20px",
						scale: 900,
						ease: "ease-in-out",
					}}
					animationType="blocks"
					interval={0.06}
					duration={0.8}
					tag="p"
					className={styles.siteTitle}
					threshold={0.1}
					rootMargin="20%"
				>
					{siteConfig.title}
				</AnimatedText>
				<AnimatedText
					type="words"
					animation={{
						x: "200px",
						y: "-20px",
						scale: 1.1,
						ease: "ease-in-out",
					}}
					animationType="blocks"
					interval={0.06}
					duration={0.8}
					tag="p"
					className="animated-paragraph"
					threshold={0.1}
					rootMargin="20%"
				>
					{siteConfig.tagline}
				</AnimatedText>
			</div>
		</div>
	);
}

