import type { WireframeKind, Product } from "./productsData";
import CroquisDashboard from "./CroquisDashboard";
import KoadicDashboard from "./KoadicDashboard";
import JoblynkDashboard from "./JoblynkDashboard";
import PlaceholderWireframe from "./PlaceholderWireframe";
import SalesHubDashboard from "./SalesHubDashboard";
import ScaledFrame from "./ScaledFrame";
import XorrisDashboard from "./XorrisDashboard";

/** Animated UI wireframe. Only the wireframe carries the product colours; the page around it uses the site theme. */
export default function ProductWireframe({
  kind,
  name,
  colors,
}: {
  kind: WireframeKind;
  name: string;
  colors: Product["colors"];
  className?: string;
}) {
  if (kind === "quotes")
    return (
      <ScaledFrame>
        <SalesHubDashboard />
      </ScaledFrame>
    );
  if (kind === "dashboard")
    return (
      <ScaledFrame>
        <XorrisDashboard />
      </ScaledFrame>
    );
  if (kind === "studio")
    return (
      <ScaledFrame>
        <KoadicDashboard />
      </ScaledFrame>
    );
  if (kind === "workspace")
    return (
      <ScaledFrame>
        <CroquisDashboard />
      </ScaledFrame>
    );
  if (kind === "kanban")
    return (
      <ScaledFrame>
        <JoblynkDashboard />
      </ScaledFrame>
    );
  return (
    <ScaledFrame>
      <PlaceholderWireframe name={name} colors={colors} />
    </ScaledFrame>
  );
}
