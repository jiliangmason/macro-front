import { useState, useEffect, useRef } from 'react';

type Datewise = number | string | Date;

// 调用参数
interface CountdownParams<T> {
  // 开始日期
  startDate: T;
  // 结束日期
  endDate: T;
  // 减一的时间间隔，默认为1000ms
  interval?: number;
  // 是否自动开始计时
  autostart?: boolean;
  // 计时结束回调
  onTimeup?(): void;
}

type DateObjType = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  ms: string;
};

// 返回值
interface CountdownResults {
  // 剩余时间
  countdownDate: DateObjType;
  // 是否在计时中
  isRunning: boolean;
  // 开始计时
  start(): void;
  // 暂停计时
  pause(): void;
  // 设置当前数字
  set<T extends Datewise>(startDate: T, endDate: T): void;
  // 重置为初始值
  reset(): void;
}

function getDateDiff<T extends Datewise>(start: T, end: T): number {
  if (typeof start !== typeof end) {
    throw new Error('useDateCountdown: 开始和结束时间参数必须是相同类型的');
  }
  const startDate = start instanceof Date ? start : new Date(start);
  const endDate = end instanceof Date ? end : new Date(end);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    throw new Error('useDateCountdown: 开始时间或结束时间不合法');
  }
  return endDate.getTime() - startDate.getTime();
}

function addZero(number: number): string {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
}

function getDateFromMs(ms: number): DateObjType {
  if (ms <= 0) {
    return {
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '0',
      ms: '0',
    };
  }
  const oneMinuteMs = 1000 * 60;
  const oneHourMs = oneMinuteMs * 60;
  return {
    days: addZero(Math.floor(ms / (oneHourMs * 24))),
    hours: addZero(Math.floor((ms % (oneHourMs * 24)) / oneHourMs)),
    minutes: addZero(Math.floor((ms % oneHourMs) / oneMinuteMs)),
    seconds: addZero(Math.floor((ms % oneMinuteMs) / 1000)),
    ms: addZero(Math.floor((ms % 1000) / 10)),
  };
}

export default function useCountdown<T extends Datewise>({
  startDate,
  endDate,
  interval = 1000,
  autostart = false,
  onTimeup,
}: CountdownParams<T>): CountdownResults {
  const [countdown, setCountdown] = useState(getDateDiff(startDate, endDate));
  const [countdownDate, setCountdownDate] = useState({
    days: '-',
    hours: '-',
    minutes: '-',
    seconds: '-',
    ms: '-',
  });
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
    setCountdown(getDateDiff(startDate, endDate));
  };

  const set = <T extends Datewise>(startDate2: T, endDate2: T): void => {
    setCountdown(getDateDiff(startDate2, endDate2));
  };

  useEffect(() => {
    // 倒计时开始
    if (isRunning) {
      const intervalId = setInterval((): void => {
        setCountdown((prev) => prev - interval);
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

  useEffect(() => {
    setCountdownDate(getDateFromMs(countdown));
  }, [countdown]);

  return {
    countdownDate,
    isRunning,
    start,
    pause,
    set,
    reset,
  };
}
