import token from "../secret/tokens.json";

// const API_URL = "https://cleanuri.com/api/v1/shorten";
const API_URL = "https://api-ssl.bitly.com/v4/shorten";
export async function shortenUrl(encodedUrl) {
  try {
    const accessToken = token.token;
    var headers = {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    };
    const res = await fetch(API_URL, {
      //   mode: "no-cors",
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        long_url: encodedUrl,
        domain: "bit.ly",
        // group_guid: "Ba1bc23dE4F",
      }),
    });
    if (!res.ok) throw Error();
    const { link } = await res.json();
    return link;
  } catch {
    throw Error("Failed to shorten the url");
  }

  //   fetch('https://api-ssl.bitly.com/v4/shorten', {
  //     method: 'POST',
  //     headers: {
  //         'Authorization': 'Bearer {TOKEN}',
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
  // });
}
