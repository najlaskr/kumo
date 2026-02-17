import { ClipboardText } from "@cloudflare/kumo";

export function ClipboardTextBasicDemo() {
  return <ClipboardText text="0c239dd2" />;
}

export function ClipboardTextShortDemo() {
  return <ClipboardText text="abc123" />;
}

export function ClipboardTextApiKeyDemo() {
  return <ClipboardText text="sk_live_51H8..." />;
}

export function ClipboardTextLongDemo() {
  return <ClipboardText text="https://example.com/very/long/url/path" />;
}

/** With tooltip that changes based on copied state */
export function ClipboardTextWithTooltipDemo() {
  return (
    <ClipboardText
      text="npx kumo add button"
      tooltip={{
        content: (copied) => (copied ? "Copied!" : "Copy"),
        side: "top",
      }}
    />
  );
}
