a clear pattern has emerged - these are the topics coming up again and again in 2026:

1. Signals vs RxJS - when to use which, and how to handle both together
2. Change detection - OnPush strategy and the common gotchas around it
3. Standalone components - deep questions around migration
4. Memory leaks - how to identify and fix them (real production scenarios)
5. System design - practical questions on scale and performance, not just theory


https://www.linkedin.com/posts/mohit-maheshwari-316825171_40daysofangularscenarios-angular-angulardeveloper-share-7477371662028460032-l1cf/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFmMxUQBUvaK3SPYJM-FwQuV_PBE-bd4ppM

Most Angular developers can explain what OnPush does. Very few can spot why it silently fails.

Here's the scenario: your OnPush component isn't updating. The input data clearly changed. Why?

Most people jump straight to change detection theory. Zone.js, dirty checking, all of it.

The real answer is almost always simpler: the input reference didn't change.

OnPush only re-renders when the reference changes and not the contents. So if you're mutating an array with .push() or an object with dot notation instead of creating a new one, Angular has no way of knowing anything happened. The data changed. The reference didn't. OnPush doesn't care about the former.

This one gotcha is responsible for more "why isn't my UI updating" bugs than almost anything else in Angular apps.

The fix is always the same principle: stop mutating, start replacing. Spread operators, immutable updates, whatever gets you a new reference.

If you're prepping for Angular interviews right now , this is the kind of question that separates "I know the definition" from "I've actually debugged this in production." Interviewers aren't testing whether you know what OnPush is anymore. They're testing whether you've been burned by it.
