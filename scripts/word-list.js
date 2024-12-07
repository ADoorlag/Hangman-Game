const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
    {
        word: "luminescence",
        hint: "The emission of light by a substance not resulting from heat."
    },
    {
        word: "serendipity",
        hint: "The occurrence of events by chance in a happy or beneficial way."
    },
    {
        word: "ephemeral",
        hint: "Lasting for a very short time."
    },
    {
        word: "quintessence",
        hint: "The purest and most essential element of something."
    },
    {
        word: "halcyon",
        hint: "Denoting a period of time in the past that was idyllically peaceful."
    },
    {
        word: "petrichor",
        hint: "The pleasant, earthy scent after rain."
    },
    {
        word: "syzygy",
        hint: "An alignment of three celestial bodies in a straight line."
    },
    {
        word: "ineffable",
        hint: "Too great or extreme to be expressed in words."
    },
    {
        word: "numinous",
        hint: "Having a strong spiritual quality; suggesting the presence of divinity."
    },
    {
        word: "palimpsest",
        hint: "A manuscript or object reused but still bearing traces of its earlier form."
    },
    {
        word: "sonder",
        hint: "The realization that each passerby has a life as vivid and complex as your own."
    },
    {
        word: "ethereal",
        hint: "Extremely delicate and light, seeming not of this world."
    },
    {
        word: "cryptic",
        hint: "Having a meaning that is mysterious or obscure."
    },
    {
        word: "atavism",
        hint: "The reappearance of ancestral traits in an organism."
    },
    {
        word: "penumbra",
        hint: "The partially shaded outer region of a shadow or eclipse."
    },
    {
        word: "limerence",
        hint: "The state of being infatuated or obsessed with another person."
    },
    {
        word: "nebulous",
        hint: "In the form of a cloud or haze; indistinct or vague."
    },
    {
        word: "sonder",
        hint: "The realization that everyone has a life as complex as your own."
    },
    {
        word: "eldritch",
        hint: "Weird, eerie, or otherworldly in nature."
    },
    {
        word: "threnody",
        hint: "A song or poem of mourning for the dead."
    },
    {
        word: "zeitgeist",
        hint: "The defining spirit or mood of a particular period of history."
    },
    {
        word: "troglodyte",
        hint: "A person who lives in seclusion or behaves in a primitive manner."
    },
    {
        word: "susurration",
        hint: "A soft murmuring or rustling sound."
    },
    {
        word: "ephemera",
        hint: "Things that exist or are used only for a short time."
    },
    {
        word: "peregrination",
        hint: "A long and wandering journey, especially on foot."
    },
    {
        word: "apocryphal",
        hint: "Of doubtful authenticity, although widely circulated as true."
    },
    {
        word: "hierophant",
        hint: "A person who interprets sacred mysteries or esoteric principles."
    },
    {
        word: "eidetic",
        hint: "Relating to or denoting mental images having unusual vividness and detail."
    },
    {
        word: "irenic",
        hint: "Promoting peace or reconciliation."
    },
    {
        word: "cacophony",
        hint: "A harsh, discordant mixture of sounds."
    },
    {
        word: "oriflamme",
        hint: "A principle or ideal that serves as a rallying point."
    },
    {
        word: "quidnunc",
        hint: "A person who is eager to know the latest news or gossip."
    },
    {
        word: "lacuna",
        hint: "An unfilled space or interval; a gap."
    },
    {
        word: "autodidact",
        hint: "A self-taught person."
    },
    {
        word: "frisson",
        hint: "A sudden, passing sensation of excitement or fear."
    },
    {
        word: "tmesis",
        hint: "The separation of parts of a compound word for emphasis."
    },
    {
        word: "clinquant",
        hint: "Glittering with gold or silver; superficially showy."
    },
    {
        word: "borborygmus",
        hint: "The rumbling sound caused by movement of gas in the intestines."
    },
    {
        word: "absquatulate",
        hint: "To leave abruptly or without notice."
    },
    {
        word: "floccinaucinihilipilification",
        hint: "The act of describing something as worthless."
    },
    {
        word: "catachresis",
        hint: "The misuse or strained use of words, as in a mixed metaphor."
    },
    {
        word: "callipygian",
        hint: "Having well-shaped or beautifully proportioned buttocks."
    },
    {
        word: "melancholia",
        hint: "A deep and persistent sadness or gloom."
    },
    {
        word: "usufruct",
        hint: "The right to use and enjoy the profits or benefits of something belonging to another."
    },
    {
        word: "sesquipedalian",
        hint: "Given to using long words; characterized by long words."
    },
    {
        word: "perfidious",
        hint: "Deceitful and untrustworthy."
    },
    {
        word: "supererogatory",
        hint: "Going beyond what is required or expected."
    },
    {
        word: "antimacassar",
        hint: "A protective covering for the back of a chair."
    },
    {
        word: "peregrine",
        hint: "Wandering, traveling, or migratory in nature."
    },
    {
        word: "susurrus",
        hint: "A whispering or rustling sound."
    },
    {
        word: "mellifluous",
        hint: "Sweet or musical; pleasant to hear."
    },
    {
        word: "aporia",
        hint: "An expression of doubt or puzzlement."
    },
    {
        word: "umbrageous",
        hint: "Providing shade or easily offended."
    }
];