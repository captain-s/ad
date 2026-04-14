# 路由配置

AD Maven 使用 React Router 7 进行路由管理，支持前端和后端两种路由模式。

## 路由模式

### 前端路由模式

在前端路由模式下，路由配置完全在前端定义，适用于静态菜单结构。

### 后端路由模式

在后端路由模式下，菜单和路由由后端 API 提供，适用于动态菜单结构。

## 路由配置结构

路由配置位于 `src/routes/sections` 目录下，主要包含以下文件：

- `index.tsx`：路由配置的入口文件，整合所有路由
- `auth.tsx`：认证相关路由
- `dashboard.tsx`：仪表盘相关路由
- `main.tsx`：主要功能路由

## 路由配置示例

### 基本路由配置

```tsx
// src/routes/sections/main.tsx
import { type RouteObject } from "react-router";
import BlankPage from "@/pages/sys/others/blank";
import CalendarPage from "@/pages/sys/others/calendar";

export const mainRoutes: RouteObject[] = [
  {
    path: "/blank",
    element: <BlankPage />,
  },
  {
    path: "/calendar",
    element: <CalendarPage />,
  },
];
```

### 带权限的路由

```tsx
// src/routes/sections/dashboard/frontend.tsx
import { type RouteObject } from "react-router";
import { LoginAuthGuard } from "@/routes/components/login-auth-guard";
import { DashboardLayout } from "@/layouts/dashboard";
import WorkbenchPage from "@/pages/dashboard/workbench";
import AnalysisPage from "@/pages/dashboard/analysis";

export const frontendDashboardRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <LoginAuthGuard>
        <DashboardLayout />
      </LoginAuthGuard>
    ),
    children: [
      {
        path: "workbench",
        element: <WorkbenchPage />,
      },
      {
        path: "analysis",
        element: <AnalysisPage />,
      },
    ],
  },
];
```

## 如何添加新路由

### 1. 创建页面组件

首先，在 `src/pages` 目录下创建新的页面组件。

### 2. 添加路由配置

在相应的路由配置文件中添加新的路由。

### 3. 更新菜单配置

如果是前端路由模式，需要在 `src/layouts/dashboard/nav/nav-data` 目录下更新菜单配置。

## 路由守卫

项目提供了以下路由守卫：

### LoginAuthGuard

用于检查用户是否已登录，未登录则重定向到登录页面。

```tsx
import { LoginAuthGuard } from "@/routes/components/login-auth-guard";

<LoginAuthGuard>
  <ProtectedComponent />
</LoginAuthGuard>
```

### AuthGuard

用于检查用户是否具有特定权限，详情请参考 [权限管理](permission.md) 文档。

## 路由钩子

项目提供了以下路由相关的自定义钩子：

- `useParams`：获取路由参数
- `usePathname`：获取当前路径
- `useRouter`：获取路由实例
- `useSearchParams`：获取查询参数

## 路由配置最佳实践

1. **合理组织路由结构**：按照功能模块组织路由
2. **使用路由守卫**：保护需要认证的路由
3. **添加路由权限**：根据用户权限控制路由访问
4. **使用懒加载**：减少初始加载时间
5. **添加路由过渡效果**：提升用户体验
