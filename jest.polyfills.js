
const { TextDecoder, TextEncoder, } = require('node:util');
const { ReadableStream, TransformStream, markResourceTiming } = require('node:stream/web');
const { clearImmediate } = require('node:timers');
const { performance } = require("node:perf_hooks");
const { BroadcastChannel } = require("worker_threads")
Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
  ReadableStream: { value: ReadableStream },
  TransformStream: { value: TransformStream },
  clearImmediate: { value: clearImmediate },
  performance: { value: performance, writable: true },
  MessagePort: {},
  BroadcastChannel: { value: BroadcastChannel}
})

const { Blob, File } = require('node:buffer')
const { fetch, Headers, FormData, Request, Response, } = require('undici')

Object.defineProperties(globalThis, {
  fetch: { value: fetch, writable: true },
  Blob: { value: Blob },
  File: { value: File },
  Headers: { value: Headers },
  FormData: { value: FormData },
  Request: { value: Request },
  Response: { value: Response },
})