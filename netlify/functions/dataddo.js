
exports.handler = async function () {
  try {
    const response = await fetch(
      "https://data.eu-west-1.aws.dataddo.com/v1.0/get/6942b1ee3dc1bc38690e091d?type=csv",
      {
        headers: {
          Authorization: `Bearer ${process.env.DATADDO_TOKEN}`,
        },
      }
    );

    const data = await response.text();

    return {
      statusCode: 200,
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Error al obtener datos",
    };
  }
};
