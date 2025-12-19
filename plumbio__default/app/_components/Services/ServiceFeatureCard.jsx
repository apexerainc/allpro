'use client';
import styles from './ServiceFeatureCard.module.css';

const ServiceFeatureCard = ({ icon, title, description, highlight = false }) => {
	return (
		<div className={`${styles.featureCard} ${highlight ? styles.featureCard__highlight : ''}`}>
			{icon && (
				<div className={styles.featureCard__icon}>
					<i className={icon}></i>
				</div>
			)}
			{title && (
				<h5 className={styles.featureCard__title}>{title}</h5>
			)}
			{description && (
				<p className={styles.featureCard__description}>{description}</p>
			)}
		</div>
	);
};

export default ServiceFeatureCard;
