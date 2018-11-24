(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _townBuilder = require('./modules/town-builder');

var _townBuilder2 = _interopRequireDefault(_townBuilder);

var _imageSaver = require('./modules/image-saver');

var imageSaver = _interopRequireWildcard(_imageSaver);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _townBuilder2.default)('.empire', '.build--empire');
(0, _townBuilder2.default)('.undead', '.build--undead');
(0, _townBuilder2.default)('.clans', '.build--clans');
(0, _townBuilder2.default)('.legions', '.build--legions');

imageSaver.saveImage('.empire', '.btn--save-empire');
imageSaver.saveImage('.undead', '.btn--save-undead');
imageSaver.saveImage('.clans', '.btn--save-clans');
imageSaver.saveImage('.legions', '.btn--save-legions');

},{"./modules/image-saver":2,"./modules/town-builder":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var saveImage = exports.saveImage = function saveImage(race, button) {
    var node = document.querySelector(race);

    document.querySelector(button).addEventListener("click", function () {
        domtoimage.toPng(node).then(function (dataUrl) {
            var link = document.createElement("a");
            link.download = "disciples.jpeg";
            link.href = dataUrl;
            link.click();
        }).catch(function (error) {
            console.error("oops, something went wrong!", error);
        });
    });
};

exports.default = saveImage;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var toggleByClass = exports.toggleByClass = function toggleByClass(buttons, buildBtnLength, town) {
    var buildClassLength = 6;

    buttons.forEach(function (item, index) {
        buttons[index].addEventListener('click', function () {
            var self = this;

            if (self.classList.contains('is-active') === false) {
                var btnClass = self.getAttribute('class').substr(buildClassLength).slice(0, -buildBtnLength);
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.add('is-active');
                imgClass.style.display = 'block';
            } else if (self.classList.contains('is-active') === true) {
                var _btnClass = self.getAttribute('class').substr(buildClassLength).slice(0, -(10 + buildBtnLength));
                var _imgClass = town.querySelector('.' + _btnClass);

                self.classList.remove('is-active');
                _imgClass.style.display = 'none';
            }
        });
    });
};

exports.default = toggleByClass;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildTown = undefined;

var _toggleByClass = require('./toggleByClass');

var _toggleByClass2 = _interopRequireDefault(_toggleByClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildTown = exports.buildTown = function buildTown(town, build) {
    var town = document.querySelector(town);
    var buildBtnLength = build.length;

    var getBuildButtons = function getBuildButtons() {
        var buildBtns = document.querySelectorAll(build);
        var buildBtnArray = [];

        for (var i = buildBtns.length; i--; buildBtnArray.unshift(buildBtns[i])) {}
        return buildBtnArray;
    };

    var buildButtons = getBuildButtons();

    (0, _toggleByClass2.default)(buildButtons, buildBtnLength, town);
};

exports.default = buildTown;

},{"./toggleByClass":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvaW1hZ2Utc2F2ZXIuanMiLCJzcmMvanMvbW9kdWxlcy90b2dnbGVCeUNsYXNzLmpzIiwic3JjL2pzL21vZHVsZXMvdG93bi1idWlsZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7Ozs7QUFDQTs7SUFBWSxVOzs7Ozs7QUFFWiwyQkFBVSxTQUFWLEVBQXFCLGdCQUFyQjtBQUNBLDJCQUFVLFNBQVYsRUFBcUIsZ0JBQXJCO0FBQ0EsMkJBQVUsUUFBVixFQUFvQixlQUFwQjtBQUNBLDJCQUFVLFVBQVYsRUFBc0IsaUJBQXRCOztBQUVBLFdBQVcsU0FBWCxDQUFxQixTQUFyQixFQUFnQyxtQkFBaEM7QUFDQSxXQUFXLFNBQVgsQ0FBcUIsU0FBckIsRUFBZ0MsbUJBQWhDO0FBQ0EsV0FBVyxTQUFYLENBQXFCLFFBQXJCLEVBQStCLGtCQUEvQjtBQUNBLFdBQVcsU0FBWCxDQUFxQixVQUFyQixFQUFpQyxvQkFBakM7Ozs7Ozs7O0FDYk8sSUFBTSxnQ0FBWSxTQUFaLFNBQVksQ0FBQyxJQUFELEVBQU8sTUFBUCxFQUFrQjtBQUN2QyxRQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLElBQXZCLENBQVg7O0FBRUEsYUFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLGdCQUEvQixDQUFnRCxPQUFoRCxFQUF5RCxZQUFXO0FBQ2hFLG1CQUFXLEtBQVgsQ0FBaUIsSUFBakIsRUFDQyxJQURELENBQ00sVUFBVSxPQUFWLEVBQW1CO0FBQ3JCLGdCQUFNLE9BQU8sU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQWI7QUFDQSxpQkFBSyxRQUFMLEdBQWdCLGdCQUFoQjtBQUNBLGlCQUFLLElBQUwsR0FBWSxPQUFaO0FBQ0EsaUJBQUssS0FBTDtBQUNILFNBTkQsRUFPQyxLQVBELENBT08sVUFBVSxLQUFWLEVBQWlCO0FBQ3BCLG9CQUFRLEtBQVIsQ0FBYyw2QkFBZCxFQUE2QyxLQUE3QztBQUNILFNBVEQ7QUFVSCxLQVhEO0FBWUgsQ0FmTTs7a0JBaUJRLFM7Ozs7Ozs7O0FDakJSLElBQU0sd0NBQWdCLFNBQWhCLGFBQWdCLENBQUMsT0FBRCxFQUFVLGNBQVYsRUFBMEIsSUFBMUIsRUFBbUM7QUFDNUQsUUFBTSxtQkFBbUIsQ0FBekI7O0FBRUEsWUFBUSxPQUFSLENBQWdCLFVBQUMsSUFBRCxFQUFPLEtBQVAsRUFBaUI7QUFDN0IsZ0JBQVEsS0FBUixFQUFlLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQVc7QUFDaEQsZ0JBQUksT0FBTyxJQUFYOztBQUVBLGdCQUFJLEtBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0IsV0FBeEIsTUFBeUMsS0FBN0MsRUFBb0Q7QUFDaEQsb0JBQUksV0FBVyxLQUFLLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsTUFBM0IsQ0FBa0MsZ0JBQWxDLEVBQW9ELEtBQXBELENBQTBELENBQTFELEVBQTZELENBQUMsY0FBOUQsQ0FBZjtBQUNBLG9CQUFJLFdBQVcsS0FBSyxhQUFMLENBQW1CLE1BQU0sUUFBekIsQ0FBZjs7QUFFQSxxQkFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixXQUFuQjtBQUNBLHlCQUFTLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLE9BQXpCO0FBRUgsYUFQRCxNQU9PLElBQUksS0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixXQUF4QixNQUF5QyxJQUE3QyxFQUFtRDtBQUN0RCxvQkFBSSxZQUFXLEtBQUssWUFBTCxDQUFrQixPQUFsQixFQUEyQixNQUEzQixDQUFrQyxnQkFBbEMsRUFBb0QsS0FBcEQsQ0FBMEQsQ0FBMUQsRUFBNkQsRUFBRSxLQUFLLGNBQVAsQ0FBN0QsQ0FBZjtBQUNBLG9CQUFJLFlBQVcsS0FBSyxhQUFMLENBQW1CLE1BQU0sU0FBekIsQ0FBZjs7QUFFQSxxQkFBSyxTQUFMLENBQWUsTUFBZixDQUFzQixXQUF0QjtBQUNBLDBCQUFTLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLE1BQXpCO0FBQ0g7QUFDSixTQWpCRDtBQWtCSCxLQW5CRDtBQW9CSCxDQXZCTTs7a0JBeUJRLGE7Ozs7Ozs7Ozs7QUN6QmY7Ozs7OztBQUVPLElBQU0sZ0NBQVksU0FBWixTQUFZLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBaUI7QUFDdEMsUUFBSSxPQUFPLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0EsUUFBTSxpQkFBaUIsTUFBTSxNQUE3Qjs7QUFFQSxRQUFNLGtCQUFrQixTQUFsQixlQUFrQixHQUFNO0FBQzFCLFlBQU0sWUFBWSxTQUFTLGdCQUFULENBQTBCLEtBQTFCLENBQWxCO0FBQ0EsWUFBSSxnQkFBZ0IsRUFBcEI7O0FBRUEsYUFBSyxJQUFJLElBQUksVUFBVSxNQUF2QixFQUErQixHQUEvQixFQUFvQyxjQUFjLE9BQWQsQ0FBc0IsVUFBVSxDQUFWLENBQXRCLENBQXBDO0FBQ0EsZUFBTyxhQUFQO0FBQ0gsS0FORDs7QUFRQSxRQUFNLGVBQWUsaUJBQXJCOztBQUVBLGlDQUFjLFlBQWQsRUFBNEIsY0FBNUIsRUFBNEMsSUFBNUM7QUFDSCxDQWZNOztrQkFpQlEsUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBidWlsZFRvd24gZnJvbSAnLi9tb2R1bGVzL3Rvd24tYnVpbGRlcic7XHJcbmltcG9ydCAqIGFzIGltYWdlU2F2ZXIgZnJvbSAnLi9tb2R1bGVzL2ltYWdlLXNhdmVyJztcclxuXHJcbmJ1aWxkVG93bignLmVtcGlyZScsICcuYnVpbGQtLWVtcGlyZScpO1xyXG5idWlsZFRvd24oJy51bmRlYWQnLCAnLmJ1aWxkLS11bmRlYWQnKTtcclxuYnVpbGRUb3duKCcuY2xhbnMnLCAnLmJ1aWxkLS1jbGFucycpO1xyXG5idWlsZFRvd24oJy5sZWdpb25zJywgJy5idWlsZC0tbGVnaW9ucycpO1xyXG5cclxuaW1hZ2VTYXZlci5zYXZlSW1hZ2UoJy5lbXBpcmUnLCAnLmJ0bi0tc2F2ZS1lbXBpcmUnKTtcclxuaW1hZ2VTYXZlci5zYXZlSW1hZ2UoJy51bmRlYWQnLCAnLmJ0bi0tc2F2ZS11bmRlYWQnKTtcclxuaW1hZ2VTYXZlci5zYXZlSW1hZ2UoJy5jbGFucycsICcuYnRuLS1zYXZlLWNsYW5zJyk7XHJcbmltYWdlU2F2ZXIuc2F2ZUltYWdlKCcubGVnaW9ucycsICcuYnRuLS1zYXZlLWxlZ2lvbnMnKTsiLCJleHBvcnQgY29uc3Qgc2F2ZUltYWdlID0gKHJhY2UsIGJ1dHRvbikgPT4ge1xyXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJhY2UpO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRvbXRvaW1hZ2UudG9Qbmcobm9kZSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YVVybCkge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGxpbmsuZG93bmxvYWQgPSBcImRpc2NpcGxlcy5qcGVnXCI7XHJcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVcmw7XHJcbiAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm9vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIVwiLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2F2ZUltYWdlO1xyXG4iLCJleHBvcnQgY29uc3QgdG9nZ2xlQnlDbGFzcyA9IChidXR0b25zLCBidWlsZEJ0bkxlbmd0aCwgdG93bikgPT4ge1xyXG4gICAgY29uc3QgYnVpbGRDbGFzc0xlbmd0aCA9IDY7XHJcblxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbnNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuQ2xhc3MgPSBzZWxmLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zdWJzdHIoYnVpbGRDbGFzc0xlbmd0aCkuc2xpY2UoMCwgLWJ1aWxkQnRuTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbWdDbGFzcyA9IHRvd24ucXVlcnlTZWxlY3RvcignLicgKyBidG5DbGFzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGltZ0NsYXNzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG5DbGFzcyA9IHNlbGYuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnN1YnN0cihidWlsZENsYXNzTGVuZ3RoKS5zbGljZSgwLCAtKDEwICsgYnVpbGRCdG5MZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbWdDbGFzcyA9IHRvd24ucXVlcnlTZWxlY3RvcignLicgKyBidG5DbGFzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGltZ0NsYXNzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2dnbGVCeUNsYXNzO1xyXG4iLCJpbXBvcnQgdG9nZ2xlQnlDbGFzcyBmcm9tICcuL3RvZ2dsZUJ5Q2xhc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkVG93biA9ICh0b3duLCBidWlsZCkgPT4ge1xyXG4gICAgdmFyIHRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvd24pO1xyXG4gICAgY29uc3QgYnVpbGRCdG5MZW5ndGggPSBidWlsZC5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgZ2V0QnVpbGRCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1aWxkQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYnVpbGQpO1xyXG4gICAgICAgIGxldCBidWlsZEJ0bkFycmF5ID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSBidWlsZEJ0bnMubGVuZ3RoOyBpLS07IGJ1aWxkQnRuQXJyYXkudW5zaGlmdChidWlsZEJ0bnNbaV0pKTtcclxuICAgICAgICByZXR1cm4gYnVpbGRCdG5BcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidWlsZEJ1dHRvbnMgPSBnZXRCdWlsZEJ1dHRvbnMoKTtcclxuXHJcbiAgICB0b2dnbGVCeUNsYXNzKGJ1aWxkQnV0dG9ucywgYnVpbGRCdG5MZW5ndGgsIHRvd24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVpbGRUb3duO1xyXG4iXX0=
