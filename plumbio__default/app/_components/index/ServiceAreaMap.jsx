'use client';

const ServiceAreaMap = () => {
	const areas = [
		'Pinedale',
		'Big Piney',
		'Marbleton',
		'Bondurant',
		'Daniel',
		'Boulder',
		'Cora',
		'Farson',
		'LaBarge'
	];

	return (
		<div className="section__indent">
			<div className="container container__fluid-lg">
				<div className="text-center mb-[50px] lg-max:mb-[30px]">
					<h2 className="ttsubtitle mb-[20px]">Our Service Area</h2>
					<p className="text-lg max-w-[700px] mx-auto mb-[30px]">
						Proudly serving Pinedale & Sublette County, Wyoming and surrounding communities
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-[40px] lg-max:gap-[30px]">
					<div>
						<div className="bg-base__bg p-[40px] rounded-lg h-full flex items-center justify-center">
							<div className="text-center">
								<div className="text-[60px] mb-[20px] base__color">
									<i className="icon-154518"></i>
								</div>
								<h3 className="ttsubtitle_sm mb-[20px]">Coverage Area</h3>
								<p className="text-sm text-[#6c7176] mb-[30px]">
									We provide 24/7 emergency restoration services throughout Sublette County, Wyoming, 
									with rapid response times to all communities in our service area.
								</p>
								<div className="grid grid-cols-3 gap-[15px] text-sm">
									{areas.map((area, index) => (
										<div key={index} className="base__color font-bold">
											{area}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="bg-base__bg p-[40px] rounded-lg h-full">
							<h3 className="ttsubtitle_sm mb-[20px]">Response Time Information</h3>
							<ul className="list__type1 space-y-[15px]">
								<li>60-minute response time guarantee for emergencies</li>
								<li>Same-day service available for urgent situations</li>
								<li>24/7 availability - no extra charges for after-hours calls</li>
								<li>Local team ensures fast arrival times</li>
								<li>Free estimates for all restoration projects</li>
							</ul>
							<div className="mt-[30px] pt-[30px] border-t border-base__border">
								<p className="text-sm text-[#6c7176] mb-[15px]">
									<strong className="base__color">Need immediate assistance?</strong>
								</p>
								<a 
									href="tel:3073237777" 
									className="btn btn__invert inline-block"
								>
									Call 307-323-7777
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceAreaMap;
