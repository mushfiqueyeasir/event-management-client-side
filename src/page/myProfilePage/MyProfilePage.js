import React from "react";
import RequireAuth from "../../auth/RequireAuth";

const MyProfilePage = () => {
  return (
    <RequireAuth>
      <section></section>
    </RequireAuth>
  );
};

export default MyProfilePage;
