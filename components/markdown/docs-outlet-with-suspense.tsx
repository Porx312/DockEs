import { Suspense } from "react";
import Outlet from "./docs-outler";

interface OutletWrapperProps {
  path: string;
  name: string;
}

// Wrapper con Suspense para mejor UX
export default function OutletWrapper({ path, name }: OutletWrapperProps) {
  return (
    <Suspense fallback={<OutletSkeleton />}>
      <Outlet path={path} name={name} />
    </Suspense>
  );
}

function OutletSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="border rounded-md p-4 animate-pulse">
          <div className="h-5 bg-muted rounded mb-2" />
          <div className="h-4 bg-muted/60 rounded w-3/4" />
        </div>
      ))}
    </div>
  );
}
