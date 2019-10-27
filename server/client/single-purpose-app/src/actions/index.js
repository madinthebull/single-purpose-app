import axios from "axios";
import Base64 from "base-64";

export const AUTH_USER = "auth_user";
export const CREATE_ENTRY = "create_entry";
export const FETCH_ENTRIES = "fetch_entries";

// for db
const ROOT_URL =
  "https://dev-fatcat.pantheonsite.io/entity/node?_format=hal_json";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, X-Authentication"
};

export function auth_user() {
  const tok = "fatcat:fatcat";
  const hash = Base64.encode(tok);
  const Basic = "Basic " + hash;
  const request = axios
    .get('/user/login?_format=json',
      { headers:
        {
          Authorization: Basic,
          'Content-Type': 'application/json',
          CORS_HEADERS
        },
      })
    .then(function(response) {
      console.log('response.data', response.data);
      console.log('response.headers', response.headers["Authorization"]);
    })
    .catch(err => console.log(err));

  return {
    type: AUTH_USER,
    payload: request
  };
}

// export function createEntry() {
//   const request = axios.post(`${ROOT_URL}`)

//   return {
//     type: CREATE_ENTRY,
//     payload: request
//   };
// }

// // get all entries for the logged in user
// export function fetchEntries() {
//   const tok = "fatcat:fatcat";
//   const hash = Base64.encode(tok);
//   const Basic = "Basic " + hash;
//   const request = axios
//     .get(`${ROOT_URL}`, {
//       headers: {
//         Authorization: Basic,
//         "Content-Type": "application/json",
//         CORS_HEADERS
//       }
//     })
//     .then(function(response) {
//       console.log(response.data);
//       console.log(response.headers["Authorization"]);
//     })
//     .catch(err => console.log(err));

//   return {
//     type: FETCH_ENTRIES,
//     payload: request
//   };
// }
