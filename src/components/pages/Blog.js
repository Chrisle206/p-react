import React from 'react';

export default function Blog() {
  return (
    <div>
      <h1>Project Page</h1>
      <div class="grid d-flex flex-wrap" id='work'>
                <div>
                <section><h3>Project1: Anime Search Engine</h3>
                <a href="https://github.com/UWHuskie/Project-AnimeSE">Github-repo: Project-AnimeSE</a>
                <a href="https://uwhuskie.github.io/Project-AnimeSE/">Website: Project-AnimeSE/</a></section>
                <section><h3>Project2: Ponder Social Media Platform</h3>
                    <a href="https://github.com/Chrisle206/ponder">Github-repo: Ponder</a>
                    <a href="https://pacific-ravine-12135.herokuapp.com/">Website: Ponder</a></section>
                </div>
                <div class="g-col-6 p-2">
                    <figure class="card">
                        <img src="./assets/images/computer.jpg" alt=""></img>
                        <section class="small-card">
                            <h3>Surf Report</h3>
                            <p>Mern Stack</p>
                        </section>
                    </figure>
                </div>

                <div class="g-col-6 p-2">
                    <figure class="card">
                        <img src="./assets/images/bigstock.jpg" alt=""></img>
                        <section class="small-card">
                            <h3>LED Wall</h3>
                            <p>node/Iot</p>
                        </section>
                    </figure>
                </div>

                <div class="g-col-6 p-2">
                    <figure class="card">
                        <img src="./assets/images/earth.jpg" alt=""></img>
                        <section class="small-card">
                            <h3>Calculator</h3>
                            <p>React/JavaScript/CSS</p>
                        </section>
                    </figure>
                </div>
                <div class="g-col-6 p-2">
                    <figure class="card">
                        <img src="./assets/images/stock.jpg" alt=""></img>
                        <section class="small-card">
                            <h3>Pastel Puzzel</h3>
                            <p>Mern Stack</p>
                        </section>
                    </figure>
                </div>
            </div>
    </div>
  );
}
