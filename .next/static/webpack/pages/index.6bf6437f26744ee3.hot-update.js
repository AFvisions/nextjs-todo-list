"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Home = function() {\n    var createTodoItem = function createTodoItem(e) {\n        // e.preventDefault();\n        console.log(\"You clicked.\");\n        var formData = new FormData(e.target);\n        var formProps = Object.fromEntries(formData);\n        console.log(formProps);\n        var taskName = formProps.taskName;\n        var dueDate = formProps.dueDate;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewfumagalli/Documents/nextjs-todo-list/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewfumagalli/Documents/nextjs-todo-list/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewfumagalli/Documents/nextjs-todo-list/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"Todo List App\"\n            }, void 0, false, {\n                fileName: \"/Users/andrewfumagalli/Documents/nextjs-todo-list/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: createTodoItem,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"taskName\",\n                        children: \"Task\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewfumagalli/Documents/nextjs-todo-list/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"taskName\",\n                        name: \"taskName\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewfumagalli/Documents/nextjs-todo-list/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"dueDate\",\n                        children: \"Due Date\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewfumagalli/Documents/nextjs-todo-list/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"date\",\n                        id: \"dueDate\",\n                        name: \"dueDate\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewfumagalli/Documents/nextjs-todo-list/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewfumagalli/Documents/nextjs-todo-list/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewfumagalli/Documents/nextjs-todo-list/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid)\n            }, void 0, false, {\n                fileName: \"/Users/andrewfumagalli/Documents/nextjs-todo-list/pages/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andrewfumagalli/Documents/nextjs-todo-list/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUM0QjtBQUVrQjtBQUU5QyxJQUFNRSxJQUFJLEdBQWEsV0FBTTtRQUVsQkMsY0FBYyxHQUF2QixTQUFTQSxjQUFjLENBQUNDLENBQU0sRUFBRTtRQUM5QixzQkFBc0I7UUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUUzQixJQUFNQyxRQUFRLEdBQUcsSUFBSUMsUUFBUSxDQUFDSixDQUFDLENBQUNLLE1BQU0sQ0FBQztRQUN2QyxJQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDTCxRQUFRLENBQUM7UUFDOUNGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxTQUFTLENBQUM7UUFFdEIsSUFBTUcsUUFBUSxHQUFHSCxTQUFTLENBQUNHLFFBQVE7UUFDbkMsSUFBTUMsT0FBTyxHQUFHSixTQUFTLENBQUNJLE9BQU87S0FFbEM7SUFLRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVmLDBFQUFnQjs7MEJBQzlCLDhEQUFDRCxrREFBSTs7a0NBQ0gsOERBQUNrQixNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLDhCQUE4Qjs7Ozs7NkJBQUc7a0NBQ2xFLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzZCQUFHOzs7Ozs7cUJBQ2xDOzBCQUVQLDhEQUFDQyxJQUFFO2dCQUFDUixTQUFTLEVBQUVmLHNFQUFZOzBCQUFFLGVBQzdCOzs7OztxQkFBSzswQkFFTCw4REFBQ3lCLE1BQUk7Z0JBQUNDLFFBQVEsRUFBRXhCLGNBQWM7O2tDQUM1Qiw4REFBQ3lCLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxVQUFVO2tDQUFDLE1BQUk7Ozs7OzZCQUFRO2tDQUN0Qyw4REFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNDLEVBQUUsRUFBQyxVQUFVO3dCQUFDYixJQUFJLEVBQUMsVUFBVTs7Ozs7NkJBQUc7a0NBR25ELDhEQUFDUyxPQUFLO3dCQUFDQyxPQUFPLEVBQUMsU0FBUztrQ0FBQyxVQUFROzs7Ozs2QkFBUTtrQ0FDekMsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxFQUFFLEVBQUMsU0FBUzt3QkFBQ2IsSUFBSSxFQUFDLFNBQVM7Ozs7OzZCQUFHO2tDQUdqRCw4REFBQ2MsUUFBTTt3QkFBQ0YsSUFBSSxFQUFDLFFBQVE7a0NBQUMsUUFBTTs7Ozs7NkJBQVM7Ozs7OztxQkFHaEM7MEJBR1AsOERBQUNoQixLQUFHO2dCQUFDQyxTQUFTLEVBQUVmLHFFQUFXOzs7OztxQkFFckI7Ozs7OzthQUNGLENBQUM7Q0FDVjtBQS9DS0MsS0FBQUEsSUFBSTtBQWlEViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcblxuICBmdW5jdGlvbiBjcmVhdGVUb2RvSXRlbShlOiBhbnkpIHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkLicpXG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgY29uc3QgZm9ybVByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtUHJvcHMpXG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IGZvcm1Qcm9wcy50YXNrTmFtZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybVByb3BzLmR1ZURhdGU7XG5cbiAgfVxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlRvZG8gTGlzdCBBcHBcbiAgICAgIDwvaDE+XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtjcmVhdGVUb2RvSXRlbX0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFza05hbWVcIj5UYXNrPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrTmFtZVwiIG5hbWU9XCJ0YXNrTmFtZVwiIC8+XG5cblxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImR1ZURhdGVcIj5EdWUgRGF0ZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgLz5cblxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZTwvYnV0dG9uPlxuXG5cbiAgICAgIDwvZm9ybT5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiSG9tZSIsImNyZWF0ZVRvZG9JdGVtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiZm9ybVByb3BzIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJ0YXNrTmFtZSIsImR1ZURhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImgxIiwidGl0bGUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsImJ1dHRvbiIsImdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});