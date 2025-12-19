'use client';

const WhyChooseUs = () => {
	const features = [
		{
			icon: 'icon-154518',
			title: 'Only Restoration Company in the Region',
			text: 'We are the exclusive restoration company serving Pinedale & Sublette County, Wyoming, providing unmatched local expertise.'
		},
		{
			icon: 'icon-3410263',
			title: 'Local Expertise & Rapid Response',
			text: 'Deep knowledge of Wyoming weather patterns and building structures ensures the best restoration solutions.'
		},
		{
			icon: 'icon-2321397',
			title: 'Direct Insurance Billing',
			text: 'We work directly with your insurance company to streamline the claims process and reduce your stress.'
		},
		{
			icon: 'icon-694055',
			title: 'Certified Technicians',
			text: 'Our team holds industry certifications including IICRC, ensuring professional, quality workmanship.'
		},
		{
			icon: 'icon-900667',
			title: 'Modern Equipment & Technology',
			text: 'State-of-the-art drying equipment, moisture detection tools, and advanced restoration techniques.'
		},
		{
			icon: 'icon-2373426',
			title: '24/7 Emergency Availability',
			text: 'Disasters don\'t wait for business hours. We\'re available around the clock, every day of the year.'
		}
	];

	return (
		<div className="section__indent base__bg section__inner">
			<div className="container container__fluid-lg">
				<div className="text-center mb-[50px] lg-max:mb-[30px]">
					<h2 className="ttsubtitle mb-[20px]">Why Choose Restoration Wranglers</h2>
					<p className="text-lg max-w-[700px] mx-auto">
						Trusted by homeowners and businesses throughout Pinedale & Sublette County for fast, professional disaster restoration
					</p>
				</div>
				<div className="grid md-max:gap-[25px] md:gap-[30px] md:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<div key={index} className="bg-white p-[30px] rounded-lg shadow-md">
							<div className="text-[48px] mb-[20px] base__color">
								<i className={feature.icon}></i>
							</div>
							<h3 className="ttsubtitle_sm mb-[15px]">{feature.title}</h3>
							<p className="text-sm text-[#6c7176] leading-relaxed">{feature.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
