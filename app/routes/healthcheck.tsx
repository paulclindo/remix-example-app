import { json } from "@remix-run/cloudflare";

export async function loader() {
  return json({ success: true, message: "Works!" });
}
