# 秒倒计时（常用于短信验证码）

```js
const { countdown, start, pause, reset, set } = useCountdown({
  timer: 5,
  autostart: false,
  onTimeup() {
    console.log('====timeup====');
  },
});
```
