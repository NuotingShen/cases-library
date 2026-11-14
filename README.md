# Digital–Physical Visualization Library

A small website that shows each case (paper or project) as a card with an image and tags, plus a "Design space" view that places cases in a grid of *role of the digital part × collaboration*.

## 文件结构

```
dataphys-library/
├── index.html      # 整个网站（数据也在这个文件里）
├── images/         # 每个案例的图片，文件名 = 案例的 id
└── README.md
```

## 如何添加一篇新论文

打开 `index.html`，找到 `const PAPERS = [`，复制任意一个 `{ ... },` 粘贴进去，然后修改内容：

```js
{ id: "my-new-paper",            // 唯一、全小写、用短横线，也是图片文件名
  title: "Paper title",
  authors: "Author et al.",
  year: 2026,
  category: "Pure Overlay",      // Pure Overlay | Actuated + Overlay | Actuated
  physical: "...",               // 实物部分
  digital: "...",                // 数字部分
  combination: "...",            // 数字和实物怎么结合（卡片上显示）
  role: "Display",               // Display | Actuate + Display | Actuate
  flow: "Digital → Physical",    // Digital → Physical | Physical → Digital | Bidirectional
  spatial: ["On top"],           // On top / Underneath / Around / Above / Inside / Separate，可多选
  collaboration: "Individual",   // Individual | Presentation | Shared | Collaboration
  encodesData: "Yes",
  url: "https://doi.org/...",    // 论文链接，可留空 ""
  notes: "" },
```

想加新的维度或取值，改 `DIMENSIONS` 列表即可，筛选按钮会自动更新。

## 如何添加图片

把图片放进 `images/` 文件夹，命名为 `<id>.jpg`，比如 `images/uplift.jpg`。
也可以在案例里写 `image: "https://..."` 使用网络图片。没有图片时会自动显示一个按"数字部分作用"着色的占位图。

注意：论文里的图片有版权，网站如果公开，最好只用自己拍的照片、注明出处，或者把仓库设为私有。

## 如何放到 GitHub 上

1. 在 GitHub 新建一个仓库（例如 `dataphys-library`），可以选 Private。
2. 把这三个文件/文件夹上传（网页上点 "Add file → Upload files"，或用 git push）。
3. 进入仓库的 **Settings → Pages**，Source 选 **Deploy from a branch**，Branch 选 `main` 和 `/ (root)`，保存。
4. 一两分钟后，网站地址会显示在同一页面，形如 `https://<用户名>.github.io/dataphys-library/`。

注意：免费账号的私有仓库不能开 GitHub Pages；可以用公开仓库，或在本地直接双击 `index.html` 打开。

## 本地查看

直接双击 `index.html` 就能在浏览器打开，不需要安装任何东西。
