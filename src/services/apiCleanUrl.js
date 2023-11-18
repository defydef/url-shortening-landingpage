const API_URL = "https://is.gd/create.php/";
export async function shortenUrl(encodedUrl) {
  //   try {
  //     const res = await fetch(API_URL, {
  //       mode: "no-cors",
  //       method: "POST",
  //       body: JSON.stringify(encodedUrl),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (!res.ok) throw Error();
  //     const { data } = await res.json();
  //     return data;
  //   } catch {
  //     throw Error("Failed to shorten the url");
  //   }
  const res = await fetch(`${API_URL}?format=simple&url=www.example.com`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting url");

  const { data } = await res.json();
  return data;
}
