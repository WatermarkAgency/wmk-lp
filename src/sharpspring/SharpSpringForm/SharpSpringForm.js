import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const SharpSpringForm = ({
  account,
  formID,
  formDomain,
  scriptSrc,
  title,
  className
}) => {
  const embRef = useRef();
  const classes = [className];

  const empty = tar => {
    while (tar.firstChild) tar.removeChild(tar.firstChild);
    return tar;
  };

  const SSFormA = ({ account, formID, formDomain }) => {
    var ss_form = {
      account: account,
      formID: formID
    };
    ss_form.width = "100%";
    ss_form.height = "1000";
    ss_form.domain = formDomain;
    return <div id={elId} className={classes.join(" ")} ref={embRef} />;
  };

  useEffect(() => {
    const tar = embRef.current;
    empty(tar);
    const ssScript = document.createElement("script");
    ssScript.setAttribute("src", scriptSrc);
    tar.appendChild(ssScript);
    return () => empty(tar);
  }, [type, id]);
  return (
    <div ref={ref}>
      <SSFormA account={account} formID={formID} formDomain={formDomain} />
    </div>
  );
};

export default SharpSpringForm;

SharpSpringForm.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string
};

SharpSpringForm.defaultProps = {
  className: ""
};
