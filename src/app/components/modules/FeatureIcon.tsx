import {
  Activity, BadgeCheck, Barcode, Blocks, BookOpen, Boxes, Building2,
  CalendarDays, ChartNoAxesCombined, CheckCheck, Clock3, Coins, Factory,
  Files, Fingerprint, FolderOpen, GitBranch, Gauge, Kanban, Landmark,
  Layers3, LockKeyhole, MessagesSquare, Monitor, Network, PackageCheck,
  ReceiptText, RefreshCw, Route, ScanSearch, ShieldCheck, Target,
  Truck, Undo2, UsersRound, Wallet, Calculator, ChartGantt,
} from "lucide-react";
import type { FeatureIconName } from "./moduleData";

const icons = {
  messages: MessagesSquare, activity: Activity, files: Files, scan: ScanSearch,
  building: Building2, calendar: CalendarDays, route: Route, receipt: ReceiptText,
  truck: Truck, ledger: BookOpen, boxes: Boxes, refresh: RefreshCw,
  warehouse: PackageCheck, barcode: Barcode, coins: Coins, factory: Factory,
  lock: LockKeyhole, layers: Layers3, clock: Clock3, chart: ChartNoAxesCombined,
  bank: Landmark, shield: ShieldCheck, network: Network, undo: Undo2,
  asset: Blocks, check: CheckCheck, calculator: Calculator, git: GitBranch,
  gauge: Gauge, monitor: Monitor, fingerprint: Fingerprint, users: UsersRound,
  wallet: Wallet, folder: FolderOpen, gantt: ChartGantt, kanban: Kanban, target: Target,
} satisfies Record<FeatureIconName, typeof Activity>;

export default function FeatureIcon({ name, className }: { name: FeatureIconName; className?: string }) {
  const Icon = icons[name] ?? BadgeCheck;
  return <Icon className={className} strokeWidth={1.7} aria-hidden="true" />;
}
