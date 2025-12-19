import Image from 'next/legacy/image';
import SectionTitle from '../Common/SectionTitle';
import Signature from '../Common/Signature';
import styles from './AboutCompany.module.css';
import imageLayout from '../../../public/images/about_img01.jpg';
import imageLayout2 from '../../../public/images/about_img02.jpg';
const AboutCompany = () => {
	return (
		<div className="section__indent">
			<div className="container container__fluid-lg">
				<div className={`sm:flex xl-max:gap-[30px]  xl:gap-[54px]`}>
					<div className={`sm:basis-1/2 md:basis-5/12 lg:basis-1/2`}>
						<div className="relative">
							<div className={`${styles.img__large} leading-none`}>
								<Image
									src={imageLayout}
									loading={`eager`}
									width={533}
									height={421}
									objectFit="cover"
									quality={0}
									alt="img"
								/>
							</div>
							<div className={`${styles.img__small} relative leading-none`}>
								<Image
									src={imageLayout2}
									loading={`eager`}
									width={284}
									height={205}
									objectFit="cover"
									quality={0}
									alt="img"
								/>
							</div>
						</div>
					</div>
					<div className={`${styles.col__content} sm:basis-1/2 md:basis-1/2 lg:basis-1/2`}>
						<SectionTitle
							dataSubtitle="about company"
							dataTitle="Masters of Disaster Cleanup"
							dataAddClass="blocktitle__topNone"
						/>
						<div className={`${styles.custom__width}`}>
							<strong className="base__color">
								Restoration Wranglers is the only restoration company serving Pinedale & Sublette County, Wyoming, providing professional water damage, fire damage, mold remediation, and storm damage restoration services.
							</strong>
							<p>
								As a local, family-owned business, we understand the unique challenges of Wyoming weather and building structures. With over 15 years of experience, our certified technicians provide 24/7 emergency restoration services with a 60-minute response time guarantee. We&apos;re committed to helping our neighbors recover quickly from disasters, working directly with insurance companies to make the process as smooth as possible.
							</p>
							<p>
								Our team is IICRC-certified and uses state-of-the-art equipment to restore your property to pre-loss condition. We take pride in being the trusted restoration experts for homeowners and businesses throughout Pinedale, Big Piney, Marbleton, and all of Sublette County.
							</p>
							<div className={styles.signature__indent}>
								<Signature
									dataSrcImg="/images/signature-img01.png"
									dataTitle="Owner & Founder"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};
export default AboutCompany;