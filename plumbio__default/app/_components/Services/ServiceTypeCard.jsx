'use client';
import styles from './ServiceTypeCard.module.css';

const ServiceTypeCard = ({ icon, title, description, className = '' }) => {
	return (
		<div className={`${styles.typeCard} ${className}`}>
			{icon && (
				<div className={styles.typeCard__iconWrapper}>
					<div className={styles.typeCard__icon}>
						<i className={icon}></i>
					</div>
				</div>
			)}
			<div className={styles.typeCard__content}>
				{title && <h5 className={styles.typeCard__title}>{title}</h5>}
				{description && <p className={styles.typeCard__description}>{description}</p>}
			</div>
		</div>
	);
};

export default ServiceTypeCard;
