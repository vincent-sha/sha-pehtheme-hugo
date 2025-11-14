---
title: "使用 Stack 视图构建布局"
date: 2025-11-04T22:11:36+07:00
slug: /swift-stack/
description: 本文介绍了如何使用 SwiftUI 中的 HStack、VStack 和 ZStack 三种 Stack 视图来构建复杂且灵活的布局。
image: images/swift-cover-001.jpg
categories:
  - tutorial
tags:
  - swift
  - code
draft: false
---

## 使用 Stack 视图构建布局

通过 SwiftUI 中原生的容器视图，可以轻松构建复杂且灵活的界面布局。

### 三种 Stack 视图简介

- **HStack**：用于将视图水平排列。
- **VStack**：用于将视图垂直排列。
- **ZStack**：用于将视图相互叠放，实现深度层次。

默认情况下，stack 视图会将内容居中对齐，并在子视图之间加入间隔。结合 `Spacer` 和 `Divider`，可以创建高度灵活的布局。

![Stack 视图示意图](http://developer.apple.com/cn/documentation/swiftui/building-layouts-with-stack-views/Building%20Layouts%20with%20Stack%20Views%20_%20Apple%20Developer%20Documentation_files/Building-Layouts-with-Stack-Views-1@2x.png)

---

### 规划布局层次结构

构建复杂布局时，应将设计拆分成多个小的 stack 视图组合。以下示例展示了如何使用三种 stack 视图创建个人资料页：

![个人资料布局示意图](http://developer.apple.com/cn/documentation/swiftui/building-layouts-with-stack-views/Building%20Layouts%20with%20Stack%20Views%20_%20Apple%20Developer%20Documentation_files/Building-Layouts-with-Stack-Views-2@2x.png)

- `ZStack` 用作底层容器，包含个人头像 `Image`。
- 头像上方叠加一个半透明的 `HStack`。
- `HStack` 内部包含一个左对齐的 `VStack`，显示两行文本。
- `Spacer` 用于将文本推向左侧边缘。

```swift
struct ProfileView: View {
    var body: some View {
        ZStack(alignment: .bottom) {
            Image("ProfilePicture")
                .resizable()
                .aspectRatio(contentMode: .fit)
            HStack {
                VStack(alignment: .leading) {
                    Text("Rachael Chiseck")
                        .font(.headline)
                    Text("Chief Executive Officer")
                        .font(.subheadline)
                }
                Spacer()
            }
            .padding()
            .foregroundColor(.primary)
            .background(Color.primary
                            .colorInvert()
                            .opacity(0.75))
        }
    }
}
```

---

### 利用 Alignment 和 Spacer 定位视图

- `alignment` 属性控制 stack 内部子视图的对齐方式。`VStack` 使用水平对齐 (`leading`、`center`、`trailing`)，`HStack` 使用垂直对齐。
- `Spacer` 视图会在主轴方向上扩展，填充剩余空间，从而推动其他视图靠边排列。

![对齐示意图](http://developer.apple.com/cn/documentation/swiftui/building-layouts-with-stack-views/Building%20Layouts%20with%20Stack%20Views%20_%20Apple%20Developer%20Documentation_files/Building-Layouts-with-Stack-Views-3@2x.png)

![Spacer 使用示意图](http://developer.apple.com/cn/documentation/swiftui/building-layouts-with-stack-views/Building%20Layouts%20with%20Stack%20Views%20_%20Apple%20Developer%20Documentation_files/Building-Layouts-with-Stack-Views-4@2x.png)

- `Divider` 用于在子视图间插入一条线，但不会扩展填充空间。

---

### 创建自适应布局，避免固定尺寸

建议通过定义视图的结构和层次来实现自适应布局，避免给视图设定固定的宽高。这样布局可以更好地适配不同设备和屏幕尺寸。只有在无法通过自适应方式满足需求时，才考虑使用 `frame(width:height:alignment:)` 或 `position(x:y:)` 等修饰符。

---

### 通过视图修饰符添加深度

除了使用 `ZStack`，还可以通过 `overlay(_:alignment:)` 和 `background(_:alignment:)` 修饰符在视图上层或下层添加子视图，实现视觉上的叠加效果。

示例代码：

```swift
struct ProfileViewWithOverlay: View {
    var body: some View {
        VStack {
            Image("ProfilePicture")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .overlay(ProfileDetail(), alignment: .bottom)
        }
    }
}

struct ProfileDetail: View {
    var body: some View {
        HStack {
            VStack(alignment: .leading) {
                Text("Rachael Chiseck")
                    .font(.headline)
                Text("Chief Executive Officer")
                    .font(.subheadline)
            }
            Spacer()
        }
        .padding()
        .foregroundColor(.primary)
        .background(Color.primary
                        .colorInvert()
                        .opacity(0.75))
    }
}
```

---

### 相关链接

- [HStack](https://developer.apple.com/documentation/swiftui/hstack) - 水平排列子视图
- [VStack](https://developer.apple.com/documentation/swiftui/vstack) - 垂直排列子视图
- [ZStack](https://developer.apple.com/documentation/swiftui/zstack) - 叠放子视图并对齐

---

© 2025 Apple Inc. 保留所有权利。更多信息请访问 [Apple 开发者网站](https://developer.apple.com/cn/)。