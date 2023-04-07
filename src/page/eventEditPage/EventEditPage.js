import React from "react";
import RequireAuth from "../../auth/RequireAuth";
import EditForm from "../../component/editForm/EditForm";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Loading from "../../component/shared/loading/Loading";

const EventEditPage = () => {
  const { id } = useParams();
  const [uniqueEvent, uniqueEventLoading] = useFetch({
    api: "events",
    parameter: id,
  });

  if (uniqueEventLoading) {
    return <Loading />;
  }
  return (
    <RequireAuth>
      <EditForm data={uniqueEvent.data} />
    </RequireAuth>
  );
};

export default EventEditPage;
