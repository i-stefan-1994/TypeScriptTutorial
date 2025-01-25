"use strict";
class Instagram {
    constructor(cameraMode, filter, burst, ownProperty) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.ownProperty = ownProperty;
    }
    getSepia() {
        throw new Error("Method not implemented.");
    }
    getReelTime() {
        throw new Error("Method not implemented.");
    }
}
