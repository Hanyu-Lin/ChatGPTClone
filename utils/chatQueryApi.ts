import openai from "./chatGPT";

const queryApi = async (prompt: string, model: string) => {
  const response = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9, // take more risk, more creative
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0, //repeat old respone or not
      presence_penalty: 0, //talk about new topics
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => `Something went wrong! Error: ${err.message}`);

  return response;
};

export default queryApi;
