> var a = 5 + 3
undefined
>
> var b = a % 5
undefined
>
> var c = 5 * b ** 2
undefined
> 
> var d = 10 - a / 2
undefined
>
> var e = 6 * 2 / d
undefined
>
> var f = b % e + 4 / e
undefined
> a
8
> b
3
> c
45
> d
6
> e
2
> f
3
> global
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 44953.16599999368,
      nodeStart: 2.9640999883413315,
      v8Start: 6.8581999987363815,
      bootstrapComplete: 31.48369999229908,
      environment: 16.600699990987778,
      loopStart: 53.10069999098778,
      loopExit: -1,
      idleTime: 44511.3768
    },
    timeOrigin: 1692912823465.302
  },
  fetch: [AsyncFunction: fetch],
  a: 8,
  b: 3,
  c: 45,
  d: 6,
  e: 2,
  f: 3
}
>