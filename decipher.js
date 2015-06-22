var gate = [
	'abcd ef eab gechd chd bhebi eab jfdb',
	'eab jfdb kcl mb nfohd fh eab pbil wcqqg chd ibqrbng fn eab ibcqk',
	'rh eab ciewfis',
	'rh eab gchdgefhb',
	'rh eab ebktqb',
	'rh eab gomkbiubd nfiufeebh iffk',
	'fhql eab shfwqbdubcmqb fhbg kcl tifjbbd',
	'',
	'nrige rg k  ewf w  3l  4c',
	'kwlc',
	'',
	// eagle
	'qbcih eabri qchuocub wbqq',
	'',
	// top left of eagle
	'eab qfjcerfh fn eab gbjfhd sbl',
	'eab eaibb mqob jrijqbg nqfcerhu fpbi gcnbel qbne nifk c nrbil jacqqbhub',
	'abcd yorjsql iruae tcge eab prgrmqb dffiwcl',
	'gfkberkbg lfo jch zoge tacgb eaifoua eab cri',
	'',
	// near teleporter
	'eab qfjcerfh fn eab earid sbl',
	'c gkcqq trbjb fn aruabi uifohd iruae nifk c qciub mfdl fn wcebi',
	'qbne fn c lbqqfw iorhbd pbierjcq jfiirdfi',
	'wcre fh eft eab aruabi uifohd ef ube eaifoua',
	'',
	// top leftmost
	'eab qfjcerfh fh eab nfoiea sbl',
	'c qfhuv dcis jfiirdfi afogrhu eaibb gal kfhgebig',
	'jqrkm eab gbjfhd qre trqqci',
	'',
	// after the maze
	'acpb lfo bpbi eirbd ef uf otwcidg?',
	'qrsbv cqq eab wcl ot?',
	'fpbi eab gecerfh eabib rg eab uqcgg dfkbv warja tibpbheg fhb nifk ufrhu eioql otx',
	'earhs cmfoe re!',
	'',
	'kwlca',
	'',
	'lfo acpb ecsbh eab nrige gebt',
	'',
	'eab nrige gruh rg ce eab jbhebi fn c gomkbiubd cibhc',// rough map 7:00 first
	'eab gbjfhd gruh gechdg rh nifhe fn c jibceoib qfhu nfiufeebh', //jump booster 6:00 second
	'eab earid gruh rg fh kbecq ce eab nrige gebtg fh eab ifcd fhb jch hbpbijfktqbeb', //hookshot 5:00 third
	'eab nfoiea gruh rg fh c qbdub fpbi wcebi ohdbi c uqcgg dfkb', //propeller upgrade 4:00 fourth
	'eab nrnea gruh rg arddbh cwcl cmfpb c pbierjcq tfwbi',//charge shot 3:00 fifth
	'eab gr,ea gruh rg rh c ncqq fn gchd fh c tqche ohdbi grbub',//dash booster H 2:00 sixth
	'eab gbpbhea gruh rg ce eab mfeefk fn eab wfiqd', //heat resistant 1:00 seventh
	'eab hrhea gruh rg hbciml fh c tfrhebd trqqci hb,e ef cqkfge jbiecrh dbcea', //dash booster V 13:00 ninth
	'eab ebhea gruh rg ce eab jrijoqci wrhdfw ef eab pcgehbgg fn gtcjb', // triple shot 12:00 tenth
	'eab bqbpbhea gruh rg fh eab gtfe fn wace wcg gefqbh', // dash booster X 11:00 eleventh
	'eab ewbqnea rg wabib bcuqbg dcib', //teleport access 10:00 twelfth
	'eab eariebbhea gruh rg fh ch fpbiachu cmfpb ef mb tcerbhe', //supercharge module 9:00 thirteenth
	'eab nrhcq gruh rg ce chjrbhe iorhg jfpbibd ml uqcgg',//keycard 8:00 final
	'', // plasma field 1:(55) maze room
	'fhql eab shfwqbdubcmqb fhbg kcl tifjbbd',
	'abcd ef eab gechd chd bhebi eab jfdb',
	'wireb eab eaibb rhrercqg fn eab hckb ce eab efqd gtfe', // end of maze?
	'',// end of maze
	'eab uafge ibgeg ce eab gkrqrhu ncjb chd ibeoihg abib',
];

var key = {
	' ': ' ',
	'a': 'h',//
	'b': 'e',//
	'c': 'a',//
	'd': 'd',//
	'e': 't',//
	'f': 'o',//
	'g': 's',//
	'h': 'n',//
	'i': 'r',//
	'j': 'c',//
	'k': 'm',//
	'l': 'y',//
	'm': 'b',//
	'n': 'f',//
	'o': 'u',//
	'p': 'v',//
	'q': 'l',//
	'r': 'i',//
	's': 'k',//
	't': 'p',//
	'u': 'g',//
	'v': ',',
	'w': 'w',//
	'x': '.',
	'y': 'q',//
	'z': 'j',//
	',': 'x'
};

var result = gate.map(function(line) {
	return [].map.call(line, function(char) {
		var trans = key[char];
		if(!trans) {
			return char;
		}
		return trans;
	}).join('');
});

result.forEach(function(line) {
	console.log(line);
});