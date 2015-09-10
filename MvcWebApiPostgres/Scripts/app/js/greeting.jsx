/**
 * Created by earl.suminda on 10/09/2015.
 */
import React from "react";

export default React.createClass({
    render: function() {
        return (
            <div className="greeting">
            Hello, {this.props.name}!
</div>
);
},
})