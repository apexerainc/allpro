//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css"
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from '../../_components/Common/SectionTitle';
import LogoPartners from '../../_components/Common/LogoPartners';
//Import Layout
import Image from 'next/legacy/image';
import PromoLayout from '../../_components/ServicesSubPages/PromoLayout';
import ListWithTitle from '../../_components/Common/ListWithTitle';
//Import Aside
import PromoAside from '../../_components/ServicesSubPages/PromoAside';
import BoxListAside from '../../_components/ServicesSubPages/BoxListAside';
import FormAside from '../../_components/ServicesSubPages/FormAside';
import ServicesListAside from '../../_components/ServicesSubPages/ServicesListAside';
import ContactFormSection from '../../_components/Common/ContactFormSection';
//Import Data
import {ReasonsListData} from "../../_components/Services/AsideReasonsListData";
import {ServicesListData} from "../../_components/ServicesResidential/ServicesListData";
import {dataServicesInclude} from '../../_components/ServicesResidential/ServicesIncludeData';
import imageLayout from '../../../public/images/Resized_20231213_100307.jpg';
//Page Layout
export default function ServicesResidential() {
	return (
		<>
				<PageTitle dataTitle="Residential Services" />
				<main id="tt-pageContent" className="overflow-hidden">
				<div className="section__indent">
					<div className="container container__fluid-xl">
							<div className="md:flex md:gap-[30px] lg:gap-[60px]">
								<div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
									<SectionTitle
										dataSubtitle="residential services"
										dataTitle="Professional Restoration Services for Your Home"
										dataMaxWidth="630px"
									/>
									<div className="leading-none">
										<Image
											src={imageLayout}
											width={735}
											height={511}
											quality={0}
											alt='residential services'
											loading={`eager`}
										/>
									</div>
									<p className={`${styles.indent__top2}`}>
										When disaster strikes your home, you need a restoration company you can trust. We handle all types of residential restoration services, including water damage, fire damage, mold remediation, and complete reconstruction. Our IICRC-certified technicians respond within 60 minutes and work with you every step of the way. Our top priority is restoring your home to pre-loss condition in a stress-free environment, so you can get back to normal life as quickly as possible. You can trust us for all of these residential restoration needs:
									</p>
									<div className="sm:flex sm:gap-[30px] mt-[20px]">
										<div className="sm:basis-1/2">
											<ul className="list__type1">
												<li><a href="/services/water-damage-restoration">Water Damage Restoration</a></li>
												<li><a href="/services/fire-smoke-damage">Fire & Smoke Damage</a></li>
												<li><a href="/services/mold-remediation">Mold Remediation</a></li>
												<li><a href="/services/storm-damage">Storm Damage</a></li>
												<li><a href="/services/emergency-services">Emergency Repairs</a></li>
												<li><a href="/services/emergency-services">Content Pack-Out</a></li>
											</ul>
										</div>
										<div className="sm:basis-1/2">
											<ul className="list__type1">
												<li><a href="/services/water-damage-restoration">Burst Pipe Restoration</a></li>
												<li><a href="/services/fire-smoke-damage">Smoke Odor Removal</a></li>
												<li><a href="/services/mold-remediation">Mold Testing & Removal</a></li>
												<li><a href="/services/storm-damage">Roof & Window Repairs</a></li>
												<li><a href="/services/emergency-services">24/7 Emergency Response</a></li>
												<li><a href="/services/emergency-services">Insurance Claims Help</a></li>
											</ul>
										</div>
									</div>
									<h4 className="ttsubtitle ttsubtitle__top">Our Residential Restoration Services include:</h4>
									<ListWithTitle
										dataLayout={dataServicesInclude}
										dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
									/>
									<h5 className="ttsubtitle ttsubtitle__top">Complete Restoration & Reconstruction Services</h5>
									<p>
										When your home suffers damage from water, fire, storms, or other disasters, complete restoration requires professional expertise. Our certified technicians handle everything from emergency response to final reconstruction, ensuring your home is restored to pre-loss condition or better. We work directly with insurance companies and provide detailed documentation throughout the process.
									</p>
									<p className="indent__top">
										When you trust our experienced restoration company with your home, you can count on us to go the extra mile to ensure you are completely satisfied with the finished restoration. We aren&apos;t satisfied unless you are! Our 100% satisfaction guarantee backs all of our work.
									</p>
									<PromoLayout
										dataText="Request a free damage assessment for your residential restoration project from our professional, IICRC-certified restoration company today!"
										dataScrImg="../images/services/promo01-img01.png"
										dataScrImg2="../images/services/promo01-img01.webp"
									/>
								</div>
								<div className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}>
									<div>
										<div className={`ttsubtitle`}>
											Residential Services
										</div>
										<ServicesListAside dataList={ServicesListData} />
									</div>
									<div>
										<div className={`ttsubtitle`}>
											Ask Question
										</div>
										<FormAside />
									</div>
									<PromoAside
										dataTitle="Schedule Emergency Service Now!"
										dataText="Get a Free Damage Assessment Today"
										dataTelefon="123-456-789"
									/>
									<BoxListAside
										dataTitle={"6 Different Reasons \n You Should Hire Us"}
										dataList={ReasonsListData}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="section__inner bg-no-repeat bg-center lazyload" data-bg="../images/extra-bg01.png">
						<div className="container container__fluid-xl no-resize-text">
							<SectionTitle
								dataSubtitle="we work with"
								dataTitle="Our Partners"
							/>
							<LogoPartners
								wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px]  only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start"
							/>
						</div>
					</div>
					<ContactFormSection />
				</main>
		</>
	)
}

