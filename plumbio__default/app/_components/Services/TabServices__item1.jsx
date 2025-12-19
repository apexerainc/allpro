'use client';
import Image from 'next/legacy/image';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import style from './TabServices.module.css'
const TabsIndex__item1 = ({onClickBtn}) => {
	return (
		<>
			<div className={`md:flex md:gap-[30px] lg:gap-[60px] md:flex-row-reverse`}>
				<div className="md:basis-1/2">
					<div className='img__fixed-height'>
						<Image
							className='img__fixed-height'
							src='/images/services/tab-img01.jpg'
							loading={`lazy`}
							layout='fill'
							objectFit='cover'
							quality={0}
							alt='100% Satisfaction Guarantee'
						/>
					</div>
				</div>
				<div className="md:basis-1/2 only-md:mt-[40px] sm-max:mt-[35px]">
					<SectionTitle
						dataTitle="Water Damage Restoration"
						dataAddClass="blocktitle__topNone2"
					/>
					<p>
						Fast, professional water damage restoration services 24/7. Our IICRC-certified technicians respond within 60 minutes to extract water, dry your property, and restore it to pre-loss condition. We handle everything from burst pipes to flooding.
					</p>
					<ul className='list__type1 list__top'>
						<li>Free damage assessment and detailed estimate</li>
						<li>60-minute emergency response guarantee</li>
						<li>Complete restoration from extraction to final repairs</li>
						<li>Direct insurance billing available</li>
					</ul>
					<Button
						className={`${style.btn__top}`}
						onClick={(e) => {
							onClickBtn();
						}}
					>
						Schedule Service
					</Button>
				</div>
			</div>
		</>
	)
};
export default TabsIndex__item1;