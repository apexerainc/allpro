import Image from 'next/image'
import styles from './RowLayout.module.css'
import SocialsFooter from "../Footer/SocialsFooter"
const LayoutHolder = () => (
	<>
		<div className={`${styles.rowLayout} f-logo-layout text-center no-resize-text`}>
			<p>
				Restoration Wranglers - Masters of Disaster Cleanup. The only restoration company serving Pinedale & Sublette County, Wyoming. 
				Professional water damage, fire damage, mold remediation, and storm damage restoration services available 24/7.
			</p>
			<SocialsFooter />
		</div>
	</>
);
export default LayoutHolder;


