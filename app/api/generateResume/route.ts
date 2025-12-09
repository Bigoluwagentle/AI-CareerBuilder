import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    // FIXED MODEL NAME
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",

    });

   const prompt = `
Using the information I provide, generate a clean, modern, and ATS-optimized professional résumé with strong action verbs and measurable achievements Follow these rules:

- Do NOT use asterisks (*), hashes (#), or dashes (---) for bullet points.
- Use **bold text for section headings**.
- For lists, use plain text lines starting with a hyphen (-) or numbered list.
- Do NOT include any introductory paragraph like "Okay, here is a clean...".
- Keep the output clean, structured, and professional.
- Use consistent formatting for dates, job titles, and project details.

PERSONAL INFORMATION:
${JSON.stringify(body.personal, null, 2)}

SUMMARY:
${body.summary}

SKILLS:
${body.skills}

WORK EXPERIENCE:
${JSON.stringify(body.workExperience, null, 2)}

PROJECTS:
${JSON.stringify(body.projects, null, 2)}

REFERENCES:
${JSON.stringify(body.references, null, 2)}
`;





    // const result = await model.generateContent(prompt);
    // const text = result.response.text();
    const result = await model.generateContent(prompt);
    let text = result.response.text();

// Remove ALL asterisks, hashes, and horizontal rules
text = text.replace(/\*/g, '');   // Remove all *
text = text.replace(/#/g, '');   // Remove all #
text = text.replace(/---/g, '');  // Remove all ---
text = text.replace(/\n\s*\n/g, '\n\n'); // Clean extra blank lines



    return new Response(JSON.stringify({ resume: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("🔥 FULL API ERROR →", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
