# Hooks 的 TS 用法

## useState

多数情况下，`useState`可以根据初始值做类型推断，不需要额外限定类型，但如果初始值是`null`或`undefined`的话，或者需要更复杂的类型限制，比如数组或者对象，就需要声明类型。

```tsx
// 可以推断为number类型
const [value, setValue] = useState(0);

// 明确声明类型
const [value, setValue] = useState<number | undefined>(undefined);
const [value, setValue] = useState<Array<number>>([]);

// 复杂对象类型
interface MyObject {
  foo: string;
  bar?: number;
}
const [value, setValue] = useState<MyObject>({ foo: 'hello' });
```

## useContext

`useContent`可以通过传入的`context`对象来推断类型，所以也不需要明确限定类型。

```tsx
type Theme = 'light' | 'dark';
const ThemeContext = createContext<Theme>('dark');

const App = () => (
  <ThemeContext.Provider value="dark">
    <MyComponent />
  </ThemeContext.Provider>
);

const MyComponent = () => {
  const theme = useContext(ThemeContext);
  return <div>The theme is {theme}</div>;
};
```

## useEffect / useLayoutEffect

这两个 hooks 用于处理函数副作用，返回一个清理函数，不需要处理返回值，所以不需要类型定义。

```tsx
useEffect(() => {
  const subscriber = subscribe(options);
  return () => {
    unsubscribe(subscriber);
  };
}, [options]);
```

## useMemo / useCallback

这两个都可以通过返回值来推断返回类型，但是 useCallback 需要指定参数的类型。

```tsx
const value = 10;
// 推断为 number
const result = useMemo(() => value * 2, [value]);

const multiplier = 2;
// 推断为 (value: number) => number
const multiply = useCallback((value: number) => value * multiplier, [
  multiplier,
]);
```

## useRef

在过去，refs 用于引用 DOM 节点，其属性`current`是只读的，这个属性在被挂载到 DOM 上之前的初始值为`null`。

```tsx
const MyInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <input ref={inputRef} />;
};
```

Hooks 出现之后，`useRef`还可以用作类似 class 中的实例属性的功能，而且`current`也变成可以修改了，并且可以使用类型推断：

```tsx
const myNumberRef = useRef(0);
myNumberRef.current += 1;
```

## useReducer

这个 hook 的模式有点像 Redux，其中 actions 和 state 的类型可以根据`useReducer`的参数来推断：

```tsx
interface State {
  value: number;
}

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'incrementAmount'; amount: number };

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { value: state.value + 1 };
    case 'decrement':
      return { value: state.value - 1 };
    case 'incrementAmount':
      return { value: state.value + action.amount };
    default:
      throw new Error();
  }
};

const [state, dispatch] = useReducer(counterReducer, { value: 0 });

dispatch({ type: 'increment' });
dispatch({ type: 'decrement' });
dispatch({ type: 'incrementAmount', amount: 10 });

// 错误
dispatch({ type: 'invalidActionType' });
```

## useImperativeHandle

`useImperativeHandle`可以让你在使用 `ref` 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 `ref` 这样的命令式代码。`useImperativeHandle` 应当与 `forwardRef` 一起使用：

```tsx
export interface MyInputHandles {
  focus(): void;
}

const MyInput: React.RefForwardingComponent<MyInputHandles, MyInputProps> = (
  props,
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  return <input {...props} ref={inputRef} />;
};

export default React.forwardRef(MyInput);
```

上例的功能是，组件暴露出一个 focus 方法，可以在外部调用，使组件内的 input 获取焦点。

首先，`MyInputHandles`声明了通过 ref 暴露出的对象类型，`MyInputHandles`声明了组件参数类型。
注意`MyInput`类型需要定义为`React.RefForwardingComponent`。

如果要使用这个组件，需要：

```tsx
import MyInput, { MyInputHandles } from './MyInput';

const Autofocus = () => {
  const myInputRef = useRef<MyInputHandles>(null);

  useEffect(() => {
    if (myInputRef.current) {
      myInputRef.current.focus();
    }
  });

  return <MyInput ref={myInputRef} />;
};
```

## useDebugValue

`useDebugValue`可用于在 React 开发者工具中显示自定义 hook 的标签。类型可以根据传入的值直接推断，不需要明确指定。

```tsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  // 在开发者工具中的这个 Hook 旁边显示标签
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
```
