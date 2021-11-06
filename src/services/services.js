export async function getTokenAPI(data) {

  const tokenEndpoint = "http://localhost:3333/login";
    const response = await fetch(tokenEndpoint, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    if (response.statusText === "Bad Request") {
      throw new Error();
    }
    return response.json(); // parses JSON response into native JavaScript object
}

export async function getCandidatesAPI(token, validate, setIsLoggedIn) {
  const candidateEndpoint = "http://localhost:3333/api/candidates";
  const response = await fetch(candidateEndpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let result = await response.json();
  if (result === "jwt expired") {
    result = await validate(result, setIsLoggedIn);
  }

  return result;
}

export async function getSingleCandidateInfo(
  id,
  token,
  validate,
  setIsLoggedIn
) {
  const singleCandidateEndpoint = `http://localhost:3333/api/candidates/${id}`;
  const response = await fetch(singleCandidateEndpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let result = await response.json();
  if (result === "jwt expired") {
    result = await validate(result, setIsLoggedIn);
  }

  return result;
}

export async function getCandidateReportsAPI(token, validate, setIsLoggedIn) {
  const reportsEndpoint = "http://localhost:3333/api/reports";
  const response = await fetch(reportsEndpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let result = await response.json();
  console.log("result", result);
  if (result === "jwt expired") {
    result = await validate(result, setIsLoggedIn);
  }

  return result;
}
