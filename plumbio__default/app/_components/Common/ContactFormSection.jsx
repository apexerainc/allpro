import SectionTitle from './SectionTitle';
import FormContact from './FormContact';

const ContactFormSection = ({ title = "Get in Touch", subtitle = "contact us" }) => {
	return (
		<div className="section__indent base__bg section__inner">
			<div className="container container__fluid-lg">
				<div className="grid md:grid-cols-2 gap-[40px] lg-max:gap-[30px]">
					<div className="no-resize-text">
						<SectionTitle
							dataSubtitle={subtitle}
							dataTitle={title}
							dataTextUnder="Contact"
							dataAddClass="blocktitle__left blocktitle__topNone"
						/>
						<strong className="base__color block mb-[20px]">
							24/7 Emergency Restoration Services in Pinedale & Sublette County, Wyoming
						</strong>
						<p className="mb-[20px]">
							Need immediate assistance? Call us 24/7 for emergency restoration services. For non-emergency inquiries, 
							estimates, or questions, fill out the form and we&apos;ll respond promptly.
						</p>
						<div className="mb-[30px]">
							<h4 className="ttsubtitle_sm mb-[15px]">Contact Information</h4>
							<div className="space-y-[15px]">
								<div>
									<strong className="base__color">Phone (24/7 Emergency):</strong>
									<a href="tel:3073237777" className="block text-lg mt-[5px] hover:base__color2 transition-colors">
										307-323-7777
									</a>
								</div>
								<div>
									<strong className="base__color">Email:</strong>
									<a href="mailto:restorationwranglers@rincoinc.com" className="block mt-[5px] hover:base__color2 transition-colors">
										restorationwranglers@rincoinc.com
									</a>
								</div>
								<div>
									<strong className="base__color">Address:</strong>
									<p className="mt-[5px]">
										49 Drew Road<br />
										Boulder, WY 82923
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<FormContact wrapperClass="form__box" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactFormSection;
