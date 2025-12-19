'use client';
import Image from 'next/legacy/image';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import style from './TabServices.module.css'
const TabsIndex__item6 = ({onClickBtn}) => {
	return (
		<>
			<div className={`md:flex md:gap-[30px] lg:gap-[60px] md:flex-row-reverse`}>
				<div className="md:basis-1/2">
					<div className='img__fixed-height'>
						<Image
							src='/images/services/tab-img06.jpg'
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
						dataTitle="Storm Damage Restoration"
						dataAddClass="blocktitle__topNone2"
					/>
					<p>
						Severe weather can cause extensive damage to your property. We provide comprehensive storm damage restoration including roof repairs, window boarding, water damage cleanup, and complete restoration after wind, hail, snow, or flood damage.
					</p>
					<ul className='list__type1 list__top'>
						<li>Roof repairs and temporary tarping</li>
						<li>Window and door boarding</li>
						<li>Water damage from storms</li>
						<li>Complete restoration services</li>
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
export default TabsIndex__item6;