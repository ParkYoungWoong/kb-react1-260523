---
name: component-creator
description: 리액트 컴포넌트를 새롭게 만들 때 사용하는 컴포넌트 템플릿을 생성합니다.
model: haiku
---

# 리액트 컴포넌트 생성

- 경로가 `@/`으로 시작하면 `src/` 경로로 변환!
- 컴포넌트 이름만 제공하면, `src/components/` 경로에 생성!
- 컴포넌트 이름도 제공이 안 되면, `src/components/App.tsx` 파일로 생성!

컴포넌트 경로와 이름을 받아서 다음 템플릿으로 파일 생성:

```tsx
import { useState } from 'react'

export default function 컴포넌트이름() {
  return <></>
}
```
