# 布局系统

AD Maven 提供了灵活的布局系统，支持多种布局方式和配置选项。

## 布局类型

### 仪表盘布局

仪表盘布局是项目的主要布局，包含以下部分：

- **顶部导航栏**：显示应用名称、用户信息、通知等
- **侧边导航**：显示菜单导航
- **主内容区**：显示页面内容
- **多标签页**：管理打开的页面标签

### 简单布局

简单布局适用于不需要侧边导航的页面，如登录页、注册页等。

## 布局配置

### 仪表盘布局配置

仪表盘布局位于 `src/layouts/dashboard` 目录下，主要包含以下文件：

- `index.tsx`：布局主文件
- `header.tsx`：顶部导航栏
- `main.tsx`：主内容区
- `nav/`：导航相关组件
- `multi-tabs/`：多标签页组件

### 布局使用

在路由配置中使用布局：

```tsx
import { DashboardLayout } from "@/layouts/dashboard";
import { SimpleLayout } from "@/layouts/simple";

// 使用仪表盘布局
{
  path: "/",
  element: <DashboardLayout />,
  children: [
    // 子路由
  ],
}

// 使用简单布局
{
  path: "/login",
  element: <SimpleLayout />,
  children: [
    // 子路由
  ],
}
```

## 导航配置

### 前端导航配置

在前端路由模式下，导航配置位于 `src/layouts/dashboard/nav/nav-data/nav-data-frontend.tsx` 文件中。

```tsx
import { Icon } from "@/components/icon";
import type { NavProps } from "@/components/nav";
import { Badge } from "@/ui/badge";

export const frontendNavData: NavProps["data"] = [
  {
    name: "sys.nav.dashboard",
    items: [
      {
        title: "sys.nav.workbench",
        path: "/workbench",
        icon: <Icon icon="local:ic-workbench" size="24" />,
      },
      {
        title: "sys.nav.analysis",
        path: "/analysis",
        icon: <Icon icon="local:ic-analysis" size="24" />,
      },
    ],
  },
  {
    name: "sys.nav.pages",
    items: [
      // 管理菜单
      {
        title: "sys.nav.management",
        path: "/management",
        icon: <Icon icon="local:ic-management" size="24" />,
        children: [
          {
            title: "sys.nav.user.index",
            path: "/management/user",
          },
          {
            title: "sys.nav.system.index",
            path: "/management/system",
          },
        ],
      },
    ],
  },
];
```

### 菜单隐藏方法

#### 1. 使用 `hidden` 属性

您可以在菜单项上添加 `hidden` 属性来隐藏菜单：

```tsx
{
  title: "sys.nav.analysis",
  path: "/analysis",
  icon: <Icon icon="local:ic-analysis" size="24" />,
  hidden: true, // 添加此属性隐藏菜单
},
```

#### 2. 使用 `auth` 属性进行权限控制

您可以通过权限控制来隐藏菜单，只有具有特定权限的用户才能看到：

```tsx
{
  title: "sys.nav.permission",
  path: "/permission",
  icon: <Icon icon="mingcute:safe-lock-fill" size="24" />,
  auth: ["permission:read"], // 只有具有 permission:read 权限的用户才能看到
},
```

#### 3. 使用 `disabled` 属性禁用菜单

您可以使用 `disabled` 属性禁用菜单：

```tsx
{
  title: "sys.nav.disabled",
  path: "/disabled",
  icon: <Icon icon="local:ic-disabled" size="24" />,
  disabled: true, // 禁用菜单
},
```

### 后端导航配置

在后端路由模式下，导航配置由后端 API 提供，通过 `menuService.getMenuList()` 获取。

### 菜单配置最佳实践

1. **合理组织菜单结构**：按照功能模块组织菜单
2. **使用国际化**：菜单项标题使用国际化键值
3. **添加图标**：为菜单项添加图标，提升用户体验
4. **使用权限控制**：根据用户权限显示不同的菜单
5. **隐藏不需要的菜单**：在开发阶段，使用 `hidden` 属性隐藏不需要的菜单

## 多标签页配置

多标签页功能位于 `src/layouts/dashboard/multi-tabs` 目录下，支持以下功能：

- 打开新标签页
- 关闭标签页
- 标签页排序
- 标签页刷新

## 布局定制

### 主题定制

布局支持明暗主题切换，通过 `ThemeProvider` 实现。

### 导航定制

可以通过修改导航组件的配置来定制导航样式和行为。

### 响应式布局

布局支持响应式设计，在不同屏幕尺寸下自动调整布局结构：

- 大屏幕：显示完整的侧边导航
- 中等屏幕：可折叠的侧边导航
- 小屏幕：使用移动端导航

## 布局最佳实践

1. **合理使用布局**：根据页面类型选择合适的布局
2. **保持一致性**：在整个应用中保持布局的一致性
3. **响应式设计**：确保布局在不同设备上都能正常显示
4. **性能优化**：避免布局嵌套过深，影响性能
5. **用户体验**：考虑用户操作习惯，优化布局结构
