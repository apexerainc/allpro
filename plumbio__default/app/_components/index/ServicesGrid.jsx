'use client';
import Link from 'next/link';
import Image from 'next/legacy/image';

const ServicesGrid = () => {
	const services = [
		{
			id: 1,
			title: 'Water Damage Restoration',
			icon: 'icon-2373426',
			description: 'Fast water extraction, drying, and restoration to prevent further damage and mold growth.',
			link: '/services/water-damage-restoration',
			image: '/images/20240210_125056.jpg'
		},
		{
			id: 2,
			title: 'Fire & Smoke Damage',
			icon: 'icon-2321397',
			description: 'Complete fire damage cleanup, smoke odor removal, and structural restoration services.',
			link: '/services/fire-smoke-damage',
			image: '/images/20240213_150701.jpg'
		},
		{
			id: 3,
			title: 'Mold Remediation',
			icon: 'icon-900667',
			description: 'Professional mold testing, removal, and prevention to protect your health and property.',
			link: '/services/mold-remediation',
			image: '/images/Resized_20231213_100307.jpg'
		},
		{
			id: 4,
			title: 'Storm Damage Restoration',
			icon: 'icon-154518',
			description: 'Roof repairs, window boarding, and complete restoration after severe weather events.',
			link: '/services/storm-damage',
			image: '/images/20240201_165033.jpg'
		},
		{
			id: 5,
			title: 'Emergency Board-Up Services',
			icon: 'icon-3410263',
			description: 'Immediate property securing with professional board-up to prevent further damage.',
			link: '/services/emergency-services',
			image: '/images/20240106_120523.jpg'
		},
		{
			id: 6,
			title: 'Content Pack-Out & Storage',
			icon: 'icon-694055',
			description: 'Safe removal, cleaning, and storage of your belongings during restoration.',
			link: '/services/emergency-services',
			image: '/images/content-packout-storage.png'
		}
	];

	return (
		<div className="section__indent">
			<div className="container container__fluid-lg">
				<div className="text-center mb-[50px] lg-max:mb-[30px]">
					<h2 className="ttsubtitle mb-[20px]">Our Core Services</h2>
					<p className="text-lg max-w-[700px] mx-auto">
						Comprehensive disaster restoration services for Pinedale & Sublette County, Wyoming
					</p>
				</div>
				<div className="grid md-max:gap-[20px] md:gap-[30px] md:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<Link 
							key={service.id} 
							href={service.link}
							className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
						>
							<div className="relative h-[200px] overflow-hidden">
								<Image
									src={service.image}
									alt={service.title}
									layout="fill"
									objectFit="cover"
									className="group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div className="absolute bottom-4 left-4 text-white text-[40px]">
									<i className={service.icon}></i>
								</div>
							</div>
							<div className="p-[25px]">
								<h3 className="ttsubtitle_sm mb-[10px] base__color">{service.title}</h3>
								<p className="text-sm text-[#6c7176] mb-[15px]">{service.description}</p>
								<span className="text-sm base__color font-bold hover:base__color2 transition-colors">
									Learn More →
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServicesGrid;
