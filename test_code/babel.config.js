module.exports = {
  presets: [
    ["@babel/preset-env"],
    ["@babel/preset-react", { runtime: "automatic" }], // 자동 JSX 변환 활성화
    ["@babel/preset-typescript"],
  ],
};
