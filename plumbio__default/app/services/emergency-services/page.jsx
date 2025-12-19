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

const emergencyFAQs = [
	{
		id: 1,
		title: 'What constitutes a restoration emergency?',
		content: 'Any situation that requires immediate attention to prevent further damage: active water leaks, fire damage, storm damage with exposed property, sewage backups, or situations that pose health or safety risks.',
		open: 'item-show'
	},
	{
		id: 2,
		title: 'Do you charge extra for after-hours emergency service?',
		content: 'No, we provide 24/7 emergency service with no additional after-hours charges. Our emergency response is available anytime, day or night, weekends, and holidays at standard rates.',
	},
	{
		id: 3,
		title: 'How quickly can you respond to an emergency?',
		content: 'We guarantee a 60-minute response time for emergencies in Pinedale & Sublette County. Our local team ensures fast arrival times to minimize damage.',
	},
	{
		id: 4,
		title: 'What should I do while waiting for emergency service?',
		content: 'For water damage: shut off water source if possible, remove valuables from affected area. For fire: don\'t enter until cleared safe. For storm damage: avoid damaged areas. Document damage with photos if safe. Call us immediately.',
	},
	{
		id: 5,
		title: 'What areas do you serve for emergency services?',
		content: 'We serve all of Pinedale & Sublette County, Wyoming, including Pinedale, Big Piney, Marbleton, Bondurant, and surrounding areas. As the only restoration company in the region, we provide comprehensive emergency coverage.',
	},
	{
		id: 6,
		title: 'How much does emergency service cost?',
		content: 'Emergency service rates are the same as standard service - no premium charges. Costs depend on the type and extent of damage. We provide estimates and work with insurance. Emergency response and initial assessment are typically covered by insurance.',
	},
	{
		id: 7,
		title: 'Can you handle multiple emergencies at once?',
		content: 'Yes, we have the capacity to handle multiple emergencies simultaneously. During widespread disasters like storms, we prioritize based on safety and damage severity. Our team coordinates to serve all emergencies efficiently.',
	},
	{
		id: 8,
		title: 'What equipment do you bring for emergencies?',
		content: 'Our emergency response vehicles are fully equipped with water extraction equipment, dehumidifiers, air movers, board-up materials, tarps, safety equipment, and assessment tools. We arrive ready to begin immediate mitigation.',
	},
	{
		id: 9,
		title: 'Do you coordinate with other emergency services?',
		content: 'Yes, we coordinate with fire departments, police, utility companies, and other emergency services as needed. We work together to ensure safety and efficient emergency response.',
	},
	{
		id: 10,
		title: 'What happens after emergency service is complete?',
		content: 'After emergency mitigation (board-up, water extraction, etc.), we assess full damage and create a restoration plan. We coordinate with insurance, begin permanent repairs, and keep you informed throughout the process.',
	},
	{
		id: 11,
		title: 'Can you help with temporary housing during emergencies?',
		content: 'While we don\'t provide housing directly, we can help coordinate temporary housing through insurance or local resources. We work to get you back home or in business as quickly as possible.',
	},
	{
		id: 12,
		title: 'What if I have an emergency but insurance hasn\'t approved yet?',
		content: 'We begin emergency mitigation immediately - you don\'t need insurance approval for emergency services. Emergency measures to prevent further damage are typically covered. We document everything for your insurance claim.',
	},
	{
		id: 13,
		title: 'Do you provide emergency services for businesses?',
		content: 'Yes, we provide 24/7 emergency services for commercial properties, businesses, and industrial facilities. We understand business continuity is critical and work to minimize downtime.',
	},
	{
		id: 14,
		title: 'How do I prepare for potential emergencies?',
		content: 'Know your main water shut-off valve location. Have our emergency number (307-323-7777) saved. Keep important documents accessible. Know your insurance policy details. We offer emergency preparedness consultations to help you prepare.',
	},
];

const emergencyServices = [
	{ title: 'Emergency Board-Up Services', description: 'Immediate property securing with professional board-up to prevent further damage and unauthorized access.' },
	{ title: '24/7 Water Damage Response', description: 'Fast water extraction and emergency drying services to prevent further damage and mold growth.' },
	{ title: 'Fire Damage Emergency Response', description: 'Immediate fire damage assessment, board-up, and beginning of restoration process.' },
	{ title: 'Storm Damage Emergency Repairs', description: 'Emergency tarping, board-up, and temporary repairs to protect your property.' },
	{ title: 'Sewage Backup Emergency Service', description: 'Immediate response to sewage backups with professional cleanup and sanitization.' },
	{ title: 'Content Pack-Out & Storage', description: 'Emergency removal and safe storage of belongings during restoration.' }
];

export const metadata = {
	title: 'Emergency Restoration Services Pinedale WY | 24/7 Emergency Response',
	description: '24/7 emergency restoration services in Pinedale & Sublette County. 60-minute response guarantee. Water, fire, storm, and mold emergency services.',
};

export default function EmergencyServices() {
	return (
		<>
			<PageTitle dataTitle="Emergency Services" />
			<main id="tt-pageContent" className="overflow-hidden">
				<div className="section__indent">
					<div className="container container__fluid-lg">
						<div className="md:flex md:gap-[30px] lg:gap-[60px]">
							<div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
								<SectionTitle
									dataSubtitle="emergency services"
									dataTitle="24/7 Emergency Restoration Services"
									dataMaxWidth="630px"
								/>
								<div className="leading-none mb-[39px] text-right">
									<Image
										src="/images/20240213_150701.jpg"
										width={735}
										height={511}
										quality={90}
										loading="eager"
										alt="24/7 emergency restoration services in Pinedale Wyoming"
									/>
								</div>
								<p className="mb-[20px]">
									Disasters don&apos;t wait for business hours. When disaster strikes your property in Pinedale & Sublette County, 
									you need immediate professional help. Restoration Wranglers provides 24/7 emergency restoration services 
									with a 60-minute response time guarantee.
								</p>
								<p className="mb-[30px]">
									As the only restoration company serving the region, we understand that every minute counts when dealing with 
									water damage, fire damage, storm damage, or other disasters. Our emergency response team is standing by 
									around the clock, ready to respond immediately to protect your property and minimize damage.
								</p>

								<ServiceSection
									icon="icon-3410263"
									subtitle="our services"
									title="Our Emergency Services"
									variant="highlighted"
								>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										{emergencyServices.map((service, index) => (
											<ServiceFeatureCard
												key={index}
												icon={`icon-${2373426 + index}`}
												title={service.title}
												description={service.description}
											/>
										))}
									</div>
								</ServiceSection>

								<ServiceSection
									icon="icon-2373426"
									subtitle="emergency situations"
									title="What Constitutes an Emergency"
									variant="default"
								>
									<p className="mb-[25px]">
										Understanding what qualifies as an emergency helps you know when to call immediately:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceTypeCard
											icon="icon-2373426"
											title="Active Water Leaks"
											description="Burst pipes, overflowing appliances, or continuous water intrusion requiring immediate water extraction"
										/>
										<ServiceTypeCard
											icon="icon-2321397"
											title="Fire Damage"
											description="Any fire damage requiring immediate board-up, smoke removal, or property securing"
										/>
										<ServiceTypeCard
											icon="icon-154518"
											title="Storm Damage"
											description="Roof damage, broken windows, or structural damage exposing property to elements"
										/>
										<ServiceTypeCard
											icon="icon-900667"
											title="Sewage Backups"
											description="Sewage or contaminated water backups posing health risks and requiring immediate cleanup"
										/>
										<ServiceTypeCard
											icon="icon-3410263"
											title="Structural Hazards"
											description="Compromised structures, fallen trees, or damage creating safety risks"
										/>
										<ServiceTypeCard
											icon="icon-694055"
											title="Mold Emergencies"
											description="Extensive visible mold or health symptoms indicating serious contamination"
										/>
									</div>
									<p className="mt-[25px] mb-0 text-center text-[#6c7176]">
										When in doubt, call us. We can assess the situation and determine if immediate emergency response is needed. It&apos;s better to call early than wait for damage to worsen.
									</p>
								</ServiceSection>

								<ServiceSection
									icon="icon-154518"
									subtitle="response process"
									title="Our 24/7 Response Process"
									variant="bordered"
								>
									<p className="mb-[25px]">
										Our streamlined emergency response process ensures fast, effective service:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-4">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Immediate Call Answering"
											description="Our emergency line is answered 24/7 by trained staff who gather essential information"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Rapid Dispatch"
											description="Emergency response team is dispatched immediately with 60-minute arrival guarantee"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="On-Site Assessment"
											description="Quick but thorough assessment of damage, safety hazards, and immediate needs"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Emergency Mitigation"
											description="Immediate action to stop damage progression - water extraction, board-up, tarping, etc."
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Safety Securing"
											description="Property is secured to prevent further damage, theft, or safety hazards"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Documentation"
											description="Comprehensive documentation begins immediately for insurance claims"
										/>
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Restoration Planning"
											description="Detailed restoration plan is created and discussed with you"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Insurance Coordination"
											description="We contact your insurance company and begin claims coordination"
										/>
									</div>
								</ServiceSection>

								<ServiceSection
									icon="icon-2321397"
									subtitle="service types"
									title="Emergency Service Types"
									variant="default"
								>
									<p className="mb-[25px]">
										We provide comprehensive emergency services for all disaster types:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-4">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Water Emergency Response"
											description="Immediate water extraction, drying equipment deployment, and moisture control to prevent mold"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Fire Emergency Services"
											description="Emergency board-up, smoke damage mitigation, and property securing after fires"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Storm Emergency Response"
											description="Immediate board-up, tarping, debris removal, and property securing after storms"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Sewage Emergency Cleanup"
											description="Immediate response to sewage backups with professional cleanup and sanitization"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Mold Emergency Remediation"
											description="Rapid response to extensive mold situations requiring immediate containment and removal"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Content Emergency Pack-Out"
											description="Immediate removal and safe storage of belongings during emergencies"
										/>
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Structural Emergency Stabilization"
											description="Temporary supports and bracing for compromised structures"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Multi-Disaster Response"
											description="Coordinated response when multiple types of damage occur simultaneously"
										/>
									</div>
								</ServiceSection>

								<InfoHighlightBox
									variant="info"
									icon="icon-154518"
									title="What to Do While Waiting"
									className="mb-[50px]"
								>
									<p className="mb-[20px]">
										While waiting for our emergency response team, take these steps to minimize damage and ensure safety:
									</p>
									<div className="grid md-max:gap-[15px] md:gap-[20px] md:grid-cols-2">
										<div>
											<ul className="list__type1">
												<li><strong>Water Damage:</strong> Shut off water source if safe to do so. Remove valuable items from affected areas. Don&apos;t use electrical appliances near water. Document damage with photos.</li>
												<li><strong>Fire Damage:</strong> Don&apos;t enter the property until cleared safe by authorities. Don&apos;t attempt to clean smoke damage. Secure the property if possible. Document damage from outside.</li>
											</ul>
										</div>
										<div>
											<ul className="list__type1">
												<li><strong>Storm Damage:</strong> Avoid damaged areas, especially if structural damage is visible. Don&apos;t attempt temporary repairs. Document damage with photos if safe. Stay away from downed power lines.</li>
												<li><strong>Sewage Backups:</strong> Avoid contact with contaminated water. Don&apos;t use plumbing until cleared. Keep children and pets away. Ventilate the area if safe.</li>
											</ul>
										</div>
									</div>
									<p className="mt-[20px] mb-0 text-center">
										<strong>General:</strong> Ensure personal safety first. Call us immediately. Don&apos;t attempt DIY repairs that could worsen damage. Keep our number accessible: <a href="tel:3073237777" className="base__color font-bold">307-323-7777</a>.
									</p>
								</InfoHighlightBox>

								<ServiceSection
									icon="icon-900667"
									subtitle="equipment & resources"
									title="Emergency Equipment & Resources"
									variant="bordered"
								>
									<p className="mb-[25px]">
										Our emergency response vehicles are fully equipped with professional-grade equipment:
									</p>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="Water Extraction Equipment"
											description="Industrial pumps, truck-mounted extractors, and portable units for rapid water removal"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="Drying Equipment"
											description="Commercial dehumidifiers, air movers, and specialized drying systems ready for immediate deployment"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Board-Up Materials"
											description="Plywood, tools, and supplies for immediate property securing"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Safety Equipment"
											description="Personal protective equipment, safety barriers, and hazard identification tools"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Assessment Tools"
											description="Moisture meters, thermal imaging cameras, and documentation equipment"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Emergency Lighting"
											description="Portable lighting for after-hours emergency work"
										/>
									</div>
									<p className="mt-[25px] mb-0 text-center text-[#6c7176]">
										We arrive prepared to begin immediate mitigation, minimizing damage and starting the restoration process right away.
									</p>
								</ServiceSection>

								<ServiceSection
									icon="icon-3410263"
									subtitle="why choose us"
									title="Why Choose Our Emergency Services"
									variant="highlighted"
								>
									<div className="grid md-max:gap-[20px] md:gap-[25px] md:grid-cols-2 lg:grid-cols-3">
										<ServiceFeatureCard
											icon="icon-2373426"
											title="60-Minute Response"
											description="60-minute emergency response time guarantee"
										/>
										<ServiceFeatureCard
											icon="icon-3410263"
											title="24/7/365 Availability"
											description="Available 24/7/365 - no extra after-hours charges"
										/>
										<ServiceFeatureCard
											icon="icon-154518"
											title="Local Team"
											description="Local team ensures fast arrival times"
										/>
										<ServiceFeatureCard
											icon="icon-2321397"
											title="Complete Services"
											description="Complete emergency services from board-up to restoration"
										/>
										<ServiceFeatureCard
											icon="icon-900667"
											title="Direct Insurance Billing"
											description="Direct insurance billing available"
										/>
										<ServiceFeatureCard
											icon="icon-694055"
											title="Only Local Company"
											description="Only restoration company in Pinedale & Sublette County"
										/>
									</div>
								</ServiceSection>
							</div>
							<div className="lg:basis-1/3 md:basis-5/12 md-max:mt-[40px]">
								<div className="bg-[#c8102e] p-[30px] rounded-lg mb-[30px] text-white">
									<h3 className="text-xl font-bold mb-[15px]">Emergency Hotline</h3>
									<p className="text-sm mb-[20px] opacity-90">
										Call us immediately for 24/7 emergency restoration services.
									</p>
									<a href="tel:3073237777" className="btn bg-white text-[#c8102e] border-white w-full text-center block hover:bg-transparent hover:text-white">
										Call 307-323-7777
									</a>
									<p className="text-xs mt-[15px] opacity-75">
										24 hours a day, 7 days a week
									</p>
								</div>
								<div className="bg-base__bg p-[30px] rounded-lg">
									<h3 className="ttsubtitle_sm mb-[20px]">Related Services</h3>
									<ul className="list__type1">
										<li><Link href="/services/water-damage-restoration">Water Damage Restoration</Link></li>
										<li><Link href="/services/fire-smoke-damage">Fire & Smoke Damage</Link></li>
										<li><Link href="/services/mold-remediation">Mold Remediation</Link></li>
										<li><Link href="/services/storm-damage">Storm Damage</Link></li>
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
							dataTitle="Emergency Services FAQs"
							dataText="Common questions about our 24/7 emergency restoration services"
							dataAddClass="text-center"
							dataMaxWidth="600px"
						/>
						<div className="max-w-[800px] mx-auto">
							<Accordion dataSrcData={emergencyFAQs} />
						</div>
					</div>
				</div>

				<ContactFormSection />
				<EmergencyResponse />
			</main>
		</>
	);
}
