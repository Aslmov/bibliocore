import React from "react";
import {Header} from "./";

class Layout extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <>
                <Header></Header>
                {children}
            </>
        )
    }
}

export default  Layout