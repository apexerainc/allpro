import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from '../../_components/Common/SectionTitle';
import Image from 'next/legacy/image';
import Accordion from '../../_components/Common/Accordion';
import EmergencyResponse from '../../_components/index/EmergencyResponse';
import ContactFormSection from '../../_components/Common/ContactFormSection';
import Link from 'next/link';
import ServiceSection from '../../_components/Services/ServiceSection';
import ServiceFeatureCard from '../../_components/Services/ServiceFeatureCard';
import ServiceTypeCard from '../../_components/Services/ServiceTypeCard';
import InfoHighlightBox from '../../_components/Services/InfoHighlightBox';

const stormDamageFAQs = [
	{
		id: 1,
		title: 'What types of storm damage do you repair?',
		content: 'We handle all types of storm damage including roof damage, broken windows, water intrusion, structural damage, fallen trees, and wind damage. We provide emergency board-up and complete restoration services.',
		open: 'item-show'
	},
	{
		id: 2,
		title: 'How quickly can you respond to storm damage?',
		content: 'We provide 24/7 emergency response with a 60-minute response time guarantee. We prioritize safety and property protection with immediate board-up and tarping services.',
	},
	{
		id: 3,
		title: 'Does insurance cover storm damage restoration?',
		content: 'Most property insurance policies cover storm damage. We work directly with insurance companies, provide detailed documentation, and help coordinate with your adjuster throughout the process.',
	},
	{
		id: 4,
		title: 'What should I do immediately after storm damage?',
		content: 'Call us immediately for emergency board-up and tarping. Document the damage with photos if safe to do so. Avoid entering damaged areas until they\'ve been assessed for safety. Don\'t attempt repairs yourself.',
	},
	{
		id: 5,
		title: 'How much does storm damage restoration cost?',
		content: 'Costs vary significantly based on damage type and extent. Minor roof repairs may cost $500-$2,000, while extensive storm damage can range from $5,000-$50,000+. We provide detailed estimates and work with insurance to maximize coverage.',
	},
	{
		id: 6,
		title: 'What types of storms cause the most damage in Wyoming?',
		content: 'Wyoming experiences severe weather including hailstorms, high winds, heavy snow, ice storms, and occasional tornadoes. Hail damage to roofs and siding is common, as is wind damage from high-altitude winds. We\'re experienced with all Wyoming weather patterns.',
	},
	{
		id: 7,
		title: 'How do you handle multiple types of damage from one storm?',
		content: 'Storms often cause multiple types of damage simultaneously - roof damage, water intrusion, broken windows, and structural issues. We assess all damage, prioritize emergency repairs, and coordinate complete restoration addressing every issue systematically.',
	},
	{
		id: 8,
		title: 'Can you prevent further damage while waiting for insurance?',
		content: 'Yes, we provide immediate emergency repairs including board-up, tarping, and temporary fixes to prevent further damage. These emergency measures are typically covered by insurance and protect your property while claims are processed.',
	},
	{
		id: 9,
		title: 'How long does storm damage restoration take?',
		content: 'Timeline varies by damage extent. Emergency repairs take hours to days. Complete restoration can take 1-8 weeks depending on structural damage, material availability, and weather conditions. We work efficiently and provide detailed timelines.',
	},
	{
		id: 10,
		title: 'Do you handle both residential and commercial storm damage?',
		content: 'Yes, we provide storm damage restoration for homes, businesses, and commercial properties throughout Pinedale & Sublette County. Commercial properties often require specialized coordination and we handle all property types professionally.',
	},
	{
		id: 11,
		title: 'What if I have both storm damage and water damage?',
		content: 'Storm damage often includes water intrusion from rain, snow, or ice. We handle both simultaneously - securing the property, extracting water, drying affected areas, and restoring all damage. Our comprehensive approach addresses all storm-related issues.',
	},
	{
		id: 12,
		title: 'How do you assess hidden storm damage?',
		content: 'We use advanced inspection techniques including thermal imaging, moisture detection, and structural assessment to identify hidden damage. Roof inspections, attic examinations, and wall assessments reveal damage not immediately visible.',
	},
	{
		id: 13,
		title: 'What should I know about insurance claims for storm damage?',
		content: 'Document all damage with photos before cleanup. Don\'t make permanent repairs until insurance assesses damage. We work with your adjuster, provide detailed documentation, and ensure all damage is included in your claim. We can bill insurance directly.',
	},
	{
		id: 14,
		title: 'Can you help prevent future storm damage?',
		content: 'While we can\'t prevent storms, we can recommend improvements to make your property more storm-resistant including roof reinforcements, window upgrades, and structural improvements. We provide recommendations based on local weather patterns.',
	},
];

const processSteps = [
	{ step: 1, title: 'Emergency Response', description: 'Immediate arrival to assess damage and secure your property with board-up and tarping.' },
	{ step: 2, title: 'Damage Assessment', description: 'Comprehensive inspection to identify all storm-related damage including structural, water, and wind damage.' },
	{ step: 3, title: 'Emergency Repairs', description: 'Temporary repairs including board-up, tarping, and water extraction to prevent further damage.' },
	{ step: 4, title: 'Water Removal', description: 'Extract water from rain intrusion to prevent secondary damage and mold growth.' },
	{ step: 5, title: 'Restoration Planning', description: 'Detailed restoration plan and coordination with insurance for complete property restoration.' },
	{ step: 6, title: 'Complete Restoration', description: 'Full restoration including roof repairs, window replacement, structural repairs, and interior restoration.' }
];

export const metadata = {
	title: 'Storm Damage Restoration Pinedale WY | Emergency Roof & Window Repair',
	description: 'Complete storm damage restoration in Pinedale & Sublette County. Emergency board-up, roof repair, window replacement, and full restoration services.',
};

export default function StormDamage() {
	return (
		<>
			<PageTitle dataTitle="Storm Damage Restoration" />
			<main id="tt-pageContent" className="overflow-hidden">
				<div className="section__indent">
					<div className="container container__fluid-lg">
						<div className="md:flex md:gap-[30px] lg:gap-[60px]">
							<div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
								<SectionTitle
									dataSubtitle="storm damage"
									dataTitle="Complete Storm Damage Restoration Services"
									dataMaxWidth="630px"
								/>
								<div className="leading-none mb-[30px]">
									<Image
										src="/images/services/services_img01.jpg"
										width={735}
										height={511}
										quality={90}
										loading="eager"
										alt="Storm damage restoration services in Pinedale Wyoming"
									/>
								</div>
								<p className="mb-[20px]">
									Wyoming weather can be severe, causing significant storm damage to properties. Restoration Wranglers 
									provides comprehensive storm damage restoration services throughout Pinedale & Sublette County.
								</p>
								<p className="mb-[30px]">
									From emergency board-up and tarping to complete restoration, we handle all aspects of storm damage 
									including roof repairs, window replacement, water damage, and structural repairs. Our local expertise 
									with Wyoming weather patterns ensures the best restoration solutions.
								</p>

								<div className="section__indent base__bg section__inner mb-[50px] rounded-lg p-[40px]">
									<SectionTitle
										dataSubtitle="our process"
										dataTitle="Our Storm Damage Restoration Process"
										dataText="We follow a proven 6-step process to ensure complete restoration of your property"
										dataAddClass="mb-[30px]"
										dataMaxWidth="100%"
									/>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										{processSteps.map((item) => (
											<div key={item.step} className="bg-white rounded-lg p-[25px] shadow-md hover:shadow-lg transition-shadow">
												<div className="flex items-start gap-[15px] mb-[15px]">
													<div className="flex-shrink-0 w-[50px] h-[50px] bg-base__color text-white rounded-full flex items-center justify-center font-bold text-lg">
														{item.step}
													</div>
													<h5 className="ttsubtitle_sm mb-0 flex-1">{item.title}</h5>
												</div>
												<p className="text-sm text-[#6c7176] mb-0">{item.description}</p>
											</div>
										))}
									</div>
								</div>

								<ServiceSection
									icon="icon-154518"
									subtitle="storm damage types"
									title="Types of Storm Damage We Handle"
									variant="default"
								>
									<p className="mb-[25px]">
										Wyoming weather can be severe and unpredictable. We handle all types of storm-related damage:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceTypeCard
											icon="icon-154518"
											title="Wind Damage"
											description="High winds can damage roofs, siding, windows, and cause structural issues. We assess and repair all wind-related damage."
										/>
										<ServiceTypeCard
											icon="icon-2321397"
											title="Hail Damage"
											description="Hailstorms are common in Wyoming and can damage roofs, siding, windows, and vehicles. We provide comprehensive hail damage assessment and repair."
										/>
										<ServiceTypeCard
											icon="icon-2373426"
											title="Snow & Ice Damage"
											description="Heavy snow loads and ice dams can cause roof collapse, water intrusion, and structural damage requiring immediate attention."
										/>
										<ServiceTypeCard
											icon="icon-3410263"
											title="Lightning Damage"
											description="Lightning strikes can cause fires, electrical damage, and structural issues requiring specialized assessment and repair."
										/>
										<ServiceTypeCard
											icon="icon-900667"
											title="Rain & Flooding"
											description="Heavy rains and flash flooding can cause water intrusion, foundation issues, and extensive water damage."
										/>
										<ServiceTypeCard
											icon="icon-694055"
											title="Fallen Trees"
											description="High winds and heavy snow can cause trees to fall, damaging roofs, structures, and property requiring emergency removal and repair."
										/>
									</div>
								</ServiceSection>

								<ServiceSection
									icon="icon-3410263"
									subtitle="emergency services"
									title="Emergency Board-Up & Tarping"
									variant="bordered"
								>
									<p className="mb-[25px]">
										Immediate property protection is essential after storm damage. Our emergency services secure your property:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Professional Board-Up"
											description="Secure plywood boarding for broken windows, doors, and openings to prevent unauthorized access and further damage"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Roof Tarping"
											description="Heavy-duty tarps secured properly to protect damaged roofs from additional water intrusion"
										/>
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Structural Stabilization"
											description="Temporary supports and bracing for compromised structures until permanent repairs can be made"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Debris Removal"
											description="Safe removal of fallen trees, branches, and debris that pose safety hazards"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Property Securing"
											description="Comprehensive securing of all openings and damaged areas to protect property and contents"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="24/7 Availability"
											description="Emergency board-up and tarping available immediately, day or night, to minimize further damage"
										/>
									</div>
									<p className="mt-[25px] mb-0 text-center text-[#6c7176]">
										Emergency measures are typically covered by insurance and are essential to prevent secondary damage from weather, theft, or vandalism.
									</p>
								</ServiceSection>

								<ServiceSection
									icon="icon-154518"
									subtitle="roof services"
									title="Roof Damage Assessment & Repair"
									variant="default"
								>
									<p className="mb-[25px]">
										Roof damage is common in Wyoming storms. We provide comprehensive roof services:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Comprehensive Inspection"
											description="Detailed assessment of shingles, flashing, gutters, and structural components"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Hail Damage Evaluation"
											description="Identification of hail damage that may not be immediately visible but can cause future problems"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Wind Damage Repair"
											description="Repair or replacement of damaged shingles, flashing, and roof components"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Leak Identification"
											description="Locating and repairing all sources of water intrusion from storm damage"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Gutter & Downspout Repair"
											description="Repair or replacement of damaged gutters and downspouts to ensure proper drainage"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Complete Roof Replacement"
											description="When damage is extensive, we provide complete roof replacement with quality materials"
										/>
									</div>
									<p className="mt-[25px] mb-0 text-center text-[#6c7176]">
										We work with all roofing materials including asphalt shingles, metal roofing, tile, and flat roofs. All work meets local building codes and insurance requirements.
									</p>
								</ServiceSection>

								<ServiceSection
									icon="icon-2321397"
									subtitle="windows & doors"
									title="Window & Door Replacement"
									variant="bordered"
								>
									<p className="mb-[25px]">
										Broken windows and damaged doors are common in storms. We provide professional replacement services:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Emergency Board-Up"
											description="Immediate securing of broken windows and doors to protect property"
										/>
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Window Replacement"
											description="Professional installation of new windows matching your existing style and energy efficiency"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Door Repair & Replacement"
											description="Repair or replacement of damaged entry doors, garage doors, and storm doors"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Glass Replacement"
											description="Replacement of broken glass in windows, doors, and skylights"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Frame Repair"
											description="Repair of damaged window and door frames to ensure proper fit and security"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Energy Efficiency"
											description="Upgrade options for improved energy efficiency and storm resistance"
										/>
									</div>
								</ServiceSection>

								<ServiceSection
									icon="icon-900667"
									subtitle="structural assessment"
									title="Structural Damage Evaluation"
									variant="default"
								>
									<p className="mb-[25px]">
										Storms can cause structural damage requiring professional assessment and repair:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Foundation Assessment"
											description="Evaluation of foundation damage from flooding, shifting, or impact"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Wall & Framing Inspection"
											description="Assessment of structural framing, load-bearing walls, and support systems"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Roof Structure Evaluation"
											description="Inspection of roof trusses, rafters, and support beams for damage"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Safety Assessment"
											description="Comprehensive safety evaluation to determine if property is safe for occupancy"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Engineering Consultation"
											description="Coordination with structural engineers when needed for complex damage"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Repair Planning"
											description="Detailed plans for structural repairs that meet building codes and insurance requirements"
										/>
									</div>
									<p className="mt-[25px] mb-0 text-center text-[#6c7176]">
										Structural safety is our priority. We ensure all repairs meet or exceed building codes and restore structural integrity.
									</p>
								</ServiceSection>

								<ServiceSection
									icon="icon-154518"
									subtitle="why choose us"
									title="Why Choose Us for Storm Damage Restoration"
									variant="highlighted"
								>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-154518"
											title="24/7 Emergency Response"
											description="24/7 emergency storm damage response"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Immediate Board-Up"
											description="Immediate board-up and tarping services"
										/>
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Complete Roof Repair"
											description="Complete roof and window repair"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Water Damage Restoration"
											description="Water damage restoration from rain intrusion"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Insurance Assistance"
											description="Direct insurance billing and claims assistance"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Local Expertise"
											description="Local expertise with Wyoming weather patterns"
										/>
									</div>
								</ServiceSection>
							</div>
							<div className="lg:basis-1/3 md:basis-5/12 md-max:mt-[40px]">
								<div className="bg-base__bg p-[30px] rounded-lg mb-[30px]">
									<h3 className="ttsubtitle_sm mb-[20px]">Emergency Service</h3>
									<p className="text-sm mb-[20px] text-[#6c7176]">
										Storm damage requires immediate attention. Call us 24/7 for emergency response.
									</p>
									<a href="tel:3073237777" className="btn btn__invert w-full text-center block">
										Call 307-323-7777
									</a>
								</div>
								<div className="bg-base__bg p-[30px] rounded-lg">
									<h3 className="ttsubtitle_sm mb-[20px]">Related Services</h3>
									<ul className="list__type1">
										<li><Link href="/services/water-damage-restoration">Water Damage Restoration</Link></li>
										<li><Link href="/services/fire-smoke-damage">Fire & Smoke Damage</Link></li>
										<li><Link href="/services/mold-remediation">Mold Remediation</Link></li>
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
							dataTitle="Storm Damage Restoration FAQs"
							dataText="Common questions about our storm damage restoration services"
							dataAddClass="text-center"
							dataMaxWidth="600px"
						/>
						<div className="max-w-[800px] mx-auto">
							<Accordion dataSrcData={stormDamageFAQs} />
						</div>
					</div>
				</div>

				<ContactFormSection />
				<EmergencyResponse />
			</main>
		</>
	);
}
