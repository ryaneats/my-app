import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyButton } from "./myButton";
import { ButtonType } from "./types";

interface IAppState {
    selectedButtonType: string;
}

class App extends React.Component<{}, IAppState> {
    public state: IAppState = {
        selectedButtonType: "work",
    };
    public render() {
        return (
            <div className="My-page">
                <div className="My-left-bar">
                    <MyButton text="work" onClick={this.handleClick("work")} />
                    <MyButton
                        text="hotel"
                        onClick={this.handleClick("hotel")}
                    />
                    <MyButton text="home" onClick={this.handleClick("home")} />
                    <MyButton text="gym" onClick={this.handleClick("gym")} />
                    <MyButton
                        text="cafeteria"
                        onClick={this.handleClick("cafeteria")}
                    />
                </div>
                <div className="My-right-bar">
                    <div className="My-title">
                        {this.state.selectedButtonType}
                    </div>
                    <div className="My-text">
                        {this.state.selectedButtonType}
                    </div>
                </div>
            </div>
        );
    }

    // whel handleClick is called, stores as selectedButtonType
    private handleClick = (type: string) => {
        return () => this.setState({ selectedButtonType: type });
    };
}

export default App;
