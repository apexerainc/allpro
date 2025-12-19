'use client';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import styles from './TabInfo.module.css'
const TabInfo__item3 = ({onClickBtn}) => {
	return (
		<div className={`${styles.layout__content}`}>
			<SectionTitle dataTitle="Feedback" />
			<p>
			After your restoration is complete, we&apos;ll send you a follow-up survey asking how we did. Not satisfied with our service? Let us know and we&apos;ll make it right. Your satisfaction is our guarantee.
			</p>
			<Button
				className="btn__top"
				onClick={(e) => {
					onClickBtn();
				}}
			>Schedule Service</Button>
		</div>
	)
};
export default TabInfo__item3;