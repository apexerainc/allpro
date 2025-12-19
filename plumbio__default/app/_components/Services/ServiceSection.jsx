'use client';
import styles from './ServiceSection.module.css';

const ServiceSection = ({ title, subtitle, children, icon, variant = 'default' }) => {
	return (
		<div className={`${styles.serviceSection} ${styles[`serviceSection__${variant}`]}`}>
			{(title || subtitle) && (
				<div className={styles.serviceSection__header}>
					{icon && (
						<div className={styles.serviceSection__icon}>
							<i className={icon}></i>
						</div>
					)}
					{subtitle && (
						<div className={styles.serviceSection__subtitle}>{subtitle}</div>
					)}
					{title && (
						<h4 className={styles.serviceSection__title}>{title}</h4>
					)}
				</div>
			)}
			<div className={styles.serviceSection__content}>
				{children}
			</div>
		</div>
	);
};

export default ServiceSection;
