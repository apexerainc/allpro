'use client';
import styles from './InfoHighlightBox.module.css';

const InfoHighlightBox = ({ variant = 'default', icon, title, children, className = '' }) => {
	return (
		<div className={`${styles.highlightBox} ${styles[`highlightBox__${variant}`]} ${className}`}>
			{(icon || title) && (
				<div className={styles.highlightBox__header}>
					{icon && (
						<div className={styles.highlightBox__icon}>
							<i className={icon}></i>
						</div>
					)}
					{title && (
						<h4 className={styles.highlightBox__title}>{title}</h4>
					)}
				</div>
			)}
			<div className={styles.highlightBox__content}>
				{children}
			</div>
		</div>
	);
};

export default InfoHighlightBox;
