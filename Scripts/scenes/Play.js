"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.Main();
            this.Update();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this.addChild(this.rollButton);
            this.addChild(this.dice1Text);
            this.addChild(this.dice2Text);
            this.addChild(this.dice1);
            this.addChild(this.dice2);
            //roll button refresh the value of number for dice image and text label
            this.rollButton.on("click", function () {
                _this.removeAllChildren();
                var i;
                var j;
                i = Math.floor(Math.random() * 6) + 1;
                j = Math.floor(Math.random() * 6) + 1;
                _this.dice1 = new objects.Button(config.Game.ASSETS.getResult(i.toString()), 180, 200, true);
                _this.dice1Text = new objects.Label(i.toString(), "35px", "Consolas", "#000000", 180, 350, true);
                _this.dice2 = new objects.Button(config.Game.ASSETS.getResult(j.toString()), 500, 200, true);
                _this.dice2Text = new objects.Label(j.toString(), "35px", "Consolas", "#000000", 500, 350, true);
            });
        };
        Play.prototype.Main = function () {
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map