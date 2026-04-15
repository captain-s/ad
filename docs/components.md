# 组件库

AD Maven 提供了丰富的内置组件，方便开发者快速构建管理系统界面。

## 组件目录结构

组件位于 `src/components` 目录下，按照功能分类组织：

- `animate/`：动画相关组件
- `auth/`：权限管理组件
- `avatar-group/`：头像组组件
- `chart/`：图表组件
- `code/`：代码展示组件
- `editor/`：富文本编辑器
- `icon/`：图标组件
- `loading/`：加载组件
- `locale-picker/`：语言选择器
- `logo/`：Logo 组件
- `nav/`：导航组件
- `toast/`：消息提示组件
- `upload/`：文件上传组件

## 核心组件

### 导航组件

#### 垂直导航

```tsx
import { VerticalNav } from "@/components/nav";

<VerticalNav menuData={menuData} currentPath={pathname} />
```

#### 水平导航

```tsx
import { HorizontalNav } from "@/components/nav";

<HorizontalNav menuData={menuData} currentPath={pathname} />
```

### 上传组件

#### 基础上传

```tsx
import { Upload } from "@/components/upload";

<Upload
  action="/api/upload"
  onChange={(file) => console.log(file)}
/>
```

#### 头像上传

```tsx
import { UploadAvatar } from "@/components/upload";

<UploadAvatar
  action="/api/upload/avatar"
  value={avatarUrl}
  onChange={(url) => console.log(url)}
/>
```

### 图表组件

```tsx
import { Chart } from "@/components/chart";

<Chart
  type="line"
  options={{
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
    series: [
      {
        name: "Sales",
        data: [100, 200, 150, 300, 250],
      },
    ],
  }}
/>
```

### 动画组件

```tsx
import { MotionLazy } from "@/components/animate";

<MotionLazy>
  <div>内容将以动画方式加载</div>
</MotionLazy>
```

### 图标组件

```tsx
import { Icon } from "@/components/icon";

<Icon name="ic-user" size={24} />
```

## 组件使用最佳实践

1. **按需导入**：只导入需要的组件，减少包体积
2. **合理配置**：根据实际需求配置组件属性
3. **样式定制**：使用 Tailwind CSS 或组件提供的样式属性进行定制
4. **性能优化**：避免在渲染过程中创建不必要的组件实例
5. **错误处理**：合理处理组件可能出现的错误

## 自定义组件

如果内置组件不能满足需求，可以按照以下步骤创建自定义组件：

1. 在 `src/components` 目录下创建新的组件目录
2. 实现组件逻辑
3. 在组件目录下创建 `index.ts` 文件导出组件
4. 在需要使用的地方导入并使用

## 组件开发规范

1. **命名规范**：组件名称使用 PascalCase，文件名称与组件名称一致
2. **类型定义**：为组件属性添加 TypeScript 类型定义
3. **文档注释**：为组件添加 JSDoc 注释，说明组件的用途和属性
4. **测试**：为组件编写测试用例
5. **性能优化**：考虑组件的性能，避免不必要的渲染
