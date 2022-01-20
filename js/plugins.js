// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"基本的なパラメーターを設定するプラグインです。iOS14対応追加","parameters":{"cacheLimit":"20","screenWidth":"768","screenHeight":"432","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"GraphicsRenderFix","status":true,"description":"放置していると画面がフリーズするのを修正","parameters":{}},
{"name":"-----","status":false,"description":"","parameters":{}},
{"name":"TitleNewGameOnly","status":true,"description":"ニューゲームオンリープラグイン","parameters":{"startString":"Nhấn Phím Bất Kỳ","font":"{\"name\":\"\",\"size\":\"28\",\"bold\":\"false\",\"italic\":\"false\",\"color\":\"rgba(255,255,255,1.0)\"}","fileExistAction":"0","soundEffect":"{\"name\":\"se_horror\",\"volume\":\"100\",\"pitch\":\"100\",\"pan\":\"0\"}","adjustY":"30"}},
{"name":"MOG_TitleParticles","status":true,"description":"(v2.1 *) Adiciona partículas na tela de título.","parameters":{"-> Particles 1 <<<<<<<<<<<<<<<<<<<<<<<":"","P1 Visible":"true","P1 File Name":"Particles","P1 Amount":"8","P1 Z Index":"20","P1 X Speed":"1","P1 Y Speed":"-1","P1 Rotation Speed":"0.02","P1 Blend Mode":"1","P1 Anchor":"0","P1 Leaf Mode":"false","P1 Transition Time":"0","":"","-> Particles 2 <<<<<<<<<<<<<<<<<<<<<<<":"","P2 Visible":"false","P2 File Name":"Particles2","P2 Amount":"5","P2 Z Index":"21","P2 X Speed":"2","P2 Y Speed":"2","P2 Rotation Speed":"0.01","P2 Blend Mode":"0","P2 Anchor":"0","P2 Leaf Mode":"false","P2 Transition Time":"0","-> Particles 3 <<<<<<<<<<<<<<<<<<<<<<<":"","P3 Visible":"false","P3 File Name":"Particles3","P3 Amount":"5","P3 Z Index":"22","P3 X Speed":"0.5","P3 Y Speed":"0.5","P3 Rotation Speed":"0.006","P3 Blend Mode":"0","P3 Anchor":"0","P3 Leaf Mode":"true","P3 Transition Time":"0","-> Particles 4 <<<<<<<<<<<<<<<<<<<<<<<":"","P4 Visible":"false","P4 File Name":"Particles4","P4 Amount":"25","P4 Z Index":"23","P4 X Speed":"2","P4 Y Speed":"0.3","P4 Rotation Speed":"0.3","P4 Blend Mode":"1","P4 Anchor":"0","P4 Leaf Mode":"true","P4 Transition Time":"0","-> Particles 5 <<<<<<<<<<<<<<<<<<<<<<<":"","P5 Visible":"false","P5 File Name":"Particles5","P5 Amount":"25","P5 Z Index":"24","P5 X Speed":"4","P5 Y Speed":"0","P5 Rotation Speed":"0","P5 Blend Mode":"1","P5 Anchor":"0","P5 Leaf Mode":"false","P5 Transition Time":"0","-> Particles 6 <<<<<<<<<<<<<<<<<<<<<<<":"","P6 Visible":"false","P6 File Name":"Particles6","P6 Amount":"25","P6 Z Index":"25","P6 X Speed":"4","P6 Y Speed":"0","P6 Rotation Speed":"0","P6 Blend Mode":"1","P6 Anchor":"0","P6 Leaf Mode":"false","P6 Transition Time":"0"}},
{"name":"CustomizeConfigDefault","status":true,"description":"オプションデフォルト値設定プラグイン","parameters":{"常時ダッシュ":"OFF","コマンド記憶":"OFF","BGM音量":"100","BGS音量":"100","ME音量":"100","SE音量":"100","常時ダッシュ消去":"ON","コマンド記憶消去":"ON","BGM音量消去":"OFF","BGS音量消去":"OFF","ME音量消去":"ON","SE音量消去":"OFF"}},
{"name":"CustomizeConfigItem","status":true,"description":"オプション任意項目作成プラグイン","parameters":{"数値項目":"","文字項目":"[\"{\\\"Name\\\":\\\"Độ Sáng Màn Hình\\\",\\\"DefaultValue\\\":\\\"0\\\",\\\"VariableID\\\":\\\"258\\\",\\\"HiddenFlag\\\":\\\"false\\\",\\\"Script\\\":\\\"$gameTemp.reserveCommonEvent(244)\\\",\\\"StringItems\\\":\\\"[\\\\\\\"Thường\\\\\\\",\\\\\\\"Sáng\\\\\\\"]\\\",\\\"AddPosition\\\":\\\"\\\"}\"]","スイッチ項目":"[\"{\\\"Name\\\":\\\"Giảm Phác Thảo\\\",\\\"DefaultValue\\\":\\\"false\\\",\\\"SwitchID\\\":\\\"289\\\",\\\"HiddenFlag\\\":\\\"false\\\",\\\"Script\\\":\\\"\\\",\\\"AddPosition\\\":\\\"\\\"}\"]","音量項目":""}},
{"name":"UTA_CommonSave","status":true,"description":"共有のセーブデータを作成し、指定したスイッチ・変数の状態をセーブデータ間で共有します。","parameters":{"Target Switches":"273","Target Variables":"213","Is Auto":"true","Auto on Gameover":"true","Show Trace":"false"}},
{"name":"Torigoya_SaveCommand","status":true,"description":"プラグインコマンドからセーブを実行できるようにします。","parameters":{}},
{"name":"UR65_SmartPhoneUI","status":true,"description":"スマホ用UI  ver 1.0.0\nUIのサイズをスマートフォン向けに最適化します。","parameters":{"タイトル":"1","メニュー":"1","アイテム":"1","スキル":"1","装備":"1","オプション":"1","ゲーム終了":"1","戦闘":"1","ショップ":"1","イベント関係":"1","アイコン位置修正":"1"}},
{"name":"MPP_ChoiceEX","status":true,"description":"【ver.3.6】選択肢の機能拡張","parameters":{"maxPageRow":"6","=== Command ===":"","Plugin Commands":"{\"ChoicePos\":\"ChoicePos\",\"ChoiceVariableId\":\"ChoiceVariableId\",\"ChoiceRect\":\"ChoiceRect\",\"ChoiceUnderMessage\":\"ChoiceUnderMessage\"}","Event Comment":"{\"ChoiceHelp\":\"ChoiceHelp\"}"}},
{"name":"MessageAlignmentEC","status":true,"description":"ver1.04/メッセージのアライメントを変更する制御文字を追加します。","parameters":{"ExtendEC":""}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{}},
{"name":"liply_Trigger","status":true,"description":"視線、聴覚トリガを実現します。","parameters":{}},
{"name":"FilterController","status":true,"description":"FilterController","parameters":{"Use Decimal in Variables":"true","displacementImage":"DisplacementMap","enabledAll-Settings":"","enabledAll-ShowInOptionMenu":"true","enabledAll-Text":"Lọc Hiệu Ứng","enabledAll-DefaultValue":"true"}},
{"name":"RandomShake","status":true,"description":"イベントコマンド「画面のシェイク」にランダムに揺らす機能を追加します。","parameters":{"SwitchNumber":"93"}},
{"name":"CharacterGraphicExtend","status":true,"description":"キャラクターグラフィック表示拡張プラグイン","parameters":{"イベント消去無効":"false"}},
{"name":"SimpleFollowerControl","status":true,"description":"v1.1 Allows you simple control over your followers.","parameters":{"Follower Collision":"false"}},
{"name":"-----","status":false,"description":"","parameters":{}},
{"name":"FTKR_ItemCategoryFixed","status":true,"description":"v1.0.3 アイテムボックスのカテゴリ選択を無くす","parameters":{"Item Category":"allitem"}},
{"name":"TMEventItemEx","status":true,"description":"アイテム選択の処理にヘルプウィンドウを追加し、\n個数表示の有無と表示行数をアイテムタイプごとに設定できます。","parameters":{"helpWindowEnabledItem":"1","helpWindowEnabledKey":"1","helpWindowEnabledA":"1","helpWindowEnabledB":"1","showItemNumberItem":"1","showItemNumberKey":"1","showItemNumberA":"1","showItemNumberB":"1","numVisibleRowsItem":"2","numVisibleRowsKey":"4","numVisibleRowsA":"4","numVisibleRowsB":"4","fixPlacement":"top"}},
{"name":"TMCommonCommand","status":true,"description":"メインメニューにコモンイベント実行用のコマンドを追加します。","parameters":{"command1":"{\"name\":\"Bạn Đồng Hành\",\"commonEventId\":\"98\"}","command2":"{\"name\":\"\",\"commonEventId\":\"0\"}","command3":"{\"name\":\"\",\"commonEventId\":\"0\"}","command4":"{\"name\":\"\",\"commonEventId\":\"0\"}","command5":"{\"name\":\"\",\"commonEventId\":\"0\"}"}},
{"name":"SimpleMenuLayout","status":true,"description":"シンプルなメニュー画面を実装します。","parameters":{"----基本的な設定----":"","メニュー幅":"240","メニュー列数":"1","メニューX座標":"{\"basis\":\"center\",\"correction\":\"0\"}","メニューY座標":"{\"basis\":\"center\",\"correction\":\"0\"}"}},
{"name":"FTKR_ItemSubCommand","status":true,"description":"v1.7.3 アイテムボックスにサブコマンドを追加する","parameters":{"--アイテム情報取得--":"","Use Item Id":"","--サブコマンド--":"","Command List":"use,discard,cancel","Command Position X":"0","Command Position Y":"240","Command Width":"240","Command Height":"0","--アクター選択画面--":"","Disable Select Single Actor":"0","--使うコマンド--":"","Command Use Format":"Dùng","--やめるコマンド--":"","Command Cancel Format":"Hủy","discard":"","Command Discard Format":"Vứt","--数値入力画面--":"","Max Number Format":"/MAX %1","Number Position X":"240","Number Position Y":"180","Number Width":"456","Number Height":"-1","--確認画面--":"","Enable Confirmation":"1","Conf Title Format":"Vứt %1 ×%2 ?","Confirmation Ok Format":"Có","Confirmation Cancel Format":"Không","--捨てるサウンド--":"","Disposal SE Name":"decide","Disposal SE Pitch":"100","Disposal SE Volume":"90","equip":"","Command Equip Format":"装備する","display_timing_equipstatus":"1","Status_Window_Layout":"{\"posiX\":\"0\",\"posiY\":\"180\",\"width\":\"240\",\"height\":\"-1\"}","Select_Default_Param":"8,2,3,4,5,6,7","Enabled_Window_Param":"false","Status_Window_Param":"","Enabled_statusList":"false","statusList":"","Actor Status Space In Text":"5","--カスタムコマンド0--":"","Custom0 Format":"","Custom0 EventID":"","Custom0 Show Condition":"","Custom0 Enabled Condition":"","--カスタムコマンド1--":"","Custom1 Format":"","Custom1 EventID":"","Custom1 Show Condition":"","Custom1 Enabled Condition":"","--カスタムコマンド2--":"","Custom2 Format":"","Custom2 EventID":"","Custom2 Show Condition":"","Custom2 Enabled Condition":"","--カスタムコマンド3--":"","Custom3 Format":"","Custom3 EventID":"","Custom3 Show Condition":"","Custom3 Enabled Condition":"","--カスタムコマンド4--":"","Custom4 Format":"","Custom4 EventID":"","Custom4 Show Condition":"","Custom4 Enabled Condition":""}},
{"name":"PNDK_LuggageCapacity","status":true,"description":"アイテムや武器・防具の所持できる数を重量（ポイント）制にします。","parameters":{"Carry point":"\\v[117]","Excess handling in EnemyDrop":"Get","Excess handling in GainItem":"Get","Default weight":"1","Unit":"","Attribute name":"重さ","Window layout in menu":"OriginalLayout01","Window opacity in menu":"255","Window layout in item":"OriginalLayout02","Window opacity in item":"255","Window layout in shop":"Default","Window opacity in shop":"255","Font color when weight exceeded":"#ff0000","Dialog title":"重量オーバーです！","Dialog message":"総重量を減らしてください。"}},
{"name":"GALV_MenuFade","status":true,"description":"Adds a fade in and fade out to the main menu only.","parameters":{"Fade Speed":"12","Dont Fade Scenes":"Scene_Title,Scene_Load"}},
{"name":"-----","status":false,"description":"","parameters":{}},
{"name":"DP_MapZoom","status":true,"description":"マップの拡大率を制御します。","parameters":{"Base Scale":"1","Encount Effect":"true","Camera Controll":"true","Weather Patch":"true","Picture Size Fixation":"true","Old Focus":"false"}},
{"name":"MPP_MapLight","status":true,"description":"【ver.2.0】マップの明るさを設定できるようにします。","parameters":{"=== Basic ===":"【基本的な設定】","Light Colors":"[\"255,255,255\",\"255,177,109\",\"255,0,0\"]","Custom Lights":"[\"{\\\"note\\\":\\\"サンプル\\\",\\\"File Name\\\":\\\"MapLight01\\\",\\\"Ox\\\":\\\"24\\\",\\\"Oy\\\":\\\"4\\\",\\\"Scale\\\":\\\"12.0\\\",\\\"Turn Duration\\\":\\\"24\\\"}\"]","Light Level Enabled":"false","Light Level 1 Regions":"1,9,17,25,33,41,49,57","Light Level 2 Regions":"2,10,18,26,34,42,50,58","Light Level 3 Regions":"3,11,19,27,35,43,51,59","Light Level 4 Regions":"4,12,20,28,36,44,52,60","Light Level 5 Regions":"5,13,21,29,37,45,53,61","Light Level 6 Regions":"6,14,22,30,38,46,54,62","Light Level 7 Regions":"7,15,23,31,39,47,55,63","=== Advanced ===":"【細かな設定】","Darkness Size":"2","=== Command ===":"","Plugin Commands":"{\"SetCharLight\":\"SetCharLight\",\"ShowMapLight\":\"ShowMapLight\",\"MoveMapLight\":\"MoveMapLight\",\"EraseMapLight\":\"EraseMapLight\",\"SetMapDarkness\":\"SetMapDarkness\"}","Map Metadata":"{\"Darkness\":\"Darkness\",\"MapLight\":\"MapLight\"}","Event Comments":"{\"Light\":\"Light\"}"}},
{"name":"MPP_ObjectFreePlacement","status":true,"description":"【ver.1.1】イベントを自由に設置できる機能を追加します。","parameters":{"Objects Map Id":"1","Conditions":"[]","=== Command ===":"","Plugin Commands":"{\"PlacementObj\":\"PlacementObj\",\"PlacementObjPos\":\"PlacementObjPos\",\"EraseObj\":\"EraseObj\",\"ClearObj\":\"ClearObj\"}","Event Metadata":"{\"PlacementCondition\":\"PlcCdt\"}"}},
{"name":"KMS_MapActiveMessage","status":true,"description":"[v0.2.0] プレイヤーが近付いたときに、自動的にメッセージを表示するイベントを作成します。","parameters":{"Balloon offset Y":"48","Balloon margin":"-8","Default range":"1","Display duration":"300","Max message count":"10","Message skin":"ActiveMessageSkin"}},
{"name":"FootstepSound","status":true,"description":"足音プラグイン","parameters":{"EventRunningInvalid":"false","ResetIfStop":"true","InvalidSwitchId":"0"}},
{"name":"CharacterDirections","status":true,"description":"キャラ演出用のスクリプトコマンド集","parameters":{}},
{"name":"QueueAnimation","status":true,"description":"SpriteやWindowにアニメーション機能を追加。","parameters":{}},
{"name":"MessageTextAnimation","status":true,"description":"メッセージの文字に動きをつける演出","parameters":{}},
{"name":"MOG_CharacterMotion","status":true,"description":"(v1.3) Sistema de animações dos sprites dos personagens.","parameters":{}},
{"name":"MOG_DizzyEffect","status":true,"description":"(v1.0) Adiciona o efeito Dizzy.","parameters":{}},
{"name":"TextDecoration","status":true,"description":"ウィンドウテキストの装飾方法を変更します。","parameters":{"Mode":"0","Red":"255","Green":"255","Blue":"255","Alpha":"0"}},
{"name":"-----","status":false,"description":"","parameters":{}},
{"name":"liply_ErrorDetail","status":true,"description":"Print copyable detailed error","parameters":{}},
{"name":"liply_Controller","status":true,"description":"liply_Controller","parameters":{"Show in PC":"off"}},
{"name":"Debug_ReportMemory","status":false,"description":"メモリ使用量を表示します。","parameters":{"Max Pixels In MPix":"20"}}
];
