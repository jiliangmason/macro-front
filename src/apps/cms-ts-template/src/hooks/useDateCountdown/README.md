# 日期倒计时（常用活动开始时间倒计时）

```js
const { countdownDate, isRunning, start, pause, reset, set } = useDateCountdown(
  {
    // 可以传合法的日期字符换/13位时间戳/Date类型
    startDate: '2020-04-08 12:00:00',
    endDate: '2020-05-08 12:00:00',
    // 是否自动开始
    autostart: true,
    // 倒计时更新间隔（不能比10小，否则会有误差，默认1000）
    interval: 10,
  }
);
```
