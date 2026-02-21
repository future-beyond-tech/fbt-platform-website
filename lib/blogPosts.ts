export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  targetKeyword: string;
  hook: string;
  relatedTopic: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "microservices-architecture-fail-at-scale",
    title:
      "Why Your Microservices Architecture Will Fail at Scale (And How to Fix It)",
    excerpt:
      "A practical look at the metrics and anti-patterns that break startup microservices once traffic and team size increase.",
    targetKeyword: "microservices scalability problems",
    hook: "Real metrics, common anti-patterns",
    relatedTopic: "resilient microservices and platform scaling",
  },
  {
    slug: "startup-security-mistakes-from-50-codebases",
    title:
      "We Analyzed 50 Startup Codebases: Here Are the 5 Security Mistakes Everyone Makes",
    excerpt:
      "Data-backed security patterns we repeatedly see in startup codebases, with specific vulnerabilities and fixes.",
    targetKeyword: "startup security mistakes",
    hook: "Data-driven, specific vulnerabilities",
    relatedTopic: "startup application security hardening",
  },
  {
    slug: "build-vs-buy-ai-pipeline",
    title: "The $50K Mistake: When to Build vs Buy Your AI Pipeline",
    excerpt:
      "A cost and risk framework to decide whether your team should build an AI automation pipeline or buy one.",
    targetKeyword: "build vs buy AI automation",
    hook: "Cost analysis framework",
    relatedTopic: "AI delivery economics and platform architecture",
  },
  {
    slug: "pass-soc-2-in-8-weeks",
    title: "How to Pass SOC 2 in 8 Weeks (Without Hiring a Full Security Team)",
    excerpt:
      "A compressed SOC 2 readiness timeline with execution checkpoints and evidence collection strategy for startups.",
    targetKeyword: "fast SOC 2 compliance startup",
    hook: "Timeline and checklist",
    relatedTopic: "SOC 2 execution playbooks for lean engineering teams",
  },
];
