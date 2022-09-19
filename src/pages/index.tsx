import { Link, history } from 'umi';
import { Button } from 'antd';
import { init, plugins, ILowCodePluginContext, project } from '@alilc/lowcode-engine';
import styles from './index.less';

const assets = {
  "packages": [
    {
      "package": "moment",
      "version": "2.24.0",
      "urls": [
        "https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js"
      ],
      "library": "moment"
    },
    {
      "package": "lodash",
      "library": "_",
      "urls": [
        "https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js"
      ]
    },
    {
      "title": "fusion组件库",
      "package": "@alifd/next",
      "version": "1.24.18",
      "urls": [
        "https://g.alicdn.com/code/lib/alifd__next/1.24.18/next.min.css",
        "https://g.alicdn.com/code/lib/alifd__next/1.24.18/next-with-locales.min.js"
      ],
      "library": "Next"
    },
    {
      "title": "NextTable",
      "package": "NextTable",
      "version": "1.0.1",
      "urls": [
        "https://g.alicdn.com/fusion-platform/pro-table/1.0.1/next-table.js",
        "https://g.alicdn.com/fusion-platform/pro-table/1.0.1/next-table.css"
      ],
      "library": "NextTable"
    },
    {
      "package": "@alilc/lowcode-materials",
      "version": "1.0.2",
      "library": "AlilcLowcodeMaterials",
      "urls": [
        "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.2/dist/AlilcLowcodeMaterials.js",
        "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.2/dist/AlilcLowcodeMaterials.css"
      ],
      "editUrls": [
        "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.2/build/lowcode/view.js",
        "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.2/build/lowcode/view.css"
      ]
    },
    {
      "package": "@alifd/pro-layout",
      "version": "1.0.1-beta.6",
      "library": "AlifdProLayout",
      "urls": [
        "https://alifd.alicdn.com/npm/@alifd/pro-layout@1.0.1-beta.6/dist/AlifdProLayout.js",
        "https://alifd.alicdn.com/npm/@alifd/pro-layout@1.0.1-beta.6/dist/AlifdProLayout.css"
      ],
      "editUrls": [
        "https://alifd.alicdn.com/npm/@alifd/pro-layout@1.0.1-beta.6/build/lowcode/view.js",
        "https://alifd.alicdn.com/npm/@alifd/pro-layout@1.0.1-beta.6/build/lowcode/view.css"
      ]
    },
    {
      "package": "@alifd/fusion-ui",
      "version": "1.0.5",
      "library": "AlifdFusionUi",
      "urls": [
        "https://alifd.alicdn.com/npm/@alifd/fusion-ui@1.0.5/dist/AlifdFusionUi.js",
        "https://alifd.alicdn.com/npm/@alifd/fusion-ui@1.0.5/dist/AlifdFusionUi.css"
      ],
      "editUrls": [
        "https://alifd.alicdn.com/npm/@alifd/fusion-ui@1.0.5/build/lowcode/view.js",
        "https://alifd.alicdn.com/npm/@alifd/fusion-ui@1.0.5/build/lowcode/view.css"
      ]
    }
  ],
  "components": [
    {
      "exportName": "AlilcLowcodeMaterialsMeta",
      "npm": {
        "package": "@alilc/lowcode-materials"
      },
      "url": "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.2/build/lowcode/meta.js",
      "urls": {
        "default": "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.2/build/lowcode/meta.js",
        "design": "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.0.2/build/lowcode/meta.design.js"
      }
    },
    {
      "exportName": "AlifdProLayoutMeta",
      "npm": {
        "package": "@alifd/pro-layout",
        "version": "1.0.1-beta.6"
      },
      "url": "https://alifd.alicdn.com/npm/@alifd/pro-layout@1.0.1-beta.6/build/lowcode/meta.js",
      "urls": {
        "default": "https://alifd.alicdn.com/npm/@alifd/pro-layout@1.0.1-beta.6/build/lowcode/meta.js",
        "design": "https://alifd.alicdn.com/npm/@alifd/pro-layout@1.0.1-beta.6/build/lowcode/meta.design.js"
      }
    },
    {
      "exportName": "AlifdFusionUiMeta",
      "npm": {
        "package": "@alifd/fusion-ui"
      },
      "url": "https://alifd.alicdn.com/npm/@alifd/fusion-ui@1.0.5/build/lowcode/meta.js",
      "urls": {
        "default": "https://alifd.alicdn.com/npm/@alifd/fusion-ui@1.0.5/build/lowcode/meta.js",
        "design": "https://alifd.alicdn.com/npm/@alifd/fusion-ui@1.0.5/build/lowcode/meta.design.js"
      }
    }
  ],
  "sort": {
    "groupList": [
      "精选组件",
      "原子组件"
    ],
    "categoryList": [
      "基础元素",
      "布局容器类",
      "表格类",
      "表单详情类",
      "帮助类",
      "对话框类",
      "业务类",
      "通用",
      "引导",
      "信息输入",
      "信息展示",
      "信息反馈"
    ]
  },
  "groupList": [
    "精选组件",
    "原子组件"
  ],
  "ignoreComponents": {}
};
const editorInit = (ctx: ILowCodePluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      // 修改面包屑组件的分隔符属性setter
      // const assets = await (
      //   await fetch(
      //     `https://alifd.alicdn.com/npm/@alilc/lowcode-materials/build/lowcode/assets-prod.json`
      //   )
      // ).json();
      // 设置物料描述
      const { material, project } = ctx;

      await material.setAssets(assets);

      const schema = ({ "version": "1.0.0", "componentsMap": [{ "package": "@alifd/pro-layout", "version": "1.0.1-beta.6", "exportName": "Col", "main": "lib/index.js", "destructuring": true, "subName": "", "componentName": "NextCol" }, { "package": "@alifd/pro-layout", "version": "1.0.1-beta.6", "exportName": "Row", "main": "lib/index.js", "destructuring": true, "subName": "", "componentName": "NextRow" }, { "package": "@alifd/pro-layout", "version": "1.0.1-beta.6", "exportName": "RowColContainer", "main": "lib/index.js", "destructuring": true, "subName": "", "componentName": "NextRowColContainer" }, { "package": "@alifd/pro-layout", "version": "1.0.1-beta.6", "exportName": "BlockCell", "main": "lib/index.js", "destructuring": true, "subName": "", "componentName": "NextBlockCell" }, { "package": "@alifd/pro-layout", "version": "1.0.1-beta.6", "exportName": "Block", "main": "lib/index.js", "destructuring": true, "subName": "", "componentName": "NextBlock" }, { "package": "@alilc/lowcode-materials", "version": "1.0.2", "exportName": "NextText", "main": "lib/index.js", "destructuring": true, "subName": "", "componentName": "NextText" }, { "package": "@alifd/pro-layout", "version": "1.0.1-beta.6", "exportName": "P", "main": "lib/index.js", "destructuring": true, "subName": "", "componentName": "NextP" }, { "package": "@alifd/pro-layout", "version": "1.0.1-beta.6", "exportName": "PageHeader", "main": "lib/index.js", "destructuring": true, "subName": "", "componentName": "NextPageHeader" }, { "package": "@alifd/pro-layout", "version": "1.0.1-beta.6", "exportName": "Page", "main": "lib/index.js", "destructuring": true, "componentName": "NextPage" }, { "devMode": "lowCode", "componentName": "Page" }], "componentsTree": [{ "componentName": "Page", "id": "node_dockcviv8fo1", "props": { "ref": "outerView", "style": { "height": "100%" } }, "fileName": "/", "dataSource": { "list": [{ "type": "fetch", "isInit": true, "options": { "params": {}, "method": "GET", "isCors": true, "timeout": 5000, "headers": {}, "uri": "mock/info.json" }, "id": "info", "shouldFetch": { "type": "JSFunction", "value": "function() { \n  console.log('should fetch.....');\n  return true; \n}" } }] }, "state": { "text": { "type": "JSExpression", "value": "\"outer\"" }, "isShowDialog": { "type": "JSExpression", "value": "false" } }, "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}", "lifeCycles": { "componentDidMount": { "type": "JSFunction", "value": "function componentDidMount() {\n  console.log('did mount');\n}" }, "componentWillUnmount": { "type": "JSFunction", "value": "function componentWillUnmount() {\n  console.log('will unmount');\n}" } }, "methods": { "testFunc": { "type": "JSFunction", "value": "function testFunc() {\n  console.log('test func');\n}" }, "onClick": { "type": "JSFunction", "value": "function onClick() {\n  this.setState({\n    isShowDialog: true\n  });\n}" }, "closeDialog": { "type": "JSFunction", "value": "function closeDialog() {\n  this.setState({\n    isShowDialog: false\n  });\n}" } }, "originCode": "class LowcodeComponent extends Component {\n  state = {\n    \"text\": \"outer\",\n    \"isShowDialog\": false\n  }\n  componentDidMount() {\n    console.log('did mount');\n  }\n  componentWillUnmount() {\n    console.log('will unmount');\n  }\n  testFunc() {\n    console.log('test func');\n  }\n  onClick() {\n    this.setState({\n      isShowDialog: true\n    })\n  }\n  closeDialog() {\n    this.setState({\n      isShowDialog: false\n    })\n  }\n}", "title": "", "isLocked": false, "condition": true, "conditionGroup": "", "children": [{ "componentName": "NextPage", "id": "node_ockzs2vw431", "props": { "headerDivider": true, "minHeight": "100vh", "presetNav": true, "presetAside": true, "footer": false, "nav": false, "aside": false, "placeholderStyle": { "gridRowEnd": "span 1", "gridColumnEnd": "span 12" }, "headerProps": { "background": "surface" }, "header": { "type": "JSSlot", "value": [{ "componentName": "NextPageHeader", "id": "node_ockzs2vw433", "props": {}, "title": "页面头部", "isLocked": false, "condition": true, "conditionGroup": "", "children": [{ "componentName": "NextRowColContainer", "id": "node_ockzs2vw434", "props": { "rowGap": 20, "colGap": 20 }, "title": "行列容器", "isLocked": false, "condition": true, "conditionGroup": "", "children": [{ "componentName": "NextRow", "id": "node_ockzs2vw435", "props": {}, "title": "行", "isLocked": false, "condition": true, "conditionGroup": "", "children": [{ "componentName": "NextCol", "id": "node_ockzs2vw436", "props": { "colSpan": 1 }, "title": "列", "isLocked": false, "condition": true, "conditionGroup": "", "children": [{ "componentName": "NextP", "id": "node_ockzvfoetv17", "props": { "wrap": false, "type": "body2", "verAlign": "middle", "textSpacing": true, "align": "left" }, "docId": "dockzvfoetv", "title": "段落", "isLocked": false, "condition": true, "conditionGroup": "", "children": [{ "componentName": "NextText", "id": "node_ockzvfoetv18", "props": { "type": "h5", "children": { "type": "JSExpression", "value": "this.state.info?.info", "mock": "标题标题" }, "mark": false, "code": false, "delete": false, "underline": false, "strong": false }, "docId": "dockzvfoetv", "title": "", "isLocked": false, "condition": true, "conditionGroup": "" }] }] }] }] }] }], "title": "header" }, "isTab": false, "contentAlignCenter": false, "contentProps": { "style": { "background": "rgba(255,255,255,0)" } } }, "title": "页面", "isLocked": false, "condition": true, "conditionGroup": "", "children": [{ "componentName": "NextBlock", "id": "node_ockzs2vw437", "props": { "placeholderStyle": { "height": "100%" }, "noPadding": false, "noBorder": false, "title": "区域标题", "rowGap": 20, "colGap": 20, "background": "surface", "layoutmode": "O", "strict": true, "colSpan": 12, "rowSpan": 1, "mode": "transparent", "childTotalColumns": 12 }, "title": "区域", "isLocked": false, "condition": true, "conditionGroup": "", "children": [{ "componentName": "NextBlockCell", "id": "node_ockzs2vw438", "props": { "colSpan": 12, "rowSpan": 1, "mode": "procard", "isAutoContainer": true, "title": "区块标题" }, "title": "", "isLocked": false, "condition": true, "conditionGroup": "", "children": [{ "componentName": "NextRowColContainer", "id": "node_ockzs2vw439", "props": { "rowGap": 20, "colGap": 20 }, "title": "行列容器", "isLocked": false, "condition": true, "conditionGroup": "", "children": [{ "componentName": "NextRow", "id": "node_ockzs2vw43a", "props": {}, "title": "行", "isLocked": false, "condition": true, "conditionGroup": "", "children": [{ "componentName": "NextCol", "id": "node_ockzs2vw43b", "props": { "colSpan": 1, "justifyContent": "flex-start" }, "title": "列", "isLocked": false, "condition": true, "conditionGroup": "" }] }] }] }] }] }] }], "i18n": {} }).componentsTree?.[0];

      // 加载 schema
      project.openDocument(schema);
    },
  };
}
editorInit.pluginName = 'editorInit';

async function deleteAllPlugins() {
  const allPlugins = plugins.getAll();
  for (let plugin of allPlugins) {
    await plugins.delete(plugin.name);
  }
}

let pluginInited = false;
async function main() {
  if (location.href.includes('/products')) return;

  // 使用 override 标识该插件可以覆盖已注册的同名插件
  await plugins.register(editorInit, {}, { override: true });

  init(document.getElementById('lce-container')!, {
    enableCondition: true,
    enableCanvasLock: true,
    // 默认绑定变量
    supportVariableGlobally: true,
  });
};

export default function IndexPage() {
  return (
    <div>
      <Button type="primary" onClick={() => history.push('/products')} >Go to Products Page</Button>
      <div id="lce-container" style={{ height: '500px' }} ref={() => main()} />
    </div>
  )
}
