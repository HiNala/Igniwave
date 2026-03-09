export default function Loading() {
  return (
    <div className="min-h-screen bg-igni-cream flex items-center justify-center">
      <div
        className="w-8 h-8 rounded-full border-2 border-igni-sage/30 border-t-igni-sage animate-spin"
        aria-label="Loading"
        role="status"
      />
    </div>
  );
}
