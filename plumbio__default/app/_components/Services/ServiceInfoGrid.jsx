'use client';
import ServiceFeatureCard from './ServiceFeatureCard';

const ServiceInfoGrid = ({ items, columns = 3, highlightItems = [] }) => {
	const gridCols = {
		2: 'md:grid-cols-2',
		3: 'md:grid-cols-2 lg:grid-cols-3',
		4: 'md:grid-cols-2 lg:grid-cols-4'
	};

	return (
		<div className={`grid gap-[25px] ${gridCols[columns] || gridCols[3]}`}>
			{items.map((item, index) => (
				<ServiceFeatureCard
					key={item.id || index}
					icon={item.icon}
					title={item.title}
					description={item.description}
					highlight={highlightItems.includes(index)}
				/>
			))}
		</div>
	);
};

export default ServiceInfoGrid;
