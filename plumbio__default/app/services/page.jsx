import PageTitle from "../_components/Common/PageTitle";
import SectionTitle from '../_components/Common/SectionTitle';
import TabsServices from '../_components/Services/TabServices';
import WhatIsIncluded from '../_components/Services/WhatIsIncluded';
import ListWithTitle from '../_components/Common/ListWithTitle';
import TabInfo from '../_components/Services/TabInfo';
import ContactFormSection from '../_components/Common/ContactFormSection';
//Import Data
import {dataImpactCost} from '../_components/Services/WhatImpactsCostData';
//Page Layout
export default function Services() {
  return (
    <>
        <PageTitle dataTitle="Services" />
        <main id="tt-pageContent" className="overflow-hidden">
            <div className="section__indent">
				<div className="container__fluid">
					<SectionTitle
						dataSubtitle="our services"
						dataTitle={"Professional Restoration Services You Can Trust"}
						dataTextUnder="Services"
						dataText="When disaster strikes, you need a restoration company you can depend on. We provide comprehensive water damage restoration, fire damage restoration, mold remediation, reconstruction, and emergency repair services throughout Pinedale & Sublette County, Wyoming."
						dataAddClass="text-center"
						dataMaxWidth="600px"
					/>
				</div>
                <TabsServices />
            </div>
            <div className="section__indent">
				<div className="container container__fluid-lg">
					<WhatIsIncluded />
				</div>
			</div>
            <div className="section__indent base__bg section__inner">
				<div className="container container__fluid-lg">
					<SectionTitle dataTitle="What Impacts Cost?" />
					<div className="mb-[26px]">
						<ListWithTitle
							dataLayout={dataImpactCost}
							dataAddClass="grid md-max:gap-[16px] md:gap-[30px] md:grid-cols-2"
						/>
					</div>
				</div>
			</div>
            <TabInfo />
			<ContactFormSection />
        </main>
    </>
  )
}

