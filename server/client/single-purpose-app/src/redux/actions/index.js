import axios from "axios";

export const FETCH_ENTRIES = "fetch_entries";
export const CREATE_ENTRY = "create_entry";

const rootUrl = "https://dev-fatcat.pantheonsite.io/measurements";

// get all entries in db
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

// create new entry
export function createEntry(newEntry) {
  return {
    type: CREATE_ENTRY,
    newEntry
  }
}
