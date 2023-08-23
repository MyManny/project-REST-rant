const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/images/steam-coffee.jpg" alt="pouring coffee" />
                </div>
                <div>
                  Photo by <a href="https://unsplash.com/@devintavery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Devin Avery</a> on <a href="https://unsplash.com/photos/5iRgh_G0eRY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home

