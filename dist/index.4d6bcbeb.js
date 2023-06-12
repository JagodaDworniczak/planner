// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"e11Rl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _newsViewJs = require("./newsView.js");
var _plannerListViewJs = require("./plannerListView.js");
var _plannerListViewJsDefault = parcelHelpers.interopDefault(_plannerListViewJs);
var _shoppingListViewJs = require("./shoppingListView.js");
var _shoppingListViewJsDefault = parcelHelpers.interopDefault(_shoppingListViewJs);
const initHandlers = ()=>{
    (0, _plannerListViewJsDefault.default).handleAddingTask();
    (0, _shoppingListViewJsDefault.default).handleAddingItemToBuy();
    (0, _plannerListViewJsDefault.default).handleCloseEditPopup();
    (0, _plannerListViewJsDefault.default).handleClearingList();
    (0, _shoppingListViewJsDefault.default).handleClearingList();
};
window.addEventListener("DOMContentLoaded", ()=>{
    const shopping = localStorage.getItem("itemsToBuy");
    const tasks = localStorage.getItem("tasks");
    if (shopping) (0, _shoppingListViewJsDefault.default).handleRetrieveShoppingList();
    if (tasks) (0, _plannerListViewJsDefault.default).handleRetrievePlannerList();
    else return;
});
const init = ()=>{
    (0, _newsViewJs.getNews)();
    (0, _plannerListViewJsDefault.default).renderPlannerDate();
};
initHandlers();
init();

},{"./newsView.js":"hzLtT","./plannerListView.js":"kocSw","./shoppingListView.js":"6OV0O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hzLtT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getNews", ()=>getNews);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const getNews = async ()=>{
    try {
        const res = await Promise.race([
            fetch((0, _configJs.NEWS_API_URL)),
            (0, _helpersJs.timeout)((0, _configJs.TIMEOUT))
        ]);
        const data = await res.json();
        const news = data.results.slice(0, 5);
        renderNews(news);
    } catch (err) {
        console.error(`Ups...${err.message}`);
        const errorEl = document.createElement("p");
        errorEl.innerText = `Sorry, cannot load news. ${err.message}`;
        const newsSection = document.querySelector(".news");
        newsSection.append(errorEl);
    }
};
const renderNews = async (newsArr)=>{
    const listWithNews = document.querySelector(".news-list");
    await newsArr.forEach((news)=>{
        const title = news.title;
        const link = news.link;
        const date = news.pubDate;
        const markup = `<a href=${link} target="_blank" class="news-link"><span>💬 ${title}</span><span class="date"> ${date}</span></a>`;
        const listEl = (0, _helpersJs.createLiElWithClass)("news-single");
        listEl.insertAdjacentHTML("afterbegin", markup);
        listWithNews.prepend(listEl);
    });
};

},{"./config.js":"jtCLN","./helpers.js":"ecN5O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtCLN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NEWS_API_URL", ()=>NEWS_API_URL);
parcelHelpers.export(exports, "TIMEOUT", ()=>TIMEOUT);
const NEWS_API_URL = "https://newsdata.io/api/1/news?apikey=pub_18021b801f3e75b10cf14435896804efb2cac&language=en&category=world";
const TIMEOUT = 5000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ecN5O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLiElWithClass", ()=>createLiElWithClass);
parcelHelpers.export(exports, "generateDateTime", ()=>generateDateTime);
parcelHelpers.export(exports, "timeout", ()=>timeout);
const createLiElWithClass = (cl)=>{
    const newListEl = document.createElement("li");
    newListEl.classList.add(cl);
    return newListEl;
};
const generateDateTime = ()=>{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day.toString().length === 2 ? day : "0" + day}.${month.toString().length === 2 ? month : "0" + month}.${year}`;
};
const timeout = (sec)=>{
    return new Promise((_, reject)=>{
        setTimeout(()=>{
            reject(new Error(`Request took to long`));
        }, sec);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kocSw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _listViewJs = require("./listView.js");
var _listViewJsDefault = parcelHelpers.interopDefault(_listViewJs);
var _helpers = require("./helpers");
var _stateJs = require("./state.js");
var _stateJsDefault = parcelHelpers.interopDefault(_stateJs);
class PlannerList extends (0, _listViewJsDefault.default) {
    _newTask = document.querySelector(".task-input");
    _tasksList = document.querySelector(".list-items");
    _editPopup = document.querySelector(".edit-popup");
    _editInput = document.querySelector(".edit-input");
    _clearBtn = document.querySelector(".btn-clear-tasks");
    _listId = "#list-1";
    renderPlannerDate() {
        const weekdays = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday"
        };
        const day = weekdays[new Date().getDay()];
        const dateWithWeekday = `<p>🗓 ${day}, ${(0, _helpers.generateDateTime)()}</p>`;
        const dateSection = document.querySelector(".planner-date");
        dateSection.insertAdjacentHTML("afterbegin", dateWithWeekday);
    }
    _generateNewSaveBtn() {
        const saveBtn = document.querySelector(".btn-save");
        const newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
        return newSaveBtn;
    }
    _renderTaskWithHandlers() {
        const newListEl = document.createElement("li");
        this._addClass(newListEl, "list-item");
        this._addNewItem(newListEl, this._generateMarkup());
        this._tasksList.prepend(newListEl);
        this._clearElement(this._newTask);
        this._addHandlersToNewTask(newListEl);
    }
    _addHandlersToNewTask(newListEl) {
        newListEl.addEventListener("click", (e)=>{
            const date = e.target.closest(".date");
            if (date) this._editLabel(date);
            const removeTask = e.target.closest(".btn-remove");
            if (removeTask) {
                const index = this._getTaskIndex(newListEl);
                (0, _stateJsDefault.default).tasks.splice(index, 1);
                this._addTasksToLocalStorage();
                newListEl.remove();
            }
            const btnEdit = e.target.closest(".btn-edit");
            if (!btnEdit) return;
            this._editTask(newListEl);
        });
    }
    _getTaskIndex(listItem) {
        const taskContent = listItem.querySelector(".task-content").innerText;
        const taskIndex = (0, _stateJsDefault.default).tasks.indexOf(taskContent);
        return taskIndex;
    }
    _editTask(listItem) {
        const taskIndex = this._getTaskIndex(listItem);
        this._handleOpenEditPopup(taskIndex);
        const saveBtn = this._generateNewSaveBtn();
        saveBtn.addEventListener("click", ()=>{
            const newContent = this._editInput.value;
            const listEl = listItem.querySelector(".task-content");
            listEl.textContent = newContent;
            (0, _stateJsDefault.default).tasks[taskIndex] = newContent;
            this._addTasksToLocalStorage();
            this._editPopup.classList.replace("popup-visible", "popup-hidden");
        });
    }
    _addTasksToLocalStorage() {
        localStorage.setItem("tasks", (0, _stateJsDefault.default).tasks);
    }
    _handleOpenEditPopup(indexEl) {
        this._editPopup.classList.replace("popup-hidden", "popup-visible");
        this._editInput.value = (0, _stateJsDefault.default).tasks[indexEl];
    }
    _editLabel(date) {
        if (date.classList.contains("label-red")) date.classList.replace("label-red", "label-yellow");
        else if (date.classList.contains("label-yellow")) date.classList.replace("label-yellow", "label-blue");
        else if (date.classList.contains("label-blue")) date.classList.replace("label-blue", "label-green");
        else date.classList.replace("label-green", "label-red");
    }
    _generateMarkup() {
        const newTaskValue = `${this._newTask.value}. 🗓 ${(0, _helpers.generateDateTime)()}`;
        const markup = `
            <div class="list-item__div">
                ${this._generateDefaultLabel()}
                <div class = "task-content"> 
                    ${newTaskValue}
                </div>
                <button class="btn-remove">Remove</button>
                <button class="btn-edit">Edit task</button>
            </div>
            `;
        (0, _stateJsDefault.default).tasks.push(newTaskValue);
        localStorage.setItem("tasks", (0, _stateJsDefault.default).tasks);
        return markup;
    }
    _generateDefaultLabel() {
        const markup = `<div class = "date label label-yellow"> ✔️ </div>`;
        return markup;
    }
    _addClass(el, cl) {
        el.classList.add(cl);
    }
    handleRetrievePlannerList() {
        const savedList = localStorage.getItem("tasks").split(",");
        this._retrieveList(savedList);
    }
    _retrieveList(arr) {
        arr.map((el)=>{
            const newListEl = document.createElement("li");
            this._addClass(newListEl, "list-item");
            const markup = `
                <div class="list-item__div">
                ${this._generateDefaultLabel()}
                <div class = "task-content"> ${el}</div>
                <button class="btn-remove">Remove</button>
                <button class="btn-edit">Edit task</button>
                </div>
            `;
            this._addNewItem(newListEl, markup);
            this._tasksList.prepend(newListEl);
            this._clearElement(this._newTask);
            this._addHandlersToNewTask(newListEl);
            (0, _stateJsDefault.default).tasks.push(el);
        });
    }
    handleAddingTask() {
        const addTaskForm = document.querySelector(".planner-form");
        addTaskForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            this._renderTaskWithHandlers();
        });
    }
    handleCloseEditPopup() {
        const btnClose = document.querySelector(".btn-close-popup");
        btnClose.addEventListener("click", ()=>this._editPopup.classList.replace("popup-visible", "popup-hidden"));
    }
}
exports.default = new PlannerList();

},{"./listView.js":"8PWzy","./helpers":"ecN5O","./state.js":"j3t7q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8PWzy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stateJs = require("./state.js");
var _stateJsDefault = parcelHelpers.interopDefault(_stateJs);
class List {
    _addNewItem(parent, markup) {
        parent.insertAdjacentHTML("afterbegin", markup);
    }
    _clearElement(el) {
        el.value = "";
    }
    _clearListAndResetState(listId) {
        const listToClear = document.querySelector(listId);
        while(listToClear.firstChild)listToClear.removeChild(listToClear.lastChild);
        if (listId === "#list-1") {
            (0, _stateJsDefault.default).tasks = [];
            localStorage.removeItem("tasks");
        } else {
            (0, _stateJsDefault.default).shoppingList = [];
            localStorage.removeItem("itemsToBuy");
        }
    }
    handleClearingList() {
        this._clearBtn.addEventListener("click", ()=>{
            this._clearListAndResetState(this._listId);
        });
    }
}
exports.default = List;

},{"./state.js":"j3t7q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3t7q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = state = {
    tasks: [],
    shoppingList: []
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6OV0O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _listViewJs = require("./listView.js");
var _listViewJsDefault = parcelHelpers.interopDefault(_listViewJs);
var _stateJs = require("./state.js");
var _stateJsDefault = parcelHelpers.interopDefault(_stateJs);
class ShoppingList extends (0, _listViewJsDefault.default) {
    _clearBtn = document.querySelector(".btn-clear-list");
    _listId = "#list-2";
    _addShoppingItem() {
        const shopppingInput = document.querySelector(".shopping-input");
        const shopppingList = document.querySelector(".shopping-list");
        const inputValue = shopppingInput.value;
        (0, _stateJsDefault.default).shoppingList.push(inputValue);
        localStorage.setItem("itemsToBuy", (0, _stateJsDefault.default).shoppingList);
        const item = `✔️ ${inputValue}`;
        const newListEl = document.createElement("li");
        newListEl.classList.add("shopping-item");
        this._addNewItem(newListEl, item);
        shopppingList.prepend(newListEl);
        this._clearElement(shopppingInput);
        this._handleClearingShoppingItems(newListEl);
    }
    _getItemIndex(listItem) {
        const content = listItem.innerText.slice(3);
        const index = (0, _stateJsDefault.default).shoppingList.indexOf(content);
        return index;
    }
    _handleClearingShoppingItems(li) {
        li.addEventListener("click", ()=>{
            const index = this._getItemIndex(li);
            (0, _stateJsDefault.default).shoppingList.splice(index, 1);
            localStorage.setItem("itemsToBuy", (0, _stateJsDefault.default).shoppingList);
            li.classList.toggle("task-done");
            setTimeout(()=>li.remove(), 500);
        });
    }
    handleAddingItemToBuy() {
        const shopppingForm = document.querySelector(".shopping-form");
        shopppingForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            this._addShoppingItem();
        });
    }
    handleRetrieveShoppingList() {
        const savedList = localStorage.getItem("itemsToBuy").split(",");
        this._retrieveShoppingItem(savedList);
    }
    _retrieveShoppingItem(arr) {
        const shopppingList = document.querySelector(".shopping-list");
        arr.map((el)=>{
            const newListEl = document.createElement("li");
            newListEl.classList.add("shopping-item");
            const markup = `✔️ ${el}`;
            this._addNewItem(newListEl, markup);
            shopppingList.prepend(newListEl);
            (0, _stateJsDefault.default).shoppingList.push(el);
            this._handleClearingShoppingItems(newListEl);
        });
    }
}
exports.default = new ShoppingList();

},{"./listView.js":"8PWzy","./state.js":"j3t7q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["e11Rl","gLLPy"], "gLLPy", "parcelRequiree9c6")

//# sourceMappingURL=index.4d6bcbeb.js.map
