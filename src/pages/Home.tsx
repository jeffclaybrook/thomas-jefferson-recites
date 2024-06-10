import ReactPlayer from "react-player"
import "../styles/Home.css"

const Home = () => {
 return (
  <main className="home">
   <header>
    <div className="column">
     <h1>"...endowed by their <strong>Creator</strong><br /> with certain unalienable Rights..."</h1>
    </div>
   </header>
   <section>
    <ReactPlayer
     url="https://thomasjeffersonrecites.s3.amazonaws.com/video.mp4"
     controls
    />
   </section>
  </main>
 )
}

export default Home