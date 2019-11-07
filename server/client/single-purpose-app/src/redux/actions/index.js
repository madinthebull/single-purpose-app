import axios from "axios";

export const FETCH_ENTRIES = "fetch_entries";
export const CREATE_ENTRY = "create_entry";

const rootUrl = "https://dev-fatcat.pantheonsite.io/";

// get all entries in db
export function fetchEntries() {
  const request = axios
    .get(`${rootUrl}measurements`, {
      headers: {
        Accept: "application/hal+json",
        Authorization: "Basic ZmF0Y2F0OmZhdGNhdA=="
      }
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });

  return {
    type: FETCH_ENTRIES,
    payload: request
  };
}

export function createEntry(newEntry) {
  const request = axios
    .post(`${rootUrl}entity/node?_format=hal_json`, {
      headers: {
        // xsrfCookieName: "XCRF-TOKEN",
        // xsrfHeaderName: "X-XCRF-TOKEN",
        "X-CSRF-TOKEN": 'YR30F-QhcFhbReKkGyghgVp2NOs4VstANtL_jOqm9VI',
        "Content-Type": "application/hal+json",
        Authorization: "Basic YWRtaW46cGFzc3dvcmQK="
      },
      // data: newEntry,
      data: {
        id: newEntry.id,
        uid: newEntry.uid,
        measurement: newEntry.measurement,
        date: newEntry.date,
      }
      // auth: {
      //   user: "fatcat",
      //   password: "fatcat"
      // }
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });

  return {
    type: CREATE_ENTRY,
    payload: request
  };
};

// create new entry
// export function createEntry(newEntry) {
//   return {
//     type: CREATE_ENTRY,
//     newEntry
//   }
// }
