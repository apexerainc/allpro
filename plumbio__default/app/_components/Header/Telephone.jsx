import styles from './Telephone.module.css'
export default function Telephone(){
	return (
		<div className={`${styles.tel__holder} whitespace-nowrap relative`}>
			<span className={`${styles.tel__text} md-max:hidden`}>24/7 Emergency Response</span>
			<a href="tel:3073237777" className={`${styles.tel__tel} flex`} title='Call Restoration Wranglers 307-323-7777' aria-label={`Call Restoration Wranglers 307-323-7777`}>
				<i className={`${styles.tel__icon} icon-25453 relative inline-block`}></i>
				307-323-7777
			</a>
		</div>
	);
}