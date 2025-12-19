import PageTitle from "../_components/Common/PageTitle"
import SectionTitle from '../_components/Common/SectionTitle';
import Socials from "../_components/Common/Socials";
import FormContact from "../_components/Common/FormContact";
import ListEmail from "../_components/Common/ListEmail";
import EmergencyResponse from "../_components/index/EmergencyResponse";
import ContactFormSection from "../_components/Common/ContactFormSection";

export const metadata = {
	title: 'Contact Restoration Wranglers - 24/7 Emergency Service | Pinedale WY',
	description: 'Contact Restoration Wranglers for 24/7 emergency restoration services. Call 307-323-7777 or fill out our contact form.',
};

export default function ContactUs() {
  return (
    <>
        <PageTitle dataTitle="Contact Us" />
        <main id="tt-pageContent" className="overflow-hidden">
            <div className="section__indent">
                <div className="container container__fluid-lg">
                    <div className="grid md:grid-cols-2 gap-[40px] lg-max:gap-[30px]">
                        <div className="no-resize-text">
                            <SectionTitle
                                dataSubtitle="contact us"
                                dataTitle="Get in Touch with Restoration Wranglers"
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
                                    <div>
                                        <strong className="base__color">Hours:</strong>
                                        <p className="mt-[5px]">
                                            24/7 Emergency Service<br />
                                            Office Hours: Monday - Friday, 8:00 AM - 6:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <ListEmail />
                            <div className="lg:mt-[35px] lg-max:mt-[25px] sm-max:mt-[20px]">
                                <Socials
                                    wrapperClass="social"
                                    titleData="Follow us"
                                    titleClass="ttsubtitle"
                                />
                            </div>
                        </div>
                        <div>
                            <FormContact wrapperClass="form__box" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section__indent base__bg section__inner">
                <div className="container container__fluid-lg">
                    <div className="bg-white p-[40px] lg-max:p-[30px] rounded-lg">
                        <h3 className="ttsubtitle_sm mb-[20px] text-center">Find Us</h3>
                        <div className="bg-base__bg p-[40px] rounded-lg text-center">
                            <p className="text-sm text-[#6c7176] mb-[20px]">
                                <em>Google Map integration coming soon. We&apos;re located in Pinedale, Wyoming, serving all of Sublette County.</em>
                            </p>
                            <p className="text-sm">
                                For directions or to schedule an on-site visit, please call us at{' '}
                                <a href="tel:3073237777" className="base__color hover:base__color2">
                                    307-323-7777
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactFormSection />
            <EmergencyResponse />
        </main>
    </>
  )
}
