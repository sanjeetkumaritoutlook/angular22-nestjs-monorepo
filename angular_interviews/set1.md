##🚀 Angular Interview Question --

Suppose you have Service A and Service B in an Angular application.
Both services contain almost the same logic, and around 50% of the code is duplicated (for example: API calls, CRUD operations, error handling, data transformations, etc.).
How would you optimize this?


## Answer:
 To optimize the duplicate code implement a Generic Base Service (using generics) and leverage Angular's Dependency Injection (DI). This allows you to centralize the shared logic while allowing Service A and Service B to handle their own specific endpoints or data types.

A generic Base Service with Angular DI is definitely a solid approach when the duplicated code is mainly CRUD/API logic. 
In the interview context, they were also expecting the use of an abstract generic base service, where Service A and Service B extend the base class and reuse the common functionality while implementing their specific logic.


## Most Angular interviews today are no longer about:

❌ "What is Dependency Injection?"
❌ "Explain Lifecycle Hooks."

Instead, interviewers ask:

✅ "Why is your component re-rendering unnecessarily?"
✅ "How would you handle state sharing between unrelated components?"
✅ "When would you choose Signals over RxJS?"
✅ "Why is change detection causing performance issues in your application?"


## 🚀 Senior Frontend Engineering Series #2

Why Most Angular Apps Become Slow After 2 Years
A controversial opinion:
Angular is rarely the reason your application becomes slow.
The architecture usually is.
Many teams start with excellent performance.
Fast builds.
Responsive UI.
Clean code.
Then features get added.
Developers change.
Dead code accumulates.
And suddenly every interaction feels slower.
Why?
Because most applications continue running with Angular's default change detection strategy long after they've outgrown it.
━━━━━━━━━━━━━━
📌 What's Really Happening?
By default, Angular performs a top-down change detection traversal.
When a change detection cycle runs, Angular checks every component in the tree.
Even if nothing changed in most of them.
Think about a dashboard with:
• 50+ widgets
• Multiple API calls
• Thousands of bindings
• Real-time updates
Every unnecessary check adds overhead.
One component isn't a problem.
Hundreds of components become a problem.
━━━━━━━━━━━━━━
📌 The Performance Mindset Shift
Many developers ask:
"How do I make Angular faster?"
Senior engineers ask:
"How do I reduce the amount of work Angular performs?"
That's a completely different question.
━━━━━━━━━━━━━━
📌 The Modern Performance Stack
For large enterprise applications, I typically combine:
✅ OnPush Change Detection
✅ Signals
✅ Immutable State Updates
✅ Smart/Dumb Component Boundaries
Together, these dramatically reduce unnecessary rendering cycles.
━━━━━━━━━━━━━━
⚠️ Common Mistake
Using OnPush but still mutating state.
users.push(newUser);
The array changed.
The reference didn't.
Angular sees the same reference and assumes nothing changed.
Result:
❌ UI doesn't update
❌ Developers blame Angular
❌ Workarounds get added
━━━━━━━━━━━━━━
✅ Better Approach
users = [...users, newUser];
New reference.
Predictable update.
Cleaner architecture.
━━━━━━━━━━━━━━
📌 Senior Engineer Insight
Most performance issues are not caused by rendering.
They're caused by unnecessary rendering.
Before optimizing code execution, optimize how often the code executes.
That single mindset shift can have a bigger impact than most micro-optimizations.
━━━━━━━━━━━━━━
🎯 Key Takeaway
Performance is not about making Angular work faster.
Performance is about making Angular do less work.