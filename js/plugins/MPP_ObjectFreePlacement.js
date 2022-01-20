//=============================================================================
// MPP_ObjectFreePlacement.js
//=============================================================================
// Copyright (c) 2019 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 【ver.1.1】イベントを自由に設置できる機能を追加します。
 * @author 木星ペンギン
 *
 * @help プラグインコマンド:
 *   PlacementObj obId           # プレイヤーの前方にオブジェクト設置
 *   PlacementObjPos obId x y    # 指定した座標にオブジェクト設置
 *   EraseObj evId               # 指定したオブジェクトを削除
 *   ClearObj mapId              # オブジェクトの全削除
 * 
 * ※ プラグインコマンドにて指定する値には変数が使用できます。
 *    v[n] と記述することでn番の変数の値を参照します。
 * 
 * 設置するイベントのメモ:
 *   <PlcCdt:n>                  # 設置条件の番号
 *   
 * スクリプト全般:
 *   $gamePlayer.canPlcObj(obID) # プレイヤーがオブジェクトを設置できるかどうか
 *   $gamePlayer.canPlcObjPos(obID, x, y)
 *                               # 座標にオブジェクトを設置できるかどうか
 *   $gamePlayer.plcObjId()      # 直前に設置したオブジェクトのイベントID
 *   $gameMap.plcObjId(x, y)     # 座標にあるオブジェクトのIDを取得
 * 
 * ================================================================
 * ▼プラグインコマンド詳細
 * --------------------------------
 *  〇 PlacementObj obId
 *      obId : 設置するオブジェクトID
 *  
 *   プレイヤーの位置から向いている方向へ設置距離の位置に
 *   オブジェクトを設置します。
 *   
 *   設置されたオブジェクトには使用されていない適当なイベントIDが
 *   割り当てられます。
 *    
 * --------------------------------
 *  〇 PlacementObjPos obId x y
 *      obId : 設置するオブジェクトID
 *      x    : 設置するX座標
 *      y    : 設置するY座標
 *   
 *   指定した座標にオブジェクト設置します。
 *   設置条件の設置距離は無視されます。
 *   
 *   設置されたオブジェクトには使用されていない適当なイベントIDが
 *   割り当てられます。
 *    
 * --------------------------------
 *  〇 EraseObj evId
 *      evId : イベントID
 * 
 *   指定したイベントIDのオブジェクトを削除します。
 * 
 * --------------------------------
 *  〇 ClearObj mapId
 *      mapId : マップID(-1:全マップ / 0or未設定:現マップ)
 * 
 *   指定したマップの全オブジェクトを削除します。
 * 
 * 
 * ================================================================
 * ▼スクリプト全般詳細
 * --------------------------------
 *  〇 $gamePlayer.canPlcObj(obID)
 *      obID : オブジェクトID
 *      
 *   プレイヤーが現在の位置から指定したIDのオブジェクトを
 *   設置できるかどうかを返します。
 *   
 * --------------------------------
 *  〇 $gamePlayer.canPlcObjPos(obID, x, y)
 *      obID : オブジェクトID
 *      x    : X座標
 *      y    : Y座標
 *      
 *   指定した座標(x, y)に指定したIDのオブジェクトが設置できるかどうかを返します。
 *   
 * --------------------------------
 *  〇 $gamePlayer.plcObjId()
 *      
 *   直前に設置したオブジェクトに割り当てられたイベントIDを返します。
 *   設置条件が合わず設置されなかった場合は0を返します。
 * 
 * --------------------------------
 *  〇 $gameMap.plcObjId(x, y)
 *      x : X座標
 *      y : Y座標
 *      
 *   指定した座標(x, y)にあるオブジェクトのIDを取得します。
 *   オブジェクトがない場合は0を返します。
 *   複数のオブジェクトがある場合は、一番若いIDを返します。
 * 
 * 
 * ================================================================
 * ▼プラグインパラメータ詳細
 * --------------------------------
 *  〇オブジェクトとして読み込むマップのID[Objects Map Id]
 *   指定したマップのイベントが自由設置のオブジェクトとなります。
 *   イベントIDがそのままオブジェクトIDとなります。
 * 
 *  〇設置条件[Conditions]
 *   通行判定[Passable?]はプレイヤーの位置から設置距離まで判定を行います。
 *   設置距離が0の場合はプレイヤーと同位置に設置します。
 *   
 *   衝突判定[Collide?]・地形タグ[Tags]・リージョンID[Regions]は
 *   設置位置のみ判定します。
 * 
 *  〇地形タグ/リージョンIDの配列指定
 *   数値を配列で設定する際、
 *   n-m と表記することでnからmまでの数値を指定できます。
 *   (例 : 1-4,8,10-12 => 1,2,3,4,8,10,11,12)
 * 
 *  〇コマンドの名前変更について
 *   プラグインコマンドや注釈で使用するコマンドは、
 *   プラグインパラメータから変更できます。
 *  
 *   コマンドを短くしたり日本語にしたりなどして、
 *   自分が使いやすいようにしてください。
 *  
 *   プラグインコマンドのみ、変更後もデフォルトのコマンドでも動作します。
 * 
 * 
 * ================================================================
 * ▼その他
 *  〇設置したオブジェクトが[イベントの一時消去]を実行した場合、
 *    そのオブジェクトは削除されます。
 * 
 *  〇イベントの画像にタイル画像を使う場合、
 *    設置したマップのタイル画像が適用されます。
 * 
 *  〇他のプラグインで、イベントのメモや注釈を使った機能には対応しています。
 *    ただし、他サイトさんのプラグインには対応できない可能性があります。
 * 
 * ================================================================
 * 制作 : 木星ペンギン
 * URL  : http://woodpenguin.blog.fc2.com/
 * mail : wood_penguin@yahoo.co.jp
 * 
 * @param Objects Map Id
 * @type number
 * @min 1
 * @desc オブジェクトとして読み込むマップのID
 * @default 1
 * 
 * @param Conditions
 * @type struct<Condition>[]
 * @desc 設置条件の配列
 * (上から順に番号 1,2,3... となります)
 * @default []
 * 
 * @param === Command ===
 * 
 * @param Plugin Commands
 * @type struct<Plugin>
 * @desc プラグインコマンド名
 * @default {"PlacementObj":"PlacementObj","PlacementObjPos":"PlacementObjPos","EraseObj":"EraseObj","ClearObj":"ClearObj"}
 * @parent === Command ===
 * 
 * @param Event Metadata
 * @type struct<EventMeta>
 * @desc イベントメモ欄のデータ名
 * @default {"PlacementCondition":"PlcCdt"}
 * @parent === Command ===
 * 
 *
 *
 */

/*~struct~Condition:
 * @param Distance
 * @type number
 * @desc 設置距離
 * @default 1
 * 
 * @param Passable?
 * @type boolean
 * @desc 通行判定を行うかどうか
 * @default true
 * 
 * @param Collide?
 * @type boolean
 * @desc 他のイベント(設置オブジェクト含む)との衝突判定を行うかどうか
 * @default true
 * 
 * @param Tags
 * @desc 設置可能な地形タグ
 * (範囲指定可 / 未設定で指定なし)
 * @default 
 * 
 * @param Regions
 * @desc 設置可能なリージョンID
 * (範囲指定可 / 未設定で指定なし)
 * @default 
 * 
 */

/*~struct~Plugin:
 * @param PlacementObj
 * @desc プレイヤーの前方にオブジェクトを設置
 * @default PlacementObj
 * 
 * @param PlacementObjPos
 * @desc 指定した座標(x,y)にオブジェクトを設置
 * @default PlacementObjPos
 * 
 * @param EraseObj
 * @desc オブジェクトを削除
 * @default EraseObj
 * 
 * @param ClearObj
 * @desc オブジェクトの全削除
 * @default ClearObj
 * 
 */

/*~struct~EventMeta:
 * @param PlacementCondition
 * @desc 設置条件の番号
 * @default PlcCdt
 */

function Game_Mpp_PlacementObject() {
    this.initialize.apply(this, arguments);
}

(function() {

var MPPlugin = {};

(function() {
    
    var parameters = PluginManager.parameters('MPP_ObjectFreePlacement');
    
    function convertParam(param) {
        var result = [];
        if (param) {
            var data = param.split(',');
            for (var i = 0; i < data.length; i++) {
                if (/(\d+)\s*-\s*(\d+)/.test(data[i])) {
                    for (var n = Number(RegExp.$1); n <= Number(RegExp.$2); n++) {
                        result.push(n);
                    }
                } else {
                    result.push(Number(data[i]));
                }
            }
        }
        return result;
    };

    MPPlugin.ObjectsMapId = Number(parameters['Objects Map Id']);
    var conditions = JSON.parse(parameters['Conditions']);
    MPPlugin.Conditions = [];
    for (var i = 0; i < conditions.length; i++) {
        var c = JSON.parse(conditions[i]);
        MPPlugin.Conditions.push({
            Distance: Number(c["Distance"]),
            Passable: !!eval(c["Passable?"]),
            Collide:  !!eval(c["Collide?"]),
            Tags:     convertParam(c["Tags"]),
            Regions:  convertParam(c["Regions"])
        });
    }
    
    MPPlugin.PluginCommands = JSON.parse(parameters['Plugin Commands']);
    MPPlugin.EventMetadata = JSON.parse(parameters['Event Metadata']);

})();

var Alias = {};

//-----------------------------------------------------------------------------
// MPP_FreeObjects

var MPP_FreeObjects = [];

//-----------------------------------------------------------------------------
// Scene_Boot

//18
Alias.ScBo_create = Scene_Boot.prototype.create;
Scene_Boot.prototype.create = function() {
    Alias.ScBo_create.call(this);
    DataManager.loadMapData(MPPlugin.ObjectsMapId);
};

//42
Alias.ScBo_isReady = Scene_Boot.prototype.isReady;
Scene_Boot.prototype.isReady = function() {
    if (!this._objMapLoaded && DataManager.isMapLoaded()) {
        this.onObjMapLoaded();
        this._objMapLoaded = true;
    }
    return this._objMapLoaded && Alias.ScBo_isReady.call(this);
};

Scene_Boot.prototype.onObjMapLoaded = function() {
    if (!$dataMap) {
        throw new Error('The map data is not available');
    }
    MPP_FreeObjects = $dataMap.events;
};

//-----------------------------------------------------------------------------
// Game_Map

//37
Alias.GaMa_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
    Alias.GaMa_setup.call(this, mapId);
    this._allPlacementObjects = this._allPlacementObjects || {};
    this._allPlacementObjects[mapId] = this._allPlacementObjects[mapId] || {};
    this._placementObjects = this._allPlacementObjects[mapId];
    this.addedPlacementObjects = [];
    this.removePlacementObjects = [];
};

//163
Alias.GaMa_events = Game_Map.prototype.events;
Game_Map.prototype.events = function() {
    return Alias.GaMa_events.call(this).concat(this.placementObjects());
};

Game_Map.prototype.placementObjects = function() {
    var list = [];
    for (var id in this._placementObjects) {
        list.push(this._placementObjects[id]);
    }
    return list;
};

Game_Map.prototype.plcObjId = function(x, y) {
    for (var id in this._placementObjects) {
        var object = this._placementObjects[id];
        if (object && object.pos(x, y)) {
            return object.eventId();
        }
    }
    return 0;
};

//169
Alias.GaMa_event = Game_Map.prototype.event;
Game_Map.prototype.event = function(eventId) {
    return Alias.GaMa_event.call(this, eventId) || this._placementObjects[eventId];
};

Game_Map.prototype.getFreeEventId = function() {
    for (var i = 1;; i++) {
        if (!this.event(i)) return i;
    };
};

Game_Map.prototype.addPlacementObject = function(objectId, x, y) {
    var eventId = this.getFreeEventId();
    var obj = new Game_Mpp_PlacementObject(this._mapId, eventId, objectId);
    obj.setPosition(x, y);
    this._placementObjects[eventId] = obj;
    this.addedPlacementObjects.push(obj);
    return eventId;
};

//173
Alias.GaMa_eraseEvent = Game_Map.prototype.eraseEvent;
Game_Map.prototype.eraseEvent = function(eventId) {
    if (this._placementObjects[eventId]) {
        this.erasePlacementObject(eventId);
    } else {
        Alias.GaMa_eraseEvent.call(this, eventId);
    }
};

Game_Map.prototype.erasePlacementObject = function(eventId) {
    var object = this._placementObjects[eventId];
    if (object) {
        this.removePlacementObjects.push(object);
        delete this._placementObjects[eventId];
    }
};

Game_Map.prototype.checkPassage_ofp = function(x, y) {
    var flags = this.tilesetFlags();
    var tiles = this.allTiles(x, y);
    for (var i = 0; i < tiles.length; i++) {
        var flag = flags[tiles[i]];
        if ((flag & 0x10) !== 0)  // [*] No effect on passage
            continue;
        return (flag & 0x0f) !== 0x0f;
    }
    return false;
};

Game_Map.prototype.clearPlacementObjects = function(mapId) {
    if (mapId < 0)  this._allPlacementObjects = {};
    if (mapId <= 0) mapId = this._mapId;
    delete this._allPlacementObjects[mapId];
    if (mapId === this._mapId) {
        for (var id in this._placementObjects) {
            this.erasePlacementObject(id);
        }
        this._allPlacementObjects[mapId] = {};
        this._placementObjects = this._allPlacementObjects[mapId];
    }
};

//733
Alias.GaMa_unlockEvent = Game_Map.prototype.unlockEvent;
Game_Map.prototype.unlockEvent = function(eventId) {
    Alias.GaMa_unlockEvent.call(this, eventId);
    if (this._placementObjects[eventId]) {
        this._placementObjects[eventId].unlock();
    }
};

//-----------------------------------------------------------------------------
// Game_Player

Game_Player.prototype.canPlcObj = function(obId) {
    return this.placementObj(obId, true);
};

Game_Player.prototype.canPlcObjPos = function(obId, x, y) {
    return this.placementObjPos(obId, x, y, true);
};

Game_Player.prototype.placementObj = function(obId, test) {
    this._plcObjId = 0;
    var x1 = this._x, y1 = this._y;
    if (!$gameMap.isValid(x1, y1)) return false;
    var c = this.getObjCondition(obId);
    if (c) {
        var d = this.direction();
        for (var i = 0; i < c.Distance; i++) {
            var x2 = $gameMap.roundXWithDirection(x1, d);
            var y2 = $gameMap.roundYWithDirection(y1, d);
            if (c.Passable && !this.isMapPassable(x1, y1, d)) {
                return false;
            }
            x1 = x2;
            y1 = y2;
        }
        if (!this.placementObjPos(obId, x1, y1, true)) {
            return false;
        }
    }
    if (!test) {
        this._plcObjId = $gameMap.addPlacementObject(obId, x1, y1);
    }
    return true;
};

Game_Player.prototype.placementObjPos = function(obId, x, y, test) {
    this._plcObjId = 0;
    if (!$gameMap.isValid(x, y)) return false;
    var c = this.getObjCondition(obId);
    if (c) {
        if (c.Passable && !$gameMap.checkPassage_ofp(x, y)) {
            return false;
        }
        if (c.Collide && this.isCollidedWithCharacters(x, y)) {
            return false;
        }
        if (c.Tags.length > 0 && !c.Tags.contains($gameMap.terrainTag(x, y))) {
            return false;
        }
        if (c.Regions.length > 0 && !c.Regions.contains($gameMap.regionId(x, y))) {
            return false;
        }
    }
    if (!test) {
        this._plcObjId = $gameMap.addPlacementObject(obId, x, y);
    }
    return true;
};

Game_Player.prototype.getObjCondition = function(objectId) {
    var metaname = MPPlugin.EventMetadata.PlacementCondition || 'PlcCdt';
    var index = Number(MPP_FreeObjects[objectId].meta[metaname] || 0);
    return index > 0 ? MPPlugin.Conditions[index - 1] : null;
};

Game_Player.prototype.plcObjId = function() {
    return this._plcObjId || 0;
};


//-----------------------------------------------------------------------------
// Game_Mpp_PlacementObject

Game_Mpp_PlacementObject.prototype = Object.create(Game_Event.prototype);
Game_Mpp_PlacementObject.prototype.constructor = Game_Mpp_PlacementObject;

Game_Mpp_PlacementObject.prototype.initialize = function(mapId, eventId, objectId) {
    this._objectId = objectId;
    Game_Event.prototype.initialize.call(this, mapId, eventId);
};

Game_Mpp_PlacementObject.prototype.event = function() {
    return MPP_FreeObjects[this._objectId];
};


//-----------------------------------------------------------------------------
// Game_Interpreter

//1739
Alias.GaIn_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Alias.GaIn_pluginCommand.call(this, command, args);
    var args2 = args.map(function(arg) {
        return arg.replace(/v\[(\d+)\]/g, function() {
            return $gameVariables.value(parseInt(arguments[1]));
        });
    });
    switch (command) {
        case MPPlugin.PluginCommands.PlacementObj:
        case 'PlacementObj':
            var obId = eval(args2[0] || 0);
            $gamePlayer.placementObj(obId);
            break;
        case MPPlugin.PluginCommands.PlacementObjPos:
        case 'PlacementObjPos':
            var obId = eval(args2[0] || 0);
            var x = eval(args2[1] || 0);
            var y = eval(args2[2] || 0);
            $gamePlayer.placementObjPos(obId, x, y);
            break;
        case MPPlugin.PluginCommands.EraseObj:
        case 'EraseObj':
            var eventId = eval(args2[0] || 0);
            $gameMap.erasePlacementObject(eventId);
            break;
        case MPPlugin.PluginCommands.ClearObj:
        case 'ClearObj':
            var mapId = eval(args2[0] || 0);
            $gameMap.clearPlacementObjects(mapId);
            break;
    }
};


//-----------------------------------------------------------------------------
// Spriteset_Map

//27
Alias.SpsetMa_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
    Alias.SpsetMa_update.call(this);
    this.updatePlacementObject();
};

Spriteset_Map.prototype.updatePlacementObject = function() {
    var sprites = this._characterSprites;
    var objects = $gameMap.addedPlacementObjects;
    for (var i = 0; i < objects.length; i++) {
        var sprite = new Sprite_Character(objects[i]);
        sprites.push(sprite);
        this._tilemap.addChildAt(sprite, 0);
    }
    $gameMap.addedPlacementObjects = [];
    objects = $gameMap.removePlacementObjects;
    for (var i = 0; i < objects.length; i++) {
        for (var j = 0; j < sprites.length; j++) {
            if (sprites[j]._character === objects[i]) {
                this._tilemap.removeChild(sprites[j]);
                sprites.splice(j, 1);
                break;
            }
        }
    }
    $gameMap.removePlacementObjects = [];
};










})();
