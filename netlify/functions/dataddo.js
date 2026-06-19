

exports.handler = async function (event, context) {
  try {

    const token = process.env.DATADDO_TOKEN;

    if (!token) {
      return {
        statusCode: 500,
        body: "No se encontró DATADDO_TOKEN en Netlify"
      };
    }

    const response = await fetch(
      "https://data.eu-west-1.aws.dataddo.com/v1.0/get/6942b1ee3dc1bc38690e091d?type=csv",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const text = await response.text();

    return {
      statusCode: 200,
      body: text
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: "Error: " + error.message
    };
  }
};
