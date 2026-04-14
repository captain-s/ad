# 权限管理

AD Maven 提供了完整的权限管理系统，支持基于角色和权限的访问控制。

## 权限系统架构

### 核心概念

- **权限 (Permission)**：具体的操作权限，如 `user.create`、`user.edit` 等
- **角色 (Role)**：一组权限的集合，如 `admin`、`editor` 等
- **用户 (User)**：拥有一个或多个角色

### 权限检查方式

项目提供了以下权限检查方式：

1. **单个权限检查**：检查用户是否具有特定权限
2. **任一权限检查**：检查用户是否具有多个权限中的任意一个
3. **全部权限检查**：检查用户是否具有所有指定的权限

## 权限管理组件

### AuthGuard 组件

`AuthGuard` 是一个用于权限检查的组件，可根据用户权限条件渲染内容。

#### 基本用法

```tsx
import { AuthGuard } from "@/components/auth";

// 检查单个权限
<AuthGuard check="user.create">
  <button>创建用户</button>
</AuthGuard>

// 检查多个权限（任一）
<AuthGuard checkAny={["user.create", "user.edit"]}>
  <button>编辑用户</button>
</AuthGuard>

// 检查多个权限（全部）
<AuthGuard checkAll={["user.create", "user.edit"]}>
  <button>高级编辑</button>
</AuthGuard>

// 基于角色检查
<AuthGuard check="admin" baseOn="role">
  <AdminPanel />
</AuthGuard>

// 带降级内容
<AuthGuard check="admin" fallback={<div>无权限访问</div>}>
  <AdminPanel />
</AuthGuard>
```

### useAuthCheck 钩子

`useAuthCheck` 是一个自定义钩子，用于在组件内部进行权限检查。

#### 基本用法

```tsx
import { useAuthCheck } from "@/components/auth";

function MyComponent() {
  const checkPermission = useAuthCheck("permission");
  const checkRole = useAuthCheck("role");

  // 检查单个权限
  const canCreateUser = checkPermission.check("user.create");
  
  // 检查多个权限（任一）
  const canEditUser = checkPermission.checkAny(["user.create", "user.edit"]);
  
  // 检查多个权限（全部）
  const canAdvancedEdit = checkPermission.checkAll(["user.create", "user.edit"]);
  
  // 检查角色
  const isAdmin = checkRole.check("admin");

  return (
    <div>
      {canCreateUser && <button>创建用户</button>}
      {isAdmin && <AdminPanel />}
    </div>
  );
}
```

## 权限配置

### 前端权限配置

在前端路由模式下，权限配置可以在路由和菜单中设置。

#### 路由权限配置

```tsx
// src/routes/sections/main.tsx
import { type RouteObject } from "react-router";
import { AuthGuard } from "@/components/auth";
import AdminPage from "@/pages/admin";

export const mainRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: (
      <AuthGuard check="admin" baseOn="role">
        <AdminPage />
      </AuthGuard>
    ),
  },
];
```

#### 菜单权限配置

```tsx
// src/layouts/dashboard/nav/nav-data/nav-data-frontend.tsx
import type { MenuItem } from "@/layouts/dashboard/nav/types";

export const frontendMenuData: MenuItem[] = [
  {
    key: "admin",
    label: "Admin",
    icon: "ic-setting",
    path: "/admin",
    permission: { check: "admin", baseOn: "role" },
  },
];
```

### 后端权限配置

在后端路由模式下，权限配置由后端 API 提供。

## 权限管理最佳实践

1. **细粒度权限**：将权限细化到具体操作，如 `user.create`、`user.edit` 等
2. **角色管理**：使用角色来组织权限，方便管理用户权限
3. **权限检查**：在路由、组件和 API 调用中都进行权限检查
4. **权限缓存**：合理缓存权限信息，减少重复请求
5. **权限日志**：记录权限相关的操作，便于审计

## 常见问题

### 权限检查不生效

- 检查用户是否已登录
- 检查权限名称是否正确
- 检查角色配置是否正确

### 权限管理性能问题

- 使用权限缓存
- 避免在渲染过程中频繁进行权限检查
- 合理组织权限结构
