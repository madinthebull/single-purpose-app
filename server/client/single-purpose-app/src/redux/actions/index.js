import axios from "axios";

export const FETCH_ENTRIES = "fetch_entries";

const rootUrl = "https://dev-fatcat.pantheonsite.io/measurements";

// get all notifications for the logged in user
export function fetchEntries() {
  const request = axios
    .get(`${rootUrl}`, {
      headers: {
        Accept: "application/hal+json",
        Authorization: "Basic ZmF0Y2F0OmZhdGNhdA=="
      }
    })

  return {
    type: FETCH_ENTRIES,
    payload: request
  };
}
