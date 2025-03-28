import React from "react";
import ReactDOM from "react-dom";
import DropIn from "braintree-web-drop-in-react";

function Example() {
  return (
    <div style={{ textAlign: "center" }}>
      <DropIn
        options={{
          authorization:
            "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiI5YTk5OGE1OWUxOWIwMjI5OGViMTlhYWRhMTBmYzQ0ZjM4YmM3ZDkxYWI2NzczZTY2MDg1YTNmOGE5MTE5MjBlfGNyZWF0ZWRfYXQ9MjAxNy0wNS0xNlQxMDoyMDoyMi4wMTU5NTc5NTMrMDAwMFx1MDAyNm1lcmNoYW50X2FjY291bnRfaWQ9NmNzaGhzNXp4dzV0cnB2c1x1MDAyNm1lcmNoYW50X2lkPWN6dGdjcnBiNXN4eGI3ajhcdTAwMjZwdWJsaWNfa2V5PWZ3bWZmOWpzOHR4cnhyNHAiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvY3p0Z2NycGI1c3h4YjdqOC9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbImN2diJdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvY3p0Z2NycGI1c3h4YjdqOC9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9jbGllbnQtYW5hbHl0aWNzLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20vY3p0Z2NycGI1c3h4YjdqOCJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjpmYWxzZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiVGFwcG9pbnRtZW50IiwiY2xpZW50SWQiOm51bGwsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOnRydWUsImVudmlyb25tZW50Ijoib2ZmbGluZSIsInVudmV0dGVkTWVyY2hhbnQiOmZhbHNlLCJicmFpbnRyZWVDbGllbnRJZCI6Im1hc3RlcmNsaWVudDMiLCJiaWxsaW5nQWdyZWVtZW50c0VuYWJsZWQiOnRydWUsIm1lcmNoYW50QWNjb3VudElkIjoiNmNzaGhzNXp4dzV0cnB2cyIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiY3p0Z2NycGI1c3h4YjdqOCIsInZlbm1vIjoib2ZmIiwiYXBwbGVQYXkiOnsic3RhdHVzIjoibW9jayIsImNvdW50cnlDb2RlIjoiVVMiLCJjdXJyZW5jeUNvZGUiOiJVU0QiLCJtZXJjaGFudElkZW50aWZpZXIiOiJtZXJjaGFudC5jb20udGFwcG9pbnRtZW50Iiwic3VwcG9ydGVkTmV0d29ya3MiOlsidmlzYSIsIm1hc3RlcmNhcmQiLCJhbWV4IiwiZGlzY292ZXIiXX0sIm1lcmNoYW50QWNjb3VudElkIjoiNmNzaGhzNXp4dzV0cnB2cyJ9",
        }}
        onError={(error) => {
          console.error(error);
        }}
        onCardBlur={(event) => {
          console.log("In Example: blur", event);
        }}
        onCardFocus={(event) => {
          console.log("In Example: focus", event);
        }}
        onCardValidityChange={(event) => {
          console.log("In Example: validityChange", event);
        }}
        onNoPaymentMethodRequestable={(event) => {
          console.log("In Example: noPaymentMethodRequestable", event);
        }}
        onPaymentMethodRequestable={(event) => {
          console.log("In Example: requestable", event);
        }}
      />
      <button>Buy Now!</button>
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById("root"));
