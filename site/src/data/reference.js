// Reference pillar, evergreen developer references, rebuilt (rewrite-don't-republish)
// from kbcafe.com's recoverable Wayback content. Each maps an aged backlinked
// /articles/* URL to a modern page (Tier-A restore). Grouped by area.
export const REFERENCE = [
  // Concepts
  { nm: "Object-Oriented Programming concepts", href: "/object-oriented-programming-concepts",
    ds: "Encapsulation, abstraction, inheritance, polymorphism, the four pillars, with examples.", tag: "Concepts" },
  { nm: "Software design patterns", href: "/software-design-patterns",
    ds: "The classic Gang-of-Four patterns, creational, structural, behavioral, and when to use them.", tag: "Concepts" },
  // Concurrency & memory
  { nm: "Multithreading & concurrency explained", href: "/multithreading-explained",
    ds: "Threads vs processes, race conditions, locks, deadlocks, and writing thread-safe code.", tag: "Concurrency" },
  { nm: "Memory leaks explained", href: "/memory-leaks-explained",
    ds: "What a memory leak is, the common causes across languages, and how to find and prevent them.", tag: "Memory" },
  { nm: "Smart pointers & RAII", href: "/smart-pointers-explained",
    ds: "Reference counting, ownership, and how unique/shared pointers stop leaks at the source.", tag: "Memory" },
  // C++
  { nm: "Type casting in C++", href: "/cpp-type-casting",
    ds: "static_cast, dynamic_cast, const_cast and reinterpret_cast, what each one actually does.", tag: "C++" },
  // Feeds & protocols
  { nm: "What is RSS?", href: "/what-is-rss",
    ds: "Feeds, readers, the orange XML buttons, and how RSS and Atom differ, the basics, clearly.", tag: "Feeds" },
  { nm: "HTTP explained", href: "/http-explained",
    ds: "Methods, status codes, headers, and the request/response cycle behind every web call.", tag: "Networking" },
  { nm: "How SMTP works (sending email)", href: "/how-smtp-works",
    ds: "The protocol that moves email, the SMTP conversation, envelopes, and why mail gets blocked.", tag: "Email" },
  { nm: "POP3 vs IMAP (reading email)", href: "/pop3-vs-imap",
    ds: "The two protocols for retrieving mail, how they differ, and which one you actually want.", tag: "Email" },
  { nm: "How ping & ICMP work", href: "/how-ping-works",
    ds: "What ping really measures, the ICMP echo request/reply, TTL, and reading the results.", tag: "Networking" },
  { nm: "Port scanning explained", href: "/port-scanning-explained",
    ds: "What a network port is, how a port scan works, the common scan types, and what they reveal.", tag: "Networking" },
  // Shell
  { nm: "Shell scripting explained", href: "/shell-scripting-explained",
    ds: "Bash basics, the shebang, variables and quoting, pipes and redirection, and the gotchas that bite.", tag: "Shell" },
];
