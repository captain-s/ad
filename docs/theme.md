# 主题配置

AD Maven 提供了灵活的主题系统，支持明暗主题切换和自定义主题颜色。

## 主题系统架构

### 核心组件

- **ThemeProvider**：主题提供者，负责管理主题状态和应用主题
- **AntdAdapter**：Ant Design 主题适配器，将自定义主题应用到 Ant Design 组件
- **主题令牌**：定义主题的基本变量，如颜色、字体、间距等

### 主题配置文件

主题配置位于 `src/theme` 目录下，主要包含以下文件：

- `theme-provider.tsx`：主题提供者组件
- `adapter/antd.adapter.tsx`：Ant Design 主题适配器
- `tokens/`：主题令牌定义
  - `base.ts`：基础令牌
  - `color.ts`：颜色令牌
  - `typography.ts`：排版令牌
  - `shadow.ts`：阴影令牌
  - `breakpoints.ts`：断点令牌

## 主题使用

### 主题提供者

在应用入口处使用 `ThemeProvider` 包裹应用：

```tsx
// src/App.tsx
import { ThemeProvider } from "./theme/theme-provider";
import { AntdAdapter } from "./theme/adapter/antd.adapter";

function App({ children }) {
  return (
    <ThemeProvider adapters={[AntdAdapter]}>
      {children}
    </ThemeProvider>
  );
}
```

### 主题切换

使用 `useSettings` 钩子切换主题：

```tsx
import { useSettings } from "@/store/settingStore";

function ThemeToggle() {
  const { themeMode, setThemeMode } = useSettings();

  return (
    <button
      onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
    >
      {themeMode === "light" ? "切换到深色主题" : "切换到浅色主题"}
    </button>
  );
}
```

### 主题颜色定制

项目支持自定义主题颜色，通过 `themeColorPresets` 配置：

```tsx
import { useSettings } from "@/store/settingStore";

function ColorPicker() {
  const { themeColorPresets, setThemeColorPresets } = useSettings();

  return (
    <select
      value={themeColorPresets}
      onChange={(e) => setThemeColorPresets(e.target.value)}
    >
      <option value="default">默认</option>
      <option value="blue">蓝色</option>
      <option value="green">绿色</option>
      <option value="orange">橙色</option>
      <option value="purple">紫色</option>
    </select>
  );
}
```

## 主题令牌

### 颜色令牌

颜色令牌定义了主题的颜色系统，包括：

- **主色**：品牌主色
- **辅助色**：成功、警告、错误、信息等状态颜色
- **中性色**：背景、文本、边框等颜色
- **功能色**：链接、禁用等颜色

### 排版令牌

排版令牌定义了主题的字体系统，包括：

- **字体家族**：字体类型
- **字体大小**：不同级别的字体大小
- **字体粗细**：不同级别的字体粗细
- **行高**：不同级别的行高

### 间距令牌

间距令牌定义了主题的间距系统，包括：

- **内边距**：不同级别的内边距
- **外边距**：不同级别的外边距
- **间距单位**：基础间距单位

### 圆角令牌

圆角令牌定义了主题的圆角系统，包括：

- **小圆角**：用于小型组件
- **默认圆角**：用于一般组件
- **大圆角**：用于大型组件

## 主题定制

### 自定义主题令牌

可以通过修改 `src/theme/tokens` 目录下的文件来自定义主题令牌：

```ts
// src/theme/tokens/color.ts
export const lightColorTokens = {
  palette: {
    primary: {
      default: "#1890ff",
      hover: "#40a9ff",
      active: "#096dd9",
    },
    // 其他颜色...
  },
  // 其他颜色令牌...
};
```

### 自定义 Ant Design 主题

可以通过修改 `AntdAdapter` 来自定义 Ant Design 主题：

```tsx
// src/theme/adapter/antd.adapter.tsx
export const AntdAdapter: UILibraryAdapter = ({ mode, children }) => {
  // 主题配置...

  const token: ThemeConfig["token"] = {
    colorPrimary: primaryColorToken.default,
    // 其他 Ant Design 主题配置...
  };

  return (
    <ConfigProvider theme={{ algorithm, token, components }}>
      <StyleProvider hashPriority="high">
        <App>{children}</App>
      </StyleProvider>
    </ConfigProvider>
  );
};
```

## 主题最佳实践

1. **保持一致性**：在整个应用中保持主题的一致性
2. **合理使用主题令牌**：使用主题令牌而不是硬编码的颜色和尺寸
3. **考虑可访问性**：确保主题颜色满足可访问性标准
4. **性能优化**：避免频繁切换主题，影响性能
5. **用户偏好**：尊重用户的系统主题偏好
