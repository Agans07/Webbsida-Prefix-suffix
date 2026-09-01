// A word can carry both a listed prefix and suffix. Each affix record stores
// the exact spelling found at the beginning or end of the word.
const WORD_DATA = [


	// A- / An-
	{ ord: "asocial", prefix: { term: "A- / An-", text: "a" } },
	{ ord: "anonym", prefix: { term: "A- / An-", text: "an" }, suffix: { term: "-onym", text: "onym" } },
	{ ord: "atypisk", prefix: { term: "A- / An-", text: "a" }, suffix: { term: "-isk", text: "isk" } },

	// Ab- / Abs-
	{ ord: "abnorm", prefix: { term: "Ab- / Abs-", text: "ab" } },
	{ ord: "absorbera", prefix: { term: "Ab- / Abs-", text: "abs" } },
	{ ord: "abdikera", prefix: { term: "Ab- / Abs-", text: "ab" } },

	// Ad- / Af- / Ak-
	{ ord: "adoptera", prefix: { term: "Ad- / Af- / Ak-", text: "ad" } },
	{ ord: "affinitet", prefix: { term: "Ad- / Af- / Ak-", text: "af" }, suffix: { term: "-itet", text: "itet" } },
	{ ord: "advokat", prefix: { term: "Ad- / Af- / Ak-", text: "ad" } },

	// Aer- / Aero-
	{ ord: "aerodynamik", prefix: { term: "Aer- / Aero-", text: "aero" }, suffix: { term: "-ik", text: "ik" } },
	{ ord: "aeronaut", prefix: { term: "Aer- / Aero-", text: "aero" }, suffix: { term: "-naut", text: "naut" } },
	{ ord: "aerosol", prefix: { term: "Aer- / Aero-", text: "aero" } },

	// Akro- / Acro-
	{ ord: "akrofobi", prefix: { term: "Akro- / Acro-", text: "akro" }, suffix: { term: "-fobi", text: "fobi" } },
	{ ord: "akronym", prefix: { term: "Akro- / Acro-", text: "akro" }, suffix: { term: "-onym", text: "onym" } },
	{ ord: "akrobat", prefix: { term: "Akro- / Acro-", text: "akro" } },

	// Akva-
	{ ord: "akvarium", prefix: { term: "Akva-", text: "akva" } },
	{ ord: "akvamarin", prefix: { term: "Akva-", text: "akva" } },
	{ ord: "akvarell", prefix: { term: "Akva-", text: "akva" }, suffix: { term: "-ell", text: "ell" } },

	// Antropo-
	{ ord: "antropologi", prefix: { term: "Antropo-", text: "antropo" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "antropomorf", prefix: { term: "Antropo-", text: "antropo" } },
	{ ord: "antropocentrisk", prefix: { term: "Antropo-", text: "antropo" }, suffix: { term: "-centrisk", text: "centrisk" } },

	// Ana-
	{ ord: "analys", prefix: { term: "Ana-", text: "ana" }, suffix: { term: "-lys", text: "lys" } },
	{ ord: "anatomi", prefix: { term: "Ana-", text: "ana" }, suffix: { term: "-tomi", text: "tomi" } },
	{ ord: "anakronism", prefix: { term: "Ana-", text: "ana" }, suffix: { term: "-ism", text: "ism" } },

	// Andro-
	{ ord: "androgen", prefix: { term: "Andro-", text: "andro" }, suffix: { term: "-gen", text: "gen" } },
	{ ord: "android", prefix: { term: "Andro-", text: "andro" }, suffix: { term: "-oid", text: "oid" } },
	{ ord: "androgyn", prefix: { term: "Andro-", text: "andro" } },

	// Anglo-
	{ ord: "anglosaxisk", prefix: { term: "Anglo-", text: "anglo" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "anglofil", prefix: { term: "Anglo-", text: "anglo" }, suffix: { term: "-fil", text: "fil" } },
	{ ord: "anglomani", prefix: { term: "Anglo-", text: "anglo" }, suffix: { term: "-mani", text: "mani" } },

	// Inter-
	{ ord: "internationell", prefix: { term: "Inter-", text: "inter" }, suffix: { term: "-ell", text: "ell" } },
	{ ord: "interaktion", prefix: { term: "Inter-", text: "inter" }, suffix: { term: "-tion", text: "tion" } },
	{ ord: "intern", prefix: { term: "Inter-", text: "inter" } },

	// Apo-
	{ ord: "apotek", prefix: { term: "Apo-", text: "apo" }, suffix: { term: "-tek", text: "tek" } },
	{ ord: "apokalyps", prefix: { term: "Apo-", text: "apo" } },
	{ ord: "apostrof", prefix: { term: "Apo-", text: "apo" } },

	// Astro-
	{ ord: "astronomi", prefix: { term: "Astro-", text: "astro" }, suffix: { term: "-nomi", text: "nomi" } },
	{ ord: "astrologi", prefix: { term: "Astro-", text: "astro" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "astronaut", prefix: { term: "Astro-", text: "astro" }, suffix: { term: "-naut", text: "naut" } },

	// Av-
	{ ord: "avboka", prefix: { term: "Av-", text: "av" } },
	{ ord: "avresa", prefix: { term: "Av-", text: "av" } },
	{ ord: "avsluta", prefix: { term: "Av-", text: "av" } },

	// Baro-
	{ ord: "barometer", prefix: { term: "Baro-", text: "baro" }, suffix: { term: "-meter", text: "meter" } },
	{ ord: "barograf", prefix: { term: "Baro-", text: "baro" }, suffix: { term: "-graf", text: "graf" } },
	{ ord: "barotrauma", prefix: { term: "Baro-", text: "baro" } },

	// Be-
	{ ord: "betala", prefix: { term: "Be-", text: "be" } },
	{ ord: "bebygga", prefix: { term: "Be-", text: "be" } },
	{ ord: "berätta", prefix: { term: "Be-", text: "be" } },

		// Bi-
	{ ord: "bilateral", prefix: { term: "Bi-", text: "bi" }, suffix: { term: "-al", text: "al" } },
	{ ord: "binär", prefix: { term: "Bi-", text: "bi" }, suffix: { term: "-är", text: "är" } },
	{ ord: "bigami", prefix: { term: "Bi-", text: "bi" } },

	// Biblio-
	{ ord: "bibliotek", prefix: { term: "Biblio-", text: "biblio" }, suffix: { term: "-tek", text: "tek" } },
	{ ord: "bibliografi", prefix: { term: "Biblio-", text: "biblio" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "bibliofil", prefix: { term: "Biblio-", text: "biblio" }, suffix: { term: "-fil", text: "fil" } },

	// Meta-
	{ ord: "metafor", prefix: { term: "Meta-", text: "meta" } },
	{ ord: "metabolism", prefix: { term: "Meta-", text: "meta" }, suffix: { term: "-ism", text: "ism" } },
	{ ord: "metafysik", prefix: { term: "Meta-", text: "meta" }, suffix: { term: "-ik", text: "ik" } },

	// Kontra-
	{ ord: "kontrast", prefix: { term: "Kontra-", text: "kontra" } },
	{ ord: "kontraproduktiv", prefix: { term: "Kontra-", text: "kontra" }, suffix: { term: "-iv", text: "iv" } },
	{ ord: "kontraindikation", prefix: { term: "Kontra-", text: "kontra" }, suffix: { term: "-tion", text: "tion" } },

	// Co- / Ko-
	{ ord: "koexistens", prefix: { term: "Co- / Ko-", text: "ko" }, suffix: { term: "-ens", text: "ens" } },
	{ ord: "kooperativ", prefix: { term: "Co- / Ko-", text: "ko" }, suffix: { term: "-iv", text: "iv" } },
	{ ord: "koordinera", prefix: { term: "Co- / Ko-", text: "ko" } },

	// Cyber-
	{ ord: "cyberrymd", prefix: { term: "Cyber-", text: "cyber" } },
	{ ord: "cyberattack", prefix: { term: "Cyber-", text: "cyber" } },
	{ ord: "cybersäkerhet", prefix: { term: "Cyber-", text: "cyber" }, suffix: { term: "-het", text: "het" } },

	// De- / Des-
	{ ord: "deformera", prefix: { term: "De- / Des-", text: "de" } },
	{ ord: "desinficera", prefix: { term: "De- / Des-", text: "des" } },
	{ ord: "devalvera", prefix: { term: "De- / Des-", text: "de" } },

	// Deka-
	{ ord: "dekad", prefix: { term: "Deka-", text: "deka" } },
	{ ord: "dekameter", prefix: { term: "Deka-", text: "deka" }, suffix: { term: "-meter", text: "meter" } },
	{ ord: "dekagram", prefix: { term: "Deka-", text: "deka" } },

	// Di-
	{ ord: "dioxid", prefix: { term: "Di-", text: "di" }, suffix: { term: "-id", text: "id" } },
	{ ord: "dilemma", prefix: { term: "Di-", text: "di" } },
	{ ord: "dioxin", prefix: { term: "Di-", text: "di" } },

	// Dia-
	{ ord: "diagnos", prefix: { term: "Dia-", text: "dia" } },
	{ ord: "diameter", prefix: { term: "Dia-", text: "dia" }, suffix: { term: "-meter", text: "meter" } },
	{ ord: "dialog", prefix: { term: "Dia-", text: "dia" } },

	// Dis-
	{ ord: "diskvalificera", prefix: { term: "Dis-", text: "dis" } },
	{ ord: "distansera", prefix: { term: "Dis-", text: "dis" } },
	{ ord: "disharmoni", prefix: { term: "Dis-", text: "dis" } },

	// Dys-
	{ ord: "dysfunktion", prefix: { term: "Dys-", text: "dys" }, suffix: { term: "-tion", text: "tion" } },
	{ ord: "dyslexi", prefix: { term: "Dys-", text: "dys" } },
	{ ord: "dystopi", prefix: { term: "Dys-", text: "dys" } },

	// Ego-
	{ ord: "egoism", prefix: { term: "Ego-", text: "ego" }, suffix: { term: "-ism", text: "ism" } },
	{ ord: "egocentrisk", prefix: { term: "Ego-", text: "ego" }, suffix: { term: "-centrisk", text: "centrisk" } },
	{ ord: "egoist", prefix: { term: "Ego-", text: "ego" }, suffix: { term: "-ist", text: "ist" } },

	// Eko-
	{ ord: "ekosystem", prefix: { term: "Eko-", text: "eko" } },
	{ ord: "ekoturism", prefix: { term: "Eko-", text: "eko" }, suffix: { term: "-ism", text: "ism" } },
	{ ord: "ekologisk", prefix: { term: "Eko-", text: "eko" }, suffix: { term: "-isk", text: "isk" } },

	// Em- / En-
	{ ord: "empati", prefix: { term: "Em- / En-", text: "em" }, suffix: { term: "-pati", text: "pati" } },
	{ ord: "energi", prefix: { term: "Em- / En-", text: "en" } },
	{ ord: "entusiasm", prefix: { term: "Em- / En-", text: "en" } },

	// Endo-
	{ ord: "endoskopi", prefix: { term: "Endo-", text: "endo" }, suffix: { term: "-skopi", text: "skopi" } },
	{ ord: "endokrin", prefix: { term: "Endo-", text: "endo" } },
	{ ord: "endorfin", prefix: { term: "Endo-", text: "endo" } },

	// Epi-
	{ ord: "epidemi", prefix: { term: "Epi-", text: "epi" } },
	{ ord: "epilog", prefix: { term: "Epi-", text: "epi" } },
	{ ord: "episod", prefix: { term: "Epi-", text: "epi" } },

	// Etno-
	{ ord: "etnologi", prefix: { term: "Etno-", text: "etno" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "etnocentrisk", prefix: { term: "Etno-", text: "etno" }, suffix: { term: "-centrisk", text: "centrisk" } },
	{ ord: "etnografi", prefix: { term: "Etno-", text: "etno" }, suffix: { term: "-grafi", text: "grafi" } },

	// Eu-
	{ ord: "eufori", prefix: { term: "Eu-", text: "eu" } },
	{ ord: "eutanasi", prefix: { term: "Eu-", text: "eu" } },
	{ ord: "eugenik", prefix: { term: "Eu-", text: "eu" }, suffix: { term: "-ik", text: "ik" } },

	// Ex- / E-
	{ ord: "exportera", prefix: { term: "Ex- / E-", text: "ex" } },
	{ ord: "evakuera", prefix: { term: "Ex- / E-", text: "e" } },
	{ ord: "excentrisk", prefix: { term: "Ex- / E-", text: "ex" }, suffix: { term: "-centrisk", text: "centrisk" } },

	// Exo-
	{ ord: "exoskelett", prefix: { term: "Exo-", text: "exo" } },
	{ ord: "exotisk", prefix: { term: "Exo-", text: "exo" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "exogen", prefix: { term: "Exo-", text: "exo" }, suffix: { term: "-gen", text: "gen" } },

	// Extra-
	{ ord: "extraordinär", prefix: { term: "Extra-", text: "extra" }, suffix: { term: "-är", text: "är" } },
	{ ord: "extrapolera", prefix: { term: "Extra-", text: "extra" } },
	{ ord: "extravagant", prefix: { term: "Extra-", text: "extra" } },

	// Farmako-
	{ ord: "farmakologi", prefix: { term: "Farmako-", text: "farmako" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "farmakokinetik", prefix: { term: "Farmako-", text: "farmako" }, suffix: { term: "-ik", text: "ik" } },
	{ ord: "farmakoterapi", prefix: { term: "Farmako-", text: "farmako" } },

	// Fil-
	{ ord: "filantropi", prefix: { term: "Fil-", text: "fil" } },
	{ ord: "filharmonisk", prefix: { term: "Fil-", text: "fil" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "filateli", prefix: { term: "Fil-", text: "fil" } },

	// Fono-
	{ ord: "fonologi", prefix: { term: "Fono-", text: "fono" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "fonograf", prefix: { term: "Fono-", text: "fono" }, suffix: { term: "-graf", text: "graf" } },
	{ ord: "fonogram", prefix: { term: "Fono-", text: "fono" }, suffix: { term: "-grafen / -gram", text: "gram" } },

	// Fysio-
	{ ord: "fysiologi", prefix: { term: "Fysio-", text: "fysio" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "fysiokrati", prefix: { term: "Fysio-", text: "fysio" }, suffix: { term: "-krati", text: "krati" } },
	{ ord: "fysioterapi", prefix: { term: "Fysio-", text: "fysio" } },

	// För-
	{ ord: "förstöra", prefix: { term: "För-", text: "för" } },
	{ ord: "förbjuda", prefix: { term: "För-", text: "för" } },
	{ ord: "förändra", prefix: { term: "För-", text: "för" } },

	// Gastro-
	{ ord: "gastronomi", prefix: { term: "Gastro-", text: "gastro" }, suffix: { term: "-nomi", text: "nomi" } },
	{ ord: "gastroenterologi", prefix: { term: "Gastro-", text: "gastro" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "gastroskopi", prefix: { term: "Gastro-", text: "gastro" }, suffix: { term: "-skopi", text: "skopi" } },

	// Gen-
	{ ord: "generera", prefix: { term: "Gen-", text: "gen" } },
	{ ord: "genmodifierad", prefix: { term: "Gen-", text: "gen" } },
	{ ord: "genterapi", prefix: { term: "Gen-", text: "gen" } },

	// Glyko-
	{ ord: "glykos", prefix: { term: "Glyko-", text: "glyko" } },
	{ ord: "glykogen", prefix: { term: "Glyko-", text: "glyko" }, suffix: { term: "-gen", text: "gen" } },
	{ ord: "glykolys", prefix: { term: "Glyko-", text: "glyko" }, suffix: { term: "-lys", text: "lys" } },

	// Hemato- / Hemo-
	{ ord: "hematologi", prefix: { term: "Hemato- / Hemo-", text: "hemato" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "hemoglobin", prefix: { term: "Hemato- / Hemo-", text: "hemo" } },
	{ ord: "hemofili", prefix: { term: "Hemato- / Hemo-", text: "hemo" }, suffix: { term: "-fili", text: "fili" } },

	// Hemi-
	{ ord: "hemisfär", prefix: { term: "Hemi-", text: "hemi" }, suffix: { term: "-sfär", text: "sfär" } },
	{ ord: "hemiplegi", prefix: { term: "Hemi-", text: "hemi" } },
	{ ord: "hemipares", prefix: { term: "Hemi-", text: "hemi" } },

	// Hetero-
	{ ord: "heterosexuell", prefix: { term: "Hetero-", text: "hetero" }, suffix: { term: "-ell", text: "ell" } },
	{ ord: "heterogen", prefix: { term: "Hetero-", text: "hetero" }, suffix: { term: "-gen", text: "gen" } },
	{ ord: "heterodox", prefix: { term: "Hetero-", text: "hetero" }, suffix: { term: "-dox", text: "dox" } },

	// Hydro-
	{ ord: "hydrologi", prefix: { term: "Hydro-", text: "hydro" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "hydrofil", prefix: { term: "Hydro-", text: "hydro" }, suffix: { term: "-fil", text: "fil" } },
	{ ord: "hydrofob", prefix: { term: "Hydro-", text: "hydro" }, suffix: { term: "-fob", text: "fob" } },

	// Anti-
	{ ord: "antipati", prefix: { term: "Anti-", text: "anti" }, suffix: { term: "-pati", text: "pati" } },
	{ ord: "antivirus", prefix: { term: "Anti-", text: "anti" } },
	{ ord: "antiklimax", prefix: { term: "Anti-", text: "anti" } },

	// Auto-
	{ ord: "automat", prefix: { term: "Auto-", text: "auto" } },
	{ ord: "autonom", prefix: { term: "Auto-", text: "auto" } },
	{ ord: "autograf", prefix: { term: "Auto-", text: "auto" }, suffix: { term: "-graf", text: "graf" } },

	// Bio-
	{ ord: "biografi", prefix: { term: "Bio-", text: "bio" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "biosfär", prefix: { term: "Bio-", text: "bio" }, suffix: { term: "-sfär", text: "sfär" } },
	{ ord: "bionisk", prefix: { term: "Bio-", text: "bio" }, suffix: { term: "-isk", text: "isk" } },

	// Cyto-
	{ ord: "cytoplasma", prefix: { term: "Cyto-", text: "cyto" } },
	{ ord: "cytotoxisk", prefix: { term: "Cyto-", text: "cyto" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "cytogenetik", prefix: { term: "Cyto-", text: "cyto" }, suffix: { term: "-ik", text: "ik" } },

	// Demo-
	{ ord: "demokrati", prefix: { term: "Demo-", text: "demo" }, suffix: { term: "-krati", text: "krati" } },
	{ ord: "demografi", prefix: { term: "Demo-", text: "demo" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "demokratisera", prefix: { term: "Demo-", text: "demo" } },

	// Elektro-
	{ ord: "elektrolys", prefix: { term: "Elektro-", text: "elektro" }, suffix: { term: "-lys", text: "lys" } },
	{ ord: "elektromagnetisk", prefix: { term: "Elektro-", text: "elektro" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "elektronik", prefix: { term: "Elektro-", text: "elektro" }, suffix: { term: "-ik", text: "ik" } },

	// Foto-
	{ ord: "fotografi", prefix: { term: "Foto-", text: "foto" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "fotosyntes", prefix: { term: "Foto-", text: "foto" } },
	{ ord: "fotogen", prefix: { term: "Foto-", text: "foto" }, suffix: { term: "-gen", text: "gen" } },

	// Geo-
	{ ord: "geologi", prefix: { term: "Geo-", text: "geo" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "geografi", prefix: { term: "Geo-", text: "geo" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "geometri", prefix: { term: "Geo-", text: "geo" }, suffix: { term: "-metri", text: "metri" } },

	// Kardio-
	{ ord: "kardiologi", prefix: { term: "Kardio-", text: "kardio" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "kardiogram", prefix: { term: "Kardio-", text: "kardio" }, suffix: { term: "-grafen / -gram", text: "gram" } },
	{ ord: "kardiovaskulär", prefix: { term: "Kardio-", text: "kardio" }, suffix: { term: "-är", text: "är" } },

	// Krypto-
	{ ord: "kryptografi", prefix: { term: "Krypto-", text: "krypto" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "kryptovaluta", prefix: { term: "Krypto-", text: "krypto" } },
	{ ord: "kryptogam", prefix: { term: "Krypto-", text: "krypto" } },

	// Mikro-
	{ ord: "mikrofon", prefix: { term: "Mikro-", text: "mikro" }, suffix: { term: "-fon", text: "fon" } },
	{ ord: "mikroorganism", prefix: { term: "Mikro-", text: "mikro" } },
	{ ord: "mikrobiologi", prefix: { term: "Mikro-", text: "mikro" }, suffix: { term: "-logi", text: "logi" } },

	// Neuro-
	{ ord: "neurologi", prefix: { term: "Neuro-", text: "neuro" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "neuron", prefix: { term: "Neuro-", text: "neuro" } },
	{ ord: "neurotisk", prefix: { term: "Neuro-", text: "neuro" }, suffix: { term: "-isk", text: "isk" } },

	// Psyk-
	{ ord: "psykologi", prefix: { term: "Psyk-", text: "psyk" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "psykiatri", prefix: { term: "Psyk-", text: "psyk" }, suffix: { term: "-iatri", text: "iatri" } },
	{ ord: "psykos", prefix: { term: "Psyk-", text: "psyk" }, suffix: { term: "-os", text: "os" } },

	// Socio-
	{ ord: "sociologi", prefix: { term: "Socio-", text: "socio" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "sociopat", prefix: { term: "Socio-", text: "socio" }, suffix: { term: "-pat", text: "pat" } },
	{ ord: "socioekonomisk", prefix: { term: "Socio-", text: "socio" }, suffix: { term: "-isk", text: "isk" } },

	// Xeno-
	{ ord: "xenofobi", prefix: { term: "Xeno-", text: "xeno" }, suffix: { term: "-fobi", text: "fobi" } },
	{ ord: "xenofil", prefix: { term: "Xeno-", text: "xeno" }, suffix: { term: "-fil", text: "fil" } },
	{ ord: "xenolit", prefix: { term: "Xeno-", text: "xeno" }, suffix: { term: "-lit", text: "lit" } },

	// Zoo-
	{ ord: "zoologi", prefix: { term: "Zoo-", text: "zoo" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "zoopark", prefix: { term: "Zoo-", text: "zoo" } },
	{ ord: "zoomorf", prefix: { term: "Zoo-", text: "zoo" } },

	// Allo-
	{ ord: "allotrop", prefix: { term: "Allo-", text: "allo" } },
	{ ord: "allomorf", prefix: { term: "Allo-", text: "allo" } },
	{ ord: "allopati", prefix: { term: "Allo-", text: "allo" }, suffix: { term: "-pati", text: "pati" } },

	// Amfi-
	{ ord: "amfibie", prefix: { term: "Amfi-", text: "amfi" } },
	{ ord: "amfiteater", prefix: { term: "Amfi-", text: "amfi" } },
	{ ord: "amfibisk", prefix: { term: "Amfi-", text: "amfi" }, suffix: { term: "-isk", text: "isk" } },

	// Derm- / Dermato-
	{ ord: "dermatolog", prefix: { term: "Derm- / Dermato-", text: "dermato" }, suffix: { term: "-log", text: "log" } },
	{ ord: "dermatologi", prefix: { term: "Derm- / Dermato-", text: "dermato" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "dermis", prefix: { term: "Derm- / Dermato-", text: "derm" } },

	// Mono-
	{ ord: "monoton", prefix: { term: "Mono-", text: "mono" } },
	{ ord: "monolog", prefix: { term: "Mono-", text: "mono" }, suffix: { term: "-log", text: "log" } },
	{ ord: "monogami", prefix: { term: "Mono-", text: "mono" } },

	// Poly-
	{ ord: "polygon", prefix: { term: "Poly-", text: "poly" }, suffix: { term: "-gon", text: "gon" } },
	{ ord: "polyteism", prefix: { term: "Poly-", text: "poly" }, suffix: { term: "-ism", text: "ism" } },
	{ ord: "polyglott", prefix: { term: "Poly-", text: "poly" } },

	// Ergo-
	{ ord: "ergonomi", prefix: { term: "Ergo-", text: "ergo" }, suffix: { term: "-nomi", text: "nomi" } },
	{ ord: "ergometer", prefix: { term: "Ergo-", text: "ergo" }, suffix: { term: "-meter", text: "meter" } },
	{ ord: "ergograf", prefix: { term: "Ergo-", text: "ergo" }, suffix: { term: "-graf", text: "graf" } },

	// Fyto- / Phyto-
	{ ord: "fytoplankton", prefix: { term: "Fyto- / Phyto-", text: "fyto" } },
	{ ord: "fytokemi", prefix: { term: "Fyto- / Phyto-", text: "fyto" } },
	{ ord: "fytopatologi", prefix: { term: "Fyto- / Phyto-", text: "fyto" }, suffix: { term: "-logi", text: "logi" } },

	// Gyno- / Gynek-
	{ ord: "gynekologi", prefix: { term: "Gyno- / Gynek-", text: "gynek" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "gynekolog", prefix: { term: "Gyno- / Gynek-", text: "gynek" }, suffix: { term: "-log", text: "log" } },
	{ ord: "gynekomasti", prefix: { term: "Gyno- / Gynek-", text: "gynek" } },

	// Van-
	{ ord: "vanart", prefix: { term: "Van-", text: "van" } },
	{ ord: "vanvett", prefix: { term: "Van-", text: "van" } },
	{ ord: "vanvård", prefix: { term: "Van-", text: "van" } },

	// Helio-
	{ ord: "heliocentrisk", prefix: { term: "Helio-", text: "helio" }, suffix: { term: "-centrisk", text: "centrisk" } },
	{ ord: "heliotrop", prefix: { term: "Helio-", text: "helio" } },
	{ ord: "heliograf", prefix: { term: "Helio-", text: "helio" }, suffix: { term: "-graf", text: "graf" } },

	// Hepat- / Hepato-
	{ ord: "hepatit", prefix: { term: "Hepat- / Hepato-", text: "hepat" }, suffix: { term: "-it", text: "it" } },
	{ ord: "hepatolog", prefix: { term: "Hepat- / Hepato-", text: "hepato" }, suffix: { term: "-log", text: "log" } },
	{ ord: "hepatomegali", prefix: { term: "Hepat- / Hepato-", text: "hepato" } },

	// Hepta-
	{ ord: "heptagon", prefix: { term: "Hepta-", text: "hepta" }, suffix: { term: "-gon", text: "gon" } },
	{ ord: "heptaeder", prefix: { term: "Hepta-", text: "hepta" } },
	{ ord: "heptan", prefix: { term: "Hepta-", text: "hepta" } },

	// Hexa-
	{ ord: "hexagon", prefix: { term: "Hexa-", text: "hexa" }, suffix: { term: "-gon", text: "gon" } },
	{ ord: "hexaeder", prefix: { term: "Hexa-", text: "hexa" } },
	{ ord: "hexan", prefix: { term: "Hexa-", text: "hexa" } },

	// Holo-
	{ ord: "holografi", prefix: { term: "Holo-", text: "holo" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "holoenzym", prefix: { term: "Holo-", text: "holo" } },
	{ ord: "holotyp", prefix: { term: "Holo-", text: "holo" }, suffix: { term: "-typ", text: "typ" } },

	// Homo-
	{ ord: "homogen", prefix: { term: "Homo-", text: "homo" }, suffix: { term: "-gen", text: "gen" } },
	{ ord: "homolog", prefix: { term: "Homo-", text: "homo" } },
	{ ord: "homofon", prefix: { term: "Homo-", text: "homo" }, suffix: { term: "-fon", text: "fon" } },

	// Hygro-
	{ ord: "hygrometer", prefix: { term: "Hygro-", text: "hygro" }, suffix: { term: "-meter", text: "meter" } },
	{ ord: "hygroskopisk", prefix: { term: "Hygro-", text: "hygro" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "hygrostat", prefix: { term: "Hygro-", text: "hygro" } },

	// Hyper-
	{ ord: "hyperaktiv", prefix: { term: "Hyper-", text: "hyper" }, suffix: { term: "-iv", text: "iv" } },
	{ ord: "hypertoni", prefix: { term: "Hyper-", text: "hyper" } },
	{ ord: "hyperbol", prefix: { term: "Hyper-", text: "hyper" } },

	// Hypno-
	{ ord: "hypnos", prefix: { term: "Hypno-", text: "hypno" }, suffix: { term: "-os", text: "os" } },
	{ ord: "hypnotisör", prefix: { term: "Hypno-", text: "hypno" }, suffix: { term: "-ör", text: "ör" } },
	{ ord: "hypnoterapi", prefix: { term: "Hypno-", text: "hypno" } },

	// Hypo-
	{ ord: "hypotes", prefix: { term: "Hypo-", text: "hypo" } },
	{ ord: "hypoglykemi", prefix: { term: "Hypo-", text: "hypo" }, suffix: { term: "-emi", text: "emi" } },
	{ ord: "hypotermi", prefix: { term: "Hypo-", text: "hypo" } },

	// Idio-
	{ ord: "idiom", prefix: { term: "Idio-", text: "idio" } },
	{ ord: "idiot", prefix: { term: "Idio-", text: "idio" } },
	{ ord: "idiosynkrasi", prefix: { term: "Idio-", text: "idio" } },

	// Il- / Im- / In- / Ir-
	{ ord: "illegal", prefix: { term: "Il- / Im- / In- / Ir-", text: "il" }, suffix: { term: "-al", text: "al" } },
	{ ord: "immoralisk", prefix: { term: "Il- / Im- / In- / Ir-", text: "im" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "irrationell", prefix: { term: "Il- / Im- / In- / Ir-", text: "ir" }, suffix: { term: "-ell", text: "ell" } },

	// Immuno-
	{ ord: "immunologi", prefix: { term: "Immuno-", text: "immuno" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "immunterapi", prefix: { term: "Immuno-", text: "immun" } },
	{ ord: "immunsystem", prefix: { term: "Immuno-", text: "immun" } },

	// Infra-
	{ ord: "infrastruktur", prefix: { term: "Infra-", text: "infra" } },
	{ ord: "infraröd", prefix: { term: "Infra-", text: "infra" } },
	{ ord: "infraljud", prefix: { term: "Infra-", text: "infra" } },

	// Intra-
	{ ord: "intravenös", prefix: { term: "Intra-", text: "intra" } },
	{ ord: "intramuskulär", prefix: { term: "Intra-", text: "intra" }, suffix: { term: "-är", text: "är" } },
	{ ord: "intranät", prefix: { term: "Intra-", text: "intra" } },

	// Intro-
	{ ord: "introvert", prefix: { term: "Intro-", text: "intro" } },
	{ ord: "introspektion", prefix: { term: "Intro-", text: "intro" }, suffix: { term: "-tion", text: "tion" } },
	{ ord: "introduktion", prefix: { term: "Intro-", text: "intro" }, suffix: { term: "-tion", text: "tion" } },

	// Iso-
	{ ord: "isotop", prefix: { term: "Iso-", text: "iso" } },
	{ ord: "isometrisk", prefix: { term: "Iso-", text: "iso" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "isobar", prefix: { term: "Iso-", text: "iso" } },

	// Kardinal-
	{ ord: "kardinaltal", prefix: { term: "Kardinal-", text: "kardinal" } },
	{ ord: "kardinalfel", prefix: { term: "Kardinal-", text: "kardinal" } },
	{ ord: "kardinaldygd", prefix: { term: "Kardinal-", text: "kardinal" } },

	// Kata-
	{ ord: "katastrof", prefix: { term: "Kata-", text: "kata" } },
	{ ord: "katalog", prefix: { term: "Kata-", text: "kata" } },
	{ ord: "katarakt", prefix: { term: "Kata-", text: "kata" } },

	// Kon- / Koll- / Kom- / Korr-
	{ ord: "kontext", prefix: { term: "Kon- / Koll- / Kom- / Korr-", text: "kon" } },
	{ ord: "kollega", prefix: { term: "Kon- / Koll- / Kom- / Korr-", text: "koll" } },
	{ ord: "kompatibel", prefix: { term: "Kon- / Koll- / Kom- / Korr-", text: "kom" }, suffix: { term: "-ibel", text: "ibel" } },

	// Kromo-
	{ ord: "kromosom", prefix: { term: "Kromo-", text: "kromo" } },
	{ ord: "kromofor", prefix: { term: "Kromo-", text: "kromo" } },
	{ ord: "kromosfär", prefix: { term: "Kromo-", text: "kromo" }, suffix: { term: "-sfär", text: "sfär" } },

	// Kron- / Chrono-
	{ ord: "kronologi", prefix: { term: "Kron- / Chrono-", text: "kron" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "kronisk", prefix: { term: "Kron- / Chrono-", text: "kron" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "kronometer", prefix: { term: "Kron- / Chrono-", text: "kron" }, suffix: { term: "-meter", text: "meter" } },

	// Kvasi-
	{ ord: "kvasivetenskap", prefix: { term: "Kvasi-", text: "kvasi" } },
	{ ord: "kvasiofficiell", prefix: { term: "Kvasi-", text: "kvasi" }, suffix: { term: "-ell", text: "ell" } },
	{ ord: "kvasireligiös", prefix: { term: "Kvasi-", text: "kvasi" } },

	// Logo-
	{ ord: "logotyp", prefix: { term: "Logo-", text: "logo" }, suffix: { term: "-typ", text: "typ" } },
	{ ord: "logopedi", prefix: { term: "Logo-", text: "logo" }, suffix: { term: "-pedi", text: "pedi" } },
	{ ord: "logogram", prefix: { term: "Logo-", text: "logo" }, suffix: { term: "-grafen / -gram", text: "gram" } },

	// Makro-
	{ ord: "makroekonomi", prefix: { term: "Makro-", text: "makro" }, suffix: { term: "-nomi", text: "nomi" } },
	{ ord: "makromolekyl", prefix: { term: "Makro-", text: "makro" } },
	{ ord: "makrofag", prefix: { term: "Makro-", text: "makro" }, suffix: { term: "-fag / -fagi", text: "fag" } },

	// Lit- / Lito- / Lith-
	{ ord: "litografi", prefix: { term: "Lit- / Lito- / Lith-", text: "lito" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "litosfär", prefix: { term: "Lit- / Lito- / Lith-", text: "lito" }, suffix: { term: "-sfär", text: "sfär" } },
	{ ord: "litium", prefix: { term: "Lit- / Lito- / Lith-", text: "lit" }, suffix: { term: "-ium", text: "ium" } },

	// Mal-
	{ ord: "maltraktera", prefix: { term: "Mal-", text: "mal" } },
	{ ord: "malformation", prefix: { term: "Mal-", text: "mal" }, suffix: { term: "-tion", text: "tion" } },
	{ ord: "malnutrition", prefix: { term: "Mal-", text: "mal" }, suffix: { term: "-tion", text: "tion" } },

	// Maxi-
	{ ord: "maximal", prefix: { term: "Maxi-", text: "maxi" }, suffix: { term: "-al", text: "al" } },
	{ ord: "maxikjol", prefix: { term: "Maxi-", text: "maxi" } },
	{ ord: "maximera", prefix: { term: "Maxi-", text: "maxi" } },

	// Mega- / Megalo-
	{ ord: "megafon", prefix: { term: "Mega- / Megalo-", text: "mega" }, suffix: { term: "-fon", text: "fon" } },
	{ ord: "megalit", prefix: { term: "Mega- / Megalo-", text: "mega" }, suffix: { term: "-lit", text: "lit" } },
	{ ord: "megaloman", prefix: { term: "Mega- / Megalo-", text: "megalo" }, suffix: { term: "-man", text: "man" } },

	// Meso-
	{ ord: "mesosfär", prefix: { term: "Meso-", text: "meso" }, suffix: { term: "-sfär", text: "sfär" } },
	{ ord: "mesomorf", prefix: { term: "Meso-", text: "meso" } },
	{ ord: "mesolitikum", prefix: { term: "Meso-", text: "meso" } },

	// Mid-
	{ ord: "midsommar", prefix: { term: "Mid-", text: "mid" } },
	{ ord: "midvinter", prefix: { term: "Mid-", text: "mid" } },
	{ ord: "midgård", prefix: { term: "Mid-", text: "mid" } },

	// Xylo-
	{ ord: "xylofon", prefix: { term: "Xylo-", text: "xylo" }, suffix: { term: "-fon", text: "fon" } },
	{ ord: "xylem", prefix: { term: "Xylo-", text: "xyl" } },
	{ ord: "xylograf", prefix: { term: "Xylo-", text: "xylo" }, suffix: { term: "-graf", text: "graf" } },

	// Mini-
	{ ord: "minimal", prefix: { term: "Mini-", text: "mini" }, suffix: { term: "-al", text: "al" } },
	{ ord: "minigolf", prefix: { term: "Mini-", text: "mini" } },
	{ ord: "miniatyr", prefix: { term: "Mini-", text: "mini" } },

	// Miss- / Mis-
	{ ord: "missförstånd", prefix: { term: "Miss- / Mis-", text: "miss" } },
	{ ord: "misslyckas", prefix: { term: "Miss- / Mis-", text: "miss" } },
	{ ord: "misantropi", prefix: { term: "Miss- / Mis-", text: "mis" } },

	// Morf- / Morfo-
	{ ord: "morfologi", prefix: { term: "Morf- / Morfo-", text: "morfo" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "morfem", prefix: { term: "Morf- / Morfo-", text: "morf" } },
	{ ord: "morfin", prefix: { term: "Morf- / Morfo-", text: "morf" } },

	// Multi-
	{ ord: "multimedia", prefix: { term: "Multi-", text: "multi" } },
	{ ord: "multinationell", prefix: { term: "Multi-", text: "multi" }, suffix: { term: "-ell", text: "ell" } },
	{ ord: "multiplikation", prefix: { term: "Multi-", text: "multi" }, suffix: { term: "-tion", text: "tion" } },

	// Myo-
	{ ord: "myokardit", prefix: { term: "Myo-", text: "myo" }, suffix: { term: "-it", text: "it" } },
	{ ord: "myopati", prefix: { term: "Myo-", text: "myo" }, suffix: { term: "-pati", text: "pati" } },
	{ ord: "myoglobin", prefix: { term: "Myo-", text: "myo" } },

	// Nefro-
	{ ord: "nefrologi", prefix: { term: "Nefro-", text: "nefro" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "nefrit", prefix: { term: "Nefro-", text: "nefr" }, suffix: { term: "-it", text: "it" } },
	{ ord: "nefron", prefix: { term: "Nefro-", text: "nefro" } },

	// Nekro-
	{ ord: "nekrolog", prefix: { term: "Nekro-", text: "nekro" } },
	{ ord: "nekropol", prefix: { term: "Nekro-", text: "nekro" } },
	{ ord: "nekros", prefix: { term: "Nekro-", text: "nekro" }, suffix: { term: "-os", text: "os" } },

	// Neo-
	{ ord: "neonatal", prefix: { term: "Neo-", text: "neo" }, suffix: { term: "-al", text: "al" } },
	{ ord: "neolitikum", prefix: { term: "Neo-", text: "neo" } },
	{ ord: "neologism", prefix: { term: "Neo-", text: "neo" }, suffix: { term: "-ism", text: "ism" } },

	// Xero-
	{ ord: "xerokopia", prefix: { term: "Xero-", text: "xero" } },
	{ ord: "xerografi", prefix: { term: "Xero-", text: "xero" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "xerofil", prefix: { term: "Xero-", text: "xero" }, suffix: { term: "-fil", text: "fil" } },

	// Non-
	{ ord: "nonchalant", prefix: { term: "Non-", text: "non" } },
	{ ord: "nonfiktion", prefix: { term: "Non-", text: "non" }, suffix: { term: "-tion", text: "tion" } },
	{ ord: "nonstop", prefix: { term: "Non-", text: "non" } },

	// O-
	{ ord: "orättvis", prefix: { term: "O-", text: "o" } },
	{ ord: "otur", prefix: { term: "O-", text: "o" } },
	{ ord: "oändlig", prefix: { term: "O-", text: "o" } },

	// Ob- / Op-
	{ ord: "objektiv", prefix: { term: "Ob- / Op-", text: "ob" }, suffix: { term: "-iv", text: "iv" } },
	{ ord: "opposition", prefix: { term: "Ob- / Op-", text: "op" }, suffix: { term: "-tion", text: "tion" } },
	{ ord: "obstruktion", prefix: { term: "Ob- / Op-", text: "ob" }, suffix: { term: "-tion", text: "tion" } },

	// Okto-
	{ ord: "oktogon", prefix: { term: "Okto-", text: "okto" }, suffix: { term: "-gon", text: "gon" } },
	{ ord: "oktett", prefix: { term: "Okto-", text: "okt" } },
	{ ord: "oktopod", prefix: { term: "Okto-", text: "okto" } },

	// Oligo-
	{ ord: "oligarki", prefix: { term: "Oligo-", text: "olig" }, suffix: { term: "-arki", text: "arki" } },
	{ ord: "oligopol", prefix: { term: "Oligo-", text: "oligo" } },
	{ ord: "oligosackarid", prefix: { term: "Oligo-", text: "oligo" }, suffix: { term: "-id", text: "id" } },

	// Omni-
	{ ord: "omnipotent", prefix: { term: "Omni-", text: "omni" } },
	{ ord: "omnipresent", prefix: { term: "Omni-", text: "omni" } },
	{ ord: "omnibus", prefix: { term: "Omni-", text: "omni" } },

	// Onko-
	{ ord: "onkologi", prefix: { term: "Onko-", text: "onko" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "onkolog", prefix: { term: "Onko-", text: "onko" }, suffix: { term: "-log", text: "log" } },
	{ ord: "onkogen", prefix: { term: "Onko-", text: "onko" }, suffix: { term: "-gen", text: "gen" } },

	// Opto-
	{ ord: "optometri", prefix: { term: "Opto-", text: "opto" }, suffix: { term: "-metri", text: "metri" } },
	{ ord: "optokinetisk", prefix: { term: "Opto-", text: "opto" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "optoelektronik", prefix: { term: "Opto-", text: "opto" }, suffix: { term: "-ik", text: "ik" } },

	// Orto-
	{ ord: "ortodox", prefix: { term: "Orto-", text: "orto" }, suffix: { term: "-dox", text: "dox" } },
	{ ord: "ortopedi", prefix: { term: "Orto-", text: "orto" }, suffix: { term: "-pedi", text: "pedi" } },
	{ ord: "ortografi", prefix: { term: "Orto-", text: "orto" }, suffix: { term: "-grafi", text: "grafi" } },

	// Osteo-
	{ ord: "osteoporos", prefix: { term: "Osteo-", text: "osteo" }, suffix: { term: "-os", text: "os" } },
	{ ord: "osteopat", prefix: { term: "Osteo-", text: "osteo" }, suffix: { term: "-pat", text: "pat" } },
	{ ord: "osteologi", prefix: { term: "Osteo-", text: "osteo" }, suffix: { term: "-logi", text: "logi" } },

	// Paleo-
	{ ord: "paleontologi", prefix: { term: "Paleo-", text: "paleo" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "paleolitikum", prefix: { term: "Paleo-", text: "paleo" } },
	{ ord: "paleografi", prefix: { term: "Paleo-", text: "paleo" }, suffix: { term: "-grafi", text: "grafi" } },

	// Pan-
	{ ord: "panorama", prefix: { term: "Pan-", text: "pan" } },
	{ ord: "pandemi", prefix: { term: "Pan-", text: "pan" } },
	{ ord: "panteism", prefix: { term: "Pan-", text: "pan" }, suffix: { term: "-ism", text: "ism" } },

	// Para-
	{ ord: "paranormal", prefix: { term: "Para-", text: "para" }, suffix: { term: "-al", text: "al" } },
	{ ord: "paradox", prefix: { term: "Para-", text: "para" }, suffix: { term: "-dox", text: "dox" } },
	{ ord: "parasit", prefix: { term: "Para-", text: "para" } },

	// Pato-
	{ ord: "patologi", prefix: { term: "Pato-", text: "pato" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "patolog", prefix: { term: "Pato-", text: "pato" }, suffix: { term: "-log", text: "log" } },
	{ ord: "patogen", prefix: { term: "Pato-", text: "pato" }, suffix: { term: "-gen", text: "gen" } },

	// Ped-
	{ ord: "pedagog", prefix: { term: "Ped-", text: "ped" } },
	{ ord: "pediatrik", prefix: { term: "Ped-", text: "ped" }, suffix: { term: "-ik", text: "ik" } },
	{ ord: "pedagogik", prefix: { term: "Ped-", text: "ped" }, suffix: { term: "-ik", text: "ik" } },

	// Penta-
	{ ord: "pentagon", prefix: { term: "Penta-", text: "penta" }, suffix: { term: "-gon", text: "gon" } },
	{ ord: "pentaeder", prefix: { term: "Penta-", text: "penta" } },
	{ ord: "pentagram", prefix: { term: "Penta-", text: "penta" }, suffix: { term: "-grafen / -gram", text: "gram" } },

	// Per-
	{ ord: "perforera", prefix: { term: "Per-", text: "per" } },
	{ ord: "permanent", prefix: { term: "Per-", text: "per" } },
	{ ord: "perception", prefix: { term: "Per-", text: "per" }, suffix: { term: "-tion", text: "tion" } },

	// Peri-
	{ ord: "perimeter", prefix: { term: "Peri-", text: "peri" }, suffix: { term: "-meter", text: "meter" } },
	{ ord: "periskop", prefix: { term: "Peri-", text: "peri" }, suffix: { term: "-skop", text: "skop" } },
	{ ord: "perifer", prefix: { term: "Peri-", text: "peri" } },

	// Pneumo-
	{ ord: "pneumoni", prefix: { term: "Pneumo-", text: "pneumo" } },
	{ ord: "pneumotorax", prefix: { term: "Pneumo-", text: "pneumo" } },
	{ ord: "pneumatisk", prefix: { term: "Pneumo-", text: "pneum" }, suffix: { term: "-isk", text: "isk" } },

	// Polio-
	{ ord: "poliomyelit", prefix: { term: "Polio-", text: "polio" }, suffix: { term: "-it", text: "it" } },
	{ ord: "poliovaccin", prefix: { term: "Polio-", text: "polio" } },
	{ ord: "polioepidemi", prefix: { term: "Polio-", text: "polio" } },

	// Post-
	{ ord: "postmodern", prefix: { term: "Post-", text: "post" } },
	{ ord: "postoperativ", prefix: { term: "Post-", text: "post" }, suffix: { term: "-iv", text: "iv" } },
	{ ord: "posttraumatisk", prefix: { term: "Post-", text: "post" }, suffix: { term: "-isk", text: "isk" } },

	// Pre-
	{ ord: "preliminär", prefix: { term: "Pre-", text: "pre" }, suffix: { term: "-är", text: "är" } },
	{ ord: "premiär", prefix: { term: "Pre-", text: "pre" } },
	{ ord: "prevention", prefix: { term: "Pre-", text: "pre" }, suffix: { term: "-tion", text: "tion" } },

	// Pro-
	{ ord: "proaktiv", prefix: { term: "Pro-", text: "pro" }, suffix: { term: "-iv", text: "iv" } },
	{ ord: "producera", prefix: { term: "Pro-", text: "pro" } },
	{ ord: "prognos", prefix: { term: "Pro-", text: "pro" } },

	// Proto-
	{ ord: "prototyp", prefix: { term: "Proto-", text: "proto" }, suffix: { term: "-typ", text: "typ" } },
	{ ord: "protokoll", prefix: { term: "Proto-", text: "proto" } },
	{ ord: "protozoer", prefix: { term: "Proto-", text: "proto" } },

	// Pseudo-
	{ ord: "pseudonym", prefix: { term: "Pseudo-", text: "pseudo" }, suffix: { term: "-onym", text: "onym" } },
	{ ord: "pseudovetenskap", prefix: { term: "Pseudo-", text: "pseudo" } },
	{ ord: "pseudokod", prefix: { term: "Pseudo-", text: "pseudo" } },

	// Pyro-
	{ ord: "pyroman", prefix: { term: "Pyro-", text: "pyro" }, suffix: { term: "-man", text: "man" } },
	{ ord: "pyroteknik", prefix: { term: "Pyro-", text: "pyro" }, suffix: { term: "-ik", text: "ik" } },
	{ ord: "pyromani", prefix: { term: "Pyro-", text: "pyro" }, suffix: { term: "-mani", text: "mani" } },

	// Radio-
	{ ord: "radioaktiv", prefix: { term: "Radio-", text: "radio" }, suffix: { term: "-iv", text: "iv" } },
	{ ord: "radiologi", prefix: { term: "Radio-", text: "radio" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "radioterapi", prefix: { term: "Radio-", text: "radio" } },

	// Re-
	{ ord: "reagera", prefix: { term: "Re-", text: "re" } },
	{ ord: "rekonstruera", prefix: { term: "Re-", text: "re" } },
	{ ord: "reaktion", prefix: { term: "Re-", text: "re" }, suffix: { term: "-tion", text: "tion" } },

	// Retro-
	{ ord: "retroaktiv", prefix: { term: "Retro-", text: "retro" }, suffix: { term: "-iv", text: "iv" } },
	{ ord: "retrospektiv", prefix: { term: "Retro-", text: "retro" }, suffix: { term: "-iv", text: "iv" } },
	{ ord: "retrovirus", prefix: { term: "Retro-", text: "retro" } },

	// Sam-
	{ ord: "samarbeta", prefix: { term: "Sam-", text: "sam" } },
	{ ord: "samhälle", prefix: { term: "Sam-", text: "sam" } },
	{ ord: "samband", prefix: { term: "Sam-", text: "sam" } },

	// Se-
	{ ord: "separat", prefix: { term: "Se-", text: "se" } },
	{ ord: "sekretess", prefix: { term: "Se-", text: "se" } },
	{ ord: "selektiv", prefix: { term: "Se-", text: "se" }, suffix: { term: "-iv", text: "iv" } },

	// Sem- / Semi-
	{ ord: "semifinal", prefix: { term: "Sem- / Semi-", text: "semi" } },
	{ ord: "semikolon", prefix: { term: "Sem- / Semi-", text: "semi" } },
	{ ord: "semiautomatisk", prefix: { term: "Sem- / Semi-", text: "semi" }, suffix: { term: "-isk", text: "isk" } },

	// Soma- / Somato-
	{ ord: "somatisk", prefix: { term: "Soma- / Somato-", text: "soma" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "somatotyp", prefix: { term: "Soma- / Somato-", text: "somato" }, suffix: { term: "-typ", text: "typ" } },
	{ ord: "somatisera", prefix: { term: "Soma- / Somato-", text: "soma" } },

	// Sub-
	{ ord: "subtropisk", prefix: { term: "Sub-", text: "sub" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "subkultur", prefix: { term: "Sub-", text: "sub" } },
	{ ord: "subjektiv", prefix: { term: "Sub-", text: "sub" }, suffix: { term: "-iv", text: "iv" } },

	// Afro-
	{ ord: "afroamerikan", prefix: { term: "Afro-", text: "afro" } },
	{ ord: "afrofrisyr", prefix: { term: "Afro-", text: "afro" } },
	{ ord: "afropop", prefix: { term: "Afro-", text: "afro" } },

	// Ambi- / Ambo-
	{ ord: "ambivalent", prefix: { term: "Ambi- / Ambo-", text: "ambi" } },
	{ ord: "ambidexter", prefix: { term: "Ambi- / Ambo-", text: "ambi" } },
	{ ord: "ambipolär", prefix: { term: "Ambi- / Ambo-", text: "ambi" }, suffix: { term: "-är", text: "är" } },

	// Aniso-
	{ ord: "anisotrop", prefix: { term: "Aniso-", text: "aniso" } },
	{ ord: "anisometropi", prefix: { term: "Aniso-", text: "aniso" } },
	{ ord: "anisogami", prefix: { term: "Aniso-", text: "aniso" } },

	// Ante-
	{ ord: "antedatera", prefix: { term: "Ante-", text: "ante" } },
	{ ord: "antenatal", prefix: { term: "Ante-", text: "ante" }, suffix: { term: "-al", text: "al" } },
	{ ord: "antecedens", prefix: { term: "Ante-", text: "ante" }, suffix: { term: "-ens", text: "ens" } },

	// Anto-
	{ ord: "antocyan", prefix: { term: "Anto-", text: "anto" } },
	{ ord: "antologi", prefix: { term: "Anto-", text: "anto" } },
	{ ord: "antofyllit", prefix: { term: "Anto-", text: "anto" }, suffix: { term: "-it", text: "it" } },

	// Arke- / Arch-
	{ ord: "arkeologi", prefix: { term: "Arke- / Arch-", text: "arke" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "arketyp", prefix: { term: "Arke- / Arch-", text: "arke" }, suffix: { term: "-typ", text: "typ" } },
	{ ord: "arkeolog", prefix: { term: "Arke- / Arch-", text: "arke" }, suffix: { term: "-log", text: "log" } },

	// Brakio-
	{ ord: "brakialgi", prefix: { term: "Brakio-", text: "braki" }, suffix: { term: "-algi", text: "algi" } },
	{ ord: "brakiopod", prefix: { term: "Brakio-", text: "brakio" } },
	{ ord: "brakialplexus", prefix: { term: "Brakio-", text: "brakial" } },

	// Dif-
	{ ord: "diffus", prefix: { term: "Dif-", text: "dif" } },
	{ ord: "differentiera", prefix: { term: "Dif-", text: "dif" } },
	{ ord: "diffraktion", prefix: { term: "Dif-", text: "dif" }, suffix: { term: "-tion", text: "tion" } },

	// Ekvi-
	{ ord: "ekvivalent", prefix: { term: "Ekvi-", text: "ekvi" } },
	{ ord: "ekvinox", prefix: { term: "Ekvi-", text: "ekvi" } },
	{ ord: "ekvidistant", prefix: { term: "Ekvi-", text: "ekvi" } },

	// Hagio-
	{ ord: "hagiografi", prefix: { term: "Hagio-", text: "hagio" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "hagiolatri", prefix: { term: "Hagio-", text: "hagio" } },
	{ ord: "hagioskop", prefix: { term: "Hagio-", text: "hagio" }, suffix: { term: "-skop", text: "skop" } },

	// Kryo- / Cryo-
	{ ord: "kryoterapi", prefix: { term: "Kryo- / Cryo-", text: "kryo" } },
	{ ord: "kryonik", prefix: { term: "Kryo- / Cryo-", text: "kryo" }, suffix: { term: "-ik", text: "ik" } },
	{ ord: "kryostat", prefix: { term: "Kryo- / Cryo-", text: "kryo" } },

	// Miso-
	{ ord: "misogyni", prefix: { term: "Miso-", text: "miso" } },
	{ ord: "misogyn", prefix: { term: "Miso-", text: "miso" } },
	{ ord: "misoteism", prefix: { term: "Miso-", text: "miso" }, suffix: { term: "-ism", text: "ism" } },

	// Nokt- / Nykt-
	{ ord: "nokturn", prefix: { term: "Nokt- / Nykt-", text: "nokt" } },
	{ ord: "noktambulism", prefix: { term: "Nokt- / Nykt-", text: "nokt" }, suffix: { term: "-ism", text: "ism" } },
	{ ord: "nyktalopi", prefix: { term: "Nokt- / Nykt-", text: "nykt" } },

	// Presby-
	{ ord: "presbyopi", prefix: { term: "Presby-", text: "presby" } },
	{ ord: "presbyter", prefix: { term: "Presby-", text: "presby" } },
	{ ord: "presbyteriansk", prefix: { term: "Presby-", text: "presby" } },

	// Super-
	{ ord: "supermakt", prefix: { term: "Super-", text: "super" } },
	{ ord: "superlativ", prefix: { term: "Super-", text: "super" }, suffix: { term: "-iv", text: "iv" } },
	{ ord: "supersonisk", prefix: { term: "Super-", text: "super" }, suffix: { term: "-isk", text: "isk" } },

	// Sym-
	{ ord: "symbol", prefix: { term: "Sym-", text: "sym" } },
	{ ord: "symfoni", prefix: { term: "Sym-", text: "sym" } },
	{ ord: "symmetri", prefix: { term: "Sym-", text: "sym" }, suffix: { term: "-metri", text: "metri" } },

	// Syn-
	{ ord: "synonym", prefix: { term: "Syn-", text: "syn" }, suffix: { term: "-onym", text: "onym" } },
	{ ord: "syntes", prefix: { term: "Syn-", text: "syn" } },
	{ ord: "synkron", prefix: { term: "Syn-", text: "syn" } },

	// Tauto-
	{ ord: "tautologi", prefix: { term: "Tauto-", text: "tauto" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "tautomer", prefix: { term: "Tauto-", text: "tauto" } },
	{ ord: "tautonym", prefix: { term: "Tauto-", text: "tauto" }, suffix: { term: "-onym", text: "onym" } },

	// Tele-
	{ ord: "telefon", prefix: { term: "Tele-", text: "tele" }, suffix: { term: "-fon", text: "fon" } },
	{ ord: "television", prefix: { term: "Tele-", text: "tele" } },
	{ ord: "telepati", prefix: { term: "Tele-", text: "tele" }, suffix: { term: "-pati", text: "pati" } },

	// Teleo-
	{ ord: "teleologi", prefix: { term: "Teleo-", text: "teleo" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "teleologisk", prefix: { term: "Teleo-", text: "teleo" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "teleonomi", prefix: { term: "Teleo-", text: "teleo" }, suffix: { term: "-nomi", text: "nomi" } },

	// Teo-
	{ ord: "teologi", prefix: { term: "Teo-", text: "teo" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "teokrati", prefix: { term: "Teo-", text: "teo" }, suffix: { term: "-krati", text: "krati" } },
	{ ord: "teofani", prefix: { term: "Teo-", text: "teo" } },

	// Termo-
	{ ord: "termometer", prefix: { term: "Termo-", text: "termo" }, suffix: { term: "-meter", text: "meter" } },
	{ ord: "termodynamik", prefix: { term: "Termo-", text: "termo" }, suffix: { term: "-ik", text: "ik" } },
	{ ord: "termos", prefix: { term: "Termo-", text: "termo" } },

	// Tetra-
	{ ord: "tetraeder", prefix: { term: "Tetra-", text: "tetra" } },
	{ ord: "tetragon", prefix: { term: "Tetra-", text: "tetra" }, suffix: { term: "-gon", text: "gon" } },
	{ ord: "tetraplegi", prefix: { term: "Tetra-", text: "tetra" } },

	// Topo-
	{ ord: "topografi", prefix: { term: "Topo-", text: "topo" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "toponym", prefix: { term: "Topo-", text: "topo" }, suffix: { term: "-onym", text: "onym" } },
	{ ord: "topologi", prefix: { term: "Topo-", text: "topo" }, suffix: { term: "-logi", text: "logi" } },

	// Trans-
	{ ord: "transport", prefix: { term: "Trans-", text: "trans" } },
	{ ord: "transparent", prefix: { term: "Trans-", text: "trans" } },
	{ ord: "transformation", prefix: { term: "Trans-", text: "trans" }, suffix: { term: "-tion", text: "tion" } },

	// Tri-
	{ ord: "triangel", prefix: { term: "Tri-", text: "tri" } },
	{ ord: "trio", prefix: { term: "Tri-", text: "tri" } },
	{ ord: "trilogi", prefix: { term: "Tri-", text: "tri" } },

	// Ultra-
	{ ord: "ultraljud", prefix: { term: "Ultra-", text: "ultra" } },
	{ ord: "ultraviolett", prefix: { term: "Ultra-", text: "ultra" } },
	{ ord: "ultramodern", prefix: { term: "Ultra-", text: "ultra" } },

	// Under-
	{ ord: "underskatta", prefix: { term: "Under-", text: "under" } },
	{ ord: "undernärd", prefix: { term: "Under-", text: "under" } },
	{ ord: "underlägsen", prefix: { term: "Under-", text: "under" } },

	// Uni-
	{ ord: "unik", prefix: { term: "Uni-", text: "uni" } },
	{ ord: "universum", prefix: { term: "Uni-", text: "uni" } },
	{ ord: "uniform", prefix: { term: "Uni-", text: "uni" } },

	// Veder-
	{ ord: "vederlägga", prefix: { term: "Veder-", text: "veder" } },
	{ ord: "vedergällning", prefix: { term: "Veder-", text: "veder" } },
	{ ord: "vederkvicka", prefix: { term: "Veder-", text: "veder" } },

	// Ärke-
	{ ord: "ärkebiskop", prefix: { term: "Ärke-", text: "ärke" } },
	{ ord: "ärkefiende", prefix: { term: "Ärke-", text: "ärke" } },
	{ ord: "ärkeängel", prefix: { term: "Ärke-", text: "ärke" } },

	// Över-
	{ ord: "överdriva", prefix: { term: "Över-", text: "över" } },
	{ ord: "övervikt", prefix: { term: "Över-", text: "över" } },
	{ ord: "överraska", prefix: { term: "Över-", text: "över" } },

	// -abel
	{ ord: "kapabel", suffix: { term: "-abel", text: "abel" } },
	{ ord: "acceptabel", suffix: { term: "-abel", text: "abel" } },
	{ ord: "respektabel", suffix: { term: "-abel", text: "abel" } },

	// -acitet
	{ ord: "kapacitet", suffix: { term: "-acitet", text: "acitet" } },
	{ ord: "tenacitet", suffix: { term: "-acitet", text: "acitet" } },
	{ ord: "sagacitet", suffix: { term: "-acitet", text: "acitet" } },

	// -aktig
	{ ord: "barnaktig", suffix: { term: "-aktig", text: "aktig" } },
	{ ord: "buskaktig", suffix: { term: "-aktig", text: "aktig" } },
	{ ord: "krämaktig", suffix: { term: "-aktig", text: "aktig" } },

	// -ande
	{ ord: "handlande", suffix: { term: "-ande", text: "ande" } },
	{ ord: "tänkande", suffix: { term: "-ande", text: "ande" } },
	{ ord: "levande", suffix: { term: "-ande", text: "ande" } },

	// -ans
	{ ord: "distans", suffix: { term: "-ans", text: "ans" } },
	{ ord: "elegans", suffix: { term: "-ans", text: "ans" } },
	{ ord: "arrogans", suffix: { term: "-ans", text: "ans" } },

	// -ant
	{ ord: "informant", suffix: { term: "-ant", text: "ant" } },
	{ ord: "musikant", suffix: { term: "-ant", text: "ant" } },
	{ ord: "emigrant", suffix: { term: "-ant", text: "ant" } },

	// -are
	{ ord: "lärare", suffix: { term: "-are", text: "are" } },
	{ ord: "målare", suffix: { term: "-are", text: "are" } },
	{ ord: "spelare", suffix: { term: "-are", text: "are" } },

	// -arium
	{ ord: "terrarium", suffix: { term: "-arium", text: "arium" } },
	{ ord: "planetarium", suffix: { term: "-arium", text: "arium" } },
	{ ord: "solarium", suffix: { term: "-arium", text: "arium" } },

	// -artad
	{ ord: "godartad", suffix: { term: "-artad", text: "artad" } },
	{ ord: "elakartad", suffix: { term: "-artad", text: "artad" } },
	{ ord: "krampartad", suffix: { term: "-artad", text: "artad" } },

	// -bar
	{ ord: "hållbar", suffix: { term: "-bar", text: "bar" } },
	{ ord: "läsbar", suffix: { term: "-bar", text: "bar" } },
	{ ord: "ätbar", suffix: { term: "-bar", text: "bar" } },

	// -bios
	{ ord: "symbios", suffix: { term: "-bios", text: "bios" } },
	{ ord: "antibios", suffix: { term: "-bios", text: "bios" } },
	{ ord: "anabios", suffix: { term: "-bios", text: "bios" } },

	// -cefal
	{ ord: "mikrocefal", suffix: { term: "-cefal", text: "cefal" } },
	{ ord: "makrocefal", suffix: { term: "-cefal", text: "cefal" } },
	{ ord: "hydrocefal", suffix: { term: "-cefal", text: "cefal" } },

	// -cid
	{ ord: "pesticid", suffix: { term: "-cid", text: "cid" } },
	{ ord: "insekticid", suffix: { term: "-cid", text: "cid" } },
	{ ord: "herbicid", suffix: { term: "-cid", text: "cid" } },

	// -cyt
	{ ord: "leukocyt", suffix: { term: "-cyt", text: "cyt" } },
	{ ord: "erytrocyt", suffix: { term: "-cyt", text: "cyt" } },
	{ ord: "fagocyt", suffix: { term: "-cyt", text: "cyt" } },

	// -dera
	{ ord: "invadera", suffix: { term: "-dera", text: "dera" } },
	{ ord: "kollidera", suffix: { term: "-dera", text: "dera" } },
	{ ord: "elidera", suffix: { term: "-dera", text: "dera" } },

	// -dom
	{ ord: "sjukdom", suffix: { term: "-dom", text: "dom" } },
	{ ord: "rikedom", suffix: { term: "-dom", text: "dom" } },
	{ ord: "barndom", suffix: { term: "-dom", text: "dom" } },

	// -ende
	{ ord: "seende", suffix: { term: "-ende", text: "ende" } },
	{ ord: "boende", suffix: { term: "-ende", text: "ende" } },
	{ ord: "gående", suffix: { term: "-ende", text: "ende" } },

	// -es
	{ ord: "protes", suffix: { term: "-es", text: "es" } },
	{ ord: "antites", suffix: { term: "-es", text: "es" } },
	{ ord: "diures", suffix: { term: "-es", text: "es" } },

	// -full
	{ ord: "hoppfull", suffix: { term: "-full", text: "full" } },
	{ ord: "smakfull", suffix: { term: "-full", text: "full" } },
	{ ord: "vördnadsfull", suffix: { term: "-full", text: "full" } },

	// -för
	{ ord: "arbetsför", suffix: { term: "-för", text: "för" } },
	{ ord: "stridsför", suffix: { term: "-för", text: "för" } },
	{ ord: "vapenför", suffix: { term: "-för", text: "för" } },

	// -geni
	{ ord: "fylogeni", suffix: { term: "-geni", text: "geni" } },
	{ ord: "ontogeni", suffix: { term: "-geni", text: "geni" } },
	{ ord: "embryogeni", suffix: { term: "-geni", text: "geni" } },

	// -haltig
	{ ord: "järnhaltig", suffix: { term: "-haltig", text: "haltig" } },
	{ ord: "syrehaltig", suffix: { term: "-haltig", text: "haltig" } },
	{ ord: "alkoholhaltig", suffix: { term: "-haltig", text: "haltig" } },

	// -ing
	{ ord: "camping", suffix: { term: "-ing", text: "ing" } },
	{ ord: "jogging", suffix: { term: "-ing", text: "ing" } },
	{ ord: "parkering", suffix: { term: "-ing", text: "ing" } },

	// -isera
	{ ord: "modernisera", suffix: { term: "-isera", text: "isera" } },
	{ ord: "organisera", suffix: { term: "-isera", text: "isera" } },
	{ ord: "civilisera", suffix: { term: "-isera", text: "isera" } },

	// -ivor
	{ ord: "karnivor", suffix: { term: "-ivor", text: "ivor" } },
	{ ord: "herbivor", suffix: { term: "-ivor", text: "ivor" } },
	{ ord: "omnivor", suffix: { term: "-ivor", text: "ivor" } },

	// -ledes
	{ ord: "likaledes", suffix: { term: "-ledes", text: "ledes" } },
	{ ord: "sammaledes", suffix: { term: "-ledes", text: "ledes" } },
	{ ord: "huruledes", suffix: { term: "-ledes", text: "ledes" } },

	// -lig
	{ ord: "vänlig", suffix: { term: "-lig", text: "lig" } },
	{ ord: "farlig", suffix: { term: "-lig", text: "lig" } },
	{ ord: "möjlig", suffix: { term: "-lig", text: "lig" } },

	// -lös
	{ ord: "hjälplös", suffix: { term: "-lös", text: "lös" } },
	{ ord: "meningslös", suffix: { term: "-lös", text: "lös" } },
	{ ord: "arbetslös", suffix: { term: "-lös", text: "lös" } },

	// -ment
	{ ord: "instrument", suffix: { term: "-ment", text: "ment" } },
	{ ord: "moment", suffix: { term: "-ment", text: "ment" } },
	{ ord: "argument", suffix: { term: "-ment", text: "ment" } },

	// -mässig
	{ ord: "yrkesmässig", suffix: { term: "-mässig", text: "mässig" } },
	{ ord: "tidsmässig", suffix: { term: "-mässig", text: "mässig" } },
	{ ord: "kostnadsmässig", suffix: { term: "-mässig", text: "mässig" } },

	// -ning
	{ ord: "utbildning", suffix: { term: "-ning", text: "ning" } },
	{ ord: "betoning", suffix: { term: "-ning", text: "ning" } },
	{ ord: "förening", suffix: { term: "-ning", text: "ning" } },

	// -nom
	{ ord: "astronom", suffix: { term: "-nom", text: "nom" } },
	{ ord: "agronom", suffix: { term: "-nom", text: "nom" } },
	{ ord: "ekonom", suffix: { term: "-nom", text: "nom" } },

	// -om
	{ ord: "karcinom", suffix: { term: "-om", text: "om" } },
	{ ord: "sarkom", suffix: { term: "-om", text: "om" } },
	{ ord: "melanom", suffix: { term: "-om", text: "om" } },

	// -on
	{ ord: "citron", suffix: { term: "-on", text: "on" } },
	{ ord: "elektron", suffix: { term: "-on", text: "on" } },
	{ ord: "hormon", suffix: { term: "-on", text: "on" } },

	// -or
	{ ord: "motor", suffix: { term: "-or", text: "or" } },
	{ ord: "reaktor", suffix: { term: "-or", text: "or" } },
	{ ord: "generator", suffix: { term: "-or", text: "or" } },

	// -plast
	{ ord: "kloroplast", suffix: { term: "-plast", text: "plast" } },
	{ ord: "protoplast", suffix: { term: "-plast", text: "plast" } },
	{ ord: "termoplast", suffix: { term: "-plast", text: "plast" } },

	// -plastik
	{ ord: "rinoplastik", suffix: { term: "-plastik", text: "plastik" } },
	{ ord: "mammoplastik", suffix: { term: "-plastik", text: "plastik" } },
	{ ord: "otoplastik", suffix: { term: "-plastik", text: "plastik" } },

	// -polis
	{ ord: "nekropolis", suffix: { term: "-polis", text: "polis" } },
	{ ord: "akropolis", suffix: { term: "-polis", text: "polis" } },
	{ ord: "metropolis", suffix: { term: "-polis", text: "polis" } },

	// -rik
	{ ord: "vattenrik", suffix: { term: "-rik", text: "rik" } },
	{ ord: "artrik", suffix: { term: "-rik", text: "rik" } },
	{ ord: "kalkrik", suffix: { term: "-rik", text: "rik" } },

	// -sam
	{ ord: "arbetsam", suffix: { term: "-sam", text: "sam" } },
	{ ord: "sparsam", suffix: { term: "-sam", text: "sam" } },
	{ ord: "långsam", suffix: { term: "-sam", text: "sam" } },

	// -skap
	{ ord: "vänskap", suffix: { term: "-skap", text: "skap" } },
	{ ord: "kunskap", suffix: { term: "-skap", text: "skap" } },
	{ ord: "sällskap", suffix: { term: "-skap", text: "skap" } },

	// -sofi
	{ ord: "filosofi", suffix: { term: "-sofi", text: "sofi" } },
	{ ord: "teosofi", suffix: { term: "-sofi", text: "sofi" } },
	{ ord: "antroposofi", suffix: { term: "-sofi", text: "sofi" } },

	// -stomi
	{ ord: "kolostomi", suffix: { term: "-stomi", text: "stomi" } },
	{ ord: "gastrostomi", suffix: { term: "-stomi", text: "stomi" } },
	{ ord: "trakeostomi", suffix: { term: "-stomi", text: "stomi" } },

	// -tiv
	{ ord: "kollektiv", suffix: { term: "-tiv", text: "tiv" } },
	{ ord: "kreativ", suffix: { term: "-tiv", text: "tiv" } },
	{ ord: "administrativ", suffix: { term: "-tiv", text: "tiv" } },

	// -tos
	{ ord: "laktos", suffix: { term: "-tos", text: "tos" } },
	{ ord: "fruktos", suffix: { term: "-tos", text: "tos" } },
	{ ord: "maltos", suffix: { term: "-tos", text: "tos" } },

	// -trofi
	{ ord: "atrofi", suffix: { term: "-trofi", text: "trofi" } },
	{ ord: "hypertrofi", suffix: { term: "-trofi", text: "trofi" } },
	{ ord: "dystrofi", suffix: { term: "-trofi", text: "trofi" } },

	// -tron
	{ ord: "cyklotron", suffix: { term: "-tron", text: "tron" } },
	{ ord: "synkrotron", suffix: { term: "-tron", text: "tron" } },
	{ ord: "magnetron", suffix: { term: "-tron", text: "tron" } },

	// -urgi
	{ ord: "metallurgi", suffix: { term: "-urgi", text: "urgi" } },
	{ ord: "dramaturgi", suffix: { term: "-urgi", text: "urgi" } },
	{ ord: "kirurgi", suffix: { term: "-urgi", text: "urgi" } },

	// -vor
	{ ord: "insektivor", suffix: { term: "-vor", text: "vor" } },
	{ ord: "detritivor", suffix: { term: "-vor", text: "vor" } },
	{ ord: "piscivor", suffix: { term: "-vor", text: "vor" } },

	// -itet (topping up from 1 existing example)
	{ ord: "kvalitet", suffix: { term: "-itet", text: "itet" } },
	{ ord: "identitet", suffix: { term: "-itet", text: "itet" } },

	// -algi (top-up)
	{ ord: "neuralgi", suffix: { term: "-algi", text: "algi" } },
	{ ord: "myalgi", suffix: { term: "-algi", text: "algi" } },

	// -arki (top-up)
	{ ord: "monarki", suffix: { term: "-arki", text: "arki" } },
	{ ord: "anarki", suffix: { term: "-arki", text: "arki" } },

	// -emi (top-up)
	{ ord: "anemi", suffix: { term: "-emi", text: "emi" } },
	{ ord: "leukemi", suffix: { term: "-emi", text: "emi" } },

	// -ens (top-up)
	{ ord: "frekvens", suffix: { term: "-ens", text: "ens" } },

	// -erik (top-up)
	{ ord: "hysterik", suffix: { term: "-erik", text: "erik" } },
	{ ord: "kolerik", suffix: { term: "-erik", text: "erik" } },
	{ ord: "numerik", suffix: { term: "-erik", text: "erik" } },

	// -fag / -fagi (top-up)
	{ ord: "bakteriofag", suffix: { term: "-fag / -fagi", text: "fag" } },
	{ ord: "antropofagi", suffix: { term: "-fag / -fagi", text: "fagi" } },

	// -fili (top-up)
	{ ord: "bibliofili", prefix: { term: "Biblio-", text: "biblio" }, suffix: { term: "-fili", text: "fili" } },
	{ ord: "anglofili", prefix: { term: "Anglo-", text: "anglo" }, suffix: { term: "-fili", text: "fili" } },

	// -fob (top-up)
	{ ord: "xenofob", suffix: { term: "-fob", text: "fob" } },
	{ ord: "homofob", suffix: { term: "-fob", text: "fob" } },

	// -fobi (top-up)
	{ ord: "klaustrofobi", suffix: { term: "-fobi", text: "fobi" } },

	// -het (top-up)
	{ ord: "verklighet", suffix: { term: "-het", text: "het" } },
	{ ord: "möjlighet", suffix: { term: "-het", text: "het" } },

	// -iatri (top-up)
	{ ord: "geriatri", suffix: { term: "-iatri", text: "iatri" } },

	// -iatrik (top-up)
	{ ord: "geriatrik", suffix: { term: "-iatrik", text: "iatrik" } },

	// -ibel (top-up)
	{ ord: "flexibel", suffix: { term: "-ibel", text: "ibel" } },
	{ ord: "sensibel", suffix: { term: "-ibel", text: "ibel" } },

	// -id (top-up)
	{ ord: "klorid", suffix: { term: "-id", text: "id" } },

	// -ifer (top-up)
	{ ord: "konifer", suffix: { term: "-ifer", text: "ifer" } },
	{ ord: "somnifer", suffix: { term: "-ifer", text: "ifer" } },
	{ ord: "pestifer", suffix: { term: "-ifer", text: "ifer" } },

	// -ist (top-up)
	{ ord: "artist", suffix: { term: "-ist", text: "ist" } },
	{ ord: "turist", suffix: { term: "-ist", text: "ist" } },

	// -ium (top-up)
	{ ord: "natrium", suffix: { term: "-ium", text: "ium" } },
	{ ord: "premium", suffix: { term: "-ium", text: "ium" } },

	// -lit (top-up)
	{ ord: "monolit", suffix: { term: "-lit", text: "lit" } },

	// -man (top-up)
	{ ord: "kleptoman", suffix: { term: "-man", text: "man" } },

	// -mani (top-up)
	{ ord: "kleptomani", suffix: { term: "-mani", text: "mani" } },

	// -naut (top-up)
	{ ord: "kosmonaut", suffix: { term: "-naut", text: "naut" } },

	// -oid (top-up)
	{ ord: "humanoid", suffix: { term: "-oid", text: "oid" } },
	{ ord: "asteroid", suffix: { term: "-oid", text: "oid" } },

	// -pat (top-up)
	{ ord: "telepat", suffix: { term: "-pat", text: "pat" } },

	// -ped (top-up)
	{ ord: "ortoped", suffix: { term: "-ped", text: "ped" } },
	{ ord: "logoped", suffix: { term: "-ped", text: "ped" } },

	// -pedi (top-up)
	{ ord: "encyklopedi", suffix: { term: "-pedi", text: "pedi" } },

	// -skop (top-up)
	{ ord: "teleskop", suffix: { term: "-skop", text: "skop" } },

	// -skopi (top-up)
	{ ord: "artroskopi", suffix: { term: "-skopi", text: "skopi" } },

	// -tek (top-up)
	{ ord: "diskotek", suffix: { term: "-tek", text: "tek" } },

	// -tomi (top-up)
	{ ord: "lobotomi", suffix: { term: "-tomi", text: "tomi" } },
	{ ord: "vasektomi", suffix: { term: "-tomi", text: "tomi" } },

	// -ör (top-up)
	{ ord: "chaufför", suffix: { term: "-ör", text: "ör" } },
	{ ord: "regissör", suffix: { term: "-ör", text: "ör" } },

	// -iatri (top-up)
	{ ord: "neuropsykiatri", suffix: { term: "-iatri", text: "iatri" } },

	// -iatrik (top-up)
	{ ord: "psykogeriatrik", suffix: { term: "-iatrik", text: "iatrik" } },

	// -som
	{ ord: "liksom", suffix: { term: "-som", text: "som" } },
	{ ord: "såsom", suffix: { term: "-som", text: "som" } },
	{ ord: "allteftersom", suffix: { term: "-som", text: "som" } },

	// -iker
	{ ord: "diabetiker", suffix: { term: "-iker", text: "iker" } },
	{ ord: "allergiker", suffix: { term: "-iker", text: "iker" } },
	{ ord: "neurotiker", suffix: { term: "-iker", text: "iker" } },

	// Beni-
	{ ord: "benign", prefix: { term: "Beni-", text: "beni" } },
	{ ord: "benignitet", prefix: { term: "Beni-", text: "beni" }, suffix: { term: "-itet", text: "itet" } },

	// Benth- / Bento-
	{ ord: "bentos", prefix: { term: "Benth- / Bento-", text: "bento" } },
	{ ord: "bentisk", prefix: { term: "Benth- / Bento-", text: "bent" } },
	{ ord: "bentopelagisk", prefix: { term: "Benth- / Bento-", text: "bento" }, suffix: { term: "-isk", text: "isk" } },

	// Brady-
	{ ord: "bradykardi", prefix: { term: "Brady-", text: "brady" } },
	{ ord: "bradykinesi", prefix: { term: "Brady-", text: "brady" } },
	{ ord: "bradypné", prefix: { term: "Brady-", text: "brady" } },

	// Cis-
	{ ord: "cisperson", prefix: { term: "Cis-", text: "cis" } },
	{ ord: "cisplatin", prefix: { term: "Cis-", text: "cis" } },
	{ ord: "cisalpin", prefix: { term: "Cis-", text: "cis" } },

	// Ek-
	{ ord: "ektoderm", prefix: { term: "Ek-", text: "ek" } },
	{ ord: "ektopisk", prefix: { term: "Ek-", text: "ek" }, suffix: { term: "-isk", text: "isk" } },
	{ ord: "ektasi", prefix: { term: "Ek-", text: "ek" } },

	// Mikrobio-
	{ ord: "mikrobiom", prefix: { term: "Mikrobio-", text: "mikrobio" } },
	{ ord: "mikrobiota", prefix: { term: "Mikrobio-", text: "mikrobio" } },
	{ ord: "mikrobiologisk", prefix: { term: "Mikrobio-", text: "mikrobio" }, suffix: { term: "-isk", text: "isk" } },

	// Nona-
	{ ord: "nonagon", prefix: { term: "Nona-", text: "nona" }, suffix: { term: "-gon", text: "gon" } },
	{ ord: "nonan", prefix: { term: "Nona-", text: "nona" } },
	{ ord: "nonagenarier", prefix: { term: "Nona-", text: "nona" } },

	// Palin-
	{ ord: "palindrom", prefix: { term: "Palin-", text: "palin" } },
	{ ord: "palingenes", prefix: { term: "Palin-", text: "palin" }, suffix: { term: "-es", text: "es" } },
	{ ord: "palilali", prefix: { term: "Palin-", text: "pali" } },

	// Plio- / Pleio-
	{ ord: "pliocen", prefix: { term: "Plio- / Pleio-", text: "plio" } },
	{ ord: "pleiotropi", prefix: { term: "Plio- / Pleio-", text: "pleio" } },
	{ ord: "pliocenisk", prefix: { term: "Plio- / Pleio-", text: "plio" }, suffix: { term: "-isk", text: "isk" } },

	// Tachy-
	{ ord: "tachykardi", prefix: { term: "Tachy-", text: "tachy" } },
	{ ord: "tachypné", prefix: { term: "Tachy-", text: "tachy" } },
	{ ord: "tachometer", prefix: { term: "Tachy-", text: "tacho" }, suffix: { term: "-meter", text: "meter" } }
];

window.WORD_DATA = WORD_DATA;

