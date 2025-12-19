'use client';

const MobileCTABar = () => {
	return (
		<>
			<div className="fixed bottom-0 left-0 right-0 bg-[#1a3a5c] text-white p-[15px] z-50 md:hidden shadow-lg">
				<div className="container mx-auto flex gap-[10px]">
					<a 
						href="tel:3073237777" 
						className="flex-1 btn btn__type2 text-center py-[12px] text-base font-bold"
					>
						<i className="icon-25453 mr-[8px]"></i>
						Call Now
					</a>
					<a 
						href="/contact-us" 
						className="flex-1 btn bg-white text-[#1a3a5c] border-white text-center py-[12px] text-base font-bold hover:bg-transparent hover:text-white"
					>
						Get Estimate
					</a>
				</div>
			</div>
			<style jsx global>{`
				@media (min-width: 768px) {
					.mobile-cta-bar {
						display: none;
					}
				}
			`}</style>
		</>
	);
};

export default MobileCTABar;
