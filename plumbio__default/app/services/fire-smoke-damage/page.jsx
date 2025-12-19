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

const fireDamageFAQs = [
	{
		id: 1,
		title: 'How long does fire damage restoration take?',
		content: 'Fire damage restoration typically takes 2-8 weeks depending on the severity. We provide a detailed timeline after our initial assessment. We work efficiently to get you back home or in business as soon as possible.',
		open: 'item-show'
	},
	{
		id: 2,
		title: 'Can you remove smoke odor completely?',
		content: 'Yes, we use advanced ozone treatment, thermal fogging, and specialized cleaning techniques to completely eliminate smoke odors. Our process ensures no lingering odors remain.',
	},
	{
		id: 3,
		title: 'What should I do immediately after a fire?',
		content: 'Call us immediately for emergency board-up services. Avoid entering the property until it\'s been declared safe. Don\'t attempt to clean smoke damage yourself as improper cleaning can set stains permanently.',
	},
	{
		id: 4,
		title: 'Does insurance cover fire damage restoration?',
		content: 'Most property insurance policies cover fire damage restoration. We work directly with insurance companies and provide detailed documentation for your claim. We can help coordinate with your adjuster.',
	},
	{
		id: 5,
		title: 'What types of fire damage do you handle?',
		content: 'We handle all types of fire damage including kitchen fires, electrical fires, heating system fires, wildfire smoke damage, and structural fires. Each type requires specific expertise - from grease fires that spread smoke throughout HVAC systems to electrical fires that require specialized cleanup.',
	},
	{
		id: 6,
		title: 'How much does fire damage restoration cost?',
		content: 'Costs vary significantly based on fire severity, smoke damage extent, structural damage, and required repairs. Minor fire damage may cost $3,000-$10,000, while extensive damage can range from $20,000-$100,000+. We provide detailed estimates and work with insurance to maximize coverage.',
	},
	{
		id: 7,
		title: 'Can you restore items damaged by smoke?',
		content: 'Many items can be restored through professional cleaning techniques. We offer content restoration services including dry cleaning, wet cleaning, ultrasonic cleaning, and ozone treatment. Electronics, documents, furniture, and personal belongings are often salvageable with proper treatment.',
	},
	{
		id: 8,
		title: 'Is smoke damage dangerous to my health?',
		content: 'Yes, smoke residue contains toxic chemicals and particles that can cause respiratory problems, eye irritation, and other health issues. Soot is particularly hazardous. Professional cleanup and air quality restoration are essential for safety. We use HEPA filtration and air scrubbing to ensure safe air quality.',
	},
	{
		id: 9,
		title: 'How do you remove soot from different surfaces?',
		content: 'Different surfaces require specific cleaning methods. We use dry cleaning for light soot, wet cleaning for moderate deposits, abrasive cleaning for heavy buildup, and specialized techniques for delicate materials. Our technicians are trained in IICRC standards for proper soot removal.',
	},
	{
		id: 10,
		title: 'What is the difference between fire damage and smoke damage?',
		content: 'Fire damage refers to physical destruction from flames (burned materials, structural damage). Smoke damage includes soot, odors, and chemical residues that spread throughout the property via HVAC systems. Both require professional restoration - smoke damage often extends far beyond the fire area.',
	},
	{
		id: 11,
		title: 'Do you handle both residential and commercial fire damage?',
		content: 'Yes, we provide fire damage restoration for homes, businesses, offices, and industrial facilities throughout Pinedale & Sublette County. Commercial fire damage often requires specialized equipment and coordination with business operations, which we handle professionally.',
	},
	{
		id: 12,
		title: 'How quickly should I start fire damage restoration?',
		content: 'Start immediately - within 24-48 hours. Soot and smoke residue become more difficult to remove over time, and secondary water damage from firefighting efforts can lead to mold growth. Quick response minimizes damage and restoration costs.',
	},
	{
		id: 13,
		title: 'What happens to my belongings during fire restoration?',
		content: 'We carefully inventory all belongings and determine what can be restored. Salvageable items are professionally cleaned using appropriate methods. We offer content pack-out services to safely store and clean items off-site during structural restoration.',
	},
	{
		id: 14,
		title: 'Can I stay in my home during fire damage restoration?',
		content: 'It depends on the extent of damage. Minor smoke damage may allow you to stay, but extensive fire damage, structural concerns, or unsafe air quality require temporary relocation. We help coordinate temporary housing and work efficiently to get you back home safely.',
	},
];

const processSteps = [
	{ step: 1, title: 'Emergency Board-Up', description: 'Immediate property securing with professional board-up to prevent further damage and unauthorized access.' },
	{ step: 2, title: 'Damage Assessment', description: 'Thorough inspection to identify all fire, smoke, and water damage throughout your property.' },
	{ step: 3, title: 'Water Removal', description: 'Extract water from firefighting efforts to prevent secondary water damage and mold growth.' },
	{ step: 4, title: 'Soot & Smoke Removal', description: 'Professional cleaning of all surfaces to remove soot, smoke residue, and odors.' },
	{ step: 5, title: 'Odor Elimination', description: 'Advanced ozone treatment and thermal fogging to completely eliminate smoke odors.' },
	{ step: 6, title: 'Restoration & Rebuild', description: 'Complete restoration including structural repairs, painting, and reconstruction to pre-fire condition.' }
];

export const metadata = {
	title: 'Fire & Smoke Damage Restoration Pinedale WY | 24/7 Service',
	description: 'Complete fire and smoke damage restoration in Pinedale & Sublette County. Emergency board-up, soot removal, odor elimination, and full restoration services.',
};

export default function FireSmokeDamage() {
	return (
		<>
			<PageTitle dataTitle="Fire & Smoke Damage Restoration" />
			<main id="tt-pageContent" className="overflow-hidden">
				<div className="section__indent">
					<div className="container container__fluid-lg">
						<div className="md:flex md:gap-[30px] lg:gap-[60px]">
							<div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
								<SectionTitle
									dataSubtitle="fire & smoke damage"
									dataTitle="Complete Fire & Smoke Damage Restoration Services"
									dataMaxWidth="630px"
								/>
								<div className="leading-none mb-[30px]">
									<Image
										src="/images/20240213_150701.jpg"
										width={735}
										height={511}
										quality={90}
										loading="eager"
										alt="Fire and smoke damage restoration services in Pinedale Wyoming"
									/>
								</div>
								<p className="mb-[20px]">
									Fire damage is devastating, but quick professional response can make all the difference. Restoration Wranglers 
									provides comprehensive fire and smoke damage restoration services throughout Pinedale & Sublette County, Wyoming.
								</p>
								<p className="mb-[30px]">
									Our certified team handles everything from emergency board-up to complete restoration, including soot removal, 
									smoke odor elimination, and structural repairs. We understand the emotional toll of fire damage and work 
									compassionately to restore your property and peace of mind.
								</p>

								<div className="section__indent base__bg section__inner mb-[50px] rounded-lg p-[40px]">
									<SectionTitle
										dataSubtitle="our process"
										dataTitle="Our Fire Damage Restoration Process"
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
									icon="icon-2321397"
									subtitle="fire damage types"
									title="Types of Fire Damage We Handle"
									variant="default"
								>
									<p className="mb-[25px]">
										Different types of fires cause different types of damage, each requiring specialized restoration approaches:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceTypeCard
											icon="icon-2321397"
											title="Kitchen Fires"
											description="Grease fires spread smoke and soot through HVAC systems, requiring thorough duct cleaning and odor removal throughout the property."
										/>
										<ServiceTypeCard
											icon="icon-3410263"
											title="Electrical Fires"
											description="Often cause localized damage but can create extensive smoke damage. We ensure electrical safety before restoration begins."
										/>
										<ServiceTypeCard
											icon="icon-154518"
											title="Heating System Fires"
											description="Furnace or chimney fires can spread smoke and soot throughout the home, requiring comprehensive cleaning."
										/>
										<ServiceTypeCard
											icon="icon-2373426"
											title="Wildfire Smoke Damage"
											description="Even if your property doesn't burn, wildfire smoke can penetrate and damage interiors, requiring specialized odor and particle removal."
										/>
										<ServiceTypeCard
											icon="icon-900667"
											title="Structural Fires"
											description="Extensive fires requiring complete assessment, structural repairs, and full restoration including rebuilding damaged areas."
										/>
										<ServiceTypeCard
											icon="icon-694055"
											title="Vehicle Fires"
											description="Fires in attached garages can cause significant smoke damage to the home, requiring immediate response."
										/>
									</div>
								</ServiceSection>

								<ServiceSection
									icon="icon-2373426"
									subtitle="removal techniques"
									title="Soot & Smoke Removal Techniques"
									variant="bordered"
								>
									<p className="mb-[25px]">
										Professional soot and smoke removal requires specialized techniques and equipment. We use industry-standard methods:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Dry Cleaning"
											description="For light soot deposits, we use specialized dry cleaning sponges and vacuums to remove particles without spreading them."
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Wet Cleaning"
											description="Moderate soot deposits are cleaned with appropriate cleaning solutions that break down and remove residue safely."
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Abrasive Cleaning"
											description="Heavy soot buildup may require gentle abrasive methods to remove stubborn deposits without damaging surfaces."
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Ultrasonic Cleaning"
											description="For delicate items and electronics, ultrasonic cleaning safely removes soot and smoke residue."
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="HVAC Duct Cleaning"
											description="Smoke travels through HVAC systems, requiring professional duct cleaning to remove particles and odors."
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Surface Treatment"
											description="Specialized sealants and treatments prevent soot from bleeding through paint and ensure complete removal."
										/>
									</div>
								</ServiceSection>

								<ServiceSection
									icon="icon-900667"
									subtitle="odor elimination"
									title="Odor Elimination Methods"
									variant="highlighted"
								>
									<p className="mb-[25px]">
										Smoke odors penetrate deeply into materials and can persist for months without proper treatment. We use multiple advanced techniques:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Ozone Treatment"
											description="Ozone generators break down odor molecules at the molecular level, eliminating smoke odors from air and porous materials."
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Thermal Fogging"
											description="Heated deodorizing agents penetrate materials to neutralize odors in walls, insulation, and other hard-to-reach areas."
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Hydroxyl Generators"
											description="Advanced technology that safely eliminates odors while the property is occupied, using natural oxidation processes."
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Air Scrubbing"
											description="HEPA filtration systems continuously filter air to remove smoke particles and odors during and after restoration."
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Sealants"
											description="Specialized sealants prevent odors from trapped smoke from re-emerging after restoration is complete."
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Content Cleaning"
											description="Professional cleaning of all affected belongings removes smoke odors from fabrics, furniture, and personal items."
										/>
									</div>
								</ServiceSection>

								<ServiceSection
									icon="icon-154518"
									subtitle="safety & assessment"
									title="Structural Assessment & Safety"
									variant="default"
								>
									<p className="mb-[25px]">
										Fire damage can compromise structural integrity. Our comprehensive assessment ensures safety before restoration begins:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Structural Inspection"
											description="We assess beams, joists, and load-bearing walls for fire damage and determine if repairs or replacement are needed."
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Electrical Safety"
											description="All electrical systems are inspected and tested before restoration. Damaged wiring is repaired or replaced by licensed electricians."
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="HVAC Assessment"
											description="Heating and cooling systems are inspected for smoke damage and cleaned or replaced as needed to prevent recontamination."
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Roof & Exterior"
											description="Fire damage to roofs, windows, and exterior walls is assessed and secured to prevent further damage."
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Code Compliance"
											description="All restoration work meets local building codes and insurance requirements for safety and compliance."
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Safety Protocols"
											description="We follow strict safety protocols during restoration, including proper ventilation and protective measures."
										/>
									</div>
								</ServiceSection>

								<ServiceSection
									icon="icon-694055"
									subtitle="content restoration"
									title="Content Restoration & Cleaning"
									variant="bordered"
								>
									<p className="mb-[25px]">
										Many belongings can be saved through professional restoration. We offer comprehensive content cleaning services:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Document Restoration"
											description="Fire-damaged documents, photos, and important papers can often be restored through specialized techniques."
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Electronics Cleaning"
											description="Professional cleaning of electronics, appliances, and devices to remove soot and restore functionality."
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Furniture Restoration"
											description="Upholstery cleaning, refinishing, and repair services to restore damaged furniture."
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Clothing & Textiles"
											description="Professional dry cleaning and specialized treatments remove smoke odors and soot from fabrics."
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Artwork & Valuables"
											description="Specialized restoration services for artwork, antiques, and valuable items damaged by fire or smoke."
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Content Pack-Out"
											description="Safe removal and storage of belongings during structural restoration, with professional cleaning before return."
										/>
									</div>
									<p className="mt-[25px] mb-0 text-center text-[#6c7176]">
										We inventory all items and work to restore as much as possible. Items that cannot be restored are documented for insurance purposes.
									</p>
								</ServiceSection>

								<ServiceSection
									icon="icon-2321397"
									subtitle="why choose us"
									title="Why Choose Us for Fire Damage Restoration"
									variant="highlighted"
								>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-4">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="24/7 Emergency Response"
											description="Emergency fire damage response available around the clock"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Immediate Board-Up"
											description="Immediate board-up and property securing"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Complete Soot Removal"
											description="Complete soot and smoke residue removal"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Advanced Odor Elimination"
											description="Advanced odor elimination technology"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Direct Insurance Billing"
											description="Direct insurance billing and claims assistance"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Full Restoration"
											description="Full restoration from cleanup to rebuild"
										/>
										<ServiceFeatureCard
											icon="icon-2373426"
											title="IICRC Certified"
											description="IICRC-certified fire and smoke restoration specialists"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Content Restoration"
											description="Content restoration and cleaning services"
										/>
									</div>
								</ServiceSection>
							</div>
							<div className="lg:basis-1/3 md:basis-5/12 md-max:mt-[40px]">
								<div className="bg-base__bg p-[30px] rounded-lg mb-[30px]">
									<h3 className="ttsubtitle_sm mb-[20px]">Emergency Service</h3>
									<p className="text-sm mb-[20px] text-[#6c7176]">
										Fire damage requires immediate attention. Call us 24/7 for emergency response.
									</p>
									<a href="tel:3073237777" className="btn btn__invert w-full text-center block">
										Call 307-323-7777
									</a>
								</div>
								<div className="bg-base__bg p-[30px] rounded-lg">
									<h3 className="ttsubtitle_sm mb-[20px]">Related Services</h3>
									<ul className="list__type1">
										<li><Link href="/services/water-damage-restoration">Water Damage Restoration</Link></li>
										<li><Link href="/services/mold-remediation">Mold Remediation</Link></li>
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
							dataTitle="Fire Damage Restoration FAQs"
							dataText="Common questions about our fire and smoke damage restoration services"
							dataAddClass="text-center"
							dataMaxWidth="600px"
						/>
						<div className="max-w-[800px] mx-auto">
							<Accordion dataSrcData={fireDamageFAQs} />
						</div>
					</div>
				</div>

				<ContactFormSection />
				<EmergencyResponse />
			</main>
		</>
	);
}
