abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        return 8
    }
}

// const photo = new TakePhoto() - errors out since we can't instatiate abstract classes

class InstagramClone extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter);
    }

    getSepia(): void{
        console.log('Get sepia');
    }
}

const instagramPhoto = new InstagramClone('whatever', 'whatever', 3); //works since we instantiate the subclass
instagramPhoto.getReelTime(); // we call the parent class method declaration