'use client';
import { useState } from 'react';
import Modal from './Modal';
import FormContact from './FormContact';
import styles from './FloatingActionButton.module.css';

const FloatingActionButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showOptions, setShowOptions] = useState(false);

	const handleToggle = () => {
		setShowOptions(!showOptions);
	};

	const handleCall = () => {
		window.location.href = 'tel:3073237777';
		setShowOptions(false);
	};

	const handleChat = () => {
		setIsModalOpen(true);
		setShowOptions(false);
	};

	return (
		<>
			<div className={styles.fabContainer}>
				{showOptions && (
					<div className={styles.fabOptions}>
						<button
							className={styles.fabOption}
							onClick={handleCall}
							aria-label="Call us"
							title="Call 307-323-7777"
						>
							<i className="icon-25453" aria-hidden="true"></i>
							<span>Call</span>
						</button>
						<button
							className={styles.fabOption}
							onClick={handleChat}
							aria-label="Contact us"
							title="Contact Us"
						>
							<i className="icon-3410263" aria-hidden="true"></i>
							<span>Contact</span>
						</button>
					</div>
				)}
				<button
					className={`${styles.fab} ${showOptions ? styles.fabActive : ''}`}
					onClick={handleToggle}
					aria-label="Contact options"
					aria-expanded={showOptions}
				>
					<i className={showOptions ? "icon-748122" : "icon-3410263"} aria-hidden="true"></i>
				</button>
			</div>
			<Modal
				openModal={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				dataModalTitle="Contact Us"
				dataModalSize="modal__size-md"
			>
				<FormContact />
			</Modal>
		</>
	);
};

export default FloatingActionButton;
