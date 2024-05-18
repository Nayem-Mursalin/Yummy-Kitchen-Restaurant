import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5008",
});

const useaxiosPublic = () => {
  return axiosPublic;
};

export default useaxiosPublic;
