import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(
  _req: Request,
  { params }: { params: { lang: string } }
) {
  try {
    if (!params.lang) {
      return new NextResponse("Missing lang parameter", { status: 401 });
    }

    const browser = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_API_KEY}`,
    });

    const page = await browser.newPage();
    await page.goto(`${process.env.BASE_URL}/resume/${params.lang}/pdf`);
    await page.emulateMediaType("screen");
    const pdfBuffer = await page.pdf({ format: "A4" });
    const resp = new NextResponse(pdfBuffer);
    resp.headers.append("Content-Type", "application/pdf");
    resp.headers.append(
      "Content-Disposition",
      `attachment; filename="CV-Mohammed-JEMMOUDI_[Fullstack-Developer].pdf"`
    );
    await browser.close();

    return resp;
  } catch (e: any) {
    console.log("[RESUME_GET]", e);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
