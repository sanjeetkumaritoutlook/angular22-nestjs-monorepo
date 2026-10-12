interviewing senior front-end engineers in 2026, here is the question that actually separates framework users from framework architects:
## 1)
```
"When would you choose a Signal over an Observable, and where does RxJS still completely dominate?"
```
Too many candidates answer: "Signals are the new way, so RxJS is deprecated."
That is an immediate red flag.
Here is the level of depth I look for in senior candidates:
```
Signals excel at synchronous state & template consumption:
```
Push-pull, glitch-free reactivity.
Fine-grained DOM updates without re-evaluating component subtrees.
Clean derived values via computed() without leaking subscriptions or needing async pipes.
```
RxJS dominates asynchronous streams over time:
```
Managing asynchronous coordination, race conditions, and cancellations (switchMap, exhaustMap).
Event throttling, backpressure, and debouncing user input streams.
Complex orchestrations like retry strategies and WebSockets.
```
The Sweet Spot:
```
Senior engineers don't view this as a binary choice. They use RxJS where it shines (async pipelines, API boundaries) and bridge to the UI using toSignal() to make the template layer purelydeclarative, synchronous, and leak-free.
What is your go-to question when interviewing senior Angular developers?