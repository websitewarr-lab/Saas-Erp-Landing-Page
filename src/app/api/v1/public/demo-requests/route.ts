import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const fullName = (body.full_name || body.name || "").toString().trim();
    const phone = (body.phone || body.mobile_number || body.mobile || "").toString().trim();
    const email = (body.email || body.work_email || "").toString().trim();

    if (!fullName) {
      return NextResponse.json(
        { success: false, message: "Full name is required." },
        { status: 400 }
      );
    }
    if (!phone) {
      return NextResponse.json(
        { success: false, message: "Phone number is required." },
        { status: 400 }
      );
    }
    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email address is required." },
        { status: 400 }
      );
    }

    // Determine target backend API URL from environment variables or live production default
    const rawBaseUrl =
      process.env.MOSSIE_API_URL ||
      process.env.MOSSIE_API_BASE_URL ||
      process.env.API_BASE_URL ||
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://astra-erp.londonstreetstore.com";

    const backendUrl = rawBaseUrl.endsWith("/api/v1/public/demo-requests")
      ? rawBaseUrl
      : `${rawBaseUrl.replace(/\/+$/, "")}/api/v1/public/demo-requests`;

    // Standardized payload strictly matching the backend schema
    const payload: Record<string, unknown> = {
      full_name: fullName,
      phone: phone,
      email: email,
    };

    const companyName = body.company_name || body.company;
    if (companyName) {
      payload.company_name = companyName;
    }

    const teamSize = body.team_size || body.teamSize;
    if (teamSize) {
      payload.team_size = teamSize;
    }

    if (Array.isArray(body.modules) && body.modules.length > 0) {
      payload.modules = body.modules;
    }

    const preferredDate = body.preferred_date || body.preferredDate;
    if (preferredDate) {
      payload.preferred_date = preferredDate;
    }

    const preferredTime = body.preferred_time || body.preferredTime;
    if (preferredTime) {
      payload.preferred_time = preferredTime;
    }

    const notes = body.notes || body.message;
    if (notes) {
      payload.notes = notes;
    }

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });

      const responseData = await response.json().catch(() => null);

      if (response.ok) {
        return NextResponse.json(
          responseData || {
            success: true,
            message: "Thank you! Your demo request has been received. Our team will contact you shortly.",
            data: {
              full_name: fullName,
              email: email,
              phone: phone,
              company_name: companyName,
              team_size: teamSize,
              modules: body.modules,
              preferred_date: preferredDate,
              preferred_time: preferredTime,
              notes: notes,
              created_at: new Date().toISOString(),
            },
          },
          { status: response.status }
        );
      }

      return NextResponse.json(
        responseData || {
          success: false,
          message: "The backend server rejected the request. Please verify the information entered.",
        },
        { status: response.status }
      );
    } catch (fetchErr: unknown) {
      const errMsg = (fetchErr as Error)?.message || "Connection failed";
      console.warn(`[Mossie API] Backend at ${backendUrl} unreachable (${errMsg}).`);

      // In local development or preview mode without backend running:
      if (process.env.NODE_ENV !== "production") {
        return NextResponse.json(
          {
            success: true,
            message: "Thank you! Your demo request has been received. Our team will contact you shortly.",
            data: {
              id: Date.now(),
              full_name: fullName,
              email: email,
              phone: phone,
              company_name: companyName,
              team_size: teamSize,
              modules: body.modules,
              preferred_date: preferredDate,
              preferred_time: preferredTime,
              notes: notes,
              created_at: new Date().toISOString(),
              dev_note: `Local preview mode: backend at ${backendUrl} was unreachable. Set NEXT_PUBLIC_API_BASE_URL to your live server.`,
            },
          },
          { status: 201 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          message: "Our demo booking system is momentarily unavailable. Please try again shortly or email support@mossierp.com.",
        },
        { status: 503 }
      );
    }
  } catch (err: unknown) {
    console.error("[Mossie API] Payload error:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request payload.",
      },
      { status: 400 }
    );
  }
}

