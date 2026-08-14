// A word can carry both a listed prefix and suffix. Each affix record stores
// the exact spelling found at the beginning or end of the word.
const WORD_DATA = [
	{ ord: "antisocial", prefix: { term: "Anti-", text: "anti" }, suffix: { term: "-al", text: "al" } },
	{ ord: "autobiografi", prefix: { term: "Auto-", text: "auto" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "biologi", prefix: { term: "Bio-", text: "bio" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "cytologi", prefix: { term: "Cyto-", text: "cyto" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "demokrati", prefix: { term: "Demo-", text: "demo" }, suffix: { term: "-krati", text: "krati" } },
	{ ord: "elektrolys", prefix: { term: "Elektro-", text: "elektro" }, suffix: { term: "-lys", text: "lys" } },
	{ ord: "fotografi", prefix: { term: "Foto-", text: "foto" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "geologi", prefix: { term: "Geo-", text: "geo" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "kardiologi", prefix: { term: "Kardio-", text: "kardio" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "kryptografi", prefix: { term: "Krypto-", text: "krypto" }, suffix: { term: "-grafi", text: "grafi" } },
	{ ord: "mikroskop", prefix: { term: "Mikro-", text: "mikro" }, suffix: { term: "-skop", text: "skop" } },
	{ ord: "neurologi", prefix: { term: "Neuro-", text: "neuro" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "psykologi", prefix: { term: "Psyk-", text: "psyk" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "sociologi", prefix: { term: "Socio-", text: "socio" }, suffix: { term: "-logi", text: "logi" } },
	{ ord: "xenofobi", prefix: { term: "Xeno-", text: "xeno" }, suffix: { term: "-fobi", text: "fobi" } },
	{ ord: "zoologi", prefix: { term: "Zoo-", text: "zoo" }, suffix: { term: "-logi", text: "logi" } }
];

window.WORD_DATA = WORD_DATA;

