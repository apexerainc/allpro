'use client';
import Image from 'next/legacy/image';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import style from './TabServices.module.css'
const TabsIndex__item5 = ({onClickBtn}) => {
	return (
		<>
			<div className={`md:flex md:gap-[30px] lg:gap-[60px] md:flex-row-reverse`}>
				<div className="md:basis-1/2">
					<div className='img__fixed-height'>
						<Image
							src='/images/services/tab-img05.jpg'
							layout='fill'
							objectFit='cover'
							quality={0}
							loading={`lazy`}
							alt='100% Satisfaction Guarantee'
						/>
					</div>
				</div>
				<div className="md:basis-1/2 only-md:mt-[40px] sm-max:mt-[35px]">
					<SectionTitle
						dataTitle="Emergency Repairs"
						dataAddClass="blocktitle__topNone2"
					/>
					<p>
					When disaster strikes, you need immediate help. Our 24/7 emergency repair services include board-up, tarping, water extraction, and temporary repairs to secure your property and prevent further damage. We respond within 60 minutes, day or night.
					</p>
					<ul className='list__type1 list__top'>
						<li>24/7 emergency response available</li>
						<li>60-minute response time guarantee</li>
						<li>Emergency board-up and tarping</li>
						<li>Immediate water extraction and mitigation</li>
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
export default TabsIndex__item5;