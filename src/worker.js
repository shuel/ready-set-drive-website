// ========================================
// READY SET DRIVE WEBSITE
// Cloudflare Worker
// ========================================
// Handles server-side website functionality.
// v1.0 - Enquiry form endpoint foundation
// ========================================

export default {
  async fetch(request, env) {

    const url = new URL(request.url);

    // ========================================
    // ENQUIRY API
    // ========================================

    if (url.pathname === "/api/enquiry" && request.method === "POST") {
      return Response.json({
        success: true,
        message: "Enquiry endpoint is working."
      });
    }

    // ========================================
    // STATIC WEBSITE
    // ========================================

    return env.ASSETS.fetch(request);
  }
};
