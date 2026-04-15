# 开发流程

本指南介绍 AD Maven 项目的开发规范和构建流程，帮助开发者更好地参与项目开发。

## 开发规范

### 代码风格

项目使用 Biome 进行代码风格检查和格式化，遵循以下规范：

- **缩进**：使用 2 个空格
- **分号**：不使用分号
- **引号**：使用单引号
- **命名规范**：
  - 组件名称：PascalCase
  - 函数名称：camelCase
  - 变量名称：camelCase
  - 常量名称：UPPER_CASE
  - 类型名称：PascalCase

### 目录结构

- **src/components/**：通用组件
- **src/pages/**：页面组件
- **src/layouts/**：布局组件
- **src/api/**：API 服务
- **src/routes/**：路由配置
- **src/assets/**：静态资源
- **src/hooks/**：自定义钩子
- **src/store/**：状态管理
- **src/utils/**：工具函数
- **src/theme/**：主题配置
- **src/locales/**：国际化资源

### 命名规范

- **文件命名**：
  - 组件文件：PascalCase.tsx
  - 工具文件：camelCase.ts
  - 类型文件：PascalCase.types.ts

- **变量命名**：
  - 组件变量：PascalCase
  - 函数变量：camelCase
  - 状态变量：camelCase
  - 常量：UPPER_CASE

### 代码注释

- **组件注释**：使用 JSDoc 注释，说明组件的用途、属性和使用方法
- **函数注释**：使用 JSDoc 注释，说明函数的用途、参数和返回值
- **复杂逻辑注释**：对复杂的业务逻辑添加注释，说明实现思路

## 开发工具

### 推荐工具

- **VS Code**：代码编辑器
- **Biome**：代码风格检查和格式化
- **ESLint**：代码质量检查
- **Prettier**：代码格式化
- **Git**：版本控制

### VS Code 扩展

- **ESLint**：代码质量检查
- **Prettier**：代码格式化
- **TypeScript**：TypeScript 支持
- **Tailwind CSS IntelliSense**：Tailwind CSS 智能提示
- **Path Intellisense**：路径智能提示

## 构建流程

### 开发环境

```bash
# 启动开发服务器
pnpm dev

# 构建开发版本
pnpm build:dev
```

### 生产环境

```bash
# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

### 构建配置

构建配置位于 `vite.config.ts` 文件中，主要配置包括：

- 基础路径
- 别名配置
- 插件配置
- 构建选项

## 提交规范

项目使用 Commitlint 进行提交信息检查，遵循以下规范：

### 提交信息格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 提交类型

- **feat**：新功能
- **fix**：修复 bug
- **docs**：文档更新
- **style**：代码风格调整
- **refactor**：代码重构
- **test**：测试更新
- **chore**：构建过程或辅助工具的变动

### 示例

```
feat(auth): add login functionality

Add login form and authentication logic

Closes #123
```

## 分支管理

### 分支规范

- **main**：主分支，用于发布生产版本
- **develop**：开发分支，用于集成新功能
- **feature/**：功能分支，用于开发新功能
- **bugfix/**：bug 修复分支，用于修复 bug
- **hotfix/**：热修复分支，用于紧急修复生产问题

### 分支流程

1. 从 `develop` 分支创建功能分支
2. 在功能分支上开发
3. 提交代码并推送到远程仓库
4. 创建 Pull Request 到 `develop` 分支
5. 代码审查通过后合并到 `develop` 分支
6. 当 `develop` 分支稳定后，合并到 `main` 分支发布

## 测试

### 测试工具

- **Jest**：单元测试
- **React Testing Library**：组件测试
- **Cypress**：端到端测试

### 测试命令

```bash
# 运行单元测试
pnpm test

# 运行端到端测试
pnpm test:e2e
```

## 部署

### 部署方式

- **Vercel**：推荐的部署平台
- **Netlify**：可选的部署平台
- **GitHub Pages**：静态站点部署

### 部署配置

在部署平台上配置以下环境变量：

- `VITE_PUBLIC_PATH`：基础路径
- `VITE_APP_NAME`：应用名称
- `VITE_API_BASE_URL`：API 基础 URL
- `VITE_ROUTER_MODE`：路由模式

## 常见问题

### 代码风格检查失败

运行以下命令修复代码风格：

```bash
pnpm biome format --write .
```

### 构建失败

- 检查 TypeScript 类型错误
- 检查代码语法错误
- 检查依赖版本兼容性

### 测试失败

- 检查测试用例是否正确
- 检查组件行为是否符合预期
- 检查 API 调用是否正确

### 部署失败

- 检查环境变量配置
- 检查构建产物是否正确
- 检查部署平台配置
