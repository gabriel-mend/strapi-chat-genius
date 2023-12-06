import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: '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'
});

export async function propmt({ content }: { content: string}) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0]
}
