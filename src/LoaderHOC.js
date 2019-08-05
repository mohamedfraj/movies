import React, { Component } from "react";

const LoaderHOC = (WrappedComponent) => {
    return class loaderHOC extends Component {
        render() {
            return !this.props.isloading ?
                <div className="align-spiner">
                    <div class="spinner-box">
                        <div class="pulse-container">
                            <div class="pulse-bubble pulse-bubble-1"></div>
                            <div class="pulse-bubble pulse-bubble-2"></div>
                            <div class="pulse-bubble pulse-bubble-3"></div>
                        </div>
                    </div></div> : <WrappedComponent {...this.props} />
        }
    }
}

export default LoaderHOC;