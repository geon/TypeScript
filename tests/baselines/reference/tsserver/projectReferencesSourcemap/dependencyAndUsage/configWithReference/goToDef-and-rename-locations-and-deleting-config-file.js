currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/dependency/FnS.ts]
export function fn1() { }
export function fn2() { }
export function fn3() { }
export function fn4() { }
export function fn5() { }


//// [/user/username/projects/myproject/dependency/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "declarationMap": true,
    "declarationDir": "../decls"
  }
}

//// [/user/username/projects/myproject/main/main.ts]
import {
    fn1,
    fn2,
    fn3,
    fn4,
    fn5
} from '../decls/fns'

fn1();
fn2();
fn3();
fn4();
fn5();


//// [/user/username/projects/myproject/main/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "declarationMap": true
  },
  "references": [
    {
      "path": "../dependency"
    }
  ]
}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/random/random.ts]
let a = 10;

//// [/user/username/projects/myproject/random/tsconfig.json]
{}

//// [/user/username/projects/myproject/dependency/FnS.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn1 = fn1;
exports.fn2 = fn2;
exports.fn3 = fn3;
exports.fn4 = fn4;
exports.fn5 = fn5;
function fn1() { }
function fn2() { }
function fn3() { }
function fn4() { }
function fn5() { }


//// [/user/username/projects/myproject/decls/FnS.d.ts.map]
{"version":3,"file":"FnS.d.ts","sourceRoot":"","sources":["../dependency/FnS.ts"],"names":[],"mappings":"AAAA,wBAAgB,GAAG,SAAM;AACzB,wBAAgB,GAAG,SAAM;AACzB,wBAAgB,GAAG,SAAM;AACzB,wBAAgB,GAAG,SAAM;AACzB,wBAAgB,GAAG,SAAM"}

//// [/user/username/projects/myproject/decls/FnS.d.ts]
export declare function fn1(): void;
export declare function fn2(): void;
export declare function fn3(): void;
export declare function fn4(): void;
export declare function fn5(): void;
//# sourceMappingURL=FnS.d.ts.map

//// [/user/username/projects/myproject/dependency/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./fns.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-18619918033-export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n","signature":"-18267052502-export declare function fn1(): void;\nexport declare function fn2(): void;\nexport declare function fn3(): void;\nexport declare function fn4(): void;\nexport declare function fn5(): void;\n"}],"root":[2],"options":{"composite":true,"declarationDir":"../decls","declarationMap":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"../decls/FnS.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/dependency/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./fns.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./fns.ts": {
        "original": {
          "version": "-18619918033-export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n",
          "signature": "-18267052502-export declare function fn1(): void;\nexport declare function fn2(): void;\nexport declare function fn3(): void;\nexport declare function fn4(): void;\nexport declare function fn5(): void;\n"
        },
        "version": "-18619918033-export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n",
        "signature": "-18267052502-export declare function fn1(): void;\nexport declare function fn2(): void;\nexport declare function fn3(): void;\nexport declare function fn4(): void;\nexport declare function fn5(): void;\n"
      }
    },
    "root": [
      [
        2,
        "./fns.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declarationDir": "../decls",
      "declarationMap": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./fns.ts"
    ],
    "latestChangedDtsFile": "../decls/FnS.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1101
}

//// [/user/username/projects/myproject/main/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fns_1 = require("../decls/fns");
(0, fns_1.fn1)();
(0, fns_1.fn2)();
(0, fns_1.fn3)();
(0, fns_1.fn4)();
(0, fns_1.fn5)();


//// [/user/username/projects/myproject/main/main.d.ts.map]
{"version":3,"file":"main.d.ts","sourceRoot":"","sources":["main.ts"],"names":[],"mappings":""}

//// [/user/username/projects/myproject/main/main.d.ts]
export {};
//# sourceMappingURL=main.d.ts.map

//// [/user/username/projects/myproject/main/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../decls/fns.d.ts","./main.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-18267052502-export declare function fn1(): void;\nexport declare function fn2(): void;\nexport declare function fn3(): void;\nexport declare function fn4(): void;\nexport declare function fn5(): void;\n",{"version":"-805644102-import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n","signature":"-3531856636-export {};\n"}],"root":[3],"options":{"composite":true,"declarationMap":true},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./main.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/main/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../decls/fns.d.ts",
      "./main.ts"
    ],
    "fileNamesList": [
      [
        "../decls/fns.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../decls/fns.d.ts": {
        "version": "-18267052502-export declare function fn1(): void;\nexport declare function fn2(): void;\nexport declare function fn3(): void;\nexport declare function fn4(): void;\nexport declare function fn5(): void;\n",
        "signature": "-18267052502-export declare function fn1(): void;\nexport declare function fn2(): void;\nexport declare function fn3(): void;\nexport declare function fn4(): void;\nexport declare function fn5(): void;\n"
      },
      "./main.ts": {
        "original": {
          "version": "-805644102-import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "-805644102-import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n",
        "signature": "-3531856636-export {};\n"
      }
    },
    "root": [
      [
        3,
        "./main.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declarationMap": true
    },
    "referencedMap": {
      "./main.ts": [
        "../decls/fns.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../decls/fns.d.ts",
      "./main.ts"
    ],
    "latestChangedDtsFile": "./main.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1129
}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/main/main.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/main.ts :: Config file name: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/username/projects/myproject/main/tsconfig.json",
        "reason": "Creating possible configured project for /user/username/projects/myproject/main/main.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/main/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/main/main.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "configFilePath": "/user/username/projects/myproject/main/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/dependency",
   "originalPath": "../dependency"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/dependency/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/dependency/FnS.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "declarationDir": "/user/username/projects/myproject/decls",
  "configFilePath": "/user/username/projects/myproject/dependency/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/FnS.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/dependency/FnS.ts Text-1 "export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../dependency/FnS.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/username/projects/myproject/main/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "725f5b69066c57a96b52ceff33e6f8ba051a781bb82cf6869a874428cad2bf97",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 2,
            "tsSize": 241,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "composite": true,
            "declarationMap": true
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/user/username/projects/myproject/main/main.ts",
        "configFile": "/user/username/projects/myproject/main/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/tsconfig.json :: No config files found.
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/dependency/FnS.ts: *new*
  {}
/user/username/projects/myproject/dependency/tsconfig.json: *new*
  {}
/user/username/projects/myproject/main/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls: *new*
  {}
/user/username/projects/myproject/dependency: *new*
  {}
/user/username/projects/myproject/main: *new*
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "rename",
      "arguments": {
        "file": "/user/username/projects/myproject/main/main.ts",
        "line": 2,
        "offset": 17
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/dependency
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/dependency/FnS.ts :: Config file name: /user/username/projects/myproject/dependency/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/dependency/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/username/projects/myproject/dependency/tsconfig.json",
        "reason": "Creating project for original file: /user/username/projects/myproject/dependency/FnS.ts"
      }
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/dependency/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/node_modules/@types 1 undefined Project: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/node_modules/@types 1 undefined Project: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/dependency/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/dependency/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/dependency/FnS.ts Text-1 "export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	FnS.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/username/projects/myproject/dependency/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "80216eb4c9c6d41fcd26650a22a2df8f2cac81cda661de72dc723e6251203d22",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 1,
            "tsSize": 130,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "composite": true,
            "declarationMap": true,
            "declarationDir": ""
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": {
        "info": {
          "canRename": true,
          "displayName": "fn2",
          "fullDisplayName": "fn2",
          "kind": "alias",
          "kindModifiers": "export",
          "triggerSpan": {
            "start": {
              "line": 3,
              "offset": 5
            },
            "end": {
              "line": 3,
              "offset": 8
            }
          }
        },
        "locs": [
          {
            "file": "/user/username/projects/myproject/main/main.ts",
            "locs": [
              {
                "start": {
                  "line": 3,
                  "offset": 5
                },
                "end": {
                  "line": 3,
                  "offset": 8
                },
                "contextStart": {
                  "line": 1,
                  "offset": 1
                },
                "contextEnd": {
                  "line": 7,
                  "offset": 22
                }
              },
              {
                "start": {
                  "line": 10,
                  "offset": 1
                },
                "end": {
                  "line": 10,
                  "offset": 4
                }
              }
            ]
          },
          {
            "file": "/user/username/projects/myproject/dependency/FnS.ts",
            "locs": [
              {
                "start": {
                  "line": 2,
                  "offset": 17
                },
                "end": {
                  "line": 2,
                  "offset": 20
                },
                "contextStart": {
                  "line": 2,
                  "offset": 1
                },
                "contextEnd": {
                  "line": 2,
                  "offset": 26
                }
              }
            ]
          }
        ]
      },
      "responseRequired": true
    }
After request

PolledWatches::
/user/username/projects/myproject/dependency/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}

Projects::
/user/username/projects/myproject/dependency/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    originalConfiguredProjects: 2 *changed*
        /user/username/projects/myproject/dependency/tsconfig.json *new*
        /user/username/projects/myproject/main/tsconfig.json *new*

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/main/tsconfig.json
        /user/username/projects/myproject/dependency/tsconfig.json *new*
/user/username/projects/myproject/dependency/FnS.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/main/tsconfig.json
        /user/username/projects/myproject/dependency/tsconfig.json *new*
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/dependency/FnS.ts
	/user/username/projects/myproject/main/main.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../dependency/FnS.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/main.ts :: No config files found.
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 1
1: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/main/tsconfig.json] deleted

PolledWatches::
/user/username/projects/myproject/dependency/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/main/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/dependency:
  {}

FsWatchesRecursive *deleted*::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/main:
  {}

Timeout callback:: count: 1
1: *ensureProjectForOpenFiles* *new*

Projects::
/user/username/projects/myproject/dependency/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/user/username/projects/myproject/main/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true *changed*
    originalConfiguredProjects: 2
        /user/username/projects/myproject/dependency/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /user/username/projects/myproject/dependency/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json *deleted*
/user/username/projects/myproject/dependency/FnS.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /user/username/projects/myproject/dependency/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json *deleted*
/user/username/projects/myproject/main/main.ts (Open) *changed*
    version: SVC-1-0
    containingProjects: 0 *changed*
        /user/username/projects/myproject/main/tsconfig.json *deleted*

Host is moving to new time
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/dependency/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: 
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls/fns.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/decls/fns.d.ts Text-1 "export declare function fn1(): void;\nexport declare function fn2(): void;\nexport declare function fn3(): void;\nexport declare function fn4(): void;\nexport declare function fn5(): void;\n//# sourceMappingURL=FnS.d.ts.map"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../decls/fns.d.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/dependency/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] got projects updated in background /user/username/projects/myproject/main/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/user/username/projects/myproject/main/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/user/username/projects/myproject/dependency/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/main/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/main/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts: *new*
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls: *new*
  {}
/user/username/projects/myproject/dependency:
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/dependency/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/dependency/tsconfig.json
        /dev/null/inferredProject1* *new*
/user/username/projects/myproject/decls/fns.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/dependency/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open) *changed*
    version: SVC-1-0
    containingProjects: 1 *changed*
        /dev/null/inferredProject1* *default* *new*

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/main.ts :: Config file name: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/main.ts :: Config file name: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Before running Timeout callback:: count: 2
4: /user/username/projects/myproject/main/tsconfig.json
5: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/main/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "declarationMap": true
  },
  "references": [
    {
      "path": "../dependency"
    }
  ]
}


PolledWatches::
/user/username/projects/myproject/dependency/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/main/tsconfig.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}

Timeout callback:: count: 2
4: /user/username/projects/myproject/main/tsconfig.json *new*
5: *ensureProjectForOpenFiles* *new*

Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/dependency/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/user/username/projects/myproject/main/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Loading configured project /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/username/projects/myproject/main/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/main/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/main/main.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "configFilePath": "/user/username/projects/myproject/main/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/dependency",
   "originalPath": "../dependency"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/dependency/FnS.ts Text-1 "export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../dependency/FnS.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/username/projects/myproject/main/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/user/username/projects/myproject/main/tsconfig.json",
        "configFile": "/user/username/projects/myproject/main/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/dependency/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0)



Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/dependency/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /user/username/projects/myproject/main/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/user/username/projects/myproject/main/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/user/username/projects/myproject/dependency/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 2 *changed*
    isOrphan: true *changed*
/user/username/projects/myproject/dependency/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1 *changed*
    dirty: false *changed*

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/dependency/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json *new*
        /dev/null/inferredProject1* *deleted*
/user/username/projects/myproject/decls/fns.d.ts *changed*
    version: Text-1
    containingProjects: 0 *changed*
        /dev/null/inferredProject1* *deleted*
/user/username/projects/myproject/dependency/FnS.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/dependency/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json *new*
/user/username/projects/myproject/main/main.ts (Open) *changed*
    version: SVC-1-0
    containingProjects: 1 *changed*
        /user/username/projects/myproject/main/tsconfig.json *default* *new*
        /dev/null/inferredProject1* *deleted*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/username/projects/myproject/random/tsconfig.json",
        "reason": "Creating possible configured project for /user/username/projects/myproject/random/random.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/random/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/random/random.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/myproject/random/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random 1 undefined Config: /user/username/projects/myproject/random/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random 1 undefined Config: /user/username/projects/myproject/random/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/node_modules/@types 1 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/node_modules/@types 1 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/random/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/random/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/random/random.ts SVC-1-0 "let a = 10;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	random.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/username/projects/myproject/random/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "0c2ea547328b8766a212f295d2a5cd12223118cab4342ffe6bae747c3170fa1b",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 1,
            "tsSize": 11,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {},
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/user/username/projects/myproject/random/random.ts",
        "configFile": "/user/username/projects/myproject/random/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0)



Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls/fns.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/dependency/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/dependency/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json: *new*
  {}

FsWatches *deleted*::
/user/username/projects/myproject/decls/fns.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *deleted*
    projectStateVersion: 2
    projectProgramVersion: 2
    isClosed: true *changed*
    isOrphan: true
/user/username/projects/myproject/dependency/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/random/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /user/username/projects/myproject/dependency/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
        /user/username/projects/myproject/random/tsconfig.json *new*
/user/username/projects/myproject/decls/fns.d.ts *deleted*
    version: Text-1
    containingProjects: 0
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/dependency/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 4,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/dependency/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/dependency/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/dependency/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 3
        /user/username/projects/myproject/dependency/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
        /user/username/projects/myproject/random/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/dependency/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/dependency/FnS.ts
	/user/username/projects/myproject/main/main.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../dependency/FnS.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/main.ts :: No config files found.
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Before running Timeout callback:: count: 1
6: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/main/tsconfig.json] deleted

PolledWatches::
/user/username/projects/myproject/dependency/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/main/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/random:
  {}

FsWatchesRecursive *deleted*::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/main:
  {}

Timeout callback:: count: 1
6: *ensureProjectForOpenFiles* *new*

Projects::
/user/username/projects/myproject/dependency/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/user/username/projects/myproject/main/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/dependency/tsconfig.json
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json *deleted*
/user/username/projects/myproject/dependency/FnS.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /user/username/projects/myproject/dependency/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json *deleted*
/user/username/projects/myproject/main/main.ts (Open) *changed*
    version: SVC-1-0
    containingProjects: 0 *changed*
        /user/username/projects/myproject/main/tsconfig.json *deleted*
/user/username/projects/myproject/random/random.ts
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Host is moving to new time
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/dependency/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: 
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls/fns.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject2* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/decls/fns.d.ts Text-2 "export declare function fn1(): void;\nexport declare function fn2(): void;\nexport declare function fn3(): void;\nexport declare function fn4(): void;\nexport declare function fn5(): void;\n//# sourceMappingURL=FnS.d.ts.map"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../decls/fns.d.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/dependency/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] got projects updated in background /user/username/projects/myproject/main/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/user/username/projects/myproject/main/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/user/username/projects/myproject/dependency/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/main/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/main/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts: *new*
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls: *new*
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/dev/null/inferredProject2* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/dependency/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /user/username/projects/myproject/dependency/tsconfig.json
        /user/username/projects/myproject/random/tsconfig.json
        /dev/null/inferredProject2* *new*
/user/username/projects/myproject/decls/fns.d.ts *new*
    version: Text-2
    containingProjects: 1
        /dev/null/inferredProject2*
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/dependency/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open) *changed*
    version: SVC-1-0
    containingProjects: 1 *changed*
        /dev/null/inferredProject2* *default* *new*
/user/username/projects/myproject/random/random.ts
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 5,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/dependency/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/dependency/FnS.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	FnS.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency/node_modules/@types 1 undefined Project: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency/node_modules/@types 1 undefined Project: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency/FnS.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/main/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/dependency/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/random:
  {}

FsWatchesRecursive *deleted*::
/user/username/projects/myproject/dependency:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/dependency/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/random/tsconfig.json
        /dev/null/inferredProject2*
        /user/username/projects/myproject/dependency/tsconfig.json *deleted*
/user/username/projects/myproject/decls/fns.d.ts
    version: Text-2
    containingProjects: 1
        /dev/null/inferredProject2*
/user/username/projects/myproject/dependency/FnS.ts *deleted*
    version: Text-1
    containingProjects: 0 *changed*
        /user/username/projects/myproject/dependency/tsconfig.json *deleted*
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/user/username/projects/myproject/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 6,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/main/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /dev/null/inferredProject2*
/user/username/projects/myproject/decls/fns.d.ts
    version: Text-2
    containingProjects: 1
        /dev/null/inferredProject2*
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/user/username/projects/myproject/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/main.ts :: Config file name: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/main.ts :: Config file name: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Before running Timeout callback:: count: 2
9: /user/username/projects/myproject/main/tsconfig.json
10: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/main/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "declarationMap": true
  },
  "references": [
    {
      "path": "../dependency"
    }
  ]
}


PolledWatches::
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/main/tsconfig.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/main/tsconfig.json: *new*
  {}
/user/username/projects/myproject/random/random.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/random:
  {}

Timeout callback:: count: 2
9: /user/username/projects/myproject/main/tsconfig.json *new*
10: *ensureProjectForOpenFiles* *new*

Projects::
/dev/null/inferredProject2* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/main/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Loading configured project /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/username/projects/myproject/main/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/main/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/main/main.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "configFilePath": "/user/username/projects/myproject/main/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/dependency",
   "originalPath": "../dependency"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/dependency/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/dependency/FnS.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "declarationDir": "/user/username/projects/myproject/decls",
  "configFilePath": "/user/username/projects/myproject/dependency/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/FnS.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/dependency/FnS.ts Text-2 "export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../dependency/FnS.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/username/projects/myproject/main/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/user/username/projects/myproject/main/tsconfig.json",
        "configFile": "/user/username/projects/myproject/main/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /dev/null/inferredProject2* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject2* projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0)



Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /user/username/projects/myproject/main/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/user/username/projects/myproject/main/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts: *new*
  {}
/user/username/projects/myproject/dependency/tsconfig.json: *new*
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency: *new*
  {}
/user/username/projects/myproject/main: *new*
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/dev/null/inferredProject2* (Inferred) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 2 *changed*
    isOrphan: true *changed*
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1 *changed*
    dirty: false *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json *new*
        /dev/null/inferredProject2* *deleted*
/user/username/projects/myproject/decls/fns.d.ts *changed*
    version: Text-2
    containingProjects: 0 *changed*
        /dev/null/inferredProject2* *deleted*
/user/username/projects/myproject/dependency/FnS.ts *new*
    version: Text-2
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open) *changed*
    version: SVC-1-0
    containingProjects: 1 *changed*
        /user/username/projects/myproject/main/tsconfig.json *default* *new*
        /dev/null/inferredProject2* *deleted*
/user/username/projects/myproject/random/random.ts
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 7,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0)



Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls/fns.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/dev/null/inferredProject2* (Inferred) *deleted*
    projectStateVersion: 2
    projectProgramVersion: 2
    isClosed: true *changed*
    isOrphan: true
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/decls/fns.d.ts *deleted*
    version: Text-2
    containingProjects: 0
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-2
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 8,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-2
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/dependency/FnS.ts
	/user/username/projects/myproject/main/main.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../dependency/FnS.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/main.ts :: No config files found.
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Before running Timeout callback:: count: 1
11: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/main/tsconfig.json] file written with same contents

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/random/random.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/random:
  {}

FsWatchesRecursive *deleted*::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}

Timeout callback:: count: 1
11: *ensureProjectForOpenFiles* *new*

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json *deleted*
/user/username/projects/myproject/dependency/FnS.ts *changed*
    version: Text-2
    containingProjects: 0 *changed*
        /user/username/projects/myproject/main/tsconfig.json *deleted*
/user/username/projects/myproject/main/main.ts (Open) *changed*
    version: SVC-1-0
    containingProjects: 0 *changed*
        /user/username/projects/myproject/main/tsconfig.json *deleted*
/user/username/projects/myproject/random/random.ts
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: 
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject3*
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /dev/null/inferredProject3* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /dev/null/inferredProject3* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls/fns.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /dev/null/inferredProject3* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /dev/null/inferredProject3* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject3* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject3* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject3* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject3* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject3* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject3*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/decls/fns.d.ts Text-3 "export declare function fn1(): void;\nexport declare function fn2(): void;\nexport declare function fn3(): void;\nexport declare function fn4(): void;\nexport declare function fn5(): void;\n//# sourceMappingURL=FnS.d.ts.map"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../decls/fns.d.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject3*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject3*
Info seq  [hh:mm:ss:mss] got projects updated in background /user/username/projects/myproject/main/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/user/username/projects/myproject/main/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/user/username/projects/myproject/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/main/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts: *new*
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/main/tsconfig.json: *new*
  {}
/user/username/projects/myproject/random/random.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls: *new*
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/dev/null/inferredProject3* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/random/tsconfig.json
        /dev/null/inferredProject3* *new*
/user/username/projects/myproject/decls/fns.d.ts *new*
    version: Text-3
    containingProjects: 1
        /dev/null/inferredProject3*
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-2
    containingProjects: 0
/user/username/projects/myproject/main/main.ts (Open) *changed*
    version: SVC-1-0
    containingProjects: 1 *changed*
        /dev/null/inferredProject3* *default* *new*
/user/username/projects/myproject/random/random.ts
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 9,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency/FnS.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject3*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject3*
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/dev/null/inferredProject3* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /dev/null/inferredProject3*
/user/username/projects/myproject/decls/fns.d.ts
    version: Text-3
    containingProjects: 1
        /dev/null/inferredProject3*
/user/username/projects/myproject/dependency/FnS.ts *deleted*
    version: Text-2
    containingProjects: 0
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject3* *default*
/user/username/projects/myproject/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 10,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject3*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject3*
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/dev/null/inferredProject3* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /dev/null/inferredProject3*
/user/username/projects/myproject/decls/fns.d.ts
    version: Text-3
    containingProjects: 1
        /dev/null/inferredProject3*
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject3* *default*
/user/username/projects/myproject/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/main.ts :: No config files found.
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Before request
//// [/user/username/projects/myproject/main/tsconfig.json] deleted

Timeout callback:: count: 1
12: *ensureProjectForOpenFiles* *new*

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 11,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject3*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject3*
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/dev/null/inferredProject3* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /dev/null/inferredProject3*
/user/username/projects/myproject/decls/fns.d.ts
    version: Text-3
    containingProjects: 1
        /dev/null/inferredProject3*
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject3* *default*
/user/username/projects/myproject/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 12,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject3*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject3*
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/dev/null/inferredProject3* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /dev/null/inferredProject3*
/user/username/projects/myproject/decls/fns.d.ts
    version: Text-3
    containingProjects: 1
        /dev/null/inferredProject3*
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject3* *default*
/user/username/projects/myproject/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/main
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/main/main.ts :: Config file name: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/main/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/main/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Before running Timeout callback:: count: 2
13: /user/username/projects/myproject/main/tsconfig.json
14: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/main/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "declarationMap": true
  },
  "references": [
    {
      "path": "../dependency"
    }
  ]
}


Timeout callback:: count: 2
12: *ensureProjectForOpenFiles* *deleted*
13: /user/username/projects/myproject/main/tsconfig.json *new*
14: *ensureProjectForOpenFiles* *new*

Projects::
/dev/null/inferredProject3* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/main/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Loading configured project /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/username/projects/myproject/main/tsconfig.json",
        "reason": "Change in config file detected"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/main/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/main/main.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "configFilePath": "/user/username/projects/myproject/main/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/dependency",
   "originalPath": "../dependency"
  }
 ]
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main 1 undefined Config: /user/username/projects/myproject/main/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/dependency/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/dependency/FnS.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "declarationDir": "/user/username/projects/myproject/decls",
  "configFilePath": "/user/username/projects/myproject/dependency/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/FnS.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/dependency/FnS.ts Text-3 "export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../dependency/FnS.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/username/projects/myproject/main/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/user/username/projects/myproject/main/tsconfig.json",
        "configFile": "/user/username/projects/myproject/main/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject3*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject3*
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /dev/null/inferredProject3* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls 1 undefined Project: /dev/null/inferredProject3* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject3* projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject3*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0)



Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject3*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /user/username/projects/myproject/main/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/user/username/projects/myproject/main/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/main/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts: *new*
  {}
/user/username/projects/myproject/dependency/tsconfig.json: *new*
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency: *new*
  {}
/user/username/projects/myproject/main: *new*
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/dev/null/inferredProject3* (Inferred) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 2 *changed*
    isOrphan: true *changed*
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1 *changed*
    dirty: false *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json *new*
        /dev/null/inferredProject3* *deleted*
/user/username/projects/myproject/decls/fns.d.ts *changed*
    version: Text-3
    containingProjects: 0 *changed*
        /dev/null/inferredProject3* *deleted*
/user/username/projects/myproject/dependency/FnS.ts *new*
    version: Text-3
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open) *changed*
    version: SVC-1-0
    containingProjects: 1 *changed*
        /user/username/projects/myproject/main/tsconfig.json *default* *new*
        /dev/null/inferredProject3* *deleted*
/user/username/projects/myproject/random/random.ts
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 13,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject3*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (0)



Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /dev/null/inferredProject3* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/main/node_modules/@types 1 undefined Project: /dev/null/inferredProject3* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject3* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject3* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject3* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject3* WatchType: Type roots
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls/fns.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/dev/null/inferredProject3* (Inferred) *deleted*
    projectStateVersion: 2
    projectProgramVersion: 2
    isClosed: true *changed*
    isOrphan: true
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/decls/fns.d.ts *deleted*
    version: Text-3
    containingProjects: 0
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-3
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 14,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-3
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json :: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Project: /user/username/projects/myproject/dependency/tsconfig.json Detected file add/remove of non supported extension: /user/username/projects/myproject/dependency/tsconfig.json
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json :: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Before running Timeout callback:: count: 2
15: /user/username/projects/myproject/main/tsconfig.json
16: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/dependency/tsconfig.json] deleted

Timeout callback:: count: 2
15: /user/username/projects/myproject/main/tsconfig.json *new*
16: *ensureProjectForOpenFiles* *new*

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/dependency/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/dependency/FnS.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/myproject/dependency/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls/fns.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/decls/fns.d.ts Text-4 "export declare function fn1(): void;\nexport declare function fn2(): void;\nexport declare function fn3(): void;\nexport declare function fn4(): void;\nexport declare function fn5(): void;\n//# sourceMappingURL=FnS.d.ts.map"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../decls/fns.d.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /user/username/projects/myproject/main/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/user/username/projects/myproject/main/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts: *new*
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

FsWatchesRecursive *deleted*::
/user/username/projects/myproject/dependency:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*
    dirty: false *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/decls/fns.d.ts *new*
    version: Text-4
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts *changed*
    version: Text-3
    containingProjects: 0 *changed*
        /user/username/projects/myproject/main/tsconfig.json *deleted*
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
17: /user/username/projects/myproject/main/tsconfig.json
18: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/dependency/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "declarationMap": true,
    "declarationDir": "../decls"
  }
}


Timeout callback:: count: 2
17: /user/username/projects/myproject/main/tsconfig.json *new*
18: *ensureProjectForOpenFiles* *new*

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 2
    dirty: true *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/dependency/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/dependency/FnS.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "declarationDir": "/user/username/projects/myproject/decls",
  "configFilePath": "/user/username/projects/myproject/dependency/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json projectStateVersion: 3 projectProgramVersion: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/dependency/FnS.ts Text-3 "export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../dependency/FnS.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /user/username/projects/myproject/main/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/user/username/projects/myproject/main/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency: *new*
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 3 *changed*
    dirty: false *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/decls/fns.d.ts *changed*
    version: Text-4
    containingProjects: 0 *changed*
        /user/username/projects/myproject/main/tsconfig.json *deleted*
/user/username/projects/myproject/dependency/FnS.ts *changed*
    version: Text-3
    containingProjects: 1 *changed*
        /user/username/projects/myproject/main/tsconfig.json *new*
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 15,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls/fns.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 3
    projectProgramVersion: 3
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/decls/fns.d.ts *deleted*
    version: Text-4
    containingProjects: 0
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-3
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 16,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 3
    projectProgramVersion: 3
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-3
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json :: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Project: /user/username/projects/myproject/dependency/tsconfig.json Detected file add/remove of non supported extension: /user/username/projects/myproject/dependency/tsconfig.json
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json :: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Before request
//// [/user/username/projects/myproject/dependency/tsconfig.json] deleted

Timeout callback:: count: 2
19: /user/username/projects/myproject/main/tsconfig.json *new*
20: *ensureProjectForOpenFiles* *new*

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 4 *changed*
    projectProgramVersion: 3
    dirty: true *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 17,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 4
    projectProgramVersion: 3
    dirty: true
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-3
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 18,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 4
    projectProgramVersion: 3
    dirty: true
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-3
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json :: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Project: /user/username/projects/myproject/dependency/tsconfig.json Detected file add/remove of non supported extension: /user/username/projects/myproject/dependency/tsconfig.json
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json :: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Before running Timeout callback:: count: 2
21: /user/username/projects/myproject/main/tsconfig.json
22: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/dependency/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "declarationMap": true,
    "declarationDir": "../decls"
  }
}


Timeout callback:: count: 2
19: /user/username/projects/myproject/main/tsconfig.json *deleted*
20: *ensureProjectForOpenFiles* *deleted*
21: /user/username/projects/myproject/main/tsconfig.json *new*
22: *ensureProjectForOpenFiles* *new*

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/dependency/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/dependency/FnS.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "declarationDir": "/user/username/projects/myproject/decls",
  "configFilePath": "/user/username/projects/myproject/dependency/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json projectStateVersion: 4 projectProgramVersion: 3 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/dependency/FnS.ts Text-3 "export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /user/username/projects/myproject/main/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/user/username/projects/myproject/main/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 4
    projectProgramVersion: 4 *changed*
    dirty: false *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 19,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 4
    projectProgramVersion: 4
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-3
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 20,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 4
    projectProgramVersion: 4
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-3
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json :: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Project: /user/username/projects/myproject/dependency/tsconfig.json Detected file add/remove of non supported extension: /user/username/projects/myproject/dependency/tsconfig.json
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json :: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Before running Timeout callback:: count: 2
23: /user/username/projects/myproject/main/tsconfig.json
24: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/dependency/tsconfig.json] deleted

Timeout callback:: count: 2
23: /user/username/projects/myproject/main/tsconfig.json *new*
24: *ensureProjectForOpenFiles* *new*

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 5 *changed*
    projectProgramVersion: 4
    dirty: true *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/dependency/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/dependency/FnS.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/myproject/dependency/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/decls/fns.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json projectStateVersion: 5 projectProgramVersion: 4 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/decls/fns.d.ts Text-5 "export declare function fn1(): void;\nexport declare function fn2(): void;\nexport declare function fn3(): void;\nexport declare function fn4(): void;\nexport declare function fn5(): void;\n//# sourceMappingURL=FnS.d.ts.map"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../decls/fns.d.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /user/username/projects/myproject/main/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/user/username/projects/myproject/main/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts: *new*
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

FsWatchesRecursive *deleted*::
/user/username/projects/myproject/dependency:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 5
    projectProgramVersion: 5 *changed*
    dirty: false *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/decls/fns.d.ts *new*
    version: Text-5
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts *changed*
    version: Text-3
    containingProjects: 0 *changed*
        /user/username/projects/myproject/main/tsconfig.json *deleted*
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 21,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/dependency/FnS.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 5
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/decls/fns.d.ts
    version: Text-5
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts *deleted*
    version: Text-3
    containingProjects: 0
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 22,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 5
    projectProgramVersion: 5
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/decls/fns.d.ts
    version: Text-5
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
25: /user/username/projects/myproject/main/tsconfig.json
26: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/dependency/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "declarationMap": true,
    "declarationDir": "../decls"
  }
}


Timeout callback:: count: 2
25: /user/username/projects/myproject/main/tsconfig.json *new*
26: *ensureProjectForOpenFiles* *new*

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 6 *changed*
    projectProgramVersion: 5
    dirty: true *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/dependency/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/dependency/FnS.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "declarationDir": "/user/username/projects/myproject/decls",
  "configFilePath": "/user/username/projects/myproject/dependency/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/FnS.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json projectStateVersion: 6 projectProgramVersion: 5 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/dependency/FnS.ts Text-4 "export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../dependency/FnS.ts
	  Imported via '../decls/fns' from file 'main.ts'
	main.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /user/username/projects/myproject/main/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/user/username/projects/myproject/main/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts: *new*
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency: *new*
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 6
    projectProgramVersion: 6 *changed*
    dirty: false *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/decls/fns.d.ts *changed*
    version: Text-5
    containingProjects: 0 *changed*
        /user/username/projects/myproject/main/tsconfig.json *deleted*
/user/username/projects/myproject/dependency/FnS.ts *new*
    version: Text-4
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 23,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/decls/fns.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/decls/fns.d.ts:
  {}
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 6
    projectProgramVersion: 6
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/decls/fns.d.ts *deleted*
    version: Text-5
    containingProjects: 0
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-4
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 24,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 6
    projectProgramVersion: 6
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-4
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 2:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json :: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Project: /user/username/projects/myproject/dependency/tsconfig.json Detected file add/remove of non supported extension: /user/username/projects/myproject/dependency/tsconfig.json
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json :: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /user/username/projects/myproject/main/tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/main/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json :: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Project: /user/username/projects/myproject/dependency/tsconfig.json Detected file add/remove of non supported extension: /user/username/projects/myproject/dependency/tsconfig.json
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/dependency/tsconfig.json :: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Before running Timeout callback:: count: 2
29: /user/username/projects/myproject/main/tsconfig.json
30: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/dependency/tsconfig.json] file written with same contents

Timeout callback:: count: 2
29: /user/username/projects/myproject/main/tsconfig.json *new*
30: *ensureProjectForOpenFiles* *new*

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 7 *changed*
    projectProgramVersion: 6
    dirty: true *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Info seq  [hh:mm:ss:mss] Running: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/dependency/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/dependency/FnS.ts"
 ],
 "options": {
  "composite": true,
  "declarationMap": true,
  "declarationDir": "/user/username/projects/myproject/decls",
  "configFilePath": "/user/username/projects/myproject/dependency/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/main/tsconfig.json projectStateVersion: 7 projectProgramVersion: 6 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/dependency/FnS.ts Text-4 "export function fn1() { }\nexport function fn2() { }\nexport function fn3() { }\nexport function fn4() { }\nexport function fn5() { }\n"
	/user/username/projects/myproject/main/main.ts SVC-1-0 "import {\n    fn1,\n    fn2,\n    fn3,\n    fn4,\n    fn5\n} from '../decls/fns'\n\nfn1();\nfn2();\nfn3();\nfn4();\nfn5();\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /user/username/projects/myproject/main/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/user/username/projects/myproject/main/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured) *changed*
    projectStateVersion: 7
    projectProgramVersion: 7 *changed*
    dirty: false *changed*
/user/username/projects/myproject/random/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 25,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/random
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/random/random.ts :: Config file name: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/random/random.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/random/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/random/random.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 7
    projectProgramVersion: 7
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-4
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts (Open) *changed*
    open: true *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/random/random.ts"
      },
      "seq": 26,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/random/random.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/random/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/main/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/main/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/main/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/random/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/dependency/FnS.ts:
  {}
/user/username/projects/myproject/dependency/tsconfig.json:
  {}
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/random/random.ts: *new*
  {}
/user/username/projects/myproject/random/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/decls:
  {}
/user/username/projects/myproject/dependency:
  {}
/user/username/projects/myproject/main:
  {}
/user/username/projects/myproject/random:
  {}

Projects::
/user/username/projects/myproject/main/tsconfig.json (Configured)
    projectStateVersion: 7
    projectProgramVersion: 7
/user/username/projects/myproject/random/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /user/username/projects/myproject/random/tsconfig.json
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/dependency/FnS.ts
    version: Text-4
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json
/user/username/projects/myproject/main/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/main/tsconfig.json *default*
/user/username/projects/myproject/random/random.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/random/tsconfig.json
