/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({ api, parameter, query }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetchData, setRefetchData] = useState(false);

  let uri;
  if (parameter) {
    uri = `${process.env.REACT_APP_API_URL}/${api}/${parameter}`;
  } else if (query) {
    const email = query?.email ? query.email : "";
    const search = query.search ? query.search : "";
    const page = query.page ? query.page : "";
    const rsvp = query.rsvp ? query.rsvp : "";

    uri = `${process.env.REACT_APP_API_URL}/${api}?${
      email && `email=${email}&`
    }${search && `search=${search}&`}${rsvp && `rsvp=${rsvp}`}${
      page && `page=${page}`
    }`;
  } else {
    uri = `${process.env.REACT_APP_API_URL}/${api}`;
  }

  useEffect(() => {
    axios
      .get(uri)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [uri, refetchData]);
  const refetch = () => setRefetchData((prevState) => !prevState);
  return [data, loading, refetch];
};

export default useFetch;
