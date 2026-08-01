export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl section-pad ${className}`}>
      {children}
    </div>
  );
}
