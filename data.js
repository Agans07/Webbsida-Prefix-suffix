// ==========================================
// 1. PREFIX (Förstavelser)
// ==========================================
const PREFIX_DATA = [
  // A
  { term: "A- / An-", betydelse: "icke-, nekande" },
  { term: "Ab- / Abs-", betydelse: "bort, från" },
  { term: "Ad- / Af- / Ak-", betydelse: "till" },
  { term: "Aer- / Aero-", betydelse: "luft-" },
  { term: "Afro-", betydelse: "som avser det afrikanska" },
  { term: "Akro- / Acro-", betydelse: "topp-, spets-, höjd-" },
  { term: "Akva-", betydelse: "vatten" },
  { term: "Allo-", betydelse: "annan" },
  { term: "Ambi- / Ambo-", betydelse: "två-, båda" },
  { term: "Amfi-", betydelse: "omkring, på båda sidor" },
  { term: "Ana-", betydelse: "upp-, åter" },
  { term: "Andro-", betydelse: "man(s)-" },
  { term: "Anglo-", betydelse: "som avser det engelska" },
  { term: "Aniso-", betydelse: "olika, ojämn" },
  { term: "Ante-", betydelse: "före, för-" },
  { term: "Anti-", betydelse: "mot" },
  { term: "Anto-", betydelse: "blomma" },
  { term: "Antropo-", betydelse: "människo-" },
  { term: "Apo-", betydelse: "av-, bort-, från-" },
  { term: "Arke- / Arch-", betydelse: "forn-, gammal-, huvud-, ur-" },
  { term: "Astro-", betydelse: "stjärn-" },
  { term: "Auto-", betydelse: "själv" },
  { term: "Av-", betydelse: "bort, ned, från" },

  // B
  { term: "Baro-", betydelse: "tryck-, tyngd-" },
  { term: "Be-", betydelse: "göra till, förse med" },
  { term: "Beni-", betydelse: "god, välvillig" },
  { term: "Benth- / Bento-", betydelse: "havsbotten" },
  { term: "Bi-", betydelse: "två-, dubbel-; sido-" },
  { term: "Biblio-", betydelse: "bok-" },
  { term: "Bio-", betydelse: "livs-, levande" },
  { term: "Brady-", betydelse: "långsam" },
  { term: "Brakio-", betydelse: "arm-" },

  // C
  { term: "Cis-", betydelse: "på denna sida" },
  { term: "Co- / Ko-", betydelse: "med-, tillsammans" },
  { term: "Cyber-", betydelse: "virtuell" },
  { term: "Cyto-", betydelse: "cell" },

  // D
  { term: "De- / Des-", betydelse: "från-, ned-, ur-, av-" },
  { term: "Deka-", betydelse: "tio" },
  { term: "Demo-", betydelse: "folk" },
  { term: "Derm- / Dermato-", betydelse: "hud-" },
  { term: "Di-", betydelse: "dubbel" },
  { term: "Dia-", betydelse: "genom-, isär-, mellan-" },
  { term: "Dif-", betydelse: "isär-" },
  { term: "Dis-", betydelse: "isär, o-, miss" },
  { term: "Dys-", betydelse: "fel-, illa-" },

  // E
  { term: "Ego-", betydelse: "jag-" },
  { term: "Ek-", betydelse: "ut" },
  { term: "Eko-", betydelse: "ekologisk" },
  { term: "Ekvi-", betydelse: "jämn, lika" },
  { term: "Elektro-", betydelse: "elektrisk" },
  { term: "Em- / En-", betydelse: "in-, sätta i" },
  { term: "Endo-", betydelse: "inre, invärtes" },
  { term: "Epi-", betydelse: "(ovan)på, efter" },
  { term: "Ergo-", betydelse: "arbets-" },
  { term: "Etno-", betydelse: "folk-" },
  { term: "Eu-", betydelse: "god-, skön-" },
  { term: "Ex- / E-", betydelse: "före detta; ut-" },
  { term: "Exo-", betydelse: "utanpå, yttre" },
  { term: "Extra-", betydelse: "utanför" },

  // F
  { term: "Farmako-", betydelse: "läkemedels-" },
  { term: "Fil-", betydelse: "vän av" },
  { term: "Fono-", betydelse: "ljud" },
  { term: "Foto-", betydelse: "ljus" },
  { term: "Fysio-", betydelse: "kropps-" },
  { term: "Fyto- / Phyto-", betydelse: "växt" },
  { term: "För-", betydelse: "bort; skada; framför" },

  // G
  { term: "Gastro-", betydelse: "mage-, tarm-" },
  { term: "Gen-", betydelse: "åter; alstra; mot; genetisk" },
  { term: "Geo-", betydelse: "jord-" },
  { term: "Glyko-", betydelse: "söt-" },
  { term: "Gyno- / Gynek-", betydelse: "kvinna, kvinnlig" },

  // H
  { term: "Hagio-", betydelse: "helighet" },
  { term: "Helio-", betydelse: "sol" },
  { term: "Hemato- / Hemo-", betydelse: "blod" },
  { term: "Hemi-", betydelse: "halv-" },
  { term: "Hepat- / Hepato-", betydelse: "lever-" },
  { term: "Hepta-", betydelse: "sju" },
  { term: "Hetero-", betydelse: "olik" },
  { term: "Hexa-", betydelse: "sex" },
  { term: "Holo-", betydelse: "fullständig" },
  { term: "Homo-", betydelse: "lika" },
  { term: "Hydro-", betydelse: "vatten" },
  { term: "Hygro-", betydelse: "fukt" },
  { term: "Hyper-", betydelse: "över" },
  { term: "Hypno-", betydelse: "sömn-" },
  { term: "Hypo-", betydelse: "under, i underkant" },

  // I
  { term: "Idio-", betydelse: "egen, säregen, själv-" },
  { term: "Il- / Im- / In- / Ir-", betydelse: "inte-; in i" },
  { term: "Immuno-", betydelse: "immun-" },
  { term: "Infra-", betydelse: "nedtill-, under-" },
  { term: "Inter-", betydelse: "mellan" },
  { term: "Intra-", betydelse: "inom, innanför" },
  { term: "Intro-", betydelse: "inåt" },
  { term: "Iso-", betydelse: "lika, samma" },

  // K
  { term: "Kardinal-", betydelse: "huvud-" },
  { term: "Kardio-", betydelse: "hjärt-" },
  { term: "Kata-", betydelse: "ned-" },
  { term: "Kon- / Koll- / Kom- / Korr-", betydelse: "med-, samman-" },
  { term: "Kontra-", betydelse: "mot" },
  { term: "Kromo-", betydelse: "färg" },
  { term: "Kron- / Chrono-", betydelse: "tid" },
  { term: "Kryo- / Cryo-", betydelse: "kyla, is" },
  { term: "Krypto-", betydelse: "dold, hemlig" },
  { term: "Kvasi-", betydelse: "skenbar" },

  // L
  { term: "Lit- / Lito- / Lith-", betydelse: "sten-" },
  { term: "Logo-", betydelse: "ord-" },

  // M
  { term: "Makro-", betydelse: "stor" },
  { term: "Mal-", betydelse: "dålig, ond" },
  { term: "Maxi-", betydelse: "högst, störst" },
  { term: "Mega- / Megalo-", betydelse: "stor, jätte-" },
  { term: "Meso-", betydelse: "mellan-, mitten-" },
  { term: "Meta-", betydelse: "över, högre nivå" },
  { term: "Mid-", betydelse: "mitten" },
  { term: "Mikro-", betydelse: "liten" },
  { term: "Mikrobio-", betydelse: "mikroorganismer" },
  { term: "Mini-", betydelse: "i litet format" },
  { term: "Miso-", betydelse: "fiende" },
  { term: "Miss- / Mis-", betydelse: "med negativ innebörd, fel" },
  { term: "Mono-", betydelse: "en" },
  { term: "Morf- / Morfo-", betydelse: "form, gestalt" },
  { term: "Multi-", betydelse: "mång-" },
  { term: "Myo-", betydelse: "muskel-" },

  // N
  { term: "Nefro-", betydelse: "njur-" },
  { term: "Nekro-", betydelse: "död(s)-" },
  { term: "Neo-", betydelse: "ny-" },
  { term: "Neuro-", betydelse: "nerv-" },
  { term: "Nokt- / Nykt-", betydelse: "natt" },
  { term: "Nona-", betydelse: "nio" },
  { term: "Non-", betydelse: "icke" },

  // O
  { term: "O-", betydelse: "inte, motsats" },
  { term: "Ob- / Op-", betydelse: "mot, i vägen för" },
  { term: "Okto-", betydelse: "åtta" },
  { term: "Oligo-", betydelse: "få" },
  { term: "Omni-", betydelse: "som omfattar alla" },
  { term: "Onko-", betydelse: "svullnad, tumör" },
  { term: "Opto-", betydelse: "syn, ljus" },
  { term: "Orto-", betydelse: "rätt" },
  { term: "Osteo-", betydelse: "ben-, skelett-" },

  // P
  { term: "Paleo-", betydelse: "forn-" },
  { term: "Palin-", betydelse: "på nytt, tillbaka" },
  { term: "Pan-", betydelse: "all-" },
  { term: "Para-", betydelse: "bredvid, bi-, mot-" },
  { term: "Pato-", betydelse: "lidande" },
  { term: "Ped-", betydelse: "barn-" },
  { term: "Penta-", betydelse: "fem" },
  { term: "Per-", betydelse: "genom" },
  { term: "Peri-", betydelse: "omkring" },
  { term: "Plio- / Pleio-", betydelse: "mer, fler" },
  { term: "Pneumo-", betydelse: "lunga, luft" },
  { term: "Polio-", betydelse: "grå-" },
  { term: "Poly-", betydelse: "mång-" },
  { term: "Post-", betydelse: "efter" },
  { term: "Pre-", betydelse: "för-, före-" },
  { term: "Presby-", betydelse: "ålders-" },
  { term: "Pro-", betydelse: "för; i stället för" },
  { term: "Proto-", betydelse: "ur-, första-" },
  { term: "Pseudo-", betydelse: "falskt" },
  { term: "Psyk-", betydelse: "själs-, sinnes-" },
  { term: "Pyro-", betydelse: "eld-" },

  // R
  { term: "Radio-", betydelse: "strålnings-" },
  { term: "Re-", betydelse: "åter, om, tillbaka" },
  { term: "Retro-", betydelse: "bakåt, tillbaka" },

  // S
  { term: "Sam-", betydelse: "tillsammans, gemensam" },
  { term: "Se-", betydelse: "undan" },
  { term: "Sem- / Semi-", betydelse: "halv-" },
  { term: "Socio-", betydelse: "samhälls-" },
  { term: "Soma- / Somato-", betydelse: "kropp" },
  { term: "Sub-", betydelse: "under" },
  { term: "Super-", betydelse: "över, extra" },
  { term: "Sym-", betydelse: "med-, sam-" },
  { term: "Syn-", betydelse: "samman-" },

  // T
  { term: "Tachy-", betydelse: "snabb" },
  { term: "Tauto-", betydelse: "samma" },
  { term: "Tele-", betydelse: "fjärr" },
  { term: "Teleo-", betydelse: "mål, ändamål" },
  { term: "Teo-", betydelse: "guds-" },
  { term: "Termo-", betydelse: "värme" },
  { term: "Tetra-", betydelse: "fyra" },
  { term: "Topo-", betydelse: "plats" },
  { term: "Trans-", betydelse: "över, bortom, genom" },
  { term: "Tri-", betydelse: "tre" },

  // U
  { term: "Ultra-", betydelse: "i högsta grad; på andra sidan" },
  { term: "Under-", betydelse: "nedanför, otillräcklig" },
  { term: "Uni-", betydelse: "en" },

  // V
  { term: "Van-", betydelse: "fel, dålig" },
  { term: "Veder-", betydelse: "mot-, åter-" },

  // X
  { term: "Xeno-", betydelse: "främmande" },
  { term: "Xero-", betydelse: "torr" },
  { term: "Xylo-", betydelse: "trä" },

  // Z
  { term: "Zoo-", betydelse: "djur-" },

  // Ä
  { term: "Ärke-", betydelse: "förste-, över-" },

  // Ö
  { term: "Över-", betydelse: "för mycket, ovanför" }
];

// ==========================================
// 2. SUFFIX (Ändelser)
// ==========================================
const SUFFIX_DATA = [
  // A
  { term: "-abel", betydelse: "möjlig att" },
  { term: "-acitet", betydelse: "förmåga, kapacitet" },
  { term: "-aktig", betydelse: "som liknar" },
  { term: "-al", betydelse: "som rör, tillhörande" },
  { term: "-algi", betydelse: "smärta" },
  { term: "-ande", betydelse: "handling, tillstånd" },
  { term: "-ans", betydelse: "tillstånd, egenskap" },
  { term: "-ant", betydelse: "person eller sak som utför något" },
  { term: "-are", betydelse: "person eller sak som utför handlingen" },
  { term: "-arium", betydelse: "plats, behållare" },
  { term: "-arki", betydelse: "styre" },
  { term: "-artad", betydelse: "som liknar" },

  // B
  { term: "-bar", betydelse: "möjlighet" },
  { term: "-bios", betydelse: "liv" },

  // C
  { term: "-cefal", betydelse: "huvud" },
  { term: "-centrisk", betydelse: "centrerad kring" },
  { term: "-cid", betydelse: "dödande" },
  { term: "-cyt", betydelse: "cell" },

  // D
  { term: "-dera", betydelse: "vardera, var för sig" },
  { term: "-dom", betydelse: "tillstånd, område" },
  { term: "-dox", betydelse: "mening, lära" },

  // E
  { term: "-ell", betydelse: "som rör, har karaktär av" },
  { term: "-emi", betydelse: "blodtillstånd" },
  { term: "-ende", betydelse: "handling, tillstånd" },
  { term: "-ens", betydelse: "tillstånd, egenskap" },
  { term: "-erik", betydelse: "person som lider av ett tillstånd" },
  { term: "-es", betydelse: "process" },

  // F
  { term: "-fag / -fagi", betydelse: "ätande, slukande" },
  { term: "-fil", betydelse: "kärlek, vän av" },
  { term: "-fili", betydelse: "kärlek till, dragning" },
  { term: "-fob", betydelse: "person med rädsla eller avsky" },
  { term: "-fobi", betydelse: "rädsla, avsky" },
  { term: "-fon", betydelse: "ljud" },
  { term: "-full", betydelse: "fylld av, riklig på" },
  { term: "-för", betydelse: "med förmåga till" },

  // G
  { term: "-gen", betydelse: "orsakande" },
  { term: "-geni", betydelse: "uppkomst, utveckling" },
  { term: "-gon", betydelse: "hörn, vinkel (geometri)" },
  { term: "-graf", betydelse: "skriva" },
  { term: "-grafen / -gram", betydelse: "ritning, utskrift, bild" },
  { term: "-grafi", betydelse: "skrift" },

  // H
  { term: "-haltig", betydelse: "som innehåller ämne" },
  { term: "-het", betydelse: "egenskap, tillstånd" },

  // I
  { term: "-iatri", betydelse: "läkekonst" },
  { term: "-iatrik", betydelse: "medicinsk specialitet" },
  { term: "-ibel", betydelse: "som kan, möjlig att" },
  { term: "-id", betydelse: "ämnesnamn; kemiska föreningar" },
  { term: "-ifer", betydelse: "bärande" },
  { term: "-ik", betydelse: "vetenskap, lära, konst" },
  { term: "-iker", betydelse: "person som lider av ett tillstånd" },
  { term: "-ing", betydelse: "handling, tillstånd" },
  { term: "-isera", betydelse: "göra till, omvandla" },
  { term: "-isk", betydelse: "tillhörande" },
  { term: "-ism", betydelse: "riktning, egenskap, lära" },
  { term: "-ist", betydelse: "person som utövar eller anhängare av" },
  { term: "-it", betydelse: "inflammation; mineral" },
  { term: "-itet", betydelse: "egenskap, tillstånd" },
  { term: "-ium", betydelse: "betecknar grundämne" },
  { term: "-iv", betydelse: "som har benägenhet att" },
  { term: "-ivor", betydelse: "ätare" },

  // K
  { term: "-krati", betydelse: "välde" },

  // L
  { term: "-ledes", betydelse: "på angivet sätt" },
  { term: "-lig", betydelse: "tillhörande, med egenskap av" },
  { term: "-lit", betydelse: "sten" },
  { term: "-log", betydelse: "person kunnig i ett ämne" },
  { term: "-logi", betydelse: "lära, vetenskap" },
  { term: "-lys", betydelse: "upplösning" },
  { term: "-lös", betydelse: "utan, saknar" },

  // M
  { term: "-man", betydelse: "person som" },
  { term: "-mani", betydelse: "sjukligt beteende" },
  { term: "-ment", betydelse: "resultat, medel" },
  { term: "-meter", betydelse: "mätinstrument" },
  { term: "-metri", betydelse: "mätning" },
  { term: "-mässig", betydelse: "uppfyllande krav" },

  // N
  { term: "-naut", betydelse: "farare, resenär" },
  { term: "-ning", betydelse: "handling, tillstånd" },
  { term: "-nom", betydelse: "person kunnig i ett ämne" },
  { term: "-nomi", betydelse: "kunskapsområde, lag, ordning" },

  // O
  { term: "-oid", betydelse: "som liknar" },
  { term: "-om", betydelse: "tumör, svullnad" },
  { term: "-on", betydelse: "bär; kemisk sammansättning" },
  { term: "-onym", betydelse: "namn, ord" },
  { term: "-or", betydelse: "person eller sak som utför handlingen" },
  { term: "-os", betydelse: "sjukdomstillstånd, tillstånd" },

  // P
  { term: "-pat", betydelse: "person med sjukdom eller egenskap" },
  { term: "-pati", betydelse: "sjukdom, lidande, känsla" },
  { term: "-ped", betydelse: "vård, behandling" },
  { term: "-pedi", betydelse: "behandling" },
  { term: "-plast", betydelse: "formbar" },
  { term: "-plastik", betydelse: "kirurgisk omformning" },
  { term: "-polis", betydelse: "stad" },

  // R
  { term: "-rik", betydelse: "fylld av" },

  // S
  { term: "-sam", betydelse: "tillstånd" },
  { term: "-sfär", betydelse: "område, klot" },
  { term: "-skap", betydelse: "tillstånd" },
  { term: "-skop", betydelse: "synliggörande instrument" },
  { term: "-skopi", betydelse: "undersökning med instrument" },
  { term: "-sofi", betydelse: "visdom, lärdom" },
  { term: "-som", betydelse: "på det sätt" },
  { term: "-stomi", betydelse: "kirurgisk öppning" },

  // T
  { term: "-tek", betydelse: "samling" },
  { term: "-tion", betydelse: "handling, tillstånd, resultat" },
  { term: "-tiv", betydelse: "egenskap att utföra" },
  { term: "-tomi", betydelse: "snitt" },
  { term: "-tron", betydelse: "redskap, verktyg" },
  { term: "-tos", betydelse: "sockerart" },
  { term: "-trofi", betydelse: "näring, tillväxt" },
  { term: "-typ", betydelse: "form, mönster" },

  // U
  { term: "-urgi", betydelse: "arbete, kirurgi" },

  // V
  { term: "-vor", betydelse: "ätande" },

  // Ä
  { term: "-är", betydelse: "som rör, tillhörande" },

  // Ö
  { term: "-ör", betydelse: "person som utför" }
];

// Slå ihop alla poster i en och samma matris:
const PREFIX_SUFFIX_DATA = [...PREFIX_DATA, ...SUFFIX_DATA];
// Exponera datan globalt (ingen modul-bundling behövs)
window.PREFIX_DATA = PREFIX_DATA;
window.SUFFIX_DATA = SUFFIX_DATA;
window.PREFIX_SUFFIX_DATA = PREFIX_SUFFIX_DATA;

