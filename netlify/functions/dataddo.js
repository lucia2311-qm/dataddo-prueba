

const axios = require("axios");

exports.handler = async function () {
  try {
    const token = process.env.DATADDO_TOKEN;

    if (!token) {
      return {
        statusCode: 500,
        body: "Falta DATADDO_TOKEN"
      };
    }

    const response = await axios.get(
      "https://data.eu-west-1.aws.dataddo.com/v1.0/get/6942b1ee3dc1bc38690e091d?type=csv",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return {
      statusCode: 200,
      body: response.data
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.response?.data || error.message)
    };
  }
};
