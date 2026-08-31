const testsDatabase = {
    "test_01": [
        {
            subject: "Physics",
            text: "दिए गए सर्किट में Equivalent Capacitance (C_eq) क्या होगा?",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Capacitors_in_parallel.svg/300px-Capacitors_in_parallel.svg.png", 
            options: ["C1 + C2 + C3", "1/C1 + 1/C2 + 1/C3", "C1 * C2", "Zero"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "DNA के इस डायग्राम में 'X' लेबल वाले हिस्से को पहचानें:",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/DNA_chemical_structure.svg/300px-DNA_chemical_structure.svg.png",
            options: ["Hydrogen Bond", "Phosphodiester Bond", "Glycosidic Bond", "Peptide Bond"],
            correct: 1
        },
        {
            subject: "Chemistry",
            text: "विलयन (Solutions) में Raoult's Law किस पर लागू होता है?",
            image: null,
            options: ["Ideal Solutions", "Non-ideal Solutions", "Both", "None"],
            correct: 0
        }
    ],
    
    "test_02": [
                {
            subject: "Biology",
            text: "DNA के डबल हेलिक्स मॉडल में, यदि एक स्ट्रैंड में एडेनिन (Adenine) की मात्रा 30% है, तो साइटोसिन (Cytosine) की मात्रा कितनी होगी?",
            image: null,
            options: ["30%", "20%", "40%", "60%"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "हर्शे और चेस (Hershey and Chase) के प्रयोग में यह सिद्ध करने के लिए कि DNA ही आनुवंशिक पदार्थ है, किन रेडियोएक्टिव समस्थानिकों (Isotopes) का उपयोग किया गया था?",
            image: null,
            options: ["^32P और ^35S", "^31P और ^35S", "^32P और ^15N", "^14C और ^15N"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "वह एंजाइम जो DNA प्रतिकृतियन (Replication) के दौरान ओकाजाकी खंडों (Okazaki fragments) को जोड़ने का कार्य करता है:",
            image: null,
            options: ["DNA Helicase", "DNA Polymerase", "DNA Ligase", "Primase"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "अनुलेखन (Transcription) के दौरान, DNA का वह अनुक्रम जहाँ RNA Polymerase जुड़ता है, क्या कहलाता है?",
            image: null,
            options: ["Regulator", "Promoter", "Operator", "Terminator"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "लैक ओपेरॉन (Lac operon) मॉडल में, प्रेरक (Inducer) का कार्य कौन करता है?",
            image: null,
            options: ["Glucose", "Galactose", "Lactose", "Repressor protein"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "निम्नलिखित में से कौन सा कोडॉन एक 'प्रारंभिक कोडॉन' (Start codon) के रूप में कार्य करता है और मेथियोनीन (Methionine) के लिए कोड करता है?",
            image: null,
            options: ["UAA", "UAG", "AUG", "UGA"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "ग्रिफिथ (Griffith) के रूपांतरण प्रयोग (Transforming principle) में किस जीवाणु का उपयोग किया गया था?",
            image: null,
            options: ["Escherichia coli", "Streptococcus pneumoniae", "Salmonella typhimurium", "Bacillus thuringiensis"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "यूकेरियोट्स (Eukaryotes) में, hnRNA से mRNA बनने की प्रक्रिया जिसमें इंट्रॉन्स (Introns) को हटाया जाता है, क्या कहलाती है?",
            image: null,
            options: ["Capping", "Tailing", "Splicing", "Methylation"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "DNA फिंगरप्रिंटिंग तकनीक मुख्य रूप से DNA के किस हिस्से पर आधारित है?",
            image: null,
            options: ["Coding DNA", "VNTRs (Variable Number of Tandem Repeats)", "Promoter regions", "RNA sequences"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "tRNA का वह कौन सा लूप है जो राइबोसोम से जुड़ने में मदद करता है?",
            image: null,
            options: ["Anticodon loop", "TψC loop", "DHU loop", "Variable arm"],
            correct: 1
        },
               {
            subject: "Biology",
            text: "Assertion (A): Eukaryotes में Transcription और Translation अलग-अलग कम्पार्टमेंट्स में होते हैं। \nReason (R): Eukaryotic mRNA को translation से पहले processing (splicing, capping, tailing) की आवश्यकता होती है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Statement I: Eukaryotes में structural gene 'monocistronic' होता है। \nStatement II: Monocistronic genes में interrupted coding sequences (introns) पाए जाते हैं।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): DNA replication अर्ध-संरक्षी (semi-conservative) होता है। \nReason (R): Meselson और Stahl ने ^15NH4Cl का उपयोग करके इसे सिद्ध किया था।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "गलत मिलान (Incorrect Match) का चयन करें:",
            image: null,
            options: ["Alec Jeffreys - DNA fingerprinting", "Francois Jacob - Lac operon", "Matthew Meselson - Transforming principle", "Taylor - Vicia faba"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "दिए गए कथनों को पढ़ें: \n(i) RNA अस्थिर (unstable) है और तेज़ी से mutate करता है। \n(ii) RNA उत्प्रेरक (catalytic) की तरह काम कर सकता है। \n(iii) आनुवंशिक जानकारी के 'भंडारण' के लिए DNA बेहतर है। \n(iv) आनुवंशिक जानकारी के 'हस्तांतरण' के लिए RNA बेहतर है। \nइनमें से कितने कथन सत्य हैं?",
            image: null,
            options: ["केवल एक", "केवल दो", "केवल तीन", "चारों कथन सत्य हैं"],
            correct: 3
        },
        {
            subject: "Biology",
            text: "Assertion (A): जेनेटिक कोड अपह्रासित (Degenerate) होता है। \nReason (R): कुछ अमीनो एसिड एक से अधिक कोडॉन द्वारा कोडित होते हैं।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Statement I: Lac operon एक repressible operon है। \nStatement II: लैक्टोज (Lactose) की उपस्थिति में repressor protein निष्क्रिय (inactive) हो जाता है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 3
        },
        {
            subject: "Biology",
            text: "DNA फिंगरप्रिंटिंग में चरणों का सही क्रम (Correct Sequence) क्या है? \n(A) Blotting (B) Autoradiography (C) Gel electrophoresis (D) Digestion of DNA by Restriction Endonuclease",
            image: null,
            options: ["D → C → A → B", "C → D → A → B", "D → A → C → B", "A → C → D → B"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): Heterochromatin अनुलेखन (transcription) की दृष्टि से निष्क्रिय होता है। \nReason (R): Heterochromatin ढीला (loosely packed) होता है और हल्का स्टेन (light stain) लेता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "Statement I: DNA Polymerase केवल 5'→3' दिशा में polymerization को उत्प्रेरित करता है। \nStatement II: 3'→5' ध्रुवता (polarity) वाले टेम्पलेट स्ट्रैंड पर replication सतत (continuous) होता है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): AUG कोडॉन के दोहरे कार्य (dual functions) होते हैं। \nReason (R): यह Methionine के लिए कोड करता है और initiator codon के रूप में भी कार्य करता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Eukaryotes में RNA polymerases के संबंध में सही कथन पहचानें:",
            image: null,
            options: ["RNA Pol I, tRNA को transcribe करता है", "RNA Pol II, hnRNA को transcribe करता है", "RNA Pol III, rRNA को transcribe करता है", "दिए गए सभी कथन सही हैं"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Statement I: UTRs (Untranslated regions) 5' सिरे (start codon से पहले) और 3' सिरे (stop codon के बाद) दोनों पर मौजूद होते हैं। \nStatement II: कुशल अनुवादन (efficient translation) प्रक्रिया के लिए UTRs आवश्यक हैं।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): Template strand में क्षारों का क्रम (sequence of bases), RNA में क्षारों के क्रम को निर्धारित करता है। \nReason (R): Transcription की प्रक्रिया पूरकता के सिद्धांत (principle of complementarity) द्वारा नियंत्रित होती है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "DNA पैकेजिंग के संबंध में कथन पढ़ें: \n(i) Histone octamer धनात्मक आवेशित (positively charged) होता है। \n(ii) एक Nucleosome में DNA हेलिक्स के लगभग 200 bp होते हैं। \n(iii) उच्च स्तर पर पैकेजिंग के लिए NHC (Non-histone chromosomal) प्रोटीन की आवश्यकता होती है। \nइनमें से कितने कथन सत्य हैं?",
            image: null,
            options: ["एक भी नहीं", "केवल एक", "केवल दो", "तीनों कथन सत्य हैं"],
            correct: 3
        },
        {
            subject: "Biology",
            text: "Assertion (A): VNTR अनुक्रमों में म्यूटेशन का फेनोटाइप पर कोई तत्काल प्रभाव नहीं पड़ता है। \nReason (R): VNTRs नॉन-कोडिंग दोहराए जाने वाले DNA (repetitive DNA sequences) से संबंधित हैं।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Statement I: अधिकांश ओपेरॉन में Operator region, Promoter region के ठीक बगल में स्थित होता है। \nStatement II: प्रत्येक ओपेरॉन का अपना विशिष्ट (specific) ऑपरेटर और विशिष्ट रिप्रेसर (repressor) होता है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): tRNA को एक अडैप्टर अणु (adapter molecule) भी कहा जाता है। \nReason (R): यह एक तरफ कोडॉन को पढ़ता है और दूसरी तरफ विशिष्ट अमीनो एसिड से जुड़ता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "DNA डबल हेलिक्स की मुख्य विशेषताओं के बारे में कौन सा कथन गलत (INCORRECT) है?",
            image: null,
            options: ["बैकबोन शुगर-फॉस्फेट से बनी होती है", "दोनों श्रृंखलाओं (chains) में समानांतर ध्रुवता (parallel polarity) होती है", "एडेनिन (Adenine) थाइमिन के साथ दो हाइड्रोजन बांड बनाता है", "हेलिक्स का पिच (pitch) 3.4 nm होता है"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Statement I: ट्रांसलेशन (Translation) के दौरान, Ribosome mRNA के साथ-साथ कोडॉन दर कोडॉन आगे बढ़ता है। \nStatement II: अमीनो एसिड्स पेप्टाइड बॉन्ड द्वारा जुड़कर पॉलीपेप्टाइड श्रृंखला बनाते हैं, जिसे Ribosome का 23S rRNA उत्प्रेरित (catalyze) करता है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        }

        
    ]
};
