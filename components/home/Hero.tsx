import HeroGlass from "./HeroGlass";
import HeroLegacy from "./HeroLegacy";

// Flip this one flag to instantly revert to the old three-video door hero
// (HeroLegacy.tsx) if HeroGlass causes any issue — nothing else needs to
// change. Both implementations are kept in full, side by side.
const USE_GLASS_HERO = true;

export default function Hero() {
  return USE_GLASS_HERO ? <HeroGlass /> : <HeroLegacy />;
}
