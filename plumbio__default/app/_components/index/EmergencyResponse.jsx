'use client';
import { useState, lazy, Suspense } from 'react';
import Link from 'next/link';
const Modal = lazy(() => import('../Common/Modal'));
const FormModal = lazy(() => import('../Common/FormModal'));

const EmergencyResponse = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<div className="section__indent">
			<div className="container container__fluid-lg">
				<div className="bg-gradient-to-r from-[#1a3a5c] to-[#0f2538] rounded-lg p-[60px] lg-max:p-[40px] text-white text-center relative overflow-hidden">
					<div className="absolute inset-0 opacity-10">
						<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
						<div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
					</div>
					<div className="relative z-10">
						<div className="text-[60px] mb-[20px]">
							<i className="icon-3410263"></i>
						</div>
						<h2 className="text-[36px] lg-max:text-[28px] font-bold mb-[20px]">
							When Disaster Strikes, We Respond Immediately
						</h2>
						<p className="text-lg mb-[30px] max-w-[700px] mx-auto opacity-90">
							Don&apos;t wait for the damage to worsen. Our emergency restoration team is standing by 24/7 
							to help you when you need it most.
						</p>
						<div className="flex flex-wrap justify-center gap-[20px]">
							<a 
								href="tel:3073237777" 
								className="btn btn__type2 text-lg px-[40px] py-[15px]"
							>
								<i className="icon-25453 mr-[10px]"></i>
								Call Now: 307-323-7777
							</a>
							<button
								onClick={() => setOpenModal(true)}
								className="btn text-lg px-[40px] py-[15px] bg-white text-[#1a3a5c] border-white hover:bg-transparent hover:text-white"
							>
								Get Free Estimate
							</button>
						</div>
						<p className="mt-[20px] text-sm opacity-75">
							Available 24 hours a day, 7 days a week, 365 days a year
						</p>
					</div>
				</div>
			</div>
			<Suspense>
				<Modal
					openModal={openModal}
					onClose={() => setOpenModal(false)}
					dataModalSize="modal__sizeLg"
					dataModalTitle="Request Free Estimate"
				>
					<FormModal closeModal={(value) => setOpenModal(value)} />
				</Modal>
			</Suspense>
		</div>
	);
};

export default EmergencyResponse;
