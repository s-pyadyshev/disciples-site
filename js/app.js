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
(0, _townBuilder2.default)('.elves', '.build--elves');

imageSaver.saveImage('.empire', '.btn--save-empire');
imageSaver.saveImage('.undead', '.btn--save-undead');
imageSaver.saveImage('.clans', '.btn--save-clans');
imageSaver.saveImage('.legions', '.btn--save-legions');
imageSaver.saveImage('.elves', '.btn--save-elves');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvaW1hZ2Utc2F2ZXIuanMiLCJzcmMvanMvbW9kdWxlcy90b2dnbGVCeUNsYXNzLmpzIiwic3JjL2pzL21vZHVsZXMvdG93bi1idWlsZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7Ozs7QUFDQTs7SUFBWSxVOzs7Ozs7QUFFWiwyQkFBVSxTQUFWLEVBQXFCLGdCQUFyQjtBQUNBLDJCQUFVLFNBQVYsRUFBcUIsZ0JBQXJCO0FBQ0EsMkJBQVUsUUFBVixFQUFvQixlQUFwQjtBQUNBLDJCQUFVLFVBQVYsRUFBc0IsaUJBQXRCO0FBQ0EsMkJBQVUsUUFBVixFQUFvQixlQUFwQjs7QUFFQSxXQUFXLFNBQVgsQ0FBcUIsU0FBckIsRUFBZ0MsbUJBQWhDO0FBQ0EsV0FBVyxTQUFYLENBQXFCLFNBQXJCLEVBQWdDLG1CQUFoQztBQUNBLFdBQVcsU0FBWCxDQUFxQixRQUFyQixFQUErQixrQkFBL0I7QUFDQSxXQUFXLFNBQVgsQ0FBcUIsVUFBckIsRUFBaUMsb0JBQWpDO0FBQ0EsV0FBVyxTQUFYLENBQXFCLFFBQXJCLEVBQStCLGtCQUEvQjs7Ozs7Ozs7QUNmTyxJQUFNLGdDQUFZLFNBQVosU0FBWSxDQUFDLElBQUQsRUFBTyxNQUFQLEVBQWtCO0FBQ3ZDLFFBQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDs7QUFFQSxhQUFTLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsZ0JBQS9CLENBQWdELE9BQWhELEVBQXlELFlBQVc7QUFDaEUsbUJBQVcsS0FBWCxDQUFpQixJQUFqQixFQUNDLElBREQsQ0FDTSxVQUFVLE9BQVYsRUFBbUI7QUFDckIsZ0JBQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBLGlCQUFLLFFBQUwsR0FBZ0IsZ0JBQWhCO0FBQ0EsaUJBQUssSUFBTCxHQUFZLE9BQVo7QUFDQSxpQkFBSyxLQUFMO0FBQ0gsU0FORCxFQU9DLEtBUEQsQ0FPTyxVQUFVLEtBQVYsRUFBaUI7QUFDcEIsb0JBQVEsS0FBUixDQUFjLDZCQUFkLEVBQTZDLEtBQTdDO0FBQ0gsU0FURDtBQVVILEtBWEQ7QUFZSCxDQWZNOztrQkFpQlEsUzs7Ozs7Ozs7QUNqQlIsSUFBTSx3Q0FBZ0IsU0FBaEIsYUFBZ0IsQ0FBQyxPQUFELEVBQVUsY0FBVixFQUEwQixJQUExQixFQUFtQztBQUM1RCxRQUFNLG1CQUFtQixDQUF6Qjs7QUFFQSxZQUFRLE9BQVIsQ0FBZ0IsVUFBQyxJQUFELEVBQU8sS0FBUCxFQUFpQjtBQUM3QixnQkFBUSxLQUFSLEVBQWUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBVztBQUNoRCxnQkFBSSxPQUFPLElBQVg7O0FBRUEsZ0JBQUksS0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixXQUF4QixNQUF5QyxLQUE3QyxFQUFvRDtBQUNoRCxvQkFBSSxXQUFXLEtBQUssWUFBTCxDQUFrQixPQUFsQixFQUEyQixNQUEzQixDQUFrQyxnQkFBbEMsRUFBb0QsS0FBcEQsQ0FBMEQsQ0FBMUQsRUFBNkQsQ0FBQyxjQUE5RCxDQUFmO0FBQ0Esb0JBQUksV0FBVyxLQUFLLGFBQUwsQ0FBbUIsTUFBTSxRQUF6QixDQUFmOztBQUVBLHFCQUFLLFNBQUwsQ0FBZSxHQUFmLENBQW1CLFdBQW5CO0FBQ0EseUJBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsT0FBekI7QUFFSCxhQVBELE1BT08sSUFBSSxLQUFLLFNBQUwsQ0FBZSxRQUFmLENBQXdCLFdBQXhCLE1BQXlDLElBQTdDLEVBQW1EO0FBQ3RELG9CQUFJLFlBQVcsS0FBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE1BQTNCLENBQWtDLGdCQUFsQyxFQUFvRCxLQUFwRCxDQUEwRCxDQUExRCxFQUE2RCxFQUFFLEtBQUssY0FBUCxDQUE3RCxDQUFmO0FBQ0Esb0JBQUksWUFBVyxLQUFLLGFBQUwsQ0FBbUIsTUFBTSxTQUF6QixDQUFmOztBQUVBLHFCQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLFdBQXRCO0FBQ0EsMEJBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsTUFBekI7QUFDSDtBQUNKLFNBakJEO0FBa0JILEtBbkJEO0FBb0JILENBdkJNOztrQkF5QlEsYTs7Ozs7Ozs7OztBQ3pCZjs7Ozs7O0FBRU8sSUFBTSxnQ0FBWSxTQUFaLFNBQVksQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFpQjtBQUN0QyxRQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQSxRQUFNLGlCQUFpQixNQUFNLE1BQTdCOztBQUVBLFFBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLEdBQU07QUFDMUIsWUFBTSxZQUFZLFNBQVMsZ0JBQVQsQ0FBMEIsS0FBMUIsQ0FBbEI7QUFDQSxZQUFJLGdCQUFnQixFQUFwQjs7QUFFQSxhQUFLLElBQUksSUFBSSxVQUFVLE1BQXZCLEVBQStCLEdBQS9CLEVBQW9DLGNBQWMsT0FBZCxDQUFzQixVQUFVLENBQVYsQ0FBdEIsQ0FBcEM7QUFDQSxlQUFPLGFBQVA7QUFDSCxLQU5EOztBQVFBLFFBQU0sZUFBZSxpQkFBckI7O0FBRUEsaUNBQWMsWUFBZCxFQUE0QixjQUE1QixFQUE0QyxJQUE1QztBQUNILENBZk07O2tCQWlCUSxTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGJ1aWxkVG93biBmcm9tICcuL21vZHVsZXMvdG93bi1idWlsZGVyJztcclxuaW1wb3J0ICogYXMgaW1hZ2VTYXZlciBmcm9tICcuL21vZHVsZXMvaW1hZ2Utc2F2ZXInO1xyXG5cclxuYnVpbGRUb3duKCcuZW1waXJlJywgJy5idWlsZC0tZW1waXJlJyk7XHJcbmJ1aWxkVG93bignLnVuZGVhZCcsICcuYnVpbGQtLXVuZGVhZCcpO1xyXG5idWlsZFRvd24oJy5jbGFucycsICcuYnVpbGQtLWNsYW5zJyk7XHJcbmJ1aWxkVG93bignLmxlZ2lvbnMnLCAnLmJ1aWxkLS1sZWdpb25zJyk7XHJcbmJ1aWxkVG93bignLmVsdmVzJywgJy5idWlsZC0tZWx2ZXMnKTtcclxuXHJcbmltYWdlU2F2ZXIuc2F2ZUltYWdlKCcuZW1waXJlJywgJy5idG4tLXNhdmUtZW1waXJlJyk7XHJcbmltYWdlU2F2ZXIuc2F2ZUltYWdlKCcudW5kZWFkJywgJy5idG4tLXNhdmUtdW5kZWFkJyk7XHJcbmltYWdlU2F2ZXIuc2F2ZUltYWdlKCcuY2xhbnMnLCAnLmJ0bi0tc2F2ZS1jbGFucycpO1xyXG5pbWFnZVNhdmVyLnNhdmVJbWFnZSgnLmxlZ2lvbnMnLCAnLmJ0bi0tc2F2ZS1sZWdpb25zJyk7XHJcbmltYWdlU2F2ZXIuc2F2ZUltYWdlKCcuZWx2ZXMnLCAnLmJ0bi0tc2F2ZS1lbHZlcycpO1xyXG4iLCJleHBvcnQgY29uc3Qgc2F2ZUltYWdlID0gKHJhY2UsIGJ1dHRvbikgPT4ge1xyXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJhY2UpO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRvbXRvaW1hZ2UudG9Qbmcobm9kZSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YVVybCkge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGxpbmsuZG93bmxvYWQgPSBcImRpc2NpcGxlcy5qcGVnXCI7XHJcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVcmw7XHJcbiAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm9vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIVwiLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2F2ZUltYWdlO1xyXG4iLCJleHBvcnQgY29uc3QgdG9nZ2xlQnlDbGFzcyA9IChidXR0b25zLCBidWlsZEJ0bkxlbmd0aCwgdG93bikgPT4ge1xyXG4gICAgY29uc3QgYnVpbGRDbGFzc0xlbmd0aCA9IDY7XHJcblxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbnNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuQ2xhc3MgPSBzZWxmLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zdWJzdHIoYnVpbGRDbGFzc0xlbmd0aCkuc2xpY2UoMCwgLWJ1aWxkQnRuTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbWdDbGFzcyA9IHRvd24ucXVlcnlTZWxlY3RvcignLicgKyBidG5DbGFzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGltZ0NsYXNzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG5DbGFzcyA9IHNlbGYuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnN1YnN0cihidWlsZENsYXNzTGVuZ3RoKS5zbGljZSgwLCAtKDEwICsgYnVpbGRCdG5MZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbWdDbGFzcyA9IHRvd24ucXVlcnlTZWxlY3RvcignLicgKyBidG5DbGFzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGltZ0NsYXNzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2dnbGVCeUNsYXNzO1xyXG4iLCJpbXBvcnQgdG9nZ2xlQnlDbGFzcyBmcm9tICcuL3RvZ2dsZUJ5Q2xhc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkVG93biA9ICh0b3duLCBidWlsZCkgPT4ge1xyXG4gICAgdmFyIHRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvd24pO1xyXG4gICAgY29uc3QgYnVpbGRCdG5MZW5ndGggPSBidWlsZC5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgZ2V0QnVpbGRCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1aWxkQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYnVpbGQpO1xyXG4gICAgICAgIGxldCBidWlsZEJ0bkFycmF5ID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSBidWlsZEJ0bnMubGVuZ3RoOyBpLS07IGJ1aWxkQnRuQXJyYXkudW5zaGlmdChidWlsZEJ0bnNbaV0pKTtcclxuICAgICAgICByZXR1cm4gYnVpbGRCdG5BcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidWlsZEJ1dHRvbnMgPSBnZXRCdWlsZEJ1dHRvbnMoKTtcclxuXHJcbiAgICB0b2dnbGVCeUNsYXNzKGJ1aWxkQnV0dG9ucywgYnVpbGRCdG5MZW5ndGgsIHRvd24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVpbGRUb3duO1xyXG4iXX0=
