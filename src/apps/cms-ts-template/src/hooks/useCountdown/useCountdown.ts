import { useState, useEffect, useRef } from 'react';

// 调用参数
type CountdownParams = {
  // 开始的数字
  timer: number;
  // 减一的时间间隔，默认为1000ms
  interval?: number;
  // 是否自动开始计时
  autostart?: boolean;
  // 计时结束回调
  onTimeup?(): void;
};

// 返回值
type CountdownResults = {
  // 当前的数字
  countdown: number;
  // 是否在计时中
  isRunning: boolean;
  // 开始计时
  start(): void;
  // 暂停计时
  pause(): void;
  // 设置当前数字
  set(value: number): void;
  // 重置为初始值
  reset(): void;
};

export default function useCountdown({
  timer,
  interval = 1000,
  autostart = false,
  onTimeup,
}: CountdownParams): CountdownResults {
  const [countdown, setCountdown] = useState(timer);
  const [isRunning, setIsRunning] = useState(autostart);
  const tickTimer = useRef<number>();

  const start = (): void => {
    if (countdown === 0) {
      console.log('====can not start====');
      return;
    }
    console.log('====start====');
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const pause = (): void => {
    console.log('====pause====');
    if (isRunning) {
      clearInterval(tickTimer.current);
      setIsRunning(false);
    }
  };

  const reset = (): void => {
    console.log('====reset====');
    setCountdown(timer);
  };

  const set = (value: number): void => {
    setCountdown(value);
  };

  useEffect(() => {
    // 倒计时开始
    if (isRunning) {
      const intervalId = setInterval((): void => {
        setCountdown(prev => prev - 1);
      }, interval);
      tickTimer.current = intervalId;
    }
  }, [interval, isRunning]);

  useEffect(() => {
    // 倒计时结束
    if (countdown === 0 && isRunning) {
      clearInterval(tickTimer.current);
      setIsRunning(false);
      if (onTimeup) {
        onTimeup();
      }
    }
  }, [countdown, isRunning, onTimeup]);

  return {
    countdown,
    isRunning,
    start,
    pause,
    set,
    reset,
  };
}
