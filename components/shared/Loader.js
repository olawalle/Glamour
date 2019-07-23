import React from "react";
import {
  Dimmer,
  Loader as SemanticLoader

} from "semantic-ui-react";

const Loader = (props) => {
  return (
    <div
      style={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      }}
    >
      <Dimmer active inverted>
        <SemanticLoader inverted></SemanticLoader>
      </Dimmer>
    </div>
  );
};

export default Loader
