/**
 * Netlify Forms submission helper.
 *
 * The static export approach posts URL-encoded data to "/" with a `form-name`
 * field that matches a static schema form rendered by NetlifyFormSchemas.
 *
 * Returns a Response so callers can branch on res.ok. The function never
 * throws on a non-2xx — it returns the Response and lets the caller decide.
 */

export type NetlifyPayload = Record<string, string | number | boolean | undefined>;

export async function submitNetlifyForm(
  formName: string,
  payload: NetlifyPayload,
  /** Override the submission endpoint. Defaults to "/" (current site root). */
  endpoint: string = "/"
): Promise<Response> {
  const body = new URLSearchParams();
  body.append("form-name", formName);
  // Netlify's honeypot field — leave empty; bots fill it and get filtered.
  body.append("bot-field", "");
  for (const [key, value] of Object.entries(payload)) {
    if (value === undefined || value === null) continue;
    body.append(key, String(value));
  }
  return fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
}
