import React, { Component } from "react";

export interface IMyButton {
    text: string;
    onClick: (text: string) => void;
}

// OnClick, we want it to pass back the ButtonType

export class MyButton extends React.Component<IMyButton> {
    public render() {
        return (
            <div className="My-button" onClick={this.handleClick}>
                {this.props.text}
            </div>
        );
    }
    private handleClick = () => {
        this.props.onClick(this.props.text);
    };
}
