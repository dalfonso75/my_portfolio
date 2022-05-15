import globalStyles from "./globalStyles";
export default function AppLayout({ children }) {
  return (
    <div className="app-layout">
      {children}
      <style jsx>{globalStyles}</style>
    </div>
  );
}
