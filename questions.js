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
        },
              {
            subject: "Biology",
            text: "Statement I: Cleistogamous (अनुन्मील्य) फूल हमेशा ऑटोगैमस (स्व-परागित) होते हैं। \nStatement II: Cleistogamy परागणकों (pollinators) की अनुपस्थिति में भी बीज निर्माण सुनिश्चित करती है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): भ्रूणपोष (Endosperm) का विकास भ्रूण (Embryo) के विकास से पहले होता है। \nReason (R): भ्रूणपोष विकासशील भ्रूण को पोषण प्रदान करता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "परागकणों (Pollen grains) को लिक्विड नाइट्रोजन में किस तापमान पर वर्षों तक स्टोर किया जा सकता है?",
            image: null,
            options: ["-120°C", "-196°C", "-160°C", "-273°C"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "परागकण के एक्जाइन (Exine) में स्पोरोपोलेनिन (Sporopollenin) कहाँ अनुपस्थित होता है?",
            image: null,
            options: ["Vegetative cell", "Generative cell", "Germ pore (जनन छिद्र)", "Intine"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "Assertion (A): अधिकांश आवृतबीजियों (Angiosperms) में परागकण 2-कोशिकीय अवस्था में झड़ते हैं। \nReason (R): झड़ने से पहले कायिक कोशिका (Vegetative cell) विभाजित होकर दो नर युग्मक बनाती है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "निम्नलिखित में से कौन सा आभासी फल (False fruit) का उदाहरण है?",
            image: null,
            options: ["Apple (सेब)", "Strawberry (स्ट्रॉबेरी)", "Cashew (काजू)", "उपरोक्त सभी"],
            correct: 3
        },
        {
            subject: "Biology",
            text: "Statement I: Geitonogamy कार्यात्मक (functionally) रूप से पर-परागण (cross-pollination) है लेकिन आनुवंशिक रूप से स्व-परागण (autogamy) है। \nStatement II: इसमें परागण कारकों (pollinating agents) की आवश्यकता होती है, लेकिन परागकण उसी पौधे से आते हैं।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "जल परागण (Hydrophily) इनमें से किसमें देखा जाता है?",
            image: null,
            options: ["Zostera", "Vallisneria", "Hydrilla", "इन सभी में"],
            correct: 3
        },
        {
            subject: "Biology",
            text: "क्रमशः Nucellus, MMC, Functional megaspore, और Female gametophyte की प्लॉइडी (Ploidy) क्या होती है?",
            image: null,
            options: ["2n, 2n, n, n", "2n, n, n, n", "n, 2n, n, 2n", "2n, 2n, 2n, n"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): वृषण (Testes) उदर गुहा के बाहर वृषण कोष (scrotum) में स्थित होते हैं। \nReason (R): Scrotum शुक्राणुजनन (spermatogenesis) के लिए आवश्यक कम तापमान (2-2.5°C कम) बनाए रखने में मदद करता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Statement I: Leydig कोशिकाएं एण्ड्रोजन (Androgens) नामक वृषण हार्मोन का संश्लेषण और स्राव करती हैं। \nStatement II: Leydig कोशिकाएं शुक्रजनक नलिकाओं (seminiferous tubules) के बाहर अंतराली स्थानों (interstitial spaces) में मौजूद होती हैं।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "कौन से हार्मोन का तीव्र स्राव (Surge) मुख्य रूप से अंडोत्सर्ग (Ovulation) के लिए जिम्मेदार है?",
            image: null,
            options: ["FSH surge", "LH surge", "Estrogen surge", "Progesterone surge"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Assertion (A): मानव मादाओं में, अर्धसूत्रीविभाजन-II (Meiosis-II) निषेचन (fertilization) तक पूरा नहीं होता है। \nReason (R): द्वितीयक अंडक (Secondary oocyte) मेटाफेज II में रुक जाता है और केवल शुक्राणु के प्रवेश पर विभाजन फिर से शुरू करता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "किस ग्रंथि का स्राव शिश्न (Penis) के स्नेहन (lubrication) में मदद करता है?",
            image: null,
            options: ["Prostate gland", "Seminal vesicle", "Bulbourethral gland", "Bartholin's gland"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "Statement I: ब्लास्टोसिस्ट की ट्रोफोब्लास्ट परत एंडोमेट्रियम से जुड़ जाती है। \nStatement II: आंतरिक कोशिका समूह (Inner cell mass) भ्रूण के रूप में विभेदित हो जाता है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "निम्नलिखित में से कौन सा हार्मोन महिलाओं में 'केवल गर्भावस्था' के दौरान उत्पन्न होता है?",
            image: null,
            options: ["hCG", "hPL", "Relaxin", "उपरोक्त सभी"],
            correct: 3
        },
        {
            subject: "Biology",
            text: "प्रसव (Parturition) के बाद बनने वाले पहले दूध (Colostrum) में कौन सी एंटीबॉडी (Antibody) प्रचुर मात्रा में होती है?",
            image: null,
            options: ["IgA", "IgG", "IgM", "IgE"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "शुक्राणु का योग्यता अर्जन (Capacitation) कहाँ होता है?",
            image: null,
            options: ["Epididymis", "Vas deferens", "Female reproductive tract", "Rete testis"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "Assertion (A): सहेली (Saheli) एक 'सप्ताह में एक बार' ली जाने वाली गोली है। \nReason (R): इसमें स्टेरॉयडल (Steroidal) घटक होता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "निम्नलिखित में से कौन सा एक तांबा मोचक (Copper-releasing) IUD है?",
            image: null,
            options: ["Lippes loop", "Multiload 375", "LNG-20", "Progestasert"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Statement I: पहली तिमाही (गर्भावस्था के 12 सप्ताह तक) के दौरान MTPs को अपेक्षाकृत सुरक्षित माना जाता है। \nStatement II: दूसरी तिमाही का गर्भपात (Second-trimester abortion) बहुत अधिक जोखिम भरा होता है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): ZIFT में जाइगोट या प्रारंभिक भ्रूण (8 ब्लास्टोमियर तक) को फैलोपियन ट्यूब में स्थानांतरित किया जाता है। \nReason (R): 8 ब्लास्टोमियर से अधिक वाले भ्रूण को गर्भाशय (IUT) में स्थानांतरित किया जाता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "इनमें से कौन सा STI पूरी तरह से साध्य (Curable) है यदि इसे जल्दी पकड़ा जाए और ठीक से इलाज किया जाए?",
            image: null,
            options: ["Hepatitis B", "Genital herpes", "HIV infection", "Syphilis"],
            correct: 3
        },
        {
            subject: "Biology",
            text: "गर्भनिरोधक के सर्जिकल तरीकों को आमतौर पर अंतिम उपाय (Terminal method) माना जाता है। पुरुषों में इस प्रक्रिया को क्या कहते हैं?",
            image: null,
            options: ["Vasectomy", "Tubectomy", "Castration", "Hysterectomy"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Statement I: स्तनपान अनावर्त (Lactational amenorrhea) प्रसव के बाद अधिकतम 6 महीने तक ही प्रभावी होता है। \nStatement II: जब तक माँ पूरी तरह से स्तनपान कराती है, गर्भधारण की संभावना लगभग नगण्य होती है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "उल्बवेधन (Amniocentesis) भ्रूण के लिंग निर्धारण और विकार निदान का एक परीक्षण है, जो किस पर आधारित है?",
            image: null,
            options: ["Hormone levels in blood", "Ultrasound imaging", "Chromosomal pattern in amniotic fluid", "Heartbeat of the fetus"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "Assertion (A): मलेरिया प्लास्मोडियम (Plasmodium) नामक प्रोटोजोआ के कारण होता है। \nReason (R): प्लास्मोडियम फाल्सीपेरम के कारण होने वाला मैलिग्नेंट मलेरिया सबसे गंभीर और घातक हो सकता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "वुचेरेरिया बैनक्रॉफ्टी (Wuchereria bancrofti) इनमें से किस बीमारी का कारण बनता है?",
            image: null,
            options: ["Amoebiasis", "Filariasis (Elephantiasis)", "Ringworm", "Ascariasis"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Statement I: टाइफाइड बुखार की पुष्टि विडाल टेस्ट (Widal test) द्वारा की जा सकती है। \nStatement II: मैरी मैलोन (Mary Mallon) मेडिसिन में टाइफाइड कैरियर का एक क्लासिक मामला थीं।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "निम्नलिखित में से कौन सा एक ऑटोइम्यून (Autoimmune) रोग है?",
            image: null,
            options: ["Myasthenia gravis", "Rheumatoid arthritis", "Both 1 and 2", "AIDS"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "Assertion (A): HIV से संक्रमित व्यक्ति को संक्रमण होने की अत्यधिक संभावना हो जाती है। \nReason (R): HIV सहायक टी-लिम्फोसाइट्स (Helper T-cells) की संख्या में भारी कमी कर देता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "दुर्दम ट्यूमर (Malignant tumors) इनमें से कौन सा गुण दर्शाते हैं?",
            image: null,
            options: ["Contact inhibition", "Metastasis", "Encapsulation", "Benign growth"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Statement I: सहज प्रतिरक्षा (Innate immunity) जन्म के समय मौजूद विशिष्ट (specific) रक्षा प्रणाली है। \nStatement II: यह स्मृति (memory) पर आधारित होती है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "दोनों Statements गलत हैं"],
            correct: 3
        },
        {
            subject: "Biology",
            text: "इंटरफेरॉन (Interferons) किनके द्वारा स्रावित होते हैं?",
            image: null,
            options: ["Virus-infected cells", "Bacteria-infected cells", "Fungi-infected cells", "Healthy RBCs"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "स्मैक (Smack/Heroin) रासायनिक रूप से क्या है?",
            image: null,
            options: ["Diacetylmorphine", "Methylmorphine", "Lysergic acid", "Cannabinoids"],
            correct: 0
        },
              {
            subject: "Biology",
            text: "दिए गए कथनों को पढ़ें: \n(i) Emasculation (विपुंसन) केवल द्विलिंगी (bisexual) फूलों में आवश्यक है। \n(ii) Bagging (थैली लगाना) स्व-परागण (self-pollination) को रोकने के लिए किया जाता है। \n(iii) एकलिंगी (unisexual) फूलों में emasculation की आवश्यकता नहीं होती है। \nइनमें से कितने कथन सत्य हैं?",
            image: null,
            options: ["केवल एक", "केवल दो", "तीनों कथन सत्य हैं", "एक भी नहीं"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Assertion (A): Apomixis (असंगजनन) बिना निषेचन के बीज निर्माण की प्रक्रिया है। \nReason (R): Apomixis अलैंगिक प्रजनन (asexual reproduction) का एक रूप है जो लैंगिक प्रजनन (sexual reproduction) की नकल करता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "सही मिलान (Correct Match) चुनें: \n(A) Anemophily - (1) Insects \n(B) Entomophily - (2) Wind \n(C) Hydrophily - (3) Water \n(D) Ornithophily - (4) Birds",
            image: null,
            options: ["A-2, B-1, C-3, D-4", "A-1, B-2, C-3, D-4", "A-2, B-3, C-1, D-4", "A-3, B-1, C-2, D-4"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Statement I: Tapetum परागकोश (anther) की सबसे भीतरी परत है जो विकासशील परागकणों को पोषण देती है। \nStatement II: Tapetum की कोशिकाएं आमतौर पर बहुकेंद्रकीय (multinucleate) होती हैं और उनमें सघन जीवद्रव्य (dense cytoplasm) होता है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "आवृतबीजियों (Angiosperms) में 7-कोशिकीय, 8-केंद्रकीय भ्रूणकोष (embryo sac) में, अंड उपकरण (Egg apparatus) किनसे मिलकर बना होता है?",
            image: null,
            options: ["Two synergids and one egg cell", "One synergid and two egg cells", "Three antipodals", "Two polar nuclei and one egg cell"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): वायु परागित (Wind-pollinated) फूलों में अक्सर प्रत्येक अंडाशय में केवल एक बीजांड (ovule) होता है। \nReason (R): वायु परागण एक दिशाहीन (non-directional) प्रक्रिया है और परागकणों की बर्बादी बहुत अधिक होती है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Statement I: Polyembryony (बहुभ्रूणता) अक्सर सिट्रस (Citrus) और आम (Mango) में देखी जाती है। \nStatement II: यह Nucellar कोशिकाओं के भ्रूणकोष (embryo sac) में प्रवेश करने और भ्रूण में विकसित होने के कारण होता है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "मानव नर जनन तंत्र में शुक्राणुओं के परिवहन का सही क्रम (Correct Sequence) क्या है?",
            image: null,
            options: ["Seminiferous tubules → Vasa efferentia → Epididymis → Rete testis → Vas deferens", "Seminiferous tubules → Rete testis → Vasa efferentia → Epididymis → Vas deferens", "Rete testis → Seminiferous tubules → Epididymis → Vasa efferentia → Vas deferens", "Seminiferous tubules → Rete testis → Epididymis → Vasa efferentia → Vas deferens"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Assertion (A): Spermatogenesis (शुक्राणुजनन) यौवन (puberty) से शुरू होता है जबकि Oogenesis (अंडजनन) भ्रूणीय अवस्था (embryonic stage) में ही शुरू हो जाता है। \nReason (R): Oogonia जन्म के बाद न तो बनते हैं और न ही अंडाशय में जुड़ते हैं।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Statement I: Menstrual cycle के दौरान, LH और FSH दोनों 14वें दिन के आसपास अपने उच्चतम स्तर (peak) पर पहुँच जाते हैं। \nStatement II: LH surge के कारण ग्राफ़ियन फॉलिकल (Graafian follicle) फट जाता है, जिससे अंडोत्सर्ग (ovulation) होता है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "सही मिलान (Correct Match) चुनें: \n(A) Leydig cells - (1) Progesterone \n(B) Sertoli cells - (2) Testosterone \n(C) Corpus luteum - (3) Nourish sperms",
            image: null,
            options: ["A-2, B-3, C-1", "A-1, B-2, C-3", "A-2, B-1, C-3", "A-3, B-2, C-1"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): प्लेसेंटा (Placenta) एक अंतःस्रावी ग्रंथि (endocrine tissue) की तरह भी कार्य करता है। \nReason (R): यह hCG, hPL, Estrogen और Progesterone जैसे हार्मोन स्रावित करता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Statement I: Spermiogenesis वह प्रक्रिया है जिसमें Spermatids, Spermatozoa (sperms) में परिवर्तित होते हैं। \nStatement II: Spermiation वह प्रक्रिया है जिसमें शुक्राणु Sertoli कोशिकाओं से मुक्त होकर seminiferous tubules के ल्यूमेन में आते हैं।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "प्राइमरी स्पर्मेटोसाइट (Primary spermatocyte) और सेकेंडरी ऊसाइट (Secondary oocyte) की प्लॉइडी (Ploidy) क्रमशः क्या होती है?",
            image: null,
            options: ["n, n", "2n, n", "n, 2n", "2n, 2n"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Assertion (A): IUDs (Intra Uterine Devices) भारत में महिलाओं द्वारा सबसे व्यापक रूप से स्वीकार किए जाने वाले गर्भनिरोधक तरीकों में से एक हैं। \nReason (R): IUDs गर्भाशय के भीतर शुक्राणुओं के फैगोसाइटोसिस (phagocytosis) को बढ़ाते हैं।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Statement I: Oral pills (जैसे माला-D) में प्रोजेस्टेरोन या प्रोजेस्टेरोन-एस्ट्रोजन का संयोजन होता है। \nStatement II: ये गोलियां अंडोत्सर्ग (ovulation) और आरोपण (implantation) को रोकती हैं और गर्भाशय ग्रीवा के बलगम (cervical mucus) की गुणवत्ता को बदल देती हैं।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "सही मिलान (Correct Match) चुनें: \n(A) Non-medicated IUD - (1) LNG-20 \n(B) Copper releasing IUD - (2) Lippes loop \n(C) Hormone releasing IUD - (3) Multiload 375",
            image: null,
            options: ["A-2, B-3, C-1", "A-1, B-2, C-3", "A-3, B-2, C-1", "A-2, B-1, C-3"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): ZIFT (Zygote Intra Fallopian Transfer) में निषेचन शरीर के बाहर (In vitro) होता है। \nReason (R): GIFT (Gamete Intra Fallopian Transfer) उन महिलाओं के लिए है जो ओवम (ovum) उत्पन्न नहीं कर सकतीं लेकिन निषेचन के लिए उपयुक्त वातावरण प्रदान कर सकती हैं।",
            image: null,
            options: ["दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Statement I: 'सहेली' (Saheli) एक गैर-स्टेरायडल (non-steroidal) ओरल कॉन्ट्रासेप्टिव पिल है जिसे CDRI, लखनऊ द्वारा विकसित किया गया है। \nStatement II: इसका एस्ट्रोजन रिसेप्टर्स पर एंटी-एस्ट्रोजेनिक (anti-estrogenic) प्रभाव होता है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "निम्नलिखित में से कौन सा यौन संचारित संक्रमण (STI) वायरस (Virus) के कारण नहीं होता है?",
            image: null,
            options: ["Genital herpes", "Hepatitis B", "Syphilis", "HIV"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "Assertion (A): Amniocentesis का उपयोग भ्रूण के लिंग निर्धारण के लिए किया जा सकता है। \nReason (R): भारत में कन्या भ्रूण हत्या (female foeticide) को रोकने के लिए लिंग निर्धारण के लिए Amniocentesis पर वैधानिक प्रतिबंध (statutory ban) है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Statement I: निमोनिया (Pneumonia) में फेफड़ों के एल्वियोली (alveoli) तरल पदार्थ से भर जाते हैं। \nStatement II: निमोनिया मुख्य रूप से राइनोवायरस (Rhinovirus) के कारण होता है।",
            image: null,
            options: ["Statement I सही है, Statement II गलत है", "दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): प्लास्मोडियम (Plasmodium) मानव शरीर में स्पोरोजोइट (Sporozoites) के रूप में प्रवेश करता है। \nReason (R): संक्रमित मादा एनाफिलीज (Anopheles) मच्छर के काटने पर स्पोरोजोइट्स लार के साथ मानव रक्त में मिल जाते हैं।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "सही मिलान (Correct Match) चुनें: \n(A) Typhoid - (1) Wuchereria \n(B) Malaria - (2) Salmonella typhi \n(C) Elephantiasis - (3) Plasmodium \n(D) Ringworm - (4) Microsporum",
            image: null,
            options: ["A-2, B-3, C-1, D-4", "A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-3, B-2, C-1, D-4"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Statement I: सक्रिय प्रतिरक्षा (Active immunity) धीमी होती है और अपनी पूरी प्रभावी प्रतिक्रिया देने में समय लेती है। \nStatement II: टिटनेस (Tetanus) के मामले में शरीर में पहले से बने एंटीबॉडी (preformed antibodies) इंजेक्ट किए जाते हैं, जो निष्क्रिय प्रतिरक्षा (Passive immunity) का उदाहरण है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): एलर्जी के दौरान शरीर में IgE प्रकार के एंटीबॉडी बड़ी मात्रा में उत्पन्न होते हैं। \nReason (R): एलर्जी के लक्षण मास्ट कोशिकाओं (Mast cells) से हिस्टामाइन (histamine) और सेरोटोनिन (serotonin) के स्राव के कारण होते हैं।",
            image: null,
            options: ["दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "कैनबिनोइड्स (Cannabinoids) जो मारिजुआना, हशीश, चरस और गांजा के रूप में जाने जाते हैं, शरीर के किस तंत्र को सबसे अधिक प्रभावित करते हैं?",
            image: null,
            options: ["Respiratory system", "Cardiovascular system", "Digestive system", "Excretory system"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Statement I: प्राथमिक लिम्फोइड अंगों (Primary lymphoid organs) में अस्थि मज्जा (Bone marrow) और थाइमस (Thymus) शामिल हैं। \nStatement II: प्लीहा (Spleen) एक द्वितीयक लिम्फोइड अंग है जो रक्त जनित सूक्ष्मजीवों को फंसाकर रक्त को फिल्टर (Filter) करता है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): सामान्य कोशिकाएं 'Contact inhibition' (संपर्क संदमन) का गुण दर्शाती हैं। \nReason (R): कैंसर कोशिकाओं में यह गुण (contact inhibition) खो जाता है, जिसके कारण वे अनियंत्रित रूप से विभाजित होती हैं।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "HIV वायरस शरीर की किन कोशिकाओं पर मुख्य रूप से हमला करता है और उनकी संख्या कम कर देता है?",
            image: null,
            options: ["B-lymphocytes", "Cytotoxic T-cells", "Helper T-lymphocytes (TH cells)", "Macrophages"],
            correct: 2
        },
        {
            subject: "Biology",
            text: "Statement I: एंटीबॉडी (Antibody) अणु में 4 पेप्टाइड श्रृंखलाएं होती हैं, जिन्हें H2L2 के रूप में दर्शाया जाता है। \nStatement II: एंटीबॉडी मुख्य रूप से T-lymphocytes द्वारा उत्पन्न किए जाते हैं।",
            image: null,
            options: ["Statement I सही है, Statement II गलत है", "दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I गलत है, Statement II सही है"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "विड्रॉल सिंड्रोम (Withdrawal syndrome) का क्या अर्थ है?",
            image: null,
            options: ["दवा/शराब का नियमित सेवन अचानक बंद करने पर होने वाले शारीरिक और मनोवैज्ञानिक लक्षण", "दवा के प्रति शरीर की सहनशीलता (tolerance) का बढ़ना", "दवा का शरीर पर कोई प्रभाव न होना", "अधिक मात्रा में दवा लेने से होने वाला नशा"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "Assertion (A): रूमेटाइड आर्थराइटिस (Rheumatoid arthritis) एक ऑटोइम्यून (Autoimmune) बीमारी है। \nReason (R): इसमें शरीर का प्रतिरक्षा तंत्र (immune system) 'स्वयं' (self) और 'गैर-स्वयं' (non-self) के बीच अंतर करने की क्षमता खो देता है और अपनी ही कोशिकाओं पर हमला करता है।",
            image: null,
            options: ["दोनों A और R सत्य हैं, और R, A की सही व्याख्या है", "दोनों A और R सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है लेकिन R असत्य है", "दोनों A और R असत्य हैं"],
            correct: 0
        },
        {
            subject: "Biology",
            text: "कोकीन (Cocaine) किस पौधे से प्राप्त किया जाता है और यह मुख्य रूप से किस न्यूरोट्रांसमीटर के परिवहन में बाधा डालता है?",
            image: null,
            options: ["Papaver somniferum, Serotonin", "Erythroxylum coca, Dopamine", "Cannabis sativa, Acetylcholine", "Atropa belladonna, Adrenaline"],
            correct: 1
        },
        {
            subject: "Biology",
            text: "Statement I: एलिसा (ELISA) परीक्षण एंटीजन-एंटीबॉडी इंटरैक्शन (antigen-antibody interaction) के सिद्धांत पर आधारित है। \nStatement II: यह परीक्षण मुख्य रूप से AIDS (HIV संक्रमण) की प्रारंभिक जांच के लिए उपयोग किया जाता है।",
            image: null,
            options: ["दोनों Statements सही हैं", "दोनों Statements गलत हैं", "Statement I सही है, Statement II गलत है", "Statement I गलत है, Statement II सही है"],
            correct: 0
        }



        
    ]
};
