# Prompt Patterns Cheat Sheet

Nine patterns that reliably improve LLM output, with when to reach for each.
Most good prompts combine two or three. From KB Cafe — https://kbcafe.com

---

1. **Role + audience.** Open by naming who the model is and who it is writing for.
   "You are a [role] writing for [audience]." Sets vocabulary, depth, and tone in one line.

2. **Few-shot examples.** Show two or three input/output pairs before the real input. The model
   copies the shape, format, and style of your examples better than it follows a description of them.

3. **Chain of thought.** For reasoning, math, or multi-step logic, ask the model to work step by step
   before the final answer. For a clean result, have it reason, then put the answer on a final line.

4. **Delimiters.** Wrap user content or data in clear markers (triple backticks, XML-style tags) so the
   model can tell instructions from input. This also reduces prompt injection from pasted text.

5. **Explicit output format.** Describe the exact shape you want, or better, give a template. For
   machine-readable output, use structured outputs instead of asking nicely: kbcafe.com/what-are-structured-outputs

6. **Decomposition.** Break a big task into named sub-steps and ask for them in order. "First list the
   risks. Then, for each, propose a mitigation." Easier to steer and to verify than one giant ask.

7. **Give it an out.** Tell the model what to do when it does not know: "If the text does not say, answer
   'not stated'." This is the single most effective guard against confident wrong answers.

8. **Positive instructions.** Say what to do, not only what to avoid. "Use short sentences" works better
   than "do not be verbose." Models follow targets more reliably than prohibitions.

9. **Self-check.** For high-stakes output, add a final step: "Before answering, list any assumptions you
   made and flag anything you are unsure about." Cheap insurance against silent errors.

---

**Rules of thumb**

- Put durable rules in the system prompt, the specific task in the user message.
- Edit the prompt, not the output. If you keep fixing the same mistake by hand, fix it in the prompt.
- Shorter is usually better once the essentials are in. Cut words the model does not need.

Free to use and adapt. More at https://kbcafe.com/ai
