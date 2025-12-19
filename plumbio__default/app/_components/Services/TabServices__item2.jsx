'use client';
import Image from 'next/legacy/image';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import style from './TabServices.module.css'
const TabsIndex__item2 = ({onClickBtn}) => {
	return (
		<>
			<div className={`md:flex md:gap-[30px] lg:gap-[60px] md:flex-row-reverse`}>
				<div className="md:basis-1/2">
					<div className='img__fixed-height'>
						<Image
							src='/images/services/tab-img02.jpg'
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
						dataTitle="Fire & Smoke Damage Restoration"
						dataAddClass="blocktitle__topNone2"
					/>
					<p>
					Complete fire and smoke damage restoration services. We provide emergency board-up, soot removal, odor elimination, and full restoration to return your property to pre-fire condition. Our certified technicians handle all aspects of fire damage cleanup.
					</p>
					<ul className='list__type1 list__top'>
						<li>Emergency board-up within 60 minutes</li>
						<li>Professional soot and smoke residue removal</li>
						<li>Advanced odor elimination technology</li>
						<li>Complete structural restoration and rebuild</li>
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
export default TabsIndex__item2;