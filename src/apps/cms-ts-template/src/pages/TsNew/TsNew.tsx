/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-alert */
import React, { useState, useEffect, useRef } from 'react';
import styled from '@zycfc/styled-px2vw';
import { fire } from './fireworks';

type FooType = {
  bar?: {
    baz?: string | null;
  } | null;
} | null;

const TsNew: React.FC<{}> = () => {
  const domRef = useRef<HTMLSelectElement | null>(null);
  const [foo, setFoo] = useState<FooType>(null);
  const [value1, setValue1] = useState<string | null>(null);
  const [value2, setValue2] = useState<FooType | string | null>(null);

  useEffect(() => {
    const baz = foo?.bar?.baz;
    setValue1(baz === undefined ? 'undefined' : baz);
    setValue2(foo ?? 'when foo is null or undefined');
    if (foo?.bar?.baz) {
      fire();
    }
  }, [foo]);

  return (
    <Wrapper>
      <code>
        <pre>foo当前值：{JSON.stringify(foo, null, 2)}</pre>
      </code>
      <section>
        <h1>测试可选链</h1>
        <h2>value1的值：{value1}</h2>
        <code>
          <pre>value1 = foo?.bar?.baz;</pre>
          <pre>
            相当于：value1 = foo ? (foo.bar ? foo.bar.baz : undefined) :
            undefined
          </pre>
        </code>
      </section>
      <section ref={domRef}>
        <h1>测试可选调用</h1>
        <code>domRef.current?.classList.toggle('active');</code>
        <button
          type="button"
          onClick={(): void => {
            domRef.current?.classList.toggle('active');
          }}
        >
          do it
        </button>
      </section>
      <section>
        <h1>测试空值联合</h1>
        <h2>
          value2的值：
          {typeof value2 === 'object'
            ? JSON.stringify(value2, null, 2)
            : value2}
        </h2>
        <code>
          <pre>value1 = foo ?? 'when foo is null or undefined';</pre>
          <pre>
            相当于：value1 = (foo !== null && foo !== undefined) ? foo : 'when
            foo is null or undefined'
          </pre>
        </code>
      </section>
      <button
        type="button"
        onClick={(): void => {
          if (window.confirm('是否要给foo增加bar属性？')) {
            if (window.confirm('是否要给foo.bar增加baz属性？')) {
              setFoo({
                bar: {
                  baz: window.prompt('输入bar的属性baz的值'),
                },
              });
            } else {
              setFoo({
                bar: {},
              });
            }
          } else {
            setFoo({});
          }
        }}
      >
        点击修改foo的值
      </button>
    </Wrapper>
  );
};

export default TsNew;

const Wrapper = styled.div`
  padding: 2vw;
  section {
    padding: 2vw;
    line-height: 2;
    border: ${'1PX'} dotted #666;
    margin: 2vw 0;
    &.active {
      background-color: pink;
    }
    h1 {
      color: orange;
    }
  }
  button {
    padding: 2vw;
    background-color: orange;
    color: #fff;
    margin: 3vw;
  }
`;
