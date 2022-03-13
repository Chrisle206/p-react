import React from 'react';

export default function Projects() {
    return (
        <div>
            <h1>Project Page</h1>
            <h3>Click on image to see github page! or Click on Link to view the Website!</h3>
            <div class="grid d-flex flex-wrap" id='work'>
            <div class="g-col-6 p-2">
                <figure class="card hover">
                    <a href="https://github.com/UWHuskie/Project-AnimeSE">
                        <img src="https://www.pcworld.com/wp-content/uploads/2021/12/dscf0453_final-100797561-orig.jpg?quality=50&strip=all" alt=""></img>
                        </a>
                        <section class="small-card">
                            <h3>Project 1</h3>
                            <a href="https://uwhuskie.github.io/Project-AnimeSE/">Website: Project-AnimeSE</a>
                        </section>
                </figure>
            </div>

            <div class="g-col-6 p-2">
                <figure class="card hover">
                <a href="https://github.com/Chrisle206/ponder">
                    <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/sushi-sashimi-1296x728-header.jpg?w=1155&h=1528" alt=""></img>
                    </a>
                    <section class="small-card">
                        <h3>LED Wall</h3>
                        <a href="https://pacific-ravine-12135.herokuapp.com/">Website: Ponder Social Media</a>
                    </section>
                </figure>
            </div>

            <div class="g-col-6 p-2">
                <figure class="card">
                    <img src="https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id1047259374?k=20&m=1047259374&s=612x612&w=0&h=pt3XbBvrmiYgoYmVzsaUeXtV8vw_jJI9Ly8P7AL6Qig=" alt=""></img>
                    <section class="small-card">
                        <h3>Calculator</h3>
                        <p>React/JavaScript/CSS</p>
                    </section>
                </figure>
            </div>
            <div class="g-col-6 p-2">
                <figure class="card">
                    <img src="https://images.unsplash.com/photo-1611329857570-f02f340e7378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amlnc2F3JTIwcHV6emxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""></img>
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
