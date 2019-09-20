import React, { Component } from 'react';

class index extends Component {
    constructor(props) {
        super(props);
        
    }

    drawImage = () => {
        let timer = null,
            canvas = document.getElementById("myCanvas"),
            ctx = canvas.getContext("2d"),
            img = new Image(),
            width = 375,
            height = 667;
        let k = 100,
            i = 0;
            
        function repeatImage() {
            i += 1;
            if (i > k) return;
            img.src = require(`./cover/${i}.png`)
            img.onload = function() {
                ctx.drawImage(img, 0, 0, width, height)
                setTimeout(repeatImage, 40)
                // window.requestAnimationFrame(repeatImage);
            }
        }
        repeatImage()
        
    }

    componentDidMount() {
        this.drawImage()
    }
    
    render() {
        return (
            <div>
                <canvas id="myCanvas" width="375" height="667"></canvas>
            </div>
        );
    }
}

export default index;