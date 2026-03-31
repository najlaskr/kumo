import type { ComponentProps, JSX } from "react";
import { Badge as KumoBadge } from "@cloudflare/kumo";

type BadgeDemoVariant = ComponentProps<typeof KumoBadge>["variant"] | "info";
type BadgeDemoProps = Omit<ComponentProps<typeof KumoBadge>, "variant"> & {
  variant?: BadgeDemoVariant;
};

const Badge = KumoBadge as (props: BadgeDemoProps) => JSX.Element;

export function BadgeSemanticVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="beta">Beta</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}

export function BadgeColorVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="teal">Teal</Badge>
      <Badge variant="orange">Orange</Badge>
      <Badge variant="red">Red</Badge>
      <Badge variant="yellow">Yellow</Badge>
      <Badge variant="green">Green</Badge>
      <Badge variant="blue">Blue</Badge>
    </div>
  );
}

export function BadgeInSentenceDemo() {
  return (
    <p className="flex items-center gap-2">
      Workers
      <Badge variant="secondary">New</Badge>
    </p>
  );
}
