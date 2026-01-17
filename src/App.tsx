import Index from './pages/Index';
import { GlyphorBadge } from './components/GlyphorBadge';

function App() {
  return (
    <div className="bg-stone-950 min-h-screen text-stone-200 selection:bg-stone-700 selection:text-stone-50 bg-texture">
      <Index />
      <GlyphorBadge />
    </div>
  );
}

export default App;