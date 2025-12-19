import styles from './RowCopyright.module.css'
const CopyrightHolder = (now) => (
	<>
		<div className={`${styles.footerCopyright} flex flex-wrap justify-center content-center items-center`}>
			&copy; {new Date().getFullYear()} Restoration Wranglers. All Rights Reserved. | 
			<a href="/privacy-policy" className="ml-[10px] hover:base__color2">Privacy Policy</a> | 
			<a href="/terms" className="ml-[10px] hover:base__color2">Terms of Service</a>
		</div>
	</>
);
export default CopyrightHolder;