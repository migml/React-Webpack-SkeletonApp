
import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    <div>
        {(() => {
            var a: string;
            a = 'test1';
            return a;
        })()}
        <h1>test</h1>
    </div>,
    document.getElementById("root")
);