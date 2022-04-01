import React from "react";
import styles from "./Banner.module.css";
import duck from "./assets/duck.png";

export default function Duck() {
	return (
		<div className={styles.duck}>
			<div className={styles.bg}>MT</div>
			<div className={styles.d}>
				<img src={duck} alt="duck" width={200} />
			</div>
		</div>
	);
}

