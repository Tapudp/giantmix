"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
exports.App = function () {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, null, "Welcome to React Native!"),
        react_1.default.createElement(react_native_1.Text, null, "To get started, edit App.tsx"),
        react_1.default.createElement(react_native_1.Text, null, count),
        react_1.default.createElement(react_native_1.Button, { title: "increment", onPress: function () { return setCount(count + 1); } })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center"
    }
});
