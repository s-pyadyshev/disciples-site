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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var saveImage = exports.saveImage = function saveImage(race, button) {
    var node = document.querySelector(race);

    document.querySelector(button).addEventListener('click', function () {
        domtoimage.toPng(node).then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
        }).catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    });
};

exports.default = saveImage;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var toggleByClass = exports.toggleByClass = function toggleByClass(buttons, buildBtnLength, buildClassLength, town) {

    buttons.forEach(function (item, index) {
        buttons[index].addEventListener('click', function () {
            var self = this;

            if (self.classList.contains('is-active') === false) {
                var btnClass = self.getAttribute('class').substr(buildClassLength).slice(0, -buildBtnLength);
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.add('is-active');
                imgClass.style.display = 'block';
            } else if (self.classList.contains('is-active') === true) {
                var btnClass = self.getAttribute('class').substr(buildClassLength).slice(0, -(10 + buildBtnLength));
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.remove('is-active');
                imgClass.style.display = 'none';
            }
        });
    });
};

exports.default = toggleByClass;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.townName = exports.buildTown = undefined;

var _toggleByClass = require("./toggleByClass");

var _toggleByClass2 = _interopRequireDefault(_toggleByClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildTown = exports.buildTown = function buildTown(town, build) {
    var town = document.querySelector(town);
    var buildBtnLength = build.length;
    var buildClassLength = 6;

    var getBuildButtons = function getBuildButtons() {
        var buildBtns = document.querySelectorAll(build);
        var buildBtnArray = [];

        for (var i = buildBtns.length; i--; buildBtnArray.unshift(buildBtns[i])) {}

        return buildBtnArray;
    };

    var buildButtons = getBuildButtons();

    // for (var i = 0; i < buildButtons.length; i++) {

    //     buildButtons[i].addEventListener('click', function() {
    //         var self = this;

    //         if (self.classList.contains('is-active') === false) {
    //             var btnClass = self.getAttribute('class').substr(buildClassLength).slice(0, -buildBtnLength);
    //             var imgClass = town.querySelector('.' + btnClass);

    //             self.classList.add('is-active');
    //             imgClass.style.display = 'block';

    //         } else if (self.classList.contains('is-active') === true) {
    //             var btnClass = self.getAttribute('class').substr(buildClassLength).slice(0, -(10 + buildBtnLength));
    //             var imgClass = town.querySelector('.' + btnClass);

    //             self.classList.remove('is-active');
    //             imgClass.style.display = 'none';
    //         }
    //     });
    // };
    (0, _toggleByClass2.default)(buildButtons, buildBtnLength, buildClassLength, town);
};

var townName = exports.townName = "Empire";

exports.default = buildTown;

},{"./toggleByClass":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvaW1hZ2Utc2F2ZXIuanMiLCJzcmMvanMvbW9kdWxlcy90b2dnbGVCeUNsYXNzLmpzIiwic3JjL2pzL21vZHVsZXMvdG93bi1idWlsZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7Ozs7QUFDQTs7SUFBWSxVOzs7Ozs7QUFFWiwyQkFBVSxTQUFWLEVBQXFCLGdCQUFyQjtBQUNBLDJCQUFVLFNBQVYsRUFBcUIsZ0JBQXJCO0FBQ0EsMkJBQVUsUUFBVixFQUFvQixlQUFwQjtBQUNBLDJCQUFVLFVBQVYsRUFBc0IsaUJBQXRCOztBQUVBLFdBQVcsU0FBWCxDQUFxQixTQUFyQixFQUFnQyxtQkFBaEM7QUFDQSxXQUFXLFNBQVgsQ0FBcUIsU0FBckIsRUFBZ0MsbUJBQWhDO0FBQ0EsV0FBVyxTQUFYLENBQXFCLFFBQXJCLEVBQStCLGtCQUEvQjtBQUNBLFdBQVcsU0FBWCxDQUFxQixVQUFyQixFQUFpQyxvQkFBakM7Ozs7Ozs7O0FDYk8sSUFBTSxnQ0FBWSxTQUFaLFNBQVksQ0FBQyxJQUFELEVBQU8sTUFBUCxFQUFrQjtBQUN2QyxRQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLElBQXZCLENBQVg7O0FBRUEsYUFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLGdCQUEvQixDQUFnRCxPQUFoRCxFQUF5RCxZQUFXO0FBQ2hFLG1CQUFXLEtBQVgsQ0FBaUIsSUFBakIsRUFDQyxJQURELENBQ00sVUFBVSxPQUFWLEVBQW1CO0FBQ3JCLGdCQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQVg7QUFDQSxpQkFBSyxRQUFMLEdBQWdCLG9CQUFoQjtBQUNBLGlCQUFLLElBQUwsR0FBWSxPQUFaO0FBQ0EsaUJBQUssS0FBTDtBQUNILFNBTkQsRUFPQyxLQVBELENBT08sVUFBVSxLQUFWLEVBQWlCO0FBQ3BCLG9CQUFRLEtBQVIsQ0FBYyw2QkFBZCxFQUE2QyxLQUE3QztBQUNILFNBVEQ7QUFVSCxLQVhEO0FBWUgsQ0FmTTs7a0JBaUJRLFM7Ozs7Ozs7O0FDakJSLElBQU0sd0NBQWdCLFNBQWhCLGFBQWdCLENBQUMsT0FBRCxFQUFVLGNBQVYsRUFBMEIsZ0JBQTFCLEVBQTRDLElBQTVDLEVBQXFEOztBQUU5RSxZQUFRLE9BQVIsQ0FBZ0IsVUFBQyxJQUFELEVBQU8sS0FBUCxFQUFpQjtBQUM3QixnQkFBUSxLQUFSLEVBQWUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBVztBQUNoRCxnQkFBSSxPQUFPLElBQVg7O0FBRUEsZ0JBQUksS0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixXQUF4QixNQUF5QyxLQUE3QyxFQUFvRDtBQUNoRCxvQkFBSSxXQUFXLEtBQUssWUFBTCxDQUFrQixPQUFsQixFQUEyQixNQUEzQixDQUFrQyxnQkFBbEMsRUFBb0QsS0FBcEQsQ0FBMEQsQ0FBMUQsRUFBNkQsQ0FBQyxjQUE5RCxDQUFmO0FBQ0Esb0JBQUksV0FBVyxLQUFLLGFBQUwsQ0FBbUIsTUFBTSxRQUF6QixDQUFmOztBQUVBLHFCQUFLLFNBQUwsQ0FBZSxHQUFmLENBQW1CLFdBQW5CO0FBQ0EseUJBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsT0FBekI7QUFFSCxhQVBELE1BT08sSUFBSSxLQUFLLFNBQUwsQ0FBZSxRQUFmLENBQXdCLFdBQXhCLE1BQXlDLElBQTdDLEVBQW1EO0FBQ3RELG9CQUFJLFdBQVcsS0FBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE1BQTNCLENBQWtDLGdCQUFsQyxFQUFvRCxLQUFwRCxDQUEwRCxDQUExRCxFQUE2RCxFQUFFLEtBQUssY0FBUCxDQUE3RCxDQUFmO0FBQ0Esb0JBQUksV0FBVyxLQUFLLGFBQUwsQ0FBbUIsTUFBTSxRQUF6QixDQUFmOztBQUVBLHFCQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLFdBQXRCO0FBQ0EseUJBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsTUFBekI7QUFDSDtBQUNKLFNBakJEO0FBa0JILEtBbkJEO0FBb0JILENBdEJNOztrQkF3QlEsYTs7Ozs7Ozs7OztBQ3hCZjs7Ozs7O0FBRU8sSUFBTSxnQ0FBWSxTQUFaLFNBQVksQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFpQjtBQUN0QyxRQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQSxRQUFJLGlCQUFpQixNQUFNLE1BQTNCO0FBQ0EsUUFBSSxtQkFBbUIsQ0FBdkI7O0FBRUEsUUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBTTtBQUMxQixZQUFNLFlBQVksU0FBUyxnQkFBVCxDQUEwQixLQUExQixDQUFsQjtBQUNBLFlBQUksZ0JBQWdCLEVBQXBCOztBQUVBLGFBQUssSUFBSSxJQUFJLFVBQVUsTUFBdkIsRUFBK0IsR0FBL0IsRUFBb0MsY0FBYyxPQUFkLENBQXNCLFVBQVUsQ0FBVixDQUF0QixDQUFwQzs7QUFFQSxlQUFPLGFBQVA7QUFDSCxLQVBEOztBQVNBLFFBQU0sZUFBZSxpQkFBckI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFjLFlBQWQsRUFBNEIsY0FBNUIsRUFBNEMsZ0JBQTVDLEVBQThELElBQTlEO0FBQ0gsQ0F0Q007O0FBd0NBLElBQU0sOEJBQVcsUUFBakI7O2tCQUVRLFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgYnVpbGRUb3duIGZyb20gJy4vbW9kdWxlcy90b3duLWJ1aWxkZXInO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNhdmVyIGZyb20gJy4vbW9kdWxlcy9pbWFnZS1zYXZlcic7XHJcblxyXG5idWlsZFRvd24oJy5lbXBpcmUnLCAnLmJ1aWxkLS1lbXBpcmUnKTtcclxuYnVpbGRUb3duKCcudW5kZWFkJywgJy5idWlsZC0tdW5kZWFkJyk7XHJcbmJ1aWxkVG93bignLmNsYW5zJywgJy5idWlsZC0tY2xhbnMnKTtcclxuYnVpbGRUb3duKCcubGVnaW9ucycsICcuYnVpbGQtLWxlZ2lvbnMnKTtcclxuXHJcbmltYWdlU2F2ZXIuc2F2ZUltYWdlKCcuZW1waXJlJywgJy5idG4tLXNhdmUtZW1waXJlJyk7XHJcbmltYWdlU2F2ZXIuc2F2ZUltYWdlKCcudW5kZWFkJywgJy5idG4tLXNhdmUtdW5kZWFkJyk7XHJcbmltYWdlU2F2ZXIuc2F2ZUltYWdlKCcuY2xhbnMnLCAnLmJ0bi0tc2F2ZS1jbGFucycpO1xyXG5pbWFnZVNhdmVyLnNhdmVJbWFnZSgnLmxlZ2lvbnMnLCAnLmJ0bi0tc2F2ZS1sZWdpb25zJyk7IiwiZXhwb3J0IGNvbnN0IHNhdmVJbWFnZSA9IChyYWNlLCBidXR0b24pID0+IHtcclxuICAgIHZhciBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyYWNlKTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZG9tdG9pbWFnZS50b1BuZyhub2RlKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhVXJsKSB7XHJcbiAgICAgICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBsaW5rLmRvd25sb2FkID0gJ215LWltYWdlLW5hbWUuanBlZyc7XHJcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVcmw7XHJcbiAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignb29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmchJywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhdmVJbWFnZVxyXG4iLCJleHBvcnQgY29uc3QgdG9nZ2xlQnlDbGFzcyA9IChidXR0b25zLCBidWlsZEJ0bkxlbmd0aCwgYnVpbGRDbGFzc0xlbmd0aCwgdG93bikgPT4ge1xyXG5cclxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBidXR0b25zW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0bkNsYXNzID0gc2VsZi5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3Vic3RyKGJ1aWxkQ2xhc3NMZW5ndGgpLnNsaWNlKDAsIC1idWlsZEJ0bkxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nQ2xhc3MgPSB0b3duLnF1ZXJ5U2VsZWN0b3IoJy4nICsgYnRuQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBpbWdDbGFzcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnRuQ2xhc3MgPSBzZWxmLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zdWJzdHIoYnVpbGRDbGFzc0xlbmd0aCkuc2xpY2UoMCwgLSgxMCArIGJ1aWxkQnRuTGVuZ3RoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nQ2xhc3MgPSB0b3duLnF1ZXJ5U2VsZWN0b3IoJy4nICsgYnRuQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBpbWdDbGFzcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlQnlDbGFzcztcclxuIiwiaW1wb3J0IHRvZ2dsZUJ5Q2xhc3MgZnJvbSAnLi90b2dnbGVCeUNsYXNzJztcclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZFRvd24gPSAodG93biwgYnVpbGQpID0+IHtcclxuICAgIHZhciB0b3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0b3duKTtcclxuICAgIHZhciBidWlsZEJ0bkxlbmd0aCA9IGJ1aWxkLmxlbmd0aDtcclxuICAgIHZhciBidWlsZENsYXNzTGVuZ3RoID0gNjtcclxuXHJcbiAgICBjb25zdCBnZXRCdWlsZEJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnVpbGRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChidWlsZCk7XHJcbiAgICAgICAgbGV0IGJ1aWxkQnRuQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGJ1aWxkQnRucy5sZW5ndGg7IGktLTsgYnVpbGRCdG5BcnJheS51bnNoaWZ0KGJ1aWxkQnRuc1tpXSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gYnVpbGRCdG5BcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidWlsZEJ1dHRvbnMgPSBnZXRCdWlsZEJ1dHRvbnMoKTtcclxuXHJcbiAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IGJ1aWxkQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIGJ1aWxkQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgLy8gICAgICAgICBpZiAoc2VsZi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpID09PSBmYWxzZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIGJ0bkNsYXNzID0gc2VsZi5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3Vic3RyKGJ1aWxkQ2xhc3NMZW5ndGgpLnNsaWNlKDAsIC1idWlsZEJ0bkxlbmd0aCk7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgaW1nQ2xhc3MgPSB0b3duLnF1ZXJ5U2VsZWN0b3IoJy4nICsgYnRuQ2xhc3MpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIHNlbGYuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICBpbWdDbGFzcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpID09PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgYnRuQ2xhc3MgPSBzZWxmLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zdWJzdHIoYnVpbGRDbGFzc0xlbmd0aCkuc2xpY2UoMCwgLSgxMCArIGJ1aWxkQnRuTGVuZ3RoKSk7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgaW1nQ2xhc3MgPSB0b3duLnF1ZXJ5U2VsZWN0b3IoJy4nICsgYnRuQ2xhc3MpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIHNlbGYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICBpbWdDbGFzcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9O1xyXG4gICAgdG9nZ2xlQnlDbGFzcyhidWlsZEJ1dHRvbnMsIGJ1aWxkQnRuTGVuZ3RoLCBidWlsZENsYXNzTGVuZ3RoLCB0b3duKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b3duTmFtZSA9IFwiRW1waXJlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidWlsZFRvd24iXX0=
