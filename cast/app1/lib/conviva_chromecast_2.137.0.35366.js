var loadConviva = typeof ConvivaPrivateLoader === 'undefined';
// Copyright (c) 2014 Conviva Inc. All Rights Reserved.
// Author: Alban Nicolas (anicolas@conviva.com)

// Modifies the global loadConviva flag to ensure our JS libraries are disabled in non-supported browsers.
// Don't see a need to make this into a real class/module yet. Maybe after we add new exclusion criteria.

function convivaBrowserSupportsVideoElement() { //NO_RENAME:document,createElement,canPlayType
    try {
        return !!document.createElement('video').canPlayType;
    } catch (e) {
        return false;
    }
}
function convivaBrowserSupportsLocalStorage() { //NO_RENAME:window
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

var convivaSupportedBrowser = (convivaBrowserSupportsVideoElement() && convivaBrowserSupportsLocalStorage());

loadConviva = loadConviva && convivaSupportedBrowser;
if (loadConviva) {
var ConvivaPrivateLoader = (typeof ConvivaPrivateLoader !== 'undefined') ? ConvivaPrivateLoader : (function () { });
(function () {
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-
// Copyright Conviva Inc 2010
// Author: George Necula (necula@conviva.com)

// Library for SLASH generated Javascript
// This is included first in the LivePass.js

// ConvivaPrivateLoader is defined at top-level in LivePass.js
// ConvivaPrivateTestingLoader is defined at top-level in TetingLivePassModule.js, loaded in tests after LivePass.js
// ConvivaPrivateModule is defined at top-level in LivePassModule.js (loaded after LivePass.js)
//   - this contains duplicate of classes from ConvivaPrivateLoader (the common ones)
//   - it is cleaned on LivePassInit.Cleanup ()
function registerName(cls, clsname) {
    if( typeof(ConvivaPrivateModule) != "undefined") {
        ConvivaPrivateModule[clsname] = cls;
    } else if( typeof(ConvivaPrivateTestingModule) != "undefined") {
        ConvivaPrivateTestingModule[clsname] = cls;
    } else {
        // We must be populating the Loader classes
        ConvivaPrivateLoader[clsname] = cls;
    }
}
registerName(registerName,"registerName");

// A special function used to mark identifiers for renaming
function __id(x) { return x; }
registerName(__id,"__id");


// Find the definition of a Conviva type by name
function getConvivaType(className) {
    if(typeof(ConvivaPrivateModule) != "undefined" && ConvivaPrivateModule.hasOwnProperty(className)) {
        return ConvivaPrivateModule[className];
    } else if(typeof(ConvivaPrivateTestingModule) != "undefined" && ConvivaPrivateTestingModule.hasOwnProperty(className)) {
        return ConvivaPrivateTestingModule[className];
    } else if(ConvivaPrivateLoader.hasOwnProperty(className)) {
        return ConvivaPrivateLoader[className];
    } else {
        return null;
    }
}
registerName(getConvivaType, "getConvivaType");

/* Construct a JS program that defines in the current scope all the names 
 * from ConvivaPrivate
 */
function importConvivaPrivateProgram(fromWhere, fromWhereName) {
    var res="";
    var p;
    for(p in fromWhere) {
        if(fromWhere.hasOwnProperty(p)) {
            res += "var "+p+"="+__id(fromWhereName)+"."+p+";"
        }
    }
    return res;
}
registerName(importConvivaPrivateProgram,"importConvivaPrivateProgram");

// A special object user to mark the static initializer
function STAT_INIT () {
    return "STAT_INIT";
}
registerName(STAT_INIT,"STAT_INIT");

// Call the static initializer
function statInit(cls, clsname) {
    cls.call(STAT_INIT);
    registerName(cls, clsname);
}
registerName(statInit,"statInit");

// Define a public method
function defPubMeth(obj, name, m) {
    if(obj != STAT_INIT) {
        if(obj[name] == undefined) {
            obj[name] = m;
        } else {
            // overwriting
            obj[__id("super_")+name] = m;
        }
    }    
}
registerName(defPubMeth,"defPubMeth");

// Define a private method
function defPrivMeth(obj,name,m) {
    if(obj != STAT_INIT) obj[name] = m;
}
registerName(defPrivMeth,"defPrivMeth");

// Define a static method
function defStatMeth(obj,cls,name,m) {
    if(obj == STAT_INIT) cls[name]= m;
}
registerName(defStatMeth,"defStatMeth");

// Define a getter
function defGet(obj,name,m) {
    if(obj != STAT_INIT) { //NO_RENAME: Object,configurable,enumerable,get
        if (typeof(Object.defineProperty) != 'undefined') {
            Object.defineProperty(obj, name, {
                configurable : true,
                enumerable : true,
                get : m
            });
        } else { 
            obj.__defineGetter__(name, m);
        }
    }
}
registerName(defGet,"defGet");

function defSet(obj,name,m) {
    if(obj != STAT_INIT) { //NO_RENAME: Object,configurable,set
        if (typeof(Object.defineProperty) != 'undefined') {
            Object.defineProperty(obj, name, {
                configurable : true,
                set : m
            });
        } else { // The browser must support either defineProperty or __defineSetter__, or we will completely fail.
            obj.__defineSetter__(name, m);
        }
    }
}
registerName(defSet,"defSet");

function defStatGet(obj,cls,name,m) {
    if(obj == STAT_INIT) defGet(cls, name, m);
}
registerName(defStatGet,"defStatGet");

function defStatSet(obj,cls,name,m) {
    if(obj == STAT_INIT) defSet(cls, name, m);
}
registerName(defStatSet,"defStatSet");

function slIsArray(inObj) {
    // Is it an array, or an Object
    if(inObj.constructor == Array) {
        return true;
    } else if(typeof(inObj.length) == 'undefined') {
        return false;
    } else {
        return true;
    }
}
registerName(slIsArray,"slIsArray");

function slForEachPropValue(a, f) {
    var ist = slIsArray(a);
    if(slIsArray(a)) {
        for(var i=0;i<a.length;i++) {
            f(a[i]);
        }
    } else {
        for(var p in a) {
            if(a.hasOwnProperty(p)) f(a[p]);
        }
    }
}
registerName(slForEachPropValue,"slForEachPropValue");

function slForEachProp(a, f) {
    if(slIsArray(a)) {
        for(var i=0;i<a.length;i++) {
            f(i);
        }
    } else {
        for(var p in a) {
            if(a.hasOwnProperty(p)) f(p);
        }
    }
}
registerName(slForEachProp,"slForEachProp");

/* Support for declaring test classes and methods */
// Upon static initialization, declare the test class
function declTestClass(obj,name,cls,meta) {
    if(obj == STAT_INIT) jstest.DeclareTestClass(name, cls, meta);
}
registerName(declTestClass,"declTestClass");

/* On static initialization, declare the test method; on instance 
 * construction, set the method closure. We need to do it this late
 * to get the right closure. 
 */
function declTestMethod(obj,clsname,mname,mcode,meta) {
    if(obj == STAT_INIT) {
        jstest.DeclareTestMethod(clsname, mname, meta);
    } else {
        jstest.SetTestMethodClosure(clsname, mname, mcode);
    }
}
registerName(declTestMethod,"declTestMethod");
             
// Slash unsigned integers
function sluint () {
    sluint.two32 = 0x100000000;
    
    sluint.Cast = function (v) {
        var vi = parseInt(v);
        if(vi > sluint.MaxValue) {
            vi = vi % sluint.two32; // 32-bits, positive
        } else if(vi < 0) {
            vi = (- vi) % sluint.two32; // 32-bits of negation, use % only on positive numbers
            vi =  sluint.two32 - vi;
        }
        return vi;
    };

    sluint.uintRegex = new RegExp("^[0-9]+$");
    sluint.Parse = function (v) {
        Lang.parseChecker(v, sluint.uintRegex);
        return sluint.Cast(v);
    }
    
    sluint.MaxValue = sluint.two32 - 1;
    sluint.MinValue = 0;
}
statInit(sluint,"sluint");

// Slash signed integers (do not use "int" because Firefox claims it is a reserved word)
function slint () {
    slint.Cast = function (v) {
        // Cast first to uint to bring it in the range [0 .. 2^32)
        var vu = sluint.Cast(v);
        if(vu > slint.MaxValue) {
            vu = vu - sluint.two32;
        }
        return vu;
    };

    slint.intRegex = new RegExp("^[+-]?[0-9]+$");
    slint.Parse = function (v) {
        Lang.parseChecker(v, slint.intRegex);
        return slint.Cast(v);
    }

    slint.MaxValue =   0x7FFFFFFF;
    slint.MinValue = - 0x80000000;
}
statInit(slint,"slint");

function Int64() {
    var _s = this;
    
    if(_s == STAT_INIT) Int64.TWO_TO_32 /* : Number*/ = 4294967296.0;

    /** We store the int64 as two integers, the most significant bits
     * are a _signed_ 32-bit integer, and the least significant bits are
     * an _unsigned_ 32-bit integer.
     *
     * Together they denote the Number:
     *    Number(_h) * Number(2^32) + Number(l)
     **/

    /** Make a new Int64 with the value 0 */
    function __constr() {
        _s._l = 0;
        _s._h = 0;
    };
    
    /** Initialize from an unsigned int */
    defStatMeth(_s,Int64,"fromUnsignedInt", __fromUnsignedInt);
    function __fromUnsignedInt ( i /*: uint*/ ) /*: Int64*/ {
        var res /*: Int64*/ = new Int64 ();
        res._h = 0;
        res._l = i;
        return res;
    };
        
    /** Initialize from a signed int */
    defStatMeth(_s,Int64,"fromInt", __fromInt);
    function __fromInt( i /*: int*/ ) /*: Int64*/  {
        var res /*: Int64*/ = new Int64 ();
        if(i >= 0) {
            res._h = 0;
            res._l = sluint.Cast(i);
        } else {
            res._h = -1;
            res._l = sluint.Cast(i);
        }
        return res;
    };
        
    /** Initialize from a Number */
    defStatMeth(_s,Int64, "fromNumber", __fromNumber);
    function __fromNumber ( n /*: Number*/ ) /*: Int64*/ {
        var l1 /*: Number*/ = n % Int64.TWO_TO_32;
        // In AS, the remainder has the same sign as n
        if(l1 < 0) {
            l1 = Number(sluint.MaxValue) + 1.0 + l1;
        }
        var res /*: Int64*/ = new Int64 ();
        res._l = sluint.Cast(l1 + 0.5); // round to nearest
        res._h = slint.Cast((n - l1) / Int64.TWO_TO_32);
        // ensure _h * 2^32 + _l = n
        return res;
    };
    

    /** Convert to a Number */
    defGet(_s,"asNumber", __asNumber);
    function __asNumber () /*: Number*/ {
        return Number(_s._h) * Int64.TWO_TO_32 + Number(_s._l);
    };


    if(_s != STAT_INIT) {
        this.toString = function () { 
            return _s.asNumber.toString();
        }
    }

    if(_s != STAT_INIT) __constr.apply(this, arguments);
    
};
statInit(Int64,"Int64");


function UInt64() {

    var _s = this;

    function __constr() {
        // Inherit a bunch of stuff from Int64
        Int64.call(_s);
        _s._l = 0;
        _s._h = 0;
    }

    /** Initialize from an unsigned int */
    defStatMeth(_s, UInt64,"fromUnsignedInt",__fromUnsignedInt);
    function __fromUnsignedInt(i /*: uint*/) /*: UInt64*/ {
        var res /*: UInt64*/ = new UInt64();
        res._h = 0;
        res._l = i;
        return res;
    };
        
    /** Initialize from a Number */
    defStatMeth(_s, UInt64,"fromNumber",__fromNumber);
    function __fromNumber ( n /*: Number*/ ) /*: UInt64*/ {
        var res /*: UInt64*/ = new UInt64();
        res._h = Math.floor(n / Int64.TWO_TO_32);  // 2^32
        res._l = n % Int64.TWO_TO_32; 
        return res;
    };


    if(_s != STAT_INIT) __constr.apply(arguments);
};
statInit(UInt64,"UInt64");

// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../csClient/CwsClient/CandidateStream.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-

// Copyright (c) 2011, Conviva Inc. All Rights Reserved.
// Author: Henry Milner (henry@conviva.com)



// namespace 
    // API_ENTER
    /// <summary>
    /// A stream to which a ConvivaStreamerProxy can potentially switch.
    /// This object contains no information about the actual URL of the stream it represents.
    /// </summary>
    function CandidateStream() {
        var _s = this;

        /// <summary>
        /// Construct a stream having bitrate <paramref name="bitrate"/> in kilo-bits-per-second and streaming
        /// from a resource named <paramref name="resource"/>.
        /// </summary>
        /// <param name="id">The ID of this stream. Used to identify the stream in cases where multiple streams can have the same bitrate and resource. Otherwise, this can be null.</param>
        /// <param name="bitrate">The bitrate of the stream, in kilo-bits-per-second, or 1000 bits per second. Pass -1 if the bitrate of this stream is unknown or irrelevant.</param>
        /// <param name="resource">The name of the resource from which this stream is loaded. For example, this could be the name of a CDN. Pass null if the resource of this stream is unknown or irrelevant.</param>
        function _constr(id /* : String */, bitrate /* : int */, resource /* : String */) {
            _s.id = id;
            _s.bitrate = bitrate;
            _s.resource = resource;
        }

        /// <summary>
        /// Destroy this object.
        /// </summary>
        defPubMeth(_s,"Cleanup",__Cleanup);
        function __Cleanup() /* : void */  {
            _s.id = null;
            _s.bitrate = 0;
            _s.resource = null;
        }

        /// <summary>
        /// An identifier for this stream. Should be unique across all CandidateStreams 
        /// used by a ConvivaStreamerProxy. However, if this is null, it is assumed that 
        /// streams are uniquely identified by their bitrate and resource fields.
        /// </summary>
// Use a property to allow the obfuscator to keep an unobfuscated version
        if(_s != STAT_INIT) _s.__auto_id /* : String */ = undefined;
        defGet(_s,"id",__get_id);
        function __get_id()  { return _s.__auto_id; }
        defSet(_s,"id",__set_id);
        function __set_id(value /* : String */)  { _s.__auto_id = value; }


        /// <summary>
        /// The bitrate (in kilo-bits-per-second) at which this stream plays media.
        /// 
        /// -1 if unknown.
        /// </summary>

        if(_s != STAT_INIT) _s.__auto_bitrate /* : int */ = undefined;
        defGet(_s,"bitrate",__get_bitrate);
        function __get_bitrate()  { return _s.__auto_bitrate; }
        defSet(_s,"bitrate",__set_bitrate);
        function __set_bitrate(value /* : int */)  { _s.__auto_bitrate = value; }


        /// <summary>
        /// The resource from which this stream loads media.
        /// 
        /// Null if unknown.
        /// </summary>

        if(_s != STAT_INIT) _s.__auto_resource /* : String */ = undefined;
        defGet(_s,"resource",__get_resource);
        function __get_resource()  { return _s.__auto_resource; }
        defSet(_s,"resource",__set_resource);
        function __set_resource(value /* : String */)  { _s.__auto_resource = value; }


        /////////////////////////////////////////////////////////////////////////////////
        /// The following methods are not part of the API and are for Conviva internal
        /// use only.
        /////////////////////////////////////////////////////////////////////////////////

        /** 
         * Checks whether this object is valid.  This is necessary for languages
         * that are not typesafe, where users can set fields arbitrarily.
         * 
         * @return null if this object is valid.  Otherwise return a string
         * describing the problem.
         * 
         * @private 
         */
        defPubMeth(_s,"CheckValidity",__CheckValidity);
        function __CheckValidity() /* : String */  {
            // In dynamically-typed languages, we must ensure that fields are of the proper types.
            if (_s.id != null && !((typeof _s.id === "string"))) {
                return "CandidateStream.id is not a string";
            } else if (_s.bitrate != null && !((typeof _s.bitrate === "number"))) {
                return "CandidateStream.bitrate is not an int";
            } else if (_s.resource != null && !((typeof _s.resource === "string"))) {
                return "CandidateStream.resource is not a string";
            }
            return null;
        }

        /** 
         * Construct clone of the proper type, from a similar object perhaps constructed
         * in another module. We copy fields one by one
         */
        defStatMeth(_s,CandidateStream,"ConstructClone",__ConstructClone);
        function __ConstructClone(fromObj /* : Object */) /* : CandidateStream */  {
            if (fromObj == null) return null;
            var res /* : CandidateStream */ = new CandidateStream("", -1, null);
            res.id = NativeLang.GetStringField("id", fromObj);
            res.bitrate = slint.Cast(NativeLang.GetField("bitrate", fromObj));
            res.resource = NativeLang.GetStringField("resource", fromObj);
            return res;
        }

        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(CandidateStream,"CandidateStream");
    // API_EXIT

// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../csClient/CwsClient/ConvivaContentInfo.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-

// Copyright (c) 2011, 2012 Conviva Inc. All Rights Reserved.
// Author: Gary Kumfert (gary@conviva.com) (Original AS3 code)
// Author: George Necula (necula@conviva.com) (Ported to C#)
// Author: Henry Milner (henry@conviva.com) (Unified C# and AS3 versions)
// Author: Yan Li (yan@conviva.com)


// namespace
    // API_ENTER

    ///<summary>
    /// Encapsulates all the information required to play video content
    ///</summary>
    function ConvivaContentInfo() {
        var _s = this;

        ///////////////////////////////////////////////////////////////////////
        // Begin constants
        ///////////////////////////////////////////////////////////////////////

        /// <summary>
        ///  The value of the frameworkName field for Brightcove-based players.
        /// </summary>
        if(_s == STAT_INIT) ConvivaContentInfo.FRAMEWORK_NAME_BRIGHTCOVE /* : String */ = "Brightcove";

        /// <summary>
        /// The value of the frameworkName field for Kaltura-based players.
        /// </summary>
        if(_s == STAT_INIT) ConvivaContentInfo.FRAMEWORK_NAME_KALTURA /* : String */ = "Kaltura";

        /// <summary>
        /// The value of the frameworkName field for Ooyala-based players.
        /// </summary>
        if(_s == STAT_INIT) ConvivaContentInfo.FRAMEWORK_NAME_OOYALA /* : String */ = "Ooyala";

        /// <summary>
        /// The value of the frameworkName field for OSMF-based players.
        /// </summary>
        if(_s == STAT_INIT) ConvivaContentInfo.FRAMEWORK_NAME_OSMF /* : String */ = "OSMF";

        /// <summary>
        /// The value of the frameworkName field for players based on thePlatform.
        /// </summary>
        if(_s == STAT_INIT) ConvivaContentInfo.FRAMEWORK_NAME_THE_PLATFORM /* : String */ = "thePlatform";

        /// <summary>
        /// The value of the deviceType field for gaming consoles.
        /// </summary>
        if(_s == STAT_INIT) ConvivaContentInfo.DEVICE_TYPE_CONSOLE /* : String */ = "Console";

        /// <summary>
        /// The value of the deviceType field for mobile devices.
        /// </summary>
        if(_s == STAT_INIT) ConvivaContentInfo.DEVICE_TYPE_MOBILE /* : String */ = "Mobile";

        /// <summary>
        ///  The value of the deviceType field for personal computers.
        /// </summary>
        if(_s == STAT_INIT) ConvivaContentInfo.DEVICE_TYPE_PC /* : String */ = "PC";

        /// <summary>
        /// The value of the deviceType field for set-top boxes
        /// </summary>
        if(_s == STAT_INIT) ConvivaContentInfo.DEVICE_TYPE_SET_TOP_BOX /* : String */ = "Settop";

        /// <summary>
        /// The value of the pluginName field for Kaltura plugin (insights+precision).
        /// </summary>
        if(_s == STAT_INIT) ConvivaContentInfo.PLUGIN_NAME_KALTURA /* : String */ = "ConvivaKalturaPlugin";


        /// <summary>
        /// Use in place of a resource when not known
        /// </summary>
        if(_s == STAT_INIT) ConvivaContentInfo.NO_RESOURCE /* : String */ = "no_resource";

        ///////////////////////////////////////////////////////////////////////
        // End constants
        ///////////////////////////////////////////////////////////////////////

        ///////////////////////////////////////////////////////////////////////
        // Begin public fields
        ///////////////////////////////////////////////////////////////////////


        /// <summary>
        /// A unique identifier for the content, preferably human-readable.
        /// </summary>
        if(_s != STAT_INIT) _s.assetName /* : String */ = null;

        /// <summary>
        /// Duration of the asset in seconds.
        /// </summary>
        if(_s != STAT_INIT) _s.duration /* : int */ = -1;

        /// <summary>
        /// Encoded fps of the asset
        /// </summary>
        if(_s != STAT_INIT) _s.encodedFps /* : int */ = -1;

        if(_s != STAT_INIT) _s._tags /* : DictionaryCS(string, string) */ = null;

        /// <summary>
        /// A set of key-value pairs used in resource selection and policy evaluation
        /// </summary>

        defGet(_s,"tags",__get_tags);
        function __get_tags()  { return  Lang.StringDictionaryToRepr(_s._tags); }
        defSet(_s,"tags",__set_tags);
        function __set_tags(value /* : Object */)  {  _s._tags =  Lang.DictionaryFromRepr/*string, string*/(value); }


        /// <summary>
        /// Set this to the bitrate (1000 bits-per-second) to be used for the integrations
        /// where the streamer does not know the bitrate being player. This value is used
        /// until the streamer reports a bitrate.
        /// </summary>
        if(_s != STAT_INIT) _s.defaultReportingBitrateKbps /* : int */ = -1;


        /// <summary>
        /// Set this to a string that will be used as the resource name for the integrations
        /// where the streamer does not itself know the resource being played. If this is null,
        /// then the value of cdnName is used for this purpose.
        /// </summary>
        if(_s != STAT_INIT) _s.defaultReportingResource /* : String */ = null;


        /// <summary>
        /// A string identifying the code framework for the player, if any.
        /// Check the list of FRAMEWORK_NAME_* constants in this class for
        /// an applicable name.  If none is available, choose an appropriate
        /// name instead.
        ///
        /// For example, players developed with OSMF should set this to
        /// FRAMEWORK_NAME_OSMF.  For players developed with an OVPP, this
        /// should be the same as the OVPP name.
        ///
        /// This field is optional.
        /// </summary>
        if(_s != STAT_INIT) _s.frameworkName /* : String */ = null;


        /// <summary>
        /// The version number of the framework code, if any.  For example, a player
        /// using version 1.0 of OSMF should set this to "1.0".
        ///
        /// This field is optional and should only be populated if frameworkName
        /// is populated.
        /// </summary>
        if(_s != STAT_INIT) _s.frameworkVersion /* : String */ = null;

        /// <summary>
        /// @private
        ///
        /// A string identifying the Conviva plugin used for the integration.
        /// For example, an OSMF-based player using the Conviva OSMF plugin
        /// for OSMF 1.0 and Flash 10.1 should set this to
        /// "ConvivaOSMFPlugin_OSMF1_0_FP10_1".
        ///
        /// This field is optional.
        /// </summary>
        if(_s != STAT_INIT) _s.pluginName /* : String */ = null;

        /// <summary>
        /// @private
        ///
        /// The version number of the Conviva plugin used for the integration,
        /// if any.  For example, "2.30.0.12345" or "2.30.0".
        ///
        /// This field is optional and should only be populated if pluginName
        /// is populated.
        /// </summary>
        if(_s != STAT_INIT) _s.pluginVersion /* : String */ = null;

        /// <summary>
        /// A string identifying the viewer.
        ///
        /// This field is optional.
        /// </summary>
        if(_s != STAT_INIT) _s.viewerId /* : String */ = null;

        /// <summary>
        /// A string identifying the device in use.  This should not be used
        /// to identify the type of device, but rather the particular instance
        /// of the device on which this session is running.  For example, if
        /// the session is running on a SmartPhone 2 revision 1.2.3.4 with ID
        /// #0123456789, set this to "0123456789".
        ///
        /// This field is optional.
        /// </summary>
        if(_s != STAT_INIT) _s.deviceId /* : String */ = null;

        /// <summary>
        /// A string identifying the kind of device being used to play video.
        /// If specified, this must be chosen from the list of DEVICE_TYPE_*
        /// constants.  For example, a session on a mobile device should use
        /// DEVICE_TYPE_MOBILE.
        ///
        /// LivePass may be able to infer the device type in some cases.  The
        /// integration guide for your platform will note whether it is
        /// necessary to set this field.
        /// </summary>
        if(_s != STAT_INIT) _s.deviceType /* : String */ = null;

        /// <summary>
        /// A string identifying the player in use, preferably human-readable.
        /// If you have multiple players, this can be used to distinguish between them.
        ///
        /// This field is optional.
        /// </summary>
        if(_s != STAT_INIT) _s.playerName /* : String */ = null;

        /// <summary>
        /// The URL from which video is loaded.
        ///
        /// Note: If this changes during a session, there is no need to update
        /// this value - just use the URL from which loading initially occurs.
        /// </summary>
        if(_s != STAT_INIT) _s.streamUrl /* : String */ = null;

        if(_s != STAT_INIT) _s._isLive /* : Boolean */ = "unknown"; //defaulting to unknown instead of false. DE-2177
        /// <summary>
        /// Set to true if the session includes live content, and false otherwise.
        /// </summary>

        defGet(_s,"isLive",__get_isLive);
        function __get_isLive()  { return  _s._isLive; }
        defSet(_s,"isLive",__set_isLive);
        function __set_isLive(value /* : Boolean */)  {
            if (value === "true") { value = true; }
            if (value === "false") { value = false; }
            if (value !== true && value !== false) {
              var utils /* : Utils */ = Utils.getInstance();
              utils.err("Ignoring invalid value for ConvivaContentInfo.isLive, expected boolean.");
            }
            // DE-2668: Ignoring setting of default in case of invalid values
            if (typeof(value) == "boolean") {
                _s._isLive = value;
            }
        }


        ///////////////////////////////////////////////////////////////////////
        // End public fields
        ///////////////////////////////////////////////////////////////////////


        ///<summary>
        ///Create a new ConvivaContentInfo for a give asset
        /// </summary>
        /// <param name="assetName">The asset name for the content to be played</param>
        /// <param name="tags">The tag dictionary (mapping string to string)</param>
        function _constr(assetName /* : String */, tags /* : Object */) {
            // DE-2668: Sanitizing Asset Name and tags if not passed by application
            // Asset Name will be null till initialised explicitly
            if (assetName != null && typeof(assetName) == "string") {
                _s.assetName = assetName;
            }
            if (typeof(tags) == "object" || typeof(assetName) == "object") {
                if (tags != null && typeof(tags) == "object") {
                    _s._tags = tags; // Use the setter
                } else if (assetName != null && typeof(assetName) == "object"){
                    _s._tags = assetName; // Use the setter;
                }
            }
            if (_s._tags == null) {
                _s._tags = new DictionaryCS/*<string, string>*/();
            }
        }

        //JSRENAME:constant:_s:ConvivaContentInfo:DEVICE_TYPE_CONSOLE
        //JSRENAME:constant:_s:ConvivaContentInfo:DEVICE_TYPE_MOBILE
        //JSRENAME:constant:_s:ConvivaContentInfo:DEVICE_TYPE_PC
        //JSRENAME:constant:_s:ConvivaContentInfo:DEVICE_TYPE_SET_TOP_BOX
        //JSRENAME:constant:_s:ConvivaContentInfo:FRAMEWORK_NAME_BRIGHTCOVE
        //JSRENAME:constant:_s:ConvivaContentInfo:FRAMEWORK_NAME_KALTURA
        //JSRENAME:constant:_s:ConvivaContentInfo:FRAMEWORK_NAME_OOYALA
        //JSRENAME:constant:_s:ConvivaContentInfo:FRAMEWORK_NAME_OSMF
        //JSRENAME:constant:_s:ConvivaContentInfo:FRAMEWORK_NAME_THE_PLATFORM
        //JSRENAME:constant:_s:ConvivaContentInfo:NO_RESOURCE
        //JSRENAME:constant:_s:ConvivaContentInfo:PLUGIN_NAME_KALTURA
        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(ConvivaContentInfo,"ConvivaContentInfo");
    // API_EXIT
// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../csClient/CwsClient/ConvivaStreamerProxy.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-

// Copyright (c) 2011-2013 Conviva Inc. All Rights Reserved.
// Author: George Necula (necula@conviva.com), Henry Milner (henry@conviva.com), Yan Li (yan@conviva.com)



// #if CWS
// #endif
// #if !CWS
// #endif

// namespace
    /// \mainpage
    /// This is the main interface between the Conviva clients and the actual streamer objects. You can construct a subclass of ConvivaStreamerProxy
    /// (abbreviated CSP below) for each streamer that you want to interface to Conviva LivePass.
    ///
    /// The CSP class exposes getters for data and provides callback for some state changes.
    ///
    /// The CSP is expected to have the following state machine
    ///
    /// <b>State Machine:</b>
    ///
    /// | State\ Input| Play() \n when BF | Play() \n when !BF  |  Pause()   |  Stop()   |Seek() \n when BF|Seek() \n when !BF|  BE     |  BF    |  EOS  |
    /// | :---------: | :------------  --:|:-------------------:|:----------:|:---------:|:---------------:|:----------------:|:-------:|:------:|:------|
    /// | STOPPED     | PLAYING           | BUFFERING           |PAUSED      |           | PAUSED          | PAUSED           |         |        |       |
    /// | PLAYING     |                   |                     |PAUSED      | STOPPED   |                 |BUFFERING         |BUFFERING|        |STOPPED|
    /// |PAUSED       | PLAYING           | BUFFERING           |            |STOPPED    |                 |                  |         |        |       |
    /// |BUFFERING    | PLAYING           |                     |PAUSED      |STOPPED    | PLAYING         |                  |         | PLAYING|       |
    ///
    /// <b>Legend:</b> \n
    /// <b>BF (Buffer Full) :</b> GetBufferLengthMs() >= GetStartingBufferLengthMs() \n
    /// <b>BE (Buffer Empty):</b> GetBufferLengthMs() == 0 \n
    /// <b>EOS</b> : End Of Stream
    ///
    /// The dynamic sequence of calls and events:
    /// <ol>
    /// <li> The Application creates an instance of ConvivaStreamerProxy, or actually an instance of a subclass of CSP
    ///    that is specific to the streamer to be monitored. Since CSP is constructed early, it can already record state
    ///    changes, and errors.
    /// </li>
    /// <li> The ConvivaStreamerProxy constructor:
    ///
    ///    *  The CSP should read the initial state from the underlying streamer and should call the setters
    ///     for example, SetPlayingState, SetError, SetMetadata, SetBitrate.
    ///     No notification to the Monitor will be provided just yet because the connection to the Monitor has not yet been
    ///     established. In fact, the CSP may be in the static loader, and the Monitor is not yet loaded.
    ///
    /// <li> When the Monitor receives the instance of CSP, it will call SetMonitoringNotifier to set a callback to receive state change notification.
    ///    * Upon call of SetMonitoringNotifier, if the proxy already contains state or errors that have been set, the state change notification will
    ///    be called immediately.

    ///
    ///     Note that for some streamers, the streamer itself (not the corresponding CSP) is passed to the LivePassModule. When the module containing
    ///     the monitor loads, it will create the corresponding CSP. Note that this means that for such streamers we can implement the
    ///     CSP subclass in the module itself (e.g., MonitorMediaElement for Silverlight), but it also means that we do not get the
    ///     benefit of the early monitoring before the monitor loads.
    ///
    ///
    /// <li> During the lifetime of the streamer, the CSP instance will read metrics from the streamer and call corresponding setters
    ///    (e.g., SetPlayingState), which will in turn trigger notification of the corresponding to the registered callback functions.
    ///
    /// <li> The Monitor can read streamer metrics, by calling getters on CSP (e.g., GetPlayheadTimeMs).
    /// </ol>


    /// <summary>
    /// This class is part of the API and may be instantiated outside the LivePass module. This class,
    /// must have accessors that take and return only base types (integers, strings). We cannot use user-defined types
    /// because they have different identities in the LivePass module and the module where this class is instantiated.
    ///
    /// </summary>
    // API_ENTER
    function ConvivaStreamerProxy() {
        var _s = this;

        if(_s != STAT_INIT) _s._notifiers /* : ListCS(Action(string, object)) */ = new ListCS/*Action(string, object)*/();

        // Private state values
        if(_s != STAT_INIT) _s._stream /* : StreamInfo */ = new StreamInfo(-1, ConvivaContentInfo.NO_RESOURCE, -1, -1, -1);
        if(_s != STAT_INIT) _s._playingState /* : String */ = ConvivaStreamerProxy.UNKNOWN;

        // The last metadata received, or null if none
        if(_s != STAT_INIT) _s._lastMetadata /* : Object */ = null;

        // The last error encountered, or null if none
        if(_s != STAT_INIT) _s._lastError /* : StreamerError */ = null;
        // If we are told about errors, before we have a notifier from the monitor, we store them
        if(_s != STAT_INIT) _s._pendingErrors /* : ListCS(StreamerError) */ = new ListCS/*StreamerError*/();


        // display width in pixels
        if(_s != STAT_INIT) _s._displayWidth /* : int */ = -1;

        // display height in pixels
        if(_s != STAT_INIT) _s._displayHeight /* : int */ = -1;


        if(_s != STAT_INIT) _s._availableStreams /* : ListCS(StreamInfo) */ = null;

        if(_s != STAT_INIT) _s._currentLoadingStatus /* : DownloadStatus */ = null;

        if(_s != STAT_INIT) _s.isProxyInitialized /* : Boolean */ = undefined;

        // event reasons
        /// <summary>
        /// Identifies the event is related to network info change.
        /// @see SetMonitoringNotifier
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_NETWORKINFOCHANGE /* : String */ = "NetworkInfoChange";

        /// <summary>
        /// Identifies the event is related to player state change.
        /// @see SetMonitoringNotifier
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_PLAYINGSTATECHANGE /* : String */ = "PlayingStateChange";

        /// <summary>
        /// Identifies an event to indicate that there is an update to any of the components of the presentation  rendered by the streamer.
        /// The changes to the presentation components can be to bitrate, resource, cdn, audio track or camera angle.
        /// @see SetMonitoringNotifier
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_STREAMINFOCHANGE /* : String */ = "StreamInfoChange";

        /// <summary>
        /// Identifies an event to indicate that there are new bitrate variants (or tracks)  available for switching.
        /// @see SetMonitoringNotifier
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_AVAILABLESTREAMINFOCHANGE /* : String */ = "AvailableStreamInfoChange";

        /// <summary>
        /// Identifies an event to indicate that Proxy had been initialized. When a notifier is registered with the CSP using the
        /// SetMonitoringNotifier() , this should be the first event which should be fired.
        /// @see SetMonitoringNotifier
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_PROXYINITIALIZED /* : String */ = "ProxyInitialized";

        /// <summary>
        /// Passed when a Metadata is encountered
        /// @see SetMonitoringNotifier
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_METADATACHANGE /* : String */ = "MetadataChange";


        /// <summary>
        /// Identifies the event related to File download status.
        /// @see SetMonitoringNotifier
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_LOADINGSTATUSCHANGE /* : String */ = "LoadingStatusChange";

        /// <summary>
        /// Identifies an event to indicate that that download status has changed.
        /// @see SetMonitoringNotifier
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_DOWNLOADSTATECHANGE /* : String */ = "DownloadStateChange";

        /// <summary>
        /// Identifies the event related to display size change.
        /// @see SetMonitoringNotifier
        /// </summary>
        ///
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_DISPLAYSIZECHANGE /* : String */ = "DisplaySizeChange";

        /// <summary>
        /// Passed when a new Error is encountered
        /// @see SetMonitoringNotifier
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_ERRORCHANGE /* : String */ = "ErrorChange";

        /// <summary>
        /// Passed when a logging string is passed.
        /// @see SetMonitoringNotifier
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_LOG /* : String */ = "Log";

        /// <summary>
        /// Indicates a resource error occurring.
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_RESOURCE_ERROR /* : String */ = "ResourceError";

        /// <summary>
        /// Indicates a presentation change occurring.
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_PRESENTATION_CHANGE /* : String */ = "PresentationChange";


        /// STOPPED: player state of stopped and the play position is 0.
        /// @see GetPlayingState()
        if(_s == STAT_INIT) ConvivaStreamerProxy.STOPPED /* : String */ = "STOPPED";
        /// PLAYING: player state of playing.  In this state the play position is advancing.
        /// @see GetPlayingState()
        if(_s == STAT_INIT) ConvivaStreamerProxy.PLAYING /* : String */ = "PLAYING";
        /// BUFFERING: player state of buffering. In this state streamer is loading data for playback and the play position is not moving.
        /// If the streamer was already playing video before entering this state, it continues to display the last displayed frame.
        /// @see GetPlayingState()
        if(_s == STAT_INIT) ConvivaStreamerProxy.BUFFERING /* : String */ = "BUFFERING";
        /// PAUSED: player state of paused. In this state the okay position is not moving.  If the streamer was playing video, it continues to display the last displayed frame.
        /// @see GetPlayingState()
        if(_s == STAT_INIT) ConvivaStreamerProxy.PAUSED /* : String */ = "PAUSED";
        /// <summary>
        /// NOT_MONITORED: The streamer is not currently attached to the monitor.
        /// @see GetPlayingState()
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.NOT_MONITORED /* : String */ = "NOT_MONITORED";
        /// ERROR: player state of error
        /// @see GetPlayingState()
        if(_s == STAT_INIT) ConvivaStreamerProxy.ERROR /* : String */ = "ERROR";
        /// UNKNOWN: unknown player state
        /// @see GetPlayingState()
        if(_s == STAT_INIT) ConvivaStreamerProxy.UNKNOWN /* : String */ = "UNKNOWN";

        /// <summary>
        /// A state of the Downloader to  indicate that it is capable of downloading the stream.
        /// @see REASON_DOWNLOADSTATECHANGE
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.DOWNLOADSTATE_ACTIVE /* : int */ = 1;

        /// <summary>
        /// A state of the Downloader to  indicate that it is not capable of downloading the stream.
        /// @see REASON_DOWNLOADSTATECHANGE
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.DOWNLOADSTATE_INACTIVE /* : int */ = 0;

        // Constants for the required metadata keys
        /// <summary>
        /// METADATA_DURATION: The duration of the content, in seconds.
        ///
        /// Useful for communicating content duration when it becomes known after the start of streaming.
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.METADATA_DURATION /* : String */ = "duration";
        /// METADATA_ENCODED_FRAMERATE: The encoded frame rate of the content, in frames per second.
        if(_s == STAT_INIT) ConvivaStreamerProxy.METADATA_ENCODED_FRAMERATE /* : String */ = "framerate";
        /// METADATA_STREAM_URL: The url of the content, being played
        if(_s == STAT_INIT) ConvivaStreamerProxy.METADATA_STREAM_URL /* : String */ = "streamUrl";

        /// <summary>
        /// Indicates a event need to be Enqueued.
        /// </summary>
        if(_s == STAT_INIT) ConvivaStreamerProxy.REASON_SEND_SEEK_EVENT /* : String */ = "SendSeekEvent";

        /** Constants for the valid switching statuses */
        /// <summary>
        /// The switch has not yet started.
        /// </summary>

        /// NO_LOADING_STATE: No loading state is available.
        //public const string NO_LOADING_STATE = "NO_LOADING_STATE";

        // Constants for boolean values that may also be unavailable
        if(_s == STAT_INIT) ConvivaStreamerProxy.BOOLEAN_TRUE /* : int */ = 1;
        if(_s == STAT_INIT) ConvivaStreamerProxy.BOOLEAN_FALSE /* : int */ = -1;
        if(_s == STAT_INIT) ConvivaStreamerProxy.BOOLEAN_UNAVAILABLE /* : int */ = 0;


        /// Constants for proxy Capabilities
        /// @see GetCapabilities()
        /// Constants for encoding the capabilities
        if(_s == STAT_INIT) ConvivaStreamerProxy.CAPABILITY_VIDEO /* : int */ = 1;
        if(_s == STAT_INIT) ConvivaStreamerProxy.CAPABILITY_QUALITY_METRICS /* : int */ = 2;
        if(_s == STAT_INIT) ConvivaStreamerProxy.CAPABILITY_BITRATE_METRICS /* : int */ = 4;

        /// Bitrate is reported manually by the integration
        /// The conflict with CAPABILITY_CDN_SWITCHING is misleading
        /// CWS sends capabilities the backend, while LivePass only uses them on the client.
        /// While it doesn't look good, it should not create issues either.
        /// TODO: rethink/untangle these on the next major overhaul.
        if(_s == STAT_INIT) ConvivaStreamerProxy.CAPABILITY_BITRATE_EXTERNAL /* : int */ = 16;

        /// Constants for protocol capabilities
        if(_s == STAT_INIT) ConvivaStreamerProxy.CAPABILITY_SOURCE_HTTP /* : int */ = 32;
        if(_s == STAT_INIT) ConvivaStreamerProxy.CAPABILITY_SOURCE_CHUNKED /* : int */ = 64;
        if(_s == STAT_INIT) ConvivaStreamerProxy.CAPABILITY_SOURCE_STREAMING /* : int */ = 128;

        function _constr() {
            // Explicit constructor here for inheritance in Lua.

            // ALBAN: switching state away from UKNOWN without even having a streamer attached yet doesn't look right.
            // SetPlayingState(STOPPED);

        }

        /// <summary>
        /// Cleanup : This function is called when the monitoring session is terminated.
        /// </summary>
        defPubMeth(_s,"Cleanup",__Cleanup);
        function __Cleanup() /* : void */  {
            if (_s._notifiers != null) {
                _s._notifiers.Clear();
            }
        }

        /// <summary>
        /// GetCapabilities :
        /// Get a bitmap with the capabilities supported by this ConvivaStreamerProxy
        /// </summary>
        /// <returns></returns>
        defPubMeth(_s,"GetCapabilities",__GetCapabilities);
        function __GetCapabilities() /* : int */  {
            return 0;
        }


        /// <summary>
        /// GetPlayheadTimeMs
        /// The current position of the play head, in milliseconds since the start of the content.
        ///
        /// -1 if not available.
        ///
        /// </summary>
        defPubMeth(_s,"GetPlayheadTimeMs",__GetPlayheadTimeMs);
        function __GetPlayheadTimeMs() /* : int */  {
            return -1;
        }


        /// <summary>
        /// GetIsPHTAccurate
        /// @deprecated
        /// Return true if the Player head time is accurate, and false otherwise.
        ///
        /// </summary>
        defPubMeth(_s,"GetIsPHTAccurate",__GetIsPHTAccurate);
        function __GetIsPHTAccurate() /* : Boolean */  {
            return true;
        }


        /// <summary>
        /// GetBufferLengthMs
        ///
        /// The number of milliseconds-worth of data present in the buffer.
        ///
        /// -1 if not available.
        ///
        /// </summary>
        defPubMeth(_s,"GetBufferLengthMs",__GetBufferLengthMs);
        function __GetBufferLengthMs() /* : int */  {
            return -1;
        }


        /// <summary>
        /// GetVideoBufferLengthMs
        ///
        /// The number of milliseconds-worth of video data present in the buffer.
        ///
        /// -1 if not available.
        ///
        /// </summary>
        defPubMeth(_s,"GetVideoBufferLengthMs",__GetVideoBufferLengthMs);
        function __GetVideoBufferLengthMs() /* : int */  {
            return -1;
        }


        /// <summary>
        /// GetAudioBufferLengthMs
        ///
        /// The number of milliseconds-worth of audio data present in the buffer.
        ///
        /// -1 if not available.
        ///
        /// </summary>
        defPubMeth(_s,"GetAudioBufferLengthMs",__GetAudioBufferLengthMs);
        function __GetAudioBufferLengthMs() /* : int */  {
            return -1;
        }


        /// <summary>
        /// GetStartingBufferLengthMs :
        /// return the buffer length threshold (in milliseconds) at which the streamer will
        /// transition from buffering to playing.
        ///
        /// Most streamers do not begin playing immediately
        /// when data is available, but rather wait for the buffer to reach a certain threshold before
        /// playing, ensuring smoother playback. For example, if this number is 1000, and the streamer
        /// enters the buffering state with an empty buffer at time 0, the streamer will begin playing
        /// once the buffer is sufficient to play 1000ms of media.
        ///
        /// This threshold can change.
        ///
        /// -1 if unknown or unavailable.
        /// </summary>
        defPubMeth(_s,"GetStartingBufferLengthMs",__GetStartingBufferLengthMs);
        function __GetStartingBufferLengthMs() /* : int */  {
            return -1;
        }

        /// <summary>
        /// SetStartingBufferLengthMs:
        /// Sets the buffer length in ms.
        /// The maximum bufferlength which can be supported by a streamer varies.  Setters should verify that the setvalue of bufferlength has
        /// taken effect by calling GetStartingBufferLengthMs()
        /// </summary>
        /// <param name="ms"> bufferlength in ms</param>
        defPubMeth(_s,"SetStartingBufferLengthMs",__SetStartingBufferLengthMs);
        function __SetStartingBufferLengthMs(ms /* : int */) /* : void */  {

        }


        /// <summary>
        /// GetIsStartingBufferFull:
        /// Retruns true if the buffer length is large enough to transition from BUFFERING to PLAYING state
        /// </summary>
        /// <returns></returns>
        defPubMeth(_s,"GetIsStartingBufferFull",__GetIsStartingBufferFull);
        function __GetIsStartingBufferFull() /* : Boolean */  {
            return false;
        }


        /// <summary>
        /// GetRenderedFrameRate
        /// @deprecated
        ///
        /// The current rendering frame rate (frames per second).
        /// It is recommended that the rendering frame rate is based on a rolling average computed for the last 30 secs.
        ///
        /// -1.0 if not available.
        /// </summary>
        defPubMeth(_s,"GetRenderedFrameRate",__GetRenderedFrameRate);
        function __GetRenderedFrameRate() /* : Number */  {
            return -1.0;
        }

        /// <summary>
        /// GetSourceFrameRate
        ///
        /// The current encoded frame rate for the presented video stream (frames per second).
        ///
        /// -1.0 if not available.
        /// </summary>
        defPubMeth(_s,"GetSourceFrameRate",__GetSourceFrameRate);
        function __GetSourceFrameRate() /* : Number */  {
            return -1.0;
        }


        /// <summary>
        /// GetDroppedFrames
        /// The number of dropped frames, cumulative since the start of the session.
        ///
        /// -1 if not available.
        /// </summary>
        defPubMeth(_s,"GetDroppedFrames",__GetDroppedFrames);
        function __GetDroppedFrames() /* : int */  {
            return -1;
        }


        /// <summary>
        /// GetCpuPercent : return the percentage of CPU usage.
        /// -1.0 if not available.
        /// </summary>
        defPubMeth(_s,"GetCpuPercent",__GetCpuPercent);
        function __GetCpuPercent() /* : Number */  {
            return -1.0;
        }

        /// <summary>
        /// GetMemoryPercent : return the amount of memory available in KB
        /// @deprecated
        /// -1.0 if not available.
        /// </summary>
        defPubMeth(_s,"GetMemoryAvailable",__GetMemoryAvailable);
        function __GetMemoryAvailable() /* : Number */  {
            return -1.0;
        }

        /// <summary>
        /// GetCapacityKbps :
        /// return an estimation of the current capacity, in kilo-bits-per-second (i.e. 1000 bits per
        /// second), of the connection between this client and the specified resource.
        /// It is recommended that the estimation of the current capacity is calculated using a simple moving average of the bit rate for the last 2 downloaded chunks.
        ///
        /// -1 if not available.
        /// </summary>
        /// <param name="resource">Instance of Resource for which the bandwidth capacity is requested</param>
        defPubMeth(_s,"GetCapacityKbps",__GetCapacityKbps);
        function __GetCapacityKbps(resource /* : String */) /* : int */  {
            return -1;
        }


        /// <summary>
        /// GetServerAddress :
        ///
        /// Return the server address for the current playing resource. The returned string should be
        /// a representation of the IP address if available (e.g., "127.0.0.1"), or a domain name
        /// otherwise.
        ///
        /// Null if the server address is not known.
        /// </summary>
        defPubMeth(_s,"GetServerAddress",__GetServerAddress);
        function __GetServerAddress() /* : String */  {
            return null;
        }


        /// <summary>
        /// GetIsLive :
        /// @deprecated
        ///
        /// Return ConvivaStreamerProxy.BOOLEAN_TRUE if the streamer is streaming live media, and
        /// ConvivaStreamerProxy.BOOLEAN_FALSE otherwise.
        ///
        /// ConvivaStreamerProxy.BOOLEAN_UNAVAILABLE if unknown.
        /// </summary>
        defPubMeth(_s,"GetIsLive",__GetIsLive);
        function __GetIsLive() /* : int */  {
            return ConvivaStreamerProxy.BOOLEAN_UNAVAILABLE;
        }

        /// <summary>
        /// GetStreamerVersion :
        /// return a version number associated with the StreamerType above.
        ///
        /// At a minimum,
        /// this number should be changed whenever the streamer implementation changes in a
        /// way that could substantially impact switching.
        ///
        ///  -1 if the streamer type is null
        /// </summary>
        defPubMeth(_s,"GetStreamerVersion",__GetStreamerVersion);
        function __GetStreamerVersion() /* : int */  {
            return -1;
        }

        /// <summary>
        /// GetSignalStrength
        ///
        /// The current network signal strength.
        ///
        /// 1000 if not available.
        /// </summary>
        defPubMeth(_s,"GetSignalStrength",__GetSignalStrength);
        function __GetSignalStrength() /* : Number */  {
            return 1000;
        }

        /// <summary>
        /// FetchCandidateStreams :
        /// This API will be supported on platforms where a return from GetCapabilities() has either the  ConvivaStreamerProxy.CAPABILITY_CDN_SWITCHING or the
        /// ConvivaStreamerProxy.CAPABILITY_BITRATE_SWITCHING bit fields set.

        /// An Async call to retrieve the  available tracks (bitrate variants) on a resource. The list of tracks are only for the current presentation.  For ex. if the
        /// current presentation includes Video_Angle1 & Audio_Eng then this API will retrieve the available bit-rate variants for Video_Angle1 & Audio_Eng.
        /// The bit-rate variants will be delivered to the async callback registered using the SetMonitoringNotifier()
        ///
        /// @see ConvivaStreamerProxy.SetMonitoringNotifier()
        /// @see ConvivaStreamerProxy.REASON_AVAILABLESTREAMINFOCHANGE
        /// </summary>
        /// <param name="resource"></param>
        defPubMeth(_s,"FetchCandidateStreams",__FetchCandidateStreams);
        function __FetchCandidateStreams(resource /* : String */) /* : void */  {

        }

        /// <summary>
        ///
        /// Play :
        /// This API will be supported on platforms where a return from GetCapabilities() has either the  ConvivaStreamerProxy.CAPABILITY_CDN_SWITCHING or the ConvivaStreamerProxy.CAPABILITY_BITRATE_SWITCHING bit fields set.
        ///
        /// Called by LivePass to indicate to the streamer that it should play the streams in the <paramref name="destination"/> list.  The destination object contains a list of streams
        /// which are part of the presentation that need to switched. The list of StreamInfo which are passed down to this function should contain atleast one stream corresponding
        /// to the Video stream.  All streams which are missing in this list will be mapped to the Video CDN.  For example  if the presentation is made up of Video_Angle1 & Audio_Eng and the
        /// call to Play() contains only the StreamInfo for the video stream, then the Audio_Eng stream will also be played from the same resource as the video.
        /// If the CSP is in the middle of downloading data when this function is called, then it is expected that the current download be canceled and a fresh download should be
        /// issued from the new <paramref name="destination"/>.
        ///
        /// A successful switch and display of the stream from the destination stream is signaled by the  ConvivaStreamerProxy.REASON_STREAMINFOCHANGE event.
        /// </summary>
        /// <impacts>
        /// Precision
        /// </impacts>
        defPubMeth(_s,"Play",__Play);
        function __Play(destination /* : ListCS(StreamInfo) */) /* : void */  {
        }



        /////////////////////////////////////////////////////////////////////////////////
        /// The following methods are not part of the API and are for Conviva internal
        /// use only.
        /////////////////////////////////////////////////////////////////////////////////

        /// The version of this class. This is for Conviva internal use only; do not modify or
        /// override it.
        defPubMeth(_s,"GetApiVersion",__GetApiVersion);
        function __GetApiVersion() /* : int */  {
            return ConvivaStreamerProxy.API_VERSION;
        }
        if(_s == STAT_INIT) ConvivaStreamerProxy.API_VERSION /* : int */ = 1;



        /// <summary>
        /// SetMonitoringNotifier :
        /// The Conviva LivePass will call this function to set a notifier. The notifier is a function that takes a string
        /// argument and an Object argument. The supported notifications are listed below. Each notification carries an encoding of the new state.
        /// The current (old) state can be read using the getters on this class (it has not yet been updated to the new value)
        ///
        /// When the notifier is set, if there are pending state changes or errors, the notifier is called immediately.
        ///
        /// - ConvivaStreamerProxy.REASON_PLAYINGSTATECHANGE - passed when the playing state changes. The Object argument is the new playing state (string).
        /// - ConvivaStreamerProxy.REASON_STREAMINFOCHANGE - passed when the StreamInfo changes (bitrate, resource). The Object argument is a List of
        ///                      StreamInfo.
        /// - ConvivaStreamerProxy.REASON_AVAILABLESTREAMINFOCHANGE -  passed when the list of available streams changes. The Object argument is List of StreamInfo.
        /// - ConvivaStreamerProxy.REASON_METADATACHANGE - passed when a new Metadata is encountered. The Object argument is a dictionary as described
        ///                   in the documentation of SetMetadata.
        /// - ConvivaStreamerProxy.REASON_DOWNLOADSTATECHANGE - passed when there is an update to the download status of a stream. The Object argument is a List<int>
        ///                   containing 2 items.The first item in the list being the stream type (StreamInfo.type) and the second being the state of the downloader;
        /// - ConvivaStreamerProxy.REASON_PROXYINITIALIZED - passed when the proxy has been initialized. The Object argument is null.
        /// - ConvivaStreamerProxy.REASON_LOADINGSTATUSCHANGE  - passed when updated status of the current download chunk is available.  The Object argument is the DownloadStatus
        /// - ConvivaStreamerProxy.REASON_DISPLAYSIZECHANGE - passed when display size changes. The object argument is a List<int> which contain the width and height in pixels.
        /// - ConvivaStreamerProxy.REASON_ERRORCHANGE - passed when a new error is encountered. The Object argument is the new StreamerError.
        /// - ConvivaStreamerProxy.REASON_LOG  - passed when the ConvivaStreamerProxy wants to log a string with the LivePassModule. The Object argument is the message to be logged (string).
        ///
        /// We use such an untyped interface because this class may be in a different module than the listener.
        /// </summary>
        /// <param name="notifier">the callback</param>
        defPubMeth(_s,"SetMonitoringNotifier",__SetMonitoringNotifier);
        function __SetMonitoringNotifier(notifier /* : Function(Action(String, object)) */) /* : void */  {

            if (notifier == null) return;

            var previousNotifiers /* : ListCS(Action(string, object)) */ = _s._notifiers;

            var newNotifiers /* : ListCS(Action(string, object)) */ = new ListCS/*Action(string, object)*/();
            newNotifiers.Add(notifier);
            _s._notifiers = newNotifiers;


            if (_s._notifiers != null) {
                // We trigger the notifications by setting the default values, and then replaying the
                // setters

                if (_s.isProxyInitialized) {
                    notifier(ConvivaStreamerProxy.REASON_PROXYINITIALIZED, null);
                }

                _s.SetDownloadStateChange(StreamInfo.VIDEO, ConvivaStreamerProxy.DOWNLOADSTATE_ACTIVE);
                _s.SetDownloadStateChange(StreamInfo.AUDIO, ConvivaStreamerProxy.DOWNLOADSTATE_ACTIVE);

                // We start with the stream info
                var newInfo /* : StreamInfo */ = _s._stream;
                _s._stream = new StreamInfo(-1, ConvivaContentInfo.NO_RESOURCE, -1, -1, -1);
                _s.SetStream(newInfo);

                // Shouldn't set the Previous Player State on AttachStreamer
                //var newState /* : String */ = _s._playingState;
                _s._playingState = ConvivaStreamerProxy.UNKNOWN;
                //_s.SetPlayingState(newState);
                _s.SetPlayingState(_s._playingState);
                // Need to reset to UNKNOWN by default and all the proxies should take care of Infer Logic

                //TODO: broken imo. If we picked up encoded framerate and then duration, _lastMetadata would only remember duration.
                // Shouldn't set the Previous Content Duration on AttachStreamer
                //var newMetadata /* : Object */ = _s._lastMetadata;
                //_s._lastMetadata = null;
                //_s.SetMetadata(newMetadata);

                // Now pass on all the pending errors, in the order in which we got them. This includes _lastError
                var _for_array_1 =  _s._pendingErrors.Values;
                for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                  var strErr /* : StreamerError */ = _for_array_1[_for_idx_2];

                    _s.SetError(strErr);
                }

                var newStreams /* : ListCS(StreamInfo) */ = _s._availableStreams;
                _s._availableStreams = null;
                _s.SetAvailableStreams(newStreams);

                var newChunkDownloadStatus /* : DownloadStatus */ = (_s._currentLoadingStatus);
                _s._currentLoadingStatus = null;
                _s.SetLoadingStatus(newChunkDownloadStatus);

                var newDisplayWidth /* : int */ = _s._displayWidth;
                var newDisplayHeight /* : int */ = _s._displayHeight;
                _s._displayWidth = -1;
                _s._displayHeight = -1;
                _s.SetDisplaySize(newDisplayWidth, newDisplayHeight);
            }

            previousNotifiers.Add(notifier);
            _s._notifiers = previousNotifiers;
        }


        /// <summary>
        /// GetLoadingStatus :
        ///
        /// Return the ChunkDownloadStatus of the file which is currently being downloaded
        ///
        /// Returns NULL if chunk download is not in progress.
        ///
        /// </summary>

        defPubMeth(_s,"GetLoadingStatus",__GetLoadingStatus);
        function __GetLoadingStatus() /* : DownloadStatus */  {
            return _s._currentLoadingStatus;
        }




        /// <summary>
        /// GetPlayingState :
        /// return the current playing state. One of the playing state constants defined in ConvivaStreamerProxy
        ///
        /// UNKNOWN if unknown.
        /// </summary>
        defPubMeth(_s,"GetPlayingState",__GetPlayingState);
        function __GetPlayingState() /* : String */  {
            return _s._playingState;
        }


        /// <summary>
        /// GetBitrateKbps :
        /// return the bitrate of the currently-playing media (audio + video), in kilo-bits-per-second (i.e. 1000 bits per second).
        ///
        /// When this changes, the "StreamInfoChange" notifier should be called.
        ///
        /// -1 if not available.
        /// </summary>
        defPubMeth(_s,"GetBitrateKbps",__GetBitrateKbps);
        function __GetBitrateKbps() /* : int */  {
            return _s._stream.bitrateKbps;
        }


        /// <summary>
        /// GetResource :
        /// @deprecated
        /// return the current resource
        ///
        /// null if unknown.
        /// </summary>
        defPubMeth(_s,"GetResource",__GetResource);
        function __GetResource() /* : String */  {
            return _s._stream.resource;
        }




        /// <summary>
        /// The current Stream. Do not use this accessor across module boundaries. Use instead the
        /// GetBitrateKbps and GetResource because they return primitive types. You should not
        /// set directly fields of the returned StreamInfo.
        ///
        /// This method will return the primary component of the presentation.  eg if the presentation is composed of Video, audio and text, this API will
        /// return a stream corresponding to the video stream
        /// </summary>
        /// <returns></returns>
        defPubMeth(_s,"GetStream",__GetStream);
        function __GetStream() /* : StreamInfo */  {
            return _s._stream;
        }

        /// <summary>
        /// GetStreams :
        /// This method returns list of Streams which are part of the current presentation.
        /// </summary>
        /// <returns></returns>
        defPubMeth(_s,"GetStreams",__GetStreams);
        function __GetStreams() /* : ArrayCS(StreamInfo) */  {
            return null;
        }




        /// <summary>
        /// GetLastError :
        /// Return the last error, or null, if none
        /// </summary>
        /// <returns></returns>
        defPubMeth(_s,"GetLastError",__GetLastError);
        function __GetLastError() /* : StreamerError */  {
            return _s._lastError;
        }



        /// <summary>
        /// Get the last received metadata, or null if none
        /// </summary>
        /// <returns></returns>
        defPubMeth(_s,"GetLastMetadata",__GetLastMetadata);
        function __GetLastMetadata() /* : Object */  {
            return _s._lastMetadata;
        }





        /// <summary>
        /// GetDisplayWidth :
        /// </summary>
        /// <returns> Returns the last set display width in pixels</returns>
        defPubMeth(_s,"GetDisplayWidth",__GetDisplayWidth);
        function __GetDisplayWidth() /* : Object */  {
            return _s._displayWidth;
        }

        /// <summary>
        /// GetDisplayHeight :
        /// </summary>
        /// <returns> Returns the last set display height in pixels</returns>
        defPubMeth(_s,"GetDisplayHeight",__GetDisplayHeight);
        function __GetDisplayHeight() /* : Object */  {
            return _s._displayHeight;
        }



        /// <summary>
        /// GetStreamerType :
        /// return an identifier for the streamer this is proxying.
        ///
        /// This enables special
        /// switching logic that is particular to the streamer, if there is any. For
        /// example, a chunk-based streamer made by Conviva might identify itself here as
        /// "ConvivaChunkStreamer" so that LivePass can make switching decisions tailored for
        /// that particular streamer. The identifier should be negotatied with Conviva during
        /// integration.
        ///
        /// This should not change throughout the life of this ConvivaStreamerProxy.
        ///
        /// null if the streamer type is not known or does not need to be identified.
        /// </summary>
        defPubMeth(_s,"GetStreamerType",__GetStreamerType);
        function __GetStreamerType() /* : String */  {
            return null;
        }


        /// <summary>
        /// GetLoadedBytes :
        ///
        /// The number of bytes downloaded so far (cumulative, includes the bytes in the buffer) across all resources.
        /// If the upper layers are interested in the bytes loaded per resource, then it is expected to
        /// gather snapshots for every resource change events
        /// @see ConvivaStreamerProxy.REASON_STREAMINFOCHANGE
        /// Null if not available.
        /// </summary>
        defPubMeth(_s,"GetLoadedBytes",__GetLoadedBytes);
        function __GetLoadedBytes() /* : Number */  {
            return -1;
        }


        defPubMeth(_s,"SetDownloadStateChange",__SetDownloadStateChange);
        function __SetDownloadStateChange(type /* : int */, state /* : int */) /* : void */  {
            var downloadStateChange /* : ListCS(int) */ = new ListCS/*int*/();
            downloadStateChange.Add(type);
            downloadStateChange.Add(state);
            var _for_array_1 =  _s._notifiers.Values;
            for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
              var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];

                _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_DOWNLOADSTATECHANGE, downloadStateChange);
            }
        }

        /// <summary>
        /// SetStream :
        /// @deprecated
        /// Set a new resource and bitrate switch. The updatedStream object only needs to
        /// contain the fields that are beings set. Use defaults for the other fields: -2 for bitrateKbps,
        /// and null for the resource.
        /// </summary>
        /// <param name="updatedStream">the updated stream.</param>
        defPubMeth(_s,"SetStream",__SetStream);
        function __SetStream(updatedStream /* : StreamInfo */) /* : void */  {
            // Populate the defaults updatedStream
            if (updatedStream.bitrateKbps <= -2) updatedStream.bitrateKbps = _s._stream.bitrateKbps;
            if (updatedStream.resource == null) updatedStream.resource = _s._stream.resource;
            if (!_s._stream.equals(updatedStream)) {
                var _for_array_1 =  _s._notifiers.Values;
                for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                  var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];

                    _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_STREAMINFOCHANGE, updatedStream);
                }
            }
            _s._stream = updatedStream;
        }

        /// <summary>
        /// SetError :
        /// @deprecated
        /// The streamer proxy should invoke this function whenever an error is encountered.
        ///
        /// For streamers that support Bitrate Switching or CDN Resource Switching, it is especially important to report as many errors
        /// as possible. In particular, any errors that might be resolved by a switch should be reported.
        /// </summary>
        /// <param name="error">An instance of Error must be passed into the callback.
        ///                     The Error instance should be created by calling one of the makeError_* function defined in Error.
        /// </param>
        defPubMeth(_s,"SetError",__SetError);
        function __SetError(error /* : StreamerError */) /* : void */  {

            _s._lastError = error;

            if (_s._notifiers != null && _s._notifiers.Count > 0) {
                var _for_array_1 =  _s._notifiers.Values;
                for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                  var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];

                    _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_ERRORCHANGE, error);
                }
                //Once all the notifiers are notified about the error, remove it from pending error
                _s._pendingErrors.Remove(error);
            } else {
                _s._pendingErrors.Add(error);
            }
        }


        /// <summary>
        /// OnMetadata :
        /// @deprecated
        /// The streamer proxy should invoke the callback whenever metadata is received for the streaming content.
        ///
        /// The metadata object
        ///
        /// If the callback is called multiple times, the most recent value for each key will be used. For
        /// example, calling the callback first with { "duration":"100" } and immediately thereafter with
        /// { "framerate":"30" } is equivalent to calling it once with { "duration":"100", "framerate":"30" }.
        /// </summary>
        /// <param name="metadata"> A dictionary from metadata field names to metadata values.
        ///   The names of the valid keys are defined in ConvivaStreamerProxy as constants.
        ///   Other keys are ignored.
        /// </param>
        defPubMeth(_s,"SetMetadata",__SetMetadata);
        function __SetMetadata(metadata /* : Object */) /* : void */  {

            _s._lastMetadata = metadata;

            if (metadata != null) {
                var _for_array_1 =  _s._notifiers.Values;
                for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                  var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];

                    _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_METADATACHANGE, metadata);
                }
            }

        }



        /// <summary>
        /// @deprecated
        /// The ConvivaStreamerProxy can use this function to add a log message to Conviva LivePass.
        /// </summary>
        /// <param name="message"></param>
        defPubMeth(_s,"Log",__Log);
        function __Log(message /* : String */) /* : void */  {
            var _for_array_1 =  _s._notifiers.Values;
            for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
              var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];

                _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_LOG, message);
            }

        }


        /// <summary>
        /// @deprecated
        /// The ConvivaStreamerProxy can use this function to add an error log message to Conviva LivePass.
        /// </summary>
        /// <param name="message"></param>
        defPubMeth(_s,"LogError",__LogError);
        function __LogError(message /* : String */) /* : void */  {
            var _for_array_1 =  _s._notifiers.Values;
            for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
              var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];

                _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_LOG, "ERROR:" + message);
            }
        }


        //TODO: This feels that it is putting too much burden on the CSP implementor, to keep this much state.
        //      A simpler API that allows the CSP to return only bytes loaded since the last call, might be easier.
        //      An even simpler API where the CSP does not have to keep the data per-resource may be the only
        //      thing that is available.
        //
        /// <summary>
        /// @deprecated use GetLoadedBytes() instead
        /// GetTotalLoadedBytes
        ///
        /// The number of bytes downloaded so far (cumulative, includes the bytes in the buffer),
        /// per resource. The returned dictionary is indexed by resource name. Use a single
        /// entry with key NO_RESOURCE if the implementation does not use resources.
        ///
        /// Null if not available.
        /// </summary>
        defPubMeth(_s,"GetTotalLoadedBytes",__GetTotalLoadedBytes);
        function __GetTotalLoadedBytes() /* : DictionaryCS(string, double) */  {
            return null;
        }


        // --- end deprecated

        /// <summary>
        /// SetLoadingStatus :
        /// Should be called only by subclasses
        /// </summary>
        /// <param name="loadingStatus"></param>

        defPubMeth(_s,"SetLoadingStatus",__SetLoadingStatus);
        function __SetLoadingStatus(loadingStatus /* : DownloadStatus */) /* : void */  {
            _s._currentLoadingStatus = loadingStatus;
            if (loadingStatus != null) {
                var _for_array_1 =  _s._notifiers.Values;
                for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                  var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];

                    _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_LOADINGSTATUSCHANGE, loadingStatus);
                }
            }
        }

        /// <summary>
        /// SetPlayingState:
        /// set the current playing state. Should be used by ConvivaStreamerProxy to update the playing state
        /// and send a notification to LivePass.
        /// @see GetPlayingState()
        /// <param name="newState">the new state (one of the constants defined in ConvivaStreamerProxy)</param>
        /// </summary>
        defPubMeth(_s,"SetPlayingState",__SetPlayingState);
        function __SetPlayingState(newState /* : String */) /* : void */  {

            if (newState != _s._playingState) {
                var _for_array_1 =  _s._notifiers.Values;
                for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                  var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];

                    _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_PLAYINGSTATECHANGE, newState);
                }
            }
            _s._playingState = newState;
        }

        /// <summary>
        /// SetBitrateKbps :
        /// Set the new bitrate (in 1000 bits per second). Use this function when only the bitrate changes. If the resource name
        /// also change, use SetStream instead.
        ///
        /// null if unknown.
        /// </summary>
        defPubMeth(_s,"SetBitrateKbps",__SetBitrateKbps);
        function __SetBitrateKbps(updatedBitrateKbps /* : int */) /* : void */  {
            var updatedStream /* : StreamInfo */ = new StreamInfo(updatedBitrateKbps, null, -1, -1, -1);
            _s.SetStream(updatedStream);
        }

        /// <summary>
        /// SetResource :
        /// @deprecated
        /// Set the new current resource. Use this function when only the resource changes. If the bitrate, or the CDN name
        /// also change, use SetStream instead.
        ///
        /// null if unknown.
        /// </summary>
        defPubMeth(_s,"SetResource",__SetResource);
        function __SetResource(updatedResource /* : String */) /* : void */  {
            var updatedStream /* : StreamInfo */ = new StreamInfo(-2, updatedResource, -1, -1, -1);
            _s.SetStream(updatedStream);
        }

        /// <summary>
        /// Streamer Proxy should invoke this API whenever the display size changes.
        ///
        /// </summary>
        /// <param name="displaySize">  An object which contains a List<int>, the first item being the width in pixels and the next item is the height in pixels</param>
        defPubMeth(_s,"SetDisplaySize",__SetDisplaySize);
        function __SetDisplaySize(displayWidth /* : int */, displayHeight /* : int */) /* : void */  {

            if (displayWidth != -1 && displayHeight != -1) {

                _s._displayWidth = displayWidth;
                _s._displayHeight = displayHeight;

                var displaySize /* DictionaryCS(String, int) */ = new DictionaryCS/* String, int */();
                displaySize.Add("width", displayWidth);
                displaySize.Add("height", displayHeight);
                var _for_array_1 =  _s._notifiers.Values;
                for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                  var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];

                    _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_DISPLAYSIZECHANGE, displaySize);
                }
            }
        }


        /// <summary>
        /// SetAvailableStreams :
        /// Streamer Proxy should invoke this API whenever a new set of tracks (bitrate variants) become available.
        ///
        /// </summary>
        /// <param name="streams"> A List of StreamInfo objects which contains the bitrate variants for each stream in the current presentation.</param>
        defPubMeth(_s,"SetAvailableStreams",__SetAvailableStreams);
        function __SetAvailableStreams(streams /* : ListCS(StreamInfo) */) /* : void */  {
            _s._availableStreams = streams;
            if (streams != null) {
                var _for_array_1 =  _s._notifiers.Values;
                for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                  var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];

                    _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_AVAILABLESTREAMINFOCHANGE, streams);
                }
            }
        }

        /// <summary>
        /// SendEvent:
        /// Send Seek Event. Should be used by ConvivaStreamerProxy to send Seek Event
        /// <param name="type"> Seek Action type pss/pse/bu/bd</param>
        /// <param name="pos"> Seek to Position value, if not available need to be set as -1 by default</param>
        /// </summary>
        defPubMeth(_s,"SendSeekEvent",__SendSeekEvent);
        function __SendSeekEvent(type /* : LivePass.SEEK_ACTIONS_TYPE */, pos /* : int */) /* : void */  {
            var eventAttributes /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
            eventAttributes.SetValue("act", type);
            if(pos >= 0) {
                eventAttributes.SetValue("skto", pos);
            }
            var _for_array_1 =  _s._notifiers.Values;
            for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];
                _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_SEND_SEEK_EVENT, eventAttributes);
            }
        }

        /// <summary>
        /// SetProxyInitialized :
        /// Set the Proxy as initialized
        /// </summary>
        defPubMeth(_s,"SetProxyInitialized",__SetProxyInitialized);
        function __SetProxyInitialized() /* : void */  {
            if (!_s.isProxyInitialized) {
                _s.isProxyInitialized = true;
                var _for_array_1 =  _s._notifiers.Values;
                for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                  var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];

                    _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_PROXYINITIALIZED, null);
                }
            }
        }

        /// <summary>
        /// SetNetworkInfo :
        /// Set the network information if detected from proxy.
        /// properties can be null if unknown.
        /// </summary>
        defPubMeth(_s,"SetNetworkInfo",__SetNetworkInfo);
        function __SetNetworkInfo(networkInfo /* : NetworkInfo */) /* : void */  {
            var _for_array_1 =  _s._notifiers.Values;
            for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                var notifier /* : Function(Action(string, object)) */ = _for_array_1[_for_idx_2];
                _s.notifyListeners(notifier, ConvivaStreamerProxy.REASON_NETWORKINFOCHANGE, networkInfo);
            }
        }

        defPrivMeth(_s,"notifyListeners",__notifyListeners);
        function __notifyListeners(notifier /* : Function(Action(string, object)) */, reason /* : String */, arg /* : Object */) /* : void */  {
            try {
                notifier(reason, arg);
            } catch(e /* : Error */) {
                notifier(ConvivaStreamerProxy.REASON_LOG, "ConvivaStreamerProxy : uncaught exception " + e);
            }
        }

       //JSRENAME:constant:_s:ConvivaStreamerProxy:API_VERSION
       //JSRENAME:constant:_s:ConvivaStreamerProxy:BOOLEAN_FALSE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:BOOLEAN_TRUE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:BOOLEAN_UNAVAILABLE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:BUFFERING
       //JSRENAME:constant:_s:ConvivaStreamerProxy:CAPABILITY_BITRATE_EXTERNAL
       //JSRENAME:constant:_s:ConvivaStreamerProxy:CAPABILITY_BITRATE_METRICS
       //JSRENAME:constant:_s:ConvivaStreamerProxy:CAPABILITY_BITRATE_SWITCHING
       //JSRENAME:constant:_s:ConvivaStreamerProxy:CAPABILITY_CDN_SWITCHING
       //JSRENAME:constant:_s:ConvivaStreamerProxy:CAPABILITY_QUALITY_METRICS
       //JSRENAME:constant:_s:ConvivaStreamerProxy:CAPABILITY_SOURCE_CHUNKED
       //JSRENAME:constant:_s:ConvivaStreamerProxy:CAPABILITY_SOURCE_HTTP
       //JSRENAME:constant:_s:ConvivaStreamerProxy:CAPABILITY_SOURCE_STREAMING
       //JSRENAME:constant:_s:ConvivaStreamerProxy:CAPABILITY_VIDEO
       //JSRENAME:constant:_s:ConvivaStreamerProxy:DOWNLOADSTATE_ACTIVE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:DOWNLOADSTATE_INACTIVE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:ERROR
       //JSRENAME:constant:_s:ConvivaStreamerProxy:METADATA_DURATION
       //JSRENAME:constant:_s:ConvivaStreamerProxy:METADATA_ENCODED_FRAMERATE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:NOT_MONITORED
       //JSRENAME:constant:_s:ConvivaStreamerProxy:PAUSED
       //JSRENAME:constant:_s:ConvivaStreamerProxy:PLAYING
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_AVAILABLESTREAMINFOCHANGE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_DISPLAYSIZECHANGE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_DOWNLOADSTATECHANGE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_ERRORCHANGE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_LOADINGSTATUSCHANGE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_LOG
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_METADATACHANGE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_PLAYINGSTATECHANGE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_PRESENTATION_CHANGE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_PROXYINITIALIZED
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_RESOURCE_ERROR
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_STREAMINFOCHANGE
       //JSRENAME:constant:_s:ConvivaStreamerProxy:STOPPED
       //JSRENAME:constant:_s:ConvivaStreamerProxy:UNKNOWN
       //JSRENAME:constant:_s:ConvivaStreamerProxy:REASON_SEND_SEEK_EVENT
        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(ConvivaStreamerProxy,"ConvivaStreamerProxy");
    // API_EXIT
// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../csClient/CwsClient/LivePass.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-

// Copyright (c) 2011, 2012 Conviva Inc. All Rights Reserved.
// Author: George Necula (necula@conviva.com), Henry Milner (henry@conviva.com), Yan Li (yan@conviva.com)



// namespace

/// @mainpage
/// @author George Necula
/// @author Henry Milner
/// @author Saiguang Che
/// @author Ali Lakhia
/// @author Yan Li
///
/// The top level class for Application interaction with the Conviva client is LivePass.
///
/// The typical sequence of actions taken by the Application are:
/// <ol>
/// <li> Call LivePass.init () to pass some global parameters
/// <li> Optionally call LivePass.sendEvent() to send custom events not related to a particular session
/// <li> Call LivePass.createSession() to create a session tied to one viewing of a resource. The session should
///      be constructed as early as possible in order to compute an accurate join time. The following operations are
///      typical operations that can be performed on a session
///      <ul>
///      <li> LivePass.sendSessionEvent() to send a custom event for this session
///      <li> LivePass.cleanupSession() to destroy the session
///      </ul>
/// </ol>


    /// <summary>
    /// This is the top-level class for Application interaction with the Conviva CWS client.
    /// </summary>
function LivePass() {
    var _s = this;
    var defaultGatewayURLError = false;
    /// SEEK_ACTIONS_TYPE: action type of the event. This is to record the type of the SeekEvent we received.
    LivePass.SEEK_ACTIONS_TYPE = {
         SEEK_START  : "pss", // Player called SeekTo
         SEEK_END    : "pse", // player received SeekEnd
         BUTTON_UP   : "bu",  // User button up the position bar
         BUTTON_DOWN : "bd" };// User button down the position bar

    /// READY : LivePass state is ready for use.
    if(_s == STAT_INIT) LivePass.READY /* : String */ = "READY";


    ///STREAM_SELECTION_SUCC : return code for initial or midstream selection success
    if(_s == STAT_INIT) LivePass.STREAM_SELECTION_SUCC /* : int */ = 0;
    /// STREAM_SELECTION_FAILURE : return code for initial or midstream selection failure
    if(_s == STAT_INIT) LivePass.STREAM_SELECTION_FAILURE /* : int */ = 1;
    /// STREAM_SELECTION_TIMEOUT : return code for initial or midstream selection timeout
    if(_s == STAT_INIT) LivePass.STREAM_SELECTION_TIMEOUT /* : int */ = 2;

    /// Some situations require that bitrate be reported externally and
    /// internal bitrate reporting is ignored.
    /// See createSession() that allows passing in options dictionary
    if(_s == STAT_INIT) LivePass.OPTION_EXTERNAL_BITRATE_REPORTING /* : String */ = "externalBitrateReporting";

    /// state: is LivePass ready?
    if(_s == STAT_INIT) LivePass.readyState /* : Boolean */ = false;

    //@owner
    if(_s == STAT_INIT) LivePass._settings /* : Settings */ = null;

    //@owner
    if(_s == STAT_INIT) LivePass._utils /* : Utils */ = null;
    //@owner
    if(_s == STAT_INIT) LivePass._sessionFactory /* : SessionFactory */ = null;

    //flag indicating if toggleTraces is set in LivePass. Needed if the traces are toggled before LivePass is loaded
    if(_s == STAT_INIT) LivePass._toggleTracesUsed /* : Boolean */ = false;
    //the set value of toggleTraces
    if(_s == STAT_INIT) LivePass._toggleTracesValue /* : Boolean */ = false;

    // The id of the global session. -1 if not yet created.
    if(_s == STAT_INIT) LivePass._globalSessionId /* : int */ = -1;

    /// <summary>
    /// init : initialize the LivePass module
    ///
    /// see Conviva integration guide for details of how to use this method.
    /// </summary>
    /// <param name="customerKey">a key assigned by Conviva to uniquely identify a Conviva customer</param>
    defStatMeth(_s,LivePass,"init",__init);
    function __init(customerKey /* : String */) /* : void */  {
        if (LivePass.readyState) {
            LivePass._utils.log("LivePass.init(): already initialized.");
            return;
        }
        if (LivePass._utils == null) {
            // Retrieve, or create Utils object.
            // Needs to happen early to enable logging capabilities.
            LivePass._utils = Utils.CreateUtils(null);
        }
        if (customerKey == null || customerKey.length == 0) {
            LivePass._utils.err("LivePass.init(): invalid customerKey: " + customerKey);
            return;
        }
        LivePass._utils.runProtectedSync(
            function () {
                LivePass._settings = LivePass._utils.getSettings();
                // Alban: prevents conflicts when passing settings.enableLogging to initWithSettings
                if (LivePass._toggleTracesUsed) {
                    LivePass._settings.enableLogging = LivePass._toggleTracesValue;
                }

                // Gateways expect instanceId to be an unsigned int.
                LivePass._settings.clientInstanceId = LivePass._utils.randUInt();

                LivePass._settings.customerKey = customerKey;
                LivePass._settings.gatewayUrl = parseUrl(LivePass._settings.gatewayUrl);
                if(defaultGatewayURLError) {
                    LivePass._utils.log("Gateway URL should not be set to https://cws.conviva.com or http://cws.conviva.com,therefore this call ignored");
                }
                LivePass._utils.log("LivePass.init(): url=" + LivePass._settings.gatewayUrl + " customerKey=" + LivePass._settings.customerKey);
                LivePass._utils.startFetchClientId();
                PlayerStates.init();
                LivePass._sessionFactory = new SessionFactory();
                LivePass.readyState = true;
                LivePass._utils.log("LivePass.init(): done.");
                LivePass.networkInfo = new NetworkInfo();// Create network info instance to collect network information
             }, "LivePass.init");
    }


    /// <summary>
    /// initWithSettings : initialize LivePass, with advanced settings parameters.
    /// This function should be used only under guidance from Conviva.
    /// </summary>
    /// <param name="customerKey">a key assigned by Conviva to uniquely identify a Conviva customer </param>
    /// <param name="settings">a dictionary with string keys and object values</param>
    defStatMeth(_s,LivePass,"initWithSettings",__initWithSettings);
    function __initWithSettings(customerKey /* : String */, settings /* : Object */) /* : void */  {
        /* We prefer to bundle the settings with the init, to ensure that the settings take effect
         * as soon as possible, without possibility of interleaving other work between settings and init.
         */
        if (LivePass.readyState) {
            LivePass._utils.log("LivePass.initWithSettings(): already initialized.");
            return;
        }
        if(settings.gatewayUrl == 'http://cws.conviva.com' || settings.gatewayUrl == 'https://cws.conviva.com') {
            defaultGatewayURLError = true;
        }
        LivePass._utils = Utils.CreateUtils(settings); // update the settings
        LivePass.init(customerKey);
    }


    /// <summary>
    /// cleanup : method to clean up the LivePass when exiting.
    /// </summary>
    defStatMeth(_s,LivePass,"cleanup",__cleanup);
    function __cleanup() /* : void */  {
        if (LivePass._utils != null) {
            LivePass._utils.runProtected(
                function () {
                    LivePass._utils.log("LivePass.cleanup()");
                    if (LivePass._sessionFactory != null) {
                        LivePass._sessionFactory.cleanup(); // Cleans up all sessions, too.
                    }
                    LivePass._sessionFactory = null;
                    LivePass._globalSessionId  = -1;
                    if (LivePass._utils != null) {
                        LivePass._utils.cleanup();
                    }
                    LivePass._utils = null;
                    LivePass._settings = null;
                }, "LivePass.cleanup");
        }
        LivePass.readyState = false;
    }

    /// <summary>
    /// createSession : Create a monitoring session, without Conviva PreCision control.
    ///
    /// Please refer to Conviva integration guide for more details and examples.
    /// </summary>
    /// <param name="streamer"> a streamer or a ConvivaStreamerProxy object for this session</param>
    /// <param name="contentInfo"> the ConvivaContentInfo object used for this session</param>
    /// <param name="options"> an object specifying special options used for this session</param>
    defStatMeth(_s,LivePass,"createSession",__createSession);
    function __createSession(streamer /* : Object */, contentInfo /* : ConvivaContentInfo */, options /* : Object */) /* : int */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.createSession before LivePass.init");
            return -1;
        }
        return LivePass.createSessionWithGlobal(streamer, contentInfo, options, false, LivePass.networkInfo);
    }

    /// <summary>
    /// createSessionWithGlobal: Create a global or video monitoring session, without Conviva PreCision control.
    /// </summary>
    /// <param name="streamer"> a streamer or a ConvivaStreamerProxy object for this session</param>
    /// <param name="contentInfo"> the ConvivaContentInfo object used for this session</param>
    /// <param name="options"> an object specifying special options used for this session</param>
    /// <param name="global"> whether the session is global or not</param>
    /// <param name="networkInfo"> whether the session is global or not</param>
    defStatMeth(_s,LivePass,"createSessionWithGlobal",__createSessionWithGlobal);
    function __createSessionWithGlobal(streamer /* : Object */, contentInfo /* : ConvivaContentInfo */, options /* : Object */, global /* : Boolean */, networkInfo /* NetworkInfo */) /* : int */  {
        // We generate the session id outside runProtected because the latter may be asynchronous
        var sid /* : int */ = LivePass._sessionFactory.newSessionId();
        LivePass._utils.runProtected(
            function () {
                var session /* : Session */ = LivePass._sessionFactory.makeSession(streamer, contentInfo, options, sid, global, networkInfo);
            }, "LivePass.createSession");
        return sid;
    }

    /// <summary>
    /// reportError : manual error reporting
    /// </summary>
    /// <param name="sessionId">The session identifier</param>
    /// <param name="errorMsg">The error message to be reported to the backend</param>
    /// <param name="errorSeverity">The error severity to be reported to the backend</param>
    defStatMeth(_s,LivePass,"reportError",__reportError);
    function __reportError(sessionId /* : int */, errorMsg /* : String */, errorSeverity /* enum */) /* : void */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.reportError before LivePass.init");
            return;
        }
        if (errorSeverity === undefined) {  // Backward compatibility
            errorSeverity = StreamerError.SEVERITY_FATAL;
        }
        if (errorSeverity !== StreamerError.SEVERITY_FATAL &&
            errorSeverity !== StreamerError.SEVERITY_WARNING) {
            LivePass._utils.log("LivePass.reportError(): invalid errorSeverity parameter: " + errorSeverity);
            return;
        }
        LivePass._utils.runProtected(
            function () {
                var session /* : Session */ = LivePass._sessionFactory.getSession(sessionId);
                if (session != null) {
                    session.reportError(StreamerError.makeUnscopedError(errorMsg, errorSeverity));
                }
            }, "LivePass.reportError");
    }

    /// <summary>
    /// setBitrate : manual bitrate reporting
    ///
    /// To use this method, session should be created with the options parameter
    /// LivePass.OPTION_EXTERNAL_BITRATE_REPORTING set to true.
    /// </summary>
    /// <param name="sessionId">The session identifier</param>
    /// <param name="bitrateKbps">A positive value for the bitrate to be reported to the backend, in Kbps.</param>
    defStatMeth(_s,LivePass,"setBitrate",__setBitrate);
    function __setBitrate(sessionId /* : int */, bitrateKbps /* : int */) /* : void */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.setBitrate before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function () {
                var session /* : Session */ = LivePass._sessionFactory.getSession(sessionId);
                if (session != null) {
                    session.setBitrate(bitrateKbps);
                }
            }, "LivePass.setBitrate");
    }

    /// <summary>
    /// setCurrentStreamMetadata : Set various metadata parameters for the stream
    /// The metadata object should be a dictionary from metadata field names to metadata values (as strings).
    /// The names of the valid keys are defined in ConvivaStreamerProxy as constants:
    ///  - duration  (duration of the stream in seconds)
    ///  - framerate (encoded framerate)
    /// Other keys are ignored.
    ///
    /// If the callback is called multiple times, the most recent value for each key will be used. For
    /// example, calling the callback first with { "duration":"100" } and immediately thereafter with
    /// { "framerate":"30" } is equivalent to calling it once with { "duration":"100", "framerate":"30" }.
    /// </summary>
    /// <param name="sessionId">The session identifier</param>
    /// <param name="metadata">The new metadata</param>
    defStatMeth(_s,LivePass,"setCurrentStreamMetadata",__setCurrentStreamMetadata);
    function __setCurrentStreamMetadata(sessionId /* : int */, metadata /* : Object */) /* : void */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.setCurrentStreamMetadata before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function () {
                var session /* : Session */ = LivePass._sessionFactory.getSession(sessionId);
                if (session != null) {
                    session.setCurrentStreamMetadata(metadata);
                }
            }, "LivePass.setCurrentStreamMetadata");
    }

    /// <summary>
    /// updateContentMetedata : Set the changed metadata items for the session
    /// </summary>
    /// <param name="sessionId">The session identifier</param>
    /// <param name="metadata">The new metadata JSON</param>
    defStatMeth(_s,LivePass,"updateContentMetadata",__updateContentMetadata);
    function __updateContentMetadata(sessionId /* : int */, metadata /* : Object */) /* : void */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.updateContentMetadata before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function () {
                var session /* : Session */ = LivePass._sessionFactory.getSession(sessionId);
                if (session != null) {
                    session.updateContentMetadata(metadata);
                }
            }, "LivePass.updateContentMetadata");
    }

    /// <summary>
    /// Pause session monitoring with specified id such that it can be resumed later
    /// Note: the existing streamer is detached from the session
    /// See resumeSession()
    /// </summary>
    /// <param name="sessionId">The session identifier</param>
    defStatMeth(_s,LivePass,"detachStreamer",__detachStreamer);
    function __detachStreamer(sessionId /* : int */) /* : void */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.detachStreamer before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function () {
                var session /* : Session */ = LivePass._sessionFactory.getSession(sessionId);
                if (session != null) {
                    session.detachStreamer();
                }
            }, "LivePass.detachStreamer");
    }

    /// <summary>
    /// Attach streamer to session identified by the session id
    /// See createSession()
    /// </summary>
    /// <param name="sessionId">The session identifier</param>
    /// <param name="streamer">The streamer to be attached to the session</param>
    defStatMeth(_s,LivePass,"attachStreamer",__attachStreamer);
    function __attachStreamer(sessionId /* : int */, streamer /* : Object */) /* : void */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.attachStreamer before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function () {
                var session /* : Session */ = LivePass._sessionFactory.getSession(sessionId);
                if (session != null) {
                    session.attachStreamer(streamer);
                }
            }, "LivePass.attachStreamer");
    }


    /// <summary>
    /// This function is used to send Conviva Player Insights Event, associated with a session.
    /// Events have a name and a list of key value pair as event attributes.
    ///
    /// </summary>
    /// <param name="sessionId"> returned by the createSession, createPrecisionSession </param>
    /// <param name="eventName"> a name for the event </param>
    /// <param name="eventAttributes"> a dictionary of key value pair associated with the event </param>
    defStatMeth(_s,LivePass,"sendSessionEvent",__sendSessionEvent);
    function __sendSessionEvent(sessionId /* : int */, eventName /* : String */, eventAttributes /* : Object */) /* : void */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.sendSessionEvent before LivePass.init");
            return;
        }
        // DE-2668: Ignore the sendSessionEvent if EventName is null which is mandatory field
        if (eventName == null) {
            LivePass._utils.err("LivePass.sendSessionEvent call is ignored as eventName is null");
            return;
        }
        var eventAttrDictCS /* : DictionaryCS(string, object) */ = Lang.DictionaryFromRepr/*string, string*/(eventAttributes);
        LivePass._utils.runProtected(
            function () {
                var session /* : Session */ = LivePass._sessionFactory.getSession(sessionId);
                if (session != null) {
                    session.sendCustomEvent(eventName, eventAttrDictCS);
                }
            }, "LivePass.sendSessionEvent");
    }


    /// <summary>
    /// This function is used to send Conviva Player Insights Event, not assocated with a video session
    /// Events have a name and a list of key value pair as event attributes.
    ///
    /// </summary>
    /// <param name="eventName"> a name for the event </param>
    /// <param name="eventAttributes"> a dictionary of key value pair associated with the event </param>
    defStatMeth(_s,LivePass,"sendEvent",__sendEvent);
    function __sendEvent(eventName /* : String */, eventAttributes /* : Object */) /* : void */  {

        if (!LivePass.readyState) {
            LivePass.ping("LivePass.sendEvent before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function () {
                // Have we created the global session already ?
                if (LivePass._globalSessionId < 0) {
                    var cci /* : ConvivaContentInfo */ = new ConvivaContentInfo("", new DictionaryCS/*<string,string>*/ ());
                    LivePass._globalSessionId = LivePass.createSessionWithGlobal(null, cci, null, true);
                }
                LivePass.sendSessionEvent(LivePass._globalSessionId, eventName, eventAttributes);
            }, "LivePass.sendEvent"
        );

    }

    /// <summary>
    /// This function is used to send Conviva Player the Seek Start Event associated with a video session
    ///
    /// </summary>
    /// <param name="sessionId"> id returned by the createSession </param>
    /// <param name="seekToPos"> Position to which seek is requested. If not available need to set to -1 </param>
    defStatMeth(_s,LivePass,"setPlayerSeekStart",__setPlayerSeekStart);
    function __setPlayerSeekStart(sessionId /* : int */, seekToPos /* : int */) /* : void */  {
        if(!LivePass.readyState) {
            LivePass.ping("LivePass.setPlayerSeekStart before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function() {
                var session = LivePass._sessionFactory.getSession(sessionId);
                if(session != null) {
                    session.sendSeekEvent(LivePass.SEEK_ACTIONS_TYPE.SEEK_START, seekToPos);
                }
             }, "LivePass.setPlayerSeekStart"
         );
    }

    /// <summary>
    /// This function is used to send Conviva Player the Seek End Event associated with a video session
    ///
    /// </summary>
    /// <param name="sessionId"> id returned by the createSession </param>
    defStatMeth(_s,LivePass,"setPlayerSeekEnd",__setPlayerSeekEnd);
    function __setPlayerSeekEnd(sessionId /* : int */) /* : void */  {
        if(!LivePass.readyState) {
            LivePass.ping("LivePass.setPlayerSeekEnd before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function() {
                var session = LivePass._sessionFactory.getSession(sessionId);
                if(session != null) {
                    session.sendSeekEvent(LivePass.SEEK_ACTIONS_TYPE.SEEK_END, -1);
                }
             }, "LivePass.setPlayerSeekEnd"
         );
    }

    /// <summary>
    /// This function is used to send Conviva Player the Button Up Event associated with a video session
    ///
    /// </summary>
    /// <param name="sessionId"> id returned by the createSession </param>
    defStatMeth(_s,LivePass,"setUserSeekButtonUp",__setUserSeekButtonUp);
    function __setUserSeekButtonUp(sessionId /* : int */) /* : void */  {
        if(!LivePass.readyState) {
            LivePass.ping("LivePass.setUserSeekButtonUp before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function(){
                var session = LivePass._sessionFactory.getSession(sessionId);
                if(session != null) {
                    session.sendSeekEvent(LivePass.SEEK_ACTIONS_TYPE.BUTTON_UP, -1);
                }
             }, "LivePass.setUserSeekButtonUp"
         );
    }

    /// <summary>
    /// This function is used to send Conviva Player the Button Down Event associated with a video session
    ///
    /// </summary>
    /// <param name="sessionId"> id returned by the createSession </param>
    defStatMeth(_s,LivePass,"setUserSeekButtonDown",__setUserSeekButtonDown);
    function __setUserSeekButtonDown(sessionId /* : int */) /* : void */  {
        if(!LivePass.readyState) {
            LivePass.ping("LivePass.setUserSeekButtonDown before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function() {
                var session = LivePass._sessionFactory.getSession(sessionId);
                if(session != null) {
                    session.sendSeekEvent(LivePass.SEEK_ACTIONS_TYPE.BUTTON_DOWN, -1);
                }
             }, "LivePass.setUserSeekButtonDown"
         );
    }

    /// <summary>
    /// cleanupSession : should be called when a video session is over and to be cleaned up.
    ///
    /// </summary>
    /// <param name="sessionId"> id returned by the createSession, createPrecisionSession </param>
    defStatMeth(_s,LivePass,"cleanupSession",__cleanupSession);
    function __cleanupSession(sessionId /* : int */) /* : void */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.cleanupSession before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function () {
                LivePass._sessionFactory.cleanupSession(sessionId);
            }, "Livepass.cleanupSession");
    }

    /// <summary>
    /// @deprecated: shouldn't be up to customer.
    /// Suspend the accumulation of join time. Use, e.g., when an ad is starting and the time should not
    /// be counted as part of the join time.
    /// </summary>
    /// <param name="sessionId">The session identifier</param>
    defStatMeth(_s,LivePass,"pauseJoinTime",__pauseJoinTime);
    function __pauseJoinTime(sessionId /* : int */) /* : void */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.pauseJoinTime before LivePass.init");
            return;
        }
        LivePass.adStart(sessionId);
    }

    /// <summary>
    /// @deprecated: shouldn't be up to customer.
    /// Resume the accumulation of join time.
    /// </summary>
    /// <param name="sessionId">The session identifier</param>
    defStatMeth(_s,LivePass,"resumeJoinTime",__resumeJoinTime);
    function __resumeJoinTime(sessionId /* : int */) /* : void */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.resumeJoinTime before LivePass.init");
            return;
        }
        LivePass.adEnd(sessionId);
    }

    /// <summary>
    /// Notifies our library that an ad is about to be played.
    /// </summary>
    /// <param name="sessionId">The session identifier</param>
    defStatMeth(_s,LivePass,"adStart",__adStart);
    function __adStart(sessionId /* : int */) /* : void */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.adStart before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function () {
                var session /* : Session */ = LivePass._sessionFactory.getSession(sessionId);
                if (session != null) {
                    session.adStart();
                }
            }, "LivePass.adStart");
    }

    /// <summary>
    /// Notifies our library that an ad is over.
    /// </summary>
    /// <param name="sessionId">The session identifier</param>
    defStatMeth(_s,LivePass,"adEnd",__adEnd);
    function __adEnd(sessionId /* : int */) /* : void */  {
        if (!LivePass.readyState) {
            LivePass.ping("LivePass.adEnd before LivePass.init");
            return;
        }
        LivePass._utils.runProtected(
            function () {
                var session /* : Session */ = LivePass._sessionFactory.getSession(sessionId);
                if (session != null) {
                    session.adEnd();
                }
            }, "LivePass.adEnd");
    }

    /// <summary>
    /// Toggle on/off console traces.
    /// </summary>
    /// <param name="b"> true if enble console trace. false otherwise </param>
    defStatMeth(_s,LivePass,"toggleTraces",__toggleTraces);
    function __toggleTraces(b /* : Boolean */) /* : void */  {
        // We cannot use _utils.runProtected because this function can be used before we LivePass.init
        // Fortunately, there is not much that can go wrong in this function, but be extra careful.
        LivePass._toggleTracesUsed = true;
        if (LivePass._settings != null) {
            LivePass._settings.enableLogging = b;
        } else {
            LivePass._toggleTracesValue = b;
        }
    }

    /// <summary>
    /// Set network connection type. Has to be used after initializing LivePass
    /// </summary>
    /// <param name="ct"> String </param>
    defStatMeth(_s,LivePass,"setConnectionType",__setConnectionType);
    function __setConnectionType(ct /* : String */) /* : void */  {
        if (LivePass.networkInfo != null) {
            LivePass.networkInfo.connectionType = ct;
            LivePass._utils.runProtected(
            function () {
                // DE-2668: Invoke CwsStateChangeEvent for all the active sessions using current LivePassInstance
                if (LivePass._sessionFactory != null && LivePass._sessionFactory._sessionsById != null) {
                    var _for_array_1 =  LivePass._sessionFactory._sessionsById.KeyValuePairs;
                    for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                      var sessionPair /* : KeyValuePairCS */ = _for_array_1[_for_idx_2];

                        var session /* : Session */ = sessionPair.Value;
                        if (session != null) {
                            // DE-2668: Removed unwanted argument as networkInfo is directly udpated
                            session.setConnectionType();
                        }
                    }
                }
            }, "LivePass.setConnectionType");
        }
    }

    /// <summary>
    /// Set network SSID or friendly name. Has to be used after initializing LivePass
    /// </summary>
    /// <param name="ssid"> String </param>
    //DE-2592:: SSID may be considered PII based on US federal law (Video Privacy Protection Act)
    /*defStatMeth(_s,LivePass,"setSsid",__setSsid);
    function __setSsid(ssid /* : String ) /* : void   {
        if (LivePass.networkInfo != null) {
            LivePass.networkInfo.ssid = ssid;
            //Report change to monitor to raise statechangeevent
            LivePass._utils.runProtected(
            function () {
                var session /* : Session  = LivePass._sessionFactory.getSession(LivePass._sessionFactory.lastSessionId);
                if (session != null) {
                    session.setSsid(ssid);
                }
            }, "LivePass.setSsid");
        }
    }*/

    /// <summary>
    /// Set Signal Strength. Has to be used after initializing LivePass
    /// </summary>
    /// <param name="ss"> Double </param>
    defStatMeth(_s,LivePass,"setSignalStrength",__setSignalStrength);
    function __setSignalStrength(ss /* : double */) /* : void */  {
        if (LivePass.networkInfo != null) {
            LivePass.networkInfo.signalStrength = ss;
            //Report change to monitor to raise statechangeevent
            LivePass._utils.runProtected(
            function () {
                // DE-2668: Invoke CwsStateChangeEvent for all the active sessions using current LivePassInstance
                if (LivePass._sessionFactory != null && LivePass._sessionFactory._sessionsById != null) {
                    var _for_array_1 =  LivePass._sessionFactory._sessionsById.KeyValuePairs;
                    for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                      var sessionPair /* : KeyValuePairCS */ = _for_array_1[_for_idx_2];

                        var session /* : Session */ = sessionPair.Value;
                        if (session != null) {
                            // DE-2668: Removed unwanted argument as networkInfo is directly udpated
                            session.setSignalStrength();
                        }
                    }
                }
            }, "LivePass.setSignalStrength");
        }
    }

    /// <summary>
    /// Set network connection type. Has to be used after creating session
    /// </summary>
    /// <param name="le"> String </param>
    defStatMeth(_s,LivePass,"setLinkEncryption",__setLinkEncryption);
    function __setLinkEncryption(le /* : double */) /* : void */  {
        if (LivePass.networkInfo != null) {
            LivePass.networkInfo.linkEncryption = le;
            //Report change to monitor to raise statechangeevent
            LivePass._utils.runProtected(
            function () {
                // DE-2668: Invoke CwsStateChangeEvent for all the active sessions using current LivePassInstance
                if (LivePass._sessionFactory != null && LivePass._sessionFactory._sessionsById != null) {
                    var _for_array_1 =  LivePass._sessionFactory._sessionsById.KeyValuePairs;
                    for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                      var sessionPair /* : KeyValuePairCS */ = _for_array_1[_for_idx_2];

                        var session /* : Session */ = sessionPair.Value;
                        if (session != null) {
                            // DE-2668: Removed unwanted argument as networkInfo is directly udpated
                            session.setLinkEncryption();
                        }
                    }
                }
            }, "LivePass.setLinkEncryption");
        }
    }

    /// <summary>
    /// Only send ping if the _utils object has been initialized.
    ///
    /// </summary>
    defStatMeth(_s,LivePass,"ping",__ping);
    function __ping(msg /* : String */) /* : void */  {
        if (LivePass._utils != null) {
            LivePass._utils.ping(msg);
        }
    }
    // Internal
    var parseUrl = function (url) {
        var parser = new URL(url);
        if(!(parser.host == "cws.conviva.com")) {
            return url;
        }
        else {
            return (parser.protocol + "//" + LivePass._settings.customerKey+ "." + "cws.conviva.com");
        }
    }
       //JSRENAME:constant:_s:LivePass:OPTION_EXTERNAL_BITRATE_REPORTING
       //JSRENAME:constant:_s:LivePass:READY
       //JSRENAME:constant:_s:LivePass:STREAM_SELECTION_FAILURE
       //JSRENAME:constant:_s:LivePass:STREAM_SELECTION_SUCC
       //JSRENAME:constant:_s:LivePass:STREAM_SELECTION_TIMEOUT
}
statInit(LivePass,"LivePass");
// Copyright (c) 2017 Conviva Inc. All Rights Reserved.
// Author: Kedar Marsada (kmarsada@conviva.com)

///<summary>
/// Encapsulates all the information required to report network related metadata
/// Currently, browsers cannot provide these values. Collect from customer directly.
/// If available, fetch from monitor in constructor and populate.
///</summary>
function NetworkInfo() {
    var _s = this;
    ///////////////////////////////////////////////////////////////////////
    // Begin public fields
    ///////////////////////////////////////////////////////////////////////

    /// <summary>
    /// A string representing connection type
    /// Primary acceptable values: "802.11 a", "802.11b", "802.11n", "802.11g", "LTE" (band values), If not possible, then use secondary values
    /// Secondary acceptable values:Ethernet, Wifi, 2G, 3G, 4G, OTHER
    /// </summary>
    if(_s != STAT_INIT) _s.connectionType /* : String */ = undefined;

    /// <summary>
    /// A string representing Wi-fi SSID or Wi-fi network friendly name
    /// </summary>
    // SSID may be considered PII based on US federal law (Video Privacy Protection Act). Commenting until further notice.
    //if(_s != STAT_INIT) _s.ssid /* : String */ = undefined;

    /// <summary>
    /// A double value representing network signal strength
    /// Signal strength is represented in -dBm format (0 to -100). This is the power ratio in decibels (dB) of the measured power referenced to one milliwatt
    /// </summary>
    if(_s != STAT_INIT) _s.signalStrength /* : double */ = 1.0;

    /// <summary>
    /// A string representing Link encryption support
    /// Wireless networks are designed to provide enhanced security using privacy profiles. This metadata item detects if such profile is available in the end-user's platform.
    /// Possible primary values - WEP, WEP2 etc.
    /// Possible secondary values - "Yes", "No"
    /// </summary>
    if(_s != STAT_INIT) _s.linkEncryption /* : String */ = undefined;

    ///////////////////////////////////////////////////////////////////////
    // End public fields
    ///////////////////////////////////////////////////////////////////////


    ///<summary>
    ///Create a new NetworkInfo for current device
    /// </summary>
    function _constr(ctype /* String */, ss /* double */, le /* String */) {
        _s.connectionType = ctype;
        //DE-2592
        //_s.ssid = ssid;
        _s.linkEncryption = le;
        _s.signalStrength = ss;
    }
    
    defPubMeth(_s,"GetConnectionType",__GetConnectionType);
    function __GetConnectionType() /* : void */  {
        return _s.connectionType;
    }

    //DE-2592
    /*defPubMeth(_s,"GetSsid",__GetSsid);
    function __GetSsid() /* : void   {
        return _s.ssid;
    }*/
    
    defPubMeth(_s,"GetSignalStrength",__GetSignalStrength);
    function __GetSignalStrength() /* : void */  {
        return _s.signalStrength;
    }
    
    defPubMeth(_s,"GetLinkEncryption",__GetLinkEncryption);
    function __GetLinkEncryption() /* : void */  {
        return _s.linkEncryption;
    }
    if(_s != STAT_INIT) _constr.apply(_s, arguments);
}
statInit(NetworkInfo,"NetworkInfo");// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../csClient/CwsClient/PlayerStates.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-


// namespace 
    function PlayerStates() {
        var _s = this;
        // Expose the mapping from stateToInt, as a way to expose the set of states
        if(_s == STAT_INIT) PlayerStates.stateToInt /* : DictionaryCS(string, int) */ = null;

        if(_s == STAT_INIT) PlayerStates.intToState /* : DictionaryCS(int, string) */ = null;

        // ALBAN: This state is deprecated in CWS
        // However this code is shared with LivePass
        // So it will remain here for the time being
        if(_s == STAT_INIT) PlayerStates.UNINITIALIZED /* : String */ = "UNINITIALIZED";
        if(_s == STAT_INIT) PlayerStates.eUninitialized /* : int */ = 0;

        if(_s == STAT_INIT) PlayerStates.PLAYING /* : String */ = "PLAYING";
        if(_s == STAT_INIT) PlayerStates.ePlaying /* : int */ = 3;
        if(_s == STAT_INIT) PlayerStates.STOPPED /* : String */ = "STOPPED";
        if(_s == STAT_INIT) PlayerStates.eStopped /* : int */ = 1;
        if(_s == STAT_INIT) PlayerStates.PAUSED /* : String */ = "PAUSED";
        if(_s == STAT_INIT) PlayerStates.ePaused /* : int */ = 12;
        if(_s == STAT_INIT) PlayerStates.BUFFERING /* : String */ = "BUFFERING";
        if(_s == STAT_INIT) PlayerStates.eBuffering /* : int */ = 6;
        if(_s == STAT_INIT) PlayerStates.NOT_MONITORED /* : String */ = "NOT_MONITORED";
        if(_s == STAT_INIT) PlayerStates.eNotMonitored /* : int */ = 98;
        if(_s == STAT_INIT) PlayerStates.UNKNOWN /* : String */ = "UNKNOWN";
        if(_s == STAT_INIT) PlayerStates.eUnknown /* : int */ = 100;

        defStatMeth(_s,PlayerStates,"init",__init);
        function __init() /* : void */  {
            PlayerStates.stateToInt = new DictionaryCS/*<string, int>*/(); 
            PlayerStates.intToState = new DictionaryCS/*<int,string>*/ ();
            PlayerStates.stateToInt.SetValue(PlayerStates.UNINITIALIZED, PlayerStates.eUninitialized); PlayerStates.intToState.SetValue(PlayerStates.eUninitialized, PlayerStates.UNINITIALIZED);
            PlayerStates.stateToInt.SetValue(PlayerStates.PLAYING, PlayerStates.ePlaying); PlayerStates.intToState.SetValue(PlayerStates.ePlaying, PlayerStates.PLAYING);
            PlayerStates.stateToInt.SetValue(PlayerStates.STOPPED, PlayerStates.eStopped); PlayerStates.intToState.SetValue(PlayerStates.eStopped, PlayerStates.STOPPED);
            PlayerStates.stateToInt.SetValue(PlayerStates.PAUSED, PlayerStates.ePaused); PlayerStates.intToState.SetValue(PlayerStates.ePaused, PlayerStates.PAUSED);
            PlayerStates.stateToInt.SetValue(PlayerStates.BUFFERING, PlayerStates.eBuffering); PlayerStates.intToState.SetValue(PlayerStates.eBuffering, PlayerStates.BUFFERING);
            PlayerStates.stateToInt.SetValue(PlayerStates.NOT_MONITORED, PlayerStates.eNotMonitored); PlayerStates.intToState.SetValue(PlayerStates.eNotMonitored, PlayerStates.NOT_MONITORED);
            PlayerStates.stateToInt.SetValue(PlayerStates.UNKNOWN, PlayerStates.eUnknown); PlayerStates.intToState.SetValue(PlayerStates.eUnknown, PlayerStates.UNKNOWN);
        }

        defStatMeth(_s,PlayerStates,"stringToInt",__stringToInt);
        function __stringToInt(stateStr /* : String */) /* : int */  {
            if (PlayerStates.stateToInt == null) {
                PlayerStates.init();
            }
            if (PlayerStates.stateToInt.ContainsKey(stateStr)) {
                return PlayerStates.stateToInt.GetValue(stateStr);
            } else {
                return PlayerStates.eUnknown;
            }
        }

        defStatMeth(_s,PlayerStates,"intToString",__intToString);
        function __intToString(stateInt /* : int */) /* : String */  {
            if (PlayerStates.intToState == null) {
                PlayerStates.init();
            }
            if (PlayerStates.intToState.ContainsKey(stateInt)) {
                return PlayerStates.intToState.GetValue(stateInt);
            } else {
                return PlayerStates.UNKNOWN;
            }
        }

        defStatMeth(_s,PlayerStates,"cleanup",__cleanup);
        function __cleanup() /* : void */  {
            PlayerStates.stateToInt = null;
        }
       //JSRENAME:constant:_s:PlayerStates:BUFFERING
       //JSRENAME:constant:_s:PlayerStates:NOT_MONITORED
       //JSRENAME:constant:_s:PlayerStates:PAUSED
       //JSRENAME:constant:_s:PlayerStates:PLAYING
       //JSRENAME:constant:_s:PlayerStates:STOPPED
       //JSRENAME:constant:_s:PlayerStates:UNINITIALIZED
       //JSRENAME:constant:_s:PlayerStates:UNKNOWN
       //JSRENAME:constant:_s:PlayerStates:eBuffering
       //JSRENAME:constant:_s:PlayerStates:eNotMonitored
       //JSRENAME:constant:_s:PlayerStates:ePaused
       //JSRENAME:constant:_s:PlayerStates:ePlaying
       //JSRENAME:constant:_s:PlayerStates:eStopped
       //JSRENAME:constant:_s:PlayerStates:eUninitialized
       //JSRENAME:constant:_s:PlayerStates:eUnknown
    }
statInit(PlayerStates,"PlayerStates");

// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../csClient/CwsClient/StreamInfo.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-

// Copyright (c) 2011, 2012 Conviva Inc. All Rights Reserved.
// Author: George Necula (necula@conviva.com), Henry Milner (henry@conviva.com), Yan Li (yan@conviva.com)

// NOTE: This class is shared between the CWS client and the LivePass client



// namespace 
    // API_ENTER

    /// <summary>
    /// A stream to which a ConvivaStreamerProxy can potentially switch.
    /// This object contains no information about the actual URL of the stream it represents.
    /// </summary>
    function StreamInfo() {
        var _s = this;

        /// <summary>
        /// Construct a stream having bitrate <paramref name="bitrate"/> in kilo-bits-per-second and streaming
        /// from a resource named <paramref name="resource"/>.

        /// Stream Types
        /// Undetected stream type
        if(_s == STAT_INIT) StreamInfo.UNKNOWN /* : int */ = -1;
        
        /// Stream type Audio
        if(_s == STAT_INIT) StreamInfo.AUDIO /* : int */ = 0;

        /// Stream type Video
        if(_s == STAT_INIT) StreamInfo.VIDEO /* : int */ = 1;

        /// Stream type Text
        if(_s == STAT_INIT) StreamInfo.TEXT /* : int */ = 2;

        /// Stream type resource
        if(_s == STAT_INIT) StreamInfo.RESOURCE /* : int */ = 3;

        /// <summary>
        /// Unknown resource string.
        /// </summary>
        if(_s == STAT_INIT) StreamInfo.UNKNOWN_RESOURCE /* : String */ = "";

        /// <summary>
        /// A large value standing for no bit-rate cap
        /// </summary>
        if(_s == STAT_INIT) StreamInfo.MAX_BITRATE /* : int */ = 2147483647; // Int32.MaxValue

        /// TODO Manifest
        /// <summary>
        /// Stream type (eg. StreamInfo::AUDIO, StreamInfo::VIDEO, StreamInfo::TEXT or StreamInfo::RESOURCE)
        /// UNKNOWN if this info is unavailable.
        ///
        /// </summary>
// Use accessors to allow the obfuscator to keep an unobfuscated version
        if(_s != STAT_INIT) _s.__auto_type /* : int */ = undefined;
        defGet(_s,"type",__get_type);
        function __get_type()  { return _s.__auto_type; }
        defSet(_s,"type",__set_type);
        function __set_type(value /* : int */)  { _s.__auto_type = value; }

        /// <summary>
        /// Specifies the display height in pixels. -1 if this info is unavailable.
        ///
        /// </summary>

        if(_s != STAT_INIT) _s.__auto_sourceHeightPixels /* : int */ = undefined;
        defGet(_s,"sourceHeightPixels",__get_sourceHeightPixels);
        function __get_sourceHeightPixels()  { return _s.__auto_sourceHeightPixels; }
        defSet(_s,"sourceHeightPixels",__set_sourceHeightPixels);
        function __set_sourceHeightPixels(value /* : int */)  { _s.__auto_sourceHeightPixels = value; }

        /// <summary>
        /// Specifies the display width in pixels. -1 if this info is unavailable.
        ///
        /// </summary>

        if(_s != STAT_INIT) _s.__auto_sourceWidthPixels /* : int */ = undefined;
        defGet(_s,"sourceWidthPixels",__get_sourceWidthPixels);
        function __get_sourceWidthPixels()  { return _s.__auto_sourceWidthPixels; }
        defSet(_s,"sourceWidthPixels",__set_sourceWidthPixels);
        function __set_sourceWidthPixels(value /* : int */)  { _s.__auto_sourceWidthPixels = value; }

        /// <summary>
        /// The bitrate of the stream, in kilo-bits-per-second, or 1000 bits per second.
        /// -1 if the bitrate of this stream is unknown.
        ///
        /// </summary>

        if(_s != STAT_INIT) _s.__auto_bitrateKbps /* : int */ = undefined;
        defGet(_s,"bitrateKbps",__get_bitrateKbps);
        function __get_bitrateKbps()  { return _s.__auto_bitrateKbps; }
        defSet(_s,"bitrateKbps",__set_bitrateKbps);
        function __set_bitrateKbps(value /* : int */)  { _s.__auto_bitrateKbps = value; }

        /// <summary>
        /// The name of the resource from which this stream is loaded. For example, this could be the name of a CDN. 
        /// Use null if the resource of this stream is unknown or irrelevant
        ///
        /// </summary>

        if(_s != STAT_INIT) _s.__auto_resource /* : String */ = undefined;
        defGet(_s,"resource",__get_resource);
        function __get_resource()  { return _s.__auto_resource; }
        defSet(_s,"resource",__set_resource);
        function __set_resource(value /* : String */)  { _s.__auto_resource = value; }

        /// </summary>
        /// <param name="_bitrateKbps">The bitrate of the stream, in kilo-bits-per-second, or 1000 bits per second. Pass -1 if the bitrate of this stream is unknown or irrelevant.</param>
        /// <param name="_resource">The name of the resource from which this stream is loaded. Pass null if the resource of this stream is unknown or irrelevant.</param>
        /// <param name="type"> Stream type (eg. StreamInfo::AUDIO, StreamInfo::VIDEO, StreamInfo::TEXT or StreamInfo::RESOURCE)</param>
        /// <param name="widthPixels">Specifies the display width in pixels. Pass -1 if this info is unavailable</param>
        /// <param name="heightPixels">Specifies the display height in pixels. Pass -1 if this info is unavailable</param>
        function _constr(_bitrateKbps /* : int */, _resource /* : String */, type /* : int */, widthPixels /* : int */, heightPixels /* : int */) {
            _s.bitrateKbps = _bitrateKbps;
            _s.resource = _resource;
            _s.type = type;
            _s.sourceHeightPixels = heightPixels;
            _s.sourceWidthPixels = widthPixels;
        }

        /// Returns the bitrate of the stream, in 1000 bits per second; -1 if unknown
        defPubMeth(_s,"GetBitrateKbps",__GetBitrateKbps);
        function __GetBitrateKbps() /* : int */  {
            return _s.bitrateKbps;
        }

        /// The resource from which the stream is loaded. null if unknown
        defPubMeth(_s,"GetResource",__GetResource);
        function __GetResource() /* : String */  {
            return _s.resource;
        }
        
        defPubMeth(_s,"equals",__equals);
        function __equals(other /* : StreamInfo */) /* : Boolean */  {
            if (other == null) return false;

            return _s.resource == other.resource && 
                _s.bitrateKbps == other.bitrateKbps && 
                _s.type == other.type && 
                _s.sourceHeightPixels == other.sourceHeightPixels && 
                _s.sourceWidthPixels == other.sourceWidthPixels;
        }


        /** 
         * Construct clone of the proper type, from a similar object perhaps constructed
         * in another module. We copy fields one by one
         */
        defStatMeth(_s,StreamInfo,"ConstructClone",__ConstructClone);
        function __ConstructClone(fromObj /* : Object */) /* : StreamInfo */  {
            if (fromObj == null) return null;
            var res /* : StreamInfo */ = new StreamInfo(-1, null, -1, -1, -1);
            res.type = slint.Cast(NativeLang.GetField("type", fromObj));
            res.bitrateKbps = slint.Cast(NativeLang.GetField("bitrateKbps", fromObj));
            res.resource = NativeLang.GetStringField("resource", fromObj);
            res.sourceHeightPixels = slint.Cast(NativeLang.GetField("sourceHeightPixels", fromObj));
            res.sourceWidthPixels = slint.Cast(NativeLang.GetField("sourceWidthPixels", fromObj));
            return res;
        }

        defPubMeth(_s,"ToStr",__ToStr);
        function __ToStr() /* : String */  {
            var typeString /* : String */ = null;

            switch (_s.type) {
                case StreamInfo.UNKNOWN:
                    typeString = "UNKNOWN";
                    break;
                case StreamInfo.VIDEO:
                    typeString = "VIDEO";
                    break;
                case StreamInfo.AUDIO:
                    typeString = "AUDIO";
                    break;
                case StreamInfo.TEXT:
                    typeString = "TEXT";
                    break;
                case StreamInfo.RESOURCE:
                    typeString = "RESOURCE";
                    break;
                default:
                    throw new Error("Unknown stream type " + _s.type);
            }

            return "type=" + typeString +
                ", bitrateKbps=" + _s.bitrateKbps +
                ", resource=" + (_s.resource != null ? _s.resource : "null") + 
                ", sourceHeightPixels=" + _s.sourceHeightPixels +
                ", sourceWidthPixels=" + _s.sourceWidthPixels;
        }
       //JSRENAME:constant:_s:StreamInfo:AUDIO
       //JSRENAME:constant:_s:StreamInfo:MAX_BITRATE
       //JSRENAME:constant:_s:StreamInfo:RESOURCE
       //JSRENAME:constant:_s:StreamInfo:TEXT
       //JSRENAME:constant:_s:StreamInfo:UNKNOWN
       //JSRENAME:constant:_s:StreamInfo:UNKNOWN_RESOURCE
       //JSRENAME:constant:_s:StreamInfo:VIDEO
        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(StreamInfo,"StreamInfo");
    // API_EXIT

// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../csClient/CwsClient/StreamSwitch.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-

// Copyright (c) 2011, Conviva Inc. All Rights Reserved.
// Author: Henry Milner (henry@conviva.com)



// namespace 
    // API_ENTER
    /// <summary>
    /// A switch between media streams performed by a ConvivaStreamerProxy. A StreamSwitch contains 
    /// instructions about the target and source streams for the switch and the way in which the 
    /// switch should be executed. It also contains the current status of the switch.
    /// 
    /// StreamSwitch's Status property indicates whether the stream is in progress, or has finished 
    /// already and is in a terminal state, or has not started yet.
    /// 
    /// This class has no externally-available public constructor. To create a StreamSwitch, use 
    /// one of the static factory methods below. For Insights-only streamers, use MakeSwitchToStream.
    /// For streamers that support DMS or EMS, it is necessary to use the richer MakeSwitch instead.
    /// </summary>
    function StreamSwitch() {
        var _s = this;

        if(_s == STAT_INIT) StreamSwitch._nextId /* : int */ = 0;


        /** Constants for the valid switching statuses */
        /// <summary>
        /// The switch has not yet started.
        /// </summary>
        if(_s == STAT_INIT) StreamSwitch.PENDING /* : String */ = "PENDING";
        /// <summary>
        /// The switch has started but has not completed.
        /// </summary>
        if(_s == STAT_INIT) StreamSwitch.IN_PROGRESS /* : String */ = "IN_PROGRESS";
        /// <summary>
        /// The switch has completed successfully. The user has begun to get media from
        /// the target stream.
        /// </summary>
        if(_s == STAT_INIT) StreamSwitch.SUCCEEDED /* : String */ = "SUCCEEDED";
        /// <summary>
        /// The switch failed due to an error. The original stream is still in use.
        /// </summary>
        if(_s == STAT_INIT) StreamSwitch.FAILED /* : String */ = "FAILED";
        /// <summary>
        /// During the switch, user action caused the switch to be aborted, but no error 
        /// occurred. The original stream is still in use.
        /// </summary>
        if(_s == STAT_INIT) StreamSwitch.INTERRUPTED /* : String */ = "INTERRUPTED";

        /// <summary>
        /// Return a switch from <paramref name="source"/> to <paramref name="target"/> with current status <paramref name="status"/>.
        /// 
        /// Use this method to construct a StreamSwitch for a streamer that supports EMS or DMS.  For example,
        /// to create a representation of a switch that has just begun from sourceStream to targetStream, use:
        ///     MakeSwitch(sourceStream, targetStream, StreamSwitch.IN_PROGRESS)
        /// </summary>
        defStatMeth(_s,StreamSwitch,"MakeSwitch",__MakeSwitch);
        function __MakeSwitch(source /* : CandidateStream */, target /* : CandidateStream */, status /* : String */) /* : StreamSwitch */  {
            return new StreamSwitch(StreamSwitch.GetNextId(false), source, target, -1, null, status);
        }

        /// <summary>
        /// Return a switch to <paramref name="target"/> with current status <paramref name="status"/>.
        /// 
        /// Use this method to construct a StreamSwitch when declaring a resource or bitrate change on an 
        /// Insights-only streamer via the callback set by ConvivaStreamerProxy.SetSwitchingStatusChangeCallback().
        /// 
        /// For example, to construct a StreamSwitch for declaring a resource change to a resource called 
        /// newResource, and a bitrate newBitrate, construct a CandidateStream newStream representing the 
        /// stream using newResource and newBitrate, then pass newStream to this method:
        ///     StreamSwitch.MakeSwitchToStream(newStream, StreamSwitch.SUCCEEDED);
        /// To declare that this switch has occurred, pass the resulting StreamSwitch to the ConvivaStreamerProxy
        /// callback.
        /// </summary>
        defStatMeth(_s,StreamSwitch,"MakeSwitchToStream",__MakeSwitchToStream);
        function __MakeSwitchToStream(target /* : CandidateStream */, status /* : String */) /* : StreamSwitch */  {
            return new StreamSwitch(StreamSwitch.GetNextId(false), null, target, -1, null, status);
        }

        /// <summary>
        /// Destroy this object.
        /// </summary>
        defPubMeth(_s,"Cleanup",__Cleanup);
        function __Cleanup() /* : void */  {
        }

        /// <summary>
        /// A unique identifier for this switch. Users should never provide their
        /// own IDs; factory methods for this class create IDs that are guaranteed
        /// to be unique.
        /// This cannot be null.
        /// </summary>
        /// <read-only/>
// Use accessors to allow the obfuscator to keep an unobfuscated version
        if(_s != STAT_INIT) _s.__auto_id /* : String */ = undefined;
        defGet(_s,"id",__get_id);
        function __get_id()  { return _s.__auto_id; }
        defSet(_s,"id",__set_id);
        function __set_id(value /* : String */)  { _s.__auto_id = value; }
        
        /// <summary>
        /// This switch must finish within TimeoutMs of its start. After that time, 
        /// if the switch has not succeeded, it should be declared a failure and
        /// streaming should resume from the previous stream.
        /// -1 if no timeout is specified.
        /// </summary>
        /// <read-only/>

        if(_s != STAT_INIT) _s.__auto_timeoutMs /* : int */ = undefined;
        defGet(_s,"timeoutMs",__get_timeoutMs);
        function __get_timeoutMs()  { return _s.__auto_timeoutMs; }
        defSet(_s,"timeoutMs",__set_timeoutMs);
        function __set_timeoutMs(value /* : int */)  { _s.__auto_timeoutMs = value; }
    

        /// <summary>
        /// The stream in use before this switch.  If null, or if any field of the
        /// SourceStream is null, the source will be inferred from the current state
        /// of the streamer on which the switch is occurring.
        /// </summary>

        if(_s != STAT_INIT) _s.__auto_sourceStream /* : CandidateStream */ = undefined;
        defGet(_s,"sourceStream",__get_sourceStream);
        function __get_sourceStream()  { return _s.__auto_sourceStream; }
        defSet(_s,"sourceStream",__set_sourceStream);
        function __set_sourceStream(value /* : CandidateStream */)  { _s.__auto_sourceStream = value; }
    


        /// <summary>
        /// The target stream for this switch.
        /// Its Bitrate field must be valid if this switch causes a bitrate change.
        /// Otherwise, it is assumed that the target bitrate is the current bitrate of
        /// the stream on which the switch is occurring. Similarly so for the Resource
        /// field: it must be valid if this switch causes a resource change, and otherwise
        /// it is assumed that the target resource is the current resource.
        /// 
        /// Must be non-null.
        /// </summary>
        /// <read-only/>

        if(_s != STAT_INIT) _s.__auto_targetStream /* : CandidateStream */ = undefined;
        defGet(_s,"targetStream",__get_targetStream);
        function __get_targetStream()  { return _s.__auto_targetStream; }
        defSet(_s,"targetStream",__set_targetStream);
        function __set_targetStream(value /* : CandidateStream */)  { _s.__auto_targetStream = value; }
        
        /// <summary>
        /// An identifier for a special way in which this switch should be executed.
        /// For example, "QuickSwitch" might indicate that a switch should be executed
        /// as quickly as possible, even if it causes a quality interruption.
        /// 
        /// Modes must be negotiated with Conviva during integration. ("FastSwitch" is
        /// just an example.)
        /// 
        /// Null if no special switching mode is specified.
        /// </summary>
        /// <read-only/>

        if(_s != STAT_INIT) _s.__auto_mode /* : String */ = undefined;
        defGet(_s,"mode",__get_mode);
        function __get_mode()  { return _s.__auto_mode; }
        defSet(_s,"mode",__set_mode);
        function __set_mode(value /* : String */)  { _s.__auto_mode = value; }

        
        /// <summary>
        /// The current status of this switch. The valid switching statuses listed above.
        /// A switch that has just started should have the IN_PROGRESS status.
        /// 
        /// Must be one of the valid switching statuses listed above. This cannot be null.
        /// </summary>

        if(_s != STAT_INIT) _s.__auto_status /* : String */ = undefined;
        defGet(_s,"status",__get_status);
        function __get_status()  { return _s.__auto_status; }
        defSet(_s,"status",__set_status);
        function __set_status(value /* : String */)  { _s.__auto_status = value; }

        /////////////////////////////////////////////////////////////////////////////////
        /// The following methods are not part of the API and are for Conviva internal
        /// use only.
        /////////////////////////////////////////////////////////////////////////////////

        /** @private */
        function _constr(id /* : String */, sourceStream /* : CandidateStream */, targetStream /* : CandidateStream */, timeoutMs /* : int */, mode /* : String */, status /* : String */) {
            _s.id = id;
            _s.sourceStream = sourceStream;
            _s.targetStream = targetStream;
            _s.timeoutMs = timeoutMs;
            _s.mode = mode;
            _s.status = status;
        }

        /** 
         * Checks whether this object is valid.  This is necessary for languages
         * that are not typesafe, where users can set fields arbitrarily.
         * 
         * @return null if this object is valid.  Otherwise return a string
         * describing the problem.
         * 
         * @private 
         */
        defPubMeth(_s,"CheckValidity",__CheckValidity);
        function __CheckValidity() /* : String */  {
            if (_s.id == null) {
                return "StreamSwitch.id is null (and must be non-null)";
            }
            // In dynamically-typed languages, we must ensure that fields are of the proper types.
            if (_s.id != null && !((typeof _s.id === "string"))) {
                return "StreamSwitch.id is not a string";
            } else if (_s.timeoutMs != null && !((typeof _s.timeoutMs === "number"))) {
                return "StreamSwitch.timeoutMs is not an int";
            } else if (_s.mode != null && !((typeof _s.mode === "string"))) {
                return "StreamSwitch.mode is not a string";
            } else if (_s.status != null && !((typeof _s.status === "string"))) {
                return "StreamSwitch.status is not a string";
            } else if (_s.sourceStream != null && !(_s.sourceStream instanceof CandidateStream)) {
                return "StreamSwitch.sourceStream is not a CandidateStream";
            } else if (_s.targetStream != null && !(_s.targetStream instanceof CandidateStream)) {
                return "StreamSwitch.targetStream is not a CandidateStream";
            }
            var sourceStreamError /* : String */ = (_s.sourceStream != null ? _s.sourceStream.CheckValidity() : null);
            if (sourceStreamError != null) {
                return sourceStreamError;
            }
            var targetStreamError /* : String */ = (_s.targetStream != null ? _s.targetStream.CheckValidity() : null);
            if (targetStreamError != null) {
                return targetStreamError;
            }
            return null;
        }

        /** 
         * Construct clone of the proper type, from a similar object perhaps constructed
         * in another module. We copy fields one by one
         */
        defStatMeth(_s,StreamSwitch,"ConstructClone",__ConstructClone);
        function __ConstructClone(fromObj /* : Object */) /* : StreamSwitch */  {
            var res /* : StreamSwitch */ = new StreamSwitch(null, null, null, -1, "", "");
            res.id = NativeLang.GetStringField("id", fromObj);
            res.sourceStream = CandidateStream.ConstructClone(NativeLang.GetField("sourceStream", fromObj));
            res.targetStream = CandidateStream.ConstructClone(NativeLang.GetField("targetStream", fromObj));
            res.timeoutMs = slint.Cast(NativeLang.GetField("timeoutMs", fromObj));
            res.mode = NativeLang.GetStringField("mode", fromObj);
            res.status = NativeLang.GetStringField("status", fromObj);
            return res;
        }


        /** @private */
        defStatMeth(_s,StreamSwitch,"StaticInit",__StaticInit);
        function __StaticInit() /* : void */  {
            StreamSwitch._nextId = 0;
        }

        /** @private */
        defStatMeth(_s,StreamSwitch,"StaticCleanup",__StaticCleanup);
        function __StaticCleanup() /* : void */  {
            StreamSwitch._nextId = 0;
        }

        defStatMeth(_s,StreamSwitch,"GetNextId",__GetNextId);
        function __GetNextId(useInternalNamespace /* : Boolean */) /* : String */  {
            var id /* : int */ = StreamSwitch._nextId;
            StreamSwitch._nextId += 1;
            if (useInternalNamespace) {
                return "c3." + Lang.ToString(id);
            } else {
                return Lang.ToString(id);
            }
        }
       //JSRENAME:constant:_s:StreamSwitch:FAILED
       //JSRENAME:constant:_s:StreamSwitch:INTERRUPTED
       //JSRENAME:constant:_s:StreamSwitch:IN_PROGRESS
       //JSRENAME:constant:_s:StreamSwitch:PENDING
       //JSRENAME:constant:_s:StreamSwitch:SUCCEEDED
        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(StreamSwitch,"StreamSwitch");
    // API_EXIT

// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../csClient/CwsClient/StreamerError.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-

// Copyright (c) 2011, 2012 Conviva Inc. All Rights Reserved.
// Author: George Necula (necula@conviva.com), Henry Milner (henry@conviva.com), Yan Li (yan@conviva.com)

// NOTE: This class is shared between the CWS client and the LivePass client


// namespace 

    /// <summary>
    /// This class encapsulates the infomation about a streaming error
    /// </summary>
    function StreamerError() {
        var _s = this;
        // API_ENTER

        //error scope
        //unknown scope.
        if(_s == STAT_INIT) StreamerError.ERROR_SCOPE_UNKNOWN /* : int */ = 0;
        //single media segment
        if(_s == STAT_INIT) StreamerError.ERROR_SCOPE_STREAM_SEGMENT /* : int */ = 1;
        //single cdn, bitrate
        if(_s == STAT_INIT) StreamerError.ERROR_SCOPE_STREAM /* : int */ = 2;
        //whole cdn
        if(_s == STAT_INIT) StreamerError.ERROR_SCOPE_RESOURCE /* : int */ = 3;


        //error severity level
        /// <summary>
        /// Severity level of warning.
        /// </summary>
        if(_s == STAT_INIT) StreamerError.SEVERITY_WARNING /* : int */ = 0;
        /// <summary>
        /// Severity level of fatal error.
        /// </summary>
        if(_s == STAT_INIT) StreamerError.SEVERITY_FATAL /* : int */ = 1;

        // String identifying the encountered error
// Use a property to allow the obfuscator to keep an unobfuscated version
        if(_s != STAT_INIT) _s.__auto_errorCode /* : String */ = undefined;
        defGet(_s,"errorCode",__get_errorCode);
        function __get_errorCode()  { return _s.__auto_errorCode; }
        defSet(_s,"errorCode",__set_errorCode);
        function __set_errorCode(value /* : String */)  { _s.__auto_errorCode = value; }

        // Level of severity. Must be selected from the constant defined above

        if(_s != STAT_INIT) _s.__auto_severity /* : int */ = undefined;
        defGet(_s,"severity",__get_severity);
        function __get_severity()  { return _s.__auto_severity; }
        defSet(_s,"severity",__set_severity);
        function __set_severity(value /* : int */)  { _s.__auto_severity = value; }

        // Instance of CandidateStream that the error is encountered for

        if(_s != STAT_INIT) _s.__auto_stream /* : StreamInfo */ = undefined;
        defGet(_s,"stream",__get_stream);
        function __get_stream()  { return _s.__auto_stream; }
        defSet(_s,"stream",__set_stream);
        function __set_stream(value /* : StreamInfo */)  { _s.__auto_stream = value; }

        // Index of media segment that the error is encountered for

        if(_s != STAT_INIT) _s.__auto_index /* : int */ = undefined;
        defGet(_s,"index",__get_index);
        function __get_index()  { return _s.__auto_index; }
        defSet(_s,"index",__set_index);
        function __set_index(value /* : int */)  { _s.__auto_index = value; }

        // One of the ERROR_SCOPE constants defined above

        if(_s != STAT_INIT) _s.__auto_scope /* : int */ = undefined;
        defGet(_s,"scope",__get_scope);
        function __get_scope()  { return _s.__auto_scope; }
        defSet(_s,"scope",__set_scope);
        function __set_scope(value /* : int */)  { _s.__auto_scope = value; }

        /// <summary>
        /// Create an Error object without any scope
        /// </summary>
        /// <param name="errorCode">String identifying the encountered error</param>
        /// <param name="severity">Level of severity. Must be selected from the constant defined in PrecisionConsts</param>
        /// <returns>Error object</returns>
        defStatMeth(_s,StreamerError,"makeUnscopedError",__makeUnscopedError);
        function __makeUnscopedError(errorCode /* : String */, severity /* : int */) /* : StreamerError */  {
            return new StreamerError(errorCode, null, -1, severity, StreamerError.ERROR_SCOPE_UNKNOWN);
        }

        /// <summary>
        ///  Create an Error instance with stream scope.
        /// </summary>
        /// <param name="errCode">String identifying the encountered error</param>
        /// <param name="severity">Level of severity. Must be selected from the constant defined in PrecisionConsts</param>
        /// <param name="stream">Instance of CandidateStream that the error is encountered for</param>
        /// <returns>Error object</returns>
        defStatMeth(_s,StreamerError,"makeStreamError",__makeStreamError);
        function __makeStreamError(errCode /* : String */, severity /* : int */, stream /* : StreamInfo */) /* : StreamerError */  {
            return new StreamerError(errCode, stream, -1, severity, StreamerError.ERROR_SCOPE_STREAM);
        }

        /// <summary>
        /// Create an Error instance with Resource Scope
        /// </summary>
        /// <param name="errCode">String identifying the encountered error</param>
        /// <param name="severity">Level of severity. Must be selected from the constant defined in PrecisionConsts</param>
        /// <param name="stream">Instance of CandidateStream that the error is encountered for</param>
        /// <returns>Error object</returns>
        defStatMeth(_s,StreamerError,"makeResourceError",__makeResourceError);
        function __makeResourceError(errCode /* : String */, severity /* : int */, stream /* : StreamInfo */) /* : StreamerError */  {
            return new StreamerError(errCode, stream, -1, severity, StreamerError.ERROR_SCOPE_RESOURCE);
        }

        /// <summary>
        /// @deprecated
        ///  Create an Error instance with segment scope.
        /// </summary>
        /// <param name="errCode">String identifying the encountered error</param>
        /// <param name="severity">Level of severity. Must be selected from the constant defined in PrecisionConsts</param>
        /// <param name="stream">Instance of CandidateStream that the error is encountered for</param>
        /// <param name="idx">Index of media segment that the error is encountered for</param>
        /// <returns>Error object</returns>
        defStatMeth(_s,StreamerError,"makeStreamSegmentError",__makeStreamSegmentError);
        function __makeStreamSegmentError(errCode /* : String */, severity /* : int */, stream /* : StreamInfo */, idx /* : int */) /* : StreamerError */  {
            return new StreamerError(errCode, stream, idx, severity, StreamerError.ERROR_SCOPE_STREAM_SEGMENT);
        }

        function _constr(_errorCode /* : String */, _stream /* : StreamInfo */, _index /* : int */, _severity /* : int */, _scope /* : int */) {
            _s.errorCode = _errorCode;

            _s.stream = _stream;
            _s.index = _index;
            _s.severity = _severity;
            _s.scope = _scope;
        }


        /** 
         * Construct clone of the proper type, from a similar object perhaps constructed
         * in another module. We copy fields one by one
         */
        defStatMeth(_s,StreamerError,"ConstructClone",__ConstructClone);
        function __ConstructClone(fromObj /* : Object */) /* : StreamerError */  {
            if (fromObj == null) return null;
            var res /* : StreamerError */ = new StreamerError("", null, 0, 0, 0);
            res.errorCode = NativeLang.GetStringField("errorCode", fromObj);
            res.severity = slint.Cast(NativeLang.GetField("severity", fromObj));
            res.stream = StreamInfo.ConstructClone(NativeLang.GetField("stream", fromObj));
            res.scope = slint.Cast(NativeLang.GetField("scope", fromObj));
            res.index = slint.Cast(NativeLang.GetField("index", fromObj));
            return res;
        }

        defPubMeth(_s,"ToStr",__ToStr);
        function __ToStr() /* : String */  {
            return "errorCode=" + (_s.errorCode != null ? _s.errorCode : "null") +
                ", index=" + _s.index +
                ", severity=" + _s.severity +
                ", scope=" + _s.scope +
                ", stream=(" + _s.stream.ToStr() + ")";
        }

        // API_EXIT
       //JSRENAME:constant:_s:StreamerError:ERROR_SCOPE_RESOURCE
       //JSRENAME:constant:_s:StreamerError:ERROR_SCOPE_STREAM
       //JSRENAME:constant:_s:StreamerError:ERROR_SCOPE_STREAM_SEGMENT
       //JSRENAME:constant:_s:StreamerError:ERROR_SCOPE_UNKNOWN
       //JSRENAME:constant:_s:StreamerError:SEVERITY_FATAL
       //JSRENAME:constant:_s:StreamerError:SEVERITY_WARNING
        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(StreamerError,"StreamerError");

// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../../csClient/CwsClient/monitor/Monitor.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-

// Copyright (c) 2011, 2012 Conviva Inc. All Rights Reserved.
// Author: Henry Milner (henry@conviva.com), George Necula (necula@conviva.com), Yan Li (yan@conviva.com)



// namespace monitor

    function Monitor() {
        var _s = this;


        if(_s != STAT_INIT) _s._sessionId /* : int */ = 0; // Used to identify the session in logs

        if(_s != STAT_INIT) _s._externalBitrateReporting /* : Boolean */ = false;

        //@owner
        if(_s != STAT_INIT) _s._streamer /* : ConvivaStreamerProxy */ = null;
        // Temporary object, saved until we start monitoring
        if(_s != STAT_INIT) _s._streamerObject /* : Object */ = null;

        if(_s != STAT_INIT) _s._eventQueue /* : EventQueue */ = null;
        if(_s != STAT_INIT) _s._contentInfo /* : ConvivaContentInfo */ = null;
        if(_s != STAT_INIT) _s._nextHeartbeat /* : DictionaryCS(string, object) */ = null;
        if(_s != STAT_INIT) _s._utils /* : Utils */ = null;

        //Proxy state
        if(_s != STAT_INIT) _s._playingState /* : String */ = ConvivaStreamerProxy.UNKNOWN;
        if(_s != STAT_INIT) _s._streamInfo /* : StreamInfo */ = null; // Current bitrate, resource
        if(_s != STAT_INIT) _s._sessionFlags /* : int */ = 1;

        if(_s != STAT_INIT) _s._startTimeMs /* : Number */ = 0;
        if(_s != STAT_INIT) _s._lastStateUpdateTimeMs /* : Number */ = 0; //TODO: deprecate in CWS 1.8

        // TODO we only need to compute the pause join time in the 1.6/1.7 hybrid client. We should remove this in CWS 1.9.
        if(_s != STAT_INIT) _s._pauseJoinTimeStartTimeMs /* : Number */ = 0; // The time when the pauseJoinTime was called. If 0, we are not after a pauseJoinTime
        if(_s != STAT_INIT) _s._pauseJointTimeTotalMs /* : Number */ = 0; // The total time we spent in pauseJoinTime state.

        // The time spent in all non-playing states before the first playing
        // state.  Negative iff no playing state has been observed yet.
        // There are two special negative values:
        //  o -1: Not yet joined.
        //  o -2: An error caused this session to fail to join.  (If the
        //        somehow joins anyway, this is ignored.)
        if(_s != STAT_INIT) _s._joinTimeMs /* : int */ = -1; //TODO: deprecate in CWS 1.8

        // Total of all nominal bits played
        //if(_s != STAT_INIT) _s._nominalPlayingBitsTotal /* : Number */ = 0; //TODO: deprecate in CWS 1.8

        if(_s != STAT_INIT) _s._encodedFps /* : int */ = -1;
        if(_s != STAT_INIT) _s._contentLengthSec /* : int */ = -1;
        if(_s != STAT_INIT) _s._streamUrl /* : String */ = null;
        // Flag if duration is set by external API
        if(_s != STAT_INIT) _s._externalDurationReporting /* : boolean */ = false;
        // Flag if stream url is set by external API
        if(_s != STAT_INIT) _s._externalStreamUrlReporting /* : boolean */ = false;
        // Flag if bitrate is set by external API
        if(_s != STAT_INIT) _s._externalBitrateSet /* : boolean */ = false;
        // Flag if encodedFps is set by external API
        if(_s != STAT_INIT) _s._externalFpsReporting /* : boolean */ = false;
        // Number of times the framerate has been checked while in playing state.
        if(_s != STAT_INIT) _s._playingFpsObservationCount /* : int */ = 0;
        // Total of all playing FPS observations
        if(_s != STAT_INIT) _s._playingFpsTotal /* : Number */ = 0;

        function _constr(streamer /* : Object */, eventQueue /* : EventQueue */, contentInfo /* : ConvivaContentInfo */, options /* : Object */, sessionId /* : int */, networkInfo /* : NetworkInfo : */) {

            _s._eventQueue = eventQueue;
            _s._utils = Utils.getInstance();
            _s._contentInfo = contentInfo;
            _s._networkInfo = networkInfo;
            _s._sessionId = sessionId;
            _s._nextHeartbeat = new DictionaryCS/*<string, object>*/();
            _s._streamerObject = streamer;

            _s._startTimeMs = 0;
            _s._lastStateUpdateTimeMs = 0; //TODO: deprecate in CWS 1.8

            _s._pauseJoinTimeStartTimeMs = 0; //TODO: deprecate in CWS 1.9
            _s._pauseJointTimeTotalMs = 0; //TODO: deprecate in CWS 1.9

            _s._joinTimeMs = -1; //TODO: deprecate in CWS 1.8
            //_s._nominalPlayingBitsTotal = 0; //TODO: deprecate in CWS 1.8

            if(_s._contentInfo.encodedFps != -1) {
                _s._encodedFps = _s._contentInfo.encodedFps;
                _s._externalFpsReporting = true;
            }
            if(_s._contentInfo.duration != -1) {
                _s._contentLengthSec = _s._contentInfo.duration;
                _s._externalDurationReporting = true;
            }
            if(_s._contentInfo.streamUrl) {
                _s._streamUrl = _s._contentInfo.streamUrl;
                _s._externalStreamUrlReporting= true;
            }

            _s._playingFpsObservationCount = 0;
            _s._playingFpsTotal = 0;
            _s._stopRfpsCounter = null;

            if (options != null) {
                var optionsDict /* : DictionaryCS(string, bool) */ = Lang.DictionaryFromRepr/*string, bool*/(options);
                if (optionsDict.ContainsKey(LivePass.OPTION_EXTERNAL_BITRATE_REPORTING)) {
                    _s._externalBitrateReporting = optionsDict.GetValue(LivePass.OPTION_EXTERNAL_BITRATE_REPORTING);
                }
            }
        }

        defPubMeth(_s,"start",__start);
        function __start(nowMs /* : Number */) /* : void */  {
            _s._startTimeMs = nowMs;
            _s._lastStateUpdateTimeMs = nowMs; //TODO: deprecate in CWS 1.8
            _s.buildInitialStateChangeEvent();
            _s.buildInitialStreamInfo();

            _s.attachStreamer(_s._streamerObject);
            _s._streamerObject = null;
        }

        defPubMeth(_s,"buildInitialStateChangeEvent",__buildInitialStateChangeEvent);
        function __buildInitialStateChangeEvent() /* void */ {
            var newState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();

            // DE-2668: CwsStateChangeEvent is added for default set conviva metadata by application
            // Asset Name will be null till initialised explicitly as per current backend implementation
            // it supports only statechange of assetname once
            if(_s._contentInfo.assetName != null) {
                newState.SetValue("an", _s._contentInfo.assetName);
            }

            if(_s._contentInfo.streamUrl != null) {
                newState.SetValue("url", _s._contentInfo.streamUrl);
            }

            if(_s._contentInfo.defaultReportingResource != null) {
                newState.SetValue("rs", _s._contentInfo.defaultReportingResource);
            }

            var newStrMetadataHb = {};
            if(_s._contentInfo.viewerId != null) {
                newStrMetadataHb.vid = _s._contentInfo.viewerId;
            }
            if(_s._contentInfo.playerName != null) {
                newStrMetadataHb.pn = _s._contentInfo.playerName;
            }

            if(Lang.dictCount(newStrMetadataHb) > 0) {
                newState.SetValue("strmetadata", newStrMetadataHb);
            }

            if(_s._contentInfo.isLive == false || _s._contentInfo.isLive == true) {
                newState.SetValue("lv", _s._contentInfo.isLive);
            }

            if(_s._contentInfo.duration >= 0) {
                newState.SetValue("cl", _s._contentInfo.duration);
            }
            if (_s._contentInfo.encodedFps >= 0) {
                newState.SetValue("efps", _s._contentInfo.encodedFps);
            }

            if (Lang.dictCount(_s._contentInfo.tags) > 0) {
                newState.SetValue("tags", _s._contentInfo.tags);
            }

            if (_s._contentInfo.defaultReportingBitrateKbps > 0) {
                newState.SetValue("br", _s._contentInfo.defaultReportingBitrateKbps);
            }

            //Fire state change event
            var data /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
            var newStateNative = Lang.StringDictionaryToRepr(newState);
            data.SetValue("new", newStateNative);
            if (!data.IsEmpty("new") ) {
                _s.enqueueEvent("CwsStateChangeEvent", data);
            }
        }

        /// Attach a streamer to the monitor and resume monitoring if suspended
        defPubMeth(_s,"attachStreamer",__attachStreamer);
        function __attachStreamer(streamerObject /* : Object */) /* : void */  { //NO_RENAME:GetCapabilities
            _s._utils.logSession("Monitor.attachStreamer()", _s._sessionId);
            if (_s._streamer != null) {
                _s._utils.logSession("Monitor.attachStreamer(): detach current streamer first", _s._sessionId);
                return;
            }
            if (streamerObject == null) {
                _s._utils.logSession("Monitor.attachStreamer(): received a null streamer", _s._sessionId);
                _s.SetPlayingState(ConvivaStreamerProxy.NOT_MONITORED);
                return;
            }

            // Create streamer proxy and get references to state and stream
            _s._streamer = Monitor.wrapInConvivaStreamerProxy(streamerObject, _s._sessionId);

            _s._sessionFlags = _s._streamer.GetCapabilities();
            if (_s._externalBitrateReporting) {
                _s._sessionFlags |= ConvivaStreamerProxy.CAPABILITY_BITRATE_EXTERNAL;
            }

            _s.SetPlayingState(ConvivaStreamerProxy.UNKNOWN);

            // This call will push the current proxy states to the monitor
            _s._streamer.SetMonitoringNotifier(_s.notificationFromStreamerProxy);

            _s._lastStateUpdateTimeMs = _s._utils.epochTimeMs();
            if(_s._stopRfpsCounter == null) {
                _s.StartRfpsCounter();
            }
        }

        /// Pause monitoring such that it can be restarted later and detach from current streamer
        defPubMeth(_s,"detachStreamer",__detachStreamer);
        function __detachStreamer() /* : void */  {
            _s._utils.logSession("Monitor.detachStreamer()", _s._sessionId);
            _s.updateMetrics();
            if(_s._stopRfpsCounter != null) {
              _s._stopRfpsCounter();
              _s._stopRfpsCounter = null;
            }
            if (_s._streamer != null) {
                _s._streamer.Cleanup(); // removes notifiers
                _s.SetPlayingState(ConvivaStreamerProxy.NOT_MONITORED);
                _s._streamer = null;
            }
        }

        /**
         * Pause the computation of join time
         */
        defPubMeth(_s,"pauseJoinTime",__pauseJoinTime);
        function __pauseJoinTime() /* : void */  {
            _s._utils.logSession("Monitor.pauseJoinTime()", _s._sessionId);
            if (_s._pauseJoinTimeStartTimeMs == 0) { //TODO: deprecate in CWS 1.8
                _s._pauseJoinTimeStartTimeMs = _s._utils.epochTimeMs();

                var newState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                var oldState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                newState.SetValue("pj", true);
                oldState.SetValue("pj", false);
                _s.declareStateChange(newState, oldState);
            }

        }

        /**
         * Resume the computation of join time
         * @param addEvent : if true, then generate an event
         */
        defPubMeth(_s,"resumeJoinTime",__resumeJoinTime);
        function __resumeJoinTime(addEvent /* : Boolean */) /* : void */  {
            _s._utils.logSession("Monitor.resumeJoinTime()", _s._sessionId);
            if (_s._pauseJoinTimeStartTimeMs > 0) {
                _s._pauseJointTimeTotalMs += (_s._utils.epochTimeMs() - _s._pauseJoinTimeStartTimeMs);
                if (addEvent) {
                    var newState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                    var oldState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                    newState.SetValue("pj", false);
                    oldState.SetValue("pj", true);
                    _s.declareStateChange(newState, oldState);
                }
            }
            _s._pauseJoinTimeStartTimeMs = 0;
        }


        defGet(_s,"streamer",__get_streamer);
        function __get_streamer()  { return  _s._streamer; }

        defPrivMeth(_s,"buildInitialStreamInfo",__buildInitialStreamInfo);
        function __buildInitialStreamInfo() /* : void */  {
            var initialBitrateKbps /* : int */ = -1;
            var initialResource /* : String */ = null;

            if (_s._contentInfo != null) {
                if (_s._contentInfo.defaultReportingResource != null) {
                    initialResource = _s._contentInfo.defaultReportingResource;
                }
                if(_s._externalBitrateReporting && _s._contentInfo.defaultReportingBitrateKbps != -1) {
                    _s._externalBitrateSet = true;
                }
                initialBitrateKbps = _s._contentInfo.defaultReportingBitrateKbps;
            }
            _s._streamInfo = new StreamInfo(initialBitrateKbps, initialResource, -1, -1, -1);
        }


        /* This is how we receive notifications from the ConvivaStreamerProxy */
        defPrivMeth(_s,"notificationFromStreamerProxy",__notificationFromStreamerProxy);
        function __notificationFromStreamerProxy(notificationName /* : String */, arg /* : Object */) /* : void */  {
            _s._utils.runProtected(
                function () {
                    switch (notificationName) {
                        case "PlayingStateChange":
                            var newState /* : String */ = (arg);
                            _s.OnPlayingStateChange(newState);
                            break;
                        case "StreamInfoChange":
                            var newInfo /* : StreamInfo */ = (arg);
                            _s.SetStream(newInfo);
                            break;
                        case "ErrorChange":
                            var newError /* : StreamerError */ = (arg);
                            _s.OnError(newError);
                            break;
                        case "MetadataChange":
                            _s.OnMetadata(arg);
                            break;
                        case "Log":
                            var logMsg /* : String */ = (arg);
                            _s._utils.logSession(logMsg, _s._sessionId);
                            break;
                        case "SendSeekEvent":
                            var evt /* : DictionaryCS(string, object) */ = (arg);
                            _s.OnSeekEvent(evt);
                            break;
                        case "DisplaySizeChange":
                            var evt /* : DictionaryCS (string, int) */ = (arg);
                            _s.OnStreamSizeChange(evt);
                            break;
                        case "NetworkInfoChange":
                            var evt /* : NetworkInfo */ = (arg);
                            _s.OnNetworkInfoChange(evt);
                            break;
                    }
                }, "notificationFromStreamerProxy");
        }

        /// Set display size & raise state change event
        defPrivMeth(_s,"OnStreamSizeChange",__OnStreamSizeChange);
        function __OnStreamSizeChange(size /* : DictionaryCS */) /* : void */  {
            // DE-2668: Ensure that oldState is added only when old value is not holding default ones
            if((size.GetValue("width") > 0 && size.GetValue("width") != _s._width) || (size.GetValue("height") > 0 && size.GetValue("height") != _s._height)) {
                var newState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                var oldState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                if(size.GetValue("width") > 0 && size.GetValue("width") != _s._width) {
                    newState.SetValue("w", size.GetValue("width"));
                    if (_s._width > 0) {
                        oldState.SetValue("w", _s._width);
                    }
                    _s._width = size.GetValue("width");
                }
                if(size.GetValue("height") > 0 && size.GetValue("height") != _s._height) {
                    newState.SetValue("h", size.GetValue("height"));
                    if (_s._height > 0) {
                        oldState.SetValue("h", _s._height);
                    }
                    _s._height = size.GetValue("height");
                }
                _s.declareStateChange(newState, oldState);
            }
        }
        /// Set Network Info & raise state change event
        defPrivMeth(_s,"OnNetworkInfoChange",__OnNetworkInfoChange);
        function __OnNetworkInfoChange(nwinfo /* : NetworkInfo */) /* : void */  {
            // DE-2668: Ensure that oldState is added only when old value is not holding default ones
            // Update ct/le only if application hasn't set ct/le
            if ((_s._networkInfo.connectionType == null && nwinfo.connectionType != null && _s._connectionType != nwinfo.connectionType) ||
                (_s._networkInfo.linkEncryption == null && nwinfo.linkEncryption != null && _s._linkEncryption != nwinfo.linkEncryption)) {
                var newState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                var oldState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                if(nwinfo.connectionType != null && _s._connectionType != nwinfo.connectionType) {
                    newState.SetValue("ct", nwinfo.connectionType);
                    if (_s._connectionType != null) {
                        oldState.SetValue("ct", _s._connectionType);
                    }
                    _s._connectionType = nwinfo.connectionType;
                }
                /*//DE-2592:: if(nwinfo.ssid != null && _s._ssid != nwinfo.ssid ) {
                    newState.SetValue("ssid", nwinfo.ssid);
                    oldState.SetValue("ssid", _s._ssid);
                    _s._networkInfo.ssid = nwinfo.ssid;
                    _s._ssid = nwinfo.ssid;
                }*/
                if(nwinfo.linkEncryption != null && _s._linkEncryption != nwinfo.linkEncryption) {
                    newState.SetValue("le", nwinfo.linkEncryption);
                    if (_s._linkEncryption != null && _s._linkEncryption != undefined) {
                        oldState.SetValue("le", _s._linkEncryption);
                    }
                    _s._linkEncryption = nwinfo.linkEncryption;
                }
                _s.declareStateChange(newState, oldState);
            }
            // DE-2668: ss is handled using auto detection based on GetSignalStrength API
        }

        defPrivMeth(_s,"OnPlayingStateChange",__OnPlayingStateChange);
        function __OnPlayingStateChange(newPlayingState /* : String */) /* : void */  {
            //_s.updateStateCumulativeTime(); //TODO: deprecate in CWS 1.8
            if (_s._playingState == newPlayingState) {
                return;
            }

            var hasJoined /* : Boolean */ = _s._joinTimeMs >= 0;
            var newState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
            var oldState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
            newState.SetValue("ps", PlayerStates.stringToInt(newPlayingState));
            oldState.SetValue("ps", PlayerStates.stringToInt(_s._playingState));

            // Do we have a join?
            if (!hasJoined && newPlayingState == ConvivaStreamerProxy.PLAYING) {

                // If we have transitioned to play, and we were in pauseJoinTime mode, simulate a resumeJoinTime
                if (_s._pauseJoinTimeStartTimeMs > 0) { //TODO: deprecate in CWS 1.9
                    _s.resumeJoinTime(false);
                    newState.SetValue("pj", false);
                    oldState.SetValue("pj", true);
                }
                // Adjust join time for ad
                _s._joinTimeMs = slint.Cast(_s._utils.epochTimeMs() - _s._startTimeMs - _s._pauseJointTimeTotalMs); //TODO: deprecate in CWS 1.8

                if (_s._joinTimeMs < 0) { //TODO: deprecate in CWS 1.8
                    _s._joinTimeMs = 0;
                }
            }
            _s._utils.logSession("Monitor: change playing state to " + newPlayingState, _s._sessionId);
            _s._playingState = newPlayingState;
            _s.declareStateChange(newState, oldState);
        }

        /// Set state of streamer
        defPrivMeth(_s,"SetPlayingState",__SetPlayingState);
        function __SetPlayingState(newState /* : String */) /* : void */  {
            if (_s._playingState == newState) {
                return;
            }
            _s.OnPlayingStateChange(newState);
        }

        // Made "public" for use by Session
        defPubMeth(_s,"SetStream",__SetStream);
        function __SetStream(targetStream /* : StreamInfo */) /* : void */  {
            if (targetStream == null) {
                return;
            }
            // PD-14119
            // Prevent stale CSP state from being pushed to Monitor...
            // We can't change shared CSP behavior without affecting LivePass...
            // We can't use CSP.SetStream() to push the real state to CSP because
            // CSP.SetStream() is the original caller most of the time...
            // We can't synchronously call a separate method to accomplish the same objective either
            // since the last instruction of CSP.SetStream() will eventually override the state again...
            if (_s._streamer != null) {
                if (targetStream.bitrateKbps == _s._streamer.GetBitrateKbps()) {
                    // CSP trying to push current bitrate value as new bitrate value, reset it
                    targetStream.bitrateKbps = -2;
                }
                if (targetStream.resource == _s._streamer.GetResource()) {
                    // CSP trying to push current resource value as new resource value, reset it
                    targetStream.resource = null;
                }
            }
            if (targetStream.bitrateKbps <= -2 || _s._externalBitrateSet) targetStream.bitrateKbps = _s._streamInfo.bitrateKbps;
            if (targetStream.resource == null || targetStream.resource == ConvivaContentInfo.NO_RESOURCE) targetStream.resource = _s._streamInfo.resource;
            if (!_s._streamInfo.equals(targetStream)) {
                //_s.updateStateCumulativeTime();
                _s.enqueueStreamChangeEvent(_s._streamInfo, targetStream);
                _s._streamInfo = targetStream;
            }
        }

        /// Set bitrate at integration level
        /// If external bitrate option is not enabled for the session, this method does nothing
        /// Called by Session.setBitrate()
        defPubMeth(_s,"setBitrate",__setBitrate);
        function __setBitrate(newBitrateKbps /* : int */) /* : void */  {
            if (_s._externalBitrateReporting) {
                var newStream /* : StreamInfo */ = StreamInfo.ConstructClone(_s._streamInfo);
                newStream.bitrateKbps = newBitrateKbps;
                if (newStream.bitrateKbps != _s._streamer.GetBitrateKbps()) {
                    //_s.updateStateCumulativeTime();
                    _s.enqueueStreamChangeEvent(_s._streamInfo, newStream);
                    _s._streamInfo = newStream;
                    _s._externalBitrateSet = true;
                }
            } else {
                _s._utils.logSession("setBitrate() call ignored, enable external bitrate reporting first.", _s._sessionId);
            }
        }

        // Made "public" for use by Session.reportError()
        defPubMeth(_s,"OnError",__OnError);
        function __OnError(e /* : StreamerError */) /* : void */  {
            // When an error happens, we just send the error event
            _s.declareError(e.errorCode, (e.severity == StreamerError.SEVERITY_FATAL));
        }

        defPrivMeth(_s,"OnMetadata",__OnMetadata);
        function __OnMetadata(metadata /* : Object */) /* : void */  {
            // DE-2668: Ensure that oldState/newState is added only when old value is not holding default ones
            if (!_s._externalFpsReporting || !_s._externalDurationReporting  || !_s._externalStreamUrlReporting) {
                var metadataDict /* : DictionaryCS(string, string) */ = Lang.DictionaryFromRepr/*string, string*/(metadata);
                var newState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                var oldState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                if (metadataDict.ContainsKey(ConvivaStreamerProxy.METADATA_ENCODED_FRAMERATE) && !_s._externalFpsReporting) {
                    _s._encodedFps = slint.Cast(_s._utils.parseNumber(metadataDict.GetValue(ConvivaStreamerProxy.METADATA_ENCODED_FRAMERATE), -1));
                    _s._utils.logSession("Monitor: received " + ConvivaStreamerProxy.METADATA_ENCODED_FRAMERATE + " metadata: " + _s._encodedFps, _s._sessionId);
                    if (_s._encodedFps > 0 && _s._contentInfo.encodedFps != _s._encodedFps) {
                        if (_s._contentInfo.encodedFps > 0) {
                            oldState.SetValue("efps", _s._contentInfo.encodedFps);
                        }
                        newState.SetValue("efps", _s._encodedFps);
                        _s._contentInfo.encodedFps = _s._encodedFps;
                    }
                }
                if (metadataDict.ContainsKey(ConvivaStreamerProxy.METADATA_DURATION) && !_s._externalDurationReporting) {
                    _s._contentLengthSec = slint.Cast(_s._utils.parseNumber(metadataDict.GetValue(ConvivaStreamerProxy.METADATA_DURATION), -1));
                    _s._utils.logSession("Monitor: received " + ConvivaStreamerProxy.METADATA_DURATION + " metadata: " + _s._contentLengthSec, _s._sessionId);
                     if (_s._contentLengthSec > 0 && _s._contentInfo.duration != _s._contentLengthSec) {
                        if (_s._contentInfo.duration > 0) {
                            oldState.SetValue("cl", _s._contentInfo.duration);
                        }
                        newState.SetValue("cl", _s._contentLengthSec);
                        _s._contentInfo.duration = _s._contentLengthSec;
                    }
                }
                if (metadataDict.ContainsKey(ConvivaStreamerProxy.METADATA_STREAM_URL) && !_s._externalStreamUrlReporting) {
                    _s._streamUrl = metadataDict.GetValue(ConvivaStreamerProxy.METADATA_STREAM_URL);
                    if (typeof(_s._streamUrl) == "string" && _s._contentInfo.streamUrl != _s._streamUrl) {
                        _s._utils.logSession("Monitor: received " + ConvivaStreamerProxy.METADATA_STREAM_URL + " metadata: " + _s._streamUrl, _s._sessionId);
                        if (_s._contentInfo.streamUrl != null) {
                            oldState.SetValue("url", _s._contentInfo.streamUrl);
                        }
                        newState.SetValue("url", _s._streamUrl);
                        _s._contentInfo.streamUrl = _s._streamUrl;
                    }
                }
                _s.declareStateChange(newState, oldState);
            }
        }

        defPubMeth(_s,"OnSeekEvent",__OnSeekEvent);
        function __OnSeekEvent(evt /* : DictionaryCS(string, object) */) /* : void */  {
            _s.enqueueEvent("CwsSeekEvent", evt);
        }

        /** Update @heartbeat with current metrics. */
        defPubMeth(_s,"updateHeartbeat",__updateHeartbeat);
        function __updateHeartbeat(heartbeat /* : DictionaryCS(string, object) */) /* : void */  {
            _s.updateMetrics();
            // DE-2668: Ignore sending buildDataSampleEvent as ss is available in HB
            //_s.buildDataSampleEvent();
            var averageFps /* : int */ = -1;
            if (_s._playingFpsObservationCount > 0) {
                averageFps = slint.Cast((_s._playingFpsTotal + 0.0) / _s._playingFpsObservationCount);
            }
            if (_s._contentInfo.assetName != null) {
                NativeLang.setDictValue(heartbeat, "an", _s._contentInfo.assetName);
            }
            NativeLang.setDictValue(heartbeat, "ps", PlayerStates.stringToInt(_s._playingState));
            NativeLang.setDictValue(heartbeat, "pj", (_s._pauseJoinTimeStartTimeMs > 0 ? true : false));   // TODO: deprecate in CWS 1.9
            NativeLang.setDictValue(heartbeat, "sf", _s._sessionFlags);
            // DE-2668: Dont need to add the video session optional fields for NOT_MONITORED state
            if (_s._playingState != PlayerStates.NOT_MONITORED) {
                if (_s._contentInfo.streamUrl != null) {
                    NativeLang.setDictValue(heartbeat, "url", _s._contentInfo.streamUrl);
                }
                if (_s._contentInfo.playerName != null) {
                    NativeLang.setDictValue(heartbeat, "pn", _s._contentInfo.playerName);
                }
                if(_s._contentInfo.isLive != "unknown") {
                    NativeLang.setDictValue(heartbeat, "lv", _s._contentInfo.isLive);
                }
                if (_s._contentLengthSec >= 0) {
                    NativeLang.setDictValue(heartbeat, "cl", _s._contentLengthSec);
                }
                if (_s._streamInfo.GetBitrateKbps() > 0) {
                    NativeLang.setDictValue(heartbeat, "br", _s._streamInfo.GetBitrateKbps());
                }
                if(_s._streamInfo.GetResource()){
                     NativeLang.setDictValue(heartbeat, "rs", _s._streamInfo.GetResource());
                }
                if (_s._encodedFps >= 0) {
                    NativeLang.setDictValue(heartbeat, "efps", _s._encodedFps);
                }
                // DE-2668: Removed the logic of sending deprecated fields
                /*if (_s._renderedFps >= 0) {
                    NativeLang.setDictValue(heartbeat, "rfps", _s._renderedFps);
                }
                if (_s._droppedFps >= 0) {
                    NativeLang.setDictValue(heartbeat, "dfps", _s._droppedFps);
                }*/
                if (averageFps >= 0) {
                    NativeLang.setDictValue(heartbeat, "afps", averageFps);
                }
                if (_s._playingFpsTotal > 0) {
                    NativeLang.setDictValue(heartbeat, "rfpstot", _s._playingFpsTotal);
                }
                if (_s._playingFpsObservationCount > 0) {
                    NativeLang.setDictValue(heartbeat, "rfpscnt", _s._playingFpsObservationCount);
                }
                if (_s._width > 0) {
                    NativeLang.setDictValue(heartbeat, "w", _s._width);
                }
                if (_s._height > 0) {
                    NativeLang.setDictValue(heartbeat, "h", _s._height);
                }
            }
            if(_s._networkInfo.GetConnectionType()) {
                NativeLang.setDictValue(heartbeat, "ct", _s._networkInfo.GetConnectionType());
            } else if(_s._connectionType !== null) {
                NativeLang.setDictValue(heartbeat, "ct", _s._connectionType);
            }
            /*//DE-2592:: if(_s._networkInfo.GetSsid()) {
                NativeLang.setDictValue(heartbeat, "ssid", _s._networkInfo.GetSsid());
            }*/
            //If customer is reporting signal strength using API, customer value is given priority over auto-detection.
            if(_s._networkInfo.GetSignalStrength() <= 0) {
                NativeLang.setDictValue(heartbeat, "ss", _s._networkInfo.GetSignalStrength());
            } else if(_s._streamer !== null && typeof(_s._streamer.GetSignalStrength) == "function" && _s._streamer.GetSignalStrength() <= 0) {
                NativeLang.setDictValue(heartbeat, "ss", _s._streamer.GetSignalStrength());
            }
            if(_s._networkInfo.GetLinkEncryption()) {
                NativeLang.setDictValue(heartbeat, "le", _s._networkInfo.GetLinkEncryption());
            } else if(_s._linkEncryption !== null) {
                NativeLang.setDictValue(heartbeat, "le", _s._linkEncryption);
            }
            if(_s._streamer !== null && typeof(_s._streamer.GetPlayheadTimeMs) == "function" && _s._streamer.GetPlayheadTimeMs() >= 0) {
                NativeLang.setDictValue(heartbeat, "pht", Math.round(_s._streamer.GetPlayheadTimeMs()));
            }
            if(_s._streamer !== null && typeof(_s._streamer.GetBufferLengthMs) == "function" && _s._streamer.GetBufferLengthMs() >= 0) {
                NativeLang.setDictValue(heartbeat, "bl", Math.round(_s._streamer.GetBufferLengthMs()));
            }
        }

        defPubMeth(_s,"cleanup",__cleanup);
        function __cleanup() /* : void */  {
            if (_s._streamer != null) {
                _s._streamer.Cleanup();
            }
            _s._streamer = null;
            _s._streamerObject = null;
            _s._eventQueue = null;
            _s._contentInfo = null;
            _s._nextHeartbeat = null;
            _s._streamInfo = null;
            _s._utils = null;
        }

        defPrivMeth(_s,"updateMetrics",__updateMetrics);
        function __updateMetrics() /* : void */  {
            if (_s._streamer == null) return;
            if (_s._playingState == ConvivaStreamerProxy.PLAYING) {
                if (!_s._externalFpsReporting) {
                    var efps /* : Number */ = _s._streamer.GetSourceFrameRate();//Returns encoded frame rate
                }
                var rfps /* : Number */ = _s._streamer.GetRenderedFrameRate(); //Returns Rendered frame rate
                var dfps /* : Number */ = _s._streamer.GetDroppedFrames(); //Returns dropped frame rate
                if (efps >= 0) {
                    _s._encodedFps = efps;
                }
                if (rfps >= 0) {
                    _s._renderedFps = rfps;
                    _s._playingFpsTotal += rfps;
                    _s._playingFpsObservationCount++;
                }
                if (dfps >= 0) {
                    _s._droppedFps = dfps;
                }
            }
            //_s.updateStateCumulativeTime(); //TODO: deprecate in CWS 1.8
        }

        defPrivMeth(_s,"buildDataSampleEvent", __buildDataSampleEvent);
        function __buildDataSampleEvent() /* : void */  {
            var data /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
            //If customer is reporting signal strength using API, customer value is given priority over auto-detection.
            if(_s._networkInfo.GetSignalStrength() <= 0) {
                data.SetValue("ss", _s._networkInfo.GetSignalStrength());
            } else if(_s._streamer !== null && typeof(_s._streamer.GetSignalStrength) == "function" && _s._streamer.GetSignalStrength() <= 0) {
                data.SetValue("ss", _s._streamer.GetSignalStrength());
            }
            _s.enqueueEvent("CwsDataSamplesEvent", data);
        }

        defPrivMeth(_s,"enqueueEvent",__enqueueEvent);
        function __enqueueEvent(type /* : String */, eventData /* : DictionaryCS(string, object) */) /* : void */  {
            // DE-2668: pht and bl are optional fields for every event, moved from individual methods to common place
            if(_s._streamer !== null && typeof(_s._streamer.GetPlayheadTimeMs) == "function" && _s._streamer.GetPlayheadTimeMs() >= 0) {
                eventData.SetValue("pht", Math.round(_s._streamer.GetPlayheadTimeMs()));
            }
            if(_s._streamer !== null && typeof(_s._streamer.GetBufferLengthMs) == "function" && _s._streamer.GetBufferLengthMs() >= 0) {
                eventData.SetValue("bl", Math.round(_s._streamer.GetBufferLengthMs()));
            }
            _s._eventQueue.enqueueEvent(type, eventData, slint.Cast(_s._utils.epochTimeMs() - _s._startTimeMs));
        }

        defPrivMeth(_s,"enqueueStreamChangeEvent",__enqueueStreamChangeEvent);
        function __enqueueStreamChangeEvent(oldStream /* : StreamInfo */, newStream /* : StreamInfo */) /* : void */  {
            var newState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
            var oldState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
            // DE-2668: Ensure that oldState is added only when old value is not holding default ones
            if (oldStream.GetBitrateKbps() != newStream.GetBitrateKbps() && newStream.GetBitrateKbps() > 0) {
                if (oldStream.GetBitrateKbps() > 0) {
                    oldState.SetValue("br", oldStream.GetBitrateKbps());
                }
                newState.SetValue("br", newStream.GetBitrateKbps());
                if (oldState != null) {
                    _s._utils.logSession("Monitor: change bitrate from " + oldState.GetValue("br") + " to " + newState.GetValue("br"), _s._sessionId);
                } else {
                    _s._utils.logSession("Monitor: change bitrate to " + newState.GetValue("br"), _s._sessionId);
                }
            }
            if (oldStream.GetResource() != newStream.GetResource()) {
                if (oldStream.GetResource() > 0) {
                    oldState.SetValue("rs", oldStream.GetResource());
                }
                newState.SetValue("rs", newStream.GetResource());
                if (oldState != null) {
                    _s._utils.logSession("Monitor: change resource from " + oldState.GetValue("rs") + " to " + newState.GetValue("rs"), _s._sessionId);
                } else {
                    _s._utils.logSession("Monitor: change resource to " + newState.GetValue("rs"), _s._sessionId);
                }
            }
            _s.declareStateChange(newState, oldState);
        }

        /*//TODO: deprecate in CWS 1.8
        // DE-2668: Removed legacy unwanted logic as per CWS 2.4
        defPrivMeth(_s,"updateStateCumulativeTime",__updateStateCumulativeTime);
        function __updateStateCumulativeTime()  : void   {
            var now  : Number  = _s._utils.epochTimeMs();
            var playingStateInt  : int  = PlayerStates.stringToInt(_s._playingState);
            if (_s._playingState != ConvivaStreamerProxy.UNKNOWN) {
                var delta  : int  = slint.Cast(now - _s._lastStateUpdateTimeMs);
                var bitrateKbps  : int  = _s._streamInfo.GetBitrateKbps();
                if (_s._playingState == ConvivaStreamerProxy.PLAYING && bitrateKbps != -1) {
                    _s._nominalPlayingBitsTotal += (delta * bitrateKbps); // ms * kilobits / s = bits
                }
            }
            _s._lastStateUpdateTimeMs = now;
        }*/

        defPrivMeth(_s,"declareError",__declareError);
        function __declareError(errorMsg /* : String */, isFatal /* : Boolean */) /* : void */  {
            if (_s._joinTimeMs < 0 && isFatal) { //TODO: deprecate in CWS 1.8
                // Join failure.
                _s._joinTimeMs = -2;
            }
            var data /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
            data.SetValue("ft", isFatal);
            // DE-2668: Backend doesn't allow null value for err which is mandatory for CwsErrorEvent
            if (errorMsg != null) {
                data.SetValue("err", errorMsg);
            } else {
                data.SetValue("err", "");
            }
            _s.enqueueEvent("CwsErrorEvent", data);
        }

        defPrivMeth(_s,"declareStateChange",__declareStateChange);
        function __declareStateChange(newState /* : DictionaryCS(string, object) */, oldState /* : DictionaryCS(string, object) */) /* : void */  {
            // We construct a native dictionary for the data
            if (newState.Count > 0) {
                var newStateNative = Lang.StringDictionaryToRepr(newState);
                var data /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                data.SetValue("new", newStateNative);
                if (oldState != null && oldState.Count > 0) {
                    var oldStateNative = Lang.StringDictionaryToRepr(oldState);
                    data.SetValue("old", oldStateNative);
                }
                _s.enqueueEvent("CwsStateChangeEvent", data);
            }
        }

        defStatMeth(_s,Monitor,"wrapInConvivaStreamerProxy",__wrapInConvivaStreamerProxy);
        function __wrapInConvivaStreamerProxy(streamer /* : Object */, sessionId /* : int */) /* : ConvivaStreamerProxy */  {
            //NO_RENAME:networkState,readyState,getStreamerType,getAttribute,indexOf
            //NO_RENAME:setQosData,licenseResponse,currentPTS,availableAudioStreams
            //NO_RENAME:textTrackDisplay,mediaLoader
            // Add wrappers for new streamer types here.
            // ALBAN: properly wrap around native Samsung streamers as well
            // That way we don't need to tweak the Touchstone Driver class
            // This should become default behavior if we manage to get rid of the SamsungStreamer class someday
            var realSamsungStreamerProxy /* : var */ = null;
            try {
                if (streamer.getAttribute && streamer.getAttribute("classid").indexOf("clsid:SAMSUNG-INFOLINK") >= 0) {
                    realSamsungStreamerProxy = new SamsungStreamerProxy(streamer);
                    realSamsungStreamerProxy.startMonitoring(); // Shouldn't this call happen in the constructor?
                }
            } catch(e) {}
            if (realSamsungStreamerProxy) {
                return realSamsungStreamerProxy;
            } else if (streamer.hasOwnProperty('getStreamerType') && streamer.getStreamerType() == 'Samsung') {
                return SamsungStreamerProxy.createSamsungStreamerProxy(streamer);
            } else if (streamer.setQosData !== undefined && streamer.licenseResponse !== undefined) {
                return new PlayStationTouchFactorStreamerProxy(); // streamer is global vod.player interface
            } else if (streamer.codecs !== undefined && streamer.maxBufferLength !== undefined) {
                return new PlayStationLibjscriptStreamerProxy(); // streamer is global videometrics interface
            } else if (streamer.textTrackDisplay !== undefined && streamer.mediaLoader !== undefined) {
                return new ConvivaVideojsStreamerProxy(streamer);
            } else if (streamer.networkState !== undefined && streamer.readyState !== undefined) {
                return new Html5ConvivaStreamerProxy(streamer);
            } else if (streamer.currentPTS !== undefined && streamer.availableAudioStreams !== undefined) {
                return new PlayStationTrilithiumStreamerProxy(streamer);
            } else if (streamer.mediaElementAdapter !== undefined) {
                return new Xbox1ConvivaStreamerProxy(streamer);
            } else if (streamer.MbId !== undefined && streamer.blockedParams !== undefined) {
                return new ConvivaOoyalaStreamerProxy(streamer);
            } else if (streamer.mb !== undefined && (streamer.mb.MbId !== undefined && streamer.mb.blockedParams !== undefined)) {
                return new ConvivaOoyalaStreamerProxy(streamer.mb);

            } else {
                return streamer;
            }
        }

        defPubMeth(_s,"UpdateConnectionType",__updateConnectionType);
        function __updateConnectionType() /* : void */  {
            // DE-2668: Removed the unwanted argument ct and Ensure that oldState is added only when old value is not holding default ones
            if (_s._networkInfo != null && _s._networkInfo.connectionType != null && _s._connectionType != _s._networkInfo.connectionType) {
                var newState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                var oldState /* : DictionaryCS(string, object) */ = null;
                newState.SetValue("ct", _s._networkInfo.connectionType);
                if (_s._connectionType != null) {
                    var oldState = new DictionaryCS/*<string, object>*/();
                    oldState.SetValue("ct", _s._connectionType);
                }
                _s._connectionType = _s._networkInfo.connectionType;
                _s.declareStateChange(newState, oldState);
            }
        }
        //DE-2592
        /*defPubMeth(_s,"UpdateSsid",__updateSsid);
        function __updateSsid(ssid) /* : void   {
            if (_s._networkInfo != null && ssid != null) {
                var newState /* : DictionaryCS(string, object)  = new DictionaryCS/*<string, object>();
                var oldState /* : DictionaryCS(string, object)  = null; //No old values available
                newState.SetValue("ssid", ssid);
                _s.declareStateChange(newState, oldState);
            }
        }*/
        defPubMeth(_s,"UpdateSignalStrength",__updateSignalStrength);
        function __updateSignalStrength() /* : void */  {
            // DE-2668: Requirement is unclear from CWS 2.4 spec
            // Not sending the CwsDataSampleEvent when ss is unchanged similar to other metrics
            if (_s._networkInfo != null && _s._networkInfo.signalStrength <= 0 && _s._signalStrength != _s._networkInfo.signalStrength) {
                _s.buildDataSampleEvent();
                _s._signalStrength = _s._networkInfo.signalStrength;
            }
        }
        defPubMeth(_s,"UpdateLinkEncryption",__updateLinkEncryption);
        function __updateLinkEncryption() /* : void */  {
            // DE-2668: Removed the unwanted argument le and Ensure that oldState is added only when old value is not holding default ones
            if (_s._networkInfo != null && _s._networkInfo.linkEncryption != null && _s._linkEncryption != _s._networkInfo.linkEncryption) {
                var newState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                var oldState /* : DictionaryCS(string, object) */ = null;
                newState.SetValue("le", _s._networkInfo.linkEncryption);
                if (_s._linkEncryption != null) {
                    var oldState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                    oldState.SetValue("le", _s._linkEncryption);
                }
                _s._linkEncryption = _s._networkInfo.linkEncryption;
                _s.declareStateChange(newState, oldState);
            }
        }
        defPrivMeth(_s, "StartRfpsCounter", __startRfpsCounter)
        function __startRfpsCounter() /* : void */ {
            _s._stopRfpsCounter = _s._utils._settings.platformApi.createTimer(
                _s.RfpsCounter, 1000, 'Monitor.RfpsCounter'
            );
        }
        defPrivMeth(_s, "RfpsCounter", __rfpsCounter);
        function __rfpsCounter() /* : void */ {
            if (_s._streamer == null) return;
            if (_s._playingState == ConvivaStreamerProxy.PLAYING) {
                var rfps /* : Number */ = _s._streamer.GetRenderedFrameRate();
                if (rfps >= 0) {
                    _s._renderedFps = rfps;
                    _s._playingFpsTotal += rfps;
                    _s._playingFpsObservationCount++;
                }
            }
        }
        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(Monitor,"Monitor");
// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../../csClient/CwsClient/session/EventQueue.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-



// namespace session
    function EventQueue() {
        var _s = this;
        //NOTE(henry): For speed, we implement _events as a native data
        // structure rather than a ListCS.
        if(_s != STAT_INIT) _s._events /* : ListCS(object) */ = null;
        if(_s != STAT_INIT) _s._nextSeqNumber /* : int */ = 0;

        function _constr() {
            _s._events = NativeLang.makeList();
        }

        defPubMeth(_s,"enqueueEvent",__enqueueEvent);
        function __enqueueEvent(type /* : String */, data /* : DictionaryCS(string, object) */, timeSinceSessionStart /* : int */) /* : void */  {
            data.SetValue("t", type);
            data.SetValue("st", timeSinceSessionStart);
            data.SetValue("seq", _s._nextSeqNumber);
            _s._nextSeqNumber++;
            NativeLang.addListValue(_s._events, Lang.StringDictionaryToRepr(data));
        }
        
        //NOTE(henry): Not really a DictionaryCS - native dictionary.
        defPubMeth(_s,"flushEvents",__flushEvents);
        function __flushEvents() /* : ListCS(object) */  {
            var currentEvents /* : ListCS(object) */ = _s._events;
            _s._events = NativeLang.makeList();
            return currentEvents;
        }
        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(EventQueue,"EventQueue");

// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../../csClient/CwsClient/session/Session.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-



// namespace session
    function Session() {
        var _s = this;
        //@owner
        if(_s != STAT_INIT) _s._contentInfo /* : ConvivaContentInfo */ = null;
        if(_s != STAT_INIT) _s._networkInfo /* : NetworkInfo */ = null;
        // A copy of tags from _contentInfo, in native dictionary form for
        // faster encoding.
        if(_s != STAT_INIT) _s._nativeReprTags /* : Object */ = null;
        if(_s != STAT_INIT) _s._utils /* : Utils */ = null;
        if(_s != STAT_INIT) _s._settings /* : Settings */ = null;
        //@owner
        if(_s != STAT_INIT) _s._monitor /* : Monitor */ = null; // May be null for a non-video session
        //@owner
        if(_s != STAT_INIT) _s._eventQueue /* : EventQueue */ = null;

        if(_s != STAT_INIT) _s._clientIdWaiter /* : Function */ = null;
        if(_s != STAT_INIT) _s._heartbeatTimer /* : Cleanable */ = null;
        if(_s != STAT_INIT) _s._encodeHeartbeatTimer /* : Cleanable */ = null;

        // Whether we are sending logs. We keep this setting global because when
        // we send the first HB in the session we want to inherit the log-sending behavior.
        // This makes sense because the logs are accumulated and sent globally also.
        if(_s == STAT_INIT) Session._sendLogs /* : Boolean */ = false;

        if(_s != STAT_INIT) _s._sessionId /* : int */ = 0;

        if(_s != STAT_INIT) _s._startTimeMs /* : Number */ = 0;
        if(_s != STAT_INIT) _s._heartbeatSequenceNumber /* : int */ = 0;

        function _constr(streamer /* : Object */, contentInfo /* : ConvivaContentInfo */, options /* : Object */, global /* : Boolean */, networkInfo /* NetworkInfo */) {
            _s._contentInfo = contentInfo;
            _s._networkInfo = networkInfo;
            _s._utils = Utils.getInstance();
            _s._settings = _s._utils.getSettings();
            _s._sessionId = _s._utils.randInt();
            /* Some sanity checking for tags. The tags are represented as a native dictionary */
            var langTags /* : DictionaryCS(string, string) */ = Lang.DictionaryFromRepr/*string, string*/(_s._contentInfo.tags);
            var keysToCorrect /* : ListCS(string) */ = new ListCS/*string*/(); // Cannot modify the tags while iterating
            var _for_array_1 =  langTags.Keys;
            for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
              var tkey /* : String */ = _for_array_1[_for_idx_2];

                if(langTags.GetValue(tkey) == null) {
                    keysToCorrect.Add(tkey);
                }
            }
            var _for_array_3 =  keysToCorrect.Values;
            for(var _for_idx_4=0; _for_idx_4 < _for_array_3.length; _for_idx_4++) {
              var tkey1 /* : String */ = _for_array_3[_for_idx_4];

                _s.log("WARNING: correcting null value for tag "+tkey1);
                NativeLang.setDictValue/*string, string*/(_s._contentInfo.tags, tkey1, "null");
            }
            _s._nativeReprTags = Lang.StringDictionaryToRepr(_s._contentInfo.tags);

            _s._eventQueue = new EventQueue();

            if (!global) { // Global session does not have a monitor
                _s._streamer = streamer;//Keep track of streamer to get PHT for all events.
                _s._monitor = new Monitor(streamer, _s._eventQueue, _s._contentInfo, options, _s._sessionId, _s._networkInfo);
            }
        }

        defPubMeth(_s,"start",__start);
        function __start() /* : void */  {
            if (_s._monitor != null) {
                _s.log("Session.start(): assetName=" + _s._contentInfo.assetName);
            }
            _s._startTimeMs = _s._utils.epochTimeMs();
            if (_s._monitor != null) {
                _s._monitor.start(_s._startTimeMs);
            }
            _s._heartbeatSequenceNumber = 0;

            if (_s._utils.clientIdLoadingDone == null) {
                //we've got a client id, so send out heartbeat immediately
                _s.sendHeartbeat();
            } else {
                //we should always listen to clientIdAvailable in case that
                //the current client id is 0. The listener will be removed
                //in onClientIdAvailable once a valid client id is received
                _s._clientIdWaiter = _s.onClientIdLoaded;
                _s._utils.clientIdLoadingDone.AddHandler(_s._clientIdWaiter);
            }
            _s._heartbeatTimer = null;
            _s.resetHeartbeatTimer();
        }

        defPubMeth(_s,"cleanup",__cleanup);
        function __cleanup() /* : void */  {
            _s.log("Session.cleanup()" + _s.sessionTypeTag());
            if (_s._heartbeatTimer != null) {
                _s._heartbeatTimer.cleanup();
            }
            _s._heartbeatTimer = null;
            _s._utils.logSession("Schedule the last hb before session cleanup" + _s.sessionTypeTag(), _s._sessionId);

            // PD-10965: CWS 1.6 graceful session end, only for video sessions
            if (_s._monitor != null) {
                _s.enqueueSessionEndEvent();
            }

            var urgentHb /* : Object */ = _s.makeHeartbeat();
            if (urgentHb != null) {
                _s.encodeAndPostHeartbeat(urgentHb,
                    function () {
                        //cleanup the rest of the session
                        _s.cleanupAll();
                    });
            } else {
                //no hb to send
                _s.cleanupAll();
            }
        }

        defPrivMeth(_s,"enqueueSessionEndEvent",__enqueueSessionEndEvent);
        function __enqueueSessionEndEvent() /* : void */  {
            var eventData /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
            _s.enqueueEvent("CwsSessionEndEvent", eventData);
        }


        /// <summary>
        /// Suspend the accumulation of join time. Use, e.g., when an ad is starting and the time should not
        /// be counted as part of the join time.
        /// </summary>
        defPubMeth(_s,"pauseJoinTime",__pauseJoinTime);
        function __pauseJoinTime() /* : void */  {
            if (_s._monitor != null) {
                _s._monitor.pauseJoinTime();
            }
        }

        /// <summary>
        /// Resume the accumulation of join time.
        /// </summary>
        defPubMeth(_s,"resumeJoinTime",__resumeJoinTime);
        function __resumeJoinTime() /* : void */  {
            if (_s._monitor != null) {
                _s._monitor.resumeJoinTime(true);
            }
        }

        /// <summary>
        /// Suspend the accumulation of join time. Use, e.g., when an ad is starting and the time should not
        /// be counted as part of the join time.
        /// </summary>
        defPubMeth(_s,"adStart",__adStart);
        function __adStart() /* : void */  {
            // Currently makes sure we stop discounting ad time from join time.
            // Eventually it should send an ad event and let backend decide what to do with it.
            _s.pauseJoinTime();
        }

        /// <summary>
        /// Resume the accumulation of join time.
        /// </summary>
        defPubMeth(_s,"adEnd",__adEnd);
        function __adEnd() /* : void */  {
            // Currently makes sure we start discounting ad time from join time.
            // Eventually it should send an ad event and let backend decide what to do with it.
            _s.resumeJoinTime();
        }

        /// <summary>
        /// Pause monitoring and detach streamer
        /// Typically used for mid-roll advertisement
        /// </summary>
        defPubMeth(_s,"detachStreamer",__detachStreamer);
        function __detachStreamer() /* : void */  {
            _s._monitor.detachStreamer();
        }

        /// <summary>
        /// Resume monitoring if paused and attach new streamer
        /// </summary>
        defPubMeth(_s,"attachStreamer",__attachStreamer);
        function __attachStreamer(streamer /* : Object */) /* : void */  {
            _s._monitor.attachStreamer(streamer);
        }

        /* Restart the heartbeat timer using the current settings */
        defPrivMeth(_s,"resetHeartbeatTimer",__resetHeartbeatTimer);
        function __resetHeartbeatTimer() /* : void */  {
            if (_s._heartbeatTimer != null) {
                _s._heartbeatTimer.cleanup();
            }
            _s._heartbeatTimer = _s._utils.createTimer(_s.sendHeartbeat, _s._settings.heartbeatIntervalMs, "sendHeartbeat");
        }

        defPrivMeth(_s,"cleanupAll",__cleanupAll);
        function __cleanupAll() /* : void */  {
            if (_s._clientIdWaiter != null) {
                _s._utils.clientIdLoadingDone.DeleteHandler(_s._clientIdWaiter);
                _s._clientIdWaiter = null;
            }
            if (_s._monitor != null) {
                _s._monitor.cleanup();
                _s._monitor = null;
            }
            if (_s._encodeHeartbeatTimer != null) {
                _s._encodeHeartbeatTimer.cleanup();
                _s._encodeHeartbeatTimer = null;
            }
            if (_s._eventQueue != null) {
                _s._eventQueue.flushEvents();
                _s._eventQueue = null;
            }
            _s._contentInfo = null;
            _s._nativeReprTags = null;
            _s._settings = null;
            _s._utils = null;
        }

        defPrivMeth(_s,"log",__log);
        function __log(message /* : String */) /* : void */  {
            _s._utils.logSession(message, _s._sessionId);
        }

        // The API uses this to report StreamErrors
        defPubMeth(_s,"reportError",__reportError);
        function __reportError(err /* : StreamerError */) /* : void */  {
            _s.log("Session.reportError()");
            if (_s._monitor != null) {
                // Push to monitor
                _s._monitor.OnError(err);
            }
        }

        // The API uses this for manual bitrate reporting
        defPubMeth(_s,"setBitrate",__setBitrate);
        function __setBitrate(bitrateKbps /* : int */) /* : void */  {
            _s.log("Session.setBitrate(): bitrateKbps=" + bitrateKbps);
            if (_s._monitor != null) {
                _s._monitor.setBitrate(bitrateKbps);
            }
        }

        // The API uses this to update the stream metadata
        defPubMeth(_s,"setCurrentStreamMetadata",__setCurrentStreamMetadata);
        function __setCurrentStreamMetadata(metadata /* : Object */) /* : void */  {
            _s.log("Session.setCurrentStreamMetadata()");
            if (_s._monitor != null && _s._monitor.streamer != null) {
                // Push it directly into the proxy
                _s._monitor.streamer.SetMetadata(metadata);
            }
        }

        // The API uses this to update the mid-stream metadata
        defPubMeth(_s,"updateContentMetadata",__updateContentMetadata);
        function __updateContentMetadata(cci /* : ConvivaContentInfo <Object> */) /* : void */  {
            if (_s._monitor != null && _s._monitor.streamer != null) {
                var newState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                var oldState /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();

                //Clone already existing content info - assetName & tags for Q1-2017 release.
                var oldCci={};
                var makeStrMetadata = false;//Flag used to check if there are changes in string-string metadata to construct "strMetadata" in HB
                oldCci.assetName = _s._contentInfo.assetName;
                oldCci.streamUrl = _s._contentInfo.streamUrl;
                oldCci.defaultReportingResource = _s._contentInfo.defaultReportingResource;
                oldCci.viewerId = _s._contentInfo.viewerId;
                oldCci.playerName = _s._contentInfo.playerName;
                oldCci.isLive = _s._contentInfo.isLive;
                oldCci.duration = _s._contentInfo.duration;
                oldCci.encodedFps = _s._contentInfo.encodedFps;

                // DE-2668: Ensure that oldState is added only when old value is not holding default ones for any ContentMetadata
                //Update if there is a change in assetName
                if(cci.assetName != null && oldCci.assetName != cci.assetName) {
                    if (oldCci.assetName != null) {
                        oldState.SetValue("an", oldCci.assetName);
                    }
                    newState.SetValue("an", cci.assetName);
                    _s._contentInfo.assetName = cci.assetName;
                }

                //Update if there is a change in streamUrl
                if(cci.streamUrl != null && oldCci.streamUrl != cci.streamUrl) {
                    if (oldCci.streamUrl != null) {
                        oldState.SetValue("url", oldCci.streamUrl);
                    }
                    newState.SetValue("url", cci.streamUrl);
                    _s._contentInfo.streamUrl = cci.streamUrl;
                    _s._monitor._externalStreamUrlReporting = true;
                }

                //Update if there is a change in Resource.
                if(cci.defaultReportingResource != null && oldCci.defaultReportingResource != cci.defaultReportingResource) {
                    var newStream /* : StreamInfo */ = new StreamInfo(-2, cci.defaultReportingResource, -1, -1, -1);
                    if (oldCci.defaultReportingResource != null) {
                        oldState.SetValue("rs", oldCci.defaultReportingResource);
                    }
                    newState.SetValue("rs", cci.defaultReportingResource);
                    _s._contentInfo.defaultReportingResource = cci.defaultReportingResource;
                    // DE-2668: Ensure that only streamInfo.resource is updated for change in resource
                    _s._monitor._streamInfo.resource = newStream.resource;
                }

                //For fields not part of cwsStateChangeEvent, send them part of convivatags in HB.
                //Only covers fields that have a "String" to "string" key value pairs. (viewerId & PlayerName)
                var oldStrMetadataHb = {};
                var newStrMetadataHb = {};
                if(cci.viewerId != null && oldCci.viewerId != cci.viewerId) {
                    if (oldCci.viewerId != null) {
                        oldStrMetadataHb.vid = oldCci.viewerId;
                    }
                    newStrMetadataHb.vid = cci.viewerId;
                    _s._contentInfo.viewerId = cci.viewerId;
                }
                if(cci.playerName != null && oldCci.playerName != cci.playerName) {
                    if (oldCci.playerName != null) {
                        oldStrMetadataHb.pn = oldCci.playerName;
                    }
                    newStrMetadataHb.pn = cci.playerName;
                    _s._contentInfo.playerName = cci.playerName;
                }

                //Construct strMetadata Dict in HB with changes in viewerId & playerName
                if(Lang.dictCount(newStrMetadataHb) > 0) {
                    if (Lang.dictCount(oldStrMetadataHb) > 0) {
                        oldState.SetValue("strmetadata", oldStrMetadataHb);
                    }
                    newState.SetValue("strmetadata", newStrMetadataHb);
                }

                // For fields not part of cwsStateChangeEvent & not "string" to "string" key value pairs.
                // (isLive, Duration & encodedFps) Send them as individual fields in statechangeEvent

                if(cci.isLive != "unknown" && oldCci.isLive != cci.isLive) {
                    if(oldCci.isLive != "unknown") {
                        oldState.SetValue("lv", oldCci.isLive);
                    }
                    newState.SetValue("lv", cci.isLive);
                    _s._contentInfo.isLive = cci.isLive;
                }

                //Duration & encodedFps is defaulted to -1 if null is set or no value is set
                if(cci.duration != -1 || cci.encodedFps != -1) {
                    if(oldCci.duration != cci.duration && cci.duration != -1) {
                        if (oldCci.duration > -1) {
                            oldState.SetValue("cl", oldCci.duration);
                        }
                        newState.SetValue("cl", cci.duration);
                        _s._contentInfo.duration = cci.duration;
                        _s._monitor._contentLengthSec = slint.Cast(_s._utils.parseNumber(cci.duration, -1));
                        _s._monitor._externalDurationReporting = true;
                    }
                    if(oldCci.encodedFps != cci.encodedFps && cci.encodedFps != -1) {
                        if (oldCci.encodedFps > -1) {
                            oldState.SetValue("efps", oldCci.encodedFps);
                        }
                        newState.SetValue("efps", cci.encodedFps);
                        _s._contentInfo.encodedFps = cci.encodedFps;
                        _s._monitor._encodedFps = slint.Cast(_s._utils.parseNumber(cci.encodedFps, -1));
                        _s._monitor._externalFpsReporting = true;
                    }
                }


                //Check if new tags are set and replace old ones.
                if(cci.tags) {
                    /* Some sanity checking for tags. The tags are represented as a native dictionary */
                    var langTags /* : DictionaryCS(string, string) */ = Lang.DictionaryFromRepr/*string, string*/(cci.tags);

                    //Correct the tags dictionary in case of errors.
                    var keysToCorrect /* : ListCS(string) */ = new ListCS/*string*/(); // Cannot modify the tags while iterating
                    var _for_array_1 = langTags.Keys;
                    for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                      var tkey /* : String */ = _for_array_1[_for_idx_2];

                        if(langTags.GetValue(tkey) == null) {
                            keysToCorrect.Add(tkey);
                        }
                    }
                    var _for_array_3 =  keysToCorrect.Values;
                    for(var _for_idx_4=0; _for_idx_4 < _for_array_3.length; _for_idx_4++) {
                      var tkey1 /* : String */ = _for_array_3[_for_idx_4];

                        _s.log("WARNING: correcting null value for tag "+tkey1);
                        NativeLang.setDictValue/*string, string*/(cci.tags, tkey1, "null");
                    }

                    //Check for changed values, otherwise append new tags to old.
                    langTags /* : DictionaryCS(string, string) */ = Lang.DictionaryFromRepr/*string, string*/(cci.tags);
                    //Collect keys to check
                    var keysToCheck = langTags.Keys;
                    var valuesToCheck = langTags.Values;
                    oldCci.tags = {};
                    for (var keyIndex=0; keyIndex < keysToCheck.length; keyIndex++) {
                        var tagKey  = keysToCheck[keyIndex];
                        //Update existing key with new value
                        if (_s._contentInfo.tags[tagKey] != undefined && _s._contentInfo.tags[tagKey] != valuesToCheck[keyIndex]) {
                            oldCci.tags[tagKey] = _s._contentInfo.tags[tagKey];
                            _s._contentInfo.tags[tagKey] = valuesToCheck[keyIndex];
                        } else if(_s._contentInfo.tags[tagKey] == undefined) {
                            //New key - Append to existing tags
                            _s._contentInfo.tags[tagKey] = valuesToCheck[keyIndex];
                        } else if(_s._contentInfo.tags[tagKey] != undefined && _s._contentInfo.tags[tagKey] == valuesToCheck[keyIndex]) {
                            //Unchanged value - Delete from list
                            delete cci.tags[tagKey];
                        }

                        //If empty, then do not set tags in statechange event
                        if (JSON.stringify(oldCci.tags) != "{}") {
                            oldState.SetValue("tags", oldCci.tags);
                        }
                        if (JSON.stringify(cci.tags) != "{}") {
                            newState.SetValue("tags", cci.tags);
                        }
                    }
                }

                //Fire state change event
                var data /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
                var newStateNative = Lang.StringDictionaryToRepr(newState);
                var oldStateNative = Lang.StringDictionaryToRepr(oldState);
                data.SetValue("new", newStateNative);
                // null check is not right. Check if oldstate contains empty object
                if (JSON.stringify(oldStateNative) != "{}") {
                    data.SetValue("old", oldStateNative);
                }
                if (!data.IsEmpty("old") || !data.IsEmpty("new") ) {
                    _s.log("Session.updateContentMetadata()");
                    _s.enqueueEvent("CwsStateChangeEvent", data);
                    //Update Monitor's content info
                    _s._monitor._contentInfo = _s._contentInfo;
                }
            }
        }

        defPubMeth(_s,"sendSeekEvent",__sendSeekEvent);
        function __sendSeekEvent(actType /* : LivePass.SEEK_ACTIONS_TYPE */, seekToPos /* : int */) /* : void */  {
            if (_s._monitor != null) {
                _s.log("Session.sendSeekEvent()");
                var eventData = new DictionaryCS();
                eventData.SetValue("act", actType);
                if(seekToPos >= 0) {
                    eventData.SetValue("skto", seekToPos);
                }
                _s._monitor.OnSeekEvent(eventData);
            }
        }

        defPubMeth(_s,"sendCustomEvent",__sendCustomEvent);
        function __sendCustomEvent(name /* : String */, eventAttrs /* : DictionaryCS(string, object) */) /* : void */  {
            _s.log("Session.sendEvent(): eventName=" + name + _s.sessionTypeTag());
            var eventData /* : DictionaryCS(string, object) */ = new DictionaryCS/*<string, object>*/();
            eventData.SetValue("name", name);
            // We construct a native dictionary for the attributes
            var eventAttrsNative = Lang.StringDictionaryToRepr(eventAttrs);
            // De-2668: attr is an optional field, to be added only if size > 0
            if (Lang.dictCount(eventAttrsNative) > 0) {
                eventData.SetValue("attr", eventAttrsNative);
            }
            _s.enqueueEvent("CwsCustomEvent", eventData);
        }

        defPrivMeth(_s,"enqueueEvent",__enqueueEvent);
        function __enqueueEvent(type /* : String */, data /* : DictionaryCS(string, object) */) /* : void */  {
            // DE-2668: pht and bl are optional fields for every event, moved from individual methods to common place
            if(_s._streamer !== null && typeof(_s._streamer.GetPlayheadTimeMs) == "function" && _s._streamer.GetPlayheadTimeMs() >= 0) {
                data.SetValue("pht", Math.round(_s._streamer.GetPlayheadTimeMs()));
            }
            if(_s._streamer !== null && typeof(_s._streamer.GetBufferLengthMs) == "function" && _s._streamer.GetBufferLengthMs() >= 0) {
                data.SetValue("bl", Math.round(_s._streamer.GetBufferLengthMs()));
            }
            _s._eventQueue.enqueueEvent(type, data, slint.Cast(_s._utils.epochTimeMs() - _s._startTimeMs));
        }

        defPrivMeth(_s,"sendHeartbeat",__sendHeartbeat);
        function __sendHeartbeat() /* : void */  {
            var heartbeat /* : Object */ = null;
            if (_s._encodeHeartbeatTimer != null) {
                _s._encodeHeartbeatTimer.cleanup();
            }
            _s._encodeHeartbeatTimer = _s._utils.scheduleAction(
                function () {
                    heartbeat = _s.makeHeartbeat();
                    if (heartbeat != null) {
                        _s._encodeHeartbeatTimer = _s._utils.scheduleAction(
                            function () {
                                _s.encodeAndPostHeartbeat(heartbeat, null);
                                _s._encodeHeartbeatTimer = null;
                            }, 1, "encodeAndSendHeartbeat");
                    }
                }, 1, "makeHeartbeat");
        }

        //NOTE(henry): Not really a DictionaryCS - a native dictionary.  Any
        // structures contained in the heartbeat are also native.  This is the
        // simplest and fastest way to ensure that the Slash data structures
        // are not actually encoded when it is time to convert the heartbeat to
        // JSON.  However, it means that this object cannot be interacted with
        // after its creation, except by the JSON encoder.
        defPrivMeth(_s,"makeHeartbeat",__makeHeartbeat);
        function __makeHeartbeat() /* : Object */  {
            // DE-2668: Add check for monitor and events before processing any events
            var currentEvents /* : ListCS(object) */ = _s._eventQueue.flushEvents();
            // If this is a global session, with no events, suppress this HB
            // Do this check before we consume the logs, or increase the heartbeatSequenceNumber
            if (_s._monitor == null && NativeLang.listCount(currentEvents) == 0) {
                return null;
            }

            var heartbeat = {};
            NativeLang.setDictValue(heartbeat, "t", "CwsSessionHb");
            // DE-2668: evs is optional field and add it only when size > 0
            if (NativeLang.listCount(currentEvents) > 0) {
                NativeLang.setDictValue(heartbeat, "evs", currentEvents);
            }
            NativeLang.setDictValue(heartbeat, "cid", _s._settings.customerKey);
            NativeLang.setDictValue(heartbeat, "clid", _s._utils.clientId);
            NativeLang.setDictValue(heartbeat, "sid", _s._sessionId);
            NativeLang.setDictValue(heartbeat, "seq", _s._heartbeatSequenceNumber);
            NativeLang.setDictValue(heartbeat, "pver", _s._settings.protocolVersion);
            NativeLang.setDictValue(heartbeat, "clv", _s._settings.clientVersion);
            NativeLang.setDictValue(heartbeat, "iid", _s._settings.clientInstanceId);
            var platformMetadata /* : Object */ = Lang.StringDictionaryToRepr/*string*/(_s._settings.platformApi.getPlatformMetadata());
            if (platformMetadata != null) {
                NativeLang.setDictValue(heartbeat, "pm", platformMetadata);
                // DE-2668: Add fw/fwv/pt at HB level as well as per CWS 2.4 spec
                if (platformMetadata.fw != null) {
                    NativeLang.setDictValue(heartbeat, "fw", platformMetadata.fw);
                }
                if (platformMetadata.fwv != null) {
                    NativeLang.setDictValue(heartbeat, "fwv", platformMetadata.fwv);
                }
                if (platformMetadata.pt != null) {
                    NativeLang.setDictValue(heartbeat, "pt", platformMetadata.pt);
                }
                if (platformMetadata.ptv != null) {
                    NativeLang.setDictValue(heartbeat, "ptv", platformMetadata.ptv);
                }
            }
            if (_s._contentInfo.viewerId != null) {
                NativeLang.setDictValue(heartbeat, "vid", _s._contentInfo.viewerId);
            }
            if (Lang.dictCount(_s._nativeReprTags) > 0) {
                NativeLang.setDictValue(heartbeat, "tags", _s._nativeReprTags);
            }
            // always set to 0 for Insights
            NativeLang.setDictValue(heartbeat, "caps", 0);

            if (Session._sendLogs) {
                NativeLang.setDictValue(heartbeat, "lg", Lang.ListToRepr/*string*/(_s._utils.getLogs(_s._sessionId)));
            }
            // Call the monitor.updateHeartbeat before we package the events
            // DE-2668: UpdateHeartbeat fetching bl need to invoked just before creating st, hence moved this call just before st is measured
            // Moved the logic of fetching mandatory or optional fields of video sessions to Monitor
            if (_s._monitor != null) {
                _s._monitor.updateHeartbeat(heartbeat);
            } else {
                // Global session
                NativeLang.setDictValue(heartbeat, "sf", 0);
            }
            // Put the timestamps last
            var currentTime /* : Number */ = _s._utils.epochTimeMs();
            NativeLang.setDictValue(heartbeat, "st", slint.Cast(currentTime - _s._startTimeMs));
            NativeLang.setDictValue(heartbeat, "sst", _s._startTimeMs);
            _s._heartbeatSequenceNumber++;
            return heartbeat;
        }

        defPrivMeth(_s,"sessionTypeTag",__sessionTypeTag);
        function __sessionTypeTag() /* : String */  {
            if (_s._monitor == null)
                return " (global session)";
            return "";
        }

        /* Encode and POST a heartbeat asynchronously.
         * afterPostCbk - callback to call after encoding and posting
         */
        defPrivMeth(_s,"encodeAndPostHeartbeat",__encodeAndPostHeartbeat);
        function __encodeAndPostHeartbeat(heartbeat /* : Object */, afterPostCbk /* : Function */) /* : void */  {
            var jsonHeartbeat /* : String */ = _s._utils.jsonEncode(heartbeat);
            var url /* : String */ = _s._settings.gatewayUrl + _s._settings.gatewayPath;
            var contentType /* : String */ = "application/json";
            _s.log("Send HB[" + (_s._heartbeatSequenceNumber - 1) + "]" + _s.sessionTypeTag());
            _s._utils.httpRequest(true, url, jsonHeartbeat, contentType, _s.onHeartbeatResponse);
            if (afterPostCbk != null) {
                afterPostCbk();
            }
        }



        defPrivMeth(_s,"onHeartbeatResponse",__onHeartbeatResponse);
        function __onHeartbeatResponse(isSuccess /* : Boolean */, jsonResponse /* : String */) /* : void */  {
            if (_s._utils != null) {
                _s._utils.runProtected(
                    function () {
                        if (isSuccess) {
                            var decodedResponse /* : DictionaryCS(string, object) */ = _s._utils.jsonDecode(jsonResponse);
                            if (decodedResponse != null) {
                                if (decodedResponse.ContainsKey("clid")) {
                                    _s._utils.setClientIdFromServer(Lang.ToString((decodedResponse.GetValue("clid"))), false);
                                }
                                var cfg = decodedResponse.GetValue("cfg");
                                var newSendLogs /* : Boolean */ = (cfg.slg && Boolean(cfg.slg));
                                if (newSendLogs != Session._sendLogs) {
                                    _s.log("Turning " + (newSendLogs ? "on" : "off") +" sending of logs");
                                    Session._sendLogs = newSendLogs;
                                }
                                if (cfg.hbi) {
                                    var heartbeatIntervalSec /* : int */ = slint.Cast(cfg.hbi);
                                    if(1000 * heartbeatIntervalSec !=  _s._settings.heartbeatIntervalMs) {
                                         _s.log("Received hbInterval from server " + heartbeatIntervalSec);
                                         _s._settings.heartbeatIntervalMs = 1000 * heartbeatIntervalSec;
                                         if (_s._heartbeatTimer != null) {
                                              _s.resetHeartbeatTimer();
                                         }
                                    }
                                }
                                if (cfg.gw) {
                                    var gatewayUrl /* : String */ =  (cfg.gw);
                                    if(gatewayUrl != _s._settings.gatewayUrl) {
                                        _s.log("Received gatewayUrl from server "+gatewayUrl);
                                        _s._settings.gatewayUrl = gatewayUrl;
                                    }
                                }
                            } else {
                                _s.log("Decoded heartbeat response is null.");
                            }
                        } else {
                            _s.log("Received no response (or a bad response) to heartbeat POST request.");
                        }
                    }, "onHeartbeatResponse");
            }
        }

        defPrivMeth(_s,"onClientIdLoaded",__onClientIdLoaded);
        function __onClientIdLoaded() /* : void */  {
            // This is fired on loading of the clientId from the local storage
            _s._utils.clientIdLoadingDone.DeleteHandler(_s._clientIdWaiter);
            _s._clientIdWaiter = null;
            _s.sendHeartbeat();
        }

        defPubMeth(_s,"initialResourceBitrateSelection",__initialResourceBitrateSelection);
        function __initialResourceBitrateSelection() /* : void */  {
            var proxy /* : ConvivaStreamerProxy */ = _s._monitor.streamer;
            throw new Error("Not implemented");
        }

        defPubMeth(_s,"midStreamResourceBitrateSelection",__midStreamResourceBitrateSelection);
        function __midStreamResourceBitrateSelection(switchTriggers /* : String */) /* : void */  {
            // TODO: get the target stream
            throw new Error("Not implemented");
        }
        defPubMeth(_s,"setConnectionType",__setConnectionType);
        function __setConnectionType() /* : void */  {
            if(_s._monitor != null) {
                _s._monitor.UpdateConnectionType();
            }
        }
        //DE-2592
        /*
        defPubMeth(_s,"setSsid",__setSsid);
        function __setSsid(ssid /* : String ) /* : void   {
            if(_s._monitor != null) {
                _s._monitor.UpdateSsid(ssid);
            }
        }*/
        defPubMeth(_s,"setSignalStrength",__setSignalStrength);
        function __setSignalStrength() /* : void */  {
            if(_s._monitor != null) {
                _s._monitor.UpdateSignalStrength();
            }
        }
        defPubMeth(_s,"setLinkEncryption",__setLinkEncryption);
        function __setLinkEncryption() /* : void */  {
            if(_s._monitor != null) {
                _s._monitor.UpdateLinkEncryption();
            }
        }
        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(Session,"Session");
// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../../csClient/CwsClient/session/SessionFactory.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-



// namespace session
    /** A factory for Session objects. */
    function SessionFactory() {
        var _s = this;
        if(_s != STAT_INIT) _s.lastSessionId /* : int */ = 0;

        if(_s != STAT_INIT) _s._utils /* : Utils */ = null;
        if(_s != STAT_INIT) _s._settings /* : Settings */ = null;
        if(_s != STAT_INIT) _s._nextSessionId /* : int */ = 0; // Should be positive
        if(_s != STAT_INIT) _s._sessionsById /* : DictionaryCS(int, Session) */ = null;

        function _constr() {
            _s._utils = Utils.getInstance();
            _s._settings = _s._utils.getSettings();
            _s._nextSessionId = 0;
            _s._sessionsById = new DictionaryCS/*<int, Session>*/();
            _s.lastSessionId = 0;
        }

        defPubMeth(_s,"cleanup",__cleanup);
        function __cleanup() /* : void */  {
            _s._utils = null;
            _s._settings = null;
            if (_s._sessionsById != null) {
                var _for_array_1 =  _s._sessionsById.KeyValuePairs;
                for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                  var sessionPair /* : KeyValuePairCS */ = _for_array_1[_for_idx_2];

                    var sess /* : Session */ = sessionPair.Value;
                    sess.cleanup();
                }
            }
            _s._sessionsById = null;
            _s._nextSessionId = 0;
        }

        // Generate a new session id
        defPubMeth(_s,"newSessionId",__newSessionId);
        function __newSessionId() /* : int */  {
            var sessionId /* : int */ = _s._nextSessionId;
            _s._nextSessionId++;
            return sessionId;
        }

        defPubMeth(_s,"makeSession",__makeSession);
        function __makeSession(streamer /* : Object */, contentInfo /* : ConvivaContentInfo */, options /* : Object */, sessionId /* : int */, global /* : Boolean */, networkInfo /* NetworkInfo */) /* : Session */  {
            var session /* : Session */ = new Session(streamer, contentInfo, options, global, networkInfo);
            _s.addSession(sessionId, session);
            _s.lastSessionId = sessionId;
            session.start();
            return session;
        }

        defPubMeth(_s,"getSession",__getSession);
        function __getSession(sessionId /* : int */) /* : Session */  {
            if (_s._sessionsById.ContainsKey(sessionId)) {
                return _s._sessionsById.GetValue(sessionId);
            }
            if (sessionId == -1) { // default sessionId.
                _s._utils.err("LivePass: invalid sessionId. LivePass not properly initialized yet?");
            } else { // session that has already been cleaned up most likely.
                _s._utils.err("LivePass: invalid sessionId. Did you cleanup that session previously?");
            }
            return null;
        }

        defPubMeth(_s,"addSession",__addSession);
        function __addSession(sessionId /* : int */, session /* : Session */) /* : void */  {
            _s._sessionsById.SetValue(sessionId, session);
        }

        defPubMeth(_s,"removeSession",__removeSession);
        function __removeSession(sessionId /* : int */) /* : void */  {
            _s._sessionsById.Remove(sessionId);
        }

        defPubMeth(_s,"cleanupSession",__cleanupSession);
        function __cleanupSession(sessionId /* : int */) /* : void */  {
            var session /* : Session */ = _s.getSession(sessionId);
            if (session != null) {
                _s.removeSession(sessionId);
                session.cleanup();
            }
        }
        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(SessionFactory,"SessionFactory");

// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-
// Copyright Conviva Inc 2010
// Author: George Necula (necula@conviva.com)

function ArrayCS() {
    var _s = this;

    if(_s != STAT_INIT) _s.arr = undefined;
    function _constr(size) {
        if(size == undefined) size = 0;
        _s.arr = new Array(size);
    }

    defStatMeth(_s,ArrayCS,"Create",__Create);
    function __Create() {
        var res = new ArrayCS();
        var l = [ ];
        // it seems that we have to copy the arguments array instead
        // of using it directly
        for (var i = 0; i < arguments.length; i++) {
            l.push(arguments[i]);
        }
        res.arr = l;
        return res;
    }

    defStatMeth(_s,ArrayCS,"FromRepr",__FromRepr);
    function __FromRepr(a) {
        if (a == null) return null;
        var res = new ArrayCS();
        res.arr = a;
        return res;
    }

    defPubMeth(_s,"ToRepr",__ToRepr);
    function __ToRepr() {
        return _s.arr;
    }

    
    defGet(_s,"Length",__Length);
    function __Length() {
        return _s.arr.length;
    }


    defPubMeth(_s,"GetValue",__GetValue);
    function __GetValue(idx) {
        if(idx >= _s.arr.length) {
            throw new Error("Index out of bounds: "+idx+" (length "+_s.arr.length+")");
        } else if(idx < 0) {
            throw new Error("Index out of bounds: "+idx);
        }
        return _s.arr[idx];
    }

    defPubMeth(_s,"SetValue",__SetValue);
    function __SetValue(idx, v) {
        if(idx >= _s.arr.length) {
            throw new Error("Index out of bounds: "+idx+" (length "+_s.arr.length+")");
        } else if(idx < 0) {
            throw new Error("Index out of bounds: "+idx);
        }
        _s.arr[idx] = v;
    }

    defGet(_s,"Values",__Values);
    function __Values() {
        return _s.arr;
    }
    
    if(_s != STAT_INIT) _constr.apply(this, arguments);

}
statInit(ArrayCS,"ArrayCS");

// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../../csClient/CwsClient/utils/Cleanable.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-

// Copyright (c) 2011, 2012 Conviva Inc. All Rights Reserved.
// Author: George Necula (necula@conviva.com), Henry Milner (henry@conviva.com), Yan Li (yan@conviva.com)



// namespace utils
    /// <summary>
    /// A class to manage cleanable objects. A Cleanable object is a wrapper for a cleanup Action, 
    /// along with management of a collection of Cleanables. 
    /// </summary>
    function Cleanable() {
        var _s = this;
            
        // The actual cleanup action
        if(_s != STAT_INIT) _s._cleanupAction /* : Function */ = null;

        // Each Cleanable is stored in a collection, indexed by its unique id
        if(_s == STAT_INIT) Cleanable._nextCleanupId /* : int */ = 0;
        if(_s != STAT_INIT) _s._id /* : int */ = 0;
        if(_s != STAT_INIT) _s._cleanupCollection /* : DictionaryCS(int, Cleanable) */ = null;

        // Construct a cleanable object, and add it to a collection of Cleanables
        function _constr(cleanupCollection /* : DictionaryCS(int, Cleanable) */) {
            _s._cleanupCollection = cleanupCollection;
            _s._id = Cleanable._nextCleanupId;
            Cleanable._nextCleanupId++;
            _s._cleanupCollection.SetValue(_s._id, _s);
        }

        defPubMeth(_s,"setCleanupAction",__setCleanupAction);
        function __setCleanupAction(cleanupAction /* : Function */) /* : void */  {
            _s._cleanupAction = cleanupAction;
        }


        /// <summary>
        /// Cleanup the object
        /// </summary>
        defPubMeth(_s,"cleanup",__cleanup);
        function __cleanup() /* : void */  {
            if (_s._cleanupAction != null) {
                _s._cleanupAction();
            }
            _s._cleanupCollection.Remove(_s._id);
        }



        /// <summary>
        /// Cleanup an entire collection
        /// </summary>
        /// <param name="collection"></param>
        defStatMeth(_s,Cleanable,"cleanupCollection",__cleanupCollection);
        function __cleanupCollection(collection /* : DictionaryCS(int,Cleanable) */) /* : void */  {
            // Copy first the cleanable objects
            Utils.getInstance().log("cleanupCollection");
            var toClean /* : ListCS(Cleanable) */ = new ListCS/*Cleanable*/ ();
            var _for_array_1 =  collection.Values;
            for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
              var o /* : Cleanable */ = _for_array_1[_for_idx_2];

                toClean.Add(o);
            }
            var _for_array_3 =  toClean.Values;
            for(var _for_idx_4=0; _for_idx_4 < _for_array_3.length; _for_idx_4++) {
              var o /* : Cleanable */ = _for_array_3[_for_idx_4];

                o.cleanup ();
            }
            collection.Clear();
        }

        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(Cleanable,"Cleanable");

// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-
// Copyright Conviva Inc 2010
// Author: George Necula (necula@conviva.com)

function DictionaryCS() {
    var _s = this;

    if(_s != STAT_INIT) _s.obj = undefined;
    function _constr(size) {
        _s.obj = { };
    }

    defStatMeth(_s,DictionaryCS,"FromRepr",__FromRepr);
    function __FromRepr(o) {
        if(o == null) return null;
        if(o instanceof DictionaryCS) {
            return o;
        }
        if(o.hasOwnProperty(__id("ToObject"))) { // It is a DictionaryCS from the module
            o = o.ToObject ();
        }
        var res = new DictionaryCS ();
        // It must be an Object
        slForEachProp(o, function (k) {
            res.obj[k] = o[k];
        });
        return res;    
    }

    defPubMeth(_s,"ToObject",__ToObject);
    function __ToObject() {
        return _s.obj;
    }

    // Create a dictionary from a string of key, values, key ...
    defStatMeth(_s,DictionaryCS,"Create",__Create);
    function __Create() {
        var res = new DictionaryCS ();
        for(var i = 0; i + 1 < arguments.length; i += 2) {
            res.obj[arguments[i]] = arguments[i + 1];
        }
        return res;
    };
    
    /* Copy a dictionary to an object. Fails if called on a dictionary whose keys are not string */
    defPubMeth(_s,"CopyToObject",__CopyToObject);
    function __CopyToObject(obj) {
        slForEachProp(_s.obj, function (k) {
                obj[k] = _s.obj[k];
            });
    }
        
    defPubMeth(_s,"GetValue",__GetValue);
    function __GetValue (key) {
        return _s.obj[key];
    }

    defPubMeth(_s,"SetValue",__SetValue);
    function __SetValue (key, v) {
        _s.obj[key] = v;
    }

        /* Dictionary<>.Clear () */
    defPubMeth(_s,"Clear",__Clear);
    function __Clear( ) {
        slForEachProp(_s.obj, function (p) {
                delete _s.obj[p];
            });
    }
    
    /* Dictionary<>.isEmpty */
    defPubMeth(_s,"IsEmpty",__IsEmpty);
    function __IsEmpty( key ) {
        for(var tempkey in _s.obj[key]) {
            if(_s.obj[key].hasOwnProperty(tempkey)){
                return false;                
            }
        }
        return true;
    }

    /* Dictionary<>.ContainsKey */
    defPubMeth(_s,"ContainsKey",__ContainsKey);
    function __ContainsKey( key ) {
        return (_s.obj[key] !== undefined);
    }

    defPubMeth(_s,"Contains",__Contains);
    function __Contains( key ) {
        return ContainsKey(key);
    }
    
    /* Dictionary<>.Keys  is the collection of Keys, represented as KeyCollection */
    defGet(_s,"Keys",__Keys);
    function __Keys () {                                    
        var res = new Array ();
        slForEachProp(_s.obj, function (p) {
                res.push(p);
            });
        return res;
    }

    /* Dictionary<>.Values  is the collection of values */
    defGet(_s,"Values",__Values);
    function __Values () {                                    
        var res = new Array ();
        slForEachProp(_s.obj, function (p) {
                res.push(_s.obj[p]);
            });
        return res;
    }

        
    defGet(_s,"KeyValuePairs",__KeyValuePairs);
    function __KeyValuePairs () {                                    
        var res = new Array ();
        slForEachProp(_s.obj, function (p) {
                res.push( new KeyValuePairCS( p, _s.obj[p] ));
            });
        return res;
    }
        
    
    defGet(_s,"Count",__Count);
    function __Count () {
        var res = 0;
        slForEachProp(_s.obj, function (p) {
                res ++;
            });
        return res;       
    }

        
    /** Dictionary<>.Add: add an item */
    defPubMeth(_s,"Add",__SetValue);
                            
        /** Dictionary<>.Remove: delete an item, return if removed */
    defPubMeth(_s,"Remove",__Remove);
    function __Remove(key) {
        if(_s.ContainsKey(key)) {
            delete _s.obj[key];
            return true;
        } else
            return false;               
    }

    if(_s != STAT_INIT) _constr.apply(this, arguments);

}
statInit(DictionaryCS,"DictionaryCS");

// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../../csClient/CwsClient/utils/Eventer.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-

// Copyright (c) 2009, Conviva Inc. All Rights Reserved.
// Author: George Necula (necula@conviva.com)

// namespace utils
    // The type of an event dispatcher with event handlers 
    function Eventer() {
        var _s = this;
        if(_s != STAT_INIT) _s._handlers /* : ListCS(Action) */ = undefined;

        function _constr() {
            _s._handlers = new ListCS/*Action*/();
        }

        /// <summary>
        /// Deletes all event handlers
        /// </summary>
        defPubMeth(_s,"Cleanup",__Cleanup);
        function __Cleanup() /* : void */  {
            _s._handlers = new ListCS/*Action*/();
        }

        defPubMeth(_s,"AddHandler",__AddHandler);
        function __AddHandler(handler /* : Function */) /* : void */  {
            _s._handlers.Add(handler);
        }

        defPubMeth(_s,"DeleteHandler",__DeleteHandler);
        function __DeleteHandler(handler /* : Function */) /* : void */  {
            _s._handlers.Remove(handler);
        }

        defPubMeth(_s,"DispatchEvent",__DispatchEvent);
        function __DispatchEvent() /* : void */  {
            var _for_array_1 =  _s._handlers.Values;
            for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
              var h /* : Function */ = _for_array_1[_for_idx_2];

                h();
            }
        }
        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(Eventer,"Eventer");

// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-
// Copyright Conviva Inc 2010
// Author: George Necula (necula@conviva.com)

function KeyValuePairCS() {
    var _s = this;

    if(_s != STAT_INIT) _s.key = undefined;
    if(_s != STAT_INIT) _s.val = undefined;
    function _constr(key, val) {
        _s.key = key;
        _s.val = val;
    }

    
    defGet(_s,"Key",__Key);
    function __Key() {
        return _s.key;
    }

    defGet(_s,"Value",__Value);
    function __Value() {
        return _s.val;
    }
    if(_s != STAT_INIT) _constr.apply(this, arguments);

}
statInit(KeyValuePairCS,"KeyValuePairCS");

// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-
// Copyright Conviva Inc 2010
// Author: George Necula (necula@conviva.com)

function Lang() {
    Lang.StringIndexOf = function (s1, s2) {
        return s1.indexOf(s2);
    };

    Lang.StringStartsWith = function (s1, s2) {
        return (0 == s1.indexOf(s2));
    };

    Lang.StringContains = function (s1, s2) {
        return (0 <= s1.indexOf(s2));
    };

    Lang.StringGetChar = function (s, where) {
        if(where < 0 || where >= s.length) {
            throw new Error("ArgumentOutOfRange");
        }
        return s[where];
    };

    Lang.StringSubstring = function (str, startIndex, count) {
        if(startIndex < 0 || startIndex >= str.length || (count != undefined && (count < 0 || startIndex + count > str.length))) {
            throw new Error("ArgumentOutOfRange");
        }
        if(count == undefined) {
            return str.substr(startIndex);
        } else {
            return str.substr(startIndex, count);
        }
    };

    Lang.StringSplit = function (s1, sep) {
        var res = s1.split(sep);
        return ArrayCS.FromRepr(res);
    };

    Lang.StringEnumerator = function (s) {
        return s.split("");
    };

    Lang.StringCompareTo = function (str1, str2) {
        if(str1 == null) {
            if(str2 == null) return 0;
            return -1;
        }
        if(str2 == null) return 1;
        // both are non-null
        if(str1 < str2) return -1;
        if(str1 == str2) return 0;
        return 1;
    };

    Lang.StringTrim = function (s) {
        return s.replace(/^\s*/, "").replace(/\s*$/, "");
    };

    Lang.StringReplace = function (str1, strsearch, strreplace) {//NO_RENAME:substr,indexOf,length
        if(strsearch == null || strsearch == "" || strreplace == null) {
            throw new Error("InvalidArgument");
        }
        // We cannot use replace because we want to replace all occurrences
        var searchIdx = str1.indexOf(strsearch);
        if (searchIdx >= 0) {
            var searchLen = strsearch.length;
            // We have at least one occurrence
            return str1.substr(0, searchIdx) + strreplace + Lang.StringReplace(str1.substr(searchIdx + searchLen), strsearch, strreplace);
        } else {
            return str1;
        }
    };

    Lang.StringLastIndexOf = function (str1, strsearch) {//NO_RENAME:lastIndexOf
        if(strsearch == null || strsearch == "") {
            throw new Error("InvalidArgument");
        }
        return str1.lastIndexOf(strsearch);
    }

    Lang.ListFromRepr = function (a) {
        return ListCS.FromRepr(a);
    };

    /** Convert from a language-specific representation of an T[] to a T[] **/
    Lang.ArrayFromRepr = function (repr) {
        return ArrayCS.FromRepr(repr);
    };



    /** Convert from a T[] to a language-specific representation **/
    Lang.ArrayToRepr = function (a) {
        if(a == null) return null;
        return a.ToRepr();
    };

    Lang.ListFromRepr = function (repr) {
        return ListCS.FromRepr(repr);
    };

    /** Convert from a List<> to a language-specific representation **/
    Lang.ListToRepr = function (l) {
        if(l == null) return null;
        return l.ToRepr();
    };

    /** Convert from a language-specific representation of a T[] to the array **/
    Lang.DictionaryFromRepr = function (repr) {
	var tmp = DictionaryCS.FromRepr(repr);
        //return DictionaryCS.FromRepr(repr);
        return tmp;
    };

    /** Convert from a T[] to a language-specific representation. For AS3 this is a Object, to be indexed with strings **/
    Lang.StringDictionaryToRepr = function (dict) {
        if(dict == null) return null;
        if(dict.hasOwnProperty(__id("ToObject"))) {
            return dict.ToObject();
        } else {
            return dict; // already an Object
        }
    };

    Lang.DictionaryCopyToObject = function (dict, obj) {
        if(dict == null) return;
        dict.CopyToObject(obj);
    };

    Lang.dictCount = function (dict) {
        var size = 0, key;
        for (key in dict) {
            /* istanbul ignore else */
            if (dict.hasOwnProperty(key)) size++;
        }
        return size;
    };

    /**
     * Convert from a string to a language-independent representation.
     * For JS this does nothing, since there is only one kind of string.
     */
    Lang.StringFromRepr = function (s) {
        return s;
    }


    Lang.StringToXml = function (str) {
        try {//NO_RENAME:DOMParser,parseFromString,documentElement,ActiveXOBject,async,loadXML
            if (window.DOMParser) {
                var xmlobject = (new DOMParser()).parseFromString(str, "text/xml");
                return xmlobject.documentElement;
            } else {
                // IE
                var xmlobject = new ActiveXObject("Microsoft.XMLDOM");
                xmlobject.async="false";
                xmlobject.loadXML(str);
                return xmlobject.documentElement;
            }
        } catch(e) {
            return null;
        }
    };

    Lang.XmlToString = function (oXML) {
        try {//NO_RENAME:XMLSerializer,serializeToString,xml
            if (window.XMLSerializer) {
                return (new XMLSerializer()).serializeToString(oXML);
            } else { // IE
                return oXML.xml;
            }
        } catch(e) {
            return null;
        }
    };

    Lang.ToString = function (o) {
        if(o == null) return null;
        // Perhaps we find the ToString method
        if(typeof(o.ToString) == "function") {
            return o.ToString ();
        } else {
            return o.toString ();
        }
    }

    Lang.StringToLower = function (s) {
        return s.toLowerCase();
    }

    Lang.StringToInt = function (s) {
        return parseInt(s);
    }

    Lang.AsDouble = function (v) {
        if (v instanceof Int64) {
            return v.asNumber;
        } else if(v instanceof UInt64) {
            return v.asNumber;
        } else {
            return Number(v);
        }
    }

    // First, recognize the
    Lang.doubleRegex = new RegExp("^([+-]?[0-9]*\\.?[0-9]+)((e|E)[+-]?[0-9]+)?$");
    Lang.parseDouble = function (v) {
        // This function needs to parse the same strings that C# double.Parse parses
        // In Javascript parsing an invalid string return NaN
        Lang.parseChecker(v, Lang.doubleRegex, "double");
        return parseFloat(v);
    }

    Lang.parseChecker = function (s, pattern, what) {
        if (!pattern.test(s)) {
            throw new Error("Invalid string for "+what+": "+s);
        }
    }
}
statInit(Lang,"Lang");
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-
// Copyright Conviva Inc 2010
// Author: George Necula (necula@conviva.com)

function ListCS() {
    var _s = this;

    if(_s != STAT_INIT) _s.arr = undefined;
    function _constr() {
        // Inherit from ArrayCS
        if (arguments.length > 1) {
            Ping.Send("Error: Instantiate ListCS with too many arguments");
        } else if (arguments.length == 0) {
                ArrayCS.call(_s, 0);
        } else if (arguments[0] instanceof Number) {
                ArrayCS.call(_s, arguments[0]);
        } else  if (arguments[0] instanceof Array) {
                ArrayCS.call(_s, arguments[0].length);
                _s.arr = arguments[0];
        } else   if (arguments[0] instanceof ArrayCS) {
                ArrayCS.call(_s, arguments[0].length);
                _s.arr = arguments[0].arr;
        } else {
            Ping.Send("Error: Instantiate ListCS with inappropriate arguments");
        }
    }

    defStatMeth(_s,ListCS,"Create",__Create);
    function __Create(a) {
        var res = new ListCS();
        for(var i=0;i<arguments.length;i++) {
            res.arr.push(arguments[i]);
        }
        return res;
    }

    defStatMeth(_s,ListCS,"FromRepr",__FromRepr);
    function __FromRepr(a) {
        if (a == null) {
            return a;
        }
        if (a instanceof ListCS) {
            return a;
        }
        var res = new ListCS();
        res.arr = a;
        return res;
    }

    defPubMeth(_s,"ToRepr",__ToRepr);
    function __ToRepr() {
        return _s.arr;
    }

    defGet(_s,"Count",__Count);
    function __Count() {
        return _s.arr.length;
    }
    
    defGet(_s,"Values",__Values);
    function __Values() {
        return _s.arr;
    }
    
    defPubMeth(_s,"Add",__Add);
    function __Add(e) {
        _s.arr.push(e);
    }

    defPubMeth(_s,"Clear",__Clear);
    function __Clear(e) {
        _s.arr.length = 0;
    }

    defPubMeth(_s,"IndexOf",__IndexOf);
    function __IndexOf(e) {
        var startIndex = arguments[1];
        if (startIndex == null) {
            startIndex = 0;
        } else if (startIndex < 0 || startIndex >= _s.arr.length) {
            throw new Error("Starting index out of bound");
        }

        for(var i=startIndex;i<_s.arr.length;i++) {
            if(_s.arr[i] == e) return i;
        }
        return -1;
    }

    defPubMeth(_s,"Contains",__Contains);
    function __Contains(e) {
        return _s.IndexOf(e) >= 0;
    }

    defPubMeth(_s,"Insert",__Insert);
    function __Insert(idx, e) {
        _s.arr.splice(idx, 0, e);
    }

    defPubMeth(_s,"Remove",__Remove);
    function __Remove(e) {
        var idx = _s.IndexOf(e);
        if(idx < 0) return false;
        _s.RemoveAt(idx);
        return true;
    }

    defPubMeth(_s,"RemoveRange",__RemoveRange);
    function __RemoveRange(where, count) {
        _s.arr.splice(where, count);
    }

    defPubMeth(_s,"RemoveAt",__RemoveAt);
    function __RemoveAt(where) {
        _s.arr.splice(where, 1);
    }

    defPubMeth(_s,"GetRange",__GetRange);
    function __GetRange(startidx, len) {
        var res = new ListCS();
        res.arr = _s.arr.slice(startidx, startidx + len); 
        return res;
    }

    defPubMeth(_s,"Sort",__Sort);
    function __Sort() {
        _s.arr.sort.apply(_s.arr, arguments);
    }

    defPubMeth(_s,"ToArray",__ToArray);
    function __ToArray() {
        return ArrayCS.FromRepr(_s.arr.slice());
    }

    if(_s != STAT_INIT) _constr.apply(this, arguments);

}
statInit(ListCS,"ListCS");

// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../../csClient/CwsClient/utils/NativeLang.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-


// namespace utils
    /**
     * Utilities for interfacing with native language objects.  This should be
     * used only when speed is critical and Slash data structures are too slow.
     */
    function NativeLang() {
        var _s = this;

        //NOTE(henry): We should have Slash find these calls and translate them
        // directly to native dictionary accesses.  This would save a method
        // call.

        defStatMeth(_s,NativeLang,"setDictValue",__setDictValue);
        function __setDictValue(dict /* : Object */, key /* : Object */, value /* : Object */) /* : void */  {
            dict[key] = value;
        }

        defStatMeth(_s,NativeLang,"makeList",__makeList);
        function __makeList() /* : Object */  {
            return [];
        }

        defStatMeth(_s,NativeLang,"listCount",__listCount);
        function __listCount(lst /* : Object */) /* : int */  {
            return lst.length;
        }

        defStatMeth(_s,NativeLang,"addListValue",__addListValue);
        function __addListValue(list /* : Object */, value /* : Object */) /* : void */  {
            list.push(value);
        }
        
        defStatMeth(_s,NativeLang,"removeListValueAt",__removeListValueAt);
        function __removeListValueAt(list /* : Object */, idx /* : int */) /* : void */  {
            list.splice(idx, 1);
        }

        defStatMeth(_s,NativeLang,"GetField",__GetField);
        function __GetField(propName /* : String */, obj /* : Object */) /* : Object */  {
            return obj[propName];
        }

        defStatMeth(_s,NativeLang,"GetStringField",__GetStringField);
        function __GetStringField(propName /* : String */, obj /* : Object */) /* : String */  {
            var o /* : Object */ = NativeLang.GetField(propName, obj);
            if (o) {
                return o.toString();
            }
            return null;
        }
    }
statInit(NativeLang,"NativeLang");

// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../../csClient/CwsClient/utils/Settings.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-


// namespace utils
    function Settings() {
        var _s = this;
        // The interval between heartbeats.
        if(_s != STAT_INIT) _s.heartbeatIntervalMs /* : int */ = 20000;
        // The API key (corresponding to a customer name) used for heartbeats.
        if(_s != STAT_INIT) _s.customerKey /* : String */ = null;

        if(_s != STAT_INIT) _s.gatewayUrl /* : String */ = "https://cws.conviva.com";
        if(_s != STAT_INIT) _s.gatewayPath /* : String */ = "/0/wsg";
                
        if(_s != STAT_INIT) _s.protocolVersion /* : String */ = "2.4";

        // The next line will be modified by set_versions.pl
        if(_s != STAT_INIT) _s.clientVersion /* : String */ = "2.137.0.35366";

        // The next field will be changed by LivePass upon "init" 
        if(_s != STAT_INIT) _s.clientInstanceId /* : int */ = 0;

        // The maximum length of time we wait when loading from local storage.
        if(_s != STAT_INIT) _s.loadDataTimeoutMs /* : int */ = 10000;
        
        //  Enable logging to device console
        if(_s != STAT_INIT) _s.enableLogging /* : Boolean */ = false;

        // An instance of PlatformApi with methods for access to low-level services
        if(_s != STAT_INIT) _s.platformApi /* : PlatformApi */ = null;

        // Whether to try/catch exceptions or not (may interfere with some debuggers)
        if(_s != STAT_INIT) _s.allowUncaughtExceptions /* : Boolean */ = false;

        if(_s != STAT_INIT) _s.pingComponentName /* : String */ = "jscws";
        if(_s != STAT_INIT) _s.pingUrl /* : String */ = "https://pings.conviva.com/ping.ping";


        // Change the settings based on the dictionary of keys
        defPubMeth(_s,"changeSettings",__changeSettings);
        function __changeSettings(settings /* : Object */) /* : void */  {
            if (settings == null) return;
            var sobj /* : DictionaryCS(string, object) */ = Lang.DictionaryFromRepr/*string, object*/(settings);
            var _for_array_1 =  sobj.Keys;
            for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
              var key /* : String */ = _for_array_1[_for_idx_2];

                var v /* : Object */ = sobj.GetValue(key);
                switch (key) {
                    case "platformApi":
                        _s.platformApi = (v);
                        break;
                    case "gatewayUrl":
                        _s.gatewayUrl = (sobj.GetValue(key));
                        break;
                    case "heartbeatIntervalMs":
                        _s.heartbeatIntervalMs = slint.Cast(sobj.GetValue(key));
                        break;
                    case "enableLogging":
                        _s.enableLogging = Boolean(sobj.GetValue(key));
                        break;
                    case "allowUncaughtExceptions":
                        _s.allowUncaughtExceptions = Boolean(sobj.GetValue(key));
                        break;
                    default:
                        throw new Error("Unsupported settings: " + key);
                }
            }
        }
    }
statInit(Settings,"Settings");

// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../../csClient/CwsClient/utils/Utils.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-






// namespace utils
    function Utils() {
        var _s = this;

        // The unique instance of the Utils module
        if(_s == STAT_INIT) Utils._instance /* : Utils */ = null;
        if(_s != STAT_INIT) _s._referenceCount /* : int */ = 0; // We refcount the Utils instance (AutoTouch also uses it)

        // The dependencies of the unique instance of Utils
        if(_s != STAT_INIT) _s._settings /* : Settings */ = null;

        if(_s == STAT_INIT) Utils.DEFAULT_CLIENT_ID /* : String */ = "0"; // This is the default client id if we do not have one

        /* The client ID goes through the following states:              
         * - loading from disk:
         *      clientId == DEFAULT_CLIENT_ID
         *      clientIdLoadingDone != null (Eventer fires when loading from storage, or loading timeout)
         *      _loadClientIdTimeout != null
         *      
         * - loaded from disk:
         *      clientId != DEFAULT_CLIENT_ID
         *      clientIdLoadingDone == null
         *      _loadClientIdTimeout == null
         *      
         * - loading from disk timed out:
         *      clientId == DEFAULT_CLIENT_ID
         *      clientIdLoadingDone == null
         *      _loadClientIdTimeout == null
         *      
         * - set from server response
         *      clientID != DEFAULT_CLIENT_ID
         *      written to local storage (best effort)
         *      clientIdLoadingDone == null
         *      _loadClientIdTimeout == null
         *      
         */
        if(_s != STAT_INIT) _s._loadClientIdTimeout /* : Cleanable */ = null;
        if(_s != STAT_INIT) _s.clientId /* : String */ = Utils.DEFAULT_CLIENT_ID;
        if(_s != STAT_INIT) _s.clientIdLoadingDone /* : Eventer */ = null; // To signal when we are done loading the client id

        //@owner
        if(_s != STAT_INIT) _s._pingUrl /* : String */ = null;
        if(_s != STAT_INIT) _s._cachedPingUrl /* : Boolean */ = false;
        if(_s != STAT_INIT) _s._isSendingPing /* : Boolean */ = false;

        if(_s != STAT_INIT) _s.protocolVersion /* : String */ = null;

        // @deprecated for pure CWS 1.7 clients
        if(_s != STAT_INIT) _s.device /* : String */ = null;
        if(_s != STAT_INIT) _s.os /* : String */ = null;
        if(_s != STAT_INIT) _s.osVersion /* : String */ = null;
        if(_s != STAT_INIT) _s.deviceVersion /* : String */ = null;
        if(_s != STAT_INIT) _s.deviceType /* : String */ = null;
        if(_s != STAT_INIT) _s.platform /* : String */ = null;

        // We keep a list of Cleanable, indexed by some id
        if(_s != STAT_INIT) _s._cleanables /* : DictionaryCS(int, Cleanable) */ = null;
        

        /* We accumulate a circular list of logs in the log buffer */
        if(_s == STAT_INIT) Utils.MAX_SIZE_LOGBUFFER /* : int */ = 32;
        if(_s == STAT_INIT) Utils.logBuffer /* : ListCS(string) */ = new ListCS/*string*/();

        

        function _constr(settings /* : Settings */) {
            _s._settings = settings;
            _s._referenceCount = 1;
            _s._pingUrl = null;
            _s._isSendingPing = false;
            _s.protocolVersion = _s._settings.protocolVersion;

            _s._cleanables = new DictionaryCS/*<int, Cleanable>*/();

            // See if we need to create the _settings object
            if (_s._settings.platformApi == null) {
                if (typeof PlayStationWebmafApi !== "undefined") {
                    _s._settings.platformApi = new PlayStationWebmafApi();
                } else if (typeof PlayStationTouchFactorApi !== "undefined") {
                    _s._settings.platformApi = new PlayStationTouchFactorApi();
                } else if (typeof PlayStationLibjscriptApi !== "undefined") {
                    _s._settings.platformApi = new PlayStationLibjscriptApi();
                } else if (typeof ConvivaVideojsPlatformApi != "undefined") {
                    _s._settings.platformApi = new ConvivaVideojsPlatformApi();
                } else if (typeof Html5PlatformApi !== "undefined") {
                    _s._settings.platformApi = new Html5PlatformApi();
                } else if (typeof PlayStationTrilithiumApi !== "undefined") {
                    _s._settings.platformApi = new PlayStationTrilithiumApi();
                } else if (typeof Xbox1PlatformApi !== "undefined") {
                    _s._settings.platformApi = new Xbox1PlatformApi();
                }
                // Could do the same for SamsungTV, would need to change integration code though.
            }
            if (_s._settings.platformApi == null) {
                throw new Error("PlatformApi is null");
            }

            // @deprecated for pure CWS 1.7 clients
            _s.device = _s._settings.platformApi.getDevice();
            _s.deviceVersion = _s._settings.platformApi.getDeviceVersion();
            _s.deviceType = _s._settings.platformApi.getDeviceType();
            _s.os = _s._settings.platformApi.getOS();
            _s.osVersion = _s._settings.platformApi.getOSVersion();

            // @deprecated in pure CWS 1.7 clients. Moved to backend as well as part of the platform metadata field.
            _s.platform = "Js";

        }

        /// <summary>
        /// Call this function once to initialize the Utils module. 
        /// For every instance of CreateUtils, there must be a call to cleanup()
        /// </summary>
        /// <param name="platformApi"></param>
        /// <param name="settings"></param>
        defStatMeth(_s,Utils,"CreateUtils",__CreateUtils);
        function __CreateUtils(settings /* : Object */) /* : Utils */  {
            if (Utils._instance == null) {
                var s /* : Settings */ = new Settings();
                s.changeSettings(settings);
                Utils._instance = new Utils(s);
                Utils._instance._start();
            } else {
                Utils._instance.getSettings().changeSettings(settings);
                Utils._instance._referenceCount++;
            }
            return Utils._instance;
        }


        /// <summary>
        /// Call this function to get the singleton instance of the Utils module
        /// </summary>
        /// <returns></returns>
        defStatMeth(_s,Utils,"getInstance",__getInstance);
        function __getInstance() /* : Utils */  {
            if (Utils._instance == null) {
                throw new Error("CreateUtils module has not been called");
            }
            return Utils._instance;
        }

        defPubMeth(_s,"getPlatformApi",__getPlatformApi);
        function __getPlatformApi() /* : PlatformApi */  {
            return _s._settings.platformApi;
        }

        defPubMeth(_s,"getSettings",__getSettings);
        function __getSettings() /* : Settings */  {
            return _s._settings;
        }

        defPrivMeth(_s,"_start",___start);
        function ___start() /* : void */  {
            // Called only once to initialize the Utils module
        }


        defPubMeth(_s,"cleanup",__cleanup);
        function __cleanup() /* : void */  {
            _s._referenceCount--;
            if (_s._referenceCount > 0) {
                return;
            }
            if (_s.clientIdLoadingDone != null) {
                _s.clientIdLoadingDone.Cleanup();
                _s.clientIdLoadingDone = null;
            }
            if (_s._cleanables != null) {
                Cleanable.cleanupCollection(_s._cleanables);
                _s._cleanables = null;
            }
            if (_s._settings != null && _s._settings.platformApi != null) {
                _s._settings.platformApi.cleanup();
            }
            _s._settings = null;
            Utils._instance = null; // weird, static member reset by non-static method
        }

        defPubMeth(_s,"logNoBuffer",__logNoBuffer);
        function __logNoBuffer(msg /* : String */) /* : String */  {
            var timeMsec /* : Number */ = _s.epochTimeMs();
            var theTime /* : String */ = undefined;
            theTime = (timeMsec / 1000.0).toFixed(3).toString();

            msg = "[" + theTime + "] " + msg;

            var isError /* : Boolean */ = Lang.StringContains(msg, "ERROR:");

            if (_s._settings.enableLogging) {
                if(isError) {
                    _s._settings.platformApi.consoleErr(msg);
                } else {
                    _s._settings.platformApi.consoleLog(msg);
                }
            }
            return msg;
        }

        /***
         * Record (or show) a log message. The log message can optionally start with "ERROR: " to signal an error.
         * The log message can also contain "sid=sessionId" when the log message can be associated with the given session.
         */
        defPubMeth(_s,"log",__log);
        function __log(msg /* : String */) /* : void */  {
            msg = _s.logNoBuffer(msg);
            // We add to the buffer, independent of whether enableLogging is set
            if (Utils.logBuffer.Count >= Utils.MAX_SIZE_LOGBUFFER) {
                Utils.logBuffer.RemoveAt(0);
            }
            Utils.logBuffer.Add(msg);
        }

        defPubMeth(_s,"logSession",__logSession);
        function __logSession(msg /* : String */, sessionId /* : int */) /* : void */  {
            _s.log("sid=" + sessionId + " " + msg);
        }

        defPubMeth(_s,"err",__err);
        function __err(message /* : String */) /* : void */  {
            _s.log("ERROR: " + message);
        }


        /** 
         * Retrieve the log messages for the given session 
         */ 
        defPubMeth(_s,"getLogs",__getLogs);
        function __getLogs(sessionId /* : int */) /* : ListCS(string) */  {
            // Send all logs in the same session
            var res /* : ListCS(string) */ = Utils.logBuffer;
            Utils.logBuffer = new ListCS/*string*/();
            return res;
        }
           


        defPubMeth(_s,"assert",__assert);
        function __assert(condition /* : Boolean */, msg /* : String */) /* : void */  {
            if (!condition) {
                throw new Error("Assertion failure: " + msg);
            }
        }




        /// <summary>
        /// Run a function with try/catch protection
        /// </summary>
        /// <param name="func"></param>
        /// <param name="message"></param>
        defPubMeth(_s,"runProtected",__runProtected);
        function __runProtected(func /* : Function */, message /* : String */) /* : void */  {
            _s.runProtectedSync(func, message);
        }

        /// <summary>
        /// Run a function with try/catch protection. This function is guaranteed to be synchronous
        /// </summary>
        /// <param name="func"></param>
        /// <param name="message"></param>
        defPubMeth(_s,"runProtectedSync",__runProtectedSync);
        function __runProtectedSync(func /* : Function */, message /* : String */) /* : void */  {
            var allowUncaughtExceptions /* : Boolean */ = _s._settings.allowUncaughtExceptions;

            if (allowUncaughtExceptions) {
                func();
            } else {
                try {
                    func();
                } catch(e /* : Error */) {
                    _s.onUncaughtException(message, e);
                }
            }
        }


        defPrivMeth(_s,"onUncaughtException",__onUncaughtException);
        function __onUncaughtException(msg /* : String */, e /* : Error */) /* : void */  {
            try {
                _s.ping("Uncaught exception: " + msg + ": " + Lang.ToString(e));
            } catch(eping /* : Error */) {
                _s.err("Caught exception while sending ping: " + Lang.ToString(eping));
            } 
        }

        defPubMeth(_s,"ping",__ping);
        function __ping(msg /* : String */) /* : void */  {
            if (_s._isSendingPing) {
                return;
            }
            _s._isSendingPing = true;
            _s.initPing();
            var pingUrl /* : String */ = _s._pingUrl + "&d=" + _s.urlEncodeString(Lang.ToString(msg));
            _s.err("Ping: " + pingUrl);
            _s.httpRequest(false, pingUrl, null, null, null);
            _s._isSendingPing = false;

        }

        defPrivMeth(_s,"initPing",__initPing);
        function __initPing() /* : void */  {
            // Alban: keeping this logic here. Don't want to spread Slash directives to yet more files.
            // Plus Utils might absorb Settings in the future.
            if (!_s._cachedPingUrl) { // Prepare the ping URL.

                var componentName /* : String */ = "jscws";

                var metadataSchema /* : String */ = null;

                try { // Can't send pings from here.
                    var platformMetadata /* : DictionaryCS(string, string) */ = Lang.DictionaryFromRepr/*string, string*/(_s._settings.platformApi.getPlatformMetadata());
                    if (platformMetadata != null && platformMetadata.ContainsKey("sch")) {
                        metadataSchema = platformMetadata.GetValue("sch");
                    }
                } catch(e /* : Error */) {
                }

                _s._pingUrl = _s._settings.pingUrl + "?"
                    + "comp=" + componentName
                    + "&clv=" + _s._settings.clientVersion
                    + "&cid=" + _s._settings.customerKey // sending bad values could be useful (can't ping before LivePass.init)
                    + "&uuid=" + _s.clientId;

                if (metadataSchema != null) {
                    _s._pingUrl += "&sch=" + metadataSchema;
                }

                if (_s.clientId != Utils.DEFAULT_CLIENT_ID && metadataSchema != null) { // All the data is available, we can reuse the same url for later pings.
                    _s._cachedPingUrl = true;
                }
            }
        }

        defPrivMeth(_s,"urlEncodeString",__urlEncodeString);
        function __urlEncodeString(rawString /* : String */) /* : String */  {
            return escape(rawString);
        }

        /// <summary>
        /// Return the current time in milliseconds since Unix epoch 
        /// </summary>
        /// <returns></returns>
        defPubMeth(_s,"epochTimeMs",__epochTimeMs);
        function __epochTimeMs() /* : Number */  {
            return _s._settings.platformApi.epochTimeMs();
        }

        /// <summary>
        /// Create a periodic timer
        /// </summary>
        /// <param name="timerAction"></param>
        /// <param name="intervalMs"></param>
        /// <param name="actionName"></param>
        /// <returns></returns>
        defPubMeth(_s,"createTimer",__createTimer);
        function __createTimer(timerAction /* : Function */, intervalMs /* : int */, actionName /* : String */) /* : Cleanable */  {
            var cleanable /* : Cleanable */ = new Cleanable(_s._cleanables);
            var wrappedAction /* : Function */ = null;
            wrappedAction = (
                 function () { 
                     _s.runProtected(timerAction, actionName);
                 });
            cleanable.setCleanupAction(_s._settings.platformApi.createTimer(wrappedAction, intervalMs, actionName));
            return cleanable;
        }

        /// <summary>
        /// Schedule an action after an interval
        /// </summary>
        /// <param name="action"></param>
        /// <param name="delayMs"></param>
        /// <param name="actionName"></param>
        /// <returns></returns>
        defPubMeth(_s,"scheduleAction",__scheduleAction);
        function __scheduleAction(action /* : Function */, delayMs /* : int */, actionName /* : String */) /* : Cleanable */  {
            var cleanable /* : Cleanable */ = new Cleanable(_s._cleanables);
            var actionHappened /* : Boolean */ = false;
            var wrappedAction /* : Function */ = null;
            wrappedAction = (
                 function () { 
                     if (cleanable != null) {
                         cleanable.cleanup();
                     }
                     action();
                     actionHappened = true;
                 });
            cleanable.setCleanupAction(_s._settings.platformApi.createTimer(wrappedAction, delayMs, actionName));
            // This is necessary because makeTimer() might have already caused
            // wrappedAction() to be called (e.g. it might call the action
            // synchronously if delayMs=0).  In that case, theTimer was null
            // when wrappedAction was called, so theTimer couldn't be cleaned
            // up.
            if (actionHappened) {
                cleanable.cleanup();
            }
            return cleanable;
        }


        defPubMeth(_s,"parseInt",__parseInt);
        function __parseInt(decimalInt /* : String */, defaultResult /* : int */) /* : int */  {
            var result /* : int */ = defaultResult;
            try {
                result = slint.Parse(decimalInt);
            } catch(e /* : Error */) {
            }
            return result;
        }

        defPubMeth(_s,"parseNumber",__parseNumber);
        function __parseNumber(numberStr /* : String */, defaultResult /* : float */) /* : Number */  {
            var result /* : Number */ = defaultResult;
            try {
                result = Lang.parseDouble(numberStr);
            } catch(e /* : Error */) {
            }
            return result;
        }

        defPubMeth(_s,"startFetchClientId",__startFetchClientId);
        function __startFetchClientId() /* : void */  {
            //  Called on LivePass.init
            _s.clientId = Utils.DEFAULT_CLIENT_ID;
            _s.clientIdLoadingDone = new Eventer(); // This means we do not yet have a clientId

            _s._loadClientIdTimeout = _s.scheduleAction(
                 function () { 
                     _s.log("Timeout in reading clientId. Using " + Utils.DEFAULT_CLIENT_ID + ".");
                     _s.ping("Timeout in reading clientId. IGNORE waited " + _s._settings.loadDataTimeoutMs + "ms.");
                     if (_s.clientIdLoadingDone != null) {
                         _s.clientIdLoadingDone.DispatchEvent();
                     }
                     _s._loadClientIdTimeout = null;
                 },
                 _s._settings.loadDataTimeoutMs,
                 "utils.readClientId timeout callback");

            var onLoad /* : Function(Action(bool, string)) */ = undefined;
            onLoad = (
                function (fSuccess /* : Boolean */, loadedData /* : String */) { 
                    _s.runProtected(
                        function () { 
                            if (_s._loadClientIdTimeout != null) {
                                _s._loadClientIdTimeout.cleanup();
                                _s._loadClientIdTimeout = null;
                            }
                            var result /* : DictionaryCS(string, object) */ = null;
                            if (fSuccess) { // don't try and decode random/null values.
                                try {
                                    result = _s.jsonDecode(loadedData);
                                } catch(e /* : Error */) {
                                    result = null;
                                }
                            }
                            var loadedClientId /* : String */ = null;
                            if(fSuccess && result != null && result.ContainsKey("clId")) {
                                    loadedClientId = result.GetValue("clId");
                            }
                            if (loadedClientId != null && loadedClientId != Utils.DEFAULT_CLIENT_ID && loadedClientId != "null") {
                                _s.clientId = loadedClientId;
                                _s.log("Setting the client id to " + loadedClientId + " (from local storage)");
                            } else {
                                _s.log("Failed to load the client id from local storage");
                            }
                            if (_s.clientIdLoadingDone != null) {
                                _s.clientIdLoadingDone.DispatchEvent();
                                _s.clientIdLoadingDone = null;
                            }
                        },
                        "utils.fetchClientId onLoad");
            });
             _s._settings.platformApi.loadLocalData(onLoad);
        }

        /* 
        * This function is used to set the client id from a server response
        */ 
        defPubMeth(_s,"setClientIdFromServer",__setClientIdFromServer);
        function __setClientIdFromServer(newClientId /* : String */, fromStorage /* : Boolean */) /* : void */  {

            if (_s._loadClientIdTimeout != null) {
                _s._loadClientIdTimeout.cleanup();
                _s._loadClientIdTimeout = null;
            }
            _s.clientIdLoadingDone = null;
            if (_s.clientId != newClientId) {
                _s.clientId = newClientId;
                _s.log("Setting the client id to " + newClientId + " (from server)");
                _s.writeClientId();
            }
        }

        // Write the current client ID to local storage, so that it can be
        // retrieved later by startFetchClientId() above.
        defPrivMeth(_s,"writeClientId",__writeClientId);
        function __writeClientId() /* : void */  {
            var dataToSave /* : DictionaryCS(string, string) */ = new DictionaryCS/*<string, string>*/();
            dataToSave.SetValue("clId", _s.clientId);
            var onSaved /* : Function(Action(bool)) */ = undefined;
            onSaved = (
                function (fSuccess /* : Boolean */) { 
                    _s.runProtected(
                        function () { 
                            if (!fSuccess) {
                                _s.err("An error occurred while saving the clientId.");
                            }
                        }, "utils.writeClientId onSaved");
            });
            var dataObject /* : Object */ = Lang.StringDictionaryToRepr(dataToSave);
            var dataStr /* : String */ = _s.jsonEncode(dataObject);
            _s._settings.platformApi.saveLocalData(dataStr, onSaved);
        }

       
        

        // Used for Session._sessionId (gateway expects int32)
        defPubMeth(_s,"randInt",__randInt);
        function __randInt() /* : int */  {
            // Returns a random signed 32-bit integer. Range should be -2147483648 to 2147483647
            return Math.floor(Math.random()*4294967295) - 2147483648;
        }

        // Used for Settings.clientInstanceId (gateway expects uint32)
        defPubMeth(_s,"randUInt",__randUInt);
        function __randUInt() /* : int */  {
            // Returns a random unsigned integer. Range should be 0 to 2147483647
            // Weird flow for easier Slashing
            var uInt /* : int */ = _s.randInt();
            uInt = Math.abs(uInt); 
            if (uInt < 0) uInt = 0;
            return uInt;
        }

        /// <summary>
        /// Send HTTP request
        /// 
        /// The callback function must be invoked after the operation
        /// </summary>
        /// <param name="isPOST">true if this is a POST request; false for GET</param>
        /// <param name="url">URL of the request</param>
        /// <param name="data">The data to be sent (ignored for GET)</param>
        /// <param name="contentType">The content type (if null, the default will be "application/json")</param>
        /// <param name="callback">Callback function to be invoked. May be null. The callback will receive the following parameters:
        ///               * a boolean representing success of the operation
        ///               * a String representing data in the response
        /// </param>
        defPubMeth(_s,"httpRequest",__httpRequest);
        function __httpRequest(isPOST /* : Boolean */, url /* : String */, data /* : String */, contentType /* : String */, callback /* : Function(Action(bool, string)) */) /* : Cleanable */  {
            var cleanable /* : Cleanable */ = new Cleanable(_s._cleanables);
            cleanable.setCleanupAction(_s._settings.platformApi.httpRequest(isPOST, url, data, contentType, 
                                                      function (isSuccess /* : Boolean */, response /* : String */) { 
                                                           //log("httpRequest  response from " + url + " success=" + isSuccess.ToString());
                                                           cleanable.cleanup ();
                                                           if(callback != null) {
                                                                callback(isSuccess, response);
                                                               }
                                                      }));
            return cleanable;
        }

        /**
         * @obj must be a JSON encodable data structure in the native language
         * (i.e. not a Slash data structure like a DictionaryCS).  It must have
         * one of the following types:
         *   - dictionary
         *   - array or list
         *   - string
         *   - number
         *   - boolean
         *   - null
         * @callback is called with the JSON result when encoding is done. This
         * asynchronous interface is provided because encoding may take too
         * long for a single handler on some platforms.
         */
        defPubMeth(_s,"jsonEncode",__jsonEncode);
        function __jsonEncode(obj /* : Object */) /* : String */  {
            var res /* : String */ = null;
            _s.runProtectedSync(
                function () { 
                    res = _s._settings.platformApi.jsonEncode(obj);
                },
                "utils.jsonEncode");
            return res;
        }


        defPubMeth(_s,"jsonDecode",__jsonDecode);
        function __jsonDecode(json /* : String */) /* : DictionaryCS(string, object) */  {
            var res /* : DictionaryCS(string, object) */ = null;
            _s.runProtectedSync(
                function () { 
                    var decodedJson /* : Object */ = _s._settings.platformApi.jsonDecode(json);
                    res = Lang.DictionaryFromRepr/*string, object*/(decodedJson);
                },
                "utils.jsonDecode");
            return res;
        }

       //JSRENAME:constant:_s:Utils:DEFAULT_CLIENT_ID
       //JSRENAME:constant:_s:Utils:MAX_SIZE_LOGBUFFER
        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(Utils,"Utils");

// Copyright Conviva Inc 2013-2014
// Author: Alban Nicolas (anicolas@conviva.com)

function DataLoader() {
    var _s = this;

    if(_s == STAT_INIT) {
        DataLoader.frameId = 'conviva_iframe';
        DataLoader.frameUrl = '/cws_iframe.html';
        DataLoader.TESTAPI_forTouchstone = true;

        DataLoader.referenceCount = 0;

        DataLoader.nextConvivaRequestId = 0;
        DataLoader.callbacks = {}; // Map from request id to pair (domain, callback)
        DataLoader.communicationFramesIds = {}; // Map domain URL to the communication frames IDs

        if (typeof window !== 'undefined') {
            if (window.addEventListener){
                window.addEventListener('message', handleResp, false);
            } else if (window.attachEvent) {
                window.attachEvent('onmessage', handleResp);
            }
        }
    }

    function _constr() {
        DataLoader.referenceCount++;
    }

    this.cleanup = function() {
        DataLoader.referenceCount--;
        if (DataLoader.referenceCount == 0) {
            // static cleanup
            DataLoader.nextConvivaRequestId = 0;
            DataLoader.callbacks = {};
            slForEachPropValue(DataLoader.communicationFramesIds,
                function (communicationFrameId) {
                    _s.removeIFrame(communicationFrameId);
                }
            );
            DataLoader.communicationFramesIds = {};
        }
    }

    this.findFrameById = function (remoteFrameId) {
        return (remoteFrameId ? document.getElementById(remoteFrameId) : null);
    }

    this.findFrameForDomain = function (forDomain) {
        // PD-12338: extra safe due to potential id="undefined" DOM elements
        var remoteFrameId = DataLoader.communicationFramesIds[forDomain];
        return _s.findFrameById(remoteFrameId);
    }

    this.makeRequest = function(isPOST, url, data, contentType, callback) {
        // Extract the host and protocol from the url
        var m = url.match(/^(https?:\/\/[^\/]*)(\/.*)$/);
        if(!m) {
            Utils.getInstance().log("ERROR: UrlLoader: cannot parse url: "+url);
            return null;
        }
        var forDomain = m[1]; // The destination domain

        var remoteFrame = _s.findFrameForDomain(forDomain);
        if(remoteFrame && remoteFrame.loaded) {
            // Prep message parameters
            var convivaRequestId = DataLoader.nextConvivaRequestId++;
            var method = isPOST ? "POST" : "GET";
            var evt = { 'url' : url, 
                        'method' : method, 
                        'data' : data,
                        'contentType' : contentType,
                        'requestId' : convivaRequestId, // Backward compatibility for 2.79 and prior clients (none in production)
                        'convivaRequestId' : convivaRequestId };
            // Register callback
            DataLoader.callbacks[convivaRequestId] = [ forDomain, callback ];
            // Post to iframe
            remoteFrame.contentWindow.postMessage(evt, DataLoader.TESTAPI_forTouchstone ? "*" : forDomain);
        } else if (remoteFrame && !remoteFrame.loaded) {
            // iframe not ready, try again in 500ms
            setTimeout(function () { _s.makeRequest(isPOST, url, data, contentType, callback); }, 500);
        } else {
            // no iframe for this domain, create one and queue http request
            _s.insertIFrame(forDomain,
                function () {
                    var remoteFrame = _s.findFrameForDomain(forDomain);
                    if (remoteFrame) {
                        remoteFrame.loaded = true;
                        _s.makeRequest(isPOST, url, data, contentType, callback);
                    }
                }
            );
        }
        return null; // No way to cancel the request
    }

    this.insertIFrame = function(forDomain, callback) {
        //NO_RENAME:id,height,src,onload,document,body,createElement,getElementsByTagName,appendChild
        var remoteFrame = document.createElement("iframe");
        remoteFrame.id = "_conviva_iframe_"+forDomain+"_"+DataLoader.frameId;
        // PD-14200 remove iframe pixel that appears on screen
        remoteFrame.style.height="0px";
        remoteFrame.style.width="0px";
        remoteFrame.style.top="-50px";
        remoteFrame.style.left="-50px";
        remoteFrame.style.borderWidth="0px";
        remoteFrame.style.display = "none";
        remoteFrame.height = 0;
        remoteFrame.width = 0; // PlayStation WebMAF needs this
        remoteFrame.src = forDomain + DataLoader.frameUrl;
        remoteFrame.onload = callback; 
        DataLoader.communicationFramesIds[forDomain] = remoteFrame.id;
        var body = document.body || document.getElementsByTagName('body')[0];
        if (body) {
            body.appendChild(remoteFrame);
        }
    }

    this.removeIFrame = function (communicationFrameId) {
        var remoteFrame = _s.findFrameById(communicationFrameId);
        if (remoteFrame != null) {
            var body = document.body || document.getElementsByTagName('body')[0];
            body.removeChild(remoteFrame);
        }
    }

    function handleResp (e) { //NO_RENAME:data,convivaRequestId,post_err,origin,bytes,requestId
        // Can't use Utils.getInstance().runProtected(), Utils may not have been instantiated yet
        try {
            var d = e.data;

            // Message may not be from our iframe. Could be from any component on the page.
            // Differentiate our messages further by using convivaRequestId instead of requestId
            if (typeof d !== 'object') return;
            if (typeof d.convivaRequestId === 'undefined') {
                // Backward compatibility for 2.79 and prior clients (none in production still)
                if (typeof d.requestId !== 'undefined') {
                    d.convivaRequestId = d.requestId;
                } else {
                    return;
                }
            }

            var domain_callback = DataLoader.callbacks[d.convivaRequestId];
            if(!domain_callback) {
                Utils.getInstance().log('Received response for unknown request');
                return;
            }
            if (!DataLoader.TESTAPI_forTouchstone && e.origin != domain_callback[0]) {
                Utils.getInstance().log('ERROR: Bad origin:' + e.origin);
                return;
            }

            delete DataLoader.callbacks[d.convivaRequestId];
            var bytes = d.bytes;
            if (!d.post_err || d.post_err != 'ok') {
                Utils.getInstance().log('ERROR: Error posting to ' + e.origin + ' (' + bytes + ')');
                domain_callback[1] (false, d.post_err);
            } else {
                domain_callback[1] (true, bytes);
            }
        } catch (e) {}
    }

    if(_s != STAT_INIT) _constr.apply(_s, arguments);
}
statInit(DataLoader,"DataLoader");
// DO NOT EDIT! THIS FILE WAS GENERATED BY Slash from ../../csClient/CwsClient/utils/Infer.cs
// -*- Mode: java; tab-width: 4; indent-tabs-mode: nil -*-


// namespace utils

    function Infer() {
        var _s = this;

        if(_s == STAT_INIT) Infer.MOVING_STATE /* : String */ = "MOVING";
        if(_s == STAT_INIT) Infer.NOT_MOVING_STATE /* : String */ = "NOT_MOVING";

        if(_s != STAT_INIT) _s.movingMinimumSamples /* : int */ = 3;
        if(_s != STAT_INIT) _s.notMovingMinimumSamples /* : int */ = 3;

        if(_s != STAT_INIT) _s.movingExpectedSpeed /* : Number */ = 1;
        if(_s != STAT_INIT) _s.notMovingExpectedSpeed /* : Number */ = 0;
        if(_s != STAT_INIT) _s.movingSpeedTolerance /* : Number */ = 0.25;

        if(_s != STAT_INIT) _s.resetAfter /* : Boolean */ = false;

        if(_s != STAT_INIT) _s._lastPlayHeadTimeSpeeds /* : ListCS(double) */ = undefined;
        if(_s != STAT_INIT) _s._lastPlayHeadTime /* : Number */ = 0;
        if(_s != STAT_INIT) _s._lastPollTime /* : Number */ = 0;

        function _constr() {
            _s.Reset();
        }

        defPubMeth(_s,"Update",__Update);
        function __Update(phtNow /* : int */) /* : String */  {
            var now /* : Number */ = Utils.getInstance().epochTimeMs();
            if (_s._lastPollTime > 0 && now > _s._lastPollTime)
            {
                _s._lastPlayHeadTimeSpeeds.Insert(0, (Lang.AsDouble(phtNow - _s._lastPlayHeadTime)) / (now - _s._lastPollTime));
            }
            _s._lastPollTime = now;
            _s._lastPlayHeadTime = Lang.AsDouble(phtNow);
            if (_s._lastPlayHeadTimeSpeeds.Count > Math.max(_s.movingMinimumSamples, _s.notMovingMinimumSamples))
            {
                _s._lastPlayHeadTimeSpeeds.RemoveAt(_s._lastPlayHeadTimeSpeeds.Count - 1);
            }
            return _s.InferState();
        }

        defPrivMeth(_s,"InferState",__InferState);
        function __InferState() /* : String */  {
            var inferredState /* : String */ = null;
            var numPhSpeedSamples /* : int */ = _s._lastPlayHeadTimeSpeeds.Count;
            if (numPhSpeedSamples >= Math.min(_s.movingMinimumSamples, _s.notMovingMinimumSamples))
            {
                var avgSpeed /* : Number */ = 0.0;
                var _for_array_1 =  _s._lastPlayHeadTimeSpeeds.Values;
                for(var _for_idx_2=0; _for_idx_2 < _for_array_1.length; _for_idx_2++) {
                  var phSpeed /* : Number */ = _for_array_1[_for_idx_2];

                    avgSpeed += phSpeed;
                }
                avgSpeed /= numPhSpeedSamples;

                if (numPhSpeedSamples >= _s.movingMinimumSamples
                    && Math.abs(avgSpeed - _s.movingExpectedSpeed) < _s.movingSpeedTolerance)
                {
                    inferredState = Infer.MOVING_STATE;
                }
                if (numPhSpeedSamples >= _s.notMovingMinimumSamples
                    && avgSpeed == _s.notMovingExpectedSpeed)
                {
                    inferredState = Infer.NOT_MOVING_STATE;
                }
            }
            if (_s.resetAfter && inferredState != null)
            {
                _s.Reset();
            }
            return inferredState;
        }

        defPubMeth(_s,"Reset",__Reset);
        function __Reset() /* : void */  {
            _s._lastPlayHeadTimeSpeeds = new ListCS/*double*/();
            _s._lastPlayHeadTime = -1;
            _s._lastPollTime = 0;
        }

       //JSRENAME:constant:_s:Infer:MOVING_STATE
       //JSRENAME:constant:_s:Infer:NOT_MOVING_STATE
        if(_s != STAT_INIT) _constr.apply(_s, arguments);
    }
statInit(Infer,"Infer");


// Copyright Conviva Inc. 2014-2016
// Author: Kedar Marsada <kmarsada@conviva.com>

// Subclass of the ConvivaStreamerProxy for Cast 
function ConvivaCastStreamerProxy() {
  var _s = this;

  if (_s != STAT_INIT) {
    _s._capabilities = ConvivaStreamerProxy.CAPABILITY_VIDEO +
        ConvivaStreamerProxy.CAPABILITY_QUALITY_METRICS +
        ConvivaStreamerProxy.CAPABILITY_BITRATE_METRICS;
    _s._duration = -1;
    _s._streamUrl = null;

  }

  function _constr(castPlayer, playerInstance) {

    ConvivaStreamerProxy.call(_s);
    _s.Log('ConvivaCastStreamerProxy._constr()');
    _s._castPlayer = castPlayer;
    _s._infer = new Conviva.Infer();
    _s._setAllEventListeners();
    _s._startPolling();
    _s.firstPlay = true;
    _s._player = playerInstance;

  }

  defPubMeth(_s,"SetMonitoringNotifier",__SetMonitoringNotifier);
  function __SetMonitoringNotifier(notifier /* : Function(Action(String, object)) */){
    _s.Log("SetMonitoringNotifier from overridden method");
    _s.notifier = notifier;
    if (_s.notifier != null && !_s._polling) {
      _s.Log("start polling to be called inside SetMonitoringNotifier method");
      _s._setAllEventListeners();
      _s._startPolling();
    }
    _s.super_SetMonitoringNotifier(notifier);
  }

  defPubMeth(_s, 'Cleanup', __Cleanup);
  function __Cleanup() {
    _s.Log('ConvivaCastStreamerProxy.Cleanup()');
    /*if (_s._infer != null) {
      _s._infer = null;
    }*/
    _s.notifier = null;
    _s._stopPolling();
    _s._removeAllEventListeners();
    //_s._castPlayer = null;
    _s.super_Cleanup();
  }

  defPubMeth(_s, 'GetCapabilities', __GetCapabilities);
  function __GetCapabilities() {
    return _s._capabilities;
  }

  // GETTERS
  this.GetDuration = function() {
    return _s._duration;
  };
  
  this.GetStreamUrl = function () {
    return _s._streamUrl;
  }

  this.GetBufferLengthMs = function() {
    return _s._bufferLengthMs;
  };

  this.GetEncodedFrameRate = function() {
    return _s._encodedFrameRate;
  };

  this.GetPlayheadTimeMs = function() {
    return _s._playheadTimeMs;
  };


  //SETTERS
  this.SetDuration = function(duration) {
    if (isFinite(duration) && duration > 0) {
      var durationSec = duration;
      // push to metadata only if there is a change
      if (_s.GetDuration() != durationSec) {
        _s._duration = durationSec;
        var meta = {};
        meta[ConvivaStreamerProxy.METADATA_DURATION] = _s._duration;
        _s.SetMetadata(meta);
      }
    }
  };
  
  this.SetStreamUrl = function(streamUrl) {
      var streamUrlStr= streamUrl ;
      // push to metadata only if there is a change
      if (_s.GetStreamUrl() != streamUrlStr) {
        _s._streamUrl = streamUrlStr;
        var meta = {};
        meta[ConvivaStreamerProxy.METADATA_STREAM_URL] = _s._streamUrl;
        _s.SetMetadata(meta);
      }
  };

  this.SetPlayheadTimeMs = function(pht) {
    if (isFinite(pht) && pht >= 0) {
      var phtMs = pht * 1000;
      if (_s.GetPlayheadTimeMs() != phtMs) {
        _s._playheadTimeMs = phtMs;
      }
      _s.InferState();
    }
  };

  this.SetPlayerState = function(convivaState) {
    if (_s.GetPlayingState() !== convivaState) {
      _s.SetPlayingState(convivaState);
      _s._infer.Reset();
    }
  };

  this.InferState = function() {
    if (_s._infer) {

      var newState = _s._infer.Update(_s.GetPlayheadTimeMs());
      if (newState) {
        if (newState === Conviva.Infer.MOVING_STATE &&
            _s.GetPlayingState() !== Conviva.ConvivaStreamerProxy.PLAYING) {
          _s.Log('ConvivaCastStreamerProxy.InferState(): PLAYING');
          _s.SetPlayerState(Conviva.ConvivaStreamerProxy.PLAYING);
        }
        if (newState === Conviva.Infer.NOT_MOVING_STATE &&
            _s.GetPlayingState() === Conviva.ConvivaStreamerProxy.PLAYING) {
          _s.Log('ConvivaCastStreamerProxy.InferState(): BUFFERING');
          _s.SetPlayerState(Conviva.ConvivaStreamerProxy.BUFFERING);
        }
      }
    }
  };

  this._startPolling = function() {
    _s._polling = true;
    _s._cancelTimer =
        Utils.getInstance()._settings.platformApi.createTimer(
        _s._poll, 200, 'ConvivaCastStreamerProxy._poll');
  };

  this._poll = function() {
      Utils.getInstance().runProtected(function() {

      if (!_s._polling || !_s._castPlayer ) {
          _s.SetPlayheadTimeMs(0);
          return;
      }
      
      //_s.Log("The SetCurrentTime " + _s._castPlayer.currentTime);
      _s.SetPlayheadTimeMs(_s._castPlayer.currentTime);
      }, 'ConvivaCastStreamerProxy._poll');
  };

  this._stopPolling = function() {
    if (_s._polling && typeof _s._cancelTimer === 'function') {
      _s._cancelTimer();
    }
    _s._polling = false;
  };


  this._declareError = function(errMsg) {
    _s.Log('ConvivaCastStreamerProxy._declareError: ' + errMsg);
    _s.SetError(StreamerError.makeUnscopedError(
        errMsg, StreamerError.SEVERITY_FATAL));
  };

  this._setAllEventListeners = function() {
    _s.Log('ConvivaCastStreamerProxy._setAllEventListeners()');

    if (_s._castPlayer) {
      _s._castPlayer.addEventListener('loadstart', _s.onLoadstart);
      _s._castPlayer.addEventListener('loadedmetadata', _s.onLoadedMetadata);
      _s._castPlayer.addEventListener('ended', _s.onEnded);
      _s._castPlayer.addEventListener('pause', _s.onPause);
      _s._castPlayer.addEventListener('timeupdate', _s.onDurationchange);
      _s._castPlayer.addEventListener('abort', _s.onStalled);
      _s._castPlayer.addEventListener('seeking', _s.onSeeking);
      _s._castPlayer.addEventListener('playing', _s.onPlay);
      _s._castPlayer.addEventListener('error', _s.onError);
      _s._castPlayer.addEventListener('seeked', _s.onSeekComplete);
    }
  };

  this._removeAllEventListeners = function() {
    _s.Log('ConvivaCastStreamerProxy._removeAllEventListeners()');

    if (_s._castPlayer) {
      _s._castPlayer.removeEventListener('loadstart', _s.onLoadstart);
      _s._castPlayer.removeEventListener('loadedmetadata', _s.onLoadedMetadata);
      _s._castPlayer.removeEventListener('ended', _s.onEnded);
      _s._castPlayer.removeEventListener('pause', _s.onPause);
      _s._castPlayer.removeEventListener('timeupdate', _s.onDurationchange);
      _s._castPlayer.removeEventListener('abort', _s.onStalled);
      _s._castPlayer.removeEventListener('seeking', _s.onSeeking);
      _s._castPlayer.removeEventListener('play', _s.onPlay);
      _s._castPlayer.removeEventListener('error', _s.onError);
      _s._castPlayer.removeEventListener('seeked', _s.onSeekComplete);
    }
  };
  this.onLoadstart = function() {
    Utils.getInstance().runProtected(function() {
      _s.Log("ConvivaCastStreamerProxy.onLoadstart");
      _s.SetPlayerState(Conviva.ConvivaStreamerProxy.BUFFERING);
    },'ConvivaCastStreamerProxy.onLoadstart');
  };
  this.onLoadedMetadata = function(event, p1, p2) {
    Utils.getInstance().runProtected(function() {
      _s.Log('ConvivaCastStreamerProxy.onLoadedMetadata');
      if (!_s._castPlayer.duration) {
          return;
      }
      if (_s._castPlayer) {
        _s.SetDuration(_s._castPlayer.duration);
      }
    }, 'ConvivaCastStreamerProxy.onLoadedMetadata');
  };

  this.onPause = function(event, p1, p2) {
    Utils.getInstance().runProtected(function() {
      _s.Log('ConvivaCastStreamerProxy.onPause');
      if(_s._player) {
        //if(_s._player.getState()['underflow']) {
        if(_s._player.getState().underflow) {
          _s.SetPlayerState(Conviva.ConvivaStreamerProxy.BUFFERING);
        }
        else {
          _s.SetPlayerState(Conviva.ConvivaStreamerProxy.PAUSED);
        }
      } else {
        _s.SetPlayerState(Conviva.ConvivaStreamerProxy.PAUSED);
      }
    }, 'ConvivaCastStreamerProxy.onPause');
  };

  this.onEnded = function(event, p1, p2) {
    Utils.getInstance().runProtected(function() {
      _s.Log('ConvivaCastStreamerProxy.onEnded');
      if (_s._castPlayer) {//Ignore 'ended' callback after player is destroyed
        _s.SetPlayerState(Conviva.ConvivaStreamerProxy.STOPPED);
      }
    }, 'ConvivaCastStreamerProxy.onEnded');
  };

  this.onDurationchange = function(event, p1, p2) {
      //If streaming protocol, fetch bitrate and set to conviva streaminfo object
      if(_s._player) {
        var bitrate = 0, streamInfo,streamIndex=0;
        if(_s._player.getStreamingProtocol() != null && typeof _s._player.getStreamingProtocol().getStreamCount == 'function') { 
            var streamCount = _s._player.getStreamingProtocol().getStreamCount();
            for(streamIndex=0;streamIndex<streamCount;streamIndex++) {
                streamInfo = _s._player.getStreamingProtocol().getStreamInfo(streamIndex);
                if(streamInfo.mimeType.indexOf('video') === 0 || streamInfo.mimeType.indexOf('audio') == 0) {
                  bitrateIndex = _s._player.getStreamingProtocol().getQualityLevel(streamIndex);
                  bitrate += _s._player.getStreamingProtocol().getStreamInfo(streamIndex).bitrates[bitrateIndex];
                }
            }
            _s.SetStream(new StreamInfo(Math.round(bitrate / 1000), null, -1, -1, -1));
        }
      }
    Utils.getInstance().runProtected(function() {
      //_s.Log('ConvivaCastStreamerProxy.onDurationchange');
      if (_s._castPlayer) {
        _s.SetDuration(_s._castPlayer.duration);
      }
    }, 'ConvivaCastStreamerProxy.onDurationchange');
  };
  this.onPlay = function(event, p1, p2) {
    Utils.getInstance().runProtected(function() {
      _s.Log('ConvivaCastStreamerProxy.onPlay');
      if (_s.firstPlay) {
         _s.Log('ConvivaCastStreamerProxy.onPlay :First Play IGNORED!!');
         //Update video params
         _s.firstPlay = false;
	  return;
      }
      _s.SetPlayerState(Conviva.ConvivaStreamerProxy.PLAYING);

    }, 'ConvivaCastStreamerProxy.onPlay');
  };

  this.onStalled = function(event, p1, p2) {
    Utils.getInstance().runProtected(function() {
      _s.Log('ConvivaCastStreamerProxy.onStalled - abort event');
      _s.SetPlayerState(Conviva.ConvivaStreamerProxy.STOPPED);
    }, 'ConvivaCastStreamerProxy.onStalled');
  };

  this.onSeeking = function(event, p1, p2) {
    Utils.getInstance().runProtected(function() {
      
        if (!_s.isSeekStarted) {
          _s.isSeekStarted = true;
          //SEEK START
          _s.Log('ConvivaCastStreamerProxy.onSeeking');
          _s.SendSeekEvent(Conviva.LivePass.SEEK_ACTIONS_TYPE.SEEK_START, -1);
        }
    }, 'ConvivaCastStreamerProxy.onSeeking');
  };

  
  this.onSeekComplete = function(event, p1, p2) {
    Utils.getInstance().runProtected(function() {
      _s.Log('ConvivaCastStreamerProxy.onSeekComplete');
      //SEEK END
      _s.SendSeekEvent(Conviva.LivePass.SEEK_ACTIONS_TYPE.SEEK_END, -1);
      _s.isSeekStarted = false;
    },'ConvivaCastStreamerProxy.onSeekComplete');
  };    


  this.onError = function() {
    Utils.getInstance().runProtected(function() {
      _s.Log('ConvivaCastStreamerProxy.onError');
      if (_s._castPlayer) {
          var errorEvent = _s._castPlayer.error;
          var reportedError;
          if(errorEvent!=null) {
            reportedError = _s._convertError(
               errorEvent ? errorEvent.code : 99);
            _s.Log("MediaError: " + errorEvent.message);
          } else {
            reportedError = _s._convertError(99);
          }
          _s._declareError(reportedError);
          
      }
    }, 'ConvivaCastStreamerProxy.onError');
  };

  this._convertError = function(code) {
    switch (code) {
      case 0:
      errStr = 'MEDIA_ERR_CUSTOM'; break; // find way to get str desc of error
      case 1:
        errStr = 'MEDIA_ERR_ABORTED'; break;
      case 2:
        errStr = 'MEDIA_ERR_NETWORK'; break;
      case 3:
        errStr = 'MEDIA_ERR_DECODE'; break;
      case 4:
        errStr = 'MEDIA_ERR_SRC_NOT_SUPPORTED'; break;
      default:
        errStr = 'MEDIA_ERR_UNKNOWN';
    }
     
    _s.Log("MediaError: code " + code+ " " + errStr);
    return errStr;
  };

  /*this.Cleanup = function () {
    _s.Log('ConvivaCastStreamerProxy.lastCleanup');
    _s._removeAllEventListeners();
    // Call base Cleanup method, important for proper streamer detaching  
    _s.super_Cleanup();
  };*/

  if (_s != STAT_INIT) _constr.apply(_s, arguments);

}
statInit(ConvivaCastStreamerProxy, 'ConvivaCastStreamerProxy');
// Copyright (c) 2009-2014, Conviva Inc. All Rights Reserved.
// Implementation of the Platform API for HTML5
// Author: George Necula (necula@conviva.com)
// Changes: Alban Nicolas (anicolas@conviva.com)

function Html5PlatformApi () {
    var _s = this;
    var _persistentData = null;
    var _convivaKey = "convivaPersistent";

    function _constr() {
        _s._dataLoader = new DataLoader();

        // @deprecated in CWS 1.7
        _s.platform = (navigator && navigator.platform && (navigator.platform.toString ? navigator.platform.toString() : null));
    }

    /// <summary>
    /// Cleanup internal and external objects used by the implementation.
    /// </summary>
    this.cleanup = function() {
        if (_s._dataLoader != null) {
            _s._dataLoader.cleanup();
            _s._dataLoader = null;
        }
    }

    /// <summary>
    /// Save data on persistent storage
    /// callback must be invoked after the operation.
    /// </summary>
    /// <param name="data">a string representing data to be saved</param>
    /// <param name="callback">Callback function to be invoked. Pass in true if success, false otherwise</param>
    this.saveLocalData = function(data, callback) {
        try {//NO_RENAME:localStorage,setItem
            localStorage.setItem(_convivaKey, data);
        } catch(e) {
            callback(false);
            return;
        }
        callback(true);
    }

    /// <summary>
    /// Retrieve data from persistent storage
    /// callback must be invoked after the operation.
    /// </summary>
    /// <param name="callback">callback function to be invoked. 
    /// Two parameters are required: 
    /// * a boolean representing success of the operation
    /// * a string representing the retrieved data
    /// </param>
    this.loadLocalData = function(callback) {
        try {//NO_RENAME:localStorage,getItem
            var data = localStorage.getItem(_convivaKey);
            callback(true, data);
        } catch(e) { 
            callback(false, "");
        }
    }

    this.deleteLocalData = function() {
        try {//NO_RENAME:localStorage,clear
            var data = localStorage.clear();
        } catch(e) { 
        }
    }

    /// <summary>
    /// Send HTTP request
    /// 
    /// The callback function must be invoked after the operation
    /// </summary>
    /// <param name="isPOST">true if this is a POST request; false for GET</param>
    /// <param name="url">URL of the request</param>
    /// <param name="data">The data to be sent (ignored for GET)</param>
    /// <param name="contentType">The content type (if null, the default will be "application/json")</param>
    /// <param name="callback">Callback function to be invoked
    /// Two parameters are required: 
    /// * a boolean representing success of the operation
    /// * a String representing data in the response
    /// </param>
    /// Returns a function that can be called to cancel and cleanup the request. The function may be called 
    /// multiple times. 
    this.httpRequest = function (isPOST, url, data, contentType, callback) {
        if(typeof(data) !== "string") {
            data = _s.jsonEncode(data, null);
        }
        return _s._dataLoader.makeRequest(isPOST, url, data, contentType, callback);
    }

    /// <summary>
    /// Return the current time in milliseconds since Unix epoch 
    /// </summary>
    /// <returns></returns>
    this.epochTimeMs = function () {
        var d = new Date();
        return d.getTime();
    }

    /// <summary>
    /// Start a periodic timer
    /// 
    /// <param name="timerAction">The Action to run periodicaly</param>
    /// <param name="intervalMs">The interval in ms</param>
    /// <param name="actionName">The name of the action (for debugging)</param>
    /// </summary>
    /// <returns>A function that can be called to cancel/cleanup the timer</returns>
    this.createTimer = function (timerAction, intervalMs, actionName) {
        // var wrapperAction = function () {
        //     Utils.getInstance().log("timer tick for action: " + actionName);
        //     Utils.getInstance().runProtected(timerAction, actionName);
        // };
        // var timerId = setInterval(wrapperAction, intervalMs);
        var timerId = setInterval(timerAction, intervalMs);
        return (function () {
            if(timerId != -1) {
                clearInterval(timerId);
                timerId = -1;
            }});
    }


    /// <summary>
    /// Encode an object to JSON (asynchronously). This
    /// asynchronous interface is provided because encoding may take too
    /// long for a single handler on some platforms.
    /// </summary>
    /// <param name="obj">must be a JSON encodable data structure in the native language
    /// (i.e. not a Slash data structure like a DictionaryCS).  It must have
    /// one of the following types:
    ///   - dictionary
    ///   - array or list
    ///   - string
    ///   - number
    ///   - boolean
    ///   - null</param>
    /// <returns>A string of JSON-encoded data.</returns>
    this.jsonEncode = function (obj) { //NO_RENAME:JSON,stringify
        var jsonString = null;
        jsonString = JSON.stringify(obj);
        return jsonString;
    }

    /// <summary>
    /// Decode a string to an object. The values in the object will be the same
    /// type as the JSON encodable values documented in jsonEncode.
    /// </summary>
    /// <param name="json"></param>
    /// <returns>An object representing the JSON-decoded data.</returns>
    this.jsonDecode = function (json) { //NO_RENAME:JSON,parse
        var parsedJson = null;
        parsedJson = JSON.parse(json);
        return parsedJson;
    }

    /// <summary>
    /// Debugging message logging
    /// </summary>
    /// <param name="message"> message to be logged</param>
    this.consoleLog = function(message) {
        if (typeof console != 'undefined' && console.log) {
            console.log(message);
        } 
    }

    
    /// <summary>
    /// Error message logging
    /// </summary>
    /// <param name="errMsg">error message to be logged</param>
    this.consoleErr = function(errMsg) {
        if (typeof console != 'undefined' && console.error) {
            console.error(errMsg);
        } 
    }

    /// <summary>
    /// @deprecated in CWS 1.7
    /// Return a string that names the device. 
    /// Maximum length is 64 bytes.
    /// Return null if not available
    /// </summary>
    this.getDevice = function() {
        return 'browser';
    }

    /// <summary>
    /// @deprecated in CWS 1.7
    /// Return a string representing the version number of the device. 
    /// Maximum length is 64 bytes.
    /// Return null if not available
    /// </summary>
    this.getDeviceVersion = function() {
        return null;
    }

    /// <summary>
    /// @deprecated in CWS 1.7
    /// Return a string representing the type of the device.
    /// Maximum length is 64 bytes. Should be selected from the following list: 
    /// * PC
    /// * Mobile
    /// * Console
    /// * Settop
    /// </summary>
    this.getDeviceType = function() {
        return "PC";
    }

    /// <summary>
    /// @deprecated in CWS 1.7
    /// Return a string naming the operating system in which the session is running. 
    /// Maximum length is 64 bytes. Must be in upper case. 
    /// Should be selected from the following list:
    /// * MAC
    /// * WIN
    /// * IOS
    /// * XBOX
    /// * SAMSUNG
    /// * PS3
    /// * AND (Android)
    /// * UNIX (for any *nix other than Android, including Linux).
    /// If none of these options apply, choose an appropriate name.
    /// </summary>
    this.getOS = function() {
        return _s._getPlatformName();
    }

    /// <summary>
    /// @deprecated in CWS 1.7
    /// A string indicating the full version number of the operating system indicated under "os", if any.
    /// null if not available
    /// </summary>
    this.getOSVersion = function () {
        return null;
    }

    /// <summary>
    /// Returns a dictionary with platform metadata.
    /// Schemas are per-platform, and defined in the backend. 
    /// </summary>
    defPubMeth(_s,"getPlatformMetadata",__getPlatformMetadata); // defining it that way for inheritance
    function __getPlatformMetadata() { //NO_RENAME:navigator,platform,userAgent,toString
        var res = { "sch" : "html5.1" };
        res['np'] = (navigator && navigator.platform && (navigator.platform.toString ? navigator.platform.toString() : null));
        res['nua'] = (navigator && navigator.userAgent && (navigator.userAgent.toString ? navigator.userAgent.toString() : null));
        return res;
    }

    // TODO: move to backend
    // @deprecated in CWS 1.7
    this._getPlatformName = function () {
        if (_s.platform == null) {
            return null;
        }
        var stringContains = function (haystack, needle) {
            return haystack.indexOf(needle) >= 0;
        };
        if (stringContains(_s.platform, "iPad")
            || stringContains(_s.platform, "iPhone")
            || stringContains(_s.platform, "iPod")) {
            return "IOS";
        } else if (stringContains(_s.platform, "Mac")) {
            return "MAC";
        } else if (stringContains(_s.platform, "Win")) {
            return "WIN";
        } else if (stringContains(_s.platform, "Linux")
                   || stringContains(_s.platform, "SunOS")
                   || stringContains(_s.platform, "HP-UX")
                   || stringContains(_s.platform, "BSD")) {
            return "UNIX";
        } else if (stringContains(_s.platform, "PLAYSTATION 3")) {
            return "PS3";
        } else if (stringContains(_s.platform, "XBOX")) {
            return "XBOX";
        } else {
            return null;
        }
    }

    if(_s != STAT_INIT) _constr.apply(_s, arguments);
}
statInit(Html5PlatformApi, 'Html5PlatformApi');
// Copyright (c) 2014-2016, Conviva Inc. All Rights Reserved.
// Implementation of the Platform API for Chrome cast
// Author: Kedar Marsada <kmarsada@conviva.com>

function ConvivaVideojsPlatformApi() {
    var _s = this;

    function _constr() {
        Html5PlatformApi.call(_s);
    }

    this.getPlatformMetadata = function() {
        var res = _s.super_getPlatformMetadata();
        res['sch'] = 'Chromecast.1';
        res['fw']='Cast Player';
	if(cast.framework) {
	  res['fwv']= cast.framework.VERSION;
	} else {
          res['fwv']= cast.receiver.VERSION;
	}
        // get version at runtime?
        return res;
    };

    //if(_s != STAT_INIT)
    _constr.apply(_s, arguments);
}
statInit(ConvivaVideojsPlatformApi, 'ConvivaVideojsPlatformApi');
// Copyright Conviva Inc. 2017-2018
// Author: Runit Agarwalla <ragarwalla@conviva.com>

// Subclass of the ConvivaStreamerProxy for Casting v3 sdk
function ConvivaCastV3StreamerProxy() {
  var _s = this;

  if (_s != STAT_INIT) {
    _s._capabilities = ConvivaStreamerProxy.CAPABILITY_VIDEO +
        ConvivaStreamerProxy.CAPABILITY_QUALITY_METRICS +
        ConvivaStreamerProxy.CAPABILITY_BITRATE_METRICS;
    _s._duration = -1;
    _s._streamUrl = null;
    _s._playheadTimeMs = -1;

  }

  function _constr(castPlayer) {

    ConvivaStreamerProxy.call(_s);
    _s.Log('ConvivaCastV3StreamerProxy._constr()');
    _s._castPlayer = castPlayer;
    _s._infer = new Conviva.Infer();
    _s._setAllEventListeners();
    _s._startPolling();
  }

  defPubMeth(_s,"SetMonitoringNotifier",__SetMonitoringNotifier);
  function __SetMonitoringNotifier(notifier /* : Function(Action(String, object)) */){
    _s.Log("SetMonitoringNotifier from overridden method");
    _s.notifier = notifier;
    if (_s.notifier != null && !_s._polling) {
      _s.Log("start polling to be called inside SetMonitoringNotifier method");
      _s._setAllEventListeners();
      _s._startPolling();
    }
    _s.super_SetMonitoringNotifier(notifier);
  }

  defPubMeth(_s, 'Cleanup', __Cleanup);
  function __Cleanup() {
    _s.Log('ConvivaCastV3StreamerProxy.Cleanup()');
    _s.notifier = null;
    _s._stopPolling();
    _s._removeAllEventListeners();
    _s.super_Cleanup();
  }

  defPubMeth(_s, 'GetCapabilities', __GetCapabilities);
  function __GetCapabilities() {
    return _s._capabilities;
  }

  // GETTERS
  this.GetDuration = function() {
    return _s._duration;
  };
  
  this.GetStreamUrl = function () {
    return _s._streamUrl;
  }

  //overriden
  this.GetPlayheadTimeMs = function() {
    return _s._castPlayer.getCurrentTimeSec() * 1000;
  };


  //SETTERS
  this.SetDuration = function(duration) {
    if (isFinite(duration) && duration > 0) {
      var durationSec = duration;
      // push to metadata only if there is a change
      if (_s.GetDuration() != durationSec) {
        _s._duration = durationSec;
        var meta = {};
        meta[ConvivaStreamerProxy.METADATA_DURATION] = _s._duration;
        _s.SetMetadata(meta);
      }
    }
  };
  
  this.SetStreamUrl = function(streamUrl) {
      var streamUrlStr= streamUrl ;
      // push to metadata only if there is a change
      if (_s.GetStreamUrl() != streamUrlStr) {
        _s._streamUrl = streamUrlStr;
        var meta = {};
        meta[ConvivaStreamerProxy.METADATA_STREAM_URL] = _s._streamUrl;
        _s.SetMetadata(meta);
      }
  };

  this.SetPlayerState = function(convivaState) {
    if (_s.GetPlayingState() !== convivaState) {
      _s.SetPlayingState(convivaState);
      _s._infer.Reset();
    }
  };

  this.InferState = function() {
    if (_s._infer) {
      if(_s._castPlayer.getPlayerState() == "BUFFERING") {
        _s.SetPlayerState(Conviva.ConvivaStreamerProxy.BUFFERING);
      } else {
        var pht = _s._castPlayer.getCurrentTimeSec() * 1000;
        if (isFinite(pht) && pht >= 0) {
          var newState = _s._infer.Update(pht);
          if (newState) {
            if (newState === Conviva.Infer.MOVING_STATE &&
                _s.GetPlayingState() !== Conviva.ConvivaStreamerProxy.PLAYING) {
              _s.Log('ConvivaCastStreamerProxy.InferState(): PLAYING');
              _s.SetPlayerState(Conviva.ConvivaStreamerProxy.PLAYING);
            }
            if (newState === Conviva.Infer.NOT_MOVING_STATE &&
                _s.GetPlayingState() === Conviva.ConvivaStreamerProxy.PLAYING) {
              _s.Log('ConvivaCastStreamerProxy.InferState(): BUFFERING');
              _s.SetPlayerState(Conviva.ConvivaStreamerProxy.BUFFERING);
	        }
          }
        }
      }
    }
  };

  this._startPolling = function() {
    _s._polling = true;
    _s._cancelTimer =
        Utils.getInstance()._settings.platformApi.createTimer(
        _s._poll, 200, 'ConvivaCastV3StreamerProxy._poll');
  };

  this._poll = function() {
      Utils.getInstance().runProtected(function() {

      if (!_s._polling || !_s._castPlayer ) {
          return;
      }
      _s.SetDuration(_s._castPlayer.getDurationSec());
      _s.InferState();
      }, 'ConvivaCastV3StreamerProxy._poll');
  };

  this._stopPolling = function() {
    if (_s._polling && typeof _s._cancelTimer === 'function') {
      _s._cancelTimer();
    }
    _s._polling = false;
  };


  this._declareError = function(errMsg) {
    _s.Log('ConvivaCastV3StreamerProxy._declareError: ' + errMsg);
    _s.SetError(StreamerError.makeUnscopedError(
        errMsg, StreamerError.SEVERITY_FATAL));
  };

  this._setAllEventListeners = function() {
    _s.Log('ConvivaCastV3StreamerProxy._setAllEventListeners()');
    // refer to https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events.category for error type
    if (_s._castPlayer) {
      _s._castPlayer.addEventListener(cast.framework.events.EventType.LOAD_START, _s.onLoadstart);
      _s._castPlayer.addEventListener(cast.framework.events.EventType.LOADED_METADATA, _s.onLoadedMetadata);
      _s._castPlayer.addEventListener(cast.framework.events.EventType.ENDED, _s.onEnded);
      _s._castPlayer.addEventListener(cast.framework.events.EventType.PAUSE, _s.onPause);
      _s._castPlayer.addEventListener(cast.framework.events.EventType.SEEKING, _s.onSeeking);
      _s._castPlayer.addEventListener(cast.framework.events.EventType.SEEKED, _s.onSeekComplete);
      _s._castPlayer.addEventListener(cast.framework.events.EventType.ERROR, _s.onError);
      _s._castPlayer.addEventListener(cast.framework.events.EventType.BITRATE_CHANGED, _s.onBitrateChange);
    }
  };

  this._removeAllEventListeners = function() {
    _s.Log('ConvivaCastV3StreamerProxy._removeAllEventListeners()');

    if (_s._castPlayer) {
      _s._castPlayer.removeEventListener(cast.framework.events.EventType.LOAD_START, _s.onLoadstart);
      _s._castPlayer.removeEventListener(cast.framework.events.EventType.LOADED_METADATA, _s.onLoadedMetadata);
      _s._castPlayer.removeEventListener(cast.framework.events.EventType.ENDED, _s.onEnded);
      _s._castPlayer.removeEventListener(cast.framework.events.EventType.PAUSE, _s.onPause);
      _s._castPlayer.removeEventListener(cast.framework.events.EventType.SEEKING, _s.onSeeking);
      _s._castPlayer.removeEventListener(cast.framework.events.EventType.SEEKED, _s.onSeekComplete);
      _s._castPlayer.removeEventListener(cast.framework.events.EventType.ERROR, _s.onError);
      _s._castPlayer.removeEventListener(cast.framework.events.EventType.BITRATE_CHANGED, _s.onBitrateChange);
    }
  };
  this.onLoadstart = function() {
    Utils.getInstance().runProtected(function() {
      _s.Log("ConvivaCastV3StreamerProxy.onLoadstart");
      _s.SetPlayerState(Conviva.ConvivaStreamerProxy.BUFFERING);
    },'ConvivaCastV3StreamerProxy.onLoadstart');
  };
  this.onLoadedMetadata = function(event) {
    Utils.getInstance().runProtected(function() {
      _s.Log('ConvivaCastV3StreamerProxy.onLoadedMetadata');
      _s.SetDuration(_s._castPlayer.getDurationSec());   
    }, 'ConvivaCastV3StreamerProxy.onLoadedMetadata');
  };

  this.onBitrateChange = function(event) {
      _s.SetStream(new StreamInfo(Math.round(event.totalBitrate / 1000), null, -1, -1, -1));
  };  

  this.onPause = function(event, p1, p2) {
    Utils.getInstance().runProtected(function() {
      _s.Log('ConvivaCastV3StreamerProxy.onPause');
      _s.SetPlayerState(Conviva.ConvivaStreamerProxy.PAUSED);
    }, 'ConvivaCastV3StreamerProxy.onPause');
  };

  this.onEnded = function(event, p1, p2) {
    Utils.getInstance().runProtected(function() {
      _s.Log('ConvivaCastV3StreamerProxy.onEnded');
      if (_s._castPlayer) {//Ignore 'ended' callback after player is destroyed
        _s.SetPlayerState(Conviva.ConvivaStreamerProxy.STOPPED);
      }
    }, 'ConvivaCastV3StreamerProxy.onEnded');
  };

  this.onSeeking = function(event, p1, p2) {
    Utils.getInstance().runProtected(function() {
      
        if (!_s.isSeekStarted) {
          _s.isSeekStarted = true;
          //SEEK START
          _s.Log('ConvivaCastV3StreamerProxy.onSeeking');
          _s.SendSeekEvent(Conviva.LivePass.SEEK_ACTIONS_TYPE.SEEK_START, -1);
        }
    }, 'ConvivaCastV3StreamerProxy.onSeeking');
  };

  
  this.onSeekComplete = function(event, p1, p2) {
    Utils.getInstance().runProtected(function() {
      _s.Log('ConvivaCastV3StreamerProxy.onSeekComplete');
      //SEEK END
      _s.SendSeekEvent(Conviva.LivePass.SEEK_ACTIONS_TYPE.SEEK_END, -1);
      _s.isSeekStarted = false;
    },'ConvivaCastV3StreamerProxy.onSeekComplete');
  };    

  this.onError = function(event) {
    Utils.getInstance().runProtected(function() {
      _s.Log('ConvivaCastStreamerProxy.onError');
      if (_s._castPlayer) {
          var errorEvent = event.error;
          var reportedError;
          if(typeof errorEvent!=='undefined') {
            reportedError = _s._convertError(
               errorEvent ? errorEvent.type : "UNKNOWN");
          } else {
            reportedError = _s._convertError("UNKNOWN");
          }
          _s._declareError(reportedError);
          
      }
    }, 'ConvivaCastStreamerProxy.onError');
  };

  this._convertError = function(errorType) {
    switch (errorType) {
      case cast.framework.messages.ErrorType.LOAD_FAILED:
        errStr = cast.framework.messages.ErrorType.LOAD_FAILED; break;
      case cast.framework.messages.ErrorType.LOAD_CANCELLED:
        errStr = cast.framework.messages.ErrorType.LOAD_CANCELLED; break;
      case cast.framework.messages.ErrorType.INVALID_REQUEST:
        errStr = cast.framework.messages.ErrorType.INVALID_REQUEST; break;
      default:
        errStr = 'MEDIA_ERR_UNKNOWN';
    }
     
    _s.Log("MediaError: type " + errorType+ " " + errStr);
    return errStr;
  };


  if (_s != STAT_INIT) _constr.apply(_s, arguments);

}
statInit(ConvivaCastV3StreamerProxy, 'ConvivaCastV3StreamerProxy');
})();
var Conviva = (typeof Conviva !== 'undefined') ? Conviva : (function () { });
Conviva.LivePass = ConvivaPrivateLoader.LivePass; Conviva.ConvivaContentInfo = ConvivaPrivateLoader.ConvivaContentInfo; Conviva.StreamerError = ConvivaPrivateLoader.StreamerError; Conviva.ConvivaStreamerProxy = ConvivaPrivateLoader.ConvivaStreamerProxy; Conviva.Settings = ConvivaPrivateLoader.Settings; Conviva.StreamInfo = ConvivaPrivateLoader.StreamInfo; Conviva.Utils = ConvivaPrivateLoader.Utils; Conviva.ConvivaCastStreamerProxy = ConvivaPrivateLoader.ConvivaCastStreamerProxy; Conviva.ConvivaVideojsPlatformApi = ConvivaPrivateLoader.ConvivaVideojsPlatformApi; Conviva.Infer = ConvivaPrivateLoader.Infer; Conviva.ConvivaCastV3StreamerProxy = ConvivaPrivateLoader.ConvivaCastV3StreamerProxy;
}
