// Generated from LogiX.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LogiXListener from './LogiXListener.js';
import LogiXVisitor from './LogiXVisitor.js';

const serializedATN = [4,1,48,291,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,1,0,3,0,78,8,0,1,0,4,0,81,8,0,11,0,12,0,
82,1,0,3,0,86,8,0,1,0,1,0,1,1,4,1,91,8,1,11,1,12,1,92,1,1,3,1,96,8,1,1,1,
1,1,1,1,3,1,101,8,1,1,1,3,1,104,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,124,8,2,1,3,1,3,5,3,128,8,3,10,3,
12,3,131,9,3,1,4,1,4,1,4,5,4,136,8,4,10,4,12,4,139,9,4,1,4,3,4,142,8,4,1,
4,3,4,145,8,4,1,4,4,4,148,8,4,11,4,12,4,149,1,4,1,4,1,5,1,5,1,5,1,5,5,5,
158,8,5,10,5,12,5,161,9,5,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,4,8,171,8,8,11,
8,12,8,172,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,12,1,
12,1,12,1,12,1,13,1,13,1,13,3,13,194,8,13,1,14,1,14,1,14,5,14,199,8,14,10,
14,12,14,202,9,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,3,16,211,8,16,1,17,
5,17,214,8,17,10,17,12,17,217,9,17,1,17,1,17,1,17,3,17,222,8,17,1,18,1,18,
1,18,5,18,227,8,18,10,18,12,18,230,9,18,1,19,1,19,1,19,5,19,235,8,19,10,
19,12,19,238,9,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,
1,23,1,24,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,
30,1,30,1,31,1,31,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,35,
1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,37,1,37,1,37,0,0,38,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,68,70,72,74,0,13,1,0,10,12,1,0,8,8,1,0,15,16,1,0,17,18,
1,0,19,20,1,0,21,22,1,0,23,24,1,0,25,26,1,0,27,29,1,0,30,31,1,0,32,33,1,
0,34,35,1,0,36,37,295,0,80,1,0,0,0,2,103,1,0,0,0,4,123,1,0,0,0,6,125,1,0,
0,0,8,132,1,0,0,0,10,153,1,0,0,0,12,162,1,0,0,0,14,164,1,0,0,0,16,168,1,
0,0,0,18,176,1,0,0,0,20,180,1,0,0,0,22,184,1,0,0,0,24,186,1,0,0,0,26,190,
1,0,0,0,28,195,1,0,0,0,30,205,1,0,0,0,32,210,1,0,0,0,34,215,1,0,0,0,36,223,
1,0,0,0,38,231,1,0,0,0,40,239,1,0,0,0,42,242,1,0,0,0,44,245,1,0,0,0,46,248,
1,0,0,0,48,251,1,0,0,0,50,254,1,0,0,0,52,256,1,0,0,0,54,258,1,0,0,0,56,260,
1,0,0,0,58,262,1,0,0,0,60,264,1,0,0,0,62,266,1,0,0,0,64,268,1,0,0,0,66,270,
1,0,0,0,68,274,1,0,0,0,70,277,1,0,0,0,72,286,1,0,0,0,74,288,1,0,0,0,76,78,
3,2,1,0,77,76,1,0,0,0,77,78,1,0,0,0,78,79,1,0,0,0,79,81,5,47,0,0,80,77,1,
0,0,0,81,82,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,85,1,0,0,0,84,86,3,2,
1,0,85,84,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,0,87,88,5,0,0,1,88,1,1,0,0,0,
89,91,3,4,2,0,90,89,1,0,0,0,91,92,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,
95,1,0,0,0,94,96,3,74,37,0,95,94,1,0,0,0,95,96,1,0,0,0,96,104,1,0,0,0,97,
104,3,74,37,0,98,100,3,26,13,0,99,101,3,74,37,0,100,99,1,0,0,0,100,101,1,
0,0,0,101,104,1,0,0,0,102,104,3,8,4,0,103,90,1,0,0,0,103,97,1,0,0,0,103,
98,1,0,0,0,103,102,1,0,0,0,104,3,1,0,0,0,105,124,3,14,7,0,106,124,3,42,21,
0,107,124,3,44,22,0,108,124,3,46,23,0,109,124,3,48,24,0,110,124,3,50,25,
0,111,124,3,52,26,0,112,124,3,54,27,0,113,124,3,56,28,0,114,124,3,58,29,
0,115,124,3,60,30,0,116,124,3,64,32,0,117,124,3,66,33,0,118,124,3,24,12,
0,119,124,3,6,3,0,120,124,3,18,9,0,121,124,3,62,31,0,122,124,3,70,35,0,123,
105,1,0,0,0,123,106,1,0,0,0,123,107,1,0,0,0,123,108,1,0,0,0,123,109,1,0,
0,0,123,110,1,0,0,0,123,111,1,0,0,0,123,112,1,0,0,0,123,113,1,0,0,0,123,
114,1,0,0,0,123,115,1,0,0,0,123,116,1,0,0,0,123,117,1,0,0,0,123,118,1,0,
0,0,123,119,1,0,0,0,123,120,1,0,0,0,123,121,1,0,0,0,123,122,1,0,0,0,124,
5,1,0,0,0,125,129,3,30,15,0,126,128,3,38,19,0,127,126,1,0,0,0,128,131,1,
0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,7,1,0,0,0,131,129,1,0,0,0,132,
133,5,1,0,0,133,137,3,30,15,0,134,136,3,10,5,0,135,134,1,0,0,0,136,139,1,
0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,140,
142,5,47,0,0,141,140,1,0,0,0,141,142,1,0,0,0,142,147,1,0,0,0,143,145,3,2,
1,0,144,143,1,0,0,0,144,145,1,0,0,0,145,146,1,0,0,0,146,148,5,47,0,0,147,
144,1,0,0,0,148,149,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,151,1,0,
0,0,151,152,5,2,0,0,152,9,1,0,0,0,153,154,5,3,0,0,154,159,3,30,15,0,155,
156,5,4,0,0,156,158,3,10,5,0,157,155,1,0,0,0,158,161,1,0,0,0,159,157,1,0,
0,0,159,160,1,0,0,0,160,11,1,0,0,0,161,159,1,0,0,0,162,163,5,5,0,0,163,13,
1,0,0,0,164,165,5,6,0,0,165,166,3,72,36,0,166,167,3,16,8,0,167,15,1,0,0,
0,168,170,5,7,0,0,169,171,3,4,2,0,170,169,1,0,0,0,171,172,1,0,0,0,172,170,
1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,175,5,8,0,0,175,17,1,0,0,0,176,
177,5,9,0,0,177,178,3,20,10,0,178,179,3,16,8,0,179,19,1,0,0,0,180,181,3,
38,19,0,181,182,3,22,11,0,182,183,3,38,19,0,183,21,1,0,0,0,184,185,7,0,0,
0,185,23,1,0,0,0,186,187,5,13,0,0,187,188,5,43,0,0,188,189,3,32,16,0,189,
25,1,0,0,0,190,193,5,14,0,0,191,194,3,32,16,0,192,194,3,28,14,0,193,191,
1,0,0,0,193,192,1,0,0,0,194,27,1,0,0,0,195,200,5,7,0,0,196,199,3,28,14,0,
197,199,8,1,0,0,198,196,1,0,0,0,198,197,1,0,0,0,199,202,1,0,0,0,200,198,
1,0,0,0,200,201,1,0,0,0,201,203,1,0,0,0,202,200,1,0,0,0,203,204,5,8,0,0,
204,29,1,0,0,0,205,206,5,44,0,0,206,31,1,0,0,0,207,211,5,43,0,0,208,211,
3,38,19,0,209,211,3,40,20,0,210,207,1,0,0,0,210,208,1,0,0,0,210,209,1,0,
0,0,211,33,1,0,0,0,212,214,7,2,0,0,213,212,1,0,0,0,214,217,1,0,0,0,215,213,
1,0,0,0,215,216,1,0,0,0,216,221,1,0,0,0,217,215,1,0,0,0,218,222,3,72,36,
0,219,222,3,40,20,0,220,222,3,12,6,0,221,218,1,0,0,0,221,219,1,0,0,0,221,
220,1,0,0,0,222,35,1,0,0,0,223,228,3,34,17,0,224,225,7,3,0,0,225,227,3,34,
17,0,226,224,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,0,228,229,1,0,0,0,229,
37,1,0,0,0,230,228,1,0,0,0,231,236,3,36,18,0,232,233,7,2,0,0,233,235,3,36,
18,0,234,232,1,0,0,0,235,238,1,0,0,0,236,234,1,0,0,0,236,237,1,0,0,0,237,
39,1,0,0,0,238,236,1,0,0,0,239,240,5,3,0,0,240,241,3,30,15,0,241,41,1,0,
0,0,242,243,7,4,0,0,243,244,3,38,19,0,244,43,1,0,0,0,245,246,7,5,0,0,246,
247,3,38,19,0,247,45,1,0,0,0,248,249,7,6,0,0,249,250,3,38,19,0,250,47,1,
0,0,0,251,252,7,7,0,0,252,253,3,38,19,0,253,49,1,0,0,0,254,255,7,8,0,0,255,
51,1,0,0,0,256,257,7,9,0,0,257,53,1,0,0,0,258,259,7,10,0,0,259,55,1,0,0,
0,260,261,7,11,0,0,261,57,1,0,0,0,262,263,7,12,0,0,263,59,1,0,0,0,264,265,
5,38,0,0,265,61,1,0,0,0,266,267,5,39,0,0,267,63,1,0,0,0,268,269,5,40,0,0,
269,65,1,0,0,0,270,271,5,41,0,0,271,272,3,38,19,0,272,273,3,38,19,0,273,
67,1,0,0,0,274,275,5,5,0,0,275,276,3,38,19,0,276,69,1,0,0,0,277,278,5,42,
0,0,278,279,5,7,0,0,279,280,3,30,15,0,280,281,3,38,19,0,281,282,3,38,19,
0,282,283,3,38,19,0,283,284,5,8,0,0,284,285,3,16,8,0,285,71,1,0,0,0,286,
287,5,45,0,0,287,73,1,0,0,0,288,289,5,46,0,0,289,75,1,0,0,0,23,77,82,85,
92,95,100,103,123,129,137,141,144,149,159,172,193,198,200,210,215,221,228,
236];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogiXParser extends antlr4.Parser {

    static grammarFileName = "LogiX.g4";
    static literalNames = [ null, "'to'", "'end'", "':'", "','", "'losowo'", 
                            "'powtorz'", "'['", "']'", "'jesli'", "'<'", 
                            "'>'", "'='", "'zrob'", "'wypisz'", "'+'", "'-'", 
                            "'*'", "'/'", "'np'", "'naprzod'", "'ws'", "'wstecz'", 
                            "'pw'", "'prawo'", "'lw'", "'lewo'", "'wy'", 
                            "'wyczysc'", "'wyczyscekran'", "'pb'", "'podniesbobra'", 
                            "'ob'", "'opuscbobra'", "'sb'", "'schowajbobra'", 
                            "'ub'", "'ukazbobra'", "'dom'", "'ubop'", "'napis'", 
                            "'ustaw'", "'for'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "LITERAL_WYRAZU", "LANCUCH", 
                             "CYFRA", "KOMENTARZ", "EOL", "BIALY_ZNAK" ];
    static ruleNames = [ "prog", "linia", "polecenia", "wywolanieProcedury", 
                         "deklaracjaProcedury", "deklaracjeParametrow", 
                         "func_", "powtorz", "blok", "jesli", "porownanie", 
                         "operatorPorownania", "zrob", "wypisz_", "lancuchZnakowy", 
                         "nazwa", "wartosc", "wyrazenieZnaku", "wielokrotneWyrazenie", 
                         "wyrazenie", "odwolanie", "np", "ws", "pw", "lw", 
                         "wy", "pb", "ob", "sb", "ub", "dom", "ubop", "napis", 
                         "ustaw", "losowo", "dla", "liczba", "komentarz" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LogiXParser.ruleNames;
        this.literalNames = LogiXParser.literalNames;
        this.symbolicNames = LogiXParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LogiXParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 77;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294468162) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 22527) !== 0)) {
	        		    this.state = 76;
	        		    this.linia();
	        		}

	        		this.state = 79;
	        		this.match(LogiXParser.EOL);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 82; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294468162) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 22527) !== 0)) {
	            this.state = 84;
	            this.linia();
	        }

	        this.state = 87;
	        this.match(LogiXParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	linia() {
	    let localctx = new LiniaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LogiXParser.RULE_linia);
	    var _la = 0;
	    try {
	        this.state = 103;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 9:
	        case 13:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 89;
	                this.polecenia();
	                this.state = 92; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294451776) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 6143) !== 0));
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===46) {
	                this.state = 94;
	                this.komentarz();
	            }

	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.komentarz();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.wypisz_();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===46) {
	                this.state = 99;
	                this.komentarz();
	            }

	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 102;
	            this.deklaracjaProcedury();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	polecenia() {
	    let localctx = new PoleceniaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LogiXParser.RULE_polecenia);
	    try {
	        this.state = 123;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.powtorz();
	            break;
	        case 19:
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.np();
	            break;
	        case 21:
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 107;
	            this.ws();
	            break;
	        case 23:
	        case 24:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 108;
	            this.pw();
	            break;
	        case 25:
	        case 26:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 109;
	            this.lw();
	            break;
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 110;
	            this.wy();
	            break;
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 111;
	            this.pb();
	            break;
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 112;
	            this.ob();
	            break;
	        case 34:
	        case 35:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 113;
	            this.sb();
	            break;
	        case 36:
	        case 37:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 114;
	            this.ub();
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 115;
	            this.dom();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 116;
	            this.napis();
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 117;
	            this.ustaw();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 118;
	            this.zrob();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 119;
	            this.wywolanieProcedury();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 120;
	            this.jesli();
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 121;
	            this.ubop();
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 122;
	            this.dla();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wywolanieProcedury() {
	    let localctx = new WywolanieProceduryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LogiXParser.RULE_wywolanieProcedury);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.nazwa();
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 98344) !== 0) || _la===45) {
	            this.state = 126;
	            this.wyrazenie();
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deklaracjaProcedury() {
	    let localctx = new DeklaracjaProceduryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LogiXParser.RULE_deklaracjaProcedury);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(LogiXParser.T__0);
	        this.state = 133;
	        this.nazwa();
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 134;
	            this.deklaracjeParametrow();
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 141;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 140;
	            this.match(LogiXParser.EOL);

	        }
	        this.state = 147; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294468162) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 22527) !== 0)) {
	                this.state = 143;
	                this.linia();
	            }

	            this.state = 146;
	            this.match(LogiXParser.EOL);
	            this.state = 149; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294468162) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 55295) !== 0));
	        this.state = 151;
	        this.match(LogiXParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deklaracjeParametrow() {
	    let localctx = new DeklaracjeParametrowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LogiXParser.RULE_deklaracjeParametrow);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(LogiXParser.T__2);
	        this.state = 154;
	        this.nazwa();
	        this.state = 159;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 155;
	                this.match(LogiXParser.T__3);
	                this.state = 156;
	                this.deklaracjeParametrow(); 
	            }
	            this.state = 161;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func_() {
	    let localctx = new Func_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LogiXParser.RULE_func_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(LogiXParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	powtorz() {
	    let localctx = new PowtorzContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LogiXParser.RULE_powtorz);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(LogiXParser.T__5);
	        this.state = 165;
	        this.liczba();
	        this.state = 166;
	        this.blok();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blok() {
	    let localctx = new BlokContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LogiXParser.RULE_blok);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(LogiXParser.T__6);
	        this.state = 170; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 169;
	            this.polecenia();
	            this.state = 172; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294451776) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 6143) !== 0));
	        this.state = 174;
	        this.match(LogiXParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	jesli() {
	    let localctx = new JesliContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LogiXParser.RULE_jesli);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(LogiXParser.T__8);
	        this.state = 177;
	        this.porownanie();
	        this.state = 178;
	        this.blok();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	porownanie() {
	    let localctx = new PorownanieContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LogiXParser.RULE_porownanie);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.wyrazenie();
	        this.state = 181;
	        this.operatorPorownania();
	        this.state = 182;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorPorownania() {
	    let localctx = new OperatorPorownaniaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LogiXParser.RULE_operatorPorownania);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	zrob() {
	    let localctx = new ZrobContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LogiXParser.RULE_zrob);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(LogiXParser.T__12);
	        this.state = 187;
	        this.match(LogiXParser.LITERAL_WYRAZU);
	        this.state = 188;
	        this.wartosc();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wypisz_() {
	    let localctx = new Wypisz_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LogiXParser.RULE_wypisz_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(LogiXParser.T__13);
	        this.state = 193;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 5:
	        case 15:
	        case 16:
	        case 43:
	        case 45:
	            this.state = 191;
	            this.wartosc();
	            break;
	        case 7:
	            this.state = 192;
	            this.lancuchZnakowy();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lancuchZnakowy() {
	    let localctx = new LancuchZnakowyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LogiXParser.RULE_lancuchZnakowy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(LogiXParser.T__6);
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967038) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 131071) !== 0)) {
	            this.state = 198;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 196;
	                this.lancuchZnakowy();
	                break;

	            case 2:
	                this.state = 197;
	                _la = this._input.LA(1);
	                if(_la<=0 || _la===8) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                break;

	            }
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 203;
	        this.match(LogiXParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nazwa() {
	    let localctx = new NazwaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LogiXParser.RULE_nazwa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(LogiXParser.LANCUCH);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wartosc() {
	    let localctx = new WartoscContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LogiXParser.RULE_wartosc);
	    try {
	        this.state = 210;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 207;
	            this.match(LogiXParser.LITERAL_WYRAZU);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 208;
	            this.wyrazenie();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 209;
	            this.odwolanie();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wyrazenieZnaku() {
	    let localctx = new WyrazenieZnakuContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LogiXParser.RULE_wyrazenieZnaku);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15 || _la===16) {
	            this.state = 212;
	            _la = this._input.LA(1);
	            if(!(_la===15 || _la===16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 221;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 45:
	            this.state = 218;
	            this.liczba();
	            break;
	        case 3:
	            this.state = 219;
	            this.odwolanie();
	            break;
	        case 5:
	            this.state = 220;
	            this.func_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wielokrotneWyrazenie() {
	    let localctx = new WielokrotneWyrazenieContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LogiXParser.RULE_wielokrotneWyrazenie);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.wyrazenieZnaku();
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17 || _la===18) {
	            this.state = 224;
	            _la = this._input.LA(1);
	            if(!(_la===17 || _la===18)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 225;
	            this.wyrazenieZnaku();
	            this.state = 230;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wyrazenie() {
	    let localctx = new WyrazenieContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, LogiXParser.RULE_wyrazenie);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.wielokrotneWyrazenie();
	        this.state = 236;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 232;
	                _la = this._input.LA(1);
	                if(!(_la===15 || _la===16)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 233;
	                this.wielokrotneWyrazenie(); 
	            }
	            this.state = 238;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	odwolanie() {
	    let localctx = new OdwolanieContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, LogiXParser.RULE_odwolanie);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(LogiXParser.T__2);
	        this.state = 240;
	        this.nazwa();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	np() {
	    let localctx = new NpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, LogiXParser.RULE_np);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 243;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ws() {
	    let localctx = new WsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, LogiXParser.RULE_ws);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        _la = this._input.LA(1);
	        if(!(_la===21 || _la===22)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 246;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pw() {
	    let localctx = new PwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, LogiXParser.RULE_pw);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 249;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lw() {
	    let localctx = new LwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, LogiXParser.RULE_lw);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        _la = this._input.LA(1);
	        if(!(_la===25 || _la===26)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 252;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wy() {
	    let localctx = new WyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, LogiXParser.RULE_wy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 939524096) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pb() {
	    let localctx = new PbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, LogiXParser.RULE_pb);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        _la = this._input.LA(1);
	        if(!(_la===30 || _la===31)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ob() {
	    let localctx = new ObContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, LogiXParser.RULE_ob);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===33)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sb() {
	    let localctx = new SbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, LogiXParser.RULE_sb);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        _la = this._input.LA(1);
	        if(!(_la===34 || _la===35)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ub() {
	    let localctx = new UbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, LogiXParser.RULE_ub);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        _la = this._input.LA(1);
	        if(!(_la===36 || _la===37)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dom() {
	    let localctx = new DomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, LogiXParser.RULE_dom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.match(LogiXParser.T__37);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ubop() {
	    let localctx = new UbopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, LogiXParser.RULE_ubop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this.match(LogiXParser.T__38);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	napis() {
	    let localctx = new NapisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, LogiXParser.RULE_napis);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(LogiXParser.T__39);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ustaw() {
	    let localctx = new UstawContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, LogiXParser.RULE_ustaw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(LogiXParser.T__40);
	        this.state = 271;
	        this.wyrazenie();
	        this.state = 272;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	losowo() {
	    let localctx = new LosowoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, LogiXParser.RULE_losowo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(LogiXParser.T__4);
	        this.state = 275;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dla() {
	    let localctx = new DlaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, LogiXParser.RULE_dla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(LogiXParser.T__41);
	        this.state = 278;
	        this.match(LogiXParser.T__6);
	        this.state = 279;
	        this.nazwa();
	        this.state = 280;
	        this.wyrazenie();
	        this.state = 281;
	        this.wyrazenie();
	        this.state = 282;
	        this.wyrazenie();
	        this.state = 283;
	        this.match(LogiXParser.T__7);
	        this.state = 284;
	        this.blok();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	liczba() {
	    let localctx = new LiczbaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, LogiXParser.RULE_liczba);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        this.match(LogiXParser.CYFRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	komentarz() {
	    let localctx = new KomentarzContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, LogiXParser.RULE_komentarz);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this.match(LogiXParser.KOMENTARZ);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LogiXParser.EOF = antlr4.Token.EOF;
LogiXParser.T__0 = 1;
LogiXParser.T__1 = 2;
LogiXParser.T__2 = 3;
LogiXParser.T__3 = 4;
LogiXParser.T__4 = 5;
LogiXParser.T__5 = 6;
LogiXParser.T__6 = 7;
LogiXParser.T__7 = 8;
LogiXParser.T__8 = 9;
LogiXParser.T__9 = 10;
LogiXParser.T__10 = 11;
LogiXParser.T__11 = 12;
LogiXParser.T__12 = 13;
LogiXParser.T__13 = 14;
LogiXParser.T__14 = 15;
LogiXParser.T__15 = 16;
LogiXParser.T__16 = 17;
LogiXParser.T__17 = 18;
LogiXParser.T__18 = 19;
LogiXParser.T__19 = 20;
LogiXParser.T__20 = 21;
LogiXParser.T__21 = 22;
LogiXParser.T__22 = 23;
LogiXParser.T__23 = 24;
LogiXParser.T__24 = 25;
LogiXParser.T__25 = 26;
LogiXParser.T__26 = 27;
LogiXParser.T__27 = 28;
LogiXParser.T__28 = 29;
LogiXParser.T__29 = 30;
LogiXParser.T__30 = 31;
LogiXParser.T__31 = 32;
LogiXParser.T__32 = 33;
LogiXParser.T__33 = 34;
LogiXParser.T__34 = 35;
LogiXParser.T__35 = 36;
LogiXParser.T__36 = 37;
LogiXParser.T__37 = 38;
LogiXParser.T__38 = 39;
LogiXParser.T__39 = 40;
LogiXParser.T__40 = 41;
LogiXParser.T__41 = 42;
LogiXParser.LITERAL_WYRAZU = 43;
LogiXParser.LANCUCH = 44;
LogiXParser.CYFRA = 45;
LogiXParser.KOMENTARZ = 46;
LogiXParser.EOL = 47;
LogiXParser.BIALY_ZNAK = 48;

LogiXParser.RULE_prog = 0;
LogiXParser.RULE_linia = 1;
LogiXParser.RULE_polecenia = 2;
LogiXParser.RULE_wywolanieProcedury = 3;
LogiXParser.RULE_deklaracjaProcedury = 4;
LogiXParser.RULE_deklaracjeParametrow = 5;
LogiXParser.RULE_func_ = 6;
LogiXParser.RULE_powtorz = 7;
LogiXParser.RULE_blok = 8;
LogiXParser.RULE_jesli = 9;
LogiXParser.RULE_porownanie = 10;
LogiXParser.RULE_operatorPorownania = 11;
LogiXParser.RULE_zrob = 12;
LogiXParser.RULE_wypisz_ = 13;
LogiXParser.RULE_lancuchZnakowy = 14;
LogiXParser.RULE_nazwa = 15;
LogiXParser.RULE_wartosc = 16;
LogiXParser.RULE_wyrazenieZnaku = 17;
LogiXParser.RULE_wielokrotneWyrazenie = 18;
LogiXParser.RULE_wyrazenie = 19;
LogiXParser.RULE_odwolanie = 20;
LogiXParser.RULE_np = 21;
LogiXParser.RULE_ws = 22;
LogiXParser.RULE_pw = 23;
LogiXParser.RULE_lw = 24;
LogiXParser.RULE_wy = 25;
LogiXParser.RULE_pb = 26;
LogiXParser.RULE_ob = 27;
LogiXParser.RULE_sb = 28;
LogiXParser.RULE_ub = 29;
LogiXParser.RULE_dom = 30;
LogiXParser.RULE_ubop = 31;
LogiXParser.RULE_napis = 32;
LogiXParser.RULE_ustaw = 33;
LogiXParser.RULE_losowo = 34;
LogiXParser.RULE_dla = 35;
LogiXParser.RULE_liczba = 36;
LogiXParser.RULE_komentarz = 37;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(LogiXParser.EOF, 0);
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogiXParser.EOL);
	    } else {
	        return this.getToken(LogiXParser.EOL, i);
	    }
	};


	linia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiniaContext);
	    } else {
	        return this.getTypedRuleContext(LiniaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiniaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_linia;
    }

	polecenia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PoleceniaContext);
	    } else {
	        return this.getTypedRuleContext(PoleceniaContext,i);
	    }
	};

	komentarz() {
	    return this.getTypedRuleContext(KomentarzContext,0);
	};

	wypisz_() {
	    return this.getTypedRuleContext(Wypisz_Context,0);
	};

	deklaracjaProcedury() {
	    return this.getTypedRuleContext(DeklaracjaProceduryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterLinia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitLinia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitLinia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PoleceniaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_polecenia;
    }

	powtorz() {
	    return this.getTypedRuleContext(PowtorzContext,0);
	};

	np() {
	    return this.getTypedRuleContext(NpContext,0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	pw() {
	    return this.getTypedRuleContext(PwContext,0);
	};

	lw() {
	    return this.getTypedRuleContext(LwContext,0);
	};

	wy() {
	    return this.getTypedRuleContext(WyContext,0);
	};

	pb() {
	    return this.getTypedRuleContext(PbContext,0);
	};

	ob() {
	    return this.getTypedRuleContext(ObContext,0);
	};

	sb() {
	    return this.getTypedRuleContext(SbContext,0);
	};

	ub() {
	    return this.getTypedRuleContext(UbContext,0);
	};

	dom() {
	    return this.getTypedRuleContext(DomContext,0);
	};

	napis() {
	    return this.getTypedRuleContext(NapisContext,0);
	};

	ustaw() {
	    return this.getTypedRuleContext(UstawContext,0);
	};

	zrob() {
	    return this.getTypedRuleContext(ZrobContext,0);
	};

	wywolanieProcedury() {
	    return this.getTypedRuleContext(WywolanieProceduryContext,0);
	};

	jesli() {
	    return this.getTypedRuleContext(JesliContext,0);
	};

	ubop() {
	    return this.getTypedRuleContext(UbopContext,0);
	};

	dla() {
	    return this.getTypedRuleContext(DlaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterPolecenia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitPolecenia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitPolecenia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WywolanieProceduryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wywolanieProcedury;
    }

	nazwa() {
	    return this.getTypedRuleContext(NazwaContext,0);
	};

	wyrazenie = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WyrazenieContext);
	    } else {
	        return this.getTypedRuleContext(WyrazenieContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWywolanieProcedury(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWywolanieProcedury(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWywolanieProcedury(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeklaracjaProceduryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_deklaracjaProcedury;
    }

	nazwa() {
	    return this.getTypedRuleContext(NazwaContext,0);
	};

	deklaracjeParametrow = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeklaracjeParametrowContext);
	    } else {
	        return this.getTypedRuleContext(DeklaracjeParametrowContext,i);
	    }
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogiXParser.EOL);
	    } else {
	        return this.getToken(LogiXParser.EOL, i);
	    }
	};


	linia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiniaContext);
	    } else {
	        return this.getTypedRuleContext(LiniaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterDeklaracjaProcedury(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitDeklaracjaProcedury(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitDeklaracjaProcedury(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeklaracjeParametrowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_deklaracjeParametrow;
    }

	nazwa() {
	    return this.getTypedRuleContext(NazwaContext,0);
	};

	deklaracjeParametrow = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeklaracjeParametrowContext);
	    } else {
	        return this.getTypedRuleContext(DeklaracjeParametrowContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterDeklaracjeParametrow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitDeklaracjeParametrow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitDeklaracjeParametrow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Func_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_func_;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterFunc_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitFunc_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitFunc_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PowtorzContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_powtorz;
    }

	liczba() {
	    return this.getTypedRuleContext(LiczbaContext,0);
	};

	blok() {
	    return this.getTypedRuleContext(BlokContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterPowtorz(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitPowtorz(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitPowtorz(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlokContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_blok;
    }

	polecenia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PoleceniaContext);
	    } else {
	        return this.getTypedRuleContext(PoleceniaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterBlok(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitBlok(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitBlok(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JesliContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_jesli;
    }

	porownanie() {
	    return this.getTypedRuleContext(PorownanieContext,0);
	};

	blok() {
	    return this.getTypedRuleContext(BlokContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterJesli(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitJesli(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitJesli(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PorownanieContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_porownanie;
    }

	wyrazenie = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WyrazenieContext);
	    } else {
	        return this.getTypedRuleContext(WyrazenieContext,i);
	    }
	};

	operatorPorownania() {
	    return this.getTypedRuleContext(OperatorPorownaniaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterPorownanie(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitPorownanie(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitPorownanie(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperatorPorownaniaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_operatorPorownania;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterOperatorPorownania(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitOperatorPorownania(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitOperatorPorownania(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ZrobContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_zrob;
    }

	LITERAL_WYRAZU() {
	    return this.getToken(LogiXParser.LITERAL_WYRAZU, 0);
	};

	wartosc() {
	    return this.getTypedRuleContext(WartoscContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterZrob(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitZrob(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitZrob(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Wypisz_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wypisz_;
    }

	wartosc() {
	    return this.getTypedRuleContext(WartoscContext,0);
	};

	lancuchZnakowy() {
	    return this.getTypedRuleContext(LancuchZnakowyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWypisz_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWypisz_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWypisz_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LancuchZnakowyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_lancuchZnakowy;
    }

	lancuchZnakowy = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LancuchZnakowyContext);
	    } else {
	        return this.getTypedRuleContext(LancuchZnakowyContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterLancuchZnakowy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitLancuchZnakowy(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitLancuchZnakowy(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NazwaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_nazwa;
    }

	LANCUCH() {
	    return this.getToken(LogiXParser.LANCUCH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterNazwa(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitNazwa(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitNazwa(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WartoscContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wartosc;
    }

	LITERAL_WYRAZU() {
	    return this.getToken(LogiXParser.LITERAL_WYRAZU, 0);
	};

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	odwolanie() {
	    return this.getTypedRuleContext(OdwolanieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWartosc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWartosc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWartosc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WyrazenieZnakuContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wyrazenieZnaku;
    }

	liczba() {
	    return this.getTypedRuleContext(LiczbaContext,0);
	};

	odwolanie() {
	    return this.getTypedRuleContext(OdwolanieContext,0);
	};

	func_() {
	    return this.getTypedRuleContext(Func_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWyrazenieZnaku(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWyrazenieZnaku(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWyrazenieZnaku(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WielokrotneWyrazenieContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wielokrotneWyrazenie;
    }

	wyrazenieZnaku = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WyrazenieZnakuContext);
	    } else {
	        return this.getTypedRuleContext(WyrazenieZnakuContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWielokrotneWyrazenie(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWielokrotneWyrazenie(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWielokrotneWyrazenie(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WyrazenieContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wyrazenie;
    }

	wielokrotneWyrazenie = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WielokrotneWyrazenieContext);
	    } else {
	        return this.getTypedRuleContext(WielokrotneWyrazenieContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWyrazenie(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWyrazenie(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWyrazenie(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OdwolanieContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_odwolanie;
    }

	nazwa() {
	    return this.getTypedRuleContext(NazwaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterOdwolanie(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitOdwolanie(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitOdwolanie(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_np;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterNp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitNp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitNp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_ws;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PwContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_pw;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterPw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitPw(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitPw(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LwContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_lw;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterLw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitLw(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitLw(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wy;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWy(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWy(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_pb;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterPb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitPb(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitPb(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_ob;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterOb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitOb(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitOb(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_sb;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterSb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitSb(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitSb(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_ub;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterUb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitUb(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitUb(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_dom;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterDom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitDom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitDom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UbopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_ubop;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterUbop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitUbop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitUbop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NapisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_napis;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterNapis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitNapis(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitNapis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UstawContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_ustaw;
    }

	wyrazenie = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WyrazenieContext);
	    } else {
	        return this.getTypedRuleContext(WyrazenieContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterUstaw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitUstaw(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitUstaw(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LosowoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_losowo;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterLosowo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitLosowo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitLosowo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DlaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_dla;
    }

	nazwa() {
	    return this.getTypedRuleContext(NazwaContext,0);
	};

	wyrazenie = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WyrazenieContext);
	    } else {
	        return this.getTypedRuleContext(WyrazenieContext,i);
	    }
	};

	blok() {
	    return this.getTypedRuleContext(BlokContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterDla(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitDla(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitDla(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiczbaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_liczba;
    }

	CYFRA() {
	    return this.getToken(LogiXParser.CYFRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterLiczba(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitLiczba(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitLiczba(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class KomentarzContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_komentarz;
    }

	KOMENTARZ() {
	    return this.getToken(LogiXParser.KOMENTARZ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterKomentarz(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitKomentarz(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitKomentarz(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LogiXParser.ProgContext = ProgContext; 
LogiXParser.LiniaContext = LiniaContext; 
LogiXParser.PoleceniaContext = PoleceniaContext; 
LogiXParser.WywolanieProceduryContext = WywolanieProceduryContext; 
LogiXParser.DeklaracjaProceduryContext = DeklaracjaProceduryContext; 
LogiXParser.DeklaracjeParametrowContext = DeklaracjeParametrowContext; 
LogiXParser.Func_Context = Func_Context; 
LogiXParser.PowtorzContext = PowtorzContext; 
LogiXParser.BlokContext = BlokContext; 
LogiXParser.JesliContext = JesliContext; 
LogiXParser.PorownanieContext = PorownanieContext; 
LogiXParser.OperatorPorownaniaContext = OperatorPorownaniaContext; 
LogiXParser.ZrobContext = ZrobContext; 
LogiXParser.Wypisz_Context = Wypisz_Context; 
LogiXParser.LancuchZnakowyContext = LancuchZnakowyContext; 
LogiXParser.NazwaContext = NazwaContext; 
LogiXParser.WartoscContext = WartoscContext; 
LogiXParser.WyrazenieZnakuContext = WyrazenieZnakuContext; 
LogiXParser.WielokrotneWyrazenieContext = WielokrotneWyrazenieContext; 
LogiXParser.WyrazenieContext = WyrazenieContext; 
LogiXParser.OdwolanieContext = OdwolanieContext; 
LogiXParser.NpContext = NpContext; 
LogiXParser.WsContext = WsContext; 
LogiXParser.PwContext = PwContext; 
LogiXParser.LwContext = LwContext; 
LogiXParser.WyContext = WyContext; 
LogiXParser.PbContext = PbContext; 
LogiXParser.ObContext = ObContext; 
LogiXParser.SbContext = SbContext; 
LogiXParser.UbContext = UbContext; 
LogiXParser.DomContext = DomContext; 
LogiXParser.UbopContext = UbopContext; 
LogiXParser.NapisContext = NapisContext; 
LogiXParser.UstawContext = UstawContext; 
LogiXParser.LosowoContext = LosowoContext; 
LogiXParser.DlaContext = DlaContext; 
LogiXParser.LiczbaContext = LiczbaContext; 
LogiXParser.KomentarzContext = KomentarzContext; 