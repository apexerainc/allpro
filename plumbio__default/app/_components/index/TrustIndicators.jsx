'use client';
import Link from 'next/link';

const TrustIndicators = () => {
	const indicators = [
		{
			icon: 'icon-3410263',
			title: 'Available 24/7/365',
			text: 'Emergency response anytime, day or night'
		},
		{
			icon: 'icon-154518',
			title: 'Licensed & Insured',
			text: 'Fully licensed and insured for your protection'
		},
		{
			icon: 'icon-694055',
			title: '15+ Years Experience',
			text: 'Trusted expertise in disaster restoration'
		},
		{
			icon: 'icon-2321397',
			title: 'Local Family Owned',
			text: 'Proudly serving Pinedale & Sublette County'
		},
		{
			icon: 'icon-900667',
			title: '60-Minute Response',
			text: 'Fast emergency response time guarantee'
		}
	];

	return (
		<div className="section__indent-top base__bg section__inner">
			<div className="container container__fluid-lg">
				<div className="grid md-max:gap-[20px] md:gap-[30px] md:grid-cols-2 lg:grid-cols-5">
					{indicators.map((item, index) => (
						<div key={index} className="text-center">
							<div className="text-[48px] mb-[15px] base__color">
								<i className={item.icon}></i>
							</div>
							<h3 className="ttsubtitle_sm mb-[10px]">{item.title}</h3>
							<p className="text-sm text-[#6c7176]">{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TrustIndicators;
