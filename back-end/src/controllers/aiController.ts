import * as express from 'express';



/*
{
    prompt: ""
}

*/ 
export const aiPrompt = (request: express.Request, response: express.Response) => {
    const prompt: string = request.body.prompt;


    return response.status(200).send();
}