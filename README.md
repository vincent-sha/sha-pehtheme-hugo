# Pehtheme Hugo

Pehtheme Hugo 是一款开源的 Hugo 主题，灵感来源于 [Material Design v3](https://m3.material.io/)，采用 Tailwind CSS 进行精心开发。

![Pehtheme Hugo 预览图](https://raw.githubusercontent.com/fauzanmy/pehtheme-hugo/main/images/tn.png)

## 在线演示

点击访问 [Pehtheme Hugo 在线演示](https://pehtheme-hugo.netlify.app/)，体验主题效果。

## 性能测试

你可以使用 Google 的 PageSpeed Insights 工具测试使用 Pehtheme Hugo 构建的网站性能：

[PageSpeed Insights 测试链接](https://pagespeed.web.dev/analysis/https-pehtheme-hugo-netlify-app/7gv9zedw83?form_factor=mobile)

## 主要特性

- 基于 Tailwind CSS 构建
- 主页支持展示特色文章（通过 `feature` 标签标记）
- 水平菜单和内容标签列表
- 无需依赖任何JavaScript框架，仅使用原生JS实现切换按钮
- 双栏博客布局设计
- 侧边栏包含最新文章列表
- 使用语义化 HTML
- 侧边栏支持广告位展示

## 安装指南

1. 安装 Hugo 并创建新站点。详细步骤请参考 [Hugo 快速入门指南](https://gohugo.io/getting-started/quick-start/)。
2. 通过命令建立项目（项目名以my-site为例）:

```bash
hugo new site my-site
cd my-site
git init
```

1. 将Pehtheme Hugo 主题作为子模块添加到项目中

```bash
git submodule add https://github.com/fauzanmy/pehtheme-hugo.git themes/pehtheme-hugo
```

1. 把exampleSite文件里的以下2个文件夹和hugo.toml配置文件拷贝到根目录覆盖原有文件。

```bash
exampleSite/
├── assets/
├── content/
└── hugo.toml
```

1. 启动 Hugo 服务器：

```bash
hugo server

```

## 配置说明

在你的 `hugo.toml` 配置文件中添加或修改以下配置项：

```toml
summaryLength = 20  # 文章摘要长度，约20个单词（160字符）

[services]
  [services.googleAnalytics]
  id = 'G-MEASUREMENT_ID'  # 替换为你的谷歌分析GA4代码

  [services.disqus]
  shortname = 'shortname'  # 替换为你的Disqus短名称

[pagination]
  pagerSize = 10  # 首页每页显示文章数量

```

## 许可协议

Pehtheme Hugo 采用 MIT 许可证，详情请查看 [LICENSE 文件](https://github.com/fauzanmy/pehtheme-hugo/blob/main/LICENSE)。

## 图标与图片资源

- Logo 图标“Egg Fried”来源于 [Bootstrap Icons - Egg Fried](https://icons.getbootstrap.com/icons/egg-fried/)
- 预览图及示例图片资源来自 Unsplash 及 Pixabay：
    - https://unsplash.com/photos/Smeer5L0tXM
    - https://unsplash.com/photos/2q6C5zDJOsg
    - https://unsplash.com/photos/UNd3lRKhwSw
    - https://unsplash.com/photos/Ed2AELHKYBw
    - https://unsplash.com/photos/rTZW4f02zY8
    - https://unsplash.com/photos/OtXJhYjbKeg
    - https://unsplash.com/photos/ZPP-zP8HYG0
    - https://unsplash.com/photos/ydGRmobx5jA
    - https://pixabay.com/vectors/email-newsletter-email-marketing-3249062/