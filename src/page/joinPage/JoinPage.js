import React from "react";
import Join from "../../component/join/Join";
import UserAuth from "../../auth/UserAuth";

const JoinPage = () => {
  return (
    <UserAuth>
      <Join />
    </UserAuth>
  );
};

export default JoinPage;
