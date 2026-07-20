import { useMemo } from "react";
import "./LoginTerminalBg.css";

const SNIPPETS = [
  "const user = await auth.signIn(email);",
  "function buildCareer(skills) {",
  "  return skills.map(s => master(s));",
  "}",
  "class Student extends Learner {",
  "  constructor(name) {",
  "    super(name);",
  "    this.progress = 0;",
  "  }",
  "}",
  "import { BBright } from './hub';",
  "export default function Apply() {",
  "  const [step, setStep] = useState(1);",
  "  return <Form step={step} />;",
  "}",
  "git commit -m 'launch career'",
  "npm run build:future",
  "SELECT * FROM students",
  "WHERE status = 'thriving';",
  "while (learning) { grow(); }",
  "try {",
  "  await applyToProgramme();",
  "} catch (doubt) {",
  "  ignore(doubt);",
  "}",
  "const success = true;",
  "// 2,400+ graduates and counting",
  "<Hub vision='bright' />",
  "deploy(yourFuture);",
];

function buildColumn(index) {
  const lineCount = 18 + Math.floor(Math.random() * 10);
  const lines = Array.from(
    { length: lineCount },
    () => SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)],
  );
  return {
    id: index,
    text: lines.join("\n"),
    left: `${Math.random() * 100}%`,
    duration: `${28 + Math.random() * 22}s`,
    delay: `${-Math.random() * 30}s`,
  };
}

function LoginTerminalBg() {
  // useMemo so columns are stable across re-renders
  const columns = useMemo(() => {
    const count = window.innerWidth < 700 ? 5 : 9;
    return Array.from({ length: count }, (_, i) => buildColumn(i));
  }, []);

  return (
    <div className="terminal-bg" aria-hidden="true">
      <div className="terminal-bg__grid" aria-hidden="true"></div>
      {columns.map((col) => (
        <div
          key={col.id}
          className="terminal-bg__col"
          style={{
            left: col.left,
            animationDuration: col.duration,
            animationDelay: col.delay,
          }}
        >
          {col.text}
        </div>
      ))}
    </div>
  );
}

export default LoginTerminalBg;
