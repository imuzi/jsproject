/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = protobuf;//require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * ddzMessageType enum.
 * @exports ddzMessageType
 * @enum {string}
 * @property {number} ddz_UnknownID=0 ddz_UnknownID value
 * @property {number} S2C_DDZ_GameInfoID=11000 S2C_DDZ_GameInfoID value
 * @property {number} S2C_DDZ_GameStartID=11001 S2C_DDZ_GameStartID value
 * @property {number} S2C_DDZ_GameCallNTYID=11002 S2C_DDZ_GameCallNTYID value
 * @property {number} C2S_DDZ_GameCallID=11003 C2S_DDZ_GameCallID value
 * @property {number} S2C_DDZ_GameCallID=11004 S2C_DDZ_GameCallID value
 * @property {number} S2C_DDZ_GameBankerID=11005 S2C_DDZ_GameBankerID value
 * @property {number} S2C_DDZ_GamePlayNTYID=11006 S2C_DDZ_GamePlayNTYID value
 * @property {number} C2S_DDZ_GamePlayCardID=11007 C2S_DDZ_GamePlayCardID value
 * @property {number} S2C_DDZ_GamePlayCardID=11008 S2C_DDZ_GamePlayCardID value
 * @property {number} S2C_DDZ_GameEndID=11009 S2C_DDZ_GameEndID value
 * @property {number} S2C_DDZ_GameResultID=11010 S2C_DDZ_GameResultID value
 */
$root.ddzMessageType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ddz_UnknownID"] = 0;
    values[valuesById[11000] = "S2C_DDZ_GameInfoID"] = 11000;
    values[valuesById[11001] = "S2C_DDZ_GameStartID"] = 11001;
    values[valuesById[11002] = "S2C_DDZ_GameCallNTYID"] = 11002;
    values[valuesById[11003] = "C2S_DDZ_GameCallID"] = 11003;
    values[valuesById[11004] = "S2C_DDZ_GameCallID"] = 11004;
    values[valuesById[11005] = "S2C_DDZ_GameBankerID"] = 11005;
    values[valuesById[11006] = "S2C_DDZ_GamePlayNTYID"] = 11006;
    values[valuesById[11007] = "C2S_DDZ_GamePlayCardID"] = 11007;
    values[valuesById[11008] = "S2C_DDZ_GamePlayCardID"] = 11008;
    values[valuesById[11009] = "S2C_DDZ_GameEndID"] = 11009;
    values[valuesById[11010] = "S2C_DDZ_GameResultID"] = 11010;
    return values;
})();

/**
 * ddzErrorCode enum.
 * @exports ddzErrorCode
 * @enum {string}
 * @property {number} OK=0 OK value
 * @property {number} ddzErrorCode_RULE=1 ddzErrorCode_RULE value
 */
$root.ddzErrorCode = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "OK"] = 0;
    values[valuesById[1] = "ddzErrorCode_RULE"] = 1;
    return values;
})();

$root.tyDDZ_PlayingCards = (function() {

    /**
     * Properties of a tyDDZ_PlayingCards.
     * @exports ItyDDZ_PlayingCards
     * @interface ItyDDZ_PlayingCards
     * @property {Array.<Uint8Array>} [arrCards] tyDDZ_PlayingCards arrCards
     */

    /**
     * Constructs a new tyDDZ_PlayingCards.
     * @exports tyDDZ_PlayingCards
     * @classdesc Represents a tyDDZ_PlayingCards.
     * @constructor
     * @param {ItyDDZ_PlayingCards=} [properties] Properties to set
     */
    function tyDDZ_PlayingCards(properties) {
        this.arrCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * tyDDZ_PlayingCards arrCards.
     * @member {Array.<Uint8Array>}arrCards
     * @memberof tyDDZ_PlayingCards
     * @instance
     */
    tyDDZ_PlayingCards.prototype.arrCards = $util.emptyArray;

    /**
     * Creates a new tyDDZ_PlayingCards instance using the specified properties.
     * @function create
     * @memberof tyDDZ_PlayingCards
     * @static
     * @param {ItyDDZ_PlayingCards=} [properties] Properties to set
     * @returns {tyDDZ_PlayingCards} tyDDZ_PlayingCards instance
     */
    tyDDZ_PlayingCards.create = function create(properties) {
        return new tyDDZ_PlayingCards(properties);
    };

    /**
     * Encodes the specified tyDDZ_PlayingCards message. Does not implicitly {@link tyDDZ_PlayingCards.verify|verify} messages.
     * @function encode
     * @memberof tyDDZ_PlayingCards
     * @static
     * @param {ItyDDZ_PlayingCards} message tyDDZ_PlayingCards message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    tyDDZ_PlayingCards.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.arrCards != null && message.arrCards.length)
            for (var i = 0; i < message.arrCards.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.arrCards[i]);
        return writer;
    };

    /**
     * Encodes the specified tyDDZ_PlayingCards message, length delimited. Does not implicitly {@link tyDDZ_PlayingCards.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tyDDZ_PlayingCards
     * @static
     * @param {ItyDDZ_PlayingCards} message tyDDZ_PlayingCards message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    tyDDZ_PlayingCards.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a tyDDZ_PlayingCards message from the specified reader or buffer.
     * @function decode
     * @memberof tyDDZ_PlayingCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tyDDZ_PlayingCards} tyDDZ_PlayingCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    tyDDZ_PlayingCards.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tyDDZ_PlayingCards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.arrCards && message.arrCards.length))
                    message.arrCards = [];
                message.arrCards.push(reader.bytes());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a tyDDZ_PlayingCards message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tyDDZ_PlayingCards
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tyDDZ_PlayingCards} tyDDZ_PlayingCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    tyDDZ_PlayingCards.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a tyDDZ_PlayingCards message.
     * @function verify
     * @memberof tyDDZ_PlayingCards
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    tyDDZ_PlayingCards.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.arrCards != null && message.hasOwnProperty("arrCards")) {
            if (!Array.isArray(message.arrCards))
                return "arrCards: array expected";
            for (var i = 0; i < message.arrCards.length; ++i)
                if (!(message.arrCards[i] && typeof message.arrCards[i].length === "number" || $util.isString(message.arrCards[i])))
                    return "arrCards: buffer[] expected";
        }
        return null;
    };

    /**
     * Creates a tyDDZ_PlayingCards message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tyDDZ_PlayingCards
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tyDDZ_PlayingCards} tyDDZ_PlayingCards
     */
    tyDDZ_PlayingCards.fromObject = function fromObject(object) {
        if (object instanceof $root.tyDDZ_PlayingCards)
            return object;
        var message = new $root.tyDDZ_PlayingCards();
        if (object.arrCards) {
            if (!Array.isArray(object.arrCards))
                throw TypeError(".tyDDZ_PlayingCards.arrCards: array expected");
            message.arrCards = [];
            for (var i = 0; i < object.arrCards.length; ++i)
                if (typeof object.arrCards[i] === "string")
                    $util.base64.decode(object.arrCards[i], message.arrCards[i] = $util.newBuffer($util.base64.length(object.arrCards[i])), 0);
                else if (object.arrCards[i].length)
                    message.arrCards[i] = object.arrCards[i];
        }
        return message;
    };

    /**
     * Creates a plain object from a tyDDZ_PlayingCards message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tyDDZ_PlayingCards
     * @static
     * @param {tyDDZ_PlayingCards} message tyDDZ_PlayingCards
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    tyDDZ_PlayingCards.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.arrCards = [];
        if (message.arrCards && message.arrCards.length) {
            object.arrCards = [];
            for (var j = 0; j < message.arrCards.length; ++j)
                object.arrCards[j] = options.bytes === String ? $util.base64.encode(message.arrCards[j], 0, message.arrCards[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.arrCards[j]) : message.arrCards[j];
        }
        return object;
    };

    /**
     * Converts this tyDDZ_PlayingCards to JSON.
     * @function toJSON
     * @memberof tyDDZ_PlayingCards
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    tyDDZ_PlayingCards.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return tyDDZ_PlayingCards;
})();

$root.S2C_DDZ_GameInfo = (function() {

    /**
     * Properties of a S2C_DDZ_GameInfo.
     * @exports IS2C_DDZ_GameInfo
     * @interface IS2C_DDZ_GameInfo
     * @property {number} [nGameState] S2C_DDZ_GameInfo nGameState
     * @property {Array.<boolean>} [arrReadyState] S2C_DDZ_GameInfo arrReadyState
     * @property {ItyDDZ_PlayingCards} [tyReserveCards] S2C_DDZ_GameInfo tyReserveCards
     * @property {number} [nLordPlace] S2C_DDZ_GameInfo nLordPlace
     * @property {number} [nCurPlace] S2C_DDZ_GameInfo nCurPlace
     * @property {Array.<number>} [arrCallScore] S2C_DDZ_GameInfo arrCallScore
     * @property {number} [nScoreRate] S2C_DDZ_GameInfo nScoreRate
     * @property {Array.<ItyDDZ_PlayingCards>} [arrHandCards] S2C_DDZ_GameInfo arrHandCards
     * @property {ItyDDZ_PlayingCards} [tyLastPlayCards] S2C_DDZ_GameInfo tyLastPlayCards
     * @property {number} [nLastPlayPlace] S2C_DDZ_GameInfo nLastPlayPlace
     */

    /**
     * Constructs a new S2C_DDZ_GameInfo.
     * @exports S2C_DDZ_GameInfo
     * @classdesc Represents a S2C_DDZ_GameInfo.
     * @constructor
     * @param {IS2C_DDZ_GameInfo=} [properties] Properties to set
     */
    function S2C_DDZ_GameInfo(properties) {
        this.arrReadyState = [];
        this.arrCallScore = [];
        this.arrHandCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_DDZ_GameInfo nGameState.
     * @member {number}nGameState
     * @memberof S2C_DDZ_GameInfo
     * @instance
     */
    S2C_DDZ_GameInfo.prototype.nGameState = 0;

    /**
     * S2C_DDZ_GameInfo arrReadyState.
     * @member {Array.<boolean>}arrReadyState
     * @memberof S2C_DDZ_GameInfo
     * @instance
     */
    S2C_DDZ_GameInfo.prototype.arrReadyState = $util.emptyArray;

    /**
     * S2C_DDZ_GameInfo tyReserveCards.
     * @member {(ItyDDZ_PlayingCards|null|undefined)}tyReserveCards
     * @memberof S2C_DDZ_GameInfo
     * @instance
     */
    S2C_DDZ_GameInfo.prototype.tyReserveCards = null;

    /**
     * S2C_DDZ_GameInfo nLordPlace.
     * @member {number}nLordPlace
     * @memberof S2C_DDZ_GameInfo
     * @instance
     */
    S2C_DDZ_GameInfo.prototype.nLordPlace = 0;

    /**
     * S2C_DDZ_GameInfo nCurPlace.
     * @member {number}nCurPlace
     * @memberof S2C_DDZ_GameInfo
     * @instance
     */
    S2C_DDZ_GameInfo.prototype.nCurPlace = 0;

    /**
     * S2C_DDZ_GameInfo arrCallScore.
     * @member {Array.<number>}arrCallScore
     * @memberof S2C_DDZ_GameInfo
     * @instance
     */
    S2C_DDZ_GameInfo.prototype.arrCallScore = $util.emptyArray;

    /**
     * S2C_DDZ_GameInfo nScoreRate.
     * @member {number}nScoreRate
     * @memberof S2C_DDZ_GameInfo
     * @instance
     */
    S2C_DDZ_GameInfo.prototype.nScoreRate = 0;

    /**
     * S2C_DDZ_GameInfo arrHandCards.
     * @member {Array.<ItyDDZ_PlayingCards>}arrHandCards
     * @memberof S2C_DDZ_GameInfo
     * @instance
     */
    S2C_DDZ_GameInfo.prototype.arrHandCards = $util.emptyArray;

    /**
     * S2C_DDZ_GameInfo tyLastPlayCards.
     * @member {(ItyDDZ_PlayingCards|null|undefined)}tyLastPlayCards
     * @memberof S2C_DDZ_GameInfo
     * @instance
     */
    S2C_DDZ_GameInfo.prototype.tyLastPlayCards = null;

    /**
     * S2C_DDZ_GameInfo nLastPlayPlace.
     * @member {number}nLastPlayPlace
     * @memberof S2C_DDZ_GameInfo
     * @instance
     */
    S2C_DDZ_GameInfo.prototype.nLastPlayPlace = 0;

    /**
     * Creates a new S2C_DDZ_GameInfo instance using the specified properties.
     * @function create
     * @memberof S2C_DDZ_GameInfo
     * @static
     * @param {IS2C_DDZ_GameInfo=} [properties] Properties to set
     * @returns {S2C_DDZ_GameInfo} S2C_DDZ_GameInfo instance
     */
    S2C_DDZ_GameInfo.create = function create(properties) {
        return new S2C_DDZ_GameInfo(properties);
    };

    /**
     * Encodes the specified S2C_DDZ_GameInfo message. Does not implicitly {@link S2C_DDZ_GameInfo.verify|verify} messages.
     * @function encode
     * @memberof S2C_DDZ_GameInfo
     * @static
     * @param {IS2C_DDZ_GameInfo} message S2C_DDZ_GameInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_DDZ_GameInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.nGameState != null && message.hasOwnProperty("nGameState"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.nGameState);
        if (message.arrReadyState != null && message.arrReadyState.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.arrReadyState.length; ++i)
                writer.bool(message.arrReadyState[i]);
            writer.ldelim();
        }
        if (message.tyReserveCards != null && message.hasOwnProperty("tyReserveCards"))
            $root.tyDDZ_PlayingCards.encode(message.tyReserveCards, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.nLordPlace != null && message.hasOwnProperty("nLordPlace"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.nLordPlace);
        if (message.nCurPlace != null && message.hasOwnProperty("nCurPlace"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.nCurPlace);
        if (message.arrCallScore != null && message.arrCallScore.length) {
            writer.uint32(/* id 6, wireType 2 =*/50).fork();
            for (var i = 0; i < message.arrCallScore.length; ++i)
                writer.uint32(message.arrCallScore[i]);
            writer.ldelim();
        }
        if (message.nScoreRate != null && message.hasOwnProperty("nScoreRate"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.nScoreRate);
        if (message.arrHandCards != null && message.arrHandCards.length)
            for (var i = 0; i < message.arrHandCards.length; ++i)
                $root.tyDDZ_PlayingCards.encode(message.arrHandCards[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.tyLastPlayCards != null && message.hasOwnProperty("tyLastPlayCards"))
            $root.tyDDZ_PlayingCards.encode(message.tyLastPlayCards, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.nLastPlayPlace != null && message.hasOwnProperty("nLastPlayPlace"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.nLastPlayPlace);
        return writer;
    };

    /**
     * Encodes the specified S2C_DDZ_GameInfo message, length delimited. Does not implicitly {@link S2C_DDZ_GameInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_DDZ_GameInfo
     * @static
     * @param {IS2C_DDZ_GameInfo} message S2C_DDZ_GameInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_DDZ_GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_DDZ_GameInfo message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_DDZ_GameInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_DDZ_GameInfo} S2C_DDZ_GameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_DDZ_GameInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_DDZ_GameInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nGameState = reader.uint32();
                break;
            case 2:
                if (!(message.arrReadyState && message.arrReadyState.length))
                    message.arrReadyState = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.arrReadyState.push(reader.bool());
                } else
                    message.arrReadyState.push(reader.bool());
                break;
            case 3:
                message.tyReserveCards = $root.tyDDZ_PlayingCards.decode(reader, reader.uint32());
                break;
            case 4:
                message.nLordPlace = reader.uint32();
                break;
            case 5:
                message.nCurPlace = reader.uint32();
                break;
            case 6:
                if (!(message.arrCallScore && message.arrCallScore.length))
                    message.arrCallScore = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.arrCallScore.push(reader.uint32());
                } else
                    message.arrCallScore.push(reader.uint32());
                break;
            case 7:
                message.nScoreRate = reader.uint32();
                break;
            case 8:
                if (!(message.arrHandCards && message.arrHandCards.length))
                    message.arrHandCards = [];
                message.arrHandCards.push($root.tyDDZ_PlayingCards.decode(reader, reader.uint32()));
                break;
            case 9:
                message.tyLastPlayCards = $root.tyDDZ_PlayingCards.decode(reader, reader.uint32());
                break;
            case 10:
                message.nLastPlayPlace = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_DDZ_GameInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_DDZ_GameInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_DDZ_GameInfo} S2C_DDZ_GameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_DDZ_GameInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_DDZ_GameInfo message.
     * @function verify
     * @memberof S2C_DDZ_GameInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_DDZ_GameInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.nGameState != null && message.hasOwnProperty("nGameState"))
            if (!$util.isInteger(message.nGameState))
                return "nGameState: integer expected";
        if (message.arrReadyState != null && message.hasOwnProperty("arrReadyState")) {
            if (!Array.isArray(message.arrReadyState))
                return "arrReadyState: array expected";
            for (var i = 0; i < message.arrReadyState.length; ++i)
                if (typeof message.arrReadyState[i] !== "boolean")
                    return "arrReadyState: boolean[] expected";
        }
        if (message.tyReserveCards != null && message.hasOwnProperty("tyReserveCards")) {
            var error = $root.tyDDZ_PlayingCards.verify(message.tyReserveCards);
            if (error)
                return "tyReserveCards." + error;
        }
        if (message.nLordPlace != null && message.hasOwnProperty("nLordPlace"))
            if (!$util.isInteger(message.nLordPlace))
                return "nLordPlace: integer expected";
        if (message.nCurPlace != null && message.hasOwnProperty("nCurPlace"))
            if (!$util.isInteger(message.nCurPlace))
                return "nCurPlace: integer expected";
        if (message.arrCallScore != null && message.hasOwnProperty("arrCallScore")) {
            if (!Array.isArray(message.arrCallScore))
                return "arrCallScore: array expected";
            for (var i = 0; i < message.arrCallScore.length; ++i)
                if (!$util.isInteger(message.arrCallScore[i]))
                    return "arrCallScore: integer[] expected";
        }
        if (message.nScoreRate != null && message.hasOwnProperty("nScoreRate"))
            if (!$util.isInteger(message.nScoreRate))
                return "nScoreRate: integer expected";
        if (message.arrHandCards != null && message.hasOwnProperty("arrHandCards")) {
            if (!Array.isArray(message.arrHandCards))
                return "arrHandCards: array expected";
            for (var i = 0; i < message.arrHandCards.length; ++i) {
                error = $root.tyDDZ_PlayingCards.verify(message.arrHandCards[i]);
                if (error)
                    return "arrHandCards." + error;
            }
        }
        if (message.tyLastPlayCards != null && message.hasOwnProperty("tyLastPlayCards")) {
            error = $root.tyDDZ_PlayingCards.verify(message.tyLastPlayCards);
            if (error)
                return "tyLastPlayCards." + error;
        }
        if (message.nLastPlayPlace != null && message.hasOwnProperty("nLastPlayPlace"))
            if (!$util.isInteger(message.nLastPlayPlace))
                return "nLastPlayPlace: integer expected";
        return null;
    };

    /**
     * Creates a S2C_DDZ_GameInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_DDZ_GameInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_DDZ_GameInfo} S2C_DDZ_GameInfo
     */
    S2C_DDZ_GameInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_DDZ_GameInfo)
            return object;
        var message = new $root.S2C_DDZ_GameInfo();
        if (object.nGameState != null)
            message.nGameState = object.nGameState >>> 0;
        if (object.arrReadyState) {
            if (!Array.isArray(object.arrReadyState))
                throw TypeError(".S2C_DDZ_GameInfo.arrReadyState: array expected");
            message.arrReadyState = [];
            for (var i = 0; i < object.arrReadyState.length; ++i)
                message.arrReadyState[i] = Boolean(object.arrReadyState[i]);
        }
        if (object.tyReserveCards != null) {
            if (typeof object.tyReserveCards !== "object")
                throw TypeError(".S2C_DDZ_GameInfo.tyReserveCards: object expected");
            message.tyReserveCards = $root.tyDDZ_PlayingCards.fromObject(object.tyReserveCards);
        }
        if (object.nLordPlace != null)
            message.nLordPlace = object.nLordPlace >>> 0;
        if (object.nCurPlace != null)
            message.nCurPlace = object.nCurPlace >>> 0;
        if (object.arrCallScore) {
            if (!Array.isArray(object.arrCallScore))
                throw TypeError(".S2C_DDZ_GameInfo.arrCallScore: array expected");
            message.arrCallScore = [];
            for (var i = 0; i < object.arrCallScore.length; ++i)
                message.arrCallScore[i] = object.arrCallScore[i] >>> 0;
        }
        if (object.nScoreRate != null)
            message.nScoreRate = object.nScoreRate >>> 0;
        if (object.arrHandCards) {
            if (!Array.isArray(object.arrHandCards))
                throw TypeError(".S2C_DDZ_GameInfo.arrHandCards: array expected");
            message.arrHandCards = [];
            for (var i = 0; i < object.arrHandCards.length; ++i) {
                if (typeof object.arrHandCards[i] !== "object")
                    throw TypeError(".S2C_DDZ_GameInfo.arrHandCards: object expected");
                message.arrHandCards[i] = $root.tyDDZ_PlayingCards.fromObject(object.arrHandCards[i]);
            }
        }
        if (object.tyLastPlayCards != null) {
            if (typeof object.tyLastPlayCards !== "object")
                throw TypeError(".S2C_DDZ_GameInfo.tyLastPlayCards: object expected");
            message.tyLastPlayCards = $root.tyDDZ_PlayingCards.fromObject(object.tyLastPlayCards);
        }
        if (object.nLastPlayPlace != null)
            message.nLastPlayPlace = object.nLastPlayPlace >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a S2C_DDZ_GameInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_DDZ_GameInfo
     * @static
     * @param {S2C_DDZ_GameInfo} message S2C_DDZ_GameInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_DDZ_GameInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.arrReadyState = [];
            object.arrCallScore = [];
            object.arrHandCards = [];
        }
        if (options.defaults) {
            object.nGameState = 0;
            object.tyReserveCards = null;
            object.nLordPlace = 0;
            object.nCurPlace = 0;
            object.nScoreRate = 0;
            object.tyLastPlayCards = null;
            object.nLastPlayPlace = 0;
        }
        if (message.nGameState != null && message.hasOwnProperty("nGameState"))
            object.nGameState = message.nGameState;
        if (message.arrReadyState && message.arrReadyState.length) {
            object.arrReadyState = [];
            for (var j = 0; j < message.arrReadyState.length; ++j)
                object.arrReadyState[j] = message.arrReadyState[j];
        }
        if (message.tyReserveCards != null && message.hasOwnProperty("tyReserveCards"))
            object.tyReserveCards = $root.tyDDZ_PlayingCards.toObject(message.tyReserveCards, options);
        if (message.nLordPlace != null && message.hasOwnProperty("nLordPlace"))
            object.nLordPlace = message.nLordPlace;
        if (message.nCurPlace != null && message.hasOwnProperty("nCurPlace"))
            object.nCurPlace = message.nCurPlace;
        if (message.arrCallScore && message.arrCallScore.length) {
            object.arrCallScore = [];
            for (var j = 0; j < message.arrCallScore.length; ++j)
                object.arrCallScore[j] = message.arrCallScore[j];
        }
        if (message.nScoreRate != null && message.hasOwnProperty("nScoreRate"))
            object.nScoreRate = message.nScoreRate;
        if (message.arrHandCards && message.arrHandCards.length) {
            object.arrHandCards = [];
            for (var j = 0; j < message.arrHandCards.length; ++j)
                object.arrHandCards[j] = $root.tyDDZ_PlayingCards.toObject(message.arrHandCards[j], options);
        }
        if (message.tyLastPlayCards != null && message.hasOwnProperty("tyLastPlayCards"))
            object.tyLastPlayCards = $root.tyDDZ_PlayingCards.toObject(message.tyLastPlayCards, options);
        if (message.nLastPlayPlace != null && message.hasOwnProperty("nLastPlayPlace"))
            object.nLastPlayPlace = message.nLastPlayPlace;
        return object;
    };

    /**
     * Converts this S2C_DDZ_GameInfo to JSON.
     * @function toJSON
     * @memberof S2C_DDZ_GameInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_DDZ_GameInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_DDZ_GameInfo;
})();

$root.S2C_DDZ_GameStart = (function() {

    /**
     * Properties of a S2C_DDZ_GameStart.
     * @exports IS2C_DDZ_GameStart
     * @interface IS2C_DDZ_GameStart
     * @property {Array.<ItyDDZ_PlayingCards>} [arrHandCards] S2C_DDZ_GameStart arrHandCards
     */

    /**
     * Constructs a new S2C_DDZ_GameStart.
     * @exports S2C_DDZ_GameStart
     * @classdesc Represents a S2C_DDZ_GameStart.
     * @constructor
     * @param {IS2C_DDZ_GameStart=} [properties] Properties to set
     */
    function S2C_DDZ_GameStart(properties) {
        this.arrHandCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_DDZ_GameStart arrHandCards.
     * @member {Array.<ItyDDZ_PlayingCards>}arrHandCards
     * @memberof S2C_DDZ_GameStart
     * @instance
     */
    S2C_DDZ_GameStart.prototype.arrHandCards = $util.emptyArray;

    /**
     * Creates a new S2C_DDZ_GameStart instance using the specified properties.
     * @function create
     * @memberof S2C_DDZ_GameStart
     * @static
     * @param {IS2C_DDZ_GameStart=} [properties] Properties to set
     * @returns {S2C_DDZ_GameStart} S2C_DDZ_GameStart instance
     */
    S2C_DDZ_GameStart.create = function create(properties) {
        return new S2C_DDZ_GameStart(properties);
    };

    /**
     * Encodes the specified S2C_DDZ_GameStart message. Does not implicitly {@link S2C_DDZ_GameStart.verify|verify} messages.
     * @function encode
     * @memberof S2C_DDZ_GameStart
     * @static
     * @param {IS2C_DDZ_GameStart} message S2C_DDZ_GameStart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_DDZ_GameStart.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.arrHandCards != null && message.arrHandCards.length)
            for (var i = 0; i < message.arrHandCards.length; ++i)
                $root.tyDDZ_PlayingCards.encode(message.arrHandCards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2C_DDZ_GameStart message, length delimited. Does not implicitly {@link S2C_DDZ_GameStart.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_DDZ_GameStart
     * @static
     * @param {IS2C_DDZ_GameStart} message S2C_DDZ_GameStart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_DDZ_GameStart.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_DDZ_GameStart message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_DDZ_GameStart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_DDZ_GameStart} S2C_DDZ_GameStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_DDZ_GameStart.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_DDZ_GameStart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.arrHandCards && message.arrHandCards.length))
                    message.arrHandCards = [];
                message.arrHandCards.push($root.tyDDZ_PlayingCards.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_DDZ_GameStart message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_DDZ_GameStart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_DDZ_GameStart} S2C_DDZ_GameStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_DDZ_GameStart.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_DDZ_GameStart message.
     * @function verify
     * @memberof S2C_DDZ_GameStart
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_DDZ_GameStart.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.arrHandCards != null && message.hasOwnProperty("arrHandCards")) {
            if (!Array.isArray(message.arrHandCards))
                return "arrHandCards: array expected";
            for (var i = 0; i < message.arrHandCards.length; ++i) {
                var error = $root.tyDDZ_PlayingCards.verify(message.arrHandCards[i]);
                if (error)
                    return "arrHandCards." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2C_DDZ_GameStart message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_DDZ_GameStart
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_DDZ_GameStart} S2C_DDZ_GameStart
     */
    S2C_DDZ_GameStart.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_DDZ_GameStart)
            return object;
        var message = new $root.S2C_DDZ_GameStart();
        if (object.arrHandCards) {
            if (!Array.isArray(object.arrHandCards))
                throw TypeError(".S2C_DDZ_GameStart.arrHandCards: array expected");
            message.arrHandCards = [];
            for (var i = 0; i < object.arrHandCards.length; ++i) {
                if (typeof object.arrHandCards[i] !== "object")
                    throw TypeError(".S2C_DDZ_GameStart.arrHandCards: object expected");
                message.arrHandCards[i] = $root.tyDDZ_PlayingCards.fromObject(object.arrHandCards[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C_DDZ_GameStart message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_DDZ_GameStart
     * @static
     * @param {S2C_DDZ_GameStart} message S2C_DDZ_GameStart
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_DDZ_GameStart.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.arrHandCards = [];
        if (message.arrHandCards && message.arrHandCards.length) {
            object.arrHandCards = [];
            for (var j = 0; j < message.arrHandCards.length; ++j)
                object.arrHandCards[j] = $root.tyDDZ_PlayingCards.toObject(message.arrHandCards[j], options);
        }
        return object;
    };

    /**
     * Converts this S2C_DDZ_GameStart to JSON.
     * @function toJSON
     * @memberof S2C_DDZ_GameStart
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_DDZ_GameStart.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_DDZ_GameStart;
})();

$root.S2C_DDZ_GameEnd = (function() {

    /**
     * Properties of a S2C_DDZ_GameEnd.
     * @exports IS2C_DDZ_GameEnd
     * @interface IS2C_DDZ_GameEnd
     */

    /**
     * Constructs a new S2C_DDZ_GameEnd.
     * @exports S2C_DDZ_GameEnd
     * @classdesc Represents a S2C_DDZ_GameEnd.
     * @constructor
     * @param {IS2C_DDZ_GameEnd=} [properties] Properties to set
     */
    function S2C_DDZ_GameEnd(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new S2C_DDZ_GameEnd instance using the specified properties.
     * @function create
     * @memberof S2C_DDZ_GameEnd
     * @static
     * @param {IS2C_DDZ_GameEnd=} [properties] Properties to set
     * @returns {S2C_DDZ_GameEnd} S2C_DDZ_GameEnd instance
     */
    S2C_DDZ_GameEnd.create = function create(properties) {
        return new S2C_DDZ_GameEnd(properties);
    };

    /**
     * Encodes the specified S2C_DDZ_GameEnd message. Does not implicitly {@link S2C_DDZ_GameEnd.verify|verify} messages.
     * @function encode
     * @memberof S2C_DDZ_GameEnd
     * @static
     * @param {IS2C_DDZ_GameEnd} message S2C_DDZ_GameEnd message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_DDZ_GameEnd.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified S2C_DDZ_GameEnd message, length delimited. Does not implicitly {@link S2C_DDZ_GameEnd.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_DDZ_GameEnd
     * @static
     * @param {IS2C_DDZ_GameEnd} message S2C_DDZ_GameEnd message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_DDZ_GameEnd.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_DDZ_GameEnd message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_DDZ_GameEnd
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_DDZ_GameEnd} S2C_DDZ_GameEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_DDZ_GameEnd.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_DDZ_GameEnd();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_DDZ_GameEnd message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_DDZ_GameEnd
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_DDZ_GameEnd} S2C_DDZ_GameEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_DDZ_GameEnd.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_DDZ_GameEnd message.
     * @function verify
     * @memberof S2C_DDZ_GameEnd
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_DDZ_GameEnd.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a S2C_DDZ_GameEnd message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_DDZ_GameEnd
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_DDZ_GameEnd} S2C_DDZ_GameEnd
     */
    S2C_DDZ_GameEnd.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_DDZ_GameEnd)
            return object;
        return new $root.S2C_DDZ_GameEnd();
    };

    /**
     * Creates a plain object from a S2C_DDZ_GameEnd message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_DDZ_GameEnd
     * @static
     * @param {S2C_DDZ_GameEnd} message S2C_DDZ_GameEnd
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_DDZ_GameEnd.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this S2C_DDZ_GameEnd to JSON.
     * @function toJSON
     * @memberof S2C_DDZ_GameEnd
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_DDZ_GameEnd.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_DDZ_GameEnd;
})();

/**
 * enumMessageType enum.
 * @exports enumMessageType
 * @enum {string}
 * @property {number} UnknownID=0 UnknownID value
 * @property {number} HeartID=1 HeartID value
 * @property {number} C2S_HostRequestID=2 C2S_HostRequestID value
 * @property {number} S2C_UpdateRespondID=3 S2C_UpdateRespondID value
 * @property {number} S2C_HostSuccID=4 S2C_HostSuccID value
 * @property {number} S2C_HostFailedID=5 S2C_HostFailedID value
 * @property {number} C2S_LoginID=6 C2S_LoginID value
 * @property {number} S2C_LoginSuccID=7 S2C_LoginSuccID value
 * @property {number} S2C_LoginFailedID=8 S2C_LoginFailedID value
 * @property {number} C2S_RegistID=9 C2S_RegistID value
 * @property {number} S2C_RegistSuccID=10 S2C_RegistSuccID value
 * @property {number} S2C_RegistFailedID=11 S2C_RegistFailedID value
 * @property {number} C2S_BindUserID=12 C2S_BindUserID value
 * @property {number} S2C_BindUserSuccID=13 S2C_BindUserSuccID value
 * @property {number} S2C_BindUserFailedID=14 S2C_BindUserFailedID value
 * @property {number} C2S_GameTypeListID=15 C2S_GameTypeListID value
 * @property {number} S2C_GameTypeListRespondID=16 S2C_GameTypeListRespondID value
 * @property {number} C2S_GameRoomListID=17 C2S_GameRoomListID value
 * @property {number} S2C_GameRoomListRespondID=18 S2C_GameRoomListRespondID value
 * @property {number} S2C_RollMessageID=19 S2C_RollMessageID value
 * @property {number} MAX_LobbyMsgID=9999 MAX_LobbyMsgID value
 * @property {number} GameServerMsgID=10000 GameServerMsgID value
 * @property {number} C2S_EnterRoomID=10001 C2S_EnterRoomID value
 * @property {number} S2C_EnterRoomSuccID=10002 S2C_EnterRoomSuccID value
 * @property {number} S2C_EnterRoomFailedID=10003 S2C_EnterRoomFailedID value
 * @property {number} C2S_ExitRoomID=10004 C2S_ExitRoomID value
 * @property {number} S2C_ExitRoomSuccID=10005 S2C_ExitRoomSuccID value
 * @property {number} C2S_EnterDeskID=10006 C2S_EnterDeskID value
 * @property {number} S2C_EnterDeskSuccID=10007 S2C_EnterDeskSuccID value
 * @property {number} S2C_EnterDeskFailedID=10008 S2C_EnterDeskFailedID value
 * @property {number} C2S_ExitDeskID=10009 C2S_ExitDeskID value
 * @property {number} S2C_ExitDeskSuccID=10010 S2C_ExitDeskSuccID value
 * @property {number} S2C_ExitDeskFailedID=10011 S2C_ExitDeskFailedID value
 * @property {number} S2C_UserGameInfoID=10012 S2C_UserGameInfoID value
 * @property {number} GameDDZMsgID=11000 GameDDZMsgID value
 * @property {number} GameBJLMsgID=12000 GameBJLMsgID value
 * @property {number} GameZJHMsgID=13000 GameZJHMsgID value
 * @property {number} GameLHPMsgID=14000 GameLHPMsgID value
 * @property {number} GameBBNNMsgID=15000 GameBBNNMsgID value
 * @property {number} GameSRNNMsgID=16000 GameSRNNMsgID value
 * @property {number} GameLKPYMsgID=17000 GameLKPYMsgID value
 * @property {number} GameDZPKMsgID=18000 GameDZPKMsgID value
 */
$root.enumMessageType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UnknownID"] = 0;
    values[valuesById[1] = "HeartID"] = 1;
    values[valuesById[2] = "C2S_HostRequestID"] = 2;
    values[valuesById[3] = "S2C_UpdateRespondID"] = 3;
    values[valuesById[4] = "S2C_HostSuccID"] = 4;
    values[valuesById[5] = "S2C_HostFailedID"] = 5;
    values[valuesById[6] = "C2S_LoginID"] = 6;
    values[valuesById[7] = "S2C_LoginSuccID"] = 7;
    values[valuesById[8] = "S2C_LoginFailedID"] = 8;
    values[valuesById[9] = "C2S_RegistID"] = 9;
    values[valuesById[10] = "S2C_RegistSuccID"] = 10;
    values[valuesById[11] = "S2C_RegistFailedID"] = 11;
    values[valuesById[12] = "C2S_BindUserID"] = 12;
    values[valuesById[13] = "S2C_BindUserSuccID"] = 13;
    values[valuesById[14] = "S2C_BindUserFailedID"] = 14;
    values[valuesById[15] = "C2S_GameTypeListID"] = 15;
    values[valuesById[16] = "S2C_GameTypeListRespondID"] = 16;
    values[valuesById[17] = "C2S_GameRoomListID"] = 17;
    values[valuesById[18] = "S2C_GameRoomListRespondID"] = 18;
    values[valuesById[19] = "S2C_RollMessageID"] = 19;
    values[valuesById[9999] = "MAX_LobbyMsgID"] = 9999;
    values[valuesById[10000] = "GameServerMsgID"] = 10000;
    values[valuesById[10001] = "C2S_EnterRoomID"] = 10001;
    values[valuesById[10002] = "S2C_EnterRoomSuccID"] = 10002;
    values[valuesById[10003] = "S2C_EnterRoomFailedID"] = 10003;
    values[valuesById[10004] = "C2S_ExitRoomID"] = 10004;
    values[valuesById[10005] = "S2C_ExitRoomSuccID"] = 10005;
    values[valuesById[10006] = "C2S_EnterDeskID"] = 10006;
    values[valuesById[10007] = "S2C_EnterDeskSuccID"] = 10007;
    values[valuesById[10008] = "S2C_EnterDeskFailedID"] = 10008;
    values[valuesById[10009] = "C2S_ExitDeskID"] = 10009;
    values[valuesById[10010] = "S2C_ExitDeskSuccID"] = 10010;
    values[valuesById[10011] = "S2C_ExitDeskFailedID"] = 10011;
    values[valuesById[10012] = "S2C_UserGameInfoID"] = 10012;
    values[valuesById[11000] = "GameDDZMsgID"] = 11000;
    values[valuesById[12000] = "GameBJLMsgID"] = 12000;
    values[valuesById[13000] = "GameZJHMsgID"] = 13000;
    values[valuesById[14000] = "GameLHPMsgID"] = 14000;
    values[valuesById[15000] = "GameBBNNMsgID"] = 15000;
    values[valuesById[16000] = "GameSRNNMsgID"] = 16000;
    values[valuesById[17000] = "GameLKPYMsgID"] = 17000;
    values[valuesById[18000] = "GameDZPKMsgID"] = 18000;
    return values;
})();

/**
 * enumErrorCode enum.
 * @exports enumErrorCode
 * @enum {string}
 * @property {number} OK=0 OK value
 * @property {number} ErrorCode_Reserved=1 ErrorCode_Reserved value
 * @property {number} ErrorCode_GMKicked=2 ErrorCode_GMKicked value
 * @property {number} ErrorCode_AccountError=3 ErrorCode_AccountError value
 * @property {number} ErrorCode_PasswordError=4 ErrorCode_PasswordError value
 * @property {number} ErrorCode_LoginFailed_AccountBan=5 ErrorCode_LoginFailed_AccountBan value
 * @property {number} ErrorCode_LoginFailed_AcPasswordError=6 ErrorCode_LoginFailed_AcPasswordError value
 * @property {number} ErrorCode_RegistFailed_UserExists=7 ErrorCode_RegistFailed_UserExists value
 * @property {number} ErrorCode_EnterRoomFailed_OtherRoom=8 ErrorCode_EnterRoomFailed_OtherRoom value
 * @property {number} ErrorCode_NotEnoughMoney=9 ErrorCode_NotEnoughMoney value
 * @property {number} ErrorCode_MAXMoney=10 ErrorCode_MAXMoney value
 * @property {number} ErrorCode_EnterRoomFailed_LogonOuted=11 ErrorCode_EnterRoomFailed_LogonOuted value
 * @property {number} ErrorCode_EnterDeskFailed_FULL=12 ErrorCode_EnterDeskFailed_FULL value
 * @property {number} ErrorCode_EnterDeskFailed_PasswordError=13 ErrorCode_EnterDeskFailed_PasswordError value
 * @property {number} ErrorCode_ExitDeskFailed_Playing=14 ErrorCode_ExitDeskFailed_Playing value
 */
$root.enumErrorCode = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "OK"] = 0;
    values[valuesById[1] = "ErrorCode_Reserved"] = 1;
    values[valuesById[2] = "ErrorCode_GMKicked"] = 2;
    values[valuesById[3] = "ErrorCode_AccountError"] = 3;
    values[valuesById[4] = "ErrorCode_PasswordError"] = 4;
    values[valuesById[5] = "ErrorCode_LoginFailed_AccountBan"] = 5;
    values[valuesById[6] = "ErrorCode_LoginFailed_AcPasswordError"] = 6;
    values[valuesById[7] = "ErrorCode_RegistFailed_UserExists"] = 7;
    values[valuesById[8] = "ErrorCode_EnterRoomFailed_OtherRoom"] = 8;
    values[valuesById[9] = "ErrorCode_NotEnoughMoney"] = 9;
    values[valuesById[10] = "ErrorCode_MAXMoney"] = 10;
    values[valuesById[11] = "ErrorCode_EnterRoomFailed_LogonOuted"] = 11;
    values[valuesById[12] = "ErrorCode_EnterDeskFailed_FULL"] = 12;
    values[valuesById[13] = "ErrorCode_EnterDeskFailed_PasswordError"] = 13;
    values[valuesById[14] = "ErrorCode_ExitDeskFailed_Playing"] = 14;
    return values;
})();

/**
 * enumGameState enum.
 * @exports enumGameState
 * @enum {string}
 * @property {number} GameState_Lobby=0 GameState_Lobby value
 * @property {number} GameState_Room=1 GameState_Room value
 * @property {number} GameState_Desk=2 GameState_Desk value
 * @property {number} GameState_Ready=3 GameState_Ready value
 * @property {number} GameState_Playing=4 GameState_Playing value
 * @property {number} GameState_Look=5 GameState_Look value
 * @property {number} GameState_Robot=6 GameState_Robot value
 * @property {number} GameState_Custom=10 GameState_Custom value
 */
$root.enumGameState = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GameState_Lobby"] = 0;
    values[valuesById[1] = "GameState_Room"] = 1;
    values[valuesById[2] = "GameState_Desk"] = 2;
    values[valuesById[3] = "GameState_Ready"] = 3;
    values[valuesById[4] = "GameState_Playing"] = 4;
    values[valuesById[5] = "GameState_Look"] = 5;
    values[valuesById[6] = "GameState_Robot"] = 6;
    values[valuesById[10] = "GameState_Custom"] = 10;
    return values;
})();

$root.tyErrorInfo = (function() {

    /**
     * Properties of a tyErrorInfo.
     * @exports ItyErrorInfo
     * @interface ItyErrorInfo
     * @property {number} [nErrorCode] tyErrorInfo nErrorCode
     * @property {string} [szErrorInfo] tyErrorInfo szErrorInfo
     */

    /**
     * Constructs a new tyErrorInfo.
     * @exports tyErrorInfo
     * @classdesc Represents a tyErrorInfo.
     * @constructor
     * @param {ItyErrorInfo=} [properties] Properties to set
     */
    function tyErrorInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * tyErrorInfo nErrorCode.
     * @member {number}nErrorCode
     * @memberof tyErrorInfo
     * @instance
     */
    tyErrorInfo.prototype.nErrorCode = 0;

    /**
     * tyErrorInfo szErrorInfo.
     * @member {string}szErrorInfo
     * @memberof tyErrorInfo
     * @instance
     */
    tyErrorInfo.prototype.szErrorInfo = "";

    /**
     * Creates a new tyErrorInfo instance using the specified properties.
     * @function create
     * @memberof tyErrorInfo
     * @static
     * @param {ItyErrorInfo=} [properties] Properties to set
     * @returns {tyErrorInfo} tyErrorInfo instance
     */
    tyErrorInfo.create = function create(properties) {
        return new tyErrorInfo(properties);
    };

    /**
     * Encodes the specified tyErrorInfo message. Does not implicitly {@link tyErrorInfo.verify|verify} messages.
     * @function encode
     * @memberof tyErrorInfo
     * @static
     * @param {ItyErrorInfo} message tyErrorInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    tyErrorInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.nErrorCode != null && message.hasOwnProperty("nErrorCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.nErrorCode);
        if (message.szErrorInfo != null && message.hasOwnProperty("szErrorInfo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.szErrorInfo);
        return writer;
    };

    /**
     * Encodes the specified tyErrorInfo message, length delimited. Does not implicitly {@link tyErrorInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tyErrorInfo
     * @static
     * @param {ItyErrorInfo} message tyErrorInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    tyErrorInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a tyErrorInfo message from the specified reader or buffer.
     * @function decode
     * @memberof tyErrorInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tyErrorInfo} tyErrorInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    tyErrorInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tyErrorInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nErrorCode = reader.uint32();
                break;
            case 2:
                message.szErrorInfo = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a tyErrorInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tyErrorInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tyErrorInfo} tyErrorInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    tyErrorInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a tyErrorInfo message.
     * @function verify
     * @memberof tyErrorInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    tyErrorInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.nErrorCode != null && message.hasOwnProperty("nErrorCode"))
            if (!$util.isInteger(message.nErrorCode))
                return "nErrorCode: integer expected";
        if (message.szErrorInfo != null && message.hasOwnProperty("szErrorInfo"))
            if (!$util.isString(message.szErrorInfo))
                return "szErrorInfo: string expected";
        return null;
    };

    /**
     * Creates a tyErrorInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tyErrorInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tyErrorInfo} tyErrorInfo
     */
    tyErrorInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.tyErrorInfo)
            return object;
        var message = new $root.tyErrorInfo();
        if (object.nErrorCode != null)
            message.nErrorCode = object.nErrorCode >>> 0;
        if (object.szErrorInfo != null)
            message.szErrorInfo = String(object.szErrorInfo);
        return message;
    };

    /**
     * Creates a plain object from a tyErrorInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tyErrorInfo
     * @static
     * @param {tyErrorInfo} message tyErrorInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    tyErrorInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nErrorCode = 0;
            object.szErrorInfo = "";
        }
        if (message.nErrorCode != null && message.hasOwnProperty("nErrorCode"))
            object.nErrorCode = message.nErrorCode;
        if (message.szErrorInfo != null && message.hasOwnProperty("szErrorInfo"))
            object.szErrorInfo = message.szErrorInfo;
        return object;
    };

    /**
     * Converts this tyErrorInfo to JSON.
     * @function toJSON
     * @memberof tyErrorInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    tyErrorInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return tyErrorInfo;
})();

$root.Heart = (function() {

    /**
     * Properties of a Heart.
     * @exports IHeart
     * @interface IHeart
     */

    /**
     * Constructs a new Heart.
     * @exports Heart
     * @classdesc Represents a Heart.
     * @constructor
     * @param {IHeart=} [properties] Properties to set
     */
    function Heart(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Heart instance using the specified properties.
     * @function create
     * @memberof Heart
     * @static
     * @param {IHeart=} [properties] Properties to set
     * @returns {Heart} Heart instance
     */
    Heart.create = function create(properties) {
        return new Heart(properties);
    };

    /**
     * Encodes the specified Heart message. Does not implicitly {@link Heart.verify|verify} messages.
     * @function encode
     * @memberof Heart
     * @static
     * @param {IHeart} message Heart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Heart.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Heart message, length delimited. Does not implicitly {@link Heart.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Heart
     * @static
     * @param {IHeart} message Heart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Heart.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Heart message from the specified reader or buffer.
     * @function decode
     * @memberof Heart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Heart} Heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Heart.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Heart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Heart message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Heart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Heart} Heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Heart.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Heart message.
     * @function verify
     * @memberof Heart
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Heart.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Heart message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Heart
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Heart} Heart
     */
    Heart.fromObject = function fromObject(object) {
        if (object instanceof $root.Heart)
            return object;
        return new $root.Heart();
    };

    /**
     * Creates a plain object from a Heart message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Heart
     * @static
     * @param {Heart} message Heart
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Heart.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Heart to JSON.
     * @function toJSON
     * @memberof Heart
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Heart.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Heart;
})();

$root.C2S_HostRequest = (function() {

    /**
     * Properties of a C2S_HostRequest.
     * @exports IC2S_HostRequest
     * @interface IC2S_HostRequest
     * @property {number} [nClientVersion] C2S_HostRequest nClientVersion
     * @property {number} [nDevice] C2S_HostRequest nDevice
     * @property {string} [szPackId] C2S_HostRequest szPackId
     * @property {string} [szUserName] C2S_HostRequest szUserName
     */

    /**
     * Constructs a new C2S_HostRequest.
     * @exports C2S_HostRequest
     * @classdesc Represents a C2S_HostRequest.
     * @constructor
     * @param {IC2S_HostRequest=} [properties] Properties to set
     */
    function C2S_HostRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2S_HostRequest nClientVersion.
     * @member {number}nClientVersion
     * @memberof C2S_HostRequest
     * @instance
     */
    C2S_HostRequest.prototype.nClientVersion = 0;

    /**
     * C2S_HostRequest nDevice.
     * @member {number}nDevice
     * @memberof C2S_HostRequest
     * @instance
     */
    C2S_HostRequest.prototype.nDevice = 0;

    /**
     * C2S_HostRequest szPackId.
     * @member {string}szPackId
     * @memberof C2S_HostRequest
     * @instance
     */
    C2S_HostRequest.prototype.szPackId = "";

    /**
     * C2S_HostRequest szUserName.
     * @member {string}szUserName
     * @memberof C2S_HostRequest
     * @instance
     */
    C2S_HostRequest.prototype.szUserName = "";

    /**
     * Creates a new C2S_HostRequest instance using the specified properties.
     * @function create
     * @memberof C2S_HostRequest
     * @static
     * @param {IC2S_HostRequest=} [properties] Properties to set
     * @returns {C2S_HostRequest} C2S_HostRequest instance
     */
    C2S_HostRequest.create = function create(properties) {
        return new C2S_HostRequest(properties);
    };

    /**
     * Encodes the specified C2S_HostRequest message. Does not implicitly {@link C2S_HostRequest.verify|verify} messages.
     * @function encode
     * @memberof C2S_HostRequest
     * @static
     * @param {IC2S_HostRequest} message C2S_HostRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_HostRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.nClientVersion != null && message.hasOwnProperty("nClientVersion"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.nClientVersion);
        if (message.nDevice != null && message.hasOwnProperty("nDevice"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.nDevice);
        if (message.szPackId != null && message.hasOwnProperty("szPackId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.szPackId);
        if (message.szUserName != null && message.hasOwnProperty("szUserName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.szUserName);
        return writer;
    };

    /**
     * Encodes the specified C2S_HostRequest message, length delimited. Does not implicitly {@link C2S_HostRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2S_HostRequest
     * @static
     * @param {IC2S_HostRequest} message C2S_HostRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_HostRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2S_HostRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2S_HostRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2S_HostRequest} C2S_HostRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_HostRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S_HostRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nClientVersion = reader.uint32();
                break;
            case 2:
                message.nDevice = reader.uint32();
                break;
            case 3:
                message.szPackId = reader.string();
                break;
            case 4:
                message.szUserName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2S_HostRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2S_HostRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2S_HostRequest} C2S_HostRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_HostRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2S_HostRequest message.
     * @function verify
     * @memberof C2S_HostRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2S_HostRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.nClientVersion != null && message.hasOwnProperty("nClientVersion"))
            if (!$util.isInteger(message.nClientVersion))
                return "nClientVersion: integer expected";
        if (message.nDevice != null && message.hasOwnProperty("nDevice"))
            if (!$util.isInteger(message.nDevice))
                return "nDevice: integer expected";
        if (message.szPackId != null && message.hasOwnProperty("szPackId"))
            if (!$util.isString(message.szPackId))
                return "szPackId: string expected";
        if (message.szUserName != null && message.hasOwnProperty("szUserName"))
            if (!$util.isString(message.szUserName))
                return "szUserName: string expected";
        return null;
    };

    /**
     * Creates a C2S_HostRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2S_HostRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2S_HostRequest} C2S_HostRequest
     */
    C2S_HostRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2S_HostRequest)
            return object;
        var message = new $root.C2S_HostRequest();
        if (object.nClientVersion != null)
            message.nClientVersion = object.nClientVersion >>> 0;
        if (object.nDevice != null)
            message.nDevice = object.nDevice >>> 0;
        if (object.szPackId != null)
            message.szPackId = String(object.szPackId);
        if (object.szUserName != null)
            message.szUserName = String(object.szUserName);
        return message;
    };

    /**
     * Creates a plain object from a C2S_HostRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2S_HostRequest
     * @static
     * @param {C2S_HostRequest} message C2S_HostRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2S_HostRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nClientVersion = 0;
            object.nDevice = 0;
            object.szPackId = "";
            object.szUserName = "";
        }
        if (message.nClientVersion != null && message.hasOwnProperty("nClientVersion"))
            object.nClientVersion = message.nClientVersion;
        if (message.nDevice != null && message.hasOwnProperty("nDevice"))
            object.nDevice = message.nDevice;
        if (message.szPackId != null && message.hasOwnProperty("szPackId"))
            object.szPackId = message.szPackId;
        if (message.szUserName != null && message.hasOwnProperty("szUserName"))
            object.szUserName = message.szUserName;
        return object;
    };

    /**
     * Converts this C2S_HostRequest to JSON.
     * @function toJSON
     * @memberof C2S_HostRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2S_HostRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2S_HostRequest;
})();

$root.S2C_UpdateRespond = (function() {

    /**
     * Properties of a S2C_UpdateRespond.
     * @exports IS2C_UpdateRespond
     * @interface IS2C_UpdateRespond
     * @property {number} [nNewVersion] S2C_UpdateRespond nNewVersion
     * @property {string} [szNewVersionDesc] S2C_UpdateRespond szNewVersionDesc
     * @property {string} [szNewVersionAddr] S2C_UpdateRespond szNewVersionAddr
     */

    /**
     * Constructs a new S2C_UpdateRespond.
     * @exports S2C_UpdateRespond
     * @classdesc Represents a S2C_UpdateRespond.
     * @constructor
     * @param {IS2C_UpdateRespond=} [properties] Properties to set
     */
    function S2C_UpdateRespond(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_UpdateRespond nNewVersion.
     * @member {number}nNewVersion
     * @memberof S2C_UpdateRespond
     * @instance
     */
    S2C_UpdateRespond.prototype.nNewVersion = 0;

    /**
     * S2C_UpdateRespond szNewVersionDesc.
     * @member {string}szNewVersionDesc
     * @memberof S2C_UpdateRespond
     * @instance
     */
    S2C_UpdateRespond.prototype.szNewVersionDesc = "";

    /**
     * S2C_UpdateRespond szNewVersionAddr.
     * @member {string}szNewVersionAddr
     * @memberof S2C_UpdateRespond
     * @instance
     */
    S2C_UpdateRespond.prototype.szNewVersionAddr = "";

    /**
     * Creates a new S2C_UpdateRespond instance using the specified properties.
     * @function create
     * @memberof S2C_UpdateRespond
     * @static
     * @param {IS2C_UpdateRespond=} [properties] Properties to set
     * @returns {S2C_UpdateRespond} S2C_UpdateRespond instance
     */
    S2C_UpdateRespond.create = function create(properties) {
        return new S2C_UpdateRespond(properties);
    };

    /**
     * Encodes the specified S2C_UpdateRespond message. Does not implicitly {@link S2C_UpdateRespond.verify|verify} messages.
     * @function encode
     * @memberof S2C_UpdateRespond
     * @static
     * @param {IS2C_UpdateRespond} message S2C_UpdateRespond message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_UpdateRespond.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.nNewVersion != null && message.hasOwnProperty("nNewVersion"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.nNewVersion);
        if (message.szNewVersionDesc != null && message.hasOwnProperty("szNewVersionDesc"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.szNewVersionDesc);
        if (message.szNewVersionAddr != null && message.hasOwnProperty("szNewVersionAddr"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.szNewVersionAddr);
        return writer;
    };

    /**
     * Encodes the specified S2C_UpdateRespond message, length delimited. Does not implicitly {@link S2C_UpdateRespond.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_UpdateRespond
     * @static
     * @param {IS2C_UpdateRespond} message S2C_UpdateRespond message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_UpdateRespond.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_UpdateRespond message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_UpdateRespond
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_UpdateRespond} S2C_UpdateRespond
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_UpdateRespond.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_UpdateRespond();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nNewVersion = reader.uint32();
                break;
            case 2:
                message.szNewVersionDesc = reader.string();
                break;
            case 3:
                message.szNewVersionAddr = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_UpdateRespond message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_UpdateRespond
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_UpdateRespond} S2C_UpdateRespond
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_UpdateRespond.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_UpdateRespond message.
     * @function verify
     * @memberof S2C_UpdateRespond
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_UpdateRespond.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.nNewVersion != null && message.hasOwnProperty("nNewVersion"))
            if (!$util.isInteger(message.nNewVersion))
                return "nNewVersion: integer expected";
        if (message.szNewVersionDesc != null && message.hasOwnProperty("szNewVersionDesc"))
            if (!$util.isString(message.szNewVersionDesc))
                return "szNewVersionDesc: string expected";
        if (message.szNewVersionAddr != null && message.hasOwnProperty("szNewVersionAddr"))
            if (!$util.isString(message.szNewVersionAddr))
                return "szNewVersionAddr: string expected";
        return null;
    };

    /**
     * Creates a S2C_UpdateRespond message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_UpdateRespond
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_UpdateRespond} S2C_UpdateRespond
     */
    S2C_UpdateRespond.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_UpdateRespond)
            return object;
        var message = new $root.S2C_UpdateRespond();
        if (object.nNewVersion != null)
            message.nNewVersion = object.nNewVersion >>> 0;
        if (object.szNewVersionDesc != null)
            message.szNewVersionDesc = String(object.szNewVersionDesc);
        if (object.szNewVersionAddr != null)
            message.szNewVersionAddr = String(object.szNewVersionAddr);
        return message;
    };

    /**
     * Creates a plain object from a S2C_UpdateRespond message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_UpdateRespond
     * @static
     * @param {S2C_UpdateRespond} message S2C_UpdateRespond
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_UpdateRespond.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nNewVersion = 0;
            object.szNewVersionDesc = "";
            object.szNewVersionAddr = "";
        }
        if (message.nNewVersion != null && message.hasOwnProperty("nNewVersion"))
            object.nNewVersion = message.nNewVersion;
        if (message.szNewVersionDesc != null && message.hasOwnProperty("szNewVersionDesc"))
            object.szNewVersionDesc = message.szNewVersionDesc;
        if (message.szNewVersionAddr != null && message.hasOwnProperty("szNewVersionAddr"))
            object.szNewVersionAddr = message.szNewVersionAddr;
        return object;
    };

    /**
     * Converts this S2C_UpdateRespond to JSON.
     * @function toJSON
     * @memberof S2C_UpdateRespond
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_UpdateRespond.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_UpdateRespond;
})();

$root.S2C_HostSucc = (function() {

    /**
     * Properties of a S2C_HostSucc.
     * @exports IS2C_HostSucc
     * @interface IS2C_HostSucc
     * @property {string} [szIPAddr] S2C_HostSucc szIPAddr
     * @property {number} [nPort] S2C_HostSucc nPort
     * @property {number} [nNewVersion] S2C_HostSucc nNewVersion
     * @property {string} [szNewVersionDesc] S2C_HostSucc szNewVersionDesc
     * @property {string} [szNewVersionAddr] S2C_HostSucc szNewVersionAddr
     */

    /**
     * Constructs a new S2C_HostSucc.
     * @exports S2C_HostSucc
     * @classdesc Represents a S2C_HostSucc.
     * @constructor
     * @param {IS2C_HostSucc=} [properties] Properties to set
     */
    function S2C_HostSucc(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_HostSucc szIPAddr.
     * @member {string}szIPAddr
     * @memberof S2C_HostSucc
     * @instance
     */
    S2C_HostSucc.prototype.szIPAddr = "";

    /**
     * S2C_HostSucc nPort.
     * @member {number}nPort
     * @memberof S2C_HostSucc
     * @instance
     */
    S2C_HostSucc.prototype.nPort = 0;

    /**
     * S2C_HostSucc nNewVersion.
     * @member {number}nNewVersion
     * @memberof S2C_HostSucc
     * @instance
     */
    S2C_HostSucc.prototype.nNewVersion = 0;

    /**
     * S2C_HostSucc szNewVersionDesc.
     * @member {string}szNewVersionDesc
     * @memberof S2C_HostSucc
     * @instance
     */
    S2C_HostSucc.prototype.szNewVersionDesc = "";

    /**
     * S2C_HostSucc szNewVersionAddr.
     * @member {string}szNewVersionAddr
     * @memberof S2C_HostSucc
     * @instance
     */
    S2C_HostSucc.prototype.szNewVersionAddr = "";

    /**
     * Creates a new S2C_HostSucc instance using the specified properties.
     * @function create
     * @memberof S2C_HostSucc
     * @static
     * @param {IS2C_HostSucc=} [properties] Properties to set
     * @returns {S2C_HostSucc} S2C_HostSucc instance
     */
    S2C_HostSucc.create = function create(properties) {
        return new S2C_HostSucc(properties);
    };

    /**
     * Encodes the specified S2C_HostSucc message. Does not implicitly {@link S2C_HostSucc.verify|verify} messages.
     * @function encode
     * @memberof S2C_HostSucc
     * @static
     * @param {IS2C_HostSucc} message S2C_HostSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_HostSucc.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szIPAddr != null && message.hasOwnProperty("szIPAddr"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szIPAddr);
        if (message.nPort != null && message.hasOwnProperty("nPort"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.nPort);
        if (message.nNewVersion != null && message.hasOwnProperty("nNewVersion"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.nNewVersion);
        if (message.szNewVersionDesc != null && message.hasOwnProperty("szNewVersionDesc"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.szNewVersionDesc);
        if (message.szNewVersionAddr != null && message.hasOwnProperty("szNewVersionAddr"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.szNewVersionAddr);
        return writer;
    };

    /**
     * Encodes the specified S2C_HostSucc message, length delimited. Does not implicitly {@link S2C_HostSucc.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_HostSucc
     * @static
     * @param {IS2C_HostSucc} message S2C_HostSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_HostSucc.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_HostSucc message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_HostSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_HostSucc} S2C_HostSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_HostSucc.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_HostSucc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szIPAddr = reader.string();
                break;
            case 2:
                message.nPort = reader.uint32();
                break;
            case 3:
                message.nNewVersion = reader.uint32();
                break;
            case 4:
                message.szNewVersionDesc = reader.string();
                break;
            case 5:
                message.szNewVersionAddr = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_HostSucc message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_HostSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_HostSucc} S2C_HostSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_HostSucc.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_HostSucc message.
     * @function verify
     * @memberof S2C_HostSucc
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_HostSucc.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szIPAddr != null && message.hasOwnProperty("szIPAddr"))
            if (!$util.isString(message.szIPAddr))
                return "szIPAddr: string expected";
        if (message.nPort != null && message.hasOwnProperty("nPort"))
            if (!$util.isInteger(message.nPort))
                return "nPort: integer expected";
        if (message.nNewVersion != null && message.hasOwnProperty("nNewVersion"))
            if (!$util.isInteger(message.nNewVersion))
                return "nNewVersion: integer expected";
        if (message.szNewVersionDesc != null && message.hasOwnProperty("szNewVersionDesc"))
            if (!$util.isString(message.szNewVersionDesc))
                return "szNewVersionDesc: string expected";
        if (message.szNewVersionAddr != null && message.hasOwnProperty("szNewVersionAddr"))
            if (!$util.isString(message.szNewVersionAddr))
                return "szNewVersionAddr: string expected";
        return null;
    };

    /**
     * Creates a S2C_HostSucc message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_HostSucc
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_HostSucc} S2C_HostSucc
     */
    S2C_HostSucc.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_HostSucc)
            return object;
        var message = new $root.S2C_HostSucc();
        if (object.szIPAddr != null)
            message.szIPAddr = String(object.szIPAddr);
        if (object.nPort != null)
            message.nPort = object.nPort >>> 0;
        if (object.nNewVersion != null)
            message.nNewVersion = object.nNewVersion >>> 0;
        if (object.szNewVersionDesc != null)
            message.szNewVersionDesc = String(object.szNewVersionDesc);
        if (object.szNewVersionAddr != null)
            message.szNewVersionAddr = String(object.szNewVersionAddr);
        return message;
    };

    /**
     * Creates a plain object from a S2C_HostSucc message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_HostSucc
     * @static
     * @param {S2C_HostSucc} message S2C_HostSucc
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_HostSucc.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szIPAddr = "";
            object.nPort = 0;
            object.nNewVersion = 0;
            object.szNewVersionDesc = "";
            object.szNewVersionAddr = "";
        }
        if (message.szIPAddr != null && message.hasOwnProperty("szIPAddr"))
            object.szIPAddr = message.szIPAddr;
        if (message.nPort != null && message.hasOwnProperty("nPort"))
            object.nPort = message.nPort;
        if (message.nNewVersion != null && message.hasOwnProperty("nNewVersion"))
            object.nNewVersion = message.nNewVersion;
        if (message.szNewVersionDesc != null && message.hasOwnProperty("szNewVersionDesc"))
            object.szNewVersionDesc = message.szNewVersionDesc;
        if (message.szNewVersionAddr != null && message.hasOwnProperty("szNewVersionAddr"))
            object.szNewVersionAddr = message.szNewVersionAddr;
        return object;
    };

    /**
     * Converts this S2C_HostSucc to JSON.
     * @function toJSON
     * @memberof S2C_HostSucc
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_HostSucc.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_HostSucc;
})();

$root.S2C_HostFailed = (function() {

    /**
     * Properties of a S2C_HostFailed.
     * @exports IS2C_HostFailed
     * @interface IS2C_HostFailed
     * @property {ItyErrorInfo} [errInfo] S2C_HostFailed errInfo
     */

    /**
     * Constructs a new S2C_HostFailed.
     * @exports S2C_HostFailed
     * @classdesc Represents a S2C_HostFailed.
     * @constructor
     * @param {IS2C_HostFailed=} [properties] Properties to set
     */
    function S2C_HostFailed(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_HostFailed errInfo.
     * @member {(ItyErrorInfo|null|undefined)}errInfo
     * @memberof S2C_HostFailed
     * @instance
     */
    S2C_HostFailed.prototype.errInfo = null;

    /**
     * Creates a new S2C_HostFailed instance using the specified properties.
     * @function create
     * @memberof S2C_HostFailed
     * @static
     * @param {IS2C_HostFailed=} [properties] Properties to set
     * @returns {S2C_HostFailed} S2C_HostFailed instance
     */
    S2C_HostFailed.create = function create(properties) {
        return new S2C_HostFailed(properties);
    };

    /**
     * Encodes the specified S2C_HostFailed message. Does not implicitly {@link S2C_HostFailed.verify|verify} messages.
     * @function encode
     * @memberof S2C_HostFailed
     * @static
     * @param {IS2C_HostFailed} message S2C_HostFailed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_HostFailed.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errInfo != null && message.hasOwnProperty("errInfo"))
            $root.tyErrorInfo.encode(message.errInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2C_HostFailed message, length delimited. Does not implicitly {@link S2C_HostFailed.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_HostFailed
     * @static
     * @param {IS2C_HostFailed} message S2C_HostFailed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_HostFailed.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_HostFailed message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_HostFailed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_HostFailed} S2C_HostFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_HostFailed.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_HostFailed();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.errInfo = $root.tyErrorInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_HostFailed message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_HostFailed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_HostFailed} S2C_HostFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_HostFailed.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_HostFailed message.
     * @function verify
     * @memberof S2C_HostFailed
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_HostFailed.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errInfo != null && message.hasOwnProperty("errInfo")) {
            var error = $root.tyErrorInfo.verify(message.errInfo);
            if (error)
                return "errInfo." + error;
        }
        return null;
    };

    /**
     * Creates a S2C_HostFailed message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_HostFailed
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_HostFailed} S2C_HostFailed
     */
    S2C_HostFailed.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_HostFailed)
            return object;
        var message = new $root.S2C_HostFailed();
        if (object.errInfo != null) {
            if (typeof object.errInfo !== "object")
                throw TypeError(".S2C_HostFailed.errInfo: object expected");
            message.errInfo = $root.tyErrorInfo.fromObject(object.errInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C_HostFailed message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_HostFailed
     * @static
     * @param {S2C_HostFailed} message S2C_HostFailed
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_HostFailed.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.errInfo = null;
        if (message.errInfo != null && message.hasOwnProperty("errInfo"))
            object.errInfo = $root.tyErrorInfo.toObject(message.errInfo, options);
        return object;
    };

    /**
     * Converts this S2C_HostFailed to JSON.
     * @function toJSON
     * @memberof S2C_HostFailed
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_HostFailed.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_HostFailed;
})();

$root.requestUserInfo = (function() {

    /**
     * Properties of a requestUserInfo.
     * @exports IrequestUserInfo
     * @interface IrequestUserInfo
     * @property {string} [szUserName] requestUserInfo szUserName
     * @property {string} [szPassword] requestUserInfo szPassword
     * @property {string} [szMathineCode] requestUserInfo szMathineCode
     * @property {number} [nDevice] requestUserInfo nDevice
     * @property {string} [szMobileVCode] requestUserInfo szMobileVCode
     * @property {number} [nPromoID] requestUserInfo nPromoID
     * @property {number} [nClientVersion] requestUserInfo nClientVersion
     */

    /**
     * Constructs a new requestUserInfo.
     * @exports requestUserInfo
     * @classdesc Represents a requestUserInfo.
     * @constructor
     * @param {IrequestUserInfo=} [properties] Properties to set
     */
    function requestUserInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * requestUserInfo szUserName.
     * @member {string}szUserName
     * @memberof requestUserInfo
     * @instance
     */
    requestUserInfo.prototype.szUserName = "";

    /**
     * requestUserInfo szPassword.
     * @member {string}szPassword
     * @memberof requestUserInfo
     * @instance
     */
    requestUserInfo.prototype.szPassword = "";

    /**
     * requestUserInfo szMathineCode.
     * @member {string}szMathineCode
     * @memberof requestUserInfo
     * @instance
     */
    requestUserInfo.prototype.szMathineCode = "";

    /**
     * requestUserInfo nDevice.
     * @member {number}nDevice
     * @memberof requestUserInfo
     * @instance
     */
    requestUserInfo.prototype.nDevice = 0;

    /**
     * requestUserInfo szMobileVCode.
     * @member {string}szMobileVCode
     * @memberof requestUserInfo
     * @instance
     */
    requestUserInfo.prototype.szMobileVCode = "";

    /**
     * requestUserInfo nPromoID.
     * @member {number}nPromoID
     * @memberof requestUserInfo
     * @instance
     */
    requestUserInfo.prototype.nPromoID = 0;

    /**
     * requestUserInfo nClientVersion.
     * @member {number}nClientVersion
     * @memberof requestUserInfo
     * @instance
     */
    requestUserInfo.prototype.nClientVersion = 0;

    /**
     * Creates a new requestUserInfo instance using the specified properties.
     * @function create
     * @memberof requestUserInfo
     * @static
     * @param {IrequestUserInfo=} [properties] Properties to set
     * @returns {requestUserInfo} requestUserInfo instance
     */
    requestUserInfo.create = function create(properties) {
        return new requestUserInfo(properties);
    };

    /**
     * Encodes the specified requestUserInfo message. Does not implicitly {@link requestUserInfo.verify|verify} messages.
     * @function encode
     * @memberof requestUserInfo
     * @static
     * @param {IrequestUserInfo} message requestUserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    requestUserInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szUserName != null && message.hasOwnProperty("szUserName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szUserName);
        if (message.szPassword != null && message.hasOwnProperty("szPassword"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.szPassword);
        if (message.szMathineCode != null && message.hasOwnProperty("szMathineCode"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.szMathineCode);
        if (message.nDevice != null && message.hasOwnProperty("nDevice"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.nDevice);
        if (message.szMobileVCode != null && message.hasOwnProperty("szMobileVCode"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.szMobileVCode);
        if (message.nPromoID != null && message.hasOwnProperty("nPromoID"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.nPromoID);
        if (message.nClientVersion != null && message.hasOwnProperty("nClientVersion"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.nClientVersion);
        return writer;
    };

    /**
     * Encodes the specified requestUserInfo message, length delimited. Does not implicitly {@link requestUserInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof requestUserInfo
     * @static
     * @param {IrequestUserInfo} message requestUserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    requestUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a requestUserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof requestUserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {requestUserInfo} requestUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    requestUserInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.requestUserInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szUserName = reader.string();
                break;
            case 2:
                message.szPassword = reader.string();
                break;
            case 3:
                message.szMathineCode = reader.string();
                break;
            case 4:
                message.nDevice = reader.uint32();
                break;
            case 5:
                message.szMobileVCode = reader.string();
                break;
            case 6:
                message.nPromoID = reader.uint32();
                break;
            case 7:
                message.nClientVersion = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a requestUserInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof requestUserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {requestUserInfo} requestUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    requestUserInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a requestUserInfo message.
     * @function verify
     * @memberof requestUserInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    requestUserInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szUserName != null && message.hasOwnProperty("szUserName"))
            if (!$util.isString(message.szUserName))
                return "szUserName: string expected";
        if (message.szPassword != null && message.hasOwnProperty("szPassword"))
            if (!$util.isString(message.szPassword))
                return "szPassword: string expected";
        if (message.szMathineCode != null && message.hasOwnProperty("szMathineCode"))
            if (!$util.isString(message.szMathineCode))
                return "szMathineCode: string expected";
        if (message.nDevice != null && message.hasOwnProperty("nDevice"))
            if (!$util.isInteger(message.nDevice))
                return "nDevice: integer expected";
        if (message.szMobileVCode != null && message.hasOwnProperty("szMobileVCode"))
            if (!$util.isString(message.szMobileVCode))
                return "szMobileVCode: string expected";
        if (message.nPromoID != null && message.hasOwnProperty("nPromoID"))
            if (!$util.isInteger(message.nPromoID))
                return "nPromoID: integer expected";
        if (message.nClientVersion != null && message.hasOwnProperty("nClientVersion"))
            if (!$util.isInteger(message.nClientVersion))
                return "nClientVersion: integer expected";
        return null;
    };

    /**
     * Creates a requestUserInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof requestUserInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {requestUserInfo} requestUserInfo
     */
    requestUserInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.requestUserInfo)
            return object;
        var message = new $root.requestUserInfo();
        if (object.szUserName != null)
            message.szUserName = String(object.szUserName);
        if (object.szPassword != null)
            message.szPassword = String(object.szPassword);
        if (object.szMathineCode != null)
            message.szMathineCode = String(object.szMathineCode);
        if (object.nDevice != null)
            message.nDevice = object.nDevice >>> 0;
        if (object.szMobileVCode != null)
            message.szMobileVCode = String(object.szMobileVCode);
        if (object.nPromoID != null)
            message.nPromoID = object.nPromoID >>> 0;
        if (object.nClientVersion != null)
            message.nClientVersion = object.nClientVersion >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a requestUserInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof requestUserInfo
     * @static
     * @param {requestUserInfo} message requestUserInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    requestUserInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szUserName = "";
            object.szPassword = "";
            object.szMathineCode = "";
            object.nDevice = 0;
            object.szMobileVCode = "";
            object.nPromoID = 0;
            object.nClientVersion = 0;
        }
        if (message.szUserName != null && message.hasOwnProperty("szUserName"))
            object.szUserName = message.szUserName;
        if (message.szPassword != null && message.hasOwnProperty("szPassword"))
            object.szPassword = message.szPassword;
        if (message.szMathineCode != null && message.hasOwnProperty("szMathineCode"))
            object.szMathineCode = message.szMathineCode;
        if (message.nDevice != null && message.hasOwnProperty("nDevice"))
            object.nDevice = message.nDevice;
        if (message.szMobileVCode != null && message.hasOwnProperty("szMobileVCode"))
            object.szMobileVCode = message.szMobileVCode;
        if (message.nPromoID != null && message.hasOwnProperty("nPromoID"))
            object.nPromoID = message.nPromoID;
        if (message.nClientVersion != null && message.hasOwnProperty("nClientVersion"))
            object.nClientVersion = message.nClientVersion;
        return object;
    };

    /**
     * Converts this requestUserInfo to JSON.
     * @function toJSON
     * @memberof requestUserInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    requestUserInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return requestUserInfo;
})();

$root.respondUserInfo = (function() {

    /**
     * Properties of a respondUserInfo.
     * @exports IrespondUserInfo
     * @interface IrespondUserInfo
     * @property {string} [szUserName] respondUserInfo szUserName
     * @property {string} [szPassword] respondUserInfo szPassword
     * @property {string} [szMathineCode] respondUserInfo szMathineCode
     * @property {string} [szNickName] respondUserInfo szNickName
     * @property {number} [nUserID] respondUserInfo nUserID
     * @property {number|Long} [nMoney] respondUserInfo nMoney
     * @property {number|Long} [nBankMoney] respondUserInfo nBankMoney
     * @property {number} [nUserFaceID] respondUserInfo nUserFaceID
     * @property {string} [szMobile] respondUserInfo szMobile
     * @property {string} [szEmail] respondUserInfo szEmail
     * @property {boolean} [isMale] respondUserInfo isMale
     * @property {string} [szLastIP] respondUserInfo szLastIP
     * @property {string} [szNowIP] respondUserInfo szNowIP
     * @property {string} [szUserIDCard] respondUserInfo szUserIDCard
     * @property {boolean} [isBank] respondUserInfo isBank
     */

    /**
     * Constructs a new respondUserInfo.
     * @exports respondUserInfo
     * @classdesc Represents a respondUserInfo.
     * @constructor
     * @param {IrespondUserInfo=} [properties] Properties to set
     */
    function respondUserInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * respondUserInfo szUserName.
     * @member {string}szUserName
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.szUserName = "";

    /**
     * respondUserInfo szPassword.
     * @member {string}szPassword
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.szPassword = "";

    /**
     * respondUserInfo szMathineCode.
     * @member {string}szMathineCode
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.szMathineCode = "";

    /**
     * respondUserInfo szNickName.
     * @member {string}szNickName
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.szNickName = "";

    /**
     * respondUserInfo nUserID.
     * @member {number}nUserID
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.nUserID = 0;

    /**
     * respondUserInfo nMoney.
     * @member {number|Long}nMoney
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.nMoney = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * respondUserInfo nBankMoney.
     * @member {number|Long}nBankMoney
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.nBankMoney = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * respondUserInfo nUserFaceID.
     * @member {number}nUserFaceID
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.nUserFaceID = 0;

    /**
     * respondUserInfo szMobile.
     * @member {string}szMobile
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.szMobile = "";

    /**
     * respondUserInfo szEmail.
     * @member {string}szEmail
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.szEmail = "";

    /**
     * respondUserInfo isMale.
     * @member {boolean}isMale
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.isMale = false;

    /**
     * respondUserInfo szLastIP.
     * @member {string}szLastIP
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.szLastIP = "";

    /**
     * respondUserInfo szNowIP.
     * @member {string}szNowIP
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.szNowIP = "";

    /**
     * respondUserInfo szUserIDCard.
     * @member {string}szUserIDCard
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.szUserIDCard = "";

    /**
     * respondUserInfo isBank.
     * @member {boolean}isBank
     * @memberof respondUserInfo
     * @instance
     */
    respondUserInfo.prototype.isBank = false;

    /**
     * Creates a new respondUserInfo instance using the specified properties.
     * @function create
     * @memberof respondUserInfo
     * @static
     * @param {IrespondUserInfo=} [properties] Properties to set
     * @returns {respondUserInfo} respondUserInfo instance
     */
    respondUserInfo.create = function create(properties) {
        return new respondUserInfo(properties);
    };

    /**
     * Encodes the specified respondUserInfo message. Does not implicitly {@link respondUserInfo.verify|verify} messages.
     * @function encode
     * @memberof respondUserInfo
     * @static
     * @param {IrespondUserInfo} message respondUserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    respondUserInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szUserName != null && message.hasOwnProperty("szUserName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szUserName);
        if (message.szPassword != null && message.hasOwnProperty("szPassword"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.szPassword);
        if (message.szMathineCode != null && message.hasOwnProperty("szMathineCode"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.szMathineCode);
        if (message.szNickName != null && message.hasOwnProperty("szNickName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.szNickName);
        if (message.nUserID != null && message.hasOwnProperty("nUserID"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.nUserID);
        if (message.nMoney != null && message.hasOwnProperty("nMoney"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.nMoney);
        if (message.nBankMoney != null && message.hasOwnProperty("nBankMoney"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.nBankMoney);
        if (message.nUserFaceID != null && message.hasOwnProperty("nUserFaceID"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.nUserFaceID);
        if (message.szMobile != null && message.hasOwnProperty("szMobile"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.szMobile);
        if (message.szEmail != null && message.hasOwnProperty("szEmail"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.szEmail);
        if (message.isMale != null && message.hasOwnProperty("isMale"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isMale);
        if (message.szLastIP != null && message.hasOwnProperty("szLastIP"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.szLastIP);
        if (message.szNowIP != null && message.hasOwnProperty("szNowIP"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.szNowIP);
        if (message.szUserIDCard != null && message.hasOwnProperty("szUserIDCard"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.szUserIDCard);
        if (message.isBank != null && message.hasOwnProperty("isBank"))
            writer.uint32(/* id 15, wireType 0 =*/120).bool(message.isBank);
        return writer;
    };

    /**
     * Encodes the specified respondUserInfo message, length delimited. Does not implicitly {@link respondUserInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof respondUserInfo
     * @static
     * @param {IrespondUserInfo} message respondUserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    respondUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a respondUserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof respondUserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {respondUserInfo} respondUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    respondUserInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.respondUserInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szUserName = reader.string();
                break;
            case 2:
                message.szPassword = reader.string();
                break;
            case 3:
                message.szMathineCode = reader.string();
                break;
            case 4:
                message.szNickName = reader.string();
                break;
            case 5:
                message.nUserID = reader.uint32();
                break;
            case 6:
                message.nMoney = reader.uint64();
                break;
            case 7:
                message.nBankMoney = reader.uint64();
                break;
            case 8:
                message.nUserFaceID = reader.uint32();
                break;
            case 9:
                message.szMobile = reader.string();
                break;
            case 10:
                message.szEmail = reader.string();
                break;
            case 11:
                message.isMale = reader.bool();
                break;
            case 12:
                message.szLastIP = reader.string();
                break;
            case 13:
                message.szNowIP = reader.string();
                break;
            case 14:
                message.szUserIDCard = reader.string();
                break;
            case 15:
                message.isBank = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a respondUserInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof respondUserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {respondUserInfo} respondUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    respondUserInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a respondUserInfo message.
     * @function verify
     * @memberof respondUserInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    respondUserInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szUserName != null && message.hasOwnProperty("szUserName"))
            if (!$util.isString(message.szUserName))
                return "szUserName: string expected";
        if (message.szPassword != null && message.hasOwnProperty("szPassword"))
            if (!$util.isString(message.szPassword))
                return "szPassword: string expected";
        if (message.szMathineCode != null && message.hasOwnProperty("szMathineCode"))
            if (!$util.isString(message.szMathineCode))
                return "szMathineCode: string expected";
        if (message.szNickName != null && message.hasOwnProperty("szNickName"))
            if (!$util.isString(message.szNickName))
                return "szNickName: string expected";
        if (message.nUserID != null && message.hasOwnProperty("nUserID"))
            if (!$util.isInteger(message.nUserID))
                return "nUserID: integer expected";
        if (message.nMoney != null && message.hasOwnProperty("nMoney"))
            if (!$util.isInteger(message.nMoney) && !(message.nMoney && $util.isInteger(message.nMoney.low) && $util.isInteger(message.nMoney.high)))
                return "nMoney: integer|Long expected";
        if (message.nBankMoney != null && message.hasOwnProperty("nBankMoney"))
            if (!$util.isInteger(message.nBankMoney) && !(message.nBankMoney && $util.isInteger(message.nBankMoney.low) && $util.isInteger(message.nBankMoney.high)))
                return "nBankMoney: integer|Long expected";
        if (message.nUserFaceID != null && message.hasOwnProperty("nUserFaceID"))
            if (!$util.isInteger(message.nUserFaceID))
                return "nUserFaceID: integer expected";
        if (message.szMobile != null && message.hasOwnProperty("szMobile"))
            if (!$util.isString(message.szMobile))
                return "szMobile: string expected";
        if (message.szEmail != null && message.hasOwnProperty("szEmail"))
            if (!$util.isString(message.szEmail))
                return "szEmail: string expected";
        if (message.isMale != null && message.hasOwnProperty("isMale"))
            if (typeof message.isMale !== "boolean")
                return "isMale: boolean expected";
        if (message.szLastIP != null && message.hasOwnProperty("szLastIP"))
            if (!$util.isString(message.szLastIP))
                return "szLastIP: string expected";
        if (message.szNowIP != null && message.hasOwnProperty("szNowIP"))
            if (!$util.isString(message.szNowIP))
                return "szNowIP: string expected";
        if (message.szUserIDCard != null && message.hasOwnProperty("szUserIDCard"))
            if (!$util.isString(message.szUserIDCard))
                return "szUserIDCard: string expected";
        if (message.isBank != null && message.hasOwnProperty("isBank"))
            if (typeof message.isBank !== "boolean")
                return "isBank: boolean expected";
        return null;
    };

    /**
     * Creates a respondUserInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof respondUserInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {respondUserInfo} respondUserInfo
     */
    respondUserInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.respondUserInfo)
            return object;
        var message = new $root.respondUserInfo();
        if (object.szUserName != null)
            message.szUserName = String(object.szUserName);
        if (object.szPassword != null)
            message.szPassword = String(object.szPassword);
        if (object.szMathineCode != null)
            message.szMathineCode = String(object.szMathineCode);
        if (object.szNickName != null)
            message.szNickName = String(object.szNickName);
        if (object.nUserID != null)
            message.nUserID = object.nUserID >>> 0;
        if (object.nMoney != null)
            if ($util.Long)
                (message.nMoney = $util.Long.fromValue(object.nMoney)).unsigned = true;
            else if (typeof object.nMoney === "string")
                message.nMoney = parseInt(object.nMoney, 10);
            else if (typeof object.nMoney === "number")
                message.nMoney = object.nMoney;
            else if (typeof object.nMoney === "object")
                message.nMoney = new $util.LongBits(object.nMoney.low >>> 0, object.nMoney.high >>> 0).toNumber(true);
        if (object.nBankMoney != null)
            if ($util.Long)
                (message.nBankMoney = $util.Long.fromValue(object.nBankMoney)).unsigned = true;
            else if (typeof object.nBankMoney === "string")
                message.nBankMoney = parseInt(object.nBankMoney, 10);
            else if (typeof object.nBankMoney === "number")
                message.nBankMoney = object.nBankMoney;
            else if (typeof object.nBankMoney === "object")
                message.nBankMoney = new $util.LongBits(object.nBankMoney.low >>> 0, object.nBankMoney.high >>> 0).toNumber(true);
        if (object.nUserFaceID != null)
            message.nUserFaceID = object.nUserFaceID >>> 0;
        if (object.szMobile != null)
            message.szMobile = String(object.szMobile);
        if (object.szEmail != null)
            message.szEmail = String(object.szEmail);
        if (object.isMale != null)
            message.isMale = Boolean(object.isMale);
        if (object.szLastIP != null)
            message.szLastIP = String(object.szLastIP);
        if (object.szNowIP != null)
            message.szNowIP = String(object.szNowIP);
        if (object.szUserIDCard != null)
            message.szUserIDCard = String(object.szUserIDCard);
        if (object.isBank != null)
            message.isBank = Boolean(object.isBank);
        return message;
    };

    /**
     * Creates a plain object from a respondUserInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof respondUserInfo
     * @static
     * @param {respondUserInfo} message respondUserInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    respondUserInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szUserName = "";
            object.szPassword = "";
            object.szMathineCode = "";
            object.szNickName = "";
            object.nUserID = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.nMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nMoney = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.nBankMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nBankMoney = options.longs === String ? "0" : 0;
            object.nUserFaceID = 0;
            object.szMobile = "";
            object.szEmail = "";
            object.isMale = false;
            object.szLastIP = "";
            object.szNowIP = "";
            object.szUserIDCard = "";
            object.isBank = false;
        }
        if (message.szUserName != null && message.hasOwnProperty("szUserName"))
            object.szUserName = message.szUserName;
        if (message.szPassword != null && message.hasOwnProperty("szPassword"))
            object.szPassword = message.szPassword;
        if (message.szMathineCode != null && message.hasOwnProperty("szMathineCode"))
            object.szMathineCode = message.szMathineCode;
        if (message.szNickName != null && message.hasOwnProperty("szNickName"))
            object.szNickName = message.szNickName;
        if (message.nUserID != null && message.hasOwnProperty("nUserID"))
            object.nUserID = message.nUserID;
        if (message.nMoney != null && message.hasOwnProperty("nMoney"))
            if (typeof message.nMoney === "number")
                object.nMoney = options.longs === String ? String(message.nMoney) : message.nMoney;
            else
                object.nMoney = options.longs === String ? $util.Long.prototype.toString.call(message.nMoney) : options.longs === Number ? new $util.LongBits(message.nMoney.low >>> 0, message.nMoney.high >>> 0).toNumber(true) : message.nMoney;
        if (message.nBankMoney != null && message.hasOwnProperty("nBankMoney"))
            if (typeof message.nBankMoney === "number")
                object.nBankMoney = options.longs === String ? String(message.nBankMoney) : message.nBankMoney;
            else
                object.nBankMoney = options.longs === String ? $util.Long.prototype.toString.call(message.nBankMoney) : options.longs === Number ? new $util.LongBits(message.nBankMoney.low >>> 0, message.nBankMoney.high >>> 0).toNumber(true) : message.nBankMoney;
        if (message.nUserFaceID != null && message.hasOwnProperty("nUserFaceID"))
            object.nUserFaceID = message.nUserFaceID;
        if (message.szMobile != null && message.hasOwnProperty("szMobile"))
            object.szMobile = message.szMobile;
        if (message.szEmail != null && message.hasOwnProperty("szEmail"))
            object.szEmail = message.szEmail;
        if (message.isMale != null && message.hasOwnProperty("isMale"))
            object.isMale = message.isMale;
        if (message.szLastIP != null && message.hasOwnProperty("szLastIP"))
            object.szLastIP = message.szLastIP;
        if (message.szNowIP != null && message.hasOwnProperty("szNowIP"))
            object.szNowIP = message.szNowIP;
        if (message.szUserIDCard != null && message.hasOwnProperty("szUserIDCard"))
            object.szUserIDCard = message.szUserIDCard;
        if (message.isBank != null && message.hasOwnProperty("isBank"))
            object.isBank = message.isBank;
        return object;
    };

    /**
     * Converts this respondUserInfo to JSON.
     * @function toJSON
     * @memberof respondUserInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    respondUserInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return respondUserInfo;
})();

$root.C2S_Login = (function() {

    /**
     * Properties of a C2S_Login.
     * @exports IC2S_Login
     * @interface IC2S_Login
     * @property {IrequestUserInfo} [szUser] C2S_Login szUser
     */

    /**
     * Constructs a new C2S_Login.
     * @exports C2S_Login
     * @classdesc Represents a C2S_Login.
     * @constructor
     * @param {IC2S_Login=} [properties] Properties to set
     */
    function C2S_Login(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2S_Login szUser.
     * @member {(IrequestUserInfo|null|undefined)}szUser
     * @memberof C2S_Login
     * @instance
     */
    C2S_Login.prototype.szUser = null;

    /**
     * Creates a new C2S_Login instance using the specified properties.
     * @function create
     * @memberof C2S_Login
     * @static
     * @param {IC2S_Login=} [properties] Properties to set
     * @returns {C2S_Login} C2S_Login instance
     */
    C2S_Login.create = function create(properties) {
        return new C2S_Login(properties);
    };

    /**
     * Encodes the specified C2S_Login message. Does not implicitly {@link C2S_Login.verify|verify} messages.
     * @function encode
     * @memberof C2S_Login
     * @static
     * @param {IC2S_Login} message C2S_Login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_Login.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szUser != null && message.hasOwnProperty("szUser"))
            $root.requestUserInfo.encode(message.szUser, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified C2S_Login message, length delimited. Does not implicitly {@link C2S_Login.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2S_Login
     * @static
     * @param {IC2S_Login} message C2S_Login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_Login.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2S_Login message from the specified reader or buffer.
     * @function decode
     * @memberof C2S_Login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2S_Login} C2S_Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_Login.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S_Login();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szUser = $root.requestUserInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
// 嘎嘎
    /**
     * Decodes a C2S_Login message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2S_Login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2S_Login} C2S_Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_Login.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2S_Login message.
     * @function verify
     * @memberof C2S_Login
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2S_Login.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szUser != null && message.hasOwnProperty("szUser")) {
            var error = $root.requestUserInfo.verify(message.szUser);
            if (error)
                return "szUser." + error;
        }
        return null;
    };

    /**
     * Creates a C2S_Login message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2S_Login
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2S_Login} C2S_Login
     */
    C2S_Login.fromObject = function fromObject(object) {
        if (object instanceof $root.C2S_Login)
            return object;
        var message = new $root.C2S_Login();
        if (object.szUser != null) {
            if (typeof object.szUser !== "object")
                throw TypeError(".C2S_Login.szUser: object expected");
            message.szUser = $root.requestUserInfo.fromObject(object.szUser);
        }
        return message;
    };

    /**
     * Creates a plain object from a C2S_Login message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2S_Login
     * @static
     * @param {C2S_Login} message C2S_Login
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2S_Login.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.szUser = null;
        if (message.szUser != null && message.hasOwnProperty("szUser"))
            object.szUser = $root.requestUserInfo.toObject(message.szUser, options);
        return object;
    };

    /**
     * Converts this C2S_Login to JSON.
     * @function toJSON
     * @memberof C2S_Login
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2S_Login.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2S_Login;
})();

$root.S2C_LoginSucc = (function() {

    /**
     * Properties of a S2C_LoginSucc.
     * @exports IS2C_LoginSucc
     * @interface IS2C_LoginSucc
     * @property {IrespondUserInfo} [szUser] S2C_LoginSucc szUser
     */

    /**
     * Constructs a new S2C_LoginSucc.
     * @exports S2C_LoginSucc
     * @classdesc Represents a S2C_LoginSucc.
     * @constructor
     * @param {IS2C_LoginSucc=} [properties] Properties to set
     */
    function S2C_LoginSucc(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_LoginSucc szUser.
     * @member {(IrespondUserInfo|null|undefined)}szUser
     * @memberof S2C_LoginSucc
     * @instance
     */
    S2C_LoginSucc.prototype.szUser = null;

    /**
     * Creates a new S2C_LoginSucc instance using the specified properties.
     * @function create
     * @memberof S2C_LoginSucc
     * @static
     * @param {IS2C_LoginSucc=} [properties] Properties to set
     * @returns {S2C_LoginSucc} S2C_LoginSucc instance
     */
    S2C_LoginSucc.create = function create(properties) {
        return new S2C_LoginSucc(properties);
    };

    /**
     * Encodes the specified S2C_LoginSucc message. Does not implicitly {@link S2C_LoginSucc.verify|verify} messages.
     * @function encode
     * @memberof S2C_LoginSucc
     * @static
     * @param {IS2C_LoginSucc} message S2C_LoginSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_LoginSucc.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szUser != null && message.hasOwnProperty("szUser"))
            $root.respondUserInfo.encode(message.szUser, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2C_LoginSucc message, length delimited. Does not implicitly {@link S2C_LoginSucc.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_LoginSucc
     * @static
     * @param {IS2C_LoginSucc} message S2C_LoginSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_LoginSucc.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_LoginSucc message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_LoginSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_LoginSucc} S2C_LoginSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_LoginSucc.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_LoginSucc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szUser = $root.respondUserInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_LoginSucc message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_LoginSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_LoginSucc} S2C_LoginSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_LoginSucc.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_LoginSucc message.
     * @function verify
     * @memberof S2C_LoginSucc
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_LoginSucc.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szUser != null && message.hasOwnProperty("szUser")) {
            var error = $root.respondUserInfo.verify(message.szUser);
            if (error)
                return "szUser." + error;
        }
        return null;
    };

    /**
     * Creates a S2C_LoginSucc message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_LoginSucc
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_LoginSucc} S2C_LoginSucc
     */
    S2C_LoginSucc.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_LoginSucc)
            return object;
        var message = new $root.S2C_LoginSucc();
        if (object.szUser != null) {
            if (typeof object.szUser !== "object")
                throw TypeError(".S2C_LoginSucc.szUser: object expected");
            message.szUser = $root.respondUserInfo.fromObject(object.szUser);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C_LoginSucc message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_LoginSucc
     * @static
     * @param {S2C_LoginSucc} message S2C_LoginSucc
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_LoginSucc.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.szUser = null;
        if (message.szUser != null && message.hasOwnProperty("szUser"))
            object.szUser = $root.respondUserInfo.toObject(message.szUser, options);
        return object;
    };

    /**
     * Converts this S2C_LoginSucc to JSON.
     * @function toJSON
     * @memberof S2C_LoginSucc
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_LoginSucc.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_LoginSucc;
})();

$root.S2C_LoginFailed = (function() {

    /**
     * Properties of a S2C_LoginFailed.
     * @exports IS2C_LoginFailed
     * @interface IS2C_LoginFailed
     * @property {IrequestUserInfo} [szUser] S2C_LoginFailed szUser
     * @property {ItyErrorInfo} [errInfo] S2C_LoginFailed errInfo
     */

    /**
     * Constructs a new S2C_LoginFailed.
     * @exports S2C_LoginFailed
     * @classdesc Represents a S2C_LoginFailed.
     * @constructor
     * @param {IS2C_LoginFailed=} [properties] Properties to set
     */
    function S2C_LoginFailed(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_LoginFailed szUser.
     * @member {(IrequestUserInfo|null|undefined)}szUser
     * @memberof S2C_LoginFailed
     * @instance
     */
    S2C_LoginFailed.prototype.szUser = null;

    /**
     * S2C_LoginFailed errInfo.
     * @member {(ItyErrorInfo|null|undefined)}errInfo
     * @memberof S2C_LoginFailed
     * @instance
     */
    S2C_LoginFailed.prototype.errInfo = null;

    /**
     * Creates a new S2C_LoginFailed instance using the specified properties.
     * @function create
     * @memberof S2C_LoginFailed
     * @static
     * @param {IS2C_LoginFailed=} [properties] Properties to set
     * @returns {S2C_LoginFailed} S2C_LoginFailed instance
     */
    S2C_LoginFailed.create = function create(properties) {
        return new S2C_LoginFailed(properties);
    };

    /**
     * Encodes the specified S2C_LoginFailed message. Does not implicitly {@link S2C_LoginFailed.verify|verify} messages.
     * @function encode
     * @memberof S2C_LoginFailed
     * @static
     * @param {IS2C_LoginFailed} message S2C_LoginFailed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_LoginFailed.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szUser != null && message.hasOwnProperty("szUser"))
            $root.requestUserInfo.encode(message.szUser, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.errInfo != null && message.hasOwnProperty("errInfo"))
            $root.tyErrorInfo.encode(message.errInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2C_LoginFailed message, length delimited. Does not implicitly {@link S2C_LoginFailed.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_LoginFailed
     * @static
     * @param {IS2C_LoginFailed} message S2C_LoginFailed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_LoginFailed.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_LoginFailed message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_LoginFailed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_LoginFailed} S2C_LoginFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_LoginFailed.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_LoginFailed();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szUser = $root.requestUserInfo.decode(reader, reader.uint32());
                break;
            case 2:
                message.errInfo = $root.tyErrorInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_LoginFailed message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_LoginFailed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_LoginFailed} S2C_LoginFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_LoginFailed.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_LoginFailed message.
     * @function verify
     * @memberof S2C_LoginFailed
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_LoginFailed.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szUser != null && message.hasOwnProperty("szUser")) {
            var error = $root.requestUserInfo.verify(message.szUser);
            if (error)
                return "szUser." + error;
        }
        if (message.errInfo != null && message.hasOwnProperty("errInfo")) {
            error = $root.tyErrorInfo.verify(message.errInfo);
            if (error)
                return "errInfo." + error;
        }
        return null;
    };

    /**
     * Creates a S2C_LoginFailed message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_LoginFailed
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_LoginFailed} S2C_LoginFailed
     */
    S2C_LoginFailed.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_LoginFailed)
            return object;
        var message = new $root.S2C_LoginFailed();
        if (object.szUser != null) {
            if (typeof object.szUser !== "object")
                throw TypeError(".S2C_LoginFailed.szUser: object expected");
            message.szUser = $root.requestUserInfo.fromObject(object.szUser);
        }
        if (object.errInfo != null) {
            if (typeof object.errInfo !== "object")
                throw TypeError(".S2C_LoginFailed.errInfo: object expected");
            message.errInfo = $root.tyErrorInfo.fromObject(object.errInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C_LoginFailed message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_LoginFailed
     * @static
     * @param {S2C_LoginFailed} message S2C_LoginFailed
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_LoginFailed.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szUser = null;
            object.errInfo = null;
        }
        if (message.szUser != null && message.hasOwnProperty("szUser"))
            object.szUser = $root.requestUserInfo.toObject(message.szUser, options);
        if (message.errInfo != null && message.hasOwnProperty("errInfo"))
            object.errInfo = $root.tyErrorInfo.toObject(message.errInfo, options);
        return object;
    };

    /**
     * Converts this S2C_LoginFailed to JSON.
     * @function toJSON
     * @memberof S2C_LoginFailed
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_LoginFailed.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_LoginFailed;
})();

$root.C2S_Regist = (function() {

    /**
     * Properties of a C2S_Regist.
     * @exports IC2S_Regist
     * @interface IC2S_Regist
     * @property {IrequestUserInfo} [szUser] C2S_Regist szUser
     */

    /**
     * Constructs a new C2S_Regist.
     * @exports C2S_Regist
     * @classdesc Represents a C2S_Regist.
     * @constructor
     * @param {IC2S_Regist=} [properties] Properties to set
     */
    function C2S_Regist(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2S_Regist szUser.
     * @member {(IrequestUserInfo|null|undefined)}szUser
     * @memberof C2S_Regist
     * @instance
     */
    C2S_Regist.prototype.szUser = null;

    /**
     * Creates a new C2S_Regist instance using the specified properties.
     * @function create
     * @memberof C2S_Regist
     * @static
     * @param {IC2S_Regist=} [properties] Properties to set
     * @returns {C2S_Regist} C2S_Regist instance
     */
    C2S_Regist.create = function create(properties) {
        return new C2S_Regist(properties);
    };

    /**
     * Encodes the specified C2S_Regist message. Does not implicitly {@link C2S_Regist.verify|verify} messages.
     * @function encode
     * @memberof C2S_Regist
     * @static
     * @param {IC2S_Regist} message C2S_Regist message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_Regist.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szUser != null && message.hasOwnProperty("szUser"))
            $root.requestUserInfo.encode(message.szUser, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified C2S_Regist message, length delimited. Does not implicitly {@link C2S_Regist.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2S_Regist
     * @static
     * @param {IC2S_Regist} message C2S_Regist message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_Regist.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2S_Regist message from the specified reader or buffer.
     * @function decode
     * @memberof C2S_Regist
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2S_Regist} C2S_Regist
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_Regist.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S_Regist();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szUser = $root.requestUserInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2S_Regist message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2S_Regist
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2S_Regist} C2S_Regist
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_Regist.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2S_Regist message.
     * @function verify
     * @memberof C2S_Regist
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2S_Regist.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szUser != null && message.hasOwnProperty("szUser")) {
            var error = $root.requestUserInfo.verify(message.szUser);
            if (error)
                return "szUser." + error;
        }
        return null;
    };

    /**
     * Creates a C2S_Regist message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2S_Regist
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2S_Regist} C2S_Regist
     */
    C2S_Regist.fromObject = function fromObject(object) {
        if (object instanceof $root.C2S_Regist)
            return object;
        var message = new $root.C2S_Regist();
        if (object.szUser != null) {
            if (typeof object.szUser !== "object")
                throw TypeError(".C2S_Regist.szUser: object expected");
            message.szUser = $root.requestUserInfo.fromObject(object.szUser);
        }
        return message;
    };

    /**
     * Creates a plain object from a C2S_Regist message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2S_Regist
     * @static
     * @param {C2S_Regist} message C2S_Regist
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2S_Regist.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.szUser = null;
        if (message.szUser != null && message.hasOwnProperty("szUser"))
            object.szUser = $root.requestUserInfo.toObject(message.szUser, options);
        return object;
    };

    /**
     * Converts this C2S_Regist to JSON.
     * @function toJSON
     * @memberof C2S_Regist
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2S_Regist.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2S_Regist;
})();

$root.S2C_RegistSucc = (function() {

    /**
     * Properties of a S2C_RegistSucc.
     * @exports IS2C_RegistSucc
     * @interface IS2C_RegistSucc
     * @property {IrespondUserInfo} [szUser] S2C_RegistSucc szUser
     */

    /**
     * Constructs a new S2C_RegistSucc.
     * @exports S2C_RegistSucc
     * @classdesc Represents a S2C_RegistSucc.
     * @constructor
     * @param {IS2C_RegistSucc=} [properties] Properties to set
     */
    function S2C_RegistSucc(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_RegistSucc szUser.
     * @member {(IrespondUserInfo|null|undefined)}szUser
     * @memberof S2C_RegistSucc
     * @instance
     */
    S2C_RegistSucc.prototype.szUser = null;

    /**
     * Creates a new S2C_RegistSucc instance using the specified properties.
     * @function create
     * @memberof S2C_RegistSucc
     * @static
     * @param {IS2C_RegistSucc=} [properties] Properties to set
     * @returns {S2C_RegistSucc} S2C_RegistSucc instance
     */
    S2C_RegistSucc.create = function create(properties) {
        return new S2C_RegistSucc(properties);
    };

    /**
     * Encodes the specified S2C_RegistSucc message. Does not implicitly {@link S2C_RegistSucc.verify|verify} messages.
     * @function encode
     * @memberof S2C_RegistSucc
     * @static
     * @param {IS2C_RegistSucc} message S2C_RegistSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_RegistSucc.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szUser != null && message.hasOwnProperty("szUser"))
            $root.respondUserInfo.encode(message.szUser, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2C_RegistSucc message, length delimited. Does not implicitly {@link S2C_RegistSucc.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_RegistSucc
     * @static
     * @param {IS2C_RegistSucc} message S2C_RegistSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_RegistSucc.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_RegistSucc message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_RegistSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_RegistSucc} S2C_RegistSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_RegistSucc.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_RegistSucc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szUser = $root.respondUserInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_RegistSucc message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_RegistSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_RegistSucc} S2C_RegistSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_RegistSucc.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_RegistSucc message.
     * @function verify
     * @memberof S2C_RegistSucc
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_RegistSucc.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szUser != null && message.hasOwnProperty("szUser")) {
            var error = $root.respondUserInfo.verify(message.szUser);
            if (error)
                return "szUser." + error;
        }
        return null;
    };

    /**
     * Creates a S2C_RegistSucc message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_RegistSucc
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_RegistSucc} S2C_RegistSucc
     */
    S2C_RegistSucc.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_RegistSucc)
            return object;
        var message = new $root.S2C_RegistSucc();
        if (object.szUser != null) {
            if (typeof object.szUser !== "object")
                throw TypeError(".S2C_RegistSucc.szUser: object expected");
            message.szUser = $root.respondUserInfo.fromObject(object.szUser);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C_RegistSucc message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_RegistSucc
     * @static
     * @param {S2C_RegistSucc} message S2C_RegistSucc
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_RegistSucc.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.szUser = null;
        if (message.szUser != null && message.hasOwnProperty("szUser"))
            object.szUser = $root.respondUserInfo.toObject(message.szUser, options);
        return object;
    };

    /**
     * Converts this S2C_RegistSucc to JSON.
     * @function toJSON
     * @memberof S2C_RegistSucc
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_RegistSucc.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_RegistSucc;
})();

$root.S2C_RegistFailed = (function() {

    /**
     * Properties of a S2C_RegistFailed.
     * @exports IS2C_RegistFailed
     * @interface IS2C_RegistFailed
     * @property {IrequestUserInfo} [szUser] S2C_RegistFailed szUser
     * @property {ItyErrorInfo} [errInfo] S2C_RegistFailed errInfo
     */

    /**
     * Constructs a new S2C_RegistFailed.
     * @exports S2C_RegistFailed
     * @classdesc Represents a S2C_RegistFailed.
     * @constructor
     * @param {IS2C_RegistFailed=} [properties] Properties to set
     */
    function S2C_RegistFailed(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_RegistFailed szUser.
     * @member {(IrequestUserInfo|null|undefined)}szUser
     * @memberof S2C_RegistFailed
     * @instance
     */
    S2C_RegistFailed.prototype.szUser = null;

    /**
     * S2C_RegistFailed errInfo.
     * @member {(ItyErrorInfo|null|undefined)}errInfo
     * @memberof S2C_RegistFailed
     * @instance
     */
    S2C_RegistFailed.prototype.errInfo = null;

    /**
     * Creates a new S2C_RegistFailed instance using the specified properties.
     * @function create
     * @memberof S2C_RegistFailed
     * @static
     * @param {IS2C_RegistFailed=} [properties] Properties to set
     * @returns {S2C_RegistFailed} S2C_RegistFailed instance
     */
    S2C_RegistFailed.create = function create(properties) {
        return new S2C_RegistFailed(properties);
    };

    /**
     * Encodes the specified S2C_RegistFailed message. Does not implicitly {@link S2C_RegistFailed.verify|verify} messages.
     * @function encode
     * @memberof S2C_RegistFailed
     * @static
     * @param {IS2C_RegistFailed} message S2C_RegistFailed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_RegistFailed.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szUser != null && message.hasOwnProperty("szUser"))
            $root.requestUserInfo.encode(message.szUser, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.errInfo != null && message.hasOwnProperty("errInfo"))
            $root.tyErrorInfo.encode(message.errInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2C_RegistFailed message, length delimited. Does not implicitly {@link S2C_RegistFailed.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_RegistFailed
     * @static
     * @param {IS2C_RegistFailed} message S2C_RegistFailed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_RegistFailed.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_RegistFailed message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_RegistFailed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_RegistFailed} S2C_RegistFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_RegistFailed.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_RegistFailed();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szUser = $root.requestUserInfo.decode(reader, reader.uint32());
                break;
            case 2:
                message.errInfo = $root.tyErrorInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_RegistFailed message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_RegistFailed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_RegistFailed} S2C_RegistFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_RegistFailed.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_RegistFailed message.
     * @function verify
     * @memberof S2C_RegistFailed
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_RegistFailed.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szUser != null && message.hasOwnProperty("szUser")) {
            var error = $root.requestUserInfo.verify(message.szUser);
            if (error)
                return "szUser." + error;
        }
        if (message.errInfo != null && message.hasOwnProperty("errInfo")) {
            error = $root.tyErrorInfo.verify(message.errInfo);
            if (error)
                return "errInfo." + error;
        }
        return null;
    };

    /**
     * Creates a S2C_RegistFailed message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_RegistFailed
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_RegistFailed} S2C_RegistFailed
     */
    S2C_RegistFailed.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_RegistFailed)
            return object;
        var message = new $root.S2C_RegistFailed();
        if (object.szUser != null) {
            if (typeof object.szUser !== "object")
                throw TypeError(".S2C_RegistFailed.szUser: object expected");
            message.szUser = $root.requestUserInfo.fromObject(object.szUser);
        }
        if (object.errInfo != null) {
            if (typeof object.errInfo !== "object")
                throw TypeError(".S2C_RegistFailed.errInfo: object expected");
            message.errInfo = $root.tyErrorInfo.fromObject(object.errInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C_RegistFailed message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_RegistFailed
     * @static
     * @param {S2C_RegistFailed} message S2C_RegistFailed
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_RegistFailed.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szUser = null;
            object.errInfo = null;
        }
        if (message.szUser != null && message.hasOwnProperty("szUser"))
            object.szUser = $root.requestUserInfo.toObject(message.szUser, options);
        if (message.errInfo != null && message.hasOwnProperty("errInfo"))
            object.errInfo = $root.tyErrorInfo.toObject(message.errInfo, options);
        return object;
    };

    /**
     * Converts this S2C_RegistFailed to JSON.
     * @function toJSON
     * @memberof S2C_RegistFailed
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_RegistFailed.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_RegistFailed;
})();

$root.C2S_GameTypeList = (function() {

    /**
     * Properties of a C2S_GameTypeList.
     * @exports IC2S_GameTypeList
     * @interface IC2S_GameTypeList
     */

    /**
     * Constructs a new C2S_GameTypeList.
     * @exports C2S_GameTypeList
     * @classdesc Represents a C2S_GameTypeList.
     * @constructor
     * @param {IC2S_GameTypeList=} [properties] Properties to set
     */
    function C2S_GameTypeList(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2S_GameTypeList instance using the specified properties.
     * @function create
     * @memberof C2S_GameTypeList
     * @static
     * @param {IC2S_GameTypeList=} [properties] Properties to set
     * @returns {C2S_GameTypeList} C2S_GameTypeList instance
     */
    C2S_GameTypeList.create = function create(properties) {
        return new C2S_GameTypeList(properties);
    };

    /**
     * Encodes the specified C2S_GameTypeList message. Does not implicitly {@link C2S_GameTypeList.verify|verify} messages.
     * @function encode
     * @memberof C2S_GameTypeList
     * @static
     * @param {IC2S_GameTypeList} message C2S_GameTypeList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_GameTypeList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2S_GameTypeList message, length delimited. Does not implicitly {@link C2S_GameTypeList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2S_GameTypeList
     * @static
     * @param {IC2S_GameTypeList} message C2S_GameTypeList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_GameTypeList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2S_GameTypeList message from the specified reader or buffer.
     * @function decode
     * @memberof C2S_GameTypeList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2S_GameTypeList} C2S_GameTypeList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_GameTypeList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S_GameTypeList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2S_GameTypeList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2S_GameTypeList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2S_GameTypeList} C2S_GameTypeList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_GameTypeList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2S_GameTypeList message.
     * @function verify
     * @memberof C2S_GameTypeList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2S_GameTypeList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2S_GameTypeList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2S_GameTypeList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2S_GameTypeList} C2S_GameTypeList
     */
    C2S_GameTypeList.fromObject = function fromObject(object) {
        if (object instanceof $root.C2S_GameTypeList)
            return object;
        return new $root.C2S_GameTypeList();
    };

    /**
     * Creates a plain object from a C2S_GameTypeList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2S_GameTypeList
     * @static
     * @param {C2S_GameTypeList} message C2S_GameTypeList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2S_GameTypeList.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2S_GameTypeList to JSON.
     * @function toJSON
     * @memberof C2S_GameTypeList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2S_GameTypeList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2S_GameTypeList;
})();

$root.tyGame = (function() {

    /**
     * Properties of a tyGame.
     * @exports ItyGame
     * @interface ItyGame
     * @property {string} [szName] tyGame szName
     * @property {number} [nPlayerOLCount] tyGame nPlayerOLCount
     * @property {number} [nRobotOLCount] tyGame nRobotOLCount
     * @property {number} [nState] tyGame nState
     * @property {number} [nType] tyGame nType
     */

    /**
     * Constructs a new tyGame.
     * @exports tyGame
     * @classdesc Represents a tyGame.
     * @constructor
     * @param {ItyGame=} [properties] Properties to set
     */
    function tyGame(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * tyGame szName.
     * @member {string}szName
     * @memberof tyGame
     * @instance
     */
    tyGame.prototype.szName = "";

    /**
     * tyGame nPlayerOLCount.
     * @member {number}nPlayerOLCount
     * @memberof tyGame
     * @instance
     */
    tyGame.prototype.nPlayerOLCount = 0;

    /**
     * tyGame nRobotOLCount.
     * @member {number}nRobotOLCount
     * @memberof tyGame
     * @instance
     */
    tyGame.prototype.nRobotOLCount = 0;

    /**
     * tyGame nState.
     * @member {number}nState
     * @memberof tyGame
     * @instance
     */
    tyGame.prototype.nState = 0;

    /**
     * tyGame nType.
     * @member {number}nType
     * @memberof tyGame
     * @instance
     */
    tyGame.prototype.nType = 0;

    /**
     * Creates a new tyGame instance using the specified properties.
     * @function create
     * @memberof tyGame
     * @static
     * @param {ItyGame=} [properties] Properties to set
     * @returns {tyGame} tyGame instance
     */
    tyGame.create = function create(properties) {
        return new tyGame(properties);
    };

    /**
     * Encodes the specified tyGame message. Does not implicitly {@link tyGame.verify|verify} messages.
     * @function encode
     * @memberof tyGame
     * @static
     * @param {ItyGame} message tyGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    tyGame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        if (message.nPlayerOLCount != null && message.hasOwnProperty("nPlayerOLCount"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.nPlayerOLCount);
        if (message.nRobotOLCount != null && message.hasOwnProperty("nRobotOLCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.nRobotOLCount);
        if (message.nState != null && message.hasOwnProperty("nState"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.nState);
        if (message.nType != null && message.hasOwnProperty("nType"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.nType);
        return writer;
    };

    /**
     * Encodes the specified tyGame message, length delimited. Does not implicitly {@link tyGame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tyGame
     * @static
     * @param {ItyGame} message tyGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    tyGame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a tyGame message from the specified reader or buffer.
     * @function decode
     * @memberof tyGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tyGame} tyGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    tyGame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tyGame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            case 2:
                message.nPlayerOLCount = reader.uint32();
                break;
            case 3:
                message.nRobotOLCount = reader.uint32();
                break;
            case 4:
                message.nState = reader.uint32();
                break;
            case 5:
                message.nType = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a tyGame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tyGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tyGame} tyGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    tyGame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a tyGame message.
     * @function verify
     * @memberof tyGame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    tyGame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        if (message.nPlayerOLCount != null && message.hasOwnProperty("nPlayerOLCount"))
            if (!$util.isInteger(message.nPlayerOLCount))
                return "nPlayerOLCount: integer expected";
        if (message.nRobotOLCount != null && message.hasOwnProperty("nRobotOLCount"))
            if (!$util.isInteger(message.nRobotOLCount))
                return "nRobotOLCount: integer expected";
        if (message.nState != null && message.hasOwnProperty("nState"))
            if (!$util.isInteger(message.nState))
                return "nState: integer expected";
        if (message.nType != null && message.hasOwnProperty("nType"))
            if (!$util.isInteger(message.nType))
                return "nType: integer expected";
        return null;
    };

    /**
     * Creates a tyGame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tyGame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tyGame} tyGame
     */
    tyGame.fromObject = function fromObject(object) {
        if (object instanceof $root.tyGame)
            return object;
        var message = new $root.tyGame();
        if (object.szName != null)
            message.szName = String(object.szName);
        if (object.nPlayerOLCount != null)
            message.nPlayerOLCount = object.nPlayerOLCount >>> 0;
        if (object.nRobotOLCount != null)
            message.nRobotOLCount = object.nRobotOLCount >>> 0;
        if (object.nState != null)
            message.nState = object.nState >>> 0;
        if (object.nType != null)
            message.nType = object.nType >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a tyGame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tyGame
     * @static
     * @param {tyGame} message tyGame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    tyGame.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szName = "";
            object.nPlayerOLCount = 0;
            object.nRobotOLCount = 0;
            object.nState = 0;
            object.nType = 0;
        }
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        if (message.nPlayerOLCount != null && message.hasOwnProperty("nPlayerOLCount"))
            object.nPlayerOLCount = message.nPlayerOLCount;
        if (message.nRobotOLCount != null && message.hasOwnProperty("nRobotOLCount"))
            object.nRobotOLCount = message.nRobotOLCount;
        if (message.nState != null && message.hasOwnProperty("nState"))
            object.nState = message.nState;
        if (message.nType != null && message.hasOwnProperty("nType"))
            object.nType = message.nType;
        return object;
    };

    /**
     * Converts this tyGame to JSON.
     * @function toJSON
     * @memberof tyGame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    tyGame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return tyGame;
})();

$root.S2C_GameTypeListRespond = (function() {

    /**
     * Properties of a S2C_GameTypeListRespond.
     * @exports IS2C_GameTypeListRespond
     * @interface IS2C_GameTypeListRespond
     * @property {string} [szName] S2C_GameTypeListRespond szName
     * @property {Array.<ItyGame>} [arrGameTypeList] S2C_GameTypeListRespond arrGameTypeList
     */

    /**
     * Constructs a new S2C_GameTypeListRespond.
     * @exports S2C_GameTypeListRespond
     * @classdesc Represents a S2C_GameTypeListRespond.
     * @constructor
     * @param {IS2C_GameTypeListRespond=} [properties] Properties to set
     */
    function S2C_GameTypeListRespond(properties) {
        this.arrGameTypeList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_GameTypeListRespond szName.
     * @member {string}szName
     * @memberof S2C_GameTypeListRespond
     * @instance
     */
    S2C_GameTypeListRespond.prototype.szName = "";

    /**
     * S2C_GameTypeListRespond arrGameTypeList.
     * @member {Array.<ItyGame>}arrGameTypeList
     * @memberof S2C_GameTypeListRespond
     * @instance
     */
    S2C_GameTypeListRespond.prototype.arrGameTypeList = $util.emptyArray;

    /**
     * Creates a new S2C_GameTypeListRespond instance using the specified properties.
     * @function create
     * @memberof S2C_GameTypeListRespond
     * @static
     * @param {IS2C_GameTypeListRespond=} [properties] Properties to set
     * @returns {S2C_GameTypeListRespond} S2C_GameTypeListRespond instance
     */
    S2C_GameTypeListRespond.create = function create(properties) {
        return new S2C_GameTypeListRespond(properties);
    };

    /**
     * Encodes the specified S2C_GameTypeListRespond message. Does not implicitly {@link S2C_GameTypeListRespond.verify|verify} messages.
     * @function encode
     * @memberof S2C_GameTypeListRespond
     * @static
     * @param {IS2C_GameTypeListRespond} message S2C_GameTypeListRespond message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_GameTypeListRespond.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        if (message.arrGameTypeList != null && message.arrGameTypeList.length)
            for (var i = 0; i < message.arrGameTypeList.length; ++i)
                $root.tyGame.encode(message.arrGameTypeList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2C_GameTypeListRespond message, length delimited. Does not implicitly {@link S2C_GameTypeListRespond.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_GameTypeListRespond
     * @static
     * @param {IS2C_GameTypeListRespond} message S2C_GameTypeListRespond message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_GameTypeListRespond.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_GameTypeListRespond message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_GameTypeListRespond
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_GameTypeListRespond} S2C_GameTypeListRespond
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_GameTypeListRespond.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_GameTypeListRespond();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            case 2:
                if (!(message.arrGameTypeList && message.arrGameTypeList.length))
                    message.arrGameTypeList = [];
                message.arrGameTypeList.push($root.tyGame.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_GameTypeListRespond message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_GameTypeListRespond
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_GameTypeListRespond} S2C_GameTypeListRespond
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_GameTypeListRespond.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_GameTypeListRespond message.
     * @function verify
     * @memberof S2C_GameTypeListRespond
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_GameTypeListRespond.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        if (message.arrGameTypeList != null && message.hasOwnProperty("arrGameTypeList")) {
            if (!Array.isArray(message.arrGameTypeList))
                return "arrGameTypeList: array expected";
            for (var i = 0; i < message.arrGameTypeList.length; ++i) {
                var error = $root.tyGame.verify(message.arrGameTypeList[i]);
                if (error)
                    return "arrGameTypeList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2C_GameTypeListRespond message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_GameTypeListRespond
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_GameTypeListRespond} S2C_GameTypeListRespond
     */
    S2C_GameTypeListRespond.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_GameTypeListRespond)
            return object;
        var message = new $root.S2C_GameTypeListRespond();
        if (object.szName != null)
            message.szName = String(object.szName);
        if (object.arrGameTypeList) {
            if (!Array.isArray(object.arrGameTypeList))
                throw TypeError(".S2C_GameTypeListRespond.arrGameTypeList: array expected");
            message.arrGameTypeList = [];
            for (var i = 0; i < object.arrGameTypeList.length; ++i) {
                if (typeof object.arrGameTypeList[i] !== "object")
                    throw TypeError(".S2C_GameTypeListRespond.arrGameTypeList: object expected");
                message.arrGameTypeList[i] = $root.tyGame.fromObject(object.arrGameTypeList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C_GameTypeListRespond message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_GameTypeListRespond
     * @static
     * @param {S2C_GameTypeListRespond} message S2C_GameTypeListRespond
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_GameTypeListRespond.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.arrGameTypeList = [];
        if (options.defaults)
            object.szName = "";
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        if (message.arrGameTypeList && message.arrGameTypeList.length) {
            object.arrGameTypeList = [];
            for (var j = 0; j < message.arrGameTypeList.length; ++j)
                object.arrGameTypeList[j] = $root.tyGame.toObject(message.arrGameTypeList[j], options);
        }
        return object;
    };

    /**
     * Converts this S2C_GameTypeListRespond to JSON.
     * @function toJSON
     * @memberof S2C_GameTypeListRespond
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_GameTypeListRespond.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_GameTypeListRespond;
})();

$root.C2S_GameRoomList = (function() {

    /**
     * Properties of a C2S_GameRoomList.
     * @exports IC2S_GameRoomList
     * @interface IC2S_GameRoomList
     * @property {string} [szName] C2S_GameRoomList szName
     */

    /**
     * Constructs a new C2S_GameRoomList.
     * @exports C2S_GameRoomList
     * @classdesc Represents a C2S_GameRoomList.
     * @constructor
     * @param {IC2S_GameRoomList=} [properties] Properties to set
     */
    function C2S_GameRoomList(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2S_GameRoomList szName.
     * @member {string}szName
     * @memberof C2S_GameRoomList
     * @instance
     */
    C2S_GameRoomList.prototype.szName = "";

    /**
     * Creates a new C2S_GameRoomList instance using the specified properties.
     * @function create
     * @memberof C2S_GameRoomList
     * @static
     * @param {IC2S_GameRoomList=} [properties] Properties to set
     * @returns {C2S_GameRoomList} C2S_GameRoomList instance
     */
    C2S_GameRoomList.create = function create(properties) {
        return new C2S_GameRoomList(properties);
    };

    /**
     * Encodes the specified C2S_GameRoomList message. Does not implicitly {@link C2S_GameRoomList.verify|verify} messages.
     * @function encode
     * @memberof C2S_GameRoomList
     * @static
     * @param {IC2S_GameRoomList} message C2S_GameRoomList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_GameRoomList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        return writer;
    };

    /**
     * Encodes the specified C2S_GameRoomList message, length delimited. Does not implicitly {@link C2S_GameRoomList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2S_GameRoomList
     * @static
     * @param {IC2S_GameRoomList} message C2S_GameRoomList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_GameRoomList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2S_GameRoomList message from the specified reader or buffer.
     * @function decode
     * @memberof C2S_GameRoomList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2S_GameRoomList} C2S_GameRoomList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_GameRoomList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S_GameRoomList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2S_GameRoomList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2S_GameRoomList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2S_GameRoomList} C2S_GameRoomList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_GameRoomList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2S_GameRoomList message.
     * @function verify
     * @memberof C2S_GameRoomList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2S_GameRoomList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        return null;
    };

    /**
     * Creates a C2S_GameRoomList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2S_GameRoomList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2S_GameRoomList} C2S_GameRoomList
     */
    C2S_GameRoomList.fromObject = function fromObject(object) {
        if (object instanceof $root.C2S_GameRoomList)
            return object;
        var message = new $root.C2S_GameRoomList();
        if (object.szName != null)
            message.szName = String(object.szName);
        return message;
    };

    /**
     * Creates a plain object from a C2S_GameRoomList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2S_GameRoomList
     * @static
     * @param {C2S_GameRoomList} message C2S_GameRoomList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2S_GameRoomList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.szName = "";
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        return object;
    };

    /**
     * Converts this C2S_GameRoomList to JSON.
     * @function toJSON
     * @memberof C2S_GameRoomList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2S_GameRoomList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2S_GameRoomList;
})();

$root.tyGameRoom = (function() {

    /**
     * Properties of a tyGameRoom.
     * @exports ItyGameRoom
     * @interface ItyGameRoom
     * @property {string} [szName] tyGameRoom szName
     * @property {number} [nPlayerOLCount] tyGameRoom nPlayerOLCount
     * @property {number} [nRobotOLCount] tyGameRoom nRobotOLCount
     * @property {number} [nState] tyGameRoom nState
     * @property {number} [nType] tyGameRoom nType
     * @property {number|Long} [nMinMoney] tyGameRoom nMinMoney
     * @property {number} [nCellMoney] tyGameRoom nCellMoney
     */

    /**
     * Constructs a new tyGameRoom.
     * @exports tyGameRoom
     * @classdesc Represents a tyGameRoom.
     * @constructor
     * @param {ItyGameRoom=} [properties] Properties to set
     */
    function tyGameRoom(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * tyGameRoom szName.
     * @member {string}szName
     * @memberof tyGameRoom
     * @instance
     */
    tyGameRoom.prototype.szName = "";

    /**
     * tyGameRoom nPlayerOLCount.
     * @member {number}nPlayerOLCount
     * @memberof tyGameRoom
     * @instance
     */
    tyGameRoom.prototype.nPlayerOLCount = 0;

    /**
     * tyGameRoom nRobotOLCount.
     * @member {number}nRobotOLCount
     * @memberof tyGameRoom
     * @instance
     */
    tyGameRoom.prototype.nRobotOLCount = 0;

    /**
     * tyGameRoom nState.
     * @member {number}nState
     * @memberof tyGameRoom
     * @instance
     */
    tyGameRoom.prototype.nState = 0;

    /**
     * tyGameRoom nType.
     * @member {number}nType
     * @memberof tyGameRoom
     * @instance
     */
    tyGameRoom.prototype.nType = 0;

    /**
     * tyGameRoom nMinMoney.
     * @member {number|Long}nMinMoney
     * @memberof tyGameRoom
     * @instance
     */
    tyGameRoom.prototype.nMinMoney = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * tyGameRoom nCellMoney.
     * @member {number}nCellMoney
     * @memberof tyGameRoom
     * @instance
     */
    tyGameRoom.prototype.nCellMoney = 0;

    /**
     * Creates a new tyGameRoom instance using the specified properties.
     * @function create
     * @memberof tyGameRoom
     * @static
     * @param {ItyGameRoom=} [properties] Properties to set
     * @returns {tyGameRoom} tyGameRoom instance
     */
    tyGameRoom.create = function create(properties) {
        return new tyGameRoom(properties);
    };

    /**
     * Encodes the specified tyGameRoom message. Does not implicitly {@link tyGameRoom.verify|verify} messages.
     * @function encode
     * @memberof tyGameRoom
     * @static
     * @param {ItyGameRoom} message tyGameRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    tyGameRoom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        if (message.nPlayerOLCount != null && message.hasOwnProperty("nPlayerOLCount"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.nPlayerOLCount);
        if (message.nRobotOLCount != null && message.hasOwnProperty("nRobotOLCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.nRobotOLCount);
        if (message.nState != null && message.hasOwnProperty("nState"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.nState);
        if (message.nType != null && message.hasOwnProperty("nType"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.nType);
        if (message.nMinMoney != null && message.hasOwnProperty("nMinMoney"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.nMinMoney);
        if (message.nCellMoney != null && message.hasOwnProperty("nCellMoney"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.nCellMoney);
        return writer;
    };

    /**
     * Encodes the specified tyGameRoom message, length delimited. Does not implicitly {@link tyGameRoom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof tyGameRoom
     * @static
     * @param {ItyGameRoom} message tyGameRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    tyGameRoom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a tyGameRoom message from the specified reader or buffer.
     * @function decode
     * @memberof tyGameRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {tyGameRoom} tyGameRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    tyGameRoom.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tyGameRoom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            case 2:
                message.nPlayerOLCount = reader.uint32();
                break;
            case 3:
                message.nRobotOLCount = reader.uint32();
                break;
            case 4:
                message.nState = reader.uint32();
                break;
            case 5:
                message.nType = reader.uint32();
                break;
            case 6:
                message.nMinMoney = reader.uint64();
                break;
            case 7:
                message.nCellMoney = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a tyGameRoom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof tyGameRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {tyGameRoom} tyGameRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    tyGameRoom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a tyGameRoom message.
     * @function verify
     * @memberof tyGameRoom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    tyGameRoom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        if (message.nPlayerOLCount != null && message.hasOwnProperty("nPlayerOLCount"))
            if (!$util.isInteger(message.nPlayerOLCount))
                return "nPlayerOLCount: integer expected";
        if (message.nRobotOLCount != null && message.hasOwnProperty("nRobotOLCount"))
            if (!$util.isInteger(message.nRobotOLCount))
                return "nRobotOLCount: integer expected";
        if (message.nState != null && message.hasOwnProperty("nState"))
            if (!$util.isInteger(message.nState))
                return "nState: integer expected";
        if (message.nType != null && message.hasOwnProperty("nType"))
            if (!$util.isInteger(message.nType))
                return "nType: integer expected";
        if (message.nMinMoney != null && message.hasOwnProperty("nMinMoney"))
            if (!$util.isInteger(message.nMinMoney) && !(message.nMinMoney && $util.isInteger(message.nMinMoney.low) && $util.isInteger(message.nMinMoney.high)))
                return "nMinMoney: integer|Long expected";
        if (message.nCellMoney != null && message.hasOwnProperty("nCellMoney"))
            if (!$util.isInteger(message.nCellMoney))
                return "nCellMoney: integer expected";
        return null;
    };

    /**
     * Creates a tyGameRoom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof tyGameRoom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {tyGameRoom} tyGameRoom
     */
    tyGameRoom.fromObject = function fromObject(object) {
        if (object instanceof $root.tyGameRoom)
            return object;
        var message = new $root.tyGameRoom();
        if (object.szName != null)
            message.szName = String(object.szName);
        if (object.nPlayerOLCount != null)
            message.nPlayerOLCount = object.nPlayerOLCount >>> 0;
        if (object.nRobotOLCount != null)
            message.nRobotOLCount = object.nRobotOLCount >>> 0;
        if (object.nState != null)
            message.nState = object.nState >>> 0;
        if (object.nType != null)
            message.nType = object.nType >>> 0;
        if (object.nMinMoney != null)
            if ($util.Long)
                (message.nMinMoney = $util.Long.fromValue(object.nMinMoney)).unsigned = true;
            else if (typeof object.nMinMoney === "string")
                message.nMinMoney = parseInt(object.nMinMoney, 10);
            else if (typeof object.nMinMoney === "number")
                message.nMinMoney = object.nMinMoney;
            else if (typeof object.nMinMoney === "object")
                message.nMinMoney = new $util.LongBits(object.nMinMoney.low >>> 0, object.nMinMoney.high >>> 0).toNumber(true);
        if (object.nCellMoney != null)
            message.nCellMoney = object.nCellMoney >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a tyGameRoom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof tyGameRoom
     * @static
     * @param {tyGameRoom} message tyGameRoom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    tyGameRoom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szName = "";
            object.nPlayerOLCount = 0;
            object.nRobotOLCount = 0;
            object.nState = 0;
            object.nType = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.nMinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nMinMoney = options.longs === String ? "0" : 0;
            object.nCellMoney = 0;
        }
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        if (message.nPlayerOLCount != null && message.hasOwnProperty("nPlayerOLCount"))
            object.nPlayerOLCount = message.nPlayerOLCount;
        if (message.nRobotOLCount != null && message.hasOwnProperty("nRobotOLCount"))
            object.nRobotOLCount = message.nRobotOLCount;
        if (message.nState != null && message.hasOwnProperty("nState"))
            object.nState = message.nState;
        if (message.nType != null && message.hasOwnProperty("nType"))
            object.nType = message.nType;
        if (message.nMinMoney != null && message.hasOwnProperty("nMinMoney"))
            if (typeof message.nMinMoney === "number")
                object.nMinMoney = options.longs === String ? String(message.nMinMoney) : message.nMinMoney;
            else
                object.nMinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.nMinMoney) : options.longs === Number ? new $util.LongBits(message.nMinMoney.low >>> 0, message.nMinMoney.high >>> 0).toNumber(true) : message.nMinMoney;
        if (message.nCellMoney != null && message.hasOwnProperty("nCellMoney"))
            object.nCellMoney = message.nCellMoney;
        return object;
    };

    /**
     * Converts this tyGameRoom to JSON.
     * @function toJSON
     * @memberof tyGameRoom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    tyGameRoom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return tyGameRoom;
})();

$root.S2C_GameRoomListRespond = (function() {

    /**
     * Properties of a S2C_GameRoomListRespond.
     * @exports IS2C_GameRoomListRespond
     * @interface IS2C_GameRoomListRespond
     * @property {string} [szName] S2C_GameRoomListRespond szName
     * @property {Array.<ItyGameRoom>} [arrGameRoomList] S2C_GameRoomListRespond arrGameRoomList
     */

    /**
     * Constructs a new S2C_GameRoomListRespond.
     * @exports S2C_GameRoomListRespond
     * @classdesc Represents a S2C_GameRoomListRespond.
     * @constructor
     * @param {IS2C_GameRoomListRespond=} [properties] Properties to set
     */
    function S2C_GameRoomListRespond(properties) {
        this.arrGameRoomList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_GameRoomListRespond szName.
     * @member {string}szName
     * @memberof S2C_GameRoomListRespond
     * @instance
     */
    S2C_GameRoomListRespond.prototype.szName = "";

    /**
     * S2C_GameRoomListRespond arrGameRoomList.
     * @member {Array.<ItyGameRoom>}arrGameRoomList
     * @memberof S2C_GameRoomListRespond
     * @instance
     */
    S2C_GameRoomListRespond.prototype.arrGameRoomList = $util.emptyArray;

    /**
     * Creates a new S2C_GameRoomListRespond instance using the specified properties.
     * @function create
     * @memberof S2C_GameRoomListRespond
     * @static
     * @param {IS2C_GameRoomListRespond=} [properties] Properties to set
     * @returns {S2C_GameRoomListRespond} S2C_GameRoomListRespond instance
     */
    S2C_GameRoomListRespond.create = function create(properties) {
        return new S2C_GameRoomListRespond(properties);
    };

    /**
     * Encodes the specified S2C_GameRoomListRespond message. Does not implicitly {@link S2C_GameRoomListRespond.verify|verify} messages.
     * @function encode
     * @memberof S2C_GameRoomListRespond
     * @static
     * @param {IS2C_GameRoomListRespond} message S2C_GameRoomListRespond message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_GameRoomListRespond.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        if (message.arrGameRoomList != null && message.arrGameRoomList.length)
            for (var i = 0; i < message.arrGameRoomList.length; ++i)
                $root.tyGameRoom.encode(message.arrGameRoomList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2C_GameRoomListRespond message, length delimited. Does not implicitly {@link S2C_GameRoomListRespond.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_GameRoomListRespond
     * @static
     * @param {IS2C_GameRoomListRespond} message S2C_GameRoomListRespond message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_GameRoomListRespond.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_GameRoomListRespond message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_GameRoomListRespond
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_GameRoomListRespond} S2C_GameRoomListRespond
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_GameRoomListRespond.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_GameRoomListRespond();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            case 2:
                if (!(message.arrGameRoomList && message.arrGameRoomList.length))
                    message.arrGameRoomList = [];
                message.arrGameRoomList.push($root.tyGameRoom.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_GameRoomListRespond message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_GameRoomListRespond
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_GameRoomListRespond} S2C_GameRoomListRespond
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_GameRoomListRespond.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_GameRoomListRespond message.
     * @function verify
     * @memberof S2C_GameRoomListRespond
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_GameRoomListRespond.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        if (message.arrGameRoomList != null && message.hasOwnProperty("arrGameRoomList")) {
            if (!Array.isArray(message.arrGameRoomList))
                return "arrGameRoomList: array expected";
            for (var i = 0; i < message.arrGameRoomList.length; ++i) {
                var error = $root.tyGameRoom.verify(message.arrGameRoomList[i]);
                if (error)
                    return "arrGameRoomList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2C_GameRoomListRespond message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_GameRoomListRespond
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_GameRoomListRespond} S2C_GameRoomListRespond
     */
    S2C_GameRoomListRespond.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_GameRoomListRespond)
            return object;
        var message = new $root.S2C_GameRoomListRespond();
        if (object.szName != null)
            message.szName = String(object.szName);
        if (object.arrGameRoomList) {
            if (!Array.isArray(object.arrGameRoomList))
                throw TypeError(".S2C_GameRoomListRespond.arrGameRoomList: array expected");
            message.arrGameRoomList = [];
            for (var i = 0; i < object.arrGameRoomList.length; ++i) {
                if (typeof object.arrGameRoomList[i] !== "object")
                    throw TypeError(".S2C_GameRoomListRespond.arrGameRoomList: object expected");
                message.arrGameRoomList[i] = $root.tyGameRoom.fromObject(object.arrGameRoomList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C_GameRoomListRespond message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_GameRoomListRespond
     * @static
     * @param {S2C_GameRoomListRespond} message S2C_GameRoomListRespond
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_GameRoomListRespond.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.arrGameRoomList = [];
        if (options.defaults)
            object.szName = "";
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        if (message.arrGameRoomList && message.arrGameRoomList.length) {
            object.arrGameRoomList = [];
            for (var j = 0; j < message.arrGameRoomList.length; ++j)
                object.arrGameRoomList[j] = $root.tyGameRoom.toObject(message.arrGameRoomList[j], options);
        }
        return object;
    };

    /**
     * Converts this S2C_GameRoomListRespond to JSON.
     * @function toJSON
     * @memberof S2C_GameRoomListRespond
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_GameRoomListRespond.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_GameRoomListRespond;
})();

$root.S2C_RollMessage = (function() {

    /**
     * Properties of a S2C_RollMessage.
     * @exports IS2C_RollMessage
     * @interface IS2C_RollMessage
     * @property {string} [szName] S2C_RollMessage szName
     * @property {Array.<string>} [arrszVar] S2C_RollMessage arrszVar
     */

    /**
     * Constructs a new S2C_RollMessage.
     * @exports S2C_RollMessage
     * @classdesc Represents a S2C_RollMessage.
     * @constructor
     * @param {IS2C_RollMessage=} [properties] Properties to set
     */
    function S2C_RollMessage(properties) {
        this.arrszVar = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_RollMessage szName.
     * @member {string}szName
     * @memberof S2C_RollMessage
     * @instance
     */
    S2C_RollMessage.prototype.szName = "";

    /**
     * S2C_RollMessage arrszVar.
     * @member {Array.<string>}arrszVar
     * @memberof S2C_RollMessage
     * @instance
     */
    S2C_RollMessage.prototype.arrszVar = $util.emptyArray;

    /**
     * Creates a new S2C_RollMessage instance using the specified properties.
     * @function create
     * @memberof S2C_RollMessage
     * @static
     * @param {IS2C_RollMessage=} [properties] Properties to set
     * @returns {S2C_RollMessage} S2C_RollMessage instance
     */
    S2C_RollMessage.create = function create(properties) {
        return new S2C_RollMessage(properties);
    };

    /**
     * Encodes the specified S2C_RollMessage message. Does not implicitly {@link S2C_RollMessage.verify|verify} messages.
     * @function encode
     * @memberof S2C_RollMessage
     * @static
     * @param {IS2C_RollMessage} message S2C_RollMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_RollMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        if (message.arrszVar != null && message.arrszVar.length)
            for (var i = 0; i < message.arrszVar.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.arrszVar[i]);
        return writer;
    };

    /**
     * Encodes the specified S2C_RollMessage message, length delimited. Does not implicitly {@link S2C_RollMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_RollMessage
     * @static
     * @param {IS2C_RollMessage} message S2C_RollMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_RollMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_RollMessage message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_RollMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_RollMessage} S2C_RollMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_RollMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_RollMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            case 2:
                if (!(message.arrszVar && message.arrszVar.length))
                    message.arrszVar = [];
                message.arrszVar.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_RollMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_RollMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_RollMessage} S2C_RollMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_RollMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_RollMessage message.
     * @function verify
     * @memberof S2C_RollMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_RollMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        if (message.arrszVar != null && message.hasOwnProperty("arrszVar")) {
            if (!Array.isArray(message.arrszVar))
                return "arrszVar: array expected";
            for (var i = 0; i < message.arrszVar.length; ++i)
                if (!$util.isString(message.arrszVar[i]))
                    return "arrszVar: string[] expected";
        }
        return null;
    };

    /**
     * Creates a S2C_RollMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_RollMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_RollMessage} S2C_RollMessage
     */
    S2C_RollMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_RollMessage)
            return object;
        var message = new $root.S2C_RollMessage();
        if (object.szName != null)
            message.szName = String(object.szName);
        if (object.arrszVar) {
            if (!Array.isArray(object.arrszVar))
                throw TypeError(".S2C_RollMessage.arrszVar: array expected");
            message.arrszVar = [];
            for (var i = 0; i < object.arrszVar.length; ++i)
                message.arrszVar[i] = String(object.arrszVar[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C_RollMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_RollMessage
     * @static
     * @param {S2C_RollMessage} message S2C_RollMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_RollMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.arrszVar = [];
        if (options.defaults)
            object.szName = "";
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        if (message.arrszVar && message.arrszVar.length) {
            object.arrszVar = [];
            for (var j = 0; j < message.arrszVar.length; ++j)
                object.arrszVar[j] = message.arrszVar[j];
        }
        return object;
    };

    /**
     * Converts this S2C_RollMessage to JSON.
     * @function toJSON
     * @memberof S2C_RollMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_RollMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_RollMessage;
})();

$root.C2S_EnterRoom = (function() {

    /**
     * Properties of a C2S_EnterRoom.
     * @exports IC2S_EnterRoom
     * @interface IC2S_EnterRoom
     * @property {string} [szName] C2S_EnterRoom szName
     */

    /**
     * Constructs a new C2S_EnterRoom.
     * @exports C2S_EnterRoom
     * @classdesc Represents a C2S_EnterRoom.
     * @constructor
     * @param {IC2S_EnterRoom=} [properties] Properties to set
     */
    function C2S_EnterRoom(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2S_EnterRoom szName.
     * @member {string}szName
     * @memberof C2S_EnterRoom
     * @instance
     */
    C2S_EnterRoom.prototype.szName = "";

    /**
     * Creates a new C2S_EnterRoom instance using the specified properties.
     * @function create
     * @memberof C2S_EnterRoom
     * @static
     * @param {IC2S_EnterRoom=} [properties] Properties to set
     * @returns {C2S_EnterRoom} C2S_EnterRoom instance
     */
    C2S_EnterRoom.create = function create(properties) {
        return new C2S_EnterRoom(properties);
    };

    /**
     * Encodes the specified C2S_EnterRoom message. Does not implicitly {@link C2S_EnterRoom.verify|verify} messages.
     * @function encode
     * @memberof C2S_EnterRoom
     * @static
     * @param {IC2S_EnterRoom} message C2S_EnterRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_EnterRoom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        return writer;
    };

    /**
     * Encodes the specified C2S_EnterRoom message, length delimited. Does not implicitly {@link C2S_EnterRoom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2S_EnterRoom
     * @static
     * @param {IC2S_EnterRoom} message C2S_EnterRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_EnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2S_EnterRoom message from the specified reader or buffer.
     * @function decode
     * @memberof C2S_EnterRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2S_EnterRoom} C2S_EnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_EnterRoom.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S_EnterRoom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2S_EnterRoom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2S_EnterRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2S_EnterRoom} C2S_EnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_EnterRoom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2S_EnterRoom message.
     * @function verify
     * @memberof C2S_EnterRoom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2S_EnterRoom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        return null;
    };

    /**
     * Creates a C2S_EnterRoom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2S_EnterRoom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2S_EnterRoom} C2S_EnterRoom
     */
    C2S_EnterRoom.fromObject = function fromObject(object) {
        if (object instanceof $root.C2S_EnterRoom)
            return object;
        var message = new $root.C2S_EnterRoom();
        if (object.szName != null)
            message.szName = String(object.szName);
        return message;
    };

    /**
     * Creates a plain object from a C2S_EnterRoom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2S_EnterRoom
     * @static
     * @param {C2S_EnterRoom} message C2S_EnterRoom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2S_EnterRoom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.szName = "";
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        return object;
    };

    /**
     * Converts this C2S_EnterRoom to JSON.
     * @function toJSON
     * @memberof C2S_EnterRoom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2S_EnterRoom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2S_EnterRoom;
})();

$root.S2C_EnterRoomSucc = (function() {

    /**
     * Properties of a S2C_EnterRoomSucc.
     * @exports IS2C_EnterRoomSucc
     * @interface IS2C_EnterRoomSucc
     * @property {string} [szName] S2C_EnterRoomSucc szName
     */

    /**
     * Constructs a new S2C_EnterRoomSucc.
     * @exports S2C_EnterRoomSucc
     * @classdesc Represents a S2C_EnterRoomSucc.
     * @constructor
     * @param {IS2C_EnterRoomSucc=} [properties] Properties to set
     */
    function S2C_EnterRoomSucc(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_EnterRoomSucc szName.
     * @member {string}szName
     * @memberof S2C_EnterRoomSucc
     * @instance
     */
    S2C_EnterRoomSucc.prototype.szName = "";

    /**
     * Creates a new S2C_EnterRoomSucc instance using the specified properties.
     * @function create
     * @memberof S2C_EnterRoomSucc
     * @static
     * @param {IS2C_EnterRoomSucc=} [properties] Properties to set
     * @returns {S2C_EnterRoomSucc} S2C_EnterRoomSucc instance
     */
    S2C_EnterRoomSucc.create = function create(properties) {
        return new S2C_EnterRoomSucc(properties);
    };

    /**
     * Encodes the specified S2C_EnterRoomSucc message. Does not implicitly {@link S2C_EnterRoomSucc.verify|verify} messages.
     * @function encode
     * @memberof S2C_EnterRoomSucc
     * @static
     * @param {IS2C_EnterRoomSucc} message S2C_EnterRoomSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_EnterRoomSucc.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        return writer;
    };

    /**
     * Encodes the specified S2C_EnterRoomSucc message, length delimited. Does not implicitly {@link S2C_EnterRoomSucc.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_EnterRoomSucc
     * @static
     * @param {IS2C_EnterRoomSucc} message S2C_EnterRoomSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_EnterRoomSucc.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_EnterRoomSucc message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_EnterRoomSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_EnterRoomSucc} S2C_EnterRoomSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_EnterRoomSucc.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_EnterRoomSucc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_EnterRoomSucc message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_EnterRoomSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_EnterRoomSucc} S2C_EnterRoomSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_EnterRoomSucc.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_EnterRoomSucc message.
     * @function verify
     * @memberof S2C_EnterRoomSucc
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_EnterRoomSucc.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        return null;
    };

    /**
     * Creates a S2C_EnterRoomSucc message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_EnterRoomSucc
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_EnterRoomSucc} S2C_EnterRoomSucc
     */
    S2C_EnterRoomSucc.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_EnterRoomSucc)
            return object;
        var message = new $root.S2C_EnterRoomSucc();
        if (object.szName != null)
            message.szName = String(object.szName);
        return message;
    };

    /**
     * Creates a plain object from a S2C_EnterRoomSucc message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_EnterRoomSucc
     * @static
     * @param {S2C_EnterRoomSucc} message S2C_EnterRoomSucc
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_EnterRoomSucc.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.szName = "";
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        return object;
    };

    /**
     * Converts this S2C_EnterRoomSucc to JSON.
     * @function toJSON
     * @memberof S2C_EnterRoomSucc
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_EnterRoomSucc.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_EnterRoomSucc;
})();

$root.S2C_EnterRoomFailed = (function() {

    /**
     * Properties of a S2C_EnterRoomFailed.
     * @exports IS2C_EnterRoomFailed
     * @interface IS2C_EnterRoomFailed
     * @property {string} [szName] S2C_EnterRoomFailed szName
     * @property {ItyErrorInfo} [errInfo] S2C_EnterRoomFailed errInfo
     */

    /**
     * Constructs a new S2C_EnterRoomFailed.
     * @exports S2C_EnterRoomFailed
     * @classdesc Represents a S2C_EnterRoomFailed.
     * @constructor
     * @param {IS2C_EnterRoomFailed=} [properties] Properties to set
     */
    function S2C_EnterRoomFailed(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_EnterRoomFailed szName.
     * @member {string}szName
     * @memberof S2C_EnterRoomFailed
     * @instance
     */
    S2C_EnterRoomFailed.prototype.szName = "";

    /**
     * S2C_EnterRoomFailed errInfo.
     * @member {(ItyErrorInfo|null|undefined)}errInfo
     * @memberof S2C_EnterRoomFailed
     * @instance
     */
    S2C_EnterRoomFailed.prototype.errInfo = null;

    /**
     * Creates a new S2C_EnterRoomFailed instance using the specified properties.
     * @function create
     * @memberof S2C_EnterRoomFailed
     * @static
     * @param {IS2C_EnterRoomFailed=} [properties] Properties to set
     * @returns {S2C_EnterRoomFailed} S2C_EnterRoomFailed instance
     */
    S2C_EnterRoomFailed.create = function create(properties) {
        return new S2C_EnterRoomFailed(properties);
    };

    /**
     * Encodes the specified S2C_EnterRoomFailed message. Does not implicitly {@link S2C_EnterRoomFailed.verify|verify} messages.
     * @function encode
     * @memberof S2C_EnterRoomFailed
     * @static
     * @param {IS2C_EnterRoomFailed} message S2C_EnterRoomFailed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_EnterRoomFailed.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        if (message.errInfo != null && message.hasOwnProperty("errInfo"))
            $root.tyErrorInfo.encode(message.errInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2C_EnterRoomFailed message, length delimited. Does not implicitly {@link S2C_EnterRoomFailed.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_EnterRoomFailed
     * @static
     * @param {IS2C_EnterRoomFailed} message S2C_EnterRoomFailed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_EnterRoomFailed.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_EnterRoomFailed message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_EnterRoomFailed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_EnterRoomFailed} S2C_EnterRoomFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_EnterRoomFailed.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_EnterRoomFailed();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            case 2:
                message.errInfo = $root.tyErrorInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_EnterRoomFailed message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_EnterRoomFailed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_EnterRoomFailed} S2C_EnterRoomFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_EnterRoomFailed.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_EnterRoomFailed message.
     * @function verify
     * @memberof S2C_EnterRoomFailed
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_EnterRoomFailed.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        if (message.errInfo != null && message.hasOwnProperty("errInfo")) {
            var error = $root.tyErrorInfo.verify(message.errInfo);
            if (error)
                return "errInfo." + error;
        }
        return null;
    };

    /**
     * Creates a S2C_EnterRoomFailed message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_EnterRoomFailed
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_EnterRoomFailed} S2C_EnterRoomFailed
     */
    S2C_EnterRoomFailed.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_EnterRoomFailed)
            return object;
        var message = new $root.S2C_EnterRoomFailed();
        if (object.szName != null)
            message.szName = String(object.szName);
        if (object.errInfo != null) {
            if (typeof object.errInfo !== "object")
                throw TypeError(".S2C_EnterRoomFailed.errInfo: object expected");
            message.errInfo = $root.tyErrorInfo.fromObject(object.errInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C_EnterRoomFailed message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_EnterRoomFailed
     * @static
     * @param {S2C_EnterRoomFailed} message S2C_EnterRoomFailed
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_EnterRoomFailed.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szName = "";
            object.errInfo = null;
        }
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        if (message.errInfo != null && message.hasOwnProperty("errInfo"))
            object.errInfo = $root.tyErrorInfo.toObject(message.errInfo, options);
        return object;
    };

    /**
     * Converts this S2C_EnterRoomFailed to JSON.
     * @function toJSON
     * @memberof S2C_EnterRoomFailed
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_EnterRoomFailed.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_EnterRoomFailed;
})();

$root.C2S_ExitRoom = (function() {

    /**
     * Properties of a C2S_ExitRoom.
     * @exports IC2S_ExitRoom
     * @interface IC2S_ExitRoom
     */

    /**
     * Constructs a new C2S_ExitRoom.
     * @exports C2S_ExitRoom
     * @classdesc Represents a C2S_ExitRoom.
     * @constructor
     * @param {IC2S_ExitRoom=} [properties] Properties to set
     */
    function C2S_ExitRoom(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2S_ExitRoom instance using the specified properties.
     * @function create
     * @memberof C2S_ExitRoom
     * @static
     * @param {IC2S_ExitRoom=} [properties] Properties to set
     * @returns {C2S_ExitRoom} C2S_ExitRoom instance
     */
    C2S_ExitRoom.create = function create(properties) {
        return new C2S_ExitRoom(properties);
    };

    /**
     * Encodes the specified C2S_ExitRoom message. Does not implicitly {@link C2S_ExitRoom.verify|verify} messages.
     * @function encode
     * @memberof C2S_ExitRoom
     * @static
     * @param {IC2S_ExitRoom} message C2S_ExitRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_ExitRoom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2S_ExitRoom message, length delimited. Does not implicitly {@link C2S_ExitRoom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2S_ExitRoom
     * @static
     * @param {IC2S_ExitRoom} message C2S_ExitRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_ExitRoom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2S_ExitRoom message from the specified reader or buffer.
     * @function decode
     * @memberof C2S_ExitRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2S_ExitRoom} C2S_ExitRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_ExitRoom.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S_ExitRoom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2S_ExitRoom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2S_ExitRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2S_ExitRoom} C2S_ExitRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_ExitRoom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2S_ExitRoom message.
     * @function verify
     * @memberof C2S_ExitRoom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2S_ExitRoom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2S_ExitRoom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2S_ExitRoom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2S_ExitRoom} C2S_ExitRoom
     */
    C2S_ExitRoom.fromObject = function fromObject(object) {
        if (object instanceof $root.C2S_ExitRoom)
            return object;
        return new $root.C2S_ExitRoom();
    };

    /**
     * Creates a plain object from a C2S_ExitRoom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2S_ExitRoom
     * @static
     * @param {C2S_ExitRoom} message C2S_ExitRoom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2S_ExitRoom.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2S_ExitRoom to JSON.
     * @function toJSON
     * @memberof C2S_ExitRoom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2S_ExitRoom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2S_ExitRoom;
})();

$root.S2C_ExitRoomSucc = (function() {

    /**
     * Properties of a S2C_ExitRoomSucc.
     * @exports IS2C_ExitRoomSucc
     * @interface IS2C_ExitRoomSucc
     * @property {string} [szName] S2C_ExitRoomSucc szName
     */

    /**
     * Constructs a new S2C_ExitRoomSucc.
     * @exports S2C_ExitRoomSucc
     * @classdesc Represents a S2C_ExitRoomSucc.
     * @constructor
     * @param {IS2C_ExitRoomSucc=} [properties] Properties to set
     */
    function S2C_ExitRoomSucc(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_ExitRoomSucc szName.
     * @member {string}szName
     * @memberof S2C_ExitRoomSucc
     * @instance
     */
    S2C_ExitRoomSucc.prototype.szName = "";

    /**
     * Creates a new S2C_ExitRoomSucc instance using the specified properties.
     * @function create
     * @memberof S2C_ExitRoomSucc
     * @static
     * @param {IS2C_ExitRoomSucc=} [properties] Properties to set
     * @returns {S2C_ExitRoomSucc} S2C_ExitRoomSucc instance
     */
    S2C_ExitRoomSucc.create = function create(properties) {
        return new S2C_ExitRoomSucc(properties);
    };

    /**
     * Encodes the specified S2C_ExitRoomSucc message. Does not implicitly {@link S2C_ExitRoomSucc.verify|verify} messages.
     * @function encode
     * @memberof S2C_ExitRoomSucc
     * @static
     * @param {IS2C_ExitRoomSucc} message S2C_ExitRoomSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_ExitRoomSucc.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        return writer;
    };

    /**
     * Encodes the specified S2C_ExitRoomSucc message, length delimited. Does not implicitly {@link S2C_ExitRoomSucc.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_ExitRoomSucc
     * @static
     * @param {IS2C_ExitRoomSucc} message S2C_ExitRoomSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_ExitRoomSucc.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_ExitRoomSucc message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_ExitRoomSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_ExitRoomSucc} S2C_ExitRoomSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_ExitRoomSucc.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_ExitRoomSucc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_ExitRoomSucc message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_ExitRoomSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_ExitRoomSucc} S2C_ExitRoomSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_ExitRoomSucc.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_ExitRoomSucc message.
     * @function verify
     * @memberof S2C_ExitRoomSucc
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_ExitRoomSucc.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        return null;
    };

    /**
     * Creates a S2C_ExitRoomSucc message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_ExitRoomSucc
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_ExitRoomSucc} S2C_ExitRoomSucc
     */
    S2C_ExitRoomSucc.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_ExitRoomSucc)
            return object;
        var message = new $root.S2C_ExitRoomSucc();
        if (object.szName != null)
            message.szName = String(object.szName);
        return message;
    };

    /**
     * Creates a plain object from a S2C_ExitRoomSucc message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_ExitRoomSucc
     * @static
     * @param {S2C_ExitRoomSucc} message S2C_ExitRoomSucc
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_ExitRoomSucc.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.szName = "";
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        return object;
    };

    /**
     * Converts this S2C_ExitRoomSucc to JSON.
     * @function toJSON
     * @memberof S2C_ExitRoomSucc
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_ExitRoomSucc.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_ExitRoomSucc;
})();

$root.C2S_EnterDesk = (function() {

    /**
     * Properties of a C2S_EnterDesk.
     * @exports IC2S_EnterDesk
     * @interface IC2S_EnterDesk
     * @property {string} [szName] C2S_EnterDesk szName
     * @property {string} [szPassword] C2S_EnterDesk szPassword
     */

    /**
     * Constructs a new C2S_EnterDesk.
     * @exports C2S_EnterDesk
     * @classdesc Represents a C2S_EnterDesk.
     * @constructor
     * @param {IC2S_EnterDesk=} [properties] Properties to set
     */
    function C2S_EnterDesk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2S_EnterDesk szName.
     * @member {string}szName
     * @memberof C2S_EnterDesk
     * @instance
     */
    C2S_EnterDesk.prototype.szName = "";

    /**
     * C2S_EnterDesk szPassword.
     * @member {string}szPassword
     * @memberof C2S_EnterDesk
     * @instance
     */
    C2S_EnterDesk.prototype.szPassword = "";

    /**
     * Creates a new C2S_EnterDesk instance using the specified properties.
     * @function create
     * @memberof C2S_EnterDesk
     * @static
     * @param {IC2S_EnterDesk=} [properties] Properties to set
     * @returns {C2S_EnterDesk} C2S_EnterDesk instance
     */
    C2S_EnterDesk.create = function create(properties) {
        return new C2S_EnterDesk(properties);
    };

    /**
     * Encodes the specified C2S_EnterDesk message. Does not implicitly {@link C2S_EnterDesk.verify|verify} messages.
     * @function encode
     * @memberof C2S_EnterDesk
     * @static
     * @param {IC2S_EnterDesk} message C2S_EnterDesk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_EnterDesk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        if (message.szPassword != null && message.hasOwnProperty("szPassword"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.szPassword);
        return writer;
    };

    /**
     * Encodes the specified C2S_EnterDesk message, length delimited. Does not implicitly {@link C2S_EnterDesk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2S_EnterDesk
     * @static
     * @param {IC2S_EnterDesk} message C2S_EnterDesk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_EnterDesk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2S_EnterDesk message from the specified reader or buffer.
     * @function decode
     * @memberof C2S_EnterDesk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2S_EnterDesk} C2S_EnterDesk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_EnterDesk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S_EnterDesk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            case 2:
                message.szPassword = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2S_EnterDesk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2S_EnterDesk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2S_EnterDesk} C2S_EnterDesk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_EnterDesk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2S_EnterDesk message.
     * @function verify
     * @memberof C2S_EnterDesk
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2S_EnterDesk.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        if (message.szPassword != null && message.hasOwnProperty("szPassword"))
            if (!$util.isString(message.szPassword))
                return "szPassword: string expected";
        return null;
    };

    /**
     * Creates a C2S_EnterDesk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2S_EnterDesk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2S_EnterDesk} C2S_EnterDesk
     */
    C2S_EnterDesk.fromObject = function fromObject(object) {
        if (object instanceof $root.C2S_EnterDesk)
            return object;
        var message = new $root.C2S_EnterDesk();
        if (object.szName != null)
            message.szName = String(object.szName);
        if (object.szPassword != null)
            message.szPassword = String(object.szPassword);
        return message;
    };

    /**
     * Creates a plain object from a C2S_EnterDesk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2S_EnterDesk
     * @static
     * @param {C2S_EnterDesk} message C2S_EnterDesk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2S_EnterDesk.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szName = "";
            object.szPassword = "";
        }
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        if (message.szPassword != null && message.hasOwnProperty("szPassword"))
            object.szPassword = message.szPassword;
        return object;
    };

    /**
     * Converts this C2S_EnterDesk to JSON.
     * @function toJSON
     * @memberof C2S_EnterDesk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2S_EnterDesk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2S_EnterDesk;
})();

$root.S2C_EnterDeskSucc = (function() {

    /**
     * Properties of a S2C_EnterDeskSucc.
     * @exports IS2C_EnterDeskSucc
     * @interface IS2C_EnterDeskSucc
     * @property {string} [szName] S2C_EnterDeskSucc szName
     * @property {string} [szPassword] S2C_EnterDeskSucc szPassword
     */

    /**
     * Constructs a new S2C_EnterDeskSucc.
     * @exports S2C_EnterDeskSucc
     * @classdesc Represents a S2C_EnterDeskSucc.
     * @constructor
     * @param {IS2C_EnterDeskSucc=} [properties] Properties to set
     */
    function S2C_EnterDeskSucc(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_EnterDeskSucc szName.
     * @member {string}szName
     * @memberof S2C_EnterDeskSucc
     * @instance
     */
    S2C_EnterDeskSucc.prototype.szName = "";

    /**
     * S2C_EnterDeskSucc szPassword.
     * @member {string}szPassword
     * @memberof S2C_EnterDeskSucc
     * @instance
     */
    S2C_EnterDeskSucc.prototype.szPassword = "";

    /**
     * Creates a new S2C_EnterDeskSucc instance using the specified properties.
     * @function create
     * @memberof S2C_EnterDeskSucc
     * @static
     * @param {IS2C_EnterDeskSucc=} [properties] Properties to set
     * @returns {S2C_EnterDeskSucc} S2C_EnterDeskSucc instance
     */
    S2C_EnterDeskSucc.create = function create(properties) {
        return new S2C_EnterDeskSucc(properties);
    };

    /**
     * Encodes the specified S2C_EnterDeskSucc message. Does not implicitly {@link S2C_EnterDeskSucc.verify|verify} messages.
     * @function encode
     * @memberof S2C_EnterDeskSucc
     * @static
     * @param {IS2C_EnterDeskSucc} message S2C_EnterDeskSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_EnterDeskSucc.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        if (message.szPassword != null && message.hasOwnProperty("szPassword"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.szPassword);
        return writer;
    };

    /**
     * Encodes the specified S2C_EnterDeskSucc message, length delimited. Does not implicitly {@link S2C_EnterDeskSucc.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_EnterDeskSucc
     * @static
     * @param {IS2C_EnterDeskSucc} message S2C_EnterDeskSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_EnterDeskSucc.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_EnterDeskSucc message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_EnterDeskSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_EnterDeskSucc} S2C_EnterDeskSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_EnterDeskSucc.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_EnterDeskSucc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            case 2:
                message.szPassword = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_EnterDeskSucc message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_EnterDeskSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_EnterDeskSucc} S2C_EnterDeskSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_EnterDeskSucc.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_EnterDeskSucc message.
     * @function verify
     * @memberof S2C_EnterDeskSucc
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_EnterDeskSucc.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        if (message.szPassword != null && message.hasOwnProperty("szPassword"))
            if (!$util.isString(message.szPassword))
                return "szPassword: string expected";
        return null;
    };

    /**
     * Creates a S2C_EnterDeskSucc message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_EnterDeskSucc
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_EnterDeskSucc} S2C_EnterDeskSucc
     */
    S2C_EnterDeskSucc.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_EnterDeskSucc)
            return object;
        var message = new $root.S2C_EnterDeskSucc();
        if (object.szName != null)
            message.szName = String(object.szName);
        if (object.szPassword != null)
            message.szPassword = String(object.szPassword);
        return message;
    };

    /**
     * Creates a plain object from a S2C_EnterDeskSucc message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_EnterDeskSucc
     * @static
     * @param {S2C_EnterDeskSucc} message S2C_EnterDeskSucc
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_EnterDeskSucc.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szName = "";
            object.szPassword = "";
        }
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        if (message.szPassword != null && message.hasOwnProperty("szPassword"))
            object.szPassword = message.szPassword;
        return object;
    };

    /**
     * Converts this S2C_EnterDeskSucc to JSON.
     * @function toJSON
     * @memberof S2C_EnterDeskSucc
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_EnterDeskSucc.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_EnterDeskSucc;
})();

$root.S2C_EnterDeskFailed = (function() {

    /**
     * Properties of a S2C_EnterDeskFailed.
     * @exports IS2C_EnterDeskFailed
     * @interface IS2C_EnterDeskFailed
     * @property {string} [szName] S2C_EnterDeskFailed szName
     * @property {ItyErrorInfo} [errInfo] S2C_EnterDeskFailed errInfo
     */

    /**
     * Constructs a new S2C_EnterDeskFailed.
     * @exports S2C_EnterDeskFailed
     * @classdesc Represents a S2C_EnterDeskFailed.
     * @constructor
     * @param {IS2C_EnterDeskFailed=} [properties] Properties to set
     */
    function S2C_EnterDeskFailed(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_EnterDeskFailed szName.
     * @member {string}szName
     * @memberof S2C_EnterDeskFailed
     * @instance
     */
    S2C_EnterDeskFailed.prototype.szName = "";

    /**
     * S2C_EnterDeskFailed errInfo.
     * @member {(ItyErrorInfo|null|undefined)}errInfo
     * @memberof S2C_EnterDeskFailed
     * @instance
     */
    S2C_EnterDeskFailed.prototype.errInfo = null;

    /**
     * Creates a new S2C_EnterDeskFailed instance using the specified properties.
     * @function create
     * @memberof S2C_EnterDeskFailed
     * @static
     * @param {IS2C_EnterDeskFailed=} [properties] Properties to set
     * @returns {S2C_EnterDeskFailed} S2C_EnterDeskFailed instance
     */
    S2C_EnterDeskFailed.create = function create(properties) {
        return new S2C_EnterDeskFailed(properties);
    };

    /**
     * Encodes the specified S2C_EnterDeskFailed message. Does not implicitly {@link S2C_EnterDeskFailed.verify|verify} messages.
     * @function encode
     * @memberof S2C_EnterDeskFailed
     * @static
     * @param {IS2C_EnterDeskFailed} message S2C_EnterDeskFailed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_EnterDeskFailed.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        if (message.errInfo != null && message.hasOwnProperty("errInfo"))
            $root.tyErrorInfo.encode(message.errInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2C_EnterDeskFailed message, length delimited. Does not implicitly {@link S2C_EnterDeskFailed.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_EnterDeskFailed
     * @static
     * @param {IS2C_EnterDeskFailed} message S2C_EnterDeskFailed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_EnterDeskFailed.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_EnterDeskFailed message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_EnterDeskFailed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_EnterDeskFailed} S2C_EnterDeskFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_EnterDeskFailed.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_EnterDeskFailed();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            case 2:
                message.errInfo = $root.tyErrorInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_EnterDeskFailed message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_EnterDeskFailed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_EnterDeskFailed} S2C_EnterDeskFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_EnterDeskFailed.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_EnterDeskFailed message.
     * @function verify
     * @memberof S2C_EnterDeskFailed
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_EnterDeskFailed.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        if (message.errInfo != null && message.hasOwnProperty("errInfo")) {
            var error = $root.tyErrorInfo.verify(message.errInfo);
            if (error)
                return "errInfo." + error;
        }
        return null;
    };

    /**
     * Creates a S2C_EnterDeskFailed message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_EnterDeskFailed
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_EnterDeskFailed} S2C_EnterDeskFailed
     */
    S2C_EnterDeskFailed.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_EnterDeskFailed)
            return object;
        var message = new $root.S2C_EnterDeskFailed();
        if (object.szName != null)
            message.szName = String(object.szName);
        if (object.errInfo != null) {
            if (typeof object.errInfo !== "object")
                throw TypeError(".S2C_EnterDeskFailed.errInfo: object expected");
            message.errInfo = $root.tyErrorInfo.fromObject(object.errInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C_EnterDeskFailed message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_EnterDeskFailed
     * @static
     * @param {S2C_EnterDeskFailed} message S2C_EnterDeskFailed
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_EnterDeskFailed.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szName = "";
            object.errInfo = null;
        }
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        if (message.errInfo != null && message.hasOwnProperty("errInfo"))
            object.errInfo = $root.tyErrorInfo.toObject(message.errInfo, options);
        return object;
    };

    /**
     * Converts this S2C_EnterDeskFailed to JSON.
     * @function toJSON
     * @memberof S2C_EnterDeskFailed
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_EnterDeskFailed.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_EnterDeskFailed;
})();

$root.C2S_ExitDesk = (function() {

    /**
     * Properties of a C2S_ExitDesk.
     * @exports IC2S_ExitDesk
     * @interface IC2S_ExitDesk
     */

    /**
     * Constructs a new C2S_ExitDesk.
     * @exports C2S_ExitDesk
     * @classdesc Represents a C2S_ExitDesk.
     * @constructor
     * @param {IC2S_ExitDesk=} [properties] Properties to set
     */
    function C2S_ExitDesk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2S_ExitDesk instance using the specified properties.
     * @function create
     * @memberof C2S_ExitDesk
     * @static
     * @param {IC2S_ExitDesk=} [properties] Properties to set
     * @returns {C2S_ExitDesk} C2S_ExitDesk instance
     */
    C2S_ExitDesk.create = function create(properties) {
        return new C2S_ExitDesk(properties);
    };

    /**
     * Encodes the specified C2S_ExitDesk message. Does not implicitly {@link C2S_ExitDesk.verify|verify} messages.
     * @function encode
     * @memberof C2S_ExitDesk
     * @static
     * @param {IC2S_ExitDesk} message C2S_ExitDesk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_ExitDesk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2S_ExitDesk message, length delimited. Does not implicitly {@link C2S_ExitDesk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2S_ExitDesk
     * @static
     * @param {IC2S_ExitDesk} message C2S_ExitDesk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_ExitDesk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2S_ExitDesk message from the specified reader or buffer.
     * @function decode
     * @memberof C2S_ExitDesk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2S_ExitDesk} C2S_ExitDesk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_ExitDesk.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S_ExitDesk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2S_ExitDesk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2S_ExitDesk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2S_ExitDesk} C2S_ExitDesk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_ExitDesk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2S_ExitDesk message.
     * @function verify
     * @memberof C2S_ExitDesk
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2S_ExitDesk.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2S_ExitDesk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2S_ExitDesk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2S_ExitDesk} C2S_ExitDesk
     */
    C2S_ExitDesk.fromObject = function fromObject(object) {
        if (object instanceof $root.C2S_ExitDesk)
            return object;
        return new $root.C2S_ExitDesk();
    };

    /**
     * Creates a plain object from a C2S_ExitDesk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2S_ExitDesk
     * @static
     * @param {C2S_ExitDesk} message C2S_ExitDesk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2S_ExitDesk.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2S_ExitDesk to JSON.
     * @function toJSON
     * @memberof C2S_ExitDesk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2S_ExitDesk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2S_ExitDesk;
})();

$root.S2C_ExitDeskSucc = (function() {

    /**
     * Properties of a S2C_ExitDeskSucc.
     * @exports IS2C_ExitDeskSucc
     * @interface IS2C_ExitDeskSucc
     * @property {string} [szName] S2C_ExitDeskSucc szName
     */

    /**
     * Constructs a new S2C_ExitDeskSucc.
     * @exports S2C_ExitDeskSucc
     * @classdesc Represents a S2C_ExitDeskSucc.
     * @constructor
     * @param {IS2C_ExitDeskSucc=} [properties] Properties to set
     */
    function S2C_ExitDeskSucc(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_ExitDeskSucc szName.
     * @member {string}szName
     * @memberof S2C_ExitDeskSucc
     * @instance
     */
    S2C_ExitDeskSucc.prototype.szName = "";

    /**
     * Creates a new S2C_ExitDeskSucc instance using the specified properties.
     * @function create
     * @memberof S2C_ExitDeskSucc
     * @static
     * @param {IS2C_ExitDeskSucc=} [properties] Properties to set
     * @returns {S2C_ExitDeskSucc} S2C_ExitDeskSucc instance
     */
    S2C_ExitDeskSucc.create = function create(properties) {
        return new S2C_ExitDeskSucc(properties);
    };

    /**
     * Encodes the specified S2C_ExitDeskSucc message. Does not implicitly {@link S2C_ExitDeskSucc.verify|verify} messages.
     * @function encode
     * @memberof S2C_ExitDeskSucc
     * @static
     * @param {IS2C_ExitDeskSucc} message S2C_ExitDeskSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_ExitDeskSucc.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        return writer;
    };

    /**
     * Encodes the specified S2C_ExitDeskSucc message, length delimited. Does not implicitly {@link S2C_ExitDeskSucc.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_ExitDeskSucc
     * @static
     * @param {IS2C_ExitDeskSucc} message S2C_ExitDeskSucc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_ExitDeskSucc.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_ExitDeskSucc message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_ExitDeskSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_ExitDeskSucc} S2C_ExitDeskSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_ExitDeskSucc.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_ExitDeskSucc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_ExitDeskSucc message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_ExitDeskSucc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_ExitDeskSucc} S2C_ExitDeskSucc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_ExitDeskSucc.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_ExitDeskSucc message.
     * @function verify
     * @memberof S2C_ExitDeskSucc
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_ExitDeskSucc.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        return null;
    };

    /**
     * Creates a S2C_ExitDeskSucc message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_ExitDeskSucc
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_ExitDeskSucc} S2C_ExitDeskSucc
     */
    S2C_ExitDeskSucc.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_ExitDeskSucc)
            return object;
        var message = new $root.S2C_ExitDeskSucc();
        if (object.szName != null)
            message.szName = String(object.szName);
        return message;
    };

    /**
     * Creates a plain object from a S2C_ExitDeskSucc message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_ExitDeskSucc
     * @static
     * @param {S2C_ExitDeskSucc} message S2C_ExitDeskSucc
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_ExitDeskSucc.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.szName = "";
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        return object;
    };

    /**
     * Converts this S2C_ExitDeskSucc to JSON.
     * @function toJSON
     * @memberof S2C_ExitDeskSucc
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_ExitDeskSucc.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_ExitDeskSucc;
})();

$root.S2C_ExitDeskFailed = (function() {

    /**
     * Properties of a S2C_ExitDeskFailed.
     * @exports IS2C_ExitDeskFailed
     * @interface IS2C_ExitDeskFailed
     * @property {string} [szName] S2C_ExitDeskFailed szName
     * @property {ItyErrorInfo} [errInfo] S2C_ExitDeskFailed errInfo
     */

    /**
     * Constructs a new S2C_ExitDeskFailed.
     * @exports S2C_ExitDeskFailed
     * @classdesc Represents a S2C_ExitDeskFailed.
     * @constructor
     * @param {IS2C_ExitDeskFailed=} [properties] Properties to set
     */
    function S2C_ExitDeskFailed(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_ExitDeskFailed szName.
     * @member {string}szName
     * @memberof S2C_ExitDeskFailed
     * @instance
     */
    S2C_ExitDeskFailed.prototype.szName = "";

    /**
     * S2C_ExitDeskFailed errInfo.
     * @member {(ItyErrorInfo|null|undefined)}errInfo
     * @memberof S2C_ExitDeskFailed
     * @instance
     */
    S2C_ExitDeskFailed.prototype.errInfo = null;

    /**
     * Creates a new S2C_ExitDeskFailed instance using the specified properties.
     * @function create
     * @memberof S2C_ExitDeskFailed
     * @static
     * @param {IS2C_ExitDeskFailed=} [properties] Properties to set
     * @returns {S2C_ExitDeskFailed} S2C_ExitDeskFailed instance
     */
    S2C_ExitDeskFailed.create = function create(properties) {
        return new S2C_ExitDeskFailed(properties);
    };

    /**
     * Encodes the specified S2C_ExitDeskFailed message. Does not implicitly {@link S2C_ExitDeskFailed.verify|verify} messages.
     * @function encode
     * @memberof S2C_ExitDeskFailed
     * @static
     * @param {IS2C_ExitDeskFailed} message S2C_ExitDeskFailed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_ExitDeskFailed.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szName != null && message.hasOwnProperty("szName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szName);
        if (message.errInfo != null && message.hasOwnProperty("errInfo"))
            $root.tyErrorInfo.encode(message.errInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2C_ExitDeskFailed message, length delimited. Does not implicitly {@link S2C_ExitDeskFailed.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_ExitDeskFailed
     * @static
     * @param {IS2C_ExitDeskFailed} message S2C_ExitDeskFailed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_ExitDeskFailed.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_ExitDeskFailed message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_ExitDeskFailed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_ExitDeskFailed} S2C_ExitDeskFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_ExitDeskFailed.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_ExitDeskFailed();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szName = reader.string();
                break;
            case 2:
                message.errInfo = $root.tyErrorInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_ExitDeskFailed message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_ExitDeskFailed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_ExitDeskFailed} S2C_ExitDeskFailed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_ExitDeskFailed.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_ExitDeskFailed message.
     * @function verify
     * @memberof S2C_ExitDeskFailed
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_ExitDeskFailed.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szName != null && message.hasOwnProperty("szName"))
            if (!$util.isString(message.szName))
                return "szName: string expected";
        if (message.errInfo != null && message.hasOwnProperty("errInfo")) {
            var error = $root.tyErrorInfo.verify(message.errInfo);
            if (error)
                return "errInfo." + error;
        }
        return null;
    };

    /**
     * Creates a S2C_ExitDeskFailed message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_ExitDeskFailed
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_ExitDeskFailed} S2C_ExitDeskFailed
     */
    S2C_ExitDeskFailed.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_ExitDeskFailed)
            return object;
        var message = new $root.S2C_ExitDeskFailed();
        if (object.szName != null)
            message.szName = String(object.szName);
        if (object.errInfo != null) {
            if (typeof object.errInfo !== "object")
                throw TypeError(".S2C_ExitDeskFailed.errInfo: object expected");
            message.errInfo = $root.tyErrorInfo.fromObject(object.errInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2C_ExitDeskFailed message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_ExitDeskFailed
     * @static
     * @param {S2C_ExitDeskFailed} message S2C_ExitDeskFailed
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_ExitDeskFailed.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szName = "";
            object.errInfo = null;
        }
        if (message.szName != null && message.hasOwnProperty("szName"))
            object.szName = message.szName;
        if (message.errInfo != null && message.hasOwnProperty("errInfo"))
            object.errInfo = $root.tyErrorInfo.toObject(message.errInfo, options);
        return object;
    };

    /**
     * Converts this S2C_ExitDeskFailed to JSON.
     * @function toJSON
     * @memberof S2C_ExitDeskFailed
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_ExitDeskFailed.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_ExitDeskFailed;
})();

$root.S2C_UserGameInfo = (function() {

    /**
     * Properties of a S2C_UserGameInfo.
     * @exports IS2C_UserGameInfo
     * @interface IS2C_UserGameInfo
     * @property {string} [szNickName] S2C_UserGameInfo szNickName
     * @property {number} [nUserID] S2C_UserGameInfo nUserID
     * @property {number|Long} [nMoney] S2C_UserGameInfo nMoney
     * @property {number} [nUserFaceID] S2C_UserGameInfo nUserFaceID
     * @property {string} [szNowIP] S2C_UserGameInfo szNowIP
     * @property {number} [nPlayTimeCount] S2C_UserGameInfo nPlayTimeCount
     * @property {number} [nPlayGameCount] S2C_UserGameInfo nPlayGameCount
     * @property {number} [nWinGameCount] S2C_UserGameInfo nWinGameCount
     * @property {number} [nRunGameCount] S2C_UserGameInfo nRunGameCount
     * @property {boolean} [isMale] S2C_UserGameInfo isMale
     * @property {string} [szGameName] S2C_UserGameInfo szGameName
     * @property {number} [nDeskPlace] S2C_UserGameInfo nDeskPlace
     * @property {number} [nState] S2C_UserGameInfo nState
     */

    /**
     * Constructs a new S2C_UserGameInfo.
     * @exports S2C_UserGameInfo
     * @classdesc Represents a S2C_UserGameInfo.
     * @constructor
     * @param {IS2C_UserGameInfo=} [properties] Properties to set
     */
    function S2C_UserGameInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_UserGameInfo szNickName.
     * @member {string}szNickName
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.szNickName = "";

    /**
     * S2C_UserGameInfo nUserID.
     * @member {number}nUserID
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.nUserID = 0;

    /**
     * S2C_UserGameInfo nMoney.
     * @member {number|Long}nMoney
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.nMoney = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * S2C_UserGameInfo nUserFaceID.
     * @member {number}nUserFaceID
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.nUserFaceID = 0;

    /**
     * S2C_UserGameInfo szNowIP.
     * @member {string}szNowIP
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.szNowIP = "";

    /**
     * S2C_UserGameInfo nPlayTimeCount.
     * @member {number}nPlayTimeCount
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.nPlayTimeCount = 0;

    /**
     * S2C_UserGameInfo nPlayGameCount.
     * @member {number}nPlayGameCount
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.nPlayGameCount = 0;

    /**
     * S2C_UserGameInfo nWinGameCount.
     * @member {number}nWinGameCount
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.nWinGameCount = 0;

    /**
     * S2C_UserGameInfo nRunGameCount.
     * @member {number}nRunGameCount
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.nRunGameCount = 0;

    /**
     * S2C_UserGameInfo isMale.
     * @member {boolean}isMale
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.isMale = false;

    /**
     * S2C_UserGameInfo szGameName.
     * @member {string}szGameName
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.szGameName = "";

    /**
     * S2C_UserGameInfo nDeskPlace.
     * @member {number}nDeskPlace
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.nDeskPlace = 0;

    /**
     * S2C_UserGameInfo nState.
     * @member {number}nState
     * @memberof S2C_UserGameInfo
     * @instance
     */
    S2C_UserGameInfo.prototype.nState = 0;

    /**
     * Creates a new S2C_UserGameInfo instance using the specified properties.
     * @function create
     * @memberof S2C_UserGameInfo
     * @static
     * @param {IS2C_UserGameInfo=} [properties] Properties to set
     * @returns {S2C_UserGameInfo} S2C_UserGameInfo instance
     */
    S2C_UserGameInfo.create = function create(properties) {
        return new S2C_UserGameInfo(properties);
    };

    /**
     * Encodes the specified S2C_UserGameInfo message. Does not implicitly {@link S2C_UserGameInfo.verify|verify} messages.
     * @function encode
     * @memberof S2C_UserGameInfo
     * @static
     * @param {IS2C_UserGameInfo} message S2C_UserGameInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_UserGameInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.szNickName != null && message.hasOwnProperty("szNickName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.szNickName);
        if (message.nUserID != null && message.hasOwnProperty("nUserID"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.nUserID);
        if (message.nMoney != null && message.hasOwnProperty("nMoney"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.nMoney);
        if (message.nUserFaceID != null && message.hasOwnProperty("nUserFaceID"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.nUserFaceID);
        if (message.szNowIP != null && message.hasOwnProperty("szNowIP"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.szNowIP);
        if (message.nPlayTimeCount != null && message.hasOwnProperty("nPlayTimeCount"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.nPlayTimeCount);
        if (message.nPlayGameCount != null && message.hasOwnProperty("nPlayGameCount"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.nPlayGameCount);
        if (message.nWinGameCount != null && message.hasOwnProperty("nWinGameCount"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.nWinGameCount);
        if (message.nRunGameCount != null && message.hasOwnProperty("nRunGameCount"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.nRunGameCount);
        if (message.isMale != null && message.hasOwnProperty("isMale"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isMale);
        if (message.szGameName != null && message.hasOwnProperty("szGameName"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.szGameName);
        if (message.nDeskPlace != null && message.hasOwnProperty("nDeskPlace"))
            writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.nDeskPlace);
        if (message.nState != null && message.hasOwnProperty("nState"))
            writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.nState);
        return writer;
    };

    /**
     * Encodes the specified S2C_UserGameInfo message, length delimited. Does not implicitly {@link S2C_UserGameInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_UserGameInfo
     * @static
     * @param {IS2C_UserGameInfo} message S2C_UserGameInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_UserGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_UserGameInfo message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_UserGameInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_UserGameInfo} S2C_UserGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_UserGameInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_UserGameInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.szNickName = reader.string();
                break;
            case 2:
                message.nUserID = reader.uint32();
                break;
            case 3:
                message.nMoney = reader.uint64();
                break;
            case 4:
                message.nUserFaceID = reader.uint32();
                break;
            case 5:
                message.szNowIP = reader.string();
                break;
            case 6:
                message.nPlayTimeCount = reader.uint32();
                break;
            case 7:
                message.nPlayGameCount = reader.uint32();
                break;
            case 8:
                message.nWinGameCount = reader.uint32();
                break;
            case 9:
                message.nRunGameCount = reader.uint32();
                break;
            case 10:
                message.isMale = reader.bool();
                break;
            case 11:
                message.szGameName = reader.string();
                break;
            case 12:
                message.nDeskPlace = reader.uint32();
                break;
            case 13:
                message.nState = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_UserGameInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_UserGameInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_UserGameInfo} S2C_UserGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_UserGameInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_UserGameInfo message.
     * @function verify
     * @memberof S2C_UserGameInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_UserGameInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.szNickName != null && message.hasOwnProperty("szNickName"))
            if (!$util.isString(message.szNickName))
                return "szNickName: string expected";
        if (message.nUserID != null && message.hasOwnProperty("nUserID"))
            if (!$util.isInteger(message.nUserID))
                return "nUserID: integer expected";
        if (message.nMoney != null && message.hasOwnProperty("nMoney"))
            if (!$util.isInteger(message.nMoney) && !(message.nMoney && $util.isInteger(message.nMoney.low) && $util.isInteger(message.nMoney.high)))
                return "nMoney: integer|Long expected";
        if (message.nUserFaceID != null && message.hasOwnProperty("nUserFaceID"))
            if (!$util.isInteger(message.nUserFaceID))
                return "nUserFaceID: integer expected";
        if (message.szNowIP != null && message.hasOwnProperty("szNowIP"))
            if (!$util.isString(message.szNowIP))
                return "szNowIP: string expected";
        if (message.nPlayTimeCount != null && message.hasOwnProperty("nPlayTimeCount"))
            if (!$util.isInteger(message.nPlayTimeCount))
                return "nPlayTimeCount: integer expected";
        if (message.nPlayGameCount != null && message.hasOwnProperty("nPlayGameCount"))
            if (!$util.isInteger(message.nPlayGameCount))
                return "nPlayGameCount: integer expected";
        if (message.nWinGameCount != null && message.hasOwnProperty("nWinGameCount"))
            if (!$util.isInteger(message.nWinGameCount))
                return "nWinGameCount: integer expected";
        if (message.nRunGameCount != null && message.hasOwnProperty("nRunGameCount"))
            if (!$util.isInteger(message.nRunGameCount))
                return "nRunGameCount: integer expected";
        if (message.isMale != null && message.hasOwnProperty("isMale"))
            if (typeof message.isMale !== "boolean")
                return "isMale: boolean expected";
        if (message.szGameName != null && message.hasOwnProperty("szGameName"))
            if (!$util.isString(message.szGameName))
                return "szGameName: string expected";
        if (message.nDeskPlace != null && message.hasOwnProperty("nDeskPlace"))
            if (!$util.isInteger(message.nDeskPlace))
                return "nDeskPlace: integer expected";
        if (message.nState != null && message.hasOwnProperty("nState"))
            if (!$util.isInteger(message.nState))
                return "nState: integer expected";
        return null;
    };

    /**
     * Creates a S2C_UserGameInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_UserGameInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_UserGameInfo} S2C_UserGameInfo
     */
    S2C_UserGameInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_UserGameInfo)
            return object;
        var message = new $root.S2C_UserGameInfo();
        if (object.szNickName != null)
            message.szNickName = String(object.szNickName);
        if (object.nUserID != null)
            message.nUserID = object.nUserID >>> 0;
        if (object.nMoney != null)
            if ($util.Long)
                (message.nMoney = $util.Long.fromValue(object.nMoney)).unsigned = true;
            else if (typeof object.nMoney === "string")
                message.nMoney = parseInt(object.nMoney, 10);
            else if (typeof object.nMoney === "number")
                message.nMoney = object.nMoney;
            else if (typeof object.nMoney === "object")
                message.nMoney = new $util.LongBits(object.nMoney.low >>> 0, object.nMoney.high >>> 0).toNumber(true);
        if (object.nUserFaceID != null)
            message.nUserFaceID = object.nUserFaceID >>> 0;
        if (object.szNowIP != null)
            message.szNowIP = String(object.szNowIP);
        if (object.nPlayTimeCount != null)
            message.nPlayTimeCount = object.nPlayTimeCount >>> 0;
        if (object.nPlayGameCount != null)
            message.nPlayGameCount = object.nPlayGameCount >>> 0;
        if (object.nWinGameCount != null)
            message.nWinGameCount = object.nWinGameCount >>> 0;
        if (object.nRunGameCount != null)
            message.nRunGameCount = object.nRunGameCount >>> 0;
        if (object.isMale != null)
            message.isMale = Boolean(object.isMale);
        if (object.szGameName != null)
            message.szGameName = String(object.szGameName);
        if (object.nDeskPlace != null)
            message.nDeskPlace = object.nDeskPlace >>> 0;
        if (object.nState != null)
            message.nState = object.nState >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a S2C_UserGameInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_UserGameInfo
     * @static
     * @param {S2C_UserGameInfo} message S2C_UserGameInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_UserGameInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.szNickName = "";
            object.nUserID = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.nMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nMoney = options.longs === String ? "0" : 0;
            object.nUserFaceID = 0;
            object.szNowIP = "";
            object.nPlayTimeCount = 0;
            object.nPlayGameCount = 0;
            object.nWinGameCount = 0;
            object.nRunGameCount = 0;
            object.isMale = false;
            object.szGameName = "";
            object.nDeskPlace = 0;
            object.nState = 0;
        }
        if (message.szNickName != null && message.hasOwnProperty("szNickName"))
            object.szNickName = message.szNickName;
        if (message.nUserID != null && message.hasOwnProperty("nUserID"))
            object.nUserID = message.nUserID;
        if (message.nMoney != null && message.hasOwnProperty("nMoney"))
            if (typeof message.nMoney === "number")
                object.nMoney = options.longs === String ? String(message.nMoney) : message.nMoney;
            else
                object.nMoney = options.longs === String ? $util.Long.prototype.toString.call(message.nMoney) : options.longs === Number ? new $util.LongBits(message.nMoney.low >>> 0, message.nMoney.high >>> 0).toNumber(true) : message.nMoney;
        if (message.nUserFaceID != null && message.hasOwnProperty("nUserFaceID"))
            object.nUserFaceID = message.nUserFaceID;
        if (message.szNowIP != null && message.hasOwnProperty("szNowIP"))
            object.szNowIP = message.szNowIP;
        if (message.nPlayTimeCount != null && message.hasOwnProperty("nPlayTimeCount"))
            object.nPlayTimeCount = message.nPlayTimeCount;
        if (message.nPlayGameCount != null && message.hasOwnProperty("nPlayGameCount"))
            object.nPlayGameCount = message.nPlayGameCount;
        if (message.nWinGameCount != null && message.hasOwnProperty("nWinGameCount"))
            object.nWinGameCount = message.nWinGameCount;
        if (message.nRunGameCount != null && message.hasOwnProperty("nRunGameCount"))
            object.nRunGameCount = message.nRunGameCount;
        if (message.isMale != null && message.hasOwnProperty("isMale"))
            object.isMale = message.isMale;
        if (message.szGameName != null && message.hasOwnProperty("szGameName"))
            object.szGameName = message.szGameName;
        if (message.nDeskPlace != null && message.hasOwnProperty("nDeskPlace"))
            object.nDeskPlace = message.nDeskPlace;
        if (message.nState != null && message.hasOwnProperty("nState"))
            object.nState = message.nState;
        return object;
    };

    /**
     * Converts this S2C_UserGameInfo to JSON.
     * @function toJSON
     * @memberof S2C_UserGameInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_UserGameInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_UserGameInfo;
})();

module.exports = $root;
