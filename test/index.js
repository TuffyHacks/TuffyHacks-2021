/*
  Test by using `npm run serve`,
  then in another instance, use
  `npm t` to test the application.
*/

require("open-graph-scraper")({ url: "http://127.0.0.1:9000/" }, (
  error,
  results /* response */
) => {
  console.log("error:", error) // This is returns true or false. True if there was a error. The error it self is inside the results object.
  console.log("results:", results) // This contains all of the Open Graph results
  // console.log("response:", response) // This contains the HTML of page
})
