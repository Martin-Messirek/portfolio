export const TRANSLATIONS: { [key: string]: any } = {
	en: {
		main: {
			ABOVE_THE_FOLD: {
				TITLE: 'Frontend Developer',
				NAME: 'Martin Messirek',
				CONTACT: 'Contact me',
				LINK: 'kkk',
			},
			ABOUT_ME: {
				TITLE: 'About me',
				DESCRIPTION:
					" I'm a Frontend Developer based in Vienna, dedicated to building web applications that balance usability with a clean, appealing design. My focus is on solving technical challenges by developing thoughtfully crafted solutions.",
				INTRO: 'I am',
				LOCATION: 'located in Vienna',
				REMOTE: 'open to work remote',
				RELOCATE: 'open to relocate',
				CONTACT: 'Let’s talk',
			},
			SKILLS: {
				HEADER: 'Skill Set',
				ANGULAR: 'Angular',
				TYPESCRIPT: 'Typescript',
				JAVASCRIPT: 'JavaScript',
				HTML: 'HTML',
				CSS: 'CSS',
				API: 'Rest-Api',
				FIREBASE: 'Firebase',
				GIT: 'GIT',
				SCRUM: 'Scrum',
				MATERIAL: 'Material Design',
				LEARNING: 'Continuous Learning',
				POP_UP: 'I am always eager to learn new technologies. Just let me know what you are looking for',
			},
			CONTACT: {
				HEADER: 'Contact',
				SUBHEADER: 'Got a problem to solve?',
				TEXT: 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work. ',
				CONTACT_ME: 'Need a Frontend developer? Contact me!',
				MY_EMAIL: '@',
				MY_PHONE: '00',
				NAME: 'Your name…',
				MAIL: 'Your email…',
				MSG: 'Your message…',
				NAME_REQ: 'Your name is required',
				EMAIL_REQ: 'Your email is required ',
				MSG_REQ: 'Your message is required ',
				PRIVACY: "I've read the Privacy Policy and agree to the processing of my data as outlined.",
				PRIVACY_REQ: 'Please accept the Privacy Policy.',
				BTN: 'Send Message',
			},
			MAIL_RECEIVED: {
				MSG: '<p>Thank you for your message! We will get back to you soon.</p>',
				TEXT: '',
			},
			REFERENCES: [
				{ NAME: 'John Doe', TEXT: 'John is a fantastic collaborator and a skilled developer.' },
				{ NAME: 'Jane Smith', TEXT: 'Jane’s attention to detail is unparalleled.' },
				{ NAME: 'Bob Johnson', TEXT: 'Bob provided excellent feedback on my projects.' },
			],
		},
		projects: {
			EL_POLLO_LOCO: {
				TITLE: 'El Pollo Loco',
				TECHNOLOGIES: 'JavaScript | HTML | CSS',
				DESCRIPTION:
					'Jump, run and throw game based on an object-oriented approach. Help Pepe find coins and Tabasco salsa to fight against the crazy hen.',
				liveLink: 'https://example.com/el-pollo-loco',
				githubLink: 'https://github.com/yourrepo/el-pollo-loco',
				imageSrc: 'assets/images/el-pollo-loco.png',
			},
			JOIN: {
				TITLE: 'Join',
				TECHNOLOGIES: 'JavaScript | HTML | CSS | Firebase',
				DESCRIPTION:
					'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
				liveLink: 'https://example.com/join',
				githubLink: 'https://github.com/yourrepo/join',
				imageSrc: 'assets/images/join.png',
			},
			POKEMON: {
				TITLE: 'Pokemon',
				TECHNOLOGIES: 'JavaScript | HTML | CSS  | API',
				DESCRIPTION: 'A Pokedex application that fetches real-time Pokemon data from an API.',
				liveLink: 'https://example.com/pokemon',
				githubLink: 'https://github.com/yourrepo/pokemon',
				imageSrc: 'assets/images/pokemon.png',
			},
			DA_BUBBLE: {
				TITLE: 'DA Bubble – Current Project',
				TECHNOLOGIES: 'Angular | Typescript | HTML | CSS | Firebase',
				DESCRIPTION: 'A bubble shooter game with interactive mechanics and engaging animations.',
				liveLink: 'https://example.com/da-bubble',
				githubLink: 'https://github.com/yourrepo/da-bubble',
				imageSrc: 'assets/images/da-bubble.png',
			},
		},
		shared: {
			HEADER: {
				LOGO: 'MM',
				NAV: {
					ABOUT: 'About me',
					SKILLS: 'Skills',
					PORTFOLIO: 'Projects',
					CONTACT: 'Contact',
				},
			},
			FOOTER: {
				TEXT: '© 2024 All rights reserved.',
				LEGAL: 'Legal Notice',
				PRIVACY: 'Privacy Policy',
			},
		},
		legal: {
			LEGAL: {
				HEADER: 'Legal Notice',
				SUBHEADER: 'Information and Disclosure according to §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB',
				OPERATOR: { TITLE: 'Website Operator:', TEXT: 'Martin Messirek' },
				ADDRESS: { TITLE: 'Address:', TEXT: 'Elmargasse 1, 1190 Vienna' },
				CONTACT: { TITLE: 'Contact Details:', TEXT: 'martinmessirek@hotmail.com' },
				LAW: { TITLE: 'Applicable Legal Provisions:', TEXT: 'www.ris.bka.gv.at' },
				COPYRIGHT: {
					TITLE: 'Copyright:',
					TEXT: `The content of this website is, as far as legally possible, subject to various protections (e.g., copyright). Any
	use/distribution of provided material that is prohibited by copyright requires written permission from the website
	operator.`,
				},
				DISCLAIMER: {
					TITLE: 'Disclaimer:',
					EXTERNAL_LINKS: `Despite careful content control, the website operator assumes no liability for the content of external links. The
	content of the linked pages is solely the responsibility of their operators. If you come across outgoing links
	pointing to websites with illegal activity/information, we kindly ask you to inform us, so that we can promptly
	remove them according to § 17 Abs. 2 ECG.`,
					THIRD_PARTIES: `The copyright of third parties is strictly observed by the operator of this website. If you still notice a copyright
	infringement, please inform us accordingly. Upon becoming aware of such legal violations, we will promptly remove
	the affected content.`,
				},
				SOURCE: {
					TITLE: 'Source:',
					TEXT: 'Impressum Generator Österreich',
					LINK: 'https://www.fairesrecht.at/kostenlos-impressum-erstellen-generator.php',
				},
			},
			PRIVACY: {
				TITLE: 'Declaration of Information Obligations',
				CENTER_TITLE: 'Privacy Policy',
				INTRO: {
					DATA_COLLECTION: `In the following Privacy Policy, we inform you about the most important aspects of data processing on our website. We collect and process personal data only in accordance with legal requirements (DSGVO, Telekommunikationsgesetz 2003).`,
					IP: `As soon as you access or visit our website, your IP address, the start and end of your session are recorded. This is technically necessary and represents a legitimate interest pursuant to Article 6(1)(f) DSGVO.`,
				},
				DATA_STORAGE: {
					HEADER: 'Contact with us',
					TEXT: `If you contact us either via our website contact form or by email, the data you transmit will be stored for six months for the processing of your request or in case of follow-up questions. Your data will not be shared without your consent.`,
				},
				SERVER_LOGS: {
					HEADER: 'Server Log Files',
					INTRO: `This website and its provider automatically collect information during your visit, such as your`,
					LIST: [
						'IP address',
						'browser type',
						'session duration, date and time',
						'accessed pages of the website',
						'language settings and operating system',
						'leaving page (the URL from which you left the site)',
						'ISP  (Internet Service Provider)',
					],
					COLLECTION: `These collected data are not processed in a personally identifiable manner nor combined with personal data.`,
					CHECK: `The website operator reserves the right, in case of any illegal activity becoming known, to evaluate or check these data.`,
				},
				RIGHTS: {
					HEADER: 'Your Rights as the Person Concerned',
					INTRO: 'You have the right to:',
					LIST: [
						'access your data',
						'request deletion',
						'request rectification',
						'transfer your data',
						'withdraw and revoke consent to data processing',
						'restrict data processing',
					],
					TEXT: `If you suspect that there have been violations of data protection laws in the processing of your data, you have the option to file a complaint with us (martinmessirek@hotmail.com) or with the data protection authority.`,
				},
				CONTACT: {
					HEADER: 'You can reach us at:',
					OPERATOR: { HEADER: 'Website Operator:', TEXT: 'Martin Messirek' },
					EMAIL: { HEADER: 'Email:', TEXT: 'martinmessirek@hotmail.com' },
				},
				SOURCE: {
					HEADER: 'Source:',
					TEXT: 'Datenschutzgenerator Österreich DSGVO',
					LINK: 'https://www.fairesrecht.at/kostenlos-datenschutzerklaerung-erstellen-generator.php',
				},
			},
		},
		LANGUAGE_TOGGLE: 'Switch to German',
	},
	de: {
		main: {
			ABOVE_THE_FOLD: {
				TITLE: 'Frontend-Entwickler',
				NAME: 'Martin Messirek',
				CONTACT: 'Kontakt',
				LINK: 'kk',
			},
			ABOUT_ME: {
				TITLE: 'Über mich',
				DESCRIPTION:
					'Als Frontend-Entwickler aus Wien widme ich mich der Gestaltung von Webanwendungen, die sowohl durch ihre Benutzerfreundlichkeit als auch durch ihre visuelle Anziehungskraft überzeugen. Mein Ziel ist es, technische Herausforderungen zu meistern und dabei Lösungen zu schaffen, die einfach zu bedienen und zugleich kreativ und funktional sind. ',
				INTRO: 'I bin',
				LOCATION: 'aktuell in Wien',
				REMOTE: 'offen für Remote-Arbeit',
				RELOCATE: 'offen für einen Wohnortwechsel',
				CONTACT: 'Jetzt kontaktieren!',
			},
			SKILLS: {
				HEADER: 'Fähigkeiten',
				ANGULAR: 'Angular',
				TYPESCRIPT: 'Typescript',
				JAVASCRIPT: 'JavaScript',
				HTML: 'HTML',
				CSS: 'CSS',
				API: 'Rest-Api',
				FIREBASE: 'Firebase',
				GIT: 'GIT',
				SCRUM: 'Scrum',
				MATERIAL: 'Material Design',
				LEARNING: 'Ständige Weiterbildung',
				POP_UP: 'Ich freue mich immer, neue Technologien zu lernen. Lassen Sie mich wissen, was Sie suchen.',
			},
			CONTACT: {
				HEADER: 'Kontakt',
				SUBHEADER: 'Haben Sie ein Problem zu lösen?',
				TEXT: 'Kontaktieren Sie mich über dieses Formular, ich freue mich darauf von Ihnen zu hören, Ihre Ideen zu kennen zu lernen und mit meiner Arbeit zu Ihren Projekten beizutragen.',
				CONTACT_ME: ' Frontend Entwickler gesucht? Kontaktieren Sie mich! ',
				MY_EMAIL: '@',
				MY_PHONE: '00',
				NAME: 'Name eingeben…',
				MAIL: 'Email eingeben…',
				MSG: 'Nachricht…',
				NAME_REQ: 'Ihr Name ist erforderlich.',
				EMAIL_REQ: 'Ihre E-Mail ist erforderlich.',
				MSG_REQ: ' Ihre Nachricht ist leer.',
				PRIVACY:
					'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten wie dort beschrieben zu.',
				PRIVACY_REQ: ' Bitte akzeptieren Sie die Datenschutzerklärung.',
				BTN: 'Nachricht senden',
			},
			MAIL_RECEIVED: {
				MSG: '<p>Danke für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.</p>',
				TEXT: '',
			},
			REFERENCES: [
				{ NAME: 'John Doe', TEXT: 'John is a fantastic collaborator and a skilled developer.' },
				{ NAME: 'Jane Smith', TEXT: 'Jane’s attention to detail is unparalleled.' },
				{ NAME: 'Bob Johnson', TEXT: 'Bob provided excellent feedback on my projects.' },
			],
		},
		projects: {
			EL_POLLO_LOCO: {
				TITLE: 'El Pollo Loco',
				TECHNOLOGIES: 'JavaScript | HTML | CSS',
				DESCRIPTION:
					'Ein Action-Spiel, das auf objektorientierter Programmierung basiert. Pepe sammelt Münzen und Tabasco-Flaschen, um gegen das verrückte Riesenhuhn antreten zu können.',
				liveLink: 'https://example.com/el-pollo-loco',
				githubLink: 'https://github.com/yourrepo/el-pollo-loco',
				imageSrc: 'assets/images/el-pollo-loco.png',
			},
			JOIN: {
				TITLE: 'Join',
				TECHNOLOGIES: 'JavaScript | HTML | CSS | Firebase',
				DESCRIPTION:
					'Ein Taskmanager, der vom Kanban-System inspiriert ist: Tasks werden erstellt, mithilfe von Drag-and-Drop organisiert, in Kategorien eingeteilt und Nutzern zugewiesen.',
				liveLink: 'https://example.com/join',
				githubLink: 'https://github.com/yourrepo/join',
				imageSrc: 'assets/images/join.png',
			},
			POKEMON: {
				TITLE: 'Pokemon',
				TECHNOLOGIES: 'JavaScript | HTML | CSS  | API',
				DESCRIPTION: ' Eine Pokedex-Anwendung, die Pokemon-Daten in Echtzeit von einer API abruft.',
				liveLink: 'https://example.com/pokemon',
				githubLink: 'https://github.com/yourrepo/pokemon',
				imageSrc: 'assets/images/pokemon.png',
			},
			DA_BUBBLE: {
				TITLE: 'DA Bubble – Current Project',
				TECHNOLOGIES: 'Angular | Typescript | HTML | CSS | Firebase',
				DESCRIPTION:
					'Ein fesselndes Bubble-Shooter-Spiel, das interaktive Mechaniken mit ansprechenden Animationen kombiniert.',
				liveLink: 'https://example.com/da-bubble',
				githubLink: 'https://github.com/yourrepo/da-bubble',
				imageSrc: 'assets/images/da-bubble.png',
			},
		},
		shared: {
			HEADER: {
				LOGO: 'MM',
				NAV: {
					ABOUT: 'Über mich',
					SKILLS: 'Skills',
					PORTFOLIO: 'Portfolio',
					CONTACT: 'Kontakt',
				},
			},

			FOOTER: {
				TEXT: '© 2025 Alle Rechte vorbehalten.',
				LEGAL: 'Impressum',
				PRIVACY: 'Datenschutz',
			},
		},
		legal: {
			LEGAL: {
				HEADER: 'Impressum',
				SUBHEADER: 'Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB',
				OPERATOR: { TITLE: 'Webseitenbetreiber:', TEXT: 'Martin Messirek' },
				ADDRESS: { TITLE: 'Anschrift::', TEXT: 'Elmargasse 1, 1190 Wien' },
				CONTACT: { TITLE: 'Kontaktdaten:', TEXT: 'martinmessirek@hotmail.com' },
				LAW: { TITLE: 'Anwendbare Rechtsvorschrift:', TEXT: 'www.ris.bka.gv.at' },
				COPYRIGHT: {
					TITLE: 'Urheberrecht:',
					TEXT: `Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B dem
	Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt ist,
	bedarf schriftlicher Zustimmung des Webseitenbetreibers.`,
				},
				DISCLAIMER: {
					TITLE: 'Haftungsausschluss:',
					EXTERNAL_LINKS: `Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die
	Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
	Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger
	Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend
	zu entfernen.`,
					THIRD_PARTIES: `Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem
	auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
	derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.`,
				},
				SOURCE: {
					TITLE: 'Quelle:',
					TEXT: 'Impressum Generator Österreich',
					LINK: 'https://www.fairesrecht.at/kostenlos-impressum-erstellen-generator.php',
				},
			},
			PRIVACY: {
				TITLE: 'Erklärung zur Informationspflicht',
				CENTER_TITLE: 'Datenschutzerklärung',
				INTRO: {
					DATA_COLLECTION: `In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).`,
					IP: `Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.`,
				},
				DATA_STORAGE: {
					HEADER: 'Kontakt mit uns',
					TEXT: `Wenn Sie uns, entweder über unser Kontaktformular auf unserer Webseite, oder per Email kontaktieren, dann werden die von Ihnen an uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder für den Fall von weiteren Anschlussfragen für sechs Monate bei uns gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer übermittelten Daten.`,
				},
				SERVER_LOGS: {
					HEADER: 'Server-Log Files',
					INTRO: `Diese Webseite und der damit verbundene Provider erhebt im Zuge der Webseitennutzung automatisch Informationen im Rahmen sogenannter „Server-Log Files“. Dies betrifft insbesondere:`,
					LIST: [
						'IP-Adresse oder Hostname',
						'den verwendeten Browser',
						'Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit',
						'aufgerufene Seiten der Webseite',
						'Spracheinstellungen und Betriebssystem',
						'„Leaving-Page“ (auf welcher URL hat der Benutzer die Webseite verlassen)',
						'ISP  (Internet Service Provider)',
					],
					COLLECTION: `Diese erhobenen Informationen werden nicht personenbezogen verarbeitet oder mit personenbezogenen Daten in Verbindung gebracht.`,
					CHECK: `Der Webseitenbetreiber behält es sich vor, im Falle von Bekanntwerden rechtswidriger Tätigkeiten, diese Daten auszuwerten oder zu überprüfen.`,
				},
				RIGHTS: {
					HEADER: 'Ihre Rechte als Betroffener',
					INTRO: 'Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns gespeichert sind grundsätzlich ein Recht auf:',
					LIST: [
						'Auskunft',
						'Löschung der Daten',
						'Berichtigung der Daten',
						'Übertragbarkeit der Daten',
						'Wiederruf und Widerspruch zur Datenverarbeitung',
						'Einschränkung',
					],
					TEXT: `Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie die Möglichkeit sich bei uns (martinmessirek@hotmail.com) oder der Datenschutzbehörde zu beschweren.`,
				},
				CONTACT: {
					HEADER: 'Sie erreichen uns unter folgenden Kontaktdaten:',
					OPERATOR: { HEADER: 'Webseitenbetreiber: ', TEXT: 'Martin Messirek' },
					EMAIL: { HEADER: 'Email:', TEXT: 'martinmessirek@hotmail.com' },
				},
				SOURCE: {
					HEADER: 'Quelle: ',
					TEXT: 'Datenschutzgenerator Österreich DSGVO',
					LINK: 'https://www.fairesrecht.at/kostenlos-datenschutzerklaerung-erstellen-generator.php',
				},
			},
		},
		LANGUAGE_TOGGLE: 'Wechsel zu Englisch',
	},
};
