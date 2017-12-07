(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _townBuilder = require('./town-builder');

var townBuilder = _interopRequireWildcard(_townBuilder);

var _imageSaver = require('./image-saver');

var imageSaver = _interopRequireWildcard(_imageSaver);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

townBuilder.buildTown('.empire', '.build--empire');
townBuilder.buildTown('.undead', '.build--undead');
townBuilder.buildTown('.clans', '.build--clans');
townBuilder.buildTown('.legions', '.build--legions');

imageSaver.saveImage('.empire', '.btn--save-empire');
imageSaver.saveImage('.undead', '.btn--save-undead');
imageSaver.saveImage('.clans', '.btn--save-clans');
imageSaver.saveImage('.legions', '.btn--save-legions');

},{"./image-saver":2,"./town-builder":3}],2:[function(require,module,exports){
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
var buildTown = exports.buildTown = function buildTown(town, build) {
    var town = document.querySelector(town); // container of images
    var buildBtns = document.querySelectorAll(build); // all build buttons for certain race
    var buildBtnLength = build.length;

    var buildBtnArray = [];

    for (var i = buildBtns.length; i--; buildBtnArray.unshift(buildBtns[i])) {} // push all buttons classes to array

    for (var i = 0; i < buildBtnArray.length; i++) {

        buildBtnArray[i].addEventListener('click', function () {
            var self = this;

            if (self.classList.contains('is-active') === false) {
                var btnClass = self.getAttribute('class').substr(6).slice(0, -buildBtnLength);
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.add('is-active');
                imgClass.style.display = 'block';
            } else if (self.classList.contains('is-active') === true) {
                var btnClass = self.getAttribute('class').substr(6).slice(0, -(10 + buildBtnLength));
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.remove('is-active');
                imgClass.style.display = 'none';
            }
        });
    };
};

exports.default = buildTown;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxpbWFnZS1zYXZlci5qcyIsInNyY1xcanNcXHRvd24tYnVpbGRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBOztJQUFZLFc7O0FBQ1o7O0lBQVksVTs7OztBQUVaLFlBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxnQkFBakM7QUFDQSxZQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsZ0JBQWpDO0FBQ0EsWUFBWSxTQUFaLENBQXNCLFFBQXRCLEVBQWdDLGVBQWhDO0FBQ0EsWUFBWSxTQUFaLENBQXNCLFVBQXRCLEVBQWtDLGlCQUFsQzs7QUFFQSxXQUFXLFNBQVgsQ0FBcUIsU0FBckIsRUFBZ0MsbUJBQWhDO0FBQ0EsV0FBVyxTQUFYLENBQXFCLFNBQXJCLEVBQWdDLG1CQUFoQztBQUNBLFdBQVcsU0FBWCxDQUFxQixRQUFyQixFQUErQixrQkFBL0I7QUFDQSxXQUFXLFNBQVgsQ0FBcUIsVUFBckIsRUFBaUMsb0JBQWpDOzs7Ozs7OztBQ2JPLElBQU0sZ0NBQVksU0FBWixTQUFZLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBa0I7QUFDdkMsUUFBSSxPQUFPLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFYOztBQUVBLGFBQVMsYUFBVCxDQUF1QixNQUF2QixFQUErQixnQkFBL0IsQ0FBZ0QsT0FBaEQsRUFBeUQsWUFBVztBQUNoRSxtQkFBVyxLQUFYLENBQWlCLElBQWpCLEVBQ0MsSUFERCxDQUNNLFVBQVUsT0FBVixFQUFtQjtBQUNyQixnQkFBSSxPQUFPLFNBQVMsYUFBVCxDQUF1QixHQUF2QixDQUFYO0FBQ0EsaUJBQUssUUFBTCxHQUFnQixvQkFBaEI7QUFDQSxpQkFBSyxJQUFMLEdBQVksT0FBWjtBQUNBLGlCQUFLLEtBQUw7QUFDSCxTQU5ELEVBT0MsS0FQRCxDQU9PLFVBQVUsS0FBVixFQUFpQjtBQUNwQixvQkFBUSxLQUFSLENBQWMsNkJBQWQsRUFBNkMsS0FBN0M7QUFDSCxTQVREO0FBVUgsS0FYRDtBQVlILENBZk07O2tCQWlCUSxTOzs7Ozs7OztBQ2hCUixJQUFNLGdDQUFZLFNBQVosU0FBWSxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWlCO0FBQ3RDLFFBQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWCxDQURzQyxDQUNHO0FBQ3pDLFFBQUksWUFBWSxTQUFTLGdCQUFULENBQTBCLEtBQTFCLENBQWhCLENBRnNDLENBRVk7QUFDbEQsUUFBSSxpQkFBaUIsTUFBTSxNQUEzQjs7QUFFQSxRQUFJLGdCQUFnQixFQUFwQjs7QUFFQSxTQUFLLElBQUksSUFBSSxVQUFVLE1BQXZCLEVBQStCLEdBQS9CLEVBQW9DLGNBQWMsT0FBZCxDQUFzQixVQUFVLENBQVYsQ0FBdEIsQ0FBcEMsSUFQc0MsQ0FPb0M7O0FBRTFFLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxjQUFjLE1BQWxDLEVBQTBDLEdBQTFDLEVBQStDOztBQUUzQyxzQkFBYyxDQUFkLEVBQWlCLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFXO0FBQ2xELGdCQUFJLE9BQU8sSUFBWDs7QUFFQSxnQkFBSSxLQUFLLFNBQUwsQ0FBZSxRQUFmLENBQXdCLFdBQXhCLE1BQXlDLEtBQTdDLEVBQW9EO0FBQ2hELG9CQUFJLFdBQVcsS0FBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE1BQTNCLENBQWtDLENBQWxDLEVBQXFDLEtBQXJDLENBQTJDLENBQTNDLEVBQThDLENBQUMsY0FBL0MsQ0FBZjtBQUNBLG9CQUFJLFdBQVcsS0FBSyxhQUFMLENBQW1CLE1BQU0sUUFBekIsQ0FBZjs7QUFFQSxxQkFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixXQUFuQjtBQUNBLHlCQUFTLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLE9BQXpCO0FBRUgsYUFQRCxNQU9PLElBQUksS0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixXQUF4QixNQUF5QyxJQUE3QyxFQUFtRDtBQUN0RCxvQkFBSSxXQUFXLEtBQUssWUFBTCxDQUFrQixPQUFsQixFQUEyQixNQUEzQixDQUFrQyxDQUFsQyxFQUFxQyxLQUFyQyxDQUEyQyxDQUEzQyxFQUE4QyxFQUFFLEtBQUssY0FBUCxDQUE5QyxDQUFmO0FBQ0Esb0JBQUksV0FBVyxLQUFLLGFBQUwsQ0FBbUIsTUFBTSxRQUF6QixDQUFmOztBQUVBLHFCQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLFdBQXRCO0FBQ0EseUJBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsTUFBekI7QUFDSDtBQUNKLFNBakJEO0FBa0JIO0FBQ0osQ0E5Qk07O2tCQWdDUSxTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAqIGFzIHRvd25CdWlsZGVyIGZyb20gJy4vdG93bi1idWlsZGVyJztcclxuaW1wb3J0ICogYXMgaW1hZ2VTYXZlciBmcm9tICcuL2ltYWdlLXNhdmVyJztcclxuXHJcbnRvd25CdWlsZGVyLmJ1aWxkVG93bignLmVtcGlyZScsICcuYnVpbGQtLWVtcGlyZScpO1xyXG50b3duQnVpbGRlci5idWlsZFRvd24oJy51bmRlYWQnLCAnLmJ1aWxkLS11bmRlYWQnKTtcclxudG93bkJ1aWxkZXIuYnVpbGRUb3duKCcuY2xhbnMnLCAnLmJ1aWxkLS1jbGFucycpO1xyXG50b3duQnVpbGRlci5idWlsZFRvd24oJy5sZWdpb25zJywgJy5idWlsZC0tbGVnaW9ucycpO1xyXG5cclxuaW1hZ2VTYXZlci5zYXZlSW1hZ2UoJy5lbXBpcmUnLCAnLmJ0bi0tc2F2ZS1lbXBpcmUnKTtcclxuaW1hZ2VTYXZlci5zYXZlSW1hZ2UoJy51bmRlYWQnLCAnLmJ0bi0tc2F2ZS11bmRlYWQnKTtcclxuaW1hZ2VTYXZlci5zYXZlSW1hZ2UoJy5jbGFucycsICcuYnRuLS1zYXZlLWNsYW5zJyk7XHJcbmltYWdlU2F2ZXIuc2F2ZUltYWdlKCcubGVnaW9ucycsICcuYnRuLS1zYXZlLWxlZ2lvbnMnKTtcclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBjb25zdCBzYXZlSW1hZ2UgPSAocmFjZSwgYnV0dG9uKSA9PiB7XHJcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmFjZSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRvbXRvaW1hZ2UudG9Qbmcobm9kZSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YVVybCkge1xyXG4gICAgICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgbGluay5kb3dubG9hZCA9ICdteS1pbWFnZS1uYW1lLmpwZWcnO1xyXG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBkYXRhVXJsO1xyXG4gICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ29vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIScsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYXZlSW1hZ2UiLCJcclxuZXhwb3J0IGNvbnN0IGJ1aWxkVG93biA9ICh0b3duLCBidWlsZCkgPT4ge1xyXG4gICAgdmFyIHRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvd24pOyAvLyBjb250YWluZXIgb2YgaW1hZ2VzXHJcbiAgICB2YXIgYnVpbGRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChidWlsZCk7IC8vIGFsbCBidWlsZCBidXR0b25zIGZvciBjZXJ0YWluIHJhY2VcclxuICAgIHZhciBidWlsZEJ0bkxlbmd0aCA9IGJ1aWxkLmxlbmd0aDtcclxuXHJcbiAgICB2YXIgYnVpbGRCdG5BcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSBidWlsZEJ0bnMubGVuZ3RoOyBpLS07IGJ1aWxkQnRuQXJyYXkudW5zaGlmdChidWlsZEJ0bnNbaV0pKTsgLy8gcHVzaCBhbGwgYnV0dG9ucyBjbGFzc2VzIHRvIGFycmF5XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWlsZEJ0bkFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYnVpbGRCdG5BcnJheVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0bkNsYXNzID0gc2VsZi5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3Vic3RyKDYpLnNsaWNlKDAsIC1idWlsZEJ0bkxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nQ2xhc3MgPSB0b3duLnF1ZXJ5U2VsZWN0b3IoJy4nICsgYnRuQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBpbWdDbGFzcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnRuQ2xhc3MgPSBzZWxmLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zdWJzdHIoNikuc2xpY2UoMCwgLSgxMCArIGJ1aWxkQnRuTGVuZ3RoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nQ2xhc3MgPSB0b3duLnF1ZXJ5U2VsZWN0b3IoJy4nICsgYnRuQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBpbWdDbGFzcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVpbGRUb3duIl19
