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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_Tabela__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tabela */ \"./src/components/Tabela.tsx\");\n/* harmony import */ var _core_Cliente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Cliente */ \"./src/core/Cliente.ts\");\n/* harmony import */ var _components_Botao__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Botao */ \"./src/components/Botao.tsx\");\n/* harmony import */ var _components_Formulario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Formulario */ \"./src/components/Formulario.tsx\");\n/* harmony import */ var _backend_db_ColecaoCliente__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../backend/db/ColecaoCliente */ \"./src/backend/db/ColecaoCliente.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const repo = new _backend_db_ColecaoCliente__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n    const [visivel, setVisivel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"tabela\");\n    const [clientes, setClientes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cliente, setCliente] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_core_Cliente__WEBPACK_IMPORTED_MODULE_4__[\"default\"].vazio());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    function obterTodos() {\n        repo.obterTodos().then((clientes)=>{\n            setClientes(clientes);\n            setVisivel(\"tabela\");\n        });\n    }\n    function clienteSelecionado(cliente) {\n        setCliente(cliente);\n        setVisivel(\"form\");\n    }\n    function clienteExcluido(cliente) {\n        console.log(cliente.nome);\n    }\n    function salvarCliente(cliente) {\n        repo.salvar(cliente);\n        setVisivel(\"tabela\");\n    }\n    function novoCliente() {\n        setCliente(_core_Cliente__WEBPACK_IMPORTED_MODULE_4__[\"default\"].vazio());\n        setVisivel(\"form\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\\n      flex justify-center items-center h-screen\\n      bg-gradient-to-r from-blue-500 to-purple-500\\n      text-white\\n      \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            titulo: \"Cadastro Simples\",\n            children: visivel === \"tabela\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Botao__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            cor: \"green\",\n                            className: \"mb-4\",\n                            onClick: ()=>novoCliente(),\n                            children: \"Novo Cliente\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lucas Angeli\\\\Desktop\\\\next-crud\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lucas Angeli\\\\Desktop\\\\next-crud\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabela__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        clientes: clientes,\n                        clienteSelecionado: clienteSelecionado,\n                        clienteExcluido: clienteExcluido\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lucas Angeli\\\\Desktop\\\\next-crud\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Formulario__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                cliente: cliente,\n                cancelado: ()=>setVisivel(\"tabela\"),\n                clienteMudou: salvarCliente\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas Angeli\\\\Desktop\\\\next-crud\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 69,\n                columnNumber: 12\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lucas Angeli\\\\Desktop\\\\next-crud\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lucas Angeli\\\\Desktop\\\\next-crud\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"++y42gLinmfQY9N9a05f9QzYgYY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDVDtBQUNBO0FBQ0w7QUFDRztBQUNVO0FBRVE7QUFFM0MsU0FBU1MsT0FBTzs7SUFFN0IsTUFBTUMsT0FBMkIsSUFBSUYsa0VBQWNBO0lBRW5ELE1BQU0sQ0FBQ0csU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBb0I7SUFDMUQsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFZLEVBQUU7SUFDdEQsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFVRywyREFBYTtJQUU3REosZ0RBQVNBLENBQUMsSUFBTSxDQUNoQixHQUFHLEVBQUU7SUFFTCxTQUFTaUIsYUFBYTtRQUNwQlIsS0FBS1EsVUFBVSxHQUFHQyxJQUFJLENBQUNOLENBQUFBLFdBQVk7WUFDakNDLFlBQVlEO1lBQ1pELFdBQVc7UUFDYjtJQUNGO0lBRUEsU0FBU1EsbUJBQW1CTCxPQUFnQixFQUFFO1FBQzVDQyxXQUFXRDtRQUNYSCxXQUFXO0lBQ2I7SUFFQSxTQUFTUyxnQkFBZ0JOLE9BQWdCLEVBQUU7UUFDekNPLFFBQVFDLEdBQUcsQ0FBQ1IsUUFBUVMsSUFBSTtJQUMxQjtJQUVBLFNBQVNDLGNBQWNWLE9BQWdCLEVBQUU7UUFDdkNMLEtBQUtnQixNQUFNLENBQUNYO1FBQ1pILFdBQVc7SUFDYjtJQUVBLFNBQVNlLGNBQWM7UUFDckJYLFdBQVdYLDJEQUFhO1FBQ3hCTyxXQUFXO0lBQ2I7SUFHQSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVk7a0JBS2YsNEVBQUMxQiwwREFBTUE7WUFBQzJCLFFBQU87c0JBQ1huQixZQUFZLHlCQUNaOztrQ0FDRSw4REFBQ2lCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDdkIseURBQUtBOzRCQUFDeUIsS0FBSTs0QkFBUUYsV0FBVTs0QkFDM0JHLFNBQVMsSUFBTUw7c0NBQWdCOzs7Ozs7Ozs7OztrQ0FJbkMsOERBQUN2QiwwREFBTUE7d0JBQUNTLFVBQVVBO3dCQUNoQk8sb0JBQW9CQTt3QkFDcEJDLGlCQUFpQkE7Ozs7Ozs7NkNBSXBCLDhEQUFDZCw4REFBVUE7Z0JBQ1ZRLFNBQVNBO2dCQUNUa0IsV0FBVyxJQUFNckIsV0FBVztnQkFDNUJzQixjQUFjVDs7Ozs7b0JBRWhCOzs7Ozs7Ozs7OztBQUlWLENBQUM7R0FwRXVCaEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFRhYmVsYSBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWJlbGFcIjtcbmltcG9ydCBDbGllbnRlIGZyb20gXCIuLi9jb3JlL0NsaWVudGVcIlxuaW1wb3J0IEJvdGFvIGZyb20gXCIuLi9jb21wb25lbnRzL0JvdGFvXCI7XG5pbXBvcnQgRm9ybXVsYXJpbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtdWxhcmlvXCI7XG5pbXBvcnQgQ2xpZW50ZVJlcG9zaXRvcmlvIGZyb20gXCIuLi9jb3JlL0NsaWVudGVSZXBvc2l0b3Jpb1wiO1xuaW1wb3J0IENvbGVjYW9DbGllbnRlIGZyb20gXCIuLi9iYWNrZW5kL2RiL0NvbGVjYW9DbGllbnRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIFxuICBjb25zdCByZXBvOiBDbGllbnRlUmVwb3NpdG9yaW8gPSBuZXcgQ29sZWNhb0NsaWVudGUoKVxuXG4gIGNvbnN0IFt2aXNpdmVsLCBzZXRWaXNpdmVsXSA9IHVzZVN0YXRlPCd0YWJlbGEnIHwgJ2Zvcm0nPigndGFiZWxhJylcbiAgY29uc3QgW2NsaWVudGVzLCBzZXRDbGllbnRlc10gPSB1c2VTdGF0ZTxDbGllbnRlW10+KFtdKVxuICBjb25zdCBbY2xpZW50ZSwgc2V0Q2xpZW50ZV0gPSB1c2VTdGF0ZTxDbGllbnRlPihDbGllbnRlLnZhemlvKCkpXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICB9LCBbXSlcbiAgXG4gIGZ1bmN0aW9uIG9idGVyVG9kb3MoKSB7XG4gICAgcmVwby5vYnRlclRvZG9zKCkudGhlbihjbGllbnRlcyA9PiB7XG4gICAgICBzZXRDbGllbnRlcyhjbGllbnRlcylcbiAgICAgIHNldFZpc2l2ZWwoJ3RhYmVsYScpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWVudGVTZWxlY2lvbmFkbyhjbGllbnRlOiBDbGllbnRlKSB7XG4gICAgc2V0Q2xpZW50ZShjbGllbnRlKVxuICAgIHNldFZpc2l2ZWwoJ2Zvcm0nKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xpZW50ZUV4Y2x1aWRvKGNsaWVudGU6IENsaWVudGUpIHtcbiAgICBjb25zb2xlLmxvZyhjbGllbnRlLm5vbWUpXG4gIH1cblxuICBmdW5jdGlvbiBzYWx2YXJDbGllbnRlKGNsaWVudGU6IENsaWVudGUpIHtcbiAgICByZXBvLnNhbHZhcihjbGllbnRlKVxuICAgIHNldFZpc2l2ZWwoJ3RhYmVsYScpXG4gIH1cblxuICBmdW5jdGlvbiBub3ZvQ2xpZW50ZSgpIHtcbiAgICBzZXRDbGllbnRlKENsaWVudGUudmF6aW8oKSlcbiAgICBzZXRWaXNpdmVsKCdmb3JtJylcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YFxuICAgICAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW5cbiAgICAgIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB0by1wdXJwbGUtNTAwXG4gICAgICB0ZXh0LXdoaXRlXG4gICAgICBgfT5cbiAgICAgIDxMYXlvdXQgdGl0dWxvPVwiQ2FkYXN0cm8gU2ltcGxlc1wiPlxuICAgICAgICAge3Zpc2l2ZWwgPT09ICd0YWJlbGEnID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgPEJvdGFvIGNvcj1cImdyZWVuXCIgY2xhc3NOYW1lPVwibWItNFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbm92b0NsaWVudGUoKX0gPlxuICAgICAgICAgICAgICAgIE5vdm8gQ2xpZW50ZVxuICAgICAgICAgICAgICA8L0JvdGFvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8VGFiZWxhIGNsaWVudGVzPXtjbGllbnRlc30gXG4gICAgICAgICAgICAgIGNsaWVudGVTZWxlY2lvbmFkbz17Y2xpZW50ZVNlbGVjaW9uYWRvfVxuICAgICAgICAgICAgICBjbGllbnRlRXhjbHVpZG89e2NsaWVudGVFeGNsdWlkb31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICkgOiAoXG4gICAgICAgICAgIDxGb3JtdWxhcmlvXG4gICAgICAgICAgICBjbGllbnRlPXtjbGllbnRlfVxuICAgICAgICAgICAgY2FuY2VsYWRvPXsoKSA9PiBzZXRWaXNpdmVsKCd0YWJlbGEnKX1cbiAgICAgICAgICAgIGNsaWVudGVNdWRvdT17c2FsdmFyQ2xpZW50ZX1cbiAgICAgICAgICAvPiAgICAgICAgIFxuICAgICAgICAgKX1cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIlRhYmVsYSIsIkNsaWVudGUiLCJCb3RhbyIsIkZvcm11bGFyaW8iLCJDb2xlY2FvQ2xpZW50ZSIsIkhvbWUiLCJyZXBvIiwidmlzaXZlbCIsInNldFZpc2l2ZWwiLCJjbGllbnRlcyIsInNldENsaWVudGVzIiwiY2xpZW50ZSIsInNldENsaWVudGUiLCJ2YXppbyIsIm9idGVyVG9kb3MiLCJ0aGVuIiwiY2xpZW50ZVNlbGVjaW9uYWRvIiwiY2xpZW50ZUV4Y2x1aWRvIiwiY29uc29sZSIsImxvZyIsIm5vbWUiLCJzYWx2YXJDbGllbnRlIiwic2FsdmFyIiwibm92b0NsaWVudGUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXR1bG8iLCJjb3IiLCJvbkNsaWNrIiwiY2FuY2VsYWRvIiwiY2xpZW50ZU11ZG91Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});