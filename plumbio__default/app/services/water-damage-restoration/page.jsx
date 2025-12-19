import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from '../../_components/Common/SectionTitle';
import Image from 'next/legacy/image';
import Accordion from '../../_components/Common/Accordion';
import EmergencyResponse from '../../_components/index/EmergencyResponse';
import ContactFormSection from '../../_components/Common/ContactFormSection';
import Link from 'next/link';
import ServiceTypeCard from '../../_components/Services/ServiceTypeCard';
import ServiceFeatureCard from '../../_components/Services/ServiceFeatureCard';
import ServiceSection from '../../_components/Services/ServiceSection';
import InfoHighlightBox from '../../_components/Services/InfoHighlightBox';

const waterDamageFAQs = [
	{
		id: 1,
		title: 'How quickly should I call for water damage restoration?',
		content: 'Time is critical with water damage. You should call immediately - within 24-48 hours to prevent mold growth and structural damage. The faster we respond, the less damage and lower the restoration costs.',
		open: 'item-show'
	},
	{
		id: 2,
		title: 'Will my insurance cover water damage restoration?',
		content: 'Most homeowner insurance policies cover sudden and accidental water damage. We work directly with insurance companies and can help you navigate the claims process. We provide detailed documentation for your claim.',
	},
	{
		id: 3,
		title: 'How long does water damage restoration take?',
		content: 'The timeline depends on the extent of damage. Minor water damage may take 3-5 days, while severe flooding can take 2-4 weeks. We provide a detailed timeline after our initial assessment.',
	},
	{
		id: 4,
		title: 'Do I need to move out during water damage restoration?',
		content: 'It depends on the severity. For minor damage, you may be able to stay. For extensive flooding or mold issues, temporary relocation may be recommended for safety. We can help coordinate temporary housing if needed.',
	},
	{
		id: 5,
		title: 'What are the different categories of water damage?',
		content: 'Water damage is categorized into three types: Category 1 (clean water from pipes, sinks), Category 2 (gray water with some contamination from appliances), and Category 3 (black water with sewage or flood contamination). Each requires different treatment protocols, and we handle all categories safely and effectively.',
	},
	{
		id: 6,
		title: 'How much does water damage restoration cost?',
		content: 'Costs vary based on damage extent, water category, affected square footage, and required repairs. Minor damage may cost $1,000-$3,000, while extensive flooding can range from $5,000-$20,000+. We provide free estimates and work directly with insurance to minimize out-of-pocket costs.',
	},
	{
		id: 7,
		title: 'Can I clean up water damage myself?',
		content: 'While you can remove standing water, professional restoration is essential for complete drying, mold prevention, and structural safety. DIY cleanup often misses hidden moisture in walls, floors, and subfloors, leading to mold growth and structural damage. Professional equipment and expertise ensure thorough restoration.',
	},
	{
		id: 8,
		title: 'What health risks are associated with water damage?',
		content: 'Water damage can lead to mold growth, bacteria, and structural hazards. Standing water can breed harmful bacteria, and moisture promotes mold growth that can cause respiratory issues, allergies, and other health problems. Professional cleanup and sanitization eliminate these risks.',
	},
	{
		id: 9,
		title: 'How do you detect hidden water damage?',
		content: 'We use advanced moisture detection equipment including thermal imaging cameras, moisture meters, and hygrometers to identify water in walls, floors, ceilings, and other hidden areas. This technology ensures we find and dry all affected areas, preventing future problems.',
	},
	{
		id: 10,
		title: 'What happens to my personal belongings during restoration?',
		content: 'We carefully inventory and handle all affected belongings. Salvageable items are professionally cleaned, dried, and restored. For extensive damage, we offer content pack-out services to safely store your belongings during restoration. We work to save as much as possible.',
	},
	{
		id: 11,
		title: 'How do you prevent mold after water damage?',
		content: 'Mold prevention requires rapid water removal, complete drying (including hidden areas), proper dehumidification, and sanitization. We use industrial-grade equipment to achieve optimal moisture levels and apply antimicrobial treatments. Our process follows IICRC standards to prevent mold growth.',
	},
	{
		id: 12,
		title: 'What should I do immediately after discovering water damage?',
		content: 'First, ensure safety - turn off electricity if water is near electrical sources. Stop the water source if possible (shut off main valve). Remove valuable items from affected areas. Document damage with photos. Call us immediately - don\'t wait. Avoid using appliances or electronics that have been exposed to water.',
	},
	{
		id: 13,
		title: 'Do you handle both residential and commercial water damage?',
		content: 'Yes, we provide water damage restoration for both residential and commercial properties throughout Pinedale & Sublette County. Our team is experienced with homes, businesses, offices, and industrial facilities. We scale our services to meet the needs of any property size.',
	},
	{
		id: 14,
		title: 'What makes your water damage restoration different?',
		content: 'As the only restoration company in Pinedale & Sublette County, we provide local expertise with 60-minute response times. Our IICRC-certified technicians use state-of-the-art equipment, and we offer complete services from emergency response to final repairs. We work directly with insurance and provide detailed documentation throughout the process.',
	},
];

const processSteps = [
	{
		step: 1,
		title: 'Emergency Response',
		description: 'We arrive within 60 minutes to assess the damage and begin immediate water extraction.'
	},
	{
		step: 2,
		title: 'Water Extraction',
		description: 'Industrial-grade pumps and vacuums remove standing water quickly to prevent further damage.'
	},
	{
		step: 3,
		title: 'Drying & Dehumidification',
		description: 'Professional air movers and dehumidifiers dry all affected areas, including walls, floors, and hidden spaces.'
	},
	{
		step: 4,
		title: 'Cleaning & Sanitizing',
		description: 'All affected surfaces are cleaned, sanitized, and treated to prevent mold and bacteria growth.'
	},
	{
		step: 5,
		title: 'Restoration & Repair',
		description: 'We restore your property to pre-loss condition, including repairs to drywall, flooring, and structural elements.'
	}
];

export const metadata = {
	title: 'Water Damage Restoration Pinedale WY | 24/7 Emergency Service',
	description: 'Fast water damage restoration in Pinedale & Sublette County. 60-minute response, professional extraction, drying, and restoration. Insurance billing available.',
};

export default function WaterDamageRestoration() {
	return (
		<>
			<PageTitle dataTitle="Water Damage Restoration" />
			<main id="tt-pageContent" className="overflow-hidden">
				<div className="section__indent">
					<div className="container container__fluid-lg">
						<div className="md:flex md:gap-[30px] lg:gap-[60px]">
							<div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
								<SectionTitle
									dataSubtitle="water damage restoration"
									dataTitle="Professional Water Damage Restoration in Pinedale & Sublette County"
									dataMaxWidth="630px"
								/>
								<div className="leading-none mb-[39px] text-right">
									<Image
										src="/images/services/services_img01.jpg"
										width={735}
										height={511}
										quality={90}
										loading="eager"
										alt="Professional water damage restoration equipment in Pinedale Wyoming"
									/>
								</div>
								<p className="mb-[20px]">
									Water damage can strike at any time - from burst pipes, flooding, appliance failures, or severe weather. 
									As the only restoration company serving Pinedale & Sublette County, Wyoming, Restoration Wranglers 
									provides fast, professional water damage restoration services 24/7.
								</p>
								<p className="mb-[30px]">
									Our certified technicians use state-of-the-art equipment to extract water, dry your property, and restore 
									it to pre-loss condition. We understand that every minute counts when dealing with water damage, which 
									is why we guarantee a 60-minute response time for emergencies.
								</p>

								<div className="section__indent base__bg section__inner mb-[50px] rounded-lg p-[40px] flex items-center justify-center">
									<SectionTitle
										dataSubtitle="our process"
										dataTitle="Our Water Damage Restoration Process"
										dataText="We follow a proven 5-step process to ensure complete restoration of your property"
										dataAddClass="mb-[30px]"
										dataMaxWidth="100%"
									/>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										{processSteps.map((item) => (
											<div key={item.step} className="bg-white rounded-lg p-[25px] shadow-md hover:shadow-lg transition-shadow">
												<div className="flex items-start gap-[15px] mb-[15px]">
													<div className="flex-shrink-0 w-[50px] h-[50px] bg-[#c8102e] text-white rounded-full flex items-center justify-center font-bold text-lg border-0">
														{item.step}
													</div>
													<h5 className="ttsubtitle_sm mb-0 flex-1">{item.title}</h5>
												</div>
												<p className="text-sm text-[#6c7176] mb-0">{item.description}</p>
											</div>
										))}
									</div>
								</div>

								<div className="section__indent base__bg section__inner mb-[50px] rounded-lg p-[40px]">
									<SectionTitle
										dataSubtitle="water damage types"
										dataTitle="Types of Water Damage We Handle"
										dataText="Water damage comes in many forms, and each requires specific expertise and equipment. We handle all types of water damage throughout Pinedale & Sublette County."
										dataAddClass="mb-[30px]"
										dataMaxWidth="100%"
									/>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceTypeCard
											icon="icon-2373426"
											title="Burst Pipes"
											description="Frozen pipes, aging plumbing, or pressure issues can cause pipes to burst, flooding your property quickly."
										/>
										<ServiceTypeCard
											icon="icon-3410263"
											title="Appliance Failures"
											description="Water heaters, washing machines, dishwashers, and refrigerators can leak or overflow, causing significant damage."
										/>
										<ServiceTypeCard
											icon="icon-154518"
											title="Roof Leaks"
											description="Storm damage, aging shingles, or ice dams can allow water to penetrate your roof and damage ceilings, walls, and insulation."
										/>
										<ServiceTypeCard
											icon="icon-2321397"
											title="Flooding"
											description="Severe weather, snowmelt, or overflowing rivers can cause extensive flooding requiring immediate professional response."
										/>
										<ServiceTypeCard
											icon="icon-900667"
											title="Sewage Backups"
											description="Blocked sewer lines or septic system failures create hazardous Category 3 water damage requiring specialized cleanup."
										/>
										<ServiceTypeCard
											icon="icon-694055"
											title="Foundation Leaks"
											description="Groundwater infiltration through foundation cracks can cause persistent moisture problems and structural issues."
										/>
									</div>
								</div>

								<ServiceSection
									icon="icon-2373426"
									subtitle="professional equipment"
									title="Our Equipment & Technology"
									variant="default"
								>
									<p className="mb-[25px]">
										Professional water damage restoration requires industrial-grade equipment and advanced technology. We invest in the latest tools to ensure thorough, efficient restoration:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Industrial Water Extractors"
											description="High-capacity pumps and truck-mounted extraction units remove thousands of gallons of water quickly."
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Commercial Dehumidifiers"
											description="Industrial dehumidifiers remove moisture from air and materials, preventing mold growth and structural damage."
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Air Movers"
											description="High-velocity air movers create airflow to accelerate evaporation and drying of all surfaces."
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Moisture Detection Equipment"
											description="Thermal imaging cameras, moisture meters, and hygrometers identify hidden water in walls, floors, and ceilings."
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Air Scrubbers"
											description="HEPA filtration systems remove contaminants, mold spores, and odors from the air during restoration."
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Injection Drying Systems"
											description="Specialized equipment to dry inside wall cavities and other hard-to-reach areas."
										/>
									</div>
								</ServiceSection>

								<ServiceSection
									icon="icon-900667"
									subtitle="warning signs"
									title="Signs You Need Water Damage Restoration"
									variant="bordered"
								>
									<p className="mb-[25px]">
										Early detection of water damage can prevent costly repairs and health hazards. Watch for these warning signs:
									</p>
									<div className="grid md-max:gap-[15px] md:gap-[20px] md:grid-cols-2 lg:grid-cols-4">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Visible Water"
											description="Standing water, puddles, or water stains on floors, walls, or ceilings"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Musty Odors"
											description="Damp, musty smells often indicate hidden moisture and potential mold growth"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Discoloration"
											description="Water stains, yellowing, or dark spots on walls, ceilings, or floors"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Warping"
											description="Buckled floors, warped baseboards, or swollen doors and cabinets"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Peeling Paint"
											description="Moisture behind walls causes paint and wallpaper to bubble or peel"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Increased Humidity"
											description="Noticeable dampness, condensation on windows, or a general feeling of moisture"
										/>
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Mold Growth"
											description="Visible mold, which indicates water damage has been present for 24-48 hours or more"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Health Issues"
											description="Allergies, respiratory problems, or persistent cold symptoms may indicate mold from water damage"
										/>
									</div>
								</ServiceSection>

								<InfoHighlightBox
									variant="success"
									icon="icon-694055"
									title="Water Damage Prevention Tips"
									className="mb-[50px]"
								>
									<p className="mb-[20px]">
										While some water damage is unavoidable, many incidents can be prevented with proper maintenance and awareness:
									</p>
									<div className="grid md-max:gap-[15px] md:gap-[20px] md:grid-cols-2">
										<div>
											<ul className="list__type1">
												<li><strong>Regular Plumbing Inspections:</strong> Have a plumber inspect your pipes, water heater, and appliances annually</li>
												<li><strong>Winterize Pipes:</strong> Insulate pipes in unheated areas and let faucets drip during freezing temperatures</li>
												<li><strong>Maintain Appliances:</strong> Replace washing machine hoses every 3-5 years and check for leaks regularly</li>
												<li><strong>Roof Maintenance:</strong> Inspect and repair roof damage promptly, especially after storms</li>
											</ul>
										</div>
										<div>
											<ul className="list__type1">
												<li><strong>Gutter Cleaning:</strong> Keep gutters clear to prevent water backup and foundation issues</li>
												<li><strong>Foundation Sealing:</strong> Seal foundation cracks and ensure proper drainage away from your home</li>
												<li><strong>Monitor Water Bills:</strong> Unexplained increases may indicate hidden leaks</li>
												<li><strong>Know Your Shut-Off Valves:</strong> Locate and test main water shut-off valve for quick response to emergencies</li>
											</ul>
										</div>
									</div>
								</InfoHighlightBox>

								<InfoHighlightBox
									variant="highlight"
									icon="icon-3410263"
									title="Insurance Claims Process for Water Damage"
									className="mb-[50px]"
								>
									<p className="mb-[20px]">
										Navigating insurance claims for water damage can be complex. We simplify the process and work directly with your insurance company:
									</p>
									<div className="grid md-max:gap-[15px] md:gap-[20px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Immediate Documentation"
											description="We photograph and document all damage before cleanup begins, providing evidence for your claim"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Detailed Estimates"
											description="Comprehensive cost estimates that meet insurance requirements and standards"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Direct Billing"
											description="We can bill your insurance company directly, reducing your paperwork and upfront costs"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Claims Coordination"
											description="Our team communicates with your adjuster throughout the restoration process"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Code Compliance"
											description="We ensure all work meets local building codes and insurance requirements"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Supplemental Claims"
											description="If additional damage is discovered, we help file supplemental claims with proper documentation"
										/>
									</div>
									<p className="mt-[25px] mb-0">
										Most homeowner insurance policies cover sudden and accidental water damage, but coverage varies. We help you understand your policy and maximize your claim. Flood damage typically requires separate flood insurance, which we can help you navigate.
									</p>
								</InfoHighlightBox>

								<div className="section__indent base__bg section__inner mb-[50px] rounded-lg p-[40px]">
									<SectionTitle
										dataSubtitle="why choose us"
										dataTitle="Why Choose Us for Water Damage Restoration"
										dataAddClass="mb-[30px]"
										dataMaxWidth="100%"
									/>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-4">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="60-Minute Response"
											description="Emergency response time guarantee"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="IICRC Certified"
											description="Certified water damage restoration specialists"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Direct Insurance Billing"
											description="We handle the paperwork for you"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Modern Equipment"
											description="Industrial dehumidifiers and air movers"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Complete Restoration"
											description="From water extraction to final repairs"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Mold Prevention"
											description="Mold prevention and remediation services included"
										/>
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Local Expertise"
											description="Serving Pinedale & Sublette County exclusively"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="24/7 Availability"
											description="No after-hours charges"
										/>
									</div>
								</div>
							</div>
							<div className="lg:basis-1/3 md:basis-5/12 md-max:mt-[40px]">
								<div className="bg-base__bg p-[30px] rounded-lg mb-[30px]">
									<h3 className="ttsubtitle_sm mb-[20px]">Emergency Service</h3>
									<p className="text-sm mb-[20px] text-[#6c7176]">
										Need immediate water damage restoration? Call us 24/7 for emergency response.
									</p>
									<a href="tel:3073237777" className="btn btn__invert w-full text-center block">
										Call 307-323-7777
									</a>
								</div>
								<div className="bg-base__bg p-[30px] rounded-lg">
									<h3 className="ttsubtitle_sm mb-[20px]">Related Services</h3>
									<ul className="list__type1">
										<li><Link href="/services/mold-remediation">Mold Remediation</Link></li>
										<li><Link href="/services/fire-smoke-damage">Fire & Smoke Damage</Link></li>
										<li><Link href="/services/storm-damage">Storm Damage</Link></li>
										<li><Link href="/services/emergency-services">Emergency Services</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section__indent base__bg section__inner">
					<div className="container container__fluid-lg">
						<SectionTitle
							dataSubtitle="frequently asked questions"
							dataTitle="Water Damage Restoration FAQs"
							dataText="Common questions about our water damage restoration services in Pinedale & Sublette County"
							dataAddClass="text-center"
							dataMaxWidth="600px"
						/>
						<div className="max-w-[800px] mx-auto">
							<Accordion dataSrcData={waterDamageFAQs} />
						</div>
					</div>
				</div>

				<ContactFormSection />
				<EmergencyResponse />
			</main>
		</>
	);
}
