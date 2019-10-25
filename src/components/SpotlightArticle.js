import React from 'react'

const SpotlightArticle = () => (
    <section className="section spotlight-article">
        <h2>Featured Article</h2>
        <div className="container">
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">The Ultimate Guide to Personal Productivity</p>
                </header>
                <div className="card-image">
                    <figure className="image is-16x9">
                        <img src="img/spotlight.jpg" alt="Spotlight Article" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p>By Jim Mendes | October 24, 2019</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.</p>
                        <p>Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem.</p>
                        <p>In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                        <p>Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla. Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium metus, in lacinia nulla nisl eget sapien.</p>
                        <p>Donec ut est in lectus consequat consequat. Etiam eget dui. Aliquam erat volutpat. Sed at lorem in nunc porta tristique. Proin nec augue.</p>
                        <a href="https://www.jimmendes.com">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default SpotlightArticle