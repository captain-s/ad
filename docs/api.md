# API 调用

AD Maven 提供了统一的 API 调用方式，基于 Axios 封装，支持请求拦截、响应拦截、错误处理等功能。

## API 服务结构

API 服务位于 `src/api` 目录下，主要包含以下文件：

- `apiClient.ts`：API 客户端配置
- `services/`：API 服务定义
  - `demoService.ts`：示例服务
  - `menuService.ts`：菜单服务
  - `userService.ts`：用户服务

## API 客户端配置

`apiClient.ts` 文件配置了 Axios 实例，包括：

- 基础 URL
- 请求拦截器：添加认证信息等
- 响应拦截器：处理响应数据、错误处理等

## API 服务使用

### 基本用法

```tsx
import userService from "@/api/services/userService";

// 调用 API
const userList = await userService.getUserList();
```

### 示例服务

#### 用户服务

```ts
// src/api/services/userService.ts
import { apiClient } from "../apiClient";

export default {
  // 获取用户列表
  getUserList: () => apiClient.get("/users"),
  
  // 获取用户详情
  getUserDetail: (id: string) => apiClient.get(`/users/${id}`),
  
  // 创建用户
  createUser: (data: any) => apiClient.post("/users", data),
  
  // 更新用户
  updateUser: (id: string, data: any) => apiClient.put(`/users/${id}`, data),
  
  // 删除用户
  deleteUser: (id: string) => apiClient.delete(`/users/${id}`),
};
```

#### 菜单服务

```ts
// src/api/services/menuService.ts
import { apiClient } from "../apiClient";

export default {
  // 获取菜单列表
  getMenuList: () => apiClient.get("/menu"),
};
```

## API 调用最佳实践

1. **统一管理**：将 API 调用统一管理在 `services` 目录下
2. **类型定义**：为 API 请求和响应添加 TypeScript 类型定义
3. **错误处理**：合理处理 API 调用错误
4. **请求取消**：在组件卸载时取消未完成的请求
5. **缓存策略**：对频繁请求的数据进行缓存
6. **请求重试**：对网络错误进行自动重试

## API 模拟

项目使用 Mock Service Worker (MSW) 进行 API 模拟，位于 `src/_mock` 目录下。

### 模拟数据配置

```ts
// src/_mock/handlers/_user.ts
import { rest } from "msw";
import { GLOBAL_CONFIG } from "@/global-config";
import { users } from "../assets";

export const userHandlers = [
  rest.get(`${GLOBAL_CONFIG.apiBaseUrl}/users`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
  rest.get(`${GLOBAL_CONFIG.apiBaseUrl}/users/:id`, (req, res, ctx) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === id);
    return res(ctx.status(200), ctx.json(user));
  }),
];
```

### 启用模拟

在 `src/main.tsx` 文件中启用模拟：

```tsx
import { worker } from "./_mock";

// 启动模拟服务
await worker.start({
  onUnhandledRequest: "bypass",
  serviceWorker: { url: urlJoin(GLOBAL_CONFIG.publicPath, "mockServiceWorker.js") },
});
```

## 常见问题

### API 调用失败

- 检查网络连接
- 检查 API URL 是否正确
- 检查认证信息是否有效
- 检查后端服务是否运行

### 模拟数据不生效

- 检查 MSW 是否正确启动
- 检查请求 URL 是否匹配模拟配置
- 检查浏览器是否支持 Service Worker

### 性能问题

- 使用请求缓存
- 批量请求
- 合理使用 TanStack Query 进行数据管理
