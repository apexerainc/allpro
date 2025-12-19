'use client';

export default function SchemaMarkup() {
	const localBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Restoration Wranglers",
		"image": "https://www.restorationwranglers.com/images/logo.png",
		"@id": "https://www.restorationwranglers.com",
		"url": "https://www.restorationwranglers.com",
		"telephone": "307-323-7777",
		"priceRange": "$$",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "49 Drew Road",
			"addressLocality": "Boulder",
			"addressRegion": "WY",
			"postalCode": "82923",
			"addressCountry": "US"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 42.8666,
			"longitude": -109.8607
		},
		"openingHoursSpecification": {
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday"
			],
			"opens": "00:00",
			"closes": "23:59"
		},
		"sameAs": [
			"https://www.facebook.com/restorationwranglers",
			"https://www.twitter.com/restorationwranglers"
		],
		"areaServed": {
			"@type": "City",
			"name": "Pinedale"
		},
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": 42.8666,
				"longitude": -109.8607
			},
			"geoRadius": {
				"@type": "Distance",
				"name": "Sublette County"
			}
		}
	};

	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Disaster Restoration Services",
		"provider": {
			"@type": "LocalBusiness",
			"name": "Restoration Wranglers"
		},
		"areaServed": {
			"@type": "State",
			"name": "Wyoming"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Restoration Services",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Water Damage Restoration"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Fire & Smoke Damage Restoration"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Mold Remediation"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Storm Damage Restoration"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Emergency Restoration Services"
					}
				}
			]
		}
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
		</>
	);
}
