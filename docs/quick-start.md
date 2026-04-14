# 快速开始

本指南将帮助你快速搭建 AD Maven 项目的开发环境并运行项目。

## 环境要求

- Node.js 20.x
- pnpm 10.x

## 安装步骤

### 1. 克隆项目

```bash
git clone https://github.com/d3george/slash-admin.git
cd slash-admin
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 运行开发服务器

```bash
pnpm dev
```

项目将在 `http://localhost:5173` 启动。

### 4. 构建生产版本

```bash
pnpm build
```

构建产物将输出到 `dist` 目录。

### 5. 预览生产版本

```bash
pnpm preview
```

## 环境配置

项目使用 `.env` 文件进行环境配置，你可以根据需要创建和修改此文件。

### 示例 `.env` 文件

```env
# 基础路径
VITE_PUBLIC_PATH=/

# 应用名称
VITE_APP_NAME=AD Maven

# API 基础URL
VITE_API_BASE_URL=http://localhost:3000/api

# 路由模式: frontend | backend
VITE_ROUTER_MODE=frontend
```

## 开发工具

推荐使用以下开发工具：

- VS Code：代码编辑器
- ESLint：代码质量检查
- Prettier：代码格式化
- Git：版本控制

## 常见问题

### 依赖安装失败

如果依赖安装失败，可以尝试：

```bash
pnpm install --force
```

### 端口被占用

如果端口 5173 被占用，可以修改 `vite.config.ts` 文件中的端口配置。

### 构建失败

如果构建失败，请检查 TypeScript 类型错误和代码语法错误。
