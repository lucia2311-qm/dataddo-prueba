

exports.handler = async function () {
  try {
    const response = await fetch(
      "https://data.eu-west-1.aws.dataddo.com/v1.0/get/6942b1ee3dc1bc38690e091d?type=csv",
      {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + process.env.DATADDO_TOKEN
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
      body: JSON.stringify(error.message)
    };
  }
};
