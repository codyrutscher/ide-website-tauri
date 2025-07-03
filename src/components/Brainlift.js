import React from 'react';
import { motion } from 'framer-motion';
import './Brainlift.css';

const Brainlift = () => {
  return (
    <div className="brainlift-page">
      <motion.div 
        className="brainlift-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <article className="brainlift-content">
          <h1>Brainlift: Building a Modern Tauri IDE with AI Integration</h1>
          
          <section>
            <h2>The Vision</h2>
            <p>
              I wanted to create a modern IDE that combined the best of web technologies with native desktop performance, 
              while integrating AI assistance directly into the development workflow. The goal was to build something that 
              felt as responsive as a native app but leveraged the rich ecosystem of web-based developer tools.
            </p>
          </section>

          <section>
            <h2>The Foundation: Choosing Tauri</h2>
            <p>I chose Tauri v2 as the foundation because:</p>
            <ul>
              <li><strong>Native Performance</strong>: Rust backend provides system-level performance</li>
              <li><strong>Small Bundle Size</strong>: ~10MB installers vs 100MB+ for Electron</li>
              <li><strong>Security</strong>: Better sandboxing and permission model</li>
              <li><strong>Modern Stack</strong>: Could use React + TypeScript for the UI</li>
            </ul>
          </section>

          <section>
            <h2>Building Blocks</h2>
            
            <h3>1. The Editor Core</h3>
            <p>Started with Monaco Editor (VS Code's editor):</p>
            <pre><code>{`// Wrapped Monaco in a custom component for our needs
<MonacoEditor
  language={getLanguageFromFilename(activeFile)}
  theme={editorTheme}
  value={fileContent}
  onChange={handleEditorChange}
/>`}</code></pre>
            <p>Key decisions:</p>
            <ul>
              <li>Auto-save with visual feedback (green checkmark)</li>
              <li>Support for 20+ languages out of the box</li>
              <li>Multiple theme options to match developer preferences</li>
            </ul>

            <h3>2. Terminal Integration</h3>
            <p>The terminal was crucial - developers live in the terminal. Used xterm.js with a custom PTY implementation in Rust:</p>
            <pre><code>{`// Rust side: Create PTY and handle I/O
let pty = PtyBuilder::new()
    .command(cmd)
    .args(args)
    .cwd(cwd)
    .spawn()?;`}</code></pre>
            <p><strong>Innovation</strong>: Made the terminal "smart" - it detects file operations and automatically refreshes the file tree. No more manual refreshing!</p>

            <h3>3. File Explorer</h3>
            <p>Built a recursive tree component with:</p>
            <ul>
              <li>Lazy loading for performance</li>
              <li>Context menus for operations</li>
              <li>Keyboard navigation</li>
              <li>Auto-refresh on file system changes</li>
            </ul>
            <p>The trick was using Tauri's file system events to keep everything in sync.</p>

            <h3>4. AI Integration</h3>
            <p>This was the game-changer. Integrated AI in two ways:</p>
            <div className="feature-box">
              <h4>Direct Chat</h4>
              <ul>
                <li>Context-aware - mentions a file? It reads it automatically</li>
                <li>Uses Claude 3.5 Sonnet for intelligent responses</li>
                <li>Markdown rendering for code blocks</li>
              </ul>
            </div>
            <div className="feature-box">
              <h4>LangGraph Workflows</h4>
              <ul>
                <li>30+ pre-built templates for common tasks</li>
                <li>Visual workflow builder (initially)</li>
                <li>Code generation with best practices</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>The Architecture</h2>
            <pre className="architecture-diagram">{`Frontend (React)
    ↓ IPC Commands
Backend (Rust)
    ↓ System Calls
OS (File System, PTY, etc.)`}</pre>
            <p>Used Tauri's command system for clean separation:</p>
            <pre><code>{`#[tauri::command]
async fn read_file(path: String) -> Result<String, String> {
    // Rust handles file I/O
}`}</code></pre>
          </section>

          <section>
            <h2>Evolution of Features</h2>
            
            <div className="phase-container">
              <div className="phase">
                <h3>Phase 1: Core IDE</h3>
                <ul>
                  <li>Editor, Terminal, File Tree</li>
                  <li>Basic AI chat</li>
                  <li>Theme switching</li>
                </ul>
              </div>
              
              <div className="phase">
                <h3>Phase 2: Workflow Automation (Ambitious!)</h3>
                <ul>
                  <li>Visual node-based workflow designer</li>
                  <li>Drag-and-drop automation builder</li>
                  <li>Multiple node types (HTTP, file ops, conditionals)</li>
                </ul>
              </div>
              
              <div className="phase">
                <h3>Phase 3: Pragmatic Pivot</h3>
                <p>Realized workflow automation was overengineered. Pivoted to:</p>
                <ul>
                  <li><strong>Global Find & Replace</strong>: What developers actually need</li>
                  <li>Pattern matching with regex</li>
                  <li>Preview before replacing</li>
                  <li>Undo history</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>Key Technical Decisions</h2>
            
            <h3>1. State Management</h3>
            <p>Kept it simple with React hooks:</p>
            <pre><code>{`const [files, setFiles] = useState<FileItem[]>([]);
const [activeFile, setActiveFile] = useState<string | null>(null);`}</code></pre>
            <p>No Redux needed - the file system is the source of truth.</p>

            <h3>2. Performance Optimizations</h3>
            <ul>
              <li>Debounced file tree refreshes</li>
              <li>Virtualized terminal output (only render visible lines)</li>
              <li>Lazy file content loading</li>
              <li>Memoized expensive computations</li>
            </ul>

            <h3>3. Layout System</h3>
            <p>Used Allotment for resizable panes:</p>
            <pre><code>{`<Allotment>
  <Allotment.Pane minSize={200}>
    <FileTree />
  </Allotment.Pane>
  <Allotment.Pane>
    <Editor />
  </Allotment.Pane>
</Allotment>`}</code></pre>

            <h3>4. Security</h3>
            <ul>
              <li>API keys in localStorage (never sent to backend)</li>
              <li>Tauri's permission system for file access</li>
              <li>CSP headers for web content</li>
            </ul>
          </section>

          <section>
            <h2>Challenges & Solutions</h2>
            
            <div className="challenge">
              <h3>Challenge 1: Terminal Output Parsing</h3>
              <p><strong>Problem</strong>: How to detect file operations in terminal output?</p>
              <p><strong>Solution</strong>: Regex patterns to match common file operations:</p>
              <pre><code>{`const filePatterns = [
  /(?:created?|wrote?|saved?).*?(["']?)([^"']+\\.[\\w]+)\\1/gi,
  /(?:File|Created|Wrote|Saved)[:s]+([^\\s]+\\.[\\w]+)/gi
];`}</code></pre>
            </div>

            <div className="challenge">
              <h3>Challenge 2: AI Context</h3>
              <p><strong>Problem</strong>: AI needs file context to be helpful</p>
              <p><strong>Solution</strong>: Auto-read files mentioned in chat:</p>
              <pre><code>{`if (message.includes(filename)) {
  const content = await readFile(filename);
  context += \`\\nFile \${filename}:\\n\${content}\`;
}`}</code></pre>
            </div>

            <div className="challenge">
              <h3>Challenge 3: Cross-Platform PTY</h3>
              <p><strong>Problem</strong>: PTY handling differs across OS</p>
              <p><strong>Solution</strong>: portable-pty crate handles the differences</p>
            </div>
          </section>

          <section>
            <h2>Lessons Learned</h2>
            <ol>
              <li><strong>Start Simple</strong>: The workflow automation was cool but overkill. Find & Replace was what users needed.</li>
              <li><strong>Leverage Existing Tools</strong>: Monaco Editor saved months of work. Don't reinvent wheels.</li>
              <li><strong>Fast Feedback Loops</strong>: The auto-refreshing file tree made the IDE feel "alive" and responsive.</li>
              <li><strong>AI as a Partner</strong>: Not just a chatbot - integrated into the workflow with context awareness.</li>
              <li><strong>Performance Matters</strong>: Web tech can be fast with the right optimizations.</li>
            </ol>
          </section>

          <section>
            <h2>Future Possibilities</h2>
            <ul className="future-list">
              <li><strong>Collaborative Editing</strong>: Multiple developers in same project</li>
              <li><strong>Plugin System</strong>: Let others extend functionality</li>
              <li><strong>Cloud Sync</strong>: Settings and projects across devices</li>
              <li><strong>More AI Models</strong>: Support for GPT-4, local LLMs</li>
              <li><strong>Debugger Integration</strong>: Step through code in the IDE</li>
            </ul>
          </section>

          <section>
            <h2>The Code That Started It All</h2>
            <p>The first working version was surprisingly simple:</p>
            <pre><code>{`function App() {
  const [code, setCode] = useState('');
  
  return (
    <div>
      <MonacoEditor value={code} onChange={setCode} />
      <Terminal />
    </div>
  );
}`}</code></pre>
            <p>From there, it was iterative improvement based on real usage.</p>
          </section>

          <section>
            <h2>Conclusion</h2>
            <p>Building this IDE taught me that the best developer tools are:</p>
            <ol>
              <li><strong>Fast</strong>: Immediate feedback</li>
              <li><strong>Intuitive</strong>: Minimal learning curve</li>
              <li><strong>Integrated</strong>: Everything in one place</li>
              <li><strong>Smart</strong>: Anticipate developer needs</li>
            </ol>
            <p>
              Tauri provided the perfect foundation - web UI flexibility with native performance. 
              The AI integration transformed it from "another editor" to a true development partner.
            </p>
            <p>
              The journey from complex workflow automation to simple find & replace reminded me: 
              solve real problems, not imaginary ones. Sometimes the simple solution is the right one.
            </p>
          </section>

          <div className="footer-note">
            <p><em>Built with React, Tauri, Rust, and a lot of coffee. Powered by developers, for developers.</em></p>
          </div>
        </article>
      </motion.div>
    </div>
  );
};

export default Brainlift;