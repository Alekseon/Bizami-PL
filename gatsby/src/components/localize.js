import React from "react";
import PropTypes from "prop-types";
import { createLocaleTextGetter } from "../utils/languageGetter";

function localize(Component) {
  return class Localize extends React.Component {
    static propTypes = {
      data: PropTypes.object,
      pageContext: PropTypes.shape({
        locale: PropTypes.string,
      }),
    };

    constructor(props) {
      super(props);
     
      // Ustaw domyślny język, jeśli pageContext.locale jest niezdefiniowane
      const locale = props.pageContext?.locale||props.locale ;
      
      this.getLocalizedContent = createLocaleTextGetter(locale);
      const localizedData = this.getLocalizedContent(this.props.data);
      
     ;
    }

    render() {
      const localizedData = this.getLocalizedContent(this.props.data);
      
      return <Component {...this.props} data={localizedData} />;
    }
  };
}

export default localize;
