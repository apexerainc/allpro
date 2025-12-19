import PageTitle from "../_components/Common/PageTitle";
import SectionTitle from '../_components/Common/SectionTitle';
import EmergencyResponse from '../_components/index/EmergencyResponse';
import ContactFormSection from '../_components/Common/ContactFormSection';

const serviceAreas = [
	'Pinedale',
	'Big Piney',
	'Marbleton',
	'Bondurant',
	'Daniel',
	'Boulder',
	'Cora',
	'Farson',
	'LaBarge',
	'Sublette County',
	'All surrounding communities'
];

export const metadata = {
	title: 'Service Area - Pinedale & Sublette County WY | Restoration Wranglers',
	description: 'Restoration Wranglers proudly serves Pinedale, Big Piney, Marbleton, and all of Sublette County, Wyoming with 24/7 emergency restoration services.',
};

export default function ServiceArea() {
	return (
		<>
			<PageTitle dataTitle="Service Area" />
			<main id="tt-pageContent" className="overflow-hidden">
				<div className="section__indent">
					<div className="container container__fluid-lg">
						<SectionTitle
							dataSubtitle="our coverage area"
							dataTitle="Proudly Serving Pinedale & Sublette County, Wyoming"
							dataText="The only restoration company serving the region with 24/7 emergency response"
							dataAddClass="text-center"
							dataMaxWidth="700px"
						/>
					</div>
				</div>

				<div className="section__indent base__bg section__inner">
					<div className="container container__fluid-lg">
						<div className="grid md:grid-cols-2 gap-[40px] lg-max:gap-[30px]">
							<div>
								<h3 className="ttsubtitle_sm mb-[20px]">Communities We Serve</h3>
								<p className="mb-[30px] text-[#6c7176]">
									Restoration Wranglers is proud to be the only restoration company serving Pinedale & Sublette County, 
									Wyoming. We provide comprehensive disaster restoration services to all communities in our service area.
								</p>
								<div className="grid grid-cols-2 gap-[15px]">
									{serviceAreas.map((area, index) => (
										<div key={index} className="base__color font-bold">
											{area}
										</div>
									))}
								</div>
							</div>
							<div>
								<h3 className="ttsubtitle_sm mb-[20px]">Response Time Information</h3>
								<ul className="list__type1 mb-[30px]">
									<li>60-minute response time guarantee for emergencies</li>
									<li>Same-day service available for urgent situations</li>
									<li>24/7 availability - no extra charges for after-hours calls</li>
									<li>Local team ensures fast arrival times throughout the region</li>
									<li>Free estimates for all restoration projects</li>
									<li>Direct insurance billing available</li>
								</ul>
								<div className="bg-white p-[30px] rounded-lg">
									<h4 className="ttsubtitle_sm mb-[15px]">Need Service?</h4>
									<p className="text-sm text-[#6c7176] mb-[20px]">
										We're available 24/7 for emergency restoration services throughout our service area.
									</p>
									<a href="tel:3073237777" className="btn btn__invert w-full text-center block">
										Call 307-323-7777
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section__indent">
					<div className="container container__fluid-lg">
						<div className="bg-base__bg p-[50px] lg-max:p-[30px] rounded-lg">
							<div className="text-center mb-[30px]">
								<div className="text-[60px] mb-[20px] base__color">
									<i className="icon-154518"></i>
								</div>
								<h3 className="ttsubtitle_sm mb-[15px]">Coverage Map</h3>
								<p className="text-sm text-[#6c7176] max-w-[600px] mx-auto">
									Our service area covers all of Sublette County, Wyoming, including Pinedale, Big Piney, 
									Marbleton, and surrounding communities. We provide rapid emergency response throughout the region.
								</p>
							</div>
							<div className="bg-white p-[40px] rounded-lg text-center">
								<p className="text-sm text-[#6c7176] mb-[20px]">
									<em>Interactive map coming soon. For now, please contact us to confirm service availability in your area.</em>
								</p>
								<a href="/contact-us" className="btn">
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</div>

				<ContactFormSection />
				<EmergencyResponse />
			</main>
		</>
	);
}
