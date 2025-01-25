interface TakePhoto{
    cameraMode: string
    filter: string
    burst: number
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public ownProperty: boolean
    ){}
    getSepia(): void {
        throw new Error("Method not implemented.")
    }
    getReelTime(): number {
        throw new Error("Method not implemented.")
    }
}