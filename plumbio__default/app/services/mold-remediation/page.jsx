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

const moldFAQs = [
	{
		id: 1,
		title: 'How do I know if I have a mold problem?',
		content: 'Signs include musty odors, visible mold growth, water stains, or health symptoms like allergies or respiratory issues. We provide professional mold testing and inspection to identify the extent of the problem.',
		open: 'item-show'
	},
	{
		id: 2,
		title: 'Is mold dangerous to my health?',
		content: 'Yes, mold can cause serious health issues including allergies, asthma attacks, respiratory problems, and other illnesses. Professional remediation is essential, especially for black mold or extensive growth.',
	},
	{
		id: 3,
		title: 'How long does mold remediation take?',
		content: 'Mold remediation typically takes 1-5 days depending on the extent of contamination. We provide containment, removal, cleaning, and prevention to ensure complete remediation.',
	},
	{
		id: 4,
		title: 'Will mold come back after remediation?',
		content: 'Proper remediation includes identifying and fixing the moisture source. We provide moisture control recommendations and follow-up inspections to prevent recurrence.',
	},
	{
		id: 5,
		title: 'What is black mold and is it more dangerous?',
		content: 'Stachybotrys chartarum (black mold) produces mycotoxins that can cause severe health issues. While all mold should be professionally removed, black mold requires extra precautions. We use proper containment and safety protocols for all mold types, especially toxic varieties.',
	},
	{
		id: 6,
		title: 'Can I remove mold myself?',
		content: 'Small areas (less than 10 square feet) may be manageable, but professional remediation is recommended. DIY removal often spreads spores, doesn\'t address the moisture source, and can cause health issues. Professional remediation ensures complete removal and prevention.',
	},
	{
		id: 7,
		title: 'How much does mold remediation cost?',
		content: 'Costs vary based on contamination extent, affected square footage, and required repairs. Small areas may cost $500-$2,000, while extensive mold can range from $3,000-$15,000+. We provide free estimates and work with insurance when coverage applies.',
	},
	{
		id: 8,
		title: 'What health symptoms are caused by mold?',
		content: 'Mold exposure can cause allergic reactions (sneezing, runny nose, itchy eyes), asthma attacks, respiratory problems, headaches, fatigue, and in severe cases, neurological symptoms. Symptoms vary by individual sensitivity and mold type. Professional removal eliminates health risks.',
	},
	{
		id: 9,
		title: 'How do you test for mold?',
		content: 'We use multiple testing methods including visual inspection, moisture meters, thermal imaging, air quality testing, and surface sampling. Air samples identify spore types and concentrations, while surface samples confirm specific mold species. Testing guides our remediation approach.',
	},
	{
		id: 10,
		title: 'What causes mold growth?',
		content: 'Mold requires moisture, food source (organic materials), and suitable temperature. Common causes include water leaks, flooding, high humidity, poor ventilation, condensation, and water damage that wasn\'t properly dried. We identify and fix all moisture sources during remediation.',
	},
	{
		id: 11,
		title: 'Do you handle both visible and hidden mold?',
		content: 'Yes, we locate and remediate both visible and hidden mold. Mold often grows behind walls, under floors, in attics, and in HVAC systems. We use moisture detection equipment and air testing to find hidden mold and ensure complete remediation.',
	},
	{
		id: 12,
		title: 'How do you prevent mold from spreading during remediation?',
		content: 'We use professional containment barriers, negative air pressure systems, and HEPA filtration to prevent mold spores from spreading. All work areas are sealed, and air scrubbers continuously filter air. This protects unaffected areas and ensures thorough remediation.',
	},
	{
		id: 13,
		title: 'Does insurance cover mold remediation?',
		content: 'Coverage varies by policy and cause. Mold from covered water damage (like burst pipes) is often covered, while mold from neglect or maintenance issues typically isn\'t. We help you understand your coverage and work with insurance when applicable.',
	},
	{
		id: 14,
		title: 'What happens after mold remediation?',
		content: 'After removal and cleaning, we conduct post-remediation verification testing to confirm mold levels are safe. We provide moisture control recommendations and may schedule follow-up inspections. We ensure the moisture source is fixed to prevent recurrence.',
	},
];

const processSteps = [
	{ step: 1, title: 'Mold Inspection & Testing', description: 'Comprehensive inspection and air quality testing to identify mold type and contamination levels.' },
	{ step: 2, title: 'Containment Setup', description: 'Professional containment barriers to prevent mold spores from spreading to unaffected areas.' },
	{ step: 3, title: 'Mold Removal', description: 'Safe removal of contaminated materials and thorough cleaning of all affected surfaces.' },
	{ step: 4, title: 'Air Filtration', description: 'HEPA air scrubbers filter mold spores from the air during and after remediation.' },
	{ step: 5, title: 'Moisture Control', description: 'Identify and repair the moisture source to prevent future mold growth.' },
	{ step: 6, title: 'Prevention & Verification', description: 'Post-remediation testing and recommendations to ensure complete remediation and prevent recurrence.' }
];

export const metadata = {
	title: 'Mold Remediation & Testing Pinedale WY | Professional Mold Removal',
	description: 'Professional mold remediation and testing in Pinedale & Sublette County. IICRC-certified technicians, complete removal, and prevention services.',
};

export default function MoldRemediation() {
	return (
		<>
			<PageTitle dataTitle="Mold Remediation & Testing" />
			<main id="tt-pageContent" className="overflow-hidden">
				<div className="section__indent">
					<div className="container container__fluid-lg">
						<div className="md:flex md:gap-[30px] lg:gap-[60px]">
							<div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
								<SectionTitle
									dataSubtitle="mold remediation"
									dataTitle="Professional Mold Remediation & Testing Services"
									dataMaxWidth="630px"
								/>
								<div className="leading-none mb-[30px]">
									<Image
										src="/images/Resized_20231213_100307.jpg"
										width={735}
										height={511}
										quality={90}
										loading="eager"
										alt="Professional mold remediation services in Pinedale Wyoming"
									/>
								</div>
								<p className="mb-[20px]">
									Mold growth can occur quickly after water damage and poses serious health risks. Restoration Wranglers 
									provides professional mold remediation and testing services throughout Pinedale & Sublette County, Wyoming.
								</p>
								<p className="mb-[30px]">
									Our IICRC-certified technicians use industry-standard protocols to safely contain, remove, and prevent mold. 
									We provide comprehensive testing before and after remediation to ensure your property is safe and mold-free.
								</p>

								<div className="section__indent base__bg section__inner mb-[50px] rounded-lg p-[40px]">
									<SectionTitle
										dataSubtitle="our process"
										dataTitle="Our Mold Remediation Process"
										dataText="We follow a proven 6-step process to ensure complete and safe mold remediation"
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

								<InfoHighlightBox
									variant="warning"
									icon="icon-900667"
									title="Types of Mold & Health Risks"
									className="mb-[50px]"
								>
									<p className="mb-[20px]">
										Different types of mold pose varying health risks. Understanding mold types helps determine appropriate remediation approaches:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceTypeCard
											icon="icon-900667"
											title="Stachybotrys (Black Mold)"
											description="Toxic black mold produces mycotoxins that can cause severe respiratory and neurological symptoms. Requires professional remediation with strict safety protocols."
										/>
										<ServiceTypeCard
											icon="icon-2373426"
											title="Aspergillus"
											description="Common indoor mold that can cause allergic reactions and respiratory infections, especially in immunocompromised individuals."
										/>
										<ServiceTypeCard
											icon="icon-3410263"
											title="Penicillium"
											description="Often found in water-damaged buildings, can cause allergic reactions and respiratory problems."
										/>
										<ServiceTypeCard
											icon="icon-154518"
											title="Cladosporium"
											description="Common outdoor and indoor mold that can trigger asthma and allergic reactions."
										/>
										<ServiceTypeCard
											icon="icon-2321397"
											title="Alternaria"
											description="Often found in damp areas, can cause severe allergic reactions and asthma attacks."
										/>
										<ServiceTypeCard
											icon="icon-694055"
											title="Chaetomium"
											description="Typically found in water-damaged drywall, can cause health issues and structural damage."
										/>
									</div>
									<p className="mt-[25px] mb-0">
										All mold should be professionally removed, but toxic varieties like black mold require extra precautions. We test to identify mold types and use appropriate safety measures for each.
									</p>
								</InfoHighlightBox>

								<ServiceSection
									icon="icon-900667"
									subtitle="testing & inspection"
									title="Mold Testing & Inspection Process"
									variant="default"
								>
									<p className="mb-[25px]">
										Professional mold testing identifies the type, extent, and location of mold contamination. Our comprehensive inspection includes:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Visual Inspection"
											description="Thorough examination of all areas, including attics, basements, crawl spaces, and behind walls"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Moisture Detection"
											description="Advanced moisture meters and thermal imaging identify water sources and hidden moisture"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Air Quality Testing"
											description="Air samples measure spore concentrations and identify mold types present in the air"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Surface Sampling"
											description="Swab or tape samples from visible mold identify specific species and guide remediation"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="HVAC Inspection"
											description="Ductwork and HVAC systems are inspected for mold contamination and spore distribution"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Humidity Assessment"
											description="Relative humidity measurements identify conditions conducive to mold growth"
										/>
									</div>
									<p className="mt-[25px] mb-0 text-center text-[#6c7176]">
										Testing results guide our remediation plan, ensuring we address all contamination and prevent recurrence. Post-remediation testing verifies successful removal.
									</p>
								</ServiceSection>

								<ServiceSection
									icon="icon-2373426"
									subtitle="safety protocols"
									title="Containment & Safety Protocols"
									variant="bordered"
								>
									<p className="mb-[25px]">
										Proper containment prevents mold spores from spreading during remediation. We follow IICRC standards for safe, effective mold removal:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Containment Barriers"
											description="Plastic sheeting and negative air pressure create sealed work areas that prevent spore migration"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="HEPA Filtration"
											description="High-efficiency particulate air scrubbers continuously filter air, removing mold spores and particles"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Negative Air Pressure"
											description="Air pressure systems ensure air flows into containment, preventing spores from escaping"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Personal Protective Equipment"
											description="Our technicians wear appropriate PPE including respirators, gloves, and protective suits"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Decontamination Areas"
											description="Designated areas for equipment and personnel decontamination prevent cross-contamination"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Safe Removal Practices"
											description="Materials are carefully removed and bagged to prevent spore release during transport"
										/>
									</div>
								</ServiceSection>

								<ServiceSection
									icon="icon-3410263"
									subtitle="moisture control"
									title="Moisture Source Identification"
									variant="default"
								>
									<p className="mb-[25px]">
										Mold cannot grow without moisture. Identifying and fixing the moisture source is essential for successful remediation:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Water Leak Detection"
											description="We locate and repair leaks in plumbing, roofs, windows, and foundations"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Humidity Control"
											description="High humidity levels are addressed through dehumidification and ventilation improvements"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Condensation Issues"
											description="Poor insulation or ventilation causing condensation is identified and corrected"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Foundation Problems"
											description="Groundwater infiltration through foundation cracks is sealed and drainage improved"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="HVAC Issues"
											description="Ductwork leaks, condensation, or poor drainage in HVAC systems are repaired"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Prevention Recommendations"
											description="We provide specific recommendations to prevent future moisture problems"
										/>
									</div>
									<p className="mt-[25px] mb-0 text-center text-[#6c7176]">
										Without fixing the moisture source, mold will return. Our remediation includes moisture source identification and repair to ensure long-term success.
									</p>
								</ServiceSection>

								<InfoHighlightBox
									variant="success"
									icon="icon-694055"
									title="Prevention & Maintenance"
									className="mb-[50px]"
								>
									<p className="mb-[20px]">
										Preventing mold growth is easier and less expensive than remediation. Follow these guidelines:
									</p>
									<div className="grid md-max:gap-[15px] md:gap-[20px] md:grid-cols-2">
										<ul className="list__type1">
											<li><strong>Control Humidity:</strong> Keep indoor humidity below 60% (ideally 30-50%) using dehumidifiers and proper ventilation</li>
											<li><strong>Fix Leaks Immediately:</strong> Address water leaks, roof leaks, and plumbing issues promptly to prevent moisture buildup</li>
											<li><strong>Improve Ventilation:</strong> Ensure adequate ventilation in bathrooms, kitchens, and attics to reduce moisture</li>
											<li><strong>Proper Insulation:</strong> Adequate insulation prevents condensation on cold surfaces like windows and exterior walls</li>
										</ul>
										<ul className="list__type1">
											<li><strong>Regular Inspections:</strong> Check for water damage, leaks, and signs of mold growth regularly, especially after water incidents</li>
											<li><strong>Quick Drying:</strong> Dry water-damaged areas within 24-48 hours to prevent mold growth</li>
											<li><strong>HVAC Maintenance:</strong> Regular HVAC cleaning and maintenance prevents mold growth in ductwork</li>
											<li><strong>Monitor Moisture:</strong> Use moisture meters to check for hidden moisture in walls, floors, and ceilings</li>
										</ul>
									</div>
								</InfoHighlightBox>

								<ServiceSection
									icon="icon-900667"
									subtitle="why choose us"
									title="Why Choose Us for Mold Remediation"
									variant="highlighted"
								>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-900667"
											title="IICRC Certified"
											description="IICRC-certified mold remediation specialists"
										/>
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Professional Testing"
											description="Professional mold testing and inspection"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Complete Containment"
											description="Complete containment to prevent cross-contamination"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="HEPA Filtration"
											description="HEPA filtration and air quality improvement"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Moisture Control"
											description="Moisture source identification and repair"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Verification Testing"
											description="Post-remediation verification and testing"
										/>
									</div>
								</ServiceSection>
							</div>
							<div className="lg:basis-1/3 md:basis-5/12 md-max:mt-[40px]">
								<div className="bg-base__bg p-[30px] rounded-lg mb-[30px]">
									<h3 className="ttsubtitle_sm mb-[20px]">Emergency Service</h3>
									<p className="text-sm mb-[20px] text-[#6c7176]">
										Mold can spread quickly. Call us for immediate inspection and remediation.
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
							dataTitle="Mold Remediation FAQs"
							dataText="Common questions about our mold remediation and testing services"
							dataAddClass="text-center"
							dataMaxWidth="600px"
						/>
						<div className="max-w-[800px] mx-auto">
							<Accordion dataSrcData={moldFAQs} />
						</div>
					</div>
				</div>

				<ContactFormSection />
				<EmergencyResponse />
			</main>
		</>
	);
}
