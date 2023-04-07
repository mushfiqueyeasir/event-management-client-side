import React from "react";
import RequireAuth from "../../auth/RequireAuth";
import CreateForm from "../../component/createForm/CreateForm";

const CreateEventPage = () => {
  return (
    <RequireAuth>
      <CreateForm />
    </RequireAuth>
  );
};

export default CreateEventPage;
