//import { AppOne as App } from './AppOne';
import { AppTwo as App } from './AppTwo';

console.log(`main.ts starting ${App.name}`);
window.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
    //let app = new App(canvas);
    //app.run();
    App(canvas);
});