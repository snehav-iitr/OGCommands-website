import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OG⌘ Commands handles your files and data.",
};

export default function PrivacyPage() {
  return (
    <div className="container-page prose-docs py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="!mt-3 font-display text-4xl font-semibold text-white">Privacy Policy</h1>
      <p className="text-mist-400">Last updated: November 19, 2026</p>

      <h2>Summary</h2>
      <p>
        OG⌘ Commands is designed for <strong>local processing</strong>. Your selected files are processed
        on your Mac. This website does not require an account to browse docs or download the beta.
        Paid checkout is not live yet; when it launches, payment processors may receive the information
        needed to complete a purchase.
      </p>

      <h2>Files you process</h2>
      <ul>
        <li>Commands read files you select in Finder or via the file picker.</li>
        <li>Outputs are written to a folder you configure (default {site.macos.defaultOutput}).</li>
        <li>We do not operate a cloud pipeline that uploads your images for command execution.</li>
      </ul>

      <h2>Background removal models</h2>
      <p>
        <code>..removebg</code> may download ONNX model weights after you explicitly approve. Models are
        cached locally and verified with SHA-256. Inference runs on-device.
      </p>

      <h2>Permissions</h2>
      <p>
        macOS Automation (Finder) and optional Accessibility are used only to support local workflows
        described in the documentation.
      </p>

      <h2>This website</h2>
      <p>
        The marketing/docs site may use standard hosting logs (IP, user agent) from the deployment
        provider. We do not invent analytics claims. Contact {site.supportEmail} with privacy questions.
      </p>

      <h2>Changes</h2>
      <p>If this policy changes materially, we will update the date above.</p>
    </div>
  );
}
