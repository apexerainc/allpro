'use client';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import styles from './TabInfo.module.css'
const TabInfo__item2 = ({onClickBtn}) => {
	return (
		<div className={`${styles.layout__content}`}>
			<SectionTitle dataTitle="Pricing" />
			<p>
			We&apos;ll come to your property and conduct a thorough damage assessment, so we know exactly what needs to be restored. No matter the extent of damage, we&apos;ll provide you with a detailed estimate and the most cost-effective restoration plan, along with straightforward pricing and insurance coordination.
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
export default TabInfo__item2;