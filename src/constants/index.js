export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "44.5167",
    bl_lng: "0.6267",
    tr_lat: "55.507153",
    tr_lng: "19.597787",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": "883873c3f6msh66369b1d8262fa3p168b07jsn5a287a73e2ae",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};
export const dOptions = {
  headers: {
    "x-rapidapi-key": "883873c3f6msh66369b1d8262fa3p168b07jsn5a287a73e2ae",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};
