import React from "react";

function SkeletonProfile() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  );
}

export default SkeletonProfile;
