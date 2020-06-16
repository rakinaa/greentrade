import React from "react";

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

const CompanyProfile = ({ profile }) => {
  const companyInfo = [
    ["CEO"],
    ["sector"],
    ["exchange"],
    ["industry"],
    ["employees"],
    ["country"],
    ["city"],
    ["address"],
    ["website"],
    ["phone"],
  ];

  return (
    <div className="profile-container">
      <h3 className="profile-header">About</h3>
      <p className="profile-desc">{profile.description || "N/A"}</p>
      <div className="profile-details">
        {companyInfo.map((info) => (
          <div className="detail">
            <h3>{capitalize(info[0])}</h3>
            <p>{profile[info] || ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProfile;
