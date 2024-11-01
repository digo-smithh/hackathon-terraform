// src/controllers/promptController.ts

import { Request, Response } from "express";

export const handlePrompt = async (req: Request, res: Response) => {
  const prompt: string = req.body.prompt;
  console.log(prompt);

  const response = await fetch(`http://localhost:11434/api/generate`, {
    method: "POST",
    body: JSON.stringify({
      model: "luiza",
      prompt: prompt,
      stream: true,
    }),
  });

  const reader = response.body?.getReader();
  const decoder = new TextDecoder("utf-8");

  // Configura headers para resposta de streaming
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");

  let responseText = "";
  const regex_code = /```([\s\S]*?)```/g;
  const regex_msg = /(?:```[\s\S]*?```)|([\s\S]+?)(?=```|$)/g;

  if (reader) {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const response = JSON.parse(chunk);
      responseText += response.response;

      let codeMatch;
      let msgMatch;
      while ((codeMatch = regex_code.exec(responseText)) !== null || (msgMatch = regex_msg.exec(responseText)) !== null) {
        res.write(JSON.stringify({ code: codeMatch?.join(), msg: msgMatch?.join() }) + "\n");
        console.log(codeMatch?.join());


      }

    }
  }

  res.end();
};
