"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8;
    }
}
// const photo = new TakePhoto() - errors out since we can't instatiate abstract classes
class InstagramClone extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('Get sepia');
    }
}
const instagramPhoto = new InstagramClone('whatever', 'whatever', 3); //works since we instantiate the subclass
instagramPhoto.getReelTime(); // we call the parent class method declaration
