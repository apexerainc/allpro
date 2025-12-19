import SectionTitle from '../Common/SectionTitle';
import styles from '../Price/CaruselCoupon.module.css';
const WhatIsIncluded = () => {	
	return (		
		<div className="md:flex">
			<div className="md:basis-1/2">
				<SectionTitle
					dataSubtitle="what we offer"
					dataTitle="What's Included?"
					dataAddClass={'blocktitle__topNone'}
				/>
				<ul className='list__type1'>
					<li>Free damage assessment and detailed estimate</li>
					<li>IICRC-certified technicians with years of experience</li>
					<li>60-minute emergency response guarantee</li>
					<li>Direct insurance billing and claims assistance</li>
					<li>Complete restoration from emergency to final repairs</li>
					<li>100% satisfaction guarantee on all work</li>
				</ul>
			</div>
			<div className="md:basis-1/2 sm-max:mt-[35px] only-md:mt-[40px]">
				<div className={`
					${styles.coupon}
					lazyload
					flex flex-col items-end relative bg-no-repeat bg-{0 0} h-full
				`} data-bg="/images/coupon-bg.png">
					<div className={`${styles.coupon__discounts} grid justify-center content-center absolute`}>
						<div className={styles.coupon__discounts_text01}>-$50</div>
						<div className={styles.coupon__discounts_text02}>offer</div>
					</div>
					<div className={styles.coupon__subtitle}>
						SPECIAL OFFER
					</div>
					<div className={styles.coupon__title}>
						Any Restoration Service
					</div>
					<div className={styles.coupon__content}>
						Emergency Response Special! We are offering $50 OFF to any new customers on restoration services!
					</div>
					<div className={`${styles.coupon__row} flex justify-between items-stretch w-[100%]`}>
						<div className={`${styles.coupon__notes} text-sm`}>
							* Expires: 12/31/2021
						</div>
						<a href="#" className={styles.coupon__print}>Print coupon</a>
					</div>
				</div>
			</div>
		</div>
	)
};
export default WhatIsIncluded;