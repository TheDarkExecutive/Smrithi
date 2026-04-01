"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Language = "en" | "hi" | "kn" | "te" | "ta"

interface Translations {
  [key: string]: {
    [lang in Language]: string
  }
}

export const translations: Translations = {
  // Header
  "nav.problem": { en: "The Problem", hi: "समस्या", kn: "ಸಮಸ್ಯೆ", te: "సమస్య", ta: "பிரச்சனை" },
  "nav.howItWorks": { en: "How It Works", hi: "यह कैसे काम करता है", kn: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ", te: "ఇది ఎలా పని చేస్తుంది", ta: "இது எப்படி வேலை செய்கிறது" },
  "nav.features": { en: "Features", hi: "विशेषताएं", kn: "ವೈಶಿಷ್ಟ್ಯಗಳು", te: "ఫీచర్లు", ta: "அம்சங்கள்" },
  "nav.integrations": { en: "Integrations", hi: "एकीकरण", kn: "ಏಕೀಕರಣಗಳು", te: "ఇంటిగ్రేషన్లు", ta: "ஒருங்கிணைப்புகள்" },
  "nav.faq": { en: "FAQ", hi: "सामान्य प्रश्न", kn: "FAQ", te: "FAQ", ta: "FAQ" },
  "nav.joinWaitlist": { en: "Join waitlist", hi: "वेटलिस्ट में शामिल हों", kn: "ವೇಟ್‌ಲಿಸ್ಟ್‌ಗೆ ಸೇರಿ", te: "వెయిట్‌లిస్ట్‌లో చేరండి", ta: "காத்திருப்பு பட்டியலில் சேரவும்" },
  
  // Hero
  "hero.tagline": { en: "A VOICE COMPANION THAT ADAPTS TO YOU, NOT THE OTHER WAY", hi: "एक आवाज़ साथी जो आपके अनुसार ढलता है, न कि आप उसके अनुसार", kn: "ನಿಮಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಧ್ವನಿ ಸಂಗಾತಿ, ಬೇರೆ ರೀತಿಯಲ್ಲ", te: "మీకు అనుగుణంగా మారే వాయిస్ కంపానియన్, మీరు దానికి కాదు", ta: "உங்களுக்கு ஏற்ற குரல் துணை, மாறாக அல்ல" },
  "hero.subtitle": { en: "One conversational friend that unifies the apps seniors already use", hi: "एक संवादी मित्र जो बुज़ुर्गों द्वारा उपयोग किए जाने वाले ऐप्स को एकीकृत करता है", kn: "ಹಿರಿಯರು ಈಗಾಗಲೇ ಬಳಸುವ ಅಪ್ಲಿಕೇಶನ್‌ಗಳನ್ನು ಏಕೀಕರಿಸುವ ಒಬ್ಬ ಸಂಭಾಷಣಾ ಸ್ನೇಹಿತ", te: "సీనియర్లు ఇప్పటికే ఉపయోగిస్తున్న యాప్‌లను ఏకీకృతం చేసే ఒక సంభాషణ స్నేహితుడు", ta: "மூத்தவர்கள் ஏற்கனவே பயன்படுத்தும் ஆப்ஸை ஒருங்கிணைக்கும் ஒரு உரையாடல் நண்பர்" },
  
  // Problem Section
  "problem.label": { en: "The challenge", hi: "चुनौती", kn: "ಸವಾಲು", te: "సవాలు", ta: "சவால்" },
  "problem.title": { en: "Technology should adapt to people, not the other way around", hi: "प्रौद्योगिकी को लोगों के अनुसार ढलना चाहिए, न कि इसके विपरीत", kn: "ತಂತ್ರಜ್ಞಾನವು ಜನರಿಗೆ ಹೊಂದಿಕೊಳ್ಳಬೇಕು, ಬೇರೆ ರೀತಿಯಲ್ಲ", te: "టెక్నాలజీ ప్రజలకు అనుగుణంగా ఉండాలి, వ్యతిరేకంగా కాదు", ta: "தொழில்நுட்பம் மக்களுக்கு ஏற்ப மாற வேண்டும், எதிர்மாறாக அல்ல" },
  "problem.p1": { en: "Elderly users in India face a fragmented landscape of apps for medication reminders, fitness tracking, health monitoring, and companionship. Each app demands the user adapt to its interface, its logic, its way of doing things.", hi: "भारत में बुज़ुर्ग उपयोगकर्ताओं को दवाई की याद दिलाने, फिटनेस ट्रैकिंग, स्वास्थ्य निगरानी और साथी के लिए खंडित ऐप परिदृश्य का सामना करना पड़ता है।", kn: "ಭಾರತದಲ್ಲಿ ಹಿರಿಯ ಬಳಕೆದಾರರು ಔಷಧ ಜ್ಞಾಪನೆಗಳು, ಫಿಟ್‌ನೆಸ್ ಟ್ರ್ಯಾಕಿಂಗ್, ಆರೋಗ್ಯ ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ಸಂಗಾತಿಗಾಗಿ ವಿಭಜಿತ ಅಪ್ಲಿಕೇಶನ್ ಭೂದೃಶ್ಯವನ್ನು ಎದುರಿಸುತ್ತಾರೆ.", te: "భారతదేశంలో వృద్ధ వినియోగదారులు మందుల రిమైండర్లు, ఫిట్‌నెస్ ట్రాకింగ్, ఆరోగ్య పర్యవేక్షణ మరియు సహచర్యం కోసం ఫ్రాగ్మెంటెడ్ యాప్ ల్యాండ్‌స్కేప్‌ను ఎదుర్కొంటారు.", ta: "இந்தியாவில் முதியோர் மருந்து நினைவூட்டல்கள், ஃபிட்னஸ் கண்காணிப்பு, உடல்நலக் கண்காணிப்பு மற்றும் தோழமைக்கான பிளவுபட்ட ஆப் நிலப்பரப்பை எதிர்கொள்கின்றனர்." },
  "problem.p2": { en: "For many seniors, this creates frustration rather than support. Multiple logins, different interfaces, conflicting notifications. The technology meant to help them becomes another burden.", hi: "कई बुज़ुर्गों के लिए, यह सहायता के बजाय निराशा पैदा करता है। कई लॉगिन, अलग-अलग इंटरफ़ेस, परस्पर विरोधी सूचनाएं।", kn: "ಅನೇಕ ಹಿರಿಯರಿಗೆ, ಇದು ಬೆಂಬಲಕ್ಕಿಂತ ಹೆಚ್ಚು ಹತಾಶೆಯನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ. ಬಹು ಲಾಗಿನ್‌ಗಳು, ವಿಭಿನ್ನ ಇಂಟರ್‌ಫೇಸ್‌ಗಳು, ಸಂಘರ್ಷಿಸುವ ಅಧಿಸೂಚನೆಗಳು.", te: "చాలా మంది సీనియర్లకు, ఇది సపోర్ట్ కంటే నిరాశను సృష్టిస్తుంది. బహుళ లాగిన్లు, వేర్వేరు ఇంటర్‌ఫేస్‌లు, విరుద్ధమైన నోటిఫికేషన్లు.", ta: "பல முதியோருக்கு, இது ஆதரவை விட விரக்தியை உருவாக்குகிறது. பல உள்நுழைவுகள், வெவ்வேறு இடைமுகங்கள், முரண்பட்ட அறிவிப்புகள்." },
  "problem.p3": { en: "Smrithi reverses this entirely. Instead of asking seniors to learn multiple apps, we bring everything together through one conversational voice interface that learns and adapts to each individual.", hi: "स्मृति इसे पूरी तरह से उलट देती है। बुज़ुर्गों से कई ऐप सीखने के लिए कहने के बजाय, हम एक संवादी आवाज़ इंटरफ़ेस के माध्यम से सब कुछ एक साथ लाते हैं।", kn: "ಸ್ಮೃತಿ ಇದನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಹಿಮ್ಮುಖಗೊಳಿಸುತ್ತದೆ. ಹಿರಿಯರಿಗೆ ಬಹು ಅಪ್ಲಿಕೇಶನ್‌ಗಳನ್ನು ಕಲಿಯಲು ಕೇಳುವ ಬದಲು, ನಾವು ಒಂದು ಸಂಭಾಷಣಾ ಧ್ವನಿ ಇಂಟರ್‌ಫೇಸ್ ಮೂಲಕ ಎಲ್ಲವನ್ನೂ ಒಟ್ಟಿಗೆ ತರುತ್ತೇವೆ.", te: "స్మృతి దీన్ని పూర్తిగా రివర్స్ చేస్తుంది. సీనియర్లను బహుళ యాప్‌లను నేర్చుకోమని అడగడానికి బదులుగా, మేము ఒక సంభాషణ వాయిస్ ఇంటర్‌ఫేస్ ద్వారా అన్నింటినీ కలుపుతాము.", ta: "ஸ்மிருதி இதை முழுமையாக மாற்றுகிறது. மூத்தவர்களை பல ஆப்ஸ் கற்றுக்கொள்ளச் சொல்வதற்குப் பதிலாக, ஒரு உரையாடல் குரல் இடைமுகம் மூலம் அனைத்தையும் ஒன்றிணைக்கிறோம்." },
  
  // How It Works
  "howItWorks.title": { en: "Simple by design", hi: "डिज़ाइन से सरल", kn: "ವಿನ್ಯಾಸದಿಂದ ಸರಳ", te: "డిజైన్ ద్వారా సింపుల్", ta: "வடிவமைப்பால் எளிமையானது" },
  "howItWorks.subtitle": { en: "Smrithi works the way conversation works. No learning curve, no technical knowledge required.", hi: "स्मृति वैसे ही काम करती है जैसे बातचीत काम करती है। कोई सीखने की आवश्यकता नहीं।", kn: "ಸ್ಮೃತಿ ಸಂಭಾಷಣೆ ಕೆಲಸ ಮಾಡುವ ರೀತಿಯಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಯಾವುದೇ ಕಲಿ��ೆಯ ಕರ್ವ್ ಇಲ್ಲ.", te: "స్మృతి సంభాషణ పనిచేసే విధంగా పనిచేస్తుంది. నేర్చుకోవడం అవసరం లేదు.", ta: "ஸ்மிருதி உரையாடல் செயல்படும் விதத்தில் செயல்படுகிறது. கற்றல் வளைவு தேவையில்லை." },
  "howItWorks.step1.title": { en: "Integrates with trusted platforms", hi: "विश्वसनीय प्लेटफॉर्म के साथ एकीकृत", kn: "ವಿಶ್ವಾಸಾರ್ಹ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳೊಂದಿಗೆ ಏಕೀಕರಿಸುತ್ತದೆ", te: "విశ్వసనీయ ప్లాట్‌ఫారమ్‌లతో ఇంటిగ్రేట్ అవుతుంది", ta: "நம்பகமான தளங்களுடன் ஒருங்கிணைக்கிறது" },
  "howItWorks.step2.title": { en: "Conversational voice interface", hi: "संवादी आवाज़ इंटरफ़ेस", kn: "ಸಂಭಾಷಣಾ ಧ್ವನಿ ಇಂಟರ್‌ಫೇಸ್", te: "సంభాషణ వాయిస్ ఇంటర్‌ఫేస్", ta: "உரையாடல் குரல் இடைமுகம்" },
  "howItWorks.step3.title": { en: "Unified companion for daily life", hi: "दैनिक जीवन के लिए एकीकृत साथी", kn: "ದೈನಂದಿನ ಜೀವನಕ್ಕೆ ಏಕೀಕೃತ ಸಂಗಾತಿ", te: "రోజువారీ జీవితానికి ఏకీకృత సహచరుడు", ta: "அன்றாட வாழ்க்கைக்கு ஒருங்கிணைந்த துணை" },
  
  // Features
  "features.title": { en: "More than reminders. A true companion.", hi: "रिमाइंडर से अधिक। एक सच्चा साथी।", kn: "ಜ್ಞಾಪನೆಗಳಿಗಿಂತ ಹೆಚ್ಚು. ನಿಜವಾದ ಸಂಗಾತಿ.", te: "రిమైండర్ల కంటే ఎక్కువ. నిజమైన సహచరుడు.", ta: "நினைவூட்டல்களை விட அதிகம். உண்மையான துணை." },
  "features.subtitle": { en: "Smrithi does not just send notifications. It has conversations, learns routines, and provides genuine companionship through voice interaction.", hi: "स्मृति केवल सूचनाएं नहीं भेजती। यह बातचीत करती है, दिनचर्या सीखती है।", kn: "ಸ್ಮೃತಿ ಕೇವಲ ಅಧಿಸೂಚನೆಗಳನ್ನು ಕಳುಹಿಸುವುದಿಲ್ಲ. ಇದು ಸಂಭಾಷಣೆಗಳನ್ನು ನಡೆಸುತ್ತದೆ, ದಿನಚರಿಗಳನ್ನು ಕಲಿಯುತ್ತದೆ.", te: "స్మృతి కేవలం నోటిఫికేషన్లు పంపదు. ఇది సంభాషణలు చేస్తుంది, రొటీన్లను నేర్చుకుంటుంది.", ta: "ஸ்மிருதி அறிவிப்புகளை அனுப்புவது மட்டுமல்ல. இது உரையாடல்களை நடத்துகிறது, வழக்கங்களைக் கற்றுக்கொள்கிறது." },
  "features.listening": { en: "Smrithi is listening...", hi: "स्मृति सुन रही है...", kn: "ಸ್ಮೃತಿ ಕೇಳುತ್ತಿದೆ...", te: "స్మృతి వింటోంది...", ta: "ஸ்மிருதி கேட்கிறது..." },
  "features.goodMorning": { en: "Good morning, Amma. Time for your morning walk?", hi: "सुप्रभात, अम्मा। सुबह की सैर का समय?", kn: "ಶುಭೋದಯ, ಅಮ್ಮ. ನಿಮ್ಮ ಬೆಳಗಿನ ನಡಿಗೆಯ ಸಮಯ?", te: "శుభోదయం, అమ్మ. మీ మార్నింగ్ వాక్ సమయం?", ta: "காலை வணக்கம், அம்மா. உங்கள் காலை நடைக்கு நேரமா?" },
  "features.medication": { en: "Medication reminder", hi: "दवाई की याद", kn: "ಔಷಧ ಜ್ಞಾಪನೆ", te: "మందుల రిమైండర్", ta: "மருந்து நினைவூட்டல்" },
  "features.bloodPressure": { en: "Blood pressure medicine confirmed at 8:15 AM", hi: "रक्तचाप की दवाई सुबह 8:15 बजे पुष्टि हुई", kn: "ರಕ್ತದೊತ್ತಡದ ಔಷಧಿ ಬೆಳಗ್ಗೆ 8:15 ಕ್ಕೆ ದೃಢೀಕರಿಸಲಾಗಿದೆ", te: "బ్లడ్ ప్రెషర్ మందు ఉదయం 8:15 కి కన్ఫర్మ్ అయింది", ta: "இரத்த அழுத்த மருந்து காலை 8:15 மணிக்கு உறுதிப்படுத்தப்பட்டது" },
  "features.familyConnected": { en: "Family connected", hi: "परिवार जुड़ा", kn: "ಕುಟುಂಬ ಸಂಪರ್ಕಿತ", te: "కుటుంబం కనెక్ట్ అయింది", ta: "குடும்பம் இணைக்கப்பட்டது" },
  "features.raviNotified": { en: "Ravi notified about today's activity", hi: "रवि को आज की ग��िविधि के बारे में सूचित किया गया", kn: "ಇಂದಿನ ಚಟುವಟಿಕೆಯ ಬಗ್ಗೆ ರವಿಗೆ ತಿಳಿಸಲಾಗಿದೆ", te: "ఈ రోజు యాక్టివిటీ గురించి రవికి తెలియజేయబడింది", ta: "இன்றைய செயல்பாடு பற்றி ரவிக்கு தெரிவிக்கப்பட்டது" },
  
  // Integrations
  "integrations.title": { en: "Works with what you already trust", hi: "जिस पर आप पहले से भरोसा करते हैं उसके साथ काम करता है", kn: "ನೀವು ಈಗಾಗಲೇ ನಂಬುವದರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ", te: "మీరు ఇప్పటికే నమ్మేవాటితో పనిచేస్తుంది", ta: "நீங்கள் ஏற்கனவே நம்புவதனுடன் வேலை செய்கிறது" },
  "integrations.subtitle": { en: "Smrithi brings together the platforms seniors in India already rely on, creating one seamless voice experience.", hi: "स्मृति भारत में बुज़ुर्गों द्वारा भरोसा किए जाने वाले प्लेटफॉर्म को एक साथ लाती है।", kn: "ಭಾರತದಲ್ಲಿ ಹಿರಿಯರು ಈಗಾಗಲೇ ಅವಲಂಬಿಸಿರುವ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳನ್ನು ಸ್ಮೃತಿ ಒಟ್ಟಿಗೆ ತರುತ್ತದೆ.", te: "భారతదేశంలో సీనియర్లు ఇప్పటికే ఆధారపడే ప్లాట్‌ఫారమ్‌లను స్మృతి ఒకచోట చేర్చుతుంది.", ta: "இந்தியாவில் மூத்தவர்கள் ஏற்கனவே நம்பியிருக்கும் தளங்களை ஸ்மிருதி ஒன்றிணைக்கிறது." },
  
  // CTA
  "cta.title": { en: "Be the first to experience Smrithi", hi: "स्मृति का अनुभव करने वाले पहले व्यक्ति बनें", kn: "ಸ್ಮೃತಿಯನ್ನು ಅನುಭವಿಸಿದ ಮೊದಲಿಗರಾಗಿ", te: "స్మృతిని అనుభవించిన మొదటి వారు అవ్వండి", ta: "ஸ்மிருதியை அனுபவிக்கும் முதல் நபராகுங்கள்" },
  "cta.subtitle": { en: "We are launching soon. Join our waitlist to get early access and help shape the future of senior care technology.", hi: "हम जल्द ही लॉन्च कर रहे हैं। जल्दी पहुंच पाने के लिए हमारी वेटलिस्ट में शामिल हों।", kn: "ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಲಾಂಚ್ ಮಾಡುತ್ತಿದ್ದೇವೆ. ಮುಂಚಿತವಾಗಿ ಪ್ರವೇಶ ಪಡೆಯಲು ನಮ್ಮ ವೇಟ್‌ಲಿಸ್ಟ್‌ಗೆ ಸೇರಿ.", te: "మేము త్వరలో లాంచ్ చేస్తున్నాము. ముందస్తు యాక్సెస్ పొందడానికి మా వెయిట్‌లిస్ట్‌లో చేరండి.", ta: "விரைவில் தொடங்குகிறோம். முன்கூட்டியே அணுகலைப் பெற எங்கள் காத்திருப்புப் பட்டியலில் சேரவும்." },
  "cta.emailPlaceholder": { en: "Enter your email", hi: "अपना ईमेल दर्ज करें", kn: "ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ", te: "మీ ఇమెయిల్ నమోదు చేయండి", ta: "உங்கள் மின்னஞ்சலை உள்ளிடவும்" },
  "cta.button": { en: "Join waitlist", hi: "वेटलिस्ट में शामिल हों", kn: "ವೇಟ್‌ಲಿಸ್ಟ್‌ಗೆ ಸೇರಿ", te: "వెయిట్‌లిస్ట్‌లో చేరండి", ta: "காத்திருப்பு பட்டியலில் சேரவும்" },
  
  // Footer
  "footer.tagline": { en: "A voice companion that adapts to you.", hi: "एक आवाज़ साथी जो आपके अनुसार ढलता है।", kn: "ನಿಮಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಧ್ವನಿ ಸಂಗಾತಿ.", te: "మీకు అనుగుణంగా మారే వాయిస్ కంపానియన్.", ta: "உங்களுக்கு ஏற்ற குரல் துணை." },
  "footer.product": { en: "Product", hi: "उत्पाद", kn: "ಉತ್ಪನ್ನ", te: "ఉత్పత్తి", ta: "தயாரிப்பு" },
  "footer.company": { en: "Company", hi: "कंपनी", kn: "ಕಂಪನಿ", te: "కంపెనీ", ta: "நிறுவனம்" },
  "footer.contact": { en: "Contact", hi: "संपर्क", kn: "ಸಂಪರ್ಕ", te: "సంప్రదించండి", ta: "தொடர்பு" },
  "footer.rights": { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।", kn: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.", te: "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.", ta: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." },
}

const languageNames: { [key in Language]: string } = {
  en: "English",
  hi: "हिंदी",
  kn: "ಕನ್ನಡ",
  te: "తెలుగు",
  ta: "தமிழ்",
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  languageNames: typeof languageNames
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("smrithi-language") as Language
    if (saved && translations["hero.tagline"][saved]) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("smrithi-language", lang)
  }

  const t = (key: string): string => {
    return translations[key]?.[language] || translations[key]?.["en"] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, languageNames }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
