async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello there!' }),
  };
}

export const handler = hello;
