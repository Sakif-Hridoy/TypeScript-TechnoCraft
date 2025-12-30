abstract class MediaPlayer{
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class SakifPlayer extends MediaPlayer{
    play(){
        console.log(`Playing Music....`)
    }
     pause(){
        console.log(`Pause Music....`)
    }
     stop(){
        console.log(`Stop Music....`)
    }
}

const playerOne = new SakifPlayer()
playerOne.play()